// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Certificate",
    group: "ACM",
    properties: ({}) => ({
      DomainName: "grucloud.org",
      SubjectAlternativeNames: ["grucloud.org", "*.grucloud.org"],
    }),
  },
  {
    type: "DomainName",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      DomainName: "grucloud.org",
    }),
    dependencies: ({}) => ({
      certificate: "grucloud.org",
    }),
  },
  {
    type: "Api",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      Name: "my-api",
    }),
  },
  {
    type: "Stage",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      AccessLogSettings: {
        Format:
          '$context.identity.sourceIp - - [$context.requestTime] "$context.httpMethod $context.routeKey $context.protocol" $context.status $context.responseLength $context.requestId',
      },
      StageName: "my-api-stage-dev",
    }),
    dependencies: ({}) => ({
      api: "my-api",
      logGroup: "lg-http-test",
    }),
  },
  {
    type: "Authorizer",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      Name: "authorizer-auth0",
      AuthorizerType: "JWT",
      IdentitySource: ["$request.header.Authorization"],
      JwtConfiguration: {
        Audience: ["https://api.grucloud.org"],
        Issuer: "https://dev-zojrhsju.us.auth0.com/",
      },
    }),
    dependencies: ({}) => ({
      api: "my-api",
    }),
  },
  {
    type: "ApiMapping",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      ApiMappingKey: "",
    }),
    dependencies: ({}) => ({
      domainName: "grucloud.org",
      stage: "my-api-stage-dev",
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
    dependencies: ({}) => ({
      api: "my-api",
      lambdaFunction: "my-function",
    }),
  },
  {
    type: "Route",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      AuthorizationType: "JWT",
      RouteKey: "ANY /my-function",
    }),
    dependencies: ({}) => ({
      api: "my-api",
      integration: "integration::my-api::my-function",
      authorizer: "authorizer-auth0",
    }),
  },
  {
    type: "Deployment",
    group: "ApiGatewayV2",
    dependencies: ({}) => ({
      api: "my-api",
      stage: "my-api-stage-dev",
    }),
  },
  {
    type: "LogGroup",
    group: "CloudWatchLogs",
    properties: ({}) => ({
      logGroupName: "lg-http-test",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "lambda-role",
    properties: ({}) => ({
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "",
            Effect: "Allow",
            Principal: {
              Service: `lambda.amazonaws.com`,
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
    }),
    dependencies: ({}) => ({
      policies: ["lambda-policy"],
    }),
  },
  {
    type: "Policy",
    group: "IAM",
    name: "lambda-policy",
    properties: ({}) => ({
      PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: ["logs:*"],
            Effect: "Allow",
            Resource: `*`,
          },
        ],
      },
      Path: "/",
      Description: "Allow logs",
    }),
  },
  {
    type: "Function",
    group: "Lambda",
    properties: ({ config, getId }) => ({
      Configuration: {
        FunctionName: "my-function",
        Handler: "my-function.handler",
        Runtime: "nodejs14.x",
      },
      Policy: {
        Version: "2012-10-17",
        Id: "default",
        Statement: [
          {
            Sid: "lambda-7ca7734f-45ef-4f83-a4de-917719c34d3d",
            Effect: "Allow",
            Principal: {
              Service: `apigateway.amazonaws.com`,
            },
            Action: "lambda:InvokeFunction",
            Resource: `arn:aws:lambda:${
              config.region
            }:${config.accountId()}:function:my-function`,
            Condition: {
              ArnLike: {
                "AWS:SourceArn": `${getId({
                  type: "Api",
                  group: "ApiGatewayV2",
                  name: "my-api",
                })}/*/*/my-function`,
              },
            },
          },
        ],
      },
    }),
    dependencies: ({}) => ({
      role: "lambda-role",
      apiGatewayV2s: ["my-api"],
    }),
  },
  {
    type: "HostedZone",
    group: "Route53",
    properties: ({}) => ({
      Name: "grucloud.org.",
    }),
    dependencies: ({}) => ({
      domain: "grucloud.org",
    }),
  },
  {
    type: "Record",
    group: "Route53",
    dependencies: ({}) => ({
      hostedZone: "grucloud.org.",
      certificate: "grucloud.org",
    }),
  },
  {
    type: "Record",
    group: "Route53",
    dependencies: ({}) => ({
      hostedZone: "grucloud.org.",
      apiGatewayV2DomainName: "grucloud.org",
    }),
  },
  {
    type: "Domain",
    group: "Route53Domains",
    name: "grucloud.org",
    readOnly: true,
  },
];
