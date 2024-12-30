# Create S3 bucket for static hosting
aws s3 mb s3://your-bucket-name --region your-region

# Enable static website hosting
aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html

# Apply bucket policy for public access
aws s3api put-bucket-policy --bucket your-bucket-name --policy file://bucket-policy.json