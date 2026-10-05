output "description" {
  description = "What this stack is for. The footprint dashboard shows it."
  value       = "Grand Canyon geology map data"
}

output "resource_descriptions" {
  description = "What each resource that can't be tagged is for. The footprint dashboard shows these."
  value = {
    "aws_s3_bucket_public_access_block.geology"     = "Allows the public read policy"
    "aws_s3_bucket_lifecycle_configuration.geology" = "Cleans up unfinished uploads"
    "aws_s3_bucket_policy.geology"                  = "Makes the two map files public"
  }
}
