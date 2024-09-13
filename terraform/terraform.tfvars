aws_region       = "us-east-2"
ami_id           = "ami-0490fddec0cbeb88b" # Example AMI ID for Amazon Linux 2
instance_type    = "t2.micro"
key_name         = "EC2KP"
private_key_path = "./kp/EC2KP.pem"
vpc_cidr         = "10.0.0.0/16"
subnet_cidr      = "10.0.1.0/24"
env_variables = {
  MYSQL_ROOT_PASSWORD = "your_secure_password"
  MYSQL_DATABASE      = "my_database"
  MYSQL_USER          = "my_user"
  MYSQL_PASSWORD      = "my_password"
  GO_ENV              = "production"
  REACT_ENV           = "production"
  BACKEND_PORT        = "8080"
  FRONTEND_PORT       = "80"
}
ssh_private_key = <<EOF
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
EOF