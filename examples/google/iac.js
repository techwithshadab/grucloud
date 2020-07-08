const GoogleProvider = require("@grucloud/core").GoogleProvider;

const createStack = async ({ config }) => {
  // Create GCP provider
  const provider = await GoogleProvider({ name: "google", config });
  // Allocate public Ip address
  const ip = await provider.makeAddress({ name: "ip-webserver" });
  // Allocate a server
  const server = await provider.makeVmInstance({
    name: "web-server",
    dependencies: { ip },
    properties: () => ({
      diskSizeGb: "20",
      machineType: "f1-micro",
      sourceImage:
        "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",
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

  return { providers: [provider] };
};

module.exports = createStack;
