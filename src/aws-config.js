// const myAppConfig = {
//   aws_appsync_graphqlEndpoint: 'https://s7jxsdcsufffviud3jy6efehii.appsync-api.us-east-1.amazonaws.com/graphql',
//   aws_appsync_region: 'us-east-1',
//   aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
//   ClientDatabasePrefix: 'todoappaws_AMAZON_COGNITO_USER_POOLS',

//   aws_project_region: 'us-east-1',
//   aws_cognito_identity_pool_id: 'us-east-1:3acd2b49-867e-4d58-9db1-4a21064556a5',
//   aws_cognito_region: 'us-east-1',
//   aws_user_pools_id: 'us-east-1_PnEmz3W4R',
//   aws_user_pools_web_client_id: '68hfg8qt8up38elibh9vv2g9um',
//   oauth: {},
// };

const myAppConfig = {
  aws_appsync_graphqlEndpoint: 'https://s7jxsdcsufffviud3jy6efehii.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  UserAgent: 'aws-amplify-cli/0.1.0',
  Version: '0.1.0',
  IdentityManager: {
    Default: {},
  },
  Auth: {
    identityPoolId: 'us-east-1:3acd2b49-867e-4d58-9db1-4a21064556a5',
    region: 'us-east-1',
    userPoolId: 'us-east-1_PnEmz3W4R',
    userPoolWebClientId: '68hfg8qt8up38elibh9vv2g9um',
  },
  AppSync: {
    API: {
      ApiUrl: 'https://s7jxsdcsufffviud3jy6efehii.appsync-api.us-east-1.amazonaws.com/graphql',
      Region: 'us-east-1',
      AuthMode: 'AMAZON_COGNITO_USER_POOLS',
      ClientDatabasePrefix: 'todoappaws_AMAZON_COGNITO_USER_POOLS',
    },
  },
  CredentialsProvider: {
    CognitoIdentity: {
      Default: {
        PoolId: 'us-east-1:3acd2b49-867e-4d58-9db1-4a21064556a5',
        Region: 'us-east-1',
      },
    },
  },
  CognitoUserPool: {
    Default: {
      PoolId: 'us-east-1_PnEmz3W4R',
      AppClientId: 'dugcsao623ibnn3hja1kadlj8',
      AppClientSecret: 'rgicjig1nnf1gd630c9b1of2tm8on4egl1k4pjarb72de0jc998',
      Region: 'us-east-1',
    },
  },
  Storage: {
    AWSS3: {
      bucket: 'todoappawsbucket-aws',
      region: 'us-east-1',
    },
  },
  S3TransferUtility: {
    Default: {
      Bucket: 'todoappawsbucket-aws',
      Region: 'us-east-1',
    },
  },
};

export default myAppConfig;
