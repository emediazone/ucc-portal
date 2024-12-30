#!/bin/bash

# Exit on error
set -e

# Load environment variables
if [ -f .env ]; then
    source .env
fi

# Set AWS region
export AWS_REGION="us-east-2"

# Set S3 bucket name
export S3_BUCKET_NAME="amplify-d26tocx92nj88b-ma-amplifydataamplifycodege-j6g2ske9yofx"

# Build the application
echo "Building application..."
npm run build

# Deploy CloudFormation stack
echo "Deploying CloudFormation stack..."
aws cloudformation deploy \
    --template-file aws/cloudformation.yml \
    --stack-name ucc-portal \
    --capabilities CAPABILITY_IAM \
    --parameter-overrides \
        BucketName=$S3_BUCKET_NAME \
    --region $AWS_REGION

# Sync with S3
echo "Deploying to S3..."
aws s3 sync dist/public s3://$S3_BUCKET_NAME/ --delete --region $AWS_REGION

# Get CloudFront distribution ID
CLOUDFRONT_DIST_ID=$(aws cloudformation describe-stacks \
    --stack-name ucc-portal \
    --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
    --output text \
    --region $AWS_REGION)

# Invalidate CloudFront cache if distribution ID is found
if [ ! -z "$CLOUDFRONT_DIST_ID" ]; then
    echo "Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DIST_ID \
        --paths "/*" \
        --region us-east-1  # CloudFront operations are always in us-east-1
fi

echo "Deployment completed successfully!"

# Print the CloudFront URL
echo "Getting CloudFront URL..."
CLOUDFRONT_URL=$(aws cloudformation describe-stacks \
    --stack-name ucc-portal \
    --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDomainName`].OutputValue' \
    --output text \
    --region $AWS_REGION)

echo "Your website is available at: https://$CLOUDFRONT_URL"