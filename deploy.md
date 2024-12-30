aws cloudformation create-stack \
  --stack-name ucc-portal \
  --template-body file://aws/cloudformation.yml \
  --parameters ParameterKey=DomainName,ParameterValue=your-domain-name