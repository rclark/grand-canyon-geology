terraform {
  required_version = "~> 1.16"

  backend "s3" {
    bucket       = "terraform-state-815216961279-us-west-2-an"
    key          = "mgmt/grand-canyon-geology/storage.tfstate"
    region       = "us-west-2"
    use_lockfile = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.67"
    }
  }
}

# The bucket is in the management account, in us-east-1.
provider "aws" {
  region = "us-east-1"

  # Every resource names its stack, so Cost Explorer can group cost by stack.
  default_tags {
    tags = {
      Stack = "mgmt/grand-canyon-geology/storage"
    }
  }
}
