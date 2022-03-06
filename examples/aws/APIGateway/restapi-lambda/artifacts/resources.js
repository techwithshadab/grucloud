// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Account",
    group: "APIGateway",
    name: "default",
    dependencies: () => ({
      cloudwatchRole: "roleApiGatewayCloudWatch",
    }),
  },
  { type: "ApiKey", group: "APIGateway", name: "my-key" },
  {
    type: "RestApi",
    group: "APIGateway",
    name: "PetStore",
    properties: ({}) => ({
      apiKeySource: "HEADER",
      endpointConfiguration: {
        types: ["REGIONAL"],
      },
      schemaFile: "PetStore.oas30.json",
      deployment: {
        stageName: "dev",
      },
    }),
  },
  {
    type: "Stage",
    group: "APIGateway",
    name: "dev",
    properties: ({}) => ({
      description: "dev",
      methodSettings: {
        "*/*": {
          cacheDataEncrypted: false,
          cacheTtlInSeconds: 300,
          cachingEnabled: false,
          dataTraceEnabled: false,
          metricsEnabled: false,
          requireAuthorizationForCacheControl: true,
          throttlingBurstLimit: 5000,
          throttlingRateLimit: 10000,
          unauthorizedCacheControlHeaderStrategy:
            "SUCCEED_WITH_RESPONSE_HEADER",
        },
      },
      cacheClusterEnabled: false,
      cacheClusterSize: "0.5",
      tracingEnabled: false,
    }),
    dependencies: () => ({
      restApi: "PetStore",
    }),
  },
  {
    type: "Stage",
    group: "APIGateway",
    name: "prod",
    properties: ({}) => ({
      description: "prod",
      cacheClusterEnabled: false,
      tracingEnabled: false,
    }),
    dependencies: () => ({
      restApi: "PetStore",
    }),
  },
  { type: "LogGroup", group: "CloudWatchLogs", name: "restapi" },
  {
    type: "Role",
    group: "IAM",
    name: "roleApiGatewayCloudWatch",
    properties: ({}) => ({
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "",
            Effect: "Allow",
            Principal: {
              Service: "apigateway.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      AttachedPolicies: [
        {
          PolicyName: "AmazonAPIGatewayPushToCloudWatchLogs",
          PolicyArn:
            "arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs",
        },
      ],
    }),
  },
];
