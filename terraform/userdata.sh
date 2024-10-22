#!/bin/bash
# Update package lists and ensure non-interactive installation
sudo apt-get update -y
sudo apt-get upgrade -y

# Install Docker and dependencies
sudo apt-get install -y ca-certificates curl gnupg lsb-release

# Install Docker using the convenience script
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Start and enable Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Fix permissions for Docker
sudo chmod 666 /var/run/docker.sock

# Add current user to the Docker group (for future sessions)
sudo usermod -aG docker "$USER"

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Force remove any APT lock files
sudo rm -f /var/lib/apt/lists/lock
sudo rm -f /var/lib/dpkg/lock
sudo rm -f /var/lib/dpkg/lock-frontend
sudo dpkg --configure -a

# Install AWS CLIs
sudo apt install -y unzip
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

### Install CodeDeploy agent
#sudo apt-get install ruby -y
#cd /home/ubuntu
#wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
#chmod +x ./install
#sudo ./install auto
#
### Start CodeDeploy agent
#sudo service codedeploy-agent start

# Authenticate Docker to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 739275461129.dkr.ecr.us-east-1.amazonaws.com

# Pull Docker images from ECR and Docker Hub
docker pull 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:backend-latest
docker pull 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:frontend-latest
docker pull mariadb:10

# Create the 'frontendData' directory
mkdir -p /home/ubuntu/data

# Create the .env file with production environment variables
cat <<EOT > /home/ubuntu/.env
MYSQL_ROOT_PASSWORD=rootpass
MYSQL_DATABASE=personal-site-mariadb
MYSQL_USER=user
MYSQL_PASSWORD=userpass
MYSQL_PORT=3306
GO_ENV=production
VITE_APP_BACKEND_PORT=80
REACT_ENV=production
VITE_APP_FRONTEND_PORT=443
VITE_APP_FRONTEND_PROTOCOL=https
VITE_APP_BACKEND_PROTOCOL=http
VITE_APP_BASE_URI=premsanity.com
EOT

# Create the Docker Compose file
cat <<EOT > /home/ubuntu/docker-compose.yml
services:
  mysql:
    image: mariadb:10
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    volumes:
      - mysql-data:/var/lib/mysql
    networks:
      - app-network
    healthcheck:
      test: ["CMD-SHELL", "mysqladmin ping -h localhost -p\${MYSQL_ROOT_PASSWORD}"]
      interval: 10s
      timeout: 5s
      retries: 5

  backend:
    image: 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:backend-latest
    container_name: backend
    working_dir: /app
    ports:
      - "${VITE_APP_BACKEND_PORT}:${VITE_APP_BACKEND_PORT}"
    environment:
      MYSQL_HOST: mysql
      MYSQL_PORT: ${MYSQL_PORT}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      GO_ENV: ${GO_ENV}
      VITE_APP_BACKEND_PORT: ${VITE_APP_BACKEND_PORT}
      VITE_APP_FRONTEND_PORT: ${VITE_APP_FRONTEND_PORT}
    depends_on:
      mysql:
        condition: service_healthy
    networks:
      - app-network
    restart: always

  frontend:
    image: 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:frontend-latest
    container_name: frontend
    working_dir: /app
    ports:
      - "${VITE_APP_FRONTEND_PORT}:${VITE_APP_FRONTEND_PORT}"
    environment:
      REACT_ENV: ${REACT_ENV}
      FRONTEND_PORT: ${VITE_APP_FRONTEND_PORT}
      VITE_APP_BACKEND_PORT: ${VITE_APP_BACKEND_PORT}
      VITE_APP_PROTOCOL: ${VITE_APP_PROTOCOL}
      VITE_APP_BASE_URI: ${VITE_APP_BASE_URI}
    networks:
      - app-network

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

cd /home/ubuntu

docker compose up -d
