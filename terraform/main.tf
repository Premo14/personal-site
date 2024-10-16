provider "aws" {
  region = var.aws_region
}

# Security Group to allow HTTP, HTTPS, and SSH traffic
resource "aws_security_group" "allow_http_https_ssh" {
  description = "Allow HTTP, HTTPS, and SSH traffic"

  ingress {
    description = "Allow HTTP traffic"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow HTTPS traffic"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow SSH traffic"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["67.255.0.111/32"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "PersonalSite-SecurityGroup"
  }
}

resource "aws_iam_instance_profile" "PersonalSiteInstanceProfile" {
  name = "PersonalSiteInstanceProfile"
  role = "EC2AdminRole"
}

# EC2 Instance
resource "aws_instance" "PersonalSiteEC2" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name
  iam_instance_profile = aws_iam_instance_profile.PersonalSiteInstanceProfile.name

  # Increase root volume size to 20 GB
  root_block_device {
    volume_size = 20
    volume_type = "gp2" # General purpose SSD
  }

  security_groups = [aws_security_group.allow_http_https_ssh.name]

  # Render user frontendData script with SSH private key
  user_data = templatefile("userdata.sh", {
    MYSQL_ROOT_PASSWORD      = var.mysql_root_password,
    MYSQL_DATABASE           = var.mysql_database,
    MYSQL_USER               = var.mysql_user,
    MYSQL_PASSWORD           = var.mysql_password,
    MYSQL_PORT               = var.mysql_port,
    VITE_APP_FRONTEND_PORT   = var.vite_app_frontend_port,
    VITE_APP_PROTOCOL        = var.vite_app_protocol,
    VITE_APP_BASE_URI        = var.vite_app_base_uri,
    VITE_APP_BACKEND_PORT    = var.vite_app_backend_port,
    GO_ENV = var.go_env,
    REACT_ENV = var.react_env
  })

  tags = {
    Name = "PersonalSiteEC2Instance"
  }
}

# Elastic IP
resource "aws_eip" "personal_site_eip" {
  instance = aws_instance.PersonalSiteEC2.id
  domain   = "vpc"
  tags = {
    Name = "PersonalSiteEIP"
  }
}

# Associate Elastic IP with the EC2 Instance
resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.PersonalSiteEC2.id
  allocation_id = aws_eip.personal_site_eip.id
}
