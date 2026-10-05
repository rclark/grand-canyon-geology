# The grand-canyon-geology bucket holds the two map files. They're public, so
# get-data.js downloads them without credentials; update-data.js uploads new
# versions. The bucket was made by the grand-canyon-geology-bucket
# CloudFormation stack in 2020, and its settings are kept as they were.

resource "aws_s3_bucket" "geology" {
  bucket = "grand-canyon-geology"

  tags = {
    Description = "Public geology map layers"
  }
}

# Public through the bucket policy below, never through ACLs.
resource "aws_s3_bucket_public_access_block" "geology" {
  bucket = aws_s3_bucket.geology.id

  block_public_acls       = true
  ignore_public_acls      = true
  block_public_policy     = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_lifecycle_configuration" "geology" {
  bucket = aws_s3_bucket.geology.id

  # The bucket's setting from before AWS changed the default in 2024.
  transition_default_minimum_object_size = "varies_by_storage_class"

  rule {
    id     = "MDRkMWQ5NzUtMjZiMy00ZWQyLThkNGQtNDI5MmVjNGNhZjA2" # named by CloudFormation
    status = "Enabled"

    filter {
      prefix = ""
    }

    abort_incomplete_multipart_upload {
      days_after_initiation = 1
    }
  }
}

resource "aws_s3_bucket_policy" "geology" {
  bucket = aws_s3_bucket.geology.id
  policy = jsonencode({
    Version = "2008-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = "*"
      Action    = "s3:GetObject"
      Resource = [
        "${aws_s3_bucket.geology.arn}/geopolys.geojson",
        "${aws_s3_bucket.geology.arn}/geolines.geojson",
      ]
    }]
  })
}
