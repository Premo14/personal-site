variable "aws_region" {
  description = "The AWS region to deploy in"
  default     = "us-east-1"
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  default     = "ami-0182f373e66f89c85"
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t2.micro" # Free tier eligible
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

variable "ssh_private_key" {
  description = "The private SSH key to access GitHub"
  type        = string
  sensitive   = true  # Mark this variable as sensitive
}