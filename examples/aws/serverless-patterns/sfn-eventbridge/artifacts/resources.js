// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "EventBus",
    group: "CloudWatchEvents",
    properties: ({}) => ({
      Name: "sam-app-EventBus",
    }),
  },
  {
    type: "Rule",
    group: "CloudWatchEvents",
    properties: ({}) => ({
      Description: "Send all events to CloudWatch Logs",
      EventPattern: {
        source: [
          {
            prefix: "",
          },
        ],
      },
      Name: "sam-app-EventBusLogRule-O6HEQDLDXZKV",
      State: "ENABLED",
    }),
    dependencies: ({}) => ({
      eventBus: "sam-app-EventBus",
    }),
  },
  {
    type: "Target",
    group: "CloudWatchEvents",
    properties: ({}) => ({
      Id: "CloudWatchLogTarget",
    }),
    dependencies: ({}) => ({
      rule: "sam-app-EventBusLogRule-O6HEQDLDXZKV",
      logGroup: "/aws/events/sam-app",
    }),
  },
  { type: "LogGroup", group: "CloudWatchLogs" },
  {
    type: "Role",
    group: "IAM",
    name: "sam-app-WorkflowExecutionRole-WM87YTOPGZ2D",
    properties: ({ getId }) => ({
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: `states.amazonaws.com`,
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
                Action: "events:PutEvents",
                Resource: `${getId({
                  type: "EventBus",
                  group: "CloudWatchEvents",
                  name: "sam-app-EventBus",
                })}`,
                Effect: "Allow",
              },
            ],
          },
          PolicyName: "AllowEventBridgePutEvents",
        },
      ],
    }),
    dependencies: ({}) => ({
      eventBus: "sam-app-EventBus",
    }),
  },
  {
    type: "StateMachine",
    group: "StepFunctions",
    name: "MyStateMachine-nfd2eDd0064T",
    properties: ({}) => ({
      definition: {
        StartAt: "SendCustomEvent",
        States: {
          SendCustomEvent: {
            End: true,
            Parameters: {
              Entries: [
                {
                  Detail: {
                    Message: "Hello from Step Functions!",
                  },
                  DetailType: "MyTestMessage",
                  EventBusName: "sam-app-EventBus",
                  Source: "MyTestApp",
                },
              ],
            },
            Resource: `arn:aws:states:::events:putEvents`,
            Type: "Task",
          },
        },
      },
      tags: [
        {
          key: "stateMachine:createdBy",
          value: "SAM",
        },
      ],
    }),
    dependencies: ({}) => ({
      role: "sam-app-WorkflowExecutionRole-WM87YTOPGZ2D",
    }),
  },
];
