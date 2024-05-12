# This file contains the cmd commands that I used while working... this is more like notes for cmd and aws cli

# Commands to run on Amazon AMI EC2 Instance:

# Install node version manager (nvm) by typing the following at the command line.
sudo su -
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

# Activate nvm by typing the following at the command line.
. ~/.nvm/nvm.sh

# Use nvm to install the latest version of Node.js by typing the following at the command line.
nvm install node

# Test that node and npm are installed and running correctly by typing the following at the terminal:
node -v
npm -v

# To install git, run below commands in the terminal window:
yum update -y
yum install git -y

# Just to verify if system has git installed or not, please run below command in terminal:
git --version

# Clone the repo to be deployed:
git clone https://github.com/AmanSinghBhogal/AWS-RDS-Demo.git