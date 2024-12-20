variable "aws_region" {
  description = "The AWS region to deploy in"
  default     = "us-east-1"
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  default     = "ami-0866a3c8686eaeeba"
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

variable "backend_port" {
  description = "Backend port"
  default     = 8080
}

variable "vite_app_env" {
  description = "Environment is prod or dev"
  default = "production"
}

variable "role" {
  description = "Role for EC2 instance"
}

variable "certificate_arn" {
  description = "The ARN of the SSL certificate for HTTPS"
}
