// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  { type: "EventBus", group: "CloudWatchEvents", name: "bus-test" },
  {
    type: "Rule",
    group: "CloudWatchEvents",
    name: "rule-test",
    properties: ({}) => ({
      Description: "testing rule",
      EventPattern: {
        source: ["aws.ec2"],
        "detail-type": ["EC2 Instance State-change Notification"],
      },
      State: "ENABLED",
      Tags: [
        {
          Key: "mytag",
          Value: "myvalue",
        },
      ],
    }),
  },
  {
    type: "Rule",
    group: "CloudWatchEvents",
    name: "rule-test-ec2",
    properties: ({}) => ({
      EventPattern: {
        source: ["aws.acm"],
        "detail-type": ["ACM Certificate Approaching Expiration"],
      },
      State: "ENABLED",
      Tags: [
        {
          Key: "mytag",
          Value: "myvalue",
        },
      ],
    }),
    dependencies: () => ({
      eventBus: "bus-test",
    }),
  },
];