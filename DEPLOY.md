{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::amplify-d26tocx92nj88b-ma-amplifydataamplifycodege-j6g2ske9yofx/*",
        "arn:aws:s3:::amplify-d26tocx92nj88b-ma-amplifydataamplifycodege-j6g2ske9yofx"
      ]
    }
  ]
}