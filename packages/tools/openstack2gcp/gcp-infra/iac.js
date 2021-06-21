// Generated by OpenStack2Gcp
const assert = require("assert");
const { GoogleProvider } = require("@grucloud/provider-google");

const createResources = async ({ provider }) => {
  const { stage } = provider.config;

  const rhmig = await provider.makeNetwork({
    name: "rhmig",
    properties: () => ({ autoCreateSubnetworks: false }),
  });

  const subnet_10_0_0_0_16 = await provider.makeSubNetwork({
    name: "subnet-10-0-0-0-16",
    dependencies: { network: rhmig },
    properties: () => ({
      ipCidrRange: "10.0.0.0/16",
    }),
  });

  const extraDisk = await provider.makeDisk({
    name: "extra-disk",
    properties: () => ({}),
  });

  const s1_2Uk1 = await provider.makeVmInstance({
    name: "s1-2-uk1",
    dependencies: { subNetwork: subnet_10_0_0_0_16, disks: [extraDisk] },
    properties: () => ({
      diskSizeGb: "20",
      machineType: "e2-small",
      sourceImage: "projects/centos-cloud/global/images/centos-8-v20210609",
      metadata: {
        items: [
          {
            key: "enable-oslogin",
            value: "True",
          },
        ],
      },
    }),
  });

  return {
    rhmig,
    subnet_10_0_0_0_16,
    extraDisk,
    s1_2Uk1,
  };
};

exports.createResources = createResources;

exports.createStack = async () => {
  const provider = GoogleProvider({ config: require("./config") });
  const resources = await createResources({
    provider,
  });

  return {
    provider,
    resources,
  };
};
