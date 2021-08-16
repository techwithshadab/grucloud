const assert = require("assert");
const { GoogleProvider } = require("@grucloud/provider-google");
const hook = require("./hook");

//TODO do we use a name ?
//TODO how do we prevent being created twice
const createResources = async ({ provider, resources: { serviceAccount } }) => {
  const iamPolicy = provider.iam.makePolicy({
    name: "policy",
    dependencies: { serviceAccount },

    properties: ({ dependencies: { serviceAccount } }) => ({
      policy: {
        bindings: [
          {
            role: "roles/editor",
            members: [`serviceAccount:${serviceAccount.live?.email}`],
          },
        ],
      },
    }),
  });

  return {
    iamPolicy,
  };
};
exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(GoogleProvider, {
    config: require("./config"),
  });

  const serviceAccount = provider.iam.makeServiceAccount({
    name: `sa-example-policy`,
    properties: () => ({
      serviceAccount: {
        displayName: "SA dev",
      },
    }),
  });

  const resources = await createResources({
    provider,
    resources: { serviceAccount },
  });

  return {
    provider,
    resources,
    hooks: [hook],
  };
};
