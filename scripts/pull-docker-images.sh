#!/bin/bash
# Authenticate Docker to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 739275461129.dkr.ecr.us-east-1.amazonaws.com

# Pull the latest backend and frontend Docker images from ECR
docker pull 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:backend-latest
docker pull 739275461129.dkr.ecr.us-east-1.amazonaws.com/personal-site:frontend-latest

# Restart the containers to use the new images
docker compose down
docker compose up -d