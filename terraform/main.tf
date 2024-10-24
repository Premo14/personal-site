provider "aws" {
  region = var.aws_region
}

# Security Group to allow HTTP, HTTPS, and SSH traffic
resource "aws_security_group" "allow_http_https_ssh" {
  description = "Allow HTTP, HTTPS, and SSH traffic"
  vpc_id      = aws_vpc.personal_site_vpc.id # Ensure the security group belongs to the same VPC

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

# Create a new VPC
resource "aws_vpc" "personal_site_vpc" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "PersonalSiteVPC"
  }
}

# Create Public Subnets
resource "aws_subnet" "personal_site_subnet_1" {
  vpc_id     = aws_vpc.personal_site_vpc.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-east-1a" # Replace with your preferred availability zone

  tags = {
    Name = "PersonalSiteSubnet1"
  }
}

resource "aws_subnet" "personal_site_subnet_2" {
  vpc_id     = aws_vpc.personal_site_vpc.id
  cidr_block = "10.0.2.0/24"
  availability_zone = "us-east-1b" # Replace with your preferred availability zone

  tags = {
    Name = "PersonalSiteSubnet2"
  }
}

# Create an Internet Gateway for the VPC
resource "aws_internet_gateway" "personal_site_igw" {
  vpc_id = aws_vpc.personal_site_vpc.id

  tags = {
    Name = "PersonalSiteInternetGateway"
  }
}

# Create a Route Table
resource "aws_route_table" "personal_site_public_rt" {
  vpc_id = aws_vpc.personal_site_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.personal_site_igw.id
  }

  tags = {
    Name = "PersonalSitePublicRouteTable"
  }
}

# Associate the Route Table with the Subnets
resource "aws_route_table_association" "personal_site_rta_1" {
  subnet_id      = aws_subnet.personal_site_subnet_1.id
  route_table_id = aws_route_table.personal_site_public_rt.id
}

resource "aws_route_table_association" "personal_site_rta_2" {
  subnet_id      = aws_subnet.personal_site_subnet_2.id
  route_table_id = aws_route_table.personal_site_public_rt.id
}

# EC2 Instance
resource "aws_instance" "PersonalSiteEC2" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name
  iam_instance_profile = aws_iam_instance_profile.PersonalSiteInstanceProfile.name
  subnet_id     = aws_subnet.personal_site_subnet_1.id

  root_block_device {
    volume_size = 30
    volume_type = "gp2"
  }

  # Use security group IDs instead of names
  vpc_security_group_ids = [aws_security_group.allow_http_https_ssh.id]

  user_data = templatefile("userdata.sh", {
    MYSQL_ROOT_PASSWORD      = var.mysql_root_password,
    MYSQL_DATABASE           = var.mysql_database,
    MYSQL_USER               = var.mysql_user,
    MYSQL_PASSWORD           = var.mysql_password,
    MYSQL_PORT               = var.mysql_port,
    VITE_APP_FRONTEND_PORT   = var.vite_app_frontend_port,
    VITE_APP_PROTOCOL= var.vite_app_protocol,
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

# Application Load Balancer (ALB)
resource "aws_lb" "personal_site_alb" {
  name               = "personal-site-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.allow_http_https_ssh.id]
  subnets            = [aws_subnet.personal_site_subnet_1.id, aws_subnet.personal_site_subnet_2.id]

  enable_deletion_protection = false
  idle_timeout               = 60

  tags = {
    Name = "PersonalSiteALB"
  }
}

# Listener for HTTPS
resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.personal_site_alb.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"

  certificate_arn = var.certificate_arn # Add your certificate ARN here

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.personal_site_target_group.arn
  }
}

# Target Group for EC2 instances
resource "aws_lb_target_group" "personal_site_target_group" {
  name        = "personal-site-tg"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.personal_site_vpc.id
  target_type = "instance"

  health_check {
    interval            = 30
    path                = "/"
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
    matcher             = "200"
  }
}

# Attach EC2 instance to Target Group
resource "aws_lb_target_group_attachment" "personal_site_ec2" {
  target_group_arn = aws_lb_target_group.personal_site_target_group.arn
  target_id        = aws_instance.PersonalSiteEC2.id
  port             = 80
}

# Route 53 - Fetch hosted zone for premsanity.com
data "aws_route53_zone" "premsanity" {
  name         = "premsanity.com"  # Replace with your domain name
  private_zone = false
}

# Alias Record for premsanity.com pointing to the ALB
resource "aws_route53_record" "premsanity_com" {
  zone_id = data.aws_route53_zone.premsanity.zone_id
  name    = "premsanity.com"
  type    = "A"

  alias {
    name                   = aws_lb.personal_site_alb.dns_name
    zone_id                = aws_lb.personal_site_alb.zone_id
    evaluate_target_health = true
  }
}

# Alias Record for www.premsanity.com pointing to the ALB
resource "aws_route53_record" "www_premsanity_com" {
  zone_id = data.aws_route53_zone.premsanity.zone_id
  name    = "www.premsanity.com"
  type    = "A"

  alias {
    name                   = aws_lb.personal_site_alb.dns_name
    zone_id                = aws_lb.personal_site_alb.zone_id
    evaluate_target_health = true
  }
}

# change frontend port to 80 and backend port to 8080
# add listener rule to load balancer
# add target group to rule above on 8080
# double check local code for correct ports (80 for frontend and 8080 for backend)