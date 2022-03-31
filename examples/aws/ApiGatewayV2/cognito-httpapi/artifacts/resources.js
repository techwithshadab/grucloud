// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Api",
    group: "ApiGatewayV2",
    name: "sam-app",
    properties: ({}) => ({
      CorsConfiguration: {
        AllowMethods: ["GET"],
        AllowOrigins: ["https://myapp.com"],
      },
      Description: "Cognito to HTTP API demo",
    }),
  },
  {
    type: "Stage",
    group: "ApiGatewayV2",
    name: "$default",
    properties: ({}) => ({
      AutoDeploy: true,
    }),
    dependencies: () => ({
      api: "sam-app",
    }),
  },
  {
    type: "Authorizer",
    group: "ApiGatewayV2",
    name: "OAuth2Authorizer",
    properties: ({}) => ({
      AuthorizerType: "JWT",
      IdentitySource: ["$request.header.Authorization"],
      JwtConfiguration: {
        Audience: ["1mo18647lsr5iee4ghabm54v7e"],
      },
    }),
    dependencies: () => ({
      api: "sam-app",
      userPool: "UserPool-3Fx2HozhHSsp",
    }),
  },
  {
    type: "Integration",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      ConnectionType: "INTERNET",
      IntegrationMethod: "POST",
      IntegrationType: "AWS_PROXY",
      PayloadFormatVersion: "2.0",
    }),
    dependencies: () => ({
      api: "sam-app",
      lambdaFunction: "sam-app-AppFunction-gKUxwsmxX2fK",
    }),
  },
  {
    type: "Route",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      AuthorizationScopes: ["email"],
      AuthorizationType: "JWT",
      RequestParameters: {},
      RouteKey: "GET /",
    }),
    dependencies: () => ({
      api: "sam-app",
      integration: "integration::sam-app::sam-app-AppFunction-gKUxwsmxX2fK",
      authorizer: "OAuth2Authorizer",
    }),
  },
  {
    type: "Deployment",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      Description:
        "Automatic deployment triggered by changes to the Api configuration",
    }),
    dependencies: () => ({
      api: "sam-app",
    }),
  },
  {
    type: "Deployment",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      Description:
        "Automatic deployment triggered by changes to the Api configuration",
      AutoDeployed: true,
    }),
    dependencies: () => ({
      api: "sam-app",
      stage: "$default",
    }),
  },
  {
    type: "UserPool",
    group: "CognitoIdentityServiceProvider",
    name: "UserPool-3Fx2HozhHSsp",
    properties: ({}) => ({
      Name: "UserPool-3Fx2HozhHSsp",
      Policies: {
        PasswordPolicy: {
          RequireLowercase: false,
          RequireNumbers: false,
          RequireSymbols: false,
          RequireUppercase: false,
        },
      },
      UsernameAttributes: ["email"],
    }),
  },
  {
    type: "UserPoolClient",
    group: "CognitoIdentityServiceProvider",
    name: "UserPoolClient-9x4glkNVEYDn",
    properties: ({}) => ({
      AllowedOAuthFlows: ["code"],
      AllowedOAuthFlowsUserPoolClient: true,
      AllowedOAuthScopes: ["email", "openid", "profile"],
      CallbackURLs: ["https://myapp.com"],
      LogoutURLs: ["https://myapp.com"],
      SupportedIdentityProviders: ["COGNITO"],
    }),
    dependencies: () => ({
      userPool: "UserPool-3Fx2HozhHSsp",
    }),
  },
  {
    type: "UserPoolDomain",
    group: "CognitoIdentityServiceProvider",
    name: "myauth840541460064",
    dependencies: () => ({
      userPool: "UserPool-3Fx2HozhHSsp",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "sam-app-AppFunctionRole-BXPIJ03LGY2Y",
    properties: ({}) => ({
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "lambda.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      AttachedPolicies: [
        {
          PolicyName: "AWSLambdaBasicExecutionRole",
          PolicyArn:
            "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
        },
      ],
      Tags: [
        {
          Key: "lambda:createdBy",
          Value: "SAM",
        },
      ],
    }),
  },
  {
    type: "Function",
    group: "Lambda",
    name: "sam-app-AppFunction-gKUxwsmxX2fK",
    properties: ({}) => ({
      Handler: "app.handler",
      PackageType: "Zip",
      Runtime: "nodejs14.x",
    }),
    dependencies: () => ({
      role: "sam-app-AppFunctionRole-BXPIJ03LGY2Y",
    }),
  },
];
