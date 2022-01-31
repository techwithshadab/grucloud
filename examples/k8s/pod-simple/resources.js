// Generated by k8s-manifest2code from aspnetapp.yaml
const assert = require("assert");
exports.createResources = ({ provider }) => {
  provider.makePod({
    properties: () => ({
      apiVersion: "v1",
      metadata: {
        name: "aspnetapp",
        labels: {
          app: "aspnetapp",
        },
      },
      spec: {
        containers: [
          {
            image: "mcr.microsoft.com/dotnet/core/samples:aspnetapp",
            name: "aspnetapp-image",
            ports: [
              {
                containerPort: 80,
                protocol: "TCP",
              },
            ],
          },
        ],
      },
    }),
  });

  provider.makeService({
    properties: () => ({
      apiVersion: "v1",
      metadata: {
        name: "aspnetapp",
      },
      spec: {
        selector: {
          app: "aspnetapp",
        },
        ports: [
          {
            protocol: "TCP",
            port: 80,
            targetPort: 80,
          },
        ],
      },
    }),
  });
};
