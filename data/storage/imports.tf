# Taken over from the grand-canyon-geology-bucket CloudFormation stack. Delete
# this file after the import is applied.

import {
  to = aws_s3_bucket.geology
  id = "grand-canyon-geology"
}

import {
  to = aws_s3_bucket_public_access_block.geology
  id = "grand-canyon-geology"
}

import {
  to = aws_s3_bucket_lifecycle_configuration.geology
  id = "grand-canyon-geology"
}

import {
  to = aws_s3_bucket_policy.geology
  id = "grand-canyon-geology"
}
