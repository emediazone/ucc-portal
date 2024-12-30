#!/bin/bash

# Exit on error
set -e

# Load environment variables
if [ -f .env ]; then
    source .env
fi

# Check required environment variables
if [ -z "$S3_BUCKET_NAME" ]; then
    echo "Error: S3_BUCKET_NAME environment variable is required"
    exit 1
fi

if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
    echo "Error: AWS credentials are required. Make sure AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are set."
    exit 1
fi

if [ -z "$AWS_REGION" ]; then
    echo "Using default region us-east-1"
    export AWS_REGION="us-east-1"
fi

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
        DomainName=$S3_BUCKET_NAME

# Sync with S3
echo "Deploying to S3..."
aws s3 sync dist/public s3://$S3_BUCKET_NAME/ --delete

# Invalidate CloudFront cache if distribution ID is provided
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
fi

echo "Deployment completed successfully!"

# Print the CloudFront URL
echo "Getting CloudFront URL..."
CLOUDFRONT_URL=$(aws cloudformation describe-stacks \
    --stack-name ucc-portal \
    --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDomainName`].OutputValue' \
    --output text)

echo "Your website is available at: https://$CLOUDFRONT_URL"