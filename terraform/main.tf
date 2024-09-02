provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "demo_app" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name

  // Set security group to allow traffic on port 80
  vpc_security_group_ids = [aws_security_group.allow_http.id]

  user_data = file("user_data.sh")

  tags = {
    Name = "DemoAppEC2"
  }

  provisioner "file" {
    source      = "docker-compose.yml"
    destination = "/home/ec2-user/docker-compose.yml"
    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file(var.private_key_path)
      host        = self.public_ip
    }
  }

  provisioner "remote-exec" {
    inline = [
      "sudo docker-compose -f /home/ec2-user/docker-compose.yml up -d"
    ]
    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file(var.private_key_path)
      host        = self.public_ip
    }
  }
}

resource "aws_security_group" "allow_http" {
  name_prefix = "allow_http"

  ingress {
    description = "HTTP traffic"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}