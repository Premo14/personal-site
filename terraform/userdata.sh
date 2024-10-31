#!/bin/bash
# Exit immediately if a command exits with a non-zero status
set -e

# Update package lists and ensure non-interactive installation
sudo apt-get update -y && sudo apt-get upgrade -y

# Install Docker and dependencies
sudo apt-get install -y ca-certificates curl gnupg lsb-release
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh
sudo systemctl start docker && sudo systemctl enable docker
sudo chmod 666 /var/run/docker.sock
sudo usermod -aG docker "$USER"
newgrp docker

# Install AWS CLI
sudo apt install -y unzip
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip && sudo ./aws/install

# Install CodeDeploy agent (if uncommented in your script)
# sudo apt-get install -y ruby
# cd /home/ubuntu || exit
# wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install && chmod +x ./install
# sudo ./install auto && sudo service codedeploy-agent start

# Authenticate Docker to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 739275461129.dkr.ecr.us-east-1.amazonaws.com

# Pull Docker images from ECR and Docker Hub
docker pull 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:backend-latest
docker pull 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:frontend-latest
docker pull mariadb:10

mkdir -p /home/ubuntu/data

# Create a .env file with production environment variables
cat <<EOT > /home/ubuntu/.env
MYSQL_ROOT_PASSWORD=#RedHawkmariadb2001!
MYSQL_DATABASE=personal_site_mariadb
MYSQL_USER=premsanity
MYSQL_PASSWORD=#RedHawk2001!
MYSQL_PORT=3306
BACKEND_PORT=8080
VITE_APP_ENV=prod
EOT

cat <<EOT > /home/ubuntu/init.sql
CREATE DATABASE IF NOT EXISTS personal_site_mariadb;
GRANT ALL PRIVILEGES ON personal_site_mariadb.* TO 'premsanity'@'%' IDENTIFIED BY '#RedHawk2001!';
FLUSH PRIVILEGES;
EOT

# Create docker-compose.yml to define services
cat <<EOT > /home/ubuntu/docker-compose.yml
services:
  mysql:
    container_name: mysql
    image: mariadb:10
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    networks:
      - app-network
    volumes:
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
      - mysql-data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "-p ${MYSQL_ROOT_PASSWORD}"]
      interval: 10s
      timeout: 5s
      retries: 3

  backend:
    container_name: backend
    image: 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:backend-latest
    ports:
      - "8080:8080"
    environment:
      MYSQL_HOST: mysql
      MYSQL_PORT: ${MYSQL_PORT}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      BACKEND_PORT: ${BACKEND_PORT}
      VITE_APP_ENV: ${VITE_APP_ENV}
    networks:
      - app-network
    depends_on:
      - mysql
    restart: always

  frontend:
    container_name: frontend
    image: 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:frontend-latest
    ports:
      - "80:80"
    environment:
      VITE_APP_ENV: ${VITE_APP_ENV}
    networks:
      - app-network
    restart: always

volumes:
  mysql-data:
    driver: local
    driver_opts:
      type: none
      device: ./data
      o: bind

networks:
  app-network:
    driver: bridge
EOT

# Start Docker Compose
cd /home/ubuntu || exit
docker compose up -d
