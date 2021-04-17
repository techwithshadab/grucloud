---
id: AwsLoadBalancer
title: Load Balancer
---

Manage an AWS Load Balancer.

## Example:

### Load Balancer in a VPC

```js
const vpc = await provider.makeVpc({
  name: "vpc",
  properties: () => ({
    CidrBlock: "10.1.0.0/16",
  }),
});

const subnetA = await provider.makeSubnet({
  name: "subnetA",
  dependencies: { vpc },
  properties: () => ({
    CidrBlock: "10.1.0.1/24",
  }),
});

const subnetB = await provider.makeSubnet({
  name: "subnetB",
  dependencies: { vpc },
  properties: () => ({
    CidrBlock: "10.1.1.1/24",
  }),
});

const securityGroup = await provider.makeSecurityGroup({
  name: "security-group-balancer",
  dependencies: { vpc },
  properties: () => ({
    create: {
      Description: "Load Balancer Security Group",
    },
    ingress: {
      IpPermissions: [
        {
          FromPort: 80,
          IpProtocol: "tcp",
          IpRanges: [
            {
              CidrIp: "0.0.0.0/0",
            },
          ],
          Ipv6Ranges: [
            {
              CidrIpv6: "::/0",
            },
          ],
          ToPort: 80,
        },
      ],
    },
  }),
});

const loadBalancer = await provider.makeLoadBalancer({
  name: "load-balancer",
  dependencies: {
    subnets: [subnetA, subnetA],
    securityGroups: [securityGroup],
  },
});
```

## Source Code

- [module AWS EKS]()

## Dependencies

- [SecurityGroup](../EC2/SecurityGroup.md)
- [Subnet](../EC2/Subnet.md)

## List

```sh
gc l -t LoadBalancer
```

```sh
Listing resources on 2 providers: aws, k8s
✓ aws
  ✓ Initialising
  ✓ Listing 3/3
✓ k8s
  ✓ Initialising
  ✓ Listing
┌──────────────────────────────────────────────────────────────────────────────────┐
│ 1 LoadBalancer from aws                                                          │
├───────────────┬───────────────────────────────────────────────────────────┬──────┤
│ Name          │ Data                                                      │ Our  │
├───────────────┼───────────────────────────────────────────────────────────┼──────┤
│ load-balancer │ LoadBalancerArn: arn:aws:elasticloadbalancing:eu-west-2:… │ Yes  │
│               │ DNSName: load-balancer-298589237.eu-west-2.elb.amazonaws… │      │
│               │ CanonicalHostedZoneId: ZHURV8PSTC4K8                      │      │
│               │ CreatedTime: 2021-04-16T19:17:58.750Z                     │      │
│               │ LoadBalancerName: load-balancer                           │      │
│               │ Scheme: internet-facing                                   │      │
│               │ VpcId: vpc-03b8d521b703d6c46                              │      │
│               │ State:                                                    │      │
│               │   Code: active                                            │      │
│               │ Type: application                                         │      │
│               │ AvailabilityZones:                                        │      │
│               │   - ZoneName: eu-west-2a                                  │      │
│               │     SubnetId: subnet-053363a740a209ba8                    │      │
│               │     LoadBalancerAddresses: []                             │      │
│               │   - ZoneName: eu-west-2b                                  │      │
│               │     SubnetId: subnet-0a7a0a47b7130c01f                    │      │
│               │     LoadBalancerAddresses: []                             │      │
│               │ SecurityGroups:                                           │      │
│               │   - "sg-07601a1066ed23072"                                │      │
│               │ IpAddressType: ipv4                                       │      │
│               │ Tags:                                                     │      │
│               │   - Key: ManagedBy                                        │      │
│               │     Value: GruCloud                                       │      │
│               │   - Key: stage                                            │      │
│               │     Value: dev                                            │      │
│               │   - Key: projectName                                      │      │
│               │     Value: starhackit                                     │      │
│               │   - Key: CreatedByProvider                                │      │
│               │     Value: aws                                            │      │
│               │   - Key: Name                                             │      │
│               │     Value: load-balancer                                  │      │
│               │                                                           │      │
└───────────────┴───────────────────────────────────────────────────────────┴──────┘


List Summary:
Provider: k8s
┌─────────────────────────────────────────────────────────────────────────────────┐
│ k8s                                                                             │
└─────────────────────────────────────────────────────────────────────────────────┘
Provider: aws
┌─────────────────────────────────────────────────────────────────────────────────┐
│ aws                                                                             │
├────────────────────┬────────────────────────────────────────────────────────────┤
│ LoadBalancer       │ load-balancer                                              │
└────────────────────┴────────────────────────────────────────────────────────────┘
1 resource, 1 type, 2 providers
Command "gc l -t LoadBalancer" executed in 7s
```