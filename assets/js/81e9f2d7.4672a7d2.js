(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return o}));var r=t(3),a=(t(0),t(228));const c={id:"ECSService",title:"Service"},i={unversionedId:"aws/resources/ECS/ECSService",id:"aws/resources/ECS/ECSService",isDocsHomePage:!1,title:"Service",description:"Manages an ECS Service.",source:"@site/docs/aws/resources/ECS/Service.md",sourceDirName:"aws/resources/ECS",slug:"/aws/resources/ECS/ECSService",permalink:"/docs/aws/resources/ECS/ECSService",version:"current",frontMatter:{id:"ECSService",title:"Service"},sidebar:"docs",previous:{title:"Cluster",permalink:"/docs/aws/resources/ECS/ECSCluster"},next:{title:"TaskDefinition",permalink:"/docs/aws/resources/ECS/ECSTaskDefinition"}},s=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],l={toc:s};function o({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Manages an ",Object(a.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/ecs/home?#/clusters"},"ECS Service"),"."),Object(a.b)("h2",{id:"sample-code"},"Sample code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'provider.ECS.makeService({\n  name: "my-service"\n  properties: () => ({\n    launchType: "EC2",\n    desiredCount: 1,\n    deploymentConfiguration: {\n      deploymentCircuitBreaker: {\n        enable: false,\n        rollback: false,\n      },\n      maximumPercent: 200,\n      minimumHealthyPercent: 100,\n    },\n    placementConstraints: [],\n    placementStrategy: [\n      {\n        type: "spread",\n        field: "attribute:ecs.availability-zone",\n      },\n      {\n        type: "spread",\n        field: "instanceId",\n      },\n    ],\n    schedulingStrategy: "REPLICA",\n    enableECSManagedTags: true,\n    enableExecuteCommand: false,\n  }),\n  dependencies: ({ resources }) => ({\n    cluster: resources.ECS.Cluster.cluster,\n    taskDefinition: resources.ECS.TaskDefinition.nginx,\n  }),\n});\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#createService-property"},"create properties"))),Object(a.b)("h2",{id:"dependencies"},"Dependencies"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./Cluster.md"},"Cluster")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./TaskDefinition.md"},"TaskDefinition"))),Object(a.b)("h2",{id:"full-examples"},"Full Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ecs/ecs-simple"},"Simple example"))),Object(a.b)("h2",{id:"list"},"List"),Object(a.b)("p",null,"The ECS services can be filtered with the ",Object(a.b)("em",{parentName:"p"},"Service")," type:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Service\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 25/25\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 ECS::Service from aws                                                       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: service-nginx                                                           \u2502\n\u2502 managedByUs: Yes                                                              \u2502\n\u2502 live:                                                                         \u2502\n\u2502   serviceArn: arn:aws:ecs:eu-west-2:840541460064:service/cluster/service-ngi\u2026 \u2502\n\u2502   serviceName: service-nginx                                                  \u2502\n\u2502   clusterArn: arn:aws:ecs:eu-west-2:840541460064:cluster/cluster              \u2502\n\u2502   loadBalancers: []                                                           \u2502\n\u2502   serviceRegistries: []                                                       \u2502\n\u2502   status: ACTIVE                                                              \u2502\n\u2502   desiredCount: 1                                                             \u2502\n\u2502   runningCount: 1                                                             \u2502\n\u2502   pendingCount: 0                                                             \u2502\n\u2502   launchType: EC2                                                             \u2502\n\u2502   taskDefinition: arn:aws:ecs:eu-west-2:840541460064:task-definition/nginx:47 \u2502\n\u2502   deploymentConfiguration:                                                    \u2502\n\u2502     deploymentCircuitBreaker:                                                 \u2502\n\u2502       enable: false                                                           \u2502\n\u2502       rollback: false                                                         \u2502\n\u2502     maximumPercent: 200                                                       \u2502\n\u2502     minimumHealthyPercent: 100                                                \u2502\n\u2502   deployments:                                                                \u2502\n\u2502     - id: ecs-svc/7147023744074056707                                         \u2502\n\u2502       status: PRIMARY                                                         \u2502\n\u2502       taskDefinition: arn:aws:ecs:eu-west-2:840541460064:task-definition/ngi\u2026 \u2502\n\u2502       desiredCount: 1                                                         \u2502\n\u2502       pendingCount: 0                                                         \u2502\n\u2502       runningCount: 1                                                         \u2502\n\u2502       failedTasks: 0                                                          \u2502\n\u2502       createdAt: 2021-09-03T13:41:13.681Z                                     \u2502\n\u2502       updatedAt: 2021-09-03T13:42:33.232Z                                     \u2502\n\u2502       launchType: EC2                                                         \u2502\n\u2502       rolloutState: COMPLETED                                                 \u2502\n\u2502       rolloutStateReason: ECS deployment ecs-svc/7147023744074056707 complet\u2026 \u2502\n\u2502   events:                                                                     \u2502\n\u2502     - id: 8d36c860-4f52-43e1-bf3a-5f47bbef71d4                                \u2502\n\u2502       createdAt: 2021-09-03T13:42:33.240Z                                     \u2502\n\u2502       message: (service service-nginx) has reached a steady state.            \u2502\n\u2502     - id: b05415fd-18e6-484c-bf97-342f1259e925                                \u2502\n\u2502       createdAt: 2021-09-03T13:42:33.239Z                                     \u2502\n\u2502       message: (service service-nginx) (deployment ecs-svc/71470237440740567\u2026 \u2502\n\u2502     - id: 17ca843b-e785-43c3-a4af-9b147f78dfa9                                \u2502\n\u2502       createdAt: 2021-09-03T13:42:22.559Z                                     \u2502\n\u2502       message: (service service-nginx) has started 1 tasks: (task c6cf491773\u2026 \u2502\n\u2502     - id: 59a6478b-ca2f-4b1f-acf8-3ca8ceb1eaa5                                \u2502\n\u2502       createdAt: 2021-09-03T13:41:21.065Z                                     \u2502\n\u2502       message: (service service-nginx) was unable to place a task because no\u2026 \u2502\n\u2502   createdAt: 2021-09-03T13:41:13.681Z                                         \u2502\n\u2502   placementConstraints: []                                                    \u2502\n\u2502   placementStrategy:                                                          \u2502\n\u2502     - type: spread                                                            \u2502\n\u2502       field: attribute:ecs.availability-zone                                  \u2502\n\u2502     - type: spread                                                            \u2502\n\u2502       field: instanceId                                                       \u2502\n\u2502   schedulingStrategy: REPLICA                                                 \u2502\n\u2502   tags:                                                                       \u2502\n\u2502     - key: gc-created-by-provider                                             \u2502\n\u2502       value: aws                                                              \u2502\n\u2502     - key: gc-managed-by                                                      \u2502\n\u2502       value: grucloud                                                         \u2502\n\u2502     - key: gc-project-name                                                    \u2502\n\u2502       value: example-grucloud-ecs-simple                                      \u2502\n\u2502     - key: gc-stage                                                           \u2502\n\u2502       value: dev                                                              \u2502\n\u2502     - key: Name                                                               \u2502\n\u2502       value: service-nginx                                                    \u2502\n\u2502   createdBy: arn:aws:iam::840541460064:root                                   \u2502\n\u2502   enableECSManagedTags: true                                                  \u2502\n\u2502   propagateTags: NONE                                                         \u2502\n\u2502   enableExecuteCommand: false                                                 \u2502\n\u2502                                                                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ECS::Service                   \u2502 service-nginx                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t Service" executed in 15s\n')))}o.isMDXComponent=!0},228:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),u=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return t?a.a.createElement(b,s(s({ref:n},o),{},{components:t})):a.a.createElement(b,s({ref:n},o))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<c;o++)i[o]=t[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);