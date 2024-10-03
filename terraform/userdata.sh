#!/bin/bash
# Update package index
sudo yum update -y

# Install Docker
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user

# Install Docker Compose
sudo yum install libxcrypt-compat
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install Git
sudo yum install git -y

# Set up SSH for GitHub
mkdir -p /home/ec2-user/.ssh
echo "${SSH_PRIVATE_KEY}" > /home/ec2-user/.ssh/id_rsa
chmod 600 /home/ec2-user/.ssh/id_rsa
sudo chown -R ec2-user:ec2-user /home/ec2-user/.ssh/id_rsa

# Add GitHub to known hosts to prevent SSH verification prompt
ssh-keyscan github.com >> /home/ec2-user/.ssh/known_hosts
sudo chown -R ec2-user:ec2-user /home/ec2-user/.ssh/known_hosts

# Clone the GitHub repository
cd /home/ec2-user
git clone git@github.com:Premo14/personal-site.git

# Change to the cloned directory and run Docker Compose
cd personal-site

# Make data directory for mysql
mkdir data

# Create the .env file with necessary environment variables
cat <<EOF > /home/ec2-user/personal-site/.env
MYSQL_ROOT_PASSWORD=rootpass
MYSQL_DATABASE=personal-site-mariadb
MYSQL_USER=user
MYSQL_PASSWORD=userpass
MYSQL_PORT=3306
GO_ENV=production
BACKEND_PORT=8080
REACT_ENV=production
FRONTEND_PORT=80
EOF

sudo docker-compose up -d
