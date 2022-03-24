const assert = require("assert");
const { pipe, assign, map, omit, tap, get, eq, switchCase } = require("rubico");
const { defaultsDeep, append } = require("rubico/x");

const { compareAws, assignPolicyAccountAndRegion } = require("../AwsCommon");

const { SNSTopic } = require("./SNSTopic");
const { SNSSubscription } = require("./SNSSubscription");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html
const GROUP = "SNS";

const compareSNS = compareAws({});

module.exports = pipe([
  () => [
    {
      type: "Topic",
      Client: SNSTopic,
      dependencies: { key: { type: "Key", group: "KMS" } },
      propertiesDefault: {},
      omitProperties: [
        "Name",
        "Attributes.TopicArn",
        "Attributes.Owner",
        "Attributes.SubscriptionsPending",
        "Attributes.SubscriptionsDeleted",
        "Attributes.SubscriptionsConfirmed",
      ],
      filterLive: ({ providerConfig }) =>
        pipe([
          assign({
            Attributes: pipe([
              get("Attributes"),
              assign({
                Policy: pipe([
                  get("Policy"),
                  assignPolicyAccountAndRegion({ providerConfig }),
                ]),
              }),
            ]),
          }),
        ]),
    },
    {
      type: "Subscription",
      Client: SNSSubscription,
      dependencies: {
        snsTopic: { type: "Topic", group: "SNS" },
        lambdaFunction: { type: "Function", group: "Lambda" },
        sqsQueue: { type: "Queue", group: "SQS" },
      },
      propertiesDefault: {},
      omitProperties: ["Name", "TopicArn", "SubscriptionArn", "Owner"],
      inferName: ({
        properties,
        dependenciesSpec: { snsTopic, lambdaFunction, sqsQueue },
      }) =>
        pipe([
          tap(() => {
            assert(snsTopic);
          }),
          () => "subscription",
          append("::"),
          append(snsTopic),
          append("::"),
          switchCase([
            () => lambdaFunction,
            pipe([append(`lambda::${lambdaFunction}`)]),
            () => sqsQueue,
            pipe([append(`queue::${sqsQueue}`)]),
            () => {
              assert(false, "TODO: missing SNS deps");
            },
          ]),
          tap((params) => {
            assert(true);
          }),
        ])(),
      filterLive: ({ providerConfig }) =>
        pipe([
          tap((params) => {
            assert(true);
          }),
        ]),
    },
  ],
  map(
    defaultsDeep({
      group: GROUP,
      compare: compareSNS({}),
    })
  ),
]);
