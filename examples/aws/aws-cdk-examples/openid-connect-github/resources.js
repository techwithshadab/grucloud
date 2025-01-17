// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "OpenIDConnectProvider",
    group: "IAM",
    properties: ({}) => ({
      ClientIDList: ["sts.amazonaws.com"],
      Url: "token.actions.githubusercontent.com",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({ getId }) => ({
      RoleName: "exampleGitHubDeployRole",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Federated: `${getId({
                type: "OpenIDConnectProvider",
                group: "IAM",
                name: "oidp::token.actions.githubusercontent.com",
              })}`,
            },
            Action: "sts:AssumeRoleWithWebIdentity",
            Condition: {
              StringEquals: {
                "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
              },
            },
          },
        ],
      },
    }),
    dependencies: ({}) => ({
      openIdConnectProvider: "oidp::token.actions.githubusercontent.com",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({}) => ({
      RoleName:
        "GitHubOpenIDConnect-CustomAWSCDKOpenIdConnectProvi-ZLQBGMP1PWSP",
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
      Policies: [
        {
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Action: [
                  "iam:CreateOpenIDConnectProvider",
                  "iam:DeleteOpenIDConnectProvider",
                  "iam:UpdateOpenIDConnectProviderThumbprint",
                  "iam:AddClientIDToOpenIDConnectProvider",
                  "iam:RemoveClientIDFromOpenIDConnectProvider",
                ],
                Resource: "*",
                Effect: "Allow",
              },
            ],
          },
          PolicyName: "Inline",
        },
      ],
      AttachedPolicies: [
        {
          PolicyName: "AWSLambdaBasicExecutionRole",
          PolicyArn:
            "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
        },
      ],
    }),
  },
];
