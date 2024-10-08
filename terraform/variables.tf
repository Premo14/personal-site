variable "aws_region" {
  description = "The AWS region to deploy in"
  default     = "us-east-1"
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  default     = "ami-0e86e20dae9224db8"
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t2.micro"
}

variable "key_name" {
  description = "Name of the AWS key pair"
}

variable "private_key_path" {
  description = "Path to the private key file for SSH access"
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  default     = "10.0.0.0/16"
}

variable "subnet_cidr" {
  description = "CIDR block for the public subnet"
  default     = "10.0.1.0/24"
}

variable "mysql_root_password" {
  description = "Root password for MySQL"
  type        = string
}

variable "mysql_database" {
  description = "Database name for MySQL"
  type        = string
}

variable "mysql_user" {
  description = "MySQL user"
  type        = string
}

variable "mysql_password" {
  description = "MySQL user password"
  type        = string
}

variable "mysql_port" {
  description = "MySQL port"
  default     = 3306
}

variable "vite_app_frontend_port" {
  description = "Frontend port for Vite"
  default     = 80
}

variable "vite_app_protocol" {
  description = "Protocol for Vite app (http or https)"
  default     = "http"
}

variable "vite_app_base_uri" {
  description = "Base URI for Vite app"
  default     = "localhost"
}

variable "vite_app_backend_port" {
  description = "Backend port for Vite app"
  default     = 8080
}

variable "go_env" {
  description = "Environment in prod of dev"
  default = "production"
}

variable "react_env" {
  description = "Environment in prod of dev"
  default = "production"
}

variable "role" {
  description = "Role for EC2 instance"
}