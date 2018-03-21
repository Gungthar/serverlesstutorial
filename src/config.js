export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "serverlesstutbucket"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://2vnl87dvyj.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_vnZzDWY24",
    APP_CLIENT_ID: "3egbo2ckpm13ht0vidd7bc6a4d",
    IDENTITY_POOL_ID: "us-east-2:155b7bca-43b3-48b2-af90-d37085da99c2"
  }
};


