(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{150:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(8),a=(t(0),t(233)),i={id:"Repository",title:"Repository"},c={unversionedId:"aws/resources/ECR/Repository",id:"aws/resources/ECR/Repository",isDocsHomePage:!1,title:"Repository",description:"Manages a Docker Repository",source:"@site/docs/aws/resources/ECR/Repository.md",sourceDirName:"aws/resources/ECR",slug:"/aws/resources/ECR/Repository",permalink:"/docs/aws/resources/ECR/Repository",version:"current",frontMatter:{id:"Repository",title:"Repository"},sidebar:"docs",previous:{title:"Registry",permalink:"/docs/aws/resources/ECR/Registry"},next:{title:"CapacityProvider",permalink:"/docs/aws/resources/ECS/ECSCapacityProvider"}},s=[{value:"Sample Code",id:"sample-code",children:[{value:"Full Examples",id:"full-examples",children:[]},{value:"Properties",id:"properties",children:[]}]}],p={toc:s};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Manages a ",Object(a.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/ecr/home"},"Docker Repository")),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'provider.ECR.makeRepository({\n  name: "my-repo",\n  properties: ({ config }) => ({\n    imageTagMutability: "MUTABLE",\n    imageScanningConfiguration: {\n      scanOnPush: false,\n    },\n    encryptionConfiguration: {\n      encryptionType: "AES256",\n    },\n    policyText: {\n      Version: "2008-10-17",\n      Statement: [\n        {\n          Sid: "AllowPushPull",\n          Effect: "Allow",\n          Principal: {\n            AWS: "arn:aws:iam::840541460064:root",\n          },\n          Action: [\n            "ecr:GetDownloadUrlForLayer",\n            "ecr:BatchGetImage",\n            "ecr:BatchCheckLayerAvailability",\n            "ecr:PutImage",\n            "ecr:InitiateLayerUpload",\n            "ecr:UploadLayerPart",\n            "ecr:CompleteLayerUpload",\n          ],\n        },\n      ],\n    },\n    lifecyclePolicyText: {\n      rules: [\n        {\n          rulePriority: 1,\n          description: "Expire images older than 14 days",\n          selection: {\n            tagStatus: "untagged",\n            countType: "sinceImagePushed",\n            countUnit: "days",\n            countNumber: 14,\n          },\n          action: {\n            type: "expire",\n          },\n        },\n      ],\n    },\n  }),\n});\n')),Object(a.b)("h3",{id:"full-examples"},"Full Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ecr/repository"},"Registry and Repository"))),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#createRepository-property"},"properties list"))))}l.isMDXComponent=!0},233:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,d=u["".concat(i,".").concat(m)]||u[m]||y[m]||a;return t?o.a.createElement(d,c(c({ref:r},p),{},{components:t})):o.a.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);