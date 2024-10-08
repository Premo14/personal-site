#!/bin/bash
set -ex

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

# Authenticate Docker to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 739275461129.dkr.ecr.us-east-1.amazonaws.com

# Pull Docker images from ECR and Docker Hub
docker pull 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:backend-latest
docker pull 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:frontend-latest
docker pull mariadb:10

# Create the 'data' directory
mkdir -p /home/ubuntu/data

# Create the .env file with production environment variables
cat <<EOT > /home/ubuntu/.env
MYSQL_ROOT_PASSWORD=prod-root-pass
MYSQL_DATABASE=prod-database-name
MYSQL_USER=prod-user
MYSQL_PASSWORD=prod-user-pass
MYSQL_PORT=3306
VITE_APP_FRONTEND_PORT=80
VITE_APP_PROTOCOL=https
VITE_APP_BASE_URI=your-domain.com
VITE_APP_BACKEND_PORT=443
GO_ENV=production
REACT_ENV=production
EOT

# Create the Docker Compose file
cat <<EOT > /home/ubuntu/docker-compose.yml
version: '3'
services:
  mysql:
    image: mariadb:10
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: \${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: \${MYSQL_DATABASE}
      MYSQL_USER: \${MYSQL_USER}
      MYSQL_PASSWORD: \${MYSQL_PASSWORD}
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
      - "\${VITE_APP_BACKEND_PORT}:\${VITE_APP_BACKEND_PORT}"
    environment:
      MYSQL_HOST: mysql
      MYSQL_PORT: \${MYSQL_PORT}
      MYSQL_USER: \${MYSQL_USER}
      MYSQL_PASSWORD: \${MYSQL_PASSWORD}
      MYSQL_DATABASE: \${MYSQL_DATABASE}
      GO_ENV: \${GO_ENV}
      VITE_APP_BACKEND_PORT: \${VITE_APP_BACKEND_PORT}
      VITE_APP_FRONTEND_PORT: \${VITE_APP_FRONTEND_PORT}
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
      - "\${VITE_APP_FRONTEND_PORT}:\${VITE_APP_FRONTEND_PORT}"
    environment:
      REACT_ENV: \${REACT_ENV}
      FRONTEND_PORT: \${VITE_APP_FRONTEND_PORT}
      VITE_APP_BACKEND_PORT: \${VITE_APP_BACKEND_PORT}
      VITE_APP_PROTOCOL: \${VITE_APP_PROTOCOL}
      VITE_APP_BASE_URI: \${VITE_APP_BASE_URI}
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

sudo docker-compose up -d
