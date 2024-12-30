# Make sure you have AWS credentials configured
aws configure

# Build the application
npm run build

# Deploy to S3
aws s3 sync dist/public s3://amplify-d26tocx92nj88b-ma-amplifydataamplifycodege-j6g2ske9yofx/ --delete

# Create CloudFront invalidation
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"