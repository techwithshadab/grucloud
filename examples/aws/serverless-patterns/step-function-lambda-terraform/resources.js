// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Rule",
    group: "CloudWatchEvents",
    properties: ({}) => ({
      Name: "stf_trigger_rule",
      ScheduleExpression: "rate(10 minutes)",
      State: "ENABLED",
    }),
  },
  {
    type: "Target",
    group: "CloudWatchEvents",
    properties: ({}) => ({
      Id: "terraform-20220421132955317100000002",
    }),
    dependencies: ({}) => ({
      rule: "stf_trigger_rule",
      role: "aws-events-invoke-StepFunction",
      sfnStateMachine: "aws-step-function-workflow",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({ getId }) => ({
      RoleName: "aws-events-invoke-StepFunction",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "",
            Effect: "Allow",
            Principal: {
              Service: ["events.amazonaws.com", "states.amazonaws.com"],
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
                Sid: "Stmt1647307985962",
                Action: ["states:StartExecution"],
                Effect: "Allow",
                Resource: `${getId({
                  type: "StateMachine",
                  group: "StepFunctions",
                  name: "aws-step-function-workflow",
                })}`,
              },
            ],
          },
          PolicyName: "state_execution_policy",
        },
      ],
    }),
    dependencies: ({}) => ({
      stateMachines: ["aws-step-function-workflow"],
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({}) => ({
      RoleName: "aws-lambda-role-example",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "",
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
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({ config }) => ({
      RoleName: "aws-stf-role",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "StepFunctionAssumeRole",
            Effect: "Allow",
            Principal: {
              Service: "states.amazonaws.com",
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
                Action: ["lambda:InvokeFunction"],
                Effect: "Allow",
                Resource: `arn:aws:lambda:${
                  config.region
                }:${config.accountId()}:function:aws_lambda_example`,
              },
            ],
          },
          PolicyName: "aws-stf-policy",
        },
      ],
    }),
  },
  {
    type: "Function",
    group: "Lambda",
    properties: ({}) => ({
      Configuration: {
        Environment: {
          Variables: {
            application_name: "aws_lambda_example",
            env: "dev",
          },
        },
        FunctionName: "aws_lambda_example",
        Handler: "lambda.lambda_handler",
        Runtime: "python3.7",
      },
    }),
    dependencies: ({}) => ({
      role: "aws-lambda-role-example",
    }),
  },
  {
    type: "StateMachine",
    group: "StepFunctions",
    properties: ({ config }) => ({
      definition: {
        Comment: "A description of my state machine",
        StartAt: "TriggerLambda",
        States: {
          TriggerLambda: {
            Type: "Task",
            Resource: "arn:aws:states:::lambda:invoke",
            OutputPath: "$.Payload",
            Parameters: {
              "Payload.$": "$",
              FunctionName: `arn:aws:lambda:${
                config.region
              }:${config.accountId()}:function:aws_lambda_example`,
            },
            Retry: [
              {
                ErrorEquals: [
                  "Lambda.ServiceException",
                  "Lambda.AWSLambdaException",
                  "Lambda.SdkClientException",
                ],
                IntervalSeconds: 1,
                MaxAttempts: 6,
                BackoffRate: 2,
              },
            ],
            Next: "Choice",
          },
          Choice: {
            Type: "Choice",
            Choices: [
              {
                Variable: "$.status",
                StringEquals: "Success",
                Next: "Pass",
              },
            ],
            Default: "Fail",
          },
          Pass: {
            Type: "Pass",
            End: true,
          },
          Fail: {
            Type: "Fail",
          },
        },
      },
      name: "aws-step-function-workflow",
    }),
    dependencies: ({}) => ({
      role: "aws-stf-role",
      lambdaFunctions: ["aws_lambda_example"],
    }),
  },
];
