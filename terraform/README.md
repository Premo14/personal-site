## Steps to Generate an Ed25519 SSH Key Pair

####  In a terminal window, run the following command:

``
ssh-keygen -t ed25519 -C "your_email@example.com"
``

## DO NOT ACCEPT THE DEFAULTS WITHOUT READING

#### If you accept the defaults, it may overwrite you existing private and public key pair.  The first option is to specify a name.  Specify a name like `<account-name>-ec2kp` or whatever will help you idenitify the keypair for its intended purpose.

#### Also specify a custom directory as part of the file name for the key instead of saving it to you user's .ssh home folder.

#### You can accept the rest of the defaults 

#### This will generate the following two files:


- Private Key: Saved to the specified file (e.g., id_ed25519).
- Public Key: Saved with the same name, but with a .pub extension (e.g., id_ed25519.pub).

#### Once you have generated the Ed25519 key pair, you can use it in your Terraform setup:

#### 1. Add the Public Key to GitHub: Copy the contents of the public key (id_ed25519.pub) and add it to your GitHub account under Settings > SSH and GPG keys > New SSH Key.

#### 2. Update Terraform to Use the Private Key by adding the output of:
```
cat <name of your private key above>
```
#### to the terraform.tfvars file as the value of `ssh_private_key` variable.

#### After performing these steps, you should be able to perform a `terraform apply` to deploy the site. 