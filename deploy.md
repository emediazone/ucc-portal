# Deployment Guide for United Corgi Commonwealth

## AWS Deployment Steps

### Prerequisites
1. AWS Account with appropriate permissions
2. AWS CLI installed and configured
3. S3 bucket created for hosting
4. CloudFront distribution (optional, but recommended)

### Deployment Steps

1. Build the project:
```bash
npm run build
```

2. Deploy to S3:
```bash
aws s3 sync dist/public s3://your-bucket-name --delete
```

3. Invalidate CloudFront cache (if using CloudFront):
```bash
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### Additional Setup

#### S3 Bucket Policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

#### S3 Static Website Hosting
1. Enable static website hosting in your S3 bucket
2. Set index.html as both the Index and Error document
3. Note the website endpoint URL

#### CloudFront Setup (Recommended)
1. Create a new CloudFront distribution
2. Use the S3 website endpoint as the origin
3. Configure HTTPS and custom domain if needed
4. Set default root object to index.html
5. Configure error pages to redirect to index.html for SPA routing
