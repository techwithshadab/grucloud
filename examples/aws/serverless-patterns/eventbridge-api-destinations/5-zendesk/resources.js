// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Connection",
    group: "CloudWatchEvents",
    properties: ({}) => ({
      AuthParameters: {
        BasicAuthParameters: {
          Username: "username",
          Password: process.env.MY_ZENDESK_CONNECTION_72_YZ_HUVUNZ_II_PASSWORD,
        },
      },
      AuthorizationType: "BASIC",
      Description: "My connection with a username and password",
      Name: "MyZendeskConnection-72YzHuvunzIi",
    }),
  },
  {
    type: "EventBus",
    group: "CloudWatchEvents",
    properties: ({}) => ({
      Name: "MyZendeskEventBus",
    }),
  },
  {
    type: "Queue",
    group: "SQS",
    properties: ({}) => ({
      QueueName: "sam-app-MyDLQueue-CW2qOFZz1Ml3",
    }),
  },
];
