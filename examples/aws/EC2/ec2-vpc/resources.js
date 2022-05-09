// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  { type: "KeyPair", group: "EC2", name: "kp-ec2-vpc" },
  {
    type: "Volume",
    group: "EC2",
    name: "volume",
    properties: ({ config }) => ({
      Size: 5,
      VolumeType: "standard",
      AvailabilityZone: `${config.region}a`,
    }),
  },
  {
    type: "VolumeAttachment",
    group: "EC2",
    properties: ({}) => ({
      Device: "/dev/sdf",
      DeleteOnTermination: false,
    }),
    dependencies: ({}) => ({
      volume: "volume",
      instance: "web-server-ec2-vpc",
    }),
  },
  {
    type: "Vpc",
    group: "EC2",
    name: "vpc-ec2-example",
    properties: ({}) => ({
      CidrBlock: "10.1.0.0/16",
    }),
  },
  { type: "InternetGateway", group: "EC2", name: "ig" },
  {
    type: "InternetGatewayAttachment",
    group: "EC2",
    dependencies: ({}) => ({
      vpc: "vpc-ec2-example",
      internetGateway: "ig",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "subnet",
    properties: ({ config }) => ({
      CidrBlock: "10.1.0.0/24",
      AvailabilityZone: `${config.region}a`,
    }),
    dependencies: ({}) => ({
      vpc: "vpc-ec2-example",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "route-table",
    dependencies: ({}) => ({
      vpc: "vpc-ec2-example",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "route-table",
      subnet: "subnet",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      routeTable: "route-table",
      ig: "ig",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "security-group",
      Description: "Managed By GruCloud",
    }),
    dependencies: ({}) => ({
      vpc: "vpc-ec2-example",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      IpPermission: {
        FromPort: -1,
        IpProtocol: "icmp",
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
        ToPort: -1,
      },
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::vpc-ec2-example::security-group",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      IpPermission: {
        FromPort: 22,
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
        ToPort: 22,
      },
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::vpc-ec2-example::security-group",
    }),
  },
  { type: "ElasticIpAddress", group: "EC2", name: "myip" },
  {
    type: "ElasticIpAddressAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      eip: "myip",
      instance: "web-server-ec2-vpc",
    }),
  },
  {
    type: "Instance",
    group: "EC2",
    name: "web-server-ec2-vpc",
    properties: ({ config, getId }) => ({
      InstanceType: "t2.micro",
      Placement: {
        AvailabilityZone: `${config.region}a`,
      },
      NetworkInterfaces: [
        {
          DeviceIndex: 0,
          Groups: [
            `${getId({
              type: "SecurityGroup",
              group: "EC2",
              name: "sg::vpc-ec2-example::security-group",
            })}`,
          ],
          SubnetId: `${getId({
            type: "Subnet",
            group: "EC2",
            name: "subnet",
          })}`,
        },
      ],
      Image: {
        Description: "Amazon Linux 2 AMI 2.0.20211001.1 x86_64 HVM gp2",
      },
      UserData:
        "#!/bin/bash\necho \"Mounting /dev/xvdf\"\nwhile ! ls /dev/xvdf > /dev/null\ndo \n  sleep 1\ndone\nif [ `file -s /dev/xvdf | cut -d ' ' -f 2` = 'data' ]\nthen\n  echo \"Formatting /dev/xvdf\"\n  mkfs.xfs /dev/xvdf\nfi\nmkdir -p /data\nmount /dev/xvdf /data\necho /dev/xvdf /data defaults,nofail 0 2 >> /etc/fstab\n",
    }),
    dependencies: ({}) => ({
      subnets: ["subnet"],
      keyPair: "kp-ec2-vpc",
      securityGroups: ["sg::vpc-ec2-example::security-group"],
    }),
  },
];
