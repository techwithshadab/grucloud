// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Topic",
    group: "SNS",
    name: "sam-app-MySnsTopic-7ZOEL49PL4BA",
    properties: ({ config, getId }) => ({
      Attributes: {
        Policy: {
          Version: "2008-10-17",
          Id: "__default_policy_ID",
          Statement: [
            {
              Sid: "__default_statement_ID",
              Effect: "Allow",
              Principal: {
                AWS: "*",
              },
              Action: [
                "SNS:GetTopicAttributes",
                "SNS:SetTopicAttributes",
                "SNS:AddPermission",
                "SNS:RemovePermission",
                "SNS:DeleteTopic",
                "SNS:Subscribe",
                "SNS:ListSubscriptionsByTopic",
                "SNS:Publish",
              ],
              Resource: `${getId({
                type: "Topic",
                group: "SNS",
                name: "sam-app-MySnsTopic-7ZOEL49PL4BA",
              })}`,
              Condition: {
                StringEquals: {
                  "AWS:SourceOwner": `${config.accountId()}`,
                },
              },
            },
          ],
        },
        DisplayName: "",
        DeliveryPolicy: {
          http: {
            defaultHealthyRetryPolicy: {
              minDelayTarget: 20,
              maxDelayTarget: 20,
              numRetries: 3,
              numMaxDelayRetries: 0,
              numNoDelayRetries: 0,
              numMinDelayRetries: 0,
              backoffFunction: "linear",
            },
            disableSubscriptionOverrides: false,
          },
        },
      },
    }),
  },
  {
    type: "Queue",
    group: "SQS",
    name: "sam-app-MySqsQueue-KMqXSqHYypds",
    properties: ({ getId }) => ({
      Attributes: {
        Policy: {
          Version: "2012-10-17",
          Statement: [
            {
              Sid: "Allow SNS publish to SQS",
              Effect: "Allow",
              Principal: {
                Service: `sns.amazonaws.com`,
              },
              Action: "SQS:SendMessage",
              Resource: `${getId({
                type: "Queue",
                group: "SQS",
                name: "sam-app-MySqsQueue-KMqXSqHYypds",
              })}`,
              Condition: {
                ArnEquals: {
                  "aws:SourceArn": `${getId({
                    type: "Topic",
                    group: "SNS",
                    name: "sam-app-MySnsTopic-7ZOEL49PL4BA",
                  })}`,
                },
              },
            },
          ],
        },
      },
    }),
  },
];