(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return s})),a.d(n,"default",(function(){return i}));var r=a(3),t=(a(0),a(228));const o={id:"AwsLoadBalancer",title:"Load Balancer"},c={unversionedId:"aws/resources/ELBv2/AwsLoadBalancer",id:"aws/resources/ELBv2/AwsLoadBalancer",isDocsHomePage:!1,title:"Load Balancer",description:"Manage an AWS Load Balancer.",source:"@site/docs/aws/resources/ELBv2/LoadBalancer.md",sourceDirName:"aws/resources/ELBv2",slug:"/aws/resources/ELBv2/AwsLoadBalancer",permalink:"/docs/aws/resources/ELBv2/AwsLoadBalancer",version:"current",frontMatter:{id:"AwsLoadBalancer",title:"Load Balancer"},sidebar:"docs",previous:{title:"Listener Rule",permalink:"/docs/aws/resources/ELBv2/AwsListenerRule"},next:{title:"Target Group",permalink:"/docs/aws/resources/ELBv2/AwsTargetGroup"}},s=[{value:"Example:",id:"example",children:[{value:"Load Balancer in a VPC",id:"load-balancer-in-a-vpc",children:[]},{value:"Reference an existing Load Balancer",id:"reference-an-existing-load-balancer",children:[]}]},{value:"Source Code",id:"source-code",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]}],l={toc:s};function i({components:e,...n}){return Object(t.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Manage an AWS Load Balancer."),Object(t.b)("h2",{id:"example"},"Example:"),Object(t.b)("h3",{id:"load-balancer-in-a-vpc"},"Load Balancer in a VPC"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-js"},'const vpc = provider.EC2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst subnetA = provider.EC2.makeSubnet({\n  name: "subnetA",\n  dependencies: { vpc },\n  properties: () => ({\n    CidrBlock: "10.1.0.1/24",\n  }),\n});\n\nconst subnetB = provider.EC2.makeSubnet({\n  name: "subnetB",\n  dependencies: { vpc },\n  properties: () => ({\n    CidrBlock: "10.1.1.1/24",\n  }),\n});\n\nconst securityGroup = provider.EC2.makeSecurityGroup({\n  name: "security-group-balancer",\n  dependencies: { vpc },\n  properties: () => ({\n    create: {\n      Description: "Load Balancer Security Group",\n    },\n    ingress: {\n      IpPermission: {\n        FromPort: 80,\n        IpProtocol: "tcp",\n        IpRanges: [\n          {\n            CidrIp: "0.0.0.0/0",\n          },\n        ],\n        Ipv6Ranges: [\n          {\n            CidrIpv6: "::/0",\n          },\n        ],\n        ToPort: 80,\n      },\n    },\n  }),\n});\n\nconst loadBalancer = provider.ELBv2.makeLoadBalancer({\n  name: "load-balancer",\n  dependencies: {\n    subnets: [subnetA, subnetA],\n    securityGroups: [securityGroup],\n  },\n});\n')),Object(t.b)("h3",{id:"reference-an-existing-load-balancer"},"Reference an existing Load Balancer"),Object(t.b)("p",null,"When using the ",Object(t.b)("em",{parentName:"p"},"AWS Load Balancer Controller")," to create the load balancer & associated resources, there is the need to get a reference to this load balancer. ",Object(t.b)("em",{parentName:"p"},"DNSName")," and ",Object(t.b)("em",{parentName:"p"},"CanonicalHostedZoneId")," are 2 pieces of information required to create a DNS record which maps a DNS name to the load balancer DNS name."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-js"},'const clusterName = "cluster";\nconst domainName = "test-load-balancer.grucloud.org";\n\nconst loadBalancer = provider.ELBv2.useLoadBalancer({\n  name: "load-balancer",\n  filterLives: ({ resources }) =>\n    pipe([\n      () => resources,\n      find(\n        pipe([\n          get("live.Tags"),\n          find(\n            and([\n              eq(get("Key"), "elbv2.k8s.aws/cluster"),\n              eq(get("Value"), clusterName),\n            ])\n          ),\n        ])\n      ),\n      tap((lb) => {\n        // log here\n      }),\n    ])(),\n});\n\nconst hostedZone = provider.Route53.makeHostedZone({\n  name: `${domainName}.`,\n});\n\nconst loadBalancerRecord = provider.Route53.makeRecord({\n  name: `dns-record-alias-load-balancer-${hostedZoneName}`,\n  dependencies: { hostedZone, loadBalancer },\n  properties: ({ dependencies }) => {\n    const hostname = dependencies.loadBalancer.live?.DNSName;\n    if (!hostname) {\n      return {\n        message: "loadBalancer not up yet",\n        Type: "A",\n        Name: hostedZone.name,\n      };\n    }\n    return {\n      Name: hostedZone.name,\n      Type: "A",\n      AliasTarget: {\n        HostedZoneId: dependencies.loadBalancer?.live.CanonicalHostedZoneId,\n        DNSName: `${hostname}.`,\n        EvaluateTargetHealth: false,\n      },\n    };\n  },\n});\n')),Object(t.b)("h2",{id:"source-code"},"Source Code"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/load-balancer/iac.js"},"Load Balancer Module"))),Object(t.b)("h2",{id:"dependencies"},"Dependencies"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Subnet"},"Subnet")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"/docs/aws/resources/EC2/SecurityGroup"},"SecurityGroup"))),Object(t.b)("h2",{id:"list"},"List"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t LoadBalancer\n")),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 2 providers: aws, k8s\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 3/3\n\u2713 k8s\n  \u2713 Initialising\n  \u2713 Listing\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 LoadBalancer from aws                                                          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name          \u2502 Data                                                      \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 load-balancer \u2502 LoadBalancerArn: arn:aws:elasticloadbalancing:eu-west-2:\u2026 \u2502 Yes  \u2502\n\u2502               \u2502 DNSName: load-balancer-298589237.eu-west-2.elb.amazonaws\u2026 \u2502      \u2502\n\u2502               \u2502 CanonicalHostedZoneId: ZHURV8PSTC4K8                      \u2502      \u2502\n\u2502               \u2502 CreatedTime: 2021-04-16T19:17:58.750Z                     \u2502      \u2502\n\u2502               \u2502 LoadBalancerName: load-balancer                           \u2502      \u2502\n\u2502               \u2502 Scheme: internet-facing                                   \u2502      \u2502\n\u2502               \u2502 VpcId: vpc-03b8d521b703d6c46                              \u2502      \u2502\n\u2502               \u2502 State:                                                    \u2502      \u2502\n\u2502               \u2502   Code: active                                            \u2502      \u2502\n\u2502               \u2502 Type: application                                         \u2502      \u2502\n\u2502               \u2502 AvailabilityZones:                                        \u2502      \u2502\n\u2502               \u2502   - ZoneName: eu-west-2a                                  \u2502      \u2502\n\u2502               \u2502     SubnetId: subnet-053363a740a209ba8                    \u2502      \u2502\n\u2502               \u2502     LoadBalancerAddresses: []                             \u2502      \u2502\n\u2502               \u2502   - ZoneName: eu-west-2b                                  \u2502      \u2502\n\u2502               \u2502     SubnetId: subnet-0a7a0a47b7130c01f                    \u2502      \u2502\n\u2502               \u2502     LoadBalancerAddresses: []                             \u2502      \u2502\n\u2502               \u2502 SecurityGroups:                                           \u2502      \u2502\n\u2502               \u2502   - "sg-07601a1066ed23072"                                \u2502      \u2502\n\u2502               \u2502 IpAddressType: ipv4                                       \u2502      \u2502\n\u2502               \u2502 Tags:                                                     \u2502      \u2502\n\u2502               \u2502   - Key: ManagedBy                                        \u2502      \u2502\n\u2502               \u2502     Value: GruCloud                                       \u2502      \u2502\n\u2502               \u2502   - Key: stage                                            \u2502      \u2502\n\u2502               \u2502     Value: dev                                            \u2502      \u2502\n\u2502               \u2502   - Key: projectName                                      \u2502      \u2502\n\u2502               \u2502     Value: starhackit                                     \u2502      \u2502\n\u2502               \u2502   - Key: CreatedByProvider                                \u2502      \u2502\n\u2502               \u2502     Value: aws                                            \u2502      \u2502\n\u2502               \u2502   - Key: Name                                             \u2502      \u2502\n\u2502               \u2502     Value: load-balancer                                  \u2502      \u2502\n\u2502               \u2502                                                           \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 LoadBalancer       \u2502 load-balancer                                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 2 providers\nCommand "gc l -t LoadBalancer" executed in 7s\n')))}i.isMDXComponent=!0},228:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return m}));var r=a(0),t=a.n(r);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=t.a.createContext({}),d=function(e){var n=t.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=d(e.components);return t.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},b=t.a.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=d(a),b=r,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||o;return a?t.a.createElement(m,s(s({ref:n},i),{},{components:a})):t.a.createElement(m,s({ref:n},i))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=a[i];return t.a.createElement.apply(null,c)}return t.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);