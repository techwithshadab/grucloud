const assert = require("assert");
const { K8sProvider } = require("../K8sProvider");
const {
  testPlanDeploy,
  testPlanDestroy,
} = require("@grucloud/core/test/E2ETestUtils");

describe.skip("K8sCustomResourceDefinition", async function () {
  let config;
  let provider;
  let namespace;
  const myNamespace = "test-crd";

  let customResourceDefinition;
  const customResourceDefinitionName = "targetgroupbindings.elbv2.k8s.aws";

  let mutatingWebhookConfiguration;
  const mutatingWebhookConfigurationName = "aws-load-balancer-webhook";

  const types = [
    "Namespace",
    "CustomResourceDefinition",
    "MutatingWebhookConfiguration",
  ];

  before(async function () {
    provider = K8sProvider({
      config: () => ({}),
    });

    await provider.start();
    namespace = await provider.makeNamespace({
      name: myNamespace,
    });

    mutatingWebhookConfiguration = await provider.makeMutatingWebhookConfiguration(
      {
        name: mutatingWebhookConfigurationName,
        properties: () => ({
          metadata: {
            annotations: {
              "cert-manager.io/inject-ca-from":
                "kube-system/aws-load-balancer-serving-cert",
            },
            creationTimestamp: null,
            labels: {
              "app.kubernetes.io/name": "aws-load-balancer-controller",
            },
          },
          webhooks: [
            {
              clientConfig: {
                caBundle: "Cg==",
                service: {
                  name: "aws-load-balancer-webhook-service",
                  namespace: "kube-system",
                  path: "/mutate-v1-pod",
                },
              },
              failurePolicy: "Fail",
              name: "mpod.elbv2.k8s.aws",
              namespaceSelector: {
                matchExpressions: [
                  {
                    key: "elbv2.k8s.aws/pod-readiness-gate-inject",
                    operator: "In",
                    values: ["enabled"],
                  },
                ],
              },
              rules: [
                {
                  apiGroups: [""],
                  apiVersions: ["v1"],
                  operations: ["CREATE"],
                  resources: ["pods"],
                },
              ],
              sideEffects: "None",
            },
            {
              clientConfig: {
                caBundle: "Cg==",
                service: {
                  name: "aws-load-balancer-webhook-service",
                  namespace: "kube-system",
                  path: "/mutate-elbv2-k8s-aws-v1beta1-targetgroupbinding",
                },
              },
              failurePolicy: "Fail",
              name: "mtargetgroupbinding.elbv2.k8s.aws",
              rules: [
                {
                  apiGroups: ["elbv2.k8s.aws"],
                  apiVersions: ["v1beta1"],
                  operations: ["CREATE", "UPDATE"],
                  resources: ["targetgroupbindings"],
                },
              ],
              sideEffects: "None",
            },
          ],
        }),
      }
    );
    customResourceDefinition = await provider.makeCustomResourceDefinition({
      name: customResourceDefinitionName,
      properties: ({}) => ({
        metadata: {
          annotations: {
            "controller-gen.kubebuilder.io/version": "v0.4.0",
          },
          creationTimestamp: null,
          labels: {
            "app.kubernetes.io/name": "aws-load-balancer-controller",
          },
        },
        spec: {
          additionalPrinterColumns: [
            {
              JSONPath: ".spec.serviceRef.name",
              description: "The Kubernetes Service's name",
              name: "SERVICE-NAME",
              type: "string",
            },
            {
              JSONPath: ".spec.serviceRef.port",
              description: "The Kubernetes Service's port",
              name: "SERVICE-PORT",
              type: "string",
            },
            {
              JSONPath: ".spec.targetType",
              description: "The AWS TargetGroup's TargetType",
              name: "TARGET-TYPE",
              type: "string",
            },
            {
              JSONPath: ".spec.targetGroupARN",
              description: "The AWS TargetGroup's Amazon Resource Name",
              name: "ARN",
              priority: 1,
              type: "string",
            },
            {
              JSONPath: ".metadata.creationTimestamp",
              name: "AGE",
              type: "date",
            },
          ],
          group: "elbv2.k8s.aws",
          names: {
            categories: ["all"],
            kind: "TargetGroupBinding",
            listKind: "TargetGroupBindingList",
            plural: "targetgroupbindings",
            singular: "targetgroupbinding",
          },
          scope: "Namespaced",
          subresources: {
            status: {},
          },
          validation: {
            openAPIV3Schema: {
              description:
                "TargetGroupBinding is the Schema for the TargetGroupBinding API",
              properties: {
                apiVersion: {
                  description:
                    "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
                  type: "string",
                },
                kind: {
                  description:
                    "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
                  type: "string",
                },
                metadata: {
                  type: "object",
                },
                spec: {
                  description:
                    "TargetGroupBindingSpec defines the desired state of TargetGroupBinding",
                  properties: {
                    networking: {
                      description:
                        "networking provides the networking setup for ELBV2 LoadBalancer to access targets in TargetGroup.",
                      properties: {
                        ingress: {
                          description:
                            "List of ingress rules to allow ELBV2 LoadBalancer to access targets in TargetGroup.",
                          items: {
                            properties: {
                              from: {
                                description:
                                  "List of peers which should be able to access the targets in TargetGroup. At least one NetworkingPeer should be specified.",
                                items: {
                                  description:
                                    "NetworkingPeer defines the source/destination peer for networking rules.",
                                  properties: {
                                    ipBlock: {
                                      description:
                                        "IPBlock defines an IPBlock peer. If specified, none of the other fields can be set.",
                                      properties: {
                                        cidr: {
                                          description:
                                            "CIDR is the network CIDR. Both IPV4 or IPV6 CIDR are accepted.",
                                          type: "string",
                                        },
                                      },
                                      required: ["cidr"],
                                      type: "object",
                                    },
                                    securityGroup: {
                                      description:
                                        "SecurityGroup defines a SecurityGroup peer. If specified, none of the other fields can be set.",
                                      properties: {
                                        groupID: {
                                          description:
                                            "GroupID is the EC2 SecurityGroupID.",
                                          type: "string",
                                        },
                                      },
                                      required: ["groupID"],
                                      type: "object",
                                    },
                                  },
                                  type: "object",
                                },
                                type: "array",
                              },
                              ports: {
                                description:
                                  "List of ports which should be made accessible on the targets in TargetGroup. If ports is empty or unspecified, it defaults to all ports with TCP.",
                                items: {
                                  properties: {
                                    port: {
                                      anyOf: [
                                        {
                                          type: "integer",
                                        },
                                        {
                                          type: "string",
                                        },
                                      ],
                                      description:
                                        "The port which traffic must match. When NodePort endpoints(instance TargetType) is used, this must be a numerical port. When Port endpoints(ip TargetType) is used, this can be either numerical or named port on pods. if port is unspecified, it defaults to all ports.",
                                      "x-kubernetes-int-or-string": true,
                                    },
                                    protocol: {
                                      description:
                                        "The protocol which traffic must match. If protocol is unspecified, it defaults to TCP.",
                                      enum: ["TCP", "UDP"],
                                      type: "string",
                                    },
                                  },
                                  type: "object",
                                },
                                type: "array",
                              },
                            },
                            required: ["from", "ports"],
                            type: "object",
                          },
                          type: "array",
                        },
                      },
                      type: "object",
                    },
                    serviceRef: {
                      description:
                        "serviceRef is a reference to a Kubernetes Service and ServicePort.",
                      properties: {
                        name: {
                          description: "Name is the name of the Service.",
                          type: "string",
                        },
                        port: {
                          anyOf: [
                            {
                              type: "integer",
                            },
                            {
                              type: "string",
                            },
                          ],
                          description: "Port is the port of the ServicePort.",
                          "x-kubernetes-int-or-string": true,
                        },
                      },
                      required: ["name", "port"],
                      type: "object",
                    },
                    targetGroupARN: {
                      description:
                        "targetGroupARN is the Amazon Resource Name (ARN) for the TargetGroup.",
                      type: "string",
                    },
                    targetType: {
                      description:
                        "targetType is the TargetType of TargetGroup. If unspecified, it will be automatically inferred.",
                      enum: ["instance", "ip"],
                      type: "string",
                    },
                  },
                  required: ["serviceRef", "targetGroupARN"],
                  type: "object",
                },
                status: {
                  description:
                    "TargetGroupBindingStatus defines the observed state of TargetGroupBinding",
                  properties: {
                    observedGeneration: {
                      description:
                        "The generation observed by the TargetGroupBinding controller.",
                      format: "int64",
                      type: "integer",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
          },
          version: "v1alpha1",
          versions: [
            {
              name: "v1alpha1",
              served: true,
              storage: false,
            },
            {
              name: "v1beta1",
              served: true,
              storage: true,
            },
          ],
        },
        status: {
          acceptedNames: {
            kind: "",
            plural: "",
          },
          conditions: [],
          storedVersions: [],
        },
      }),
    });
  });
  after(async () => {});

  it("k8s crd apply and destroy", async function () {
    try {
      await testPlanDeploy({ provider, types });

      await testPlanDestroy({ provider, types });
    } catch (error) {
      throw error;
    }
  });
});