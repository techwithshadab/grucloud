const assert = require("assert");
const { pipe, assign, map, omit, tap, get, eq, switchCase } = require("rubico");
const { defaultsDeep, append, includes, when } = require("rubico/x");

const { compareAws, assignPolicyAccountAndRegion } = require("../AwsCommon");

const { SNSTopic } = require("./SNSTopic");
const { SNSSubscription } = require("./SNSSubscription");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html
const GROUP = "SNS";

const compareSNS = compareAws({});

const omitDefaultPolicy = when(
  eq(get("Policy.Id"), "__default_policy_ID"),
  omit(["Policy"])
);

module.exports = pipe([
  () => [
    {
      type: "Topic",
      Client: SNSTopic,
      dependencies: {
        kmsKey: {
          type: "Key",
          group: "KMS",
          dependencyId: ({ lives, config }) => get("Attributes.KmsMasterKeyId"),
        },
      },
      omitProperties: [
        "Name",
        "Attributes.TopicArn",
        "Attributes.Owner",
        "Attributes.SubscriptionsPending",
        "Attributes.SubscriptionsDeleted",
        "Attributes.SubscriptionsConfirmed",
      ],
      propertiesDefault: {
        Attributes: {
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
      },
      compare: compareSNS({
        filterLive: () =>
          pipe([
            assign({
              Attributes: pipe([get("Attributes"), omitDefaultPolicy]),
            }),
          ]),
      }),
      filterLive: ({ providerConfig, lives }) =>
        pipe([
          assign({
            Attributes: pipe([
              get("Attributes"),
              assign({
                Policy: pipe([
                  get("Policy"),
                  assignPolicyAccountAndRegion({ providerConfig, lives }),
                ]),
              }),
              omitDefaultPolicy,
            ]),
          }),
        ]),
    },
    {
      type: "Subscription",
      Client: SNSSubscription,
      //TODO firehose
      dependencies: {
        snsTopic: {
          type: "Topic",
          group: "SNS",
          dependencyId: ({ lives, config }) => get("TopicArn"),
        },
        lambdaFunction: {
          type: "Function",
          group: "Lambda",
          dependencyId: ({ lives, config }) =>
            pipe([
              switchCase([
                eq(get("Protocol"), "lambda"),
                get("Endpoint"),
                () => undefined,
              ]),
            ]),
        },
        sqsQueue: {
          type: "Queue",
          group: "SQS",
          dependencyId: ({ lives, config }) =>
            pipe([
              switchCase([
                eq(get("Protocol"), "sqs"),
                get("Endpoint"),
                () => undefined,
              ]),
            ]),
        },
      },
      ignoreResource: () =>
        pipe([
          tap((params) => {
            assert(true);
          }),
          eq(get("live.SubscriptionArn"), "PendingConfirmation"),
        ]),
      omitProperties: [
        "Name",
        "TopicArn",
        "SubscriptionArn",
        "Owner",
        "SubscriptionPrincipal",
      ],
      inferName: ({
        properties,
        dependenciesSpec: { snsTopic, lambdaFunction, sqsQueue },
      }) =>
        pipe([
          tap(() => {
            assert(snsTopic);
            assert(properties);
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
            pipe([
              append(properties.Protocol),
              append("::"),
              append(properties.Endpoint),
            ]),
            // () => {
            //   assert(false, "TODO: missing SNS deps");
            // },
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
          when(
            ({ Protocol }) =>
              pipe([() => ["lambda", "sqs"], includes(Protocol)])(),
            omit(["Protocol", "Endpoint"])
          ),
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
