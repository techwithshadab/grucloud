(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),s=(n(0),n(233)),u={id:"SQSQueue",title:"SQS Queue"},o={unversionedId:"aws/resources/SQS/SQSQueue",id:"aws/resources/SQS/SQSQueue",isDocsHomePage:!1,title:"SQS Queue",description:"Manages an SQS Queue.",source:"@site/docs/aws/resources/SQS/Queue.md",sourceDirName:"aws/resources/SQS",slug:"/aws/resources/SQS/SQSQueue",permalink:"/docs/aws/resources/SQS/SQSQueue",version:"current",frontMatter:{id:"SQSQueue",title:"SQS Queue"},sidebar:"docs",previous:{title:"S3 Object",permalink:"/docs/aws/resources/S3/S3Object"},next:{title:"Parameter",permalink:"/docs/aws/resources/SSM/SSMParameter"}},i=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],c={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Manages an ",Object(s.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/sqs/v2/home?#/"},"SQS Queue"),"."),Object(s.b)("h2",{id:"sample-code"},"Sample code"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'provider.SQS.makeQueue({\n  name: "my-queue",\n  properties: () => ({\n    Attributes: {\n      VisibilityTimeout: "30",\n      MaximumMessageSize: "262144",\n      MessageRetentionPeriod: "345600",\n      DelaySeconds: "0",\n      ReceiveMessageWaitTimeSeconds: "0",\n    },\n    tags: {\n      "my-tag": "my-value",\n    },\n  }),\n});\n')),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#createQueue-property"},"create properties"))),Object(s.b)("h2",{id:"full-examples"},"Full Examples"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/sqs/sqs-simple"},"Simple example"))),Object(s.b)("h2",{id:"list"},"List"),Object(s.b)("p",null,"The queues can be filtered with the ",Object(s.b)("em",{parentName:"p"},"Queue")," type:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Queue\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 1/1\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 SQS::Queue from aws                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: my-queue                                                               \u2502\n\u2502 managedByUs: Yes                                                             \u2502\n\u2502 live:                                                                        \u2502\n\u2502   QueueUrl: https://sqs.eu-west-2.amazonaws.com/840541460064/my-queue        \u2502\n\u2502   Attributes:                                                                \u2502\n\u2502     QueueArn: arn:aws:sqs:eu-west-2:840541460064:my-queue                    \u2502\n\u2502     ApproximateNumberOfMessages: 0                                           \u2502\n\u2502     ApproximateNumberOfMessagesNotVisible: 0                                 \u2502\n\u2502     ApproximateNumberOfMessagesDelayed: 0                                    \u2502\n\u2502     CreatedTimestamp: 1632404531                                             \u2502\n\u2502     LastModifiedTimestamp: 1632404531                                        \u2502\n\u2502     VisibilityTimeout: 30                                                    \u2502\n\u2502     MaximumMessageSize: 262144                                               \u2502\n\u2502     MessageRetentionPeriod: 345600                                           \u2502\n\u2502     DelaySeconds: 0                                                          \u2502\n\u2502     ReceiveMessageWaitTimeSeconds: 0                                         \u2502\n\u2502   tags:                                                                      \u2502\n\u2502     gc-managed-by: grucloud                                                  \u2502\n\u2502     gc-project-name: lambda-sqs-nodejs                                       \u2502\n\u2502     gc-stage: dev                                                            \u2502\n\u2502     my-tag: my-value                                                         \u2502\n\u2502     gc-created-by-provider: aws                                              \u2502\n\u2502     Name: my-queue                                                           \u2502\n\u2502                                                                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 SQS::Queue \u2502 my-queue                                                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t Queue" executed in 4s\n')))}l.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(u,".").concat(b)]||p[b]||m[b]||s;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,u=new Array(s);u[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var c=2;c<s;c++)u[c]=n[c];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);