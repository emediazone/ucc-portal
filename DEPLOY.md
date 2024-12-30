# Deployment Guide for United Corgi Commonwealth Portal

## Prerequisites

1. AWS Account with appropriate permissions
2. GitHub repository secrets configured:
   - `AWS_ROLE_ARN`: ARN of the IAM role for GitHub Actions
   - `CLOUDFRONT_DISTRIBUTION_ID`: The CloudFront distribution ID

## Deployment Process

The application is automatically deployed when changes are pushed to the main branch. The deployment process:

1. Builds the React application
2. Syncs the built files to S3 bucket
3. Creates a CloudFront invalidation to update the CDN

### Manual Deployment

If you need to deploy manually:

```bash
# Make sure you have AWS credentials configured
aws configure

# Build the application
npm run build

# Deploy to S3
aws s3 sync dist/public s3://amplify-d26tocx92nj88b-ma-amplifydataamplifycodege-j6g2ske9yofx/ --delete

# Create CloudFront invalidation
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### AWS Resources

- Region: us-east-2
- S3 Bucket: amplify-d26tocx92nj88b-ma-amplifydataamplifycodege-j6g2ske9yofx
- CloudFront: Configured to serve the S3 bucket content

## Troubleshooting

1. Check GitHub Actions logs for deployment issues
2. Verify AWS credentials and permissions
3. Ensure all required secrets are configured in GitHub repository settings
