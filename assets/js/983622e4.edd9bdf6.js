(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),c=(n(0),n(233)),o={id:"AwsModuleHowto",title:"How to implement a new AWS Module"},l={unversionedId:"aws/howto/AwsModuleHowto",id:"aws/howto/AwsModuleHowto",isDocsHomePage:!1,title:"How to implement a new AWS Module",description:"This document will guide you through the implementation of new module for the GruCloud AWS provider.",source:"@site/docs/aws/howto/AwsModuleHowto.md",sourceDirName:"aws/howto",slug:"/aws/howto/AwsModuleHowto",permalink:"/docs/aws/howto/AwsModuleHowto",version:"current",frontMatter:{id:"AwsModuleHowto",title:"How to implement a new AWS Module"}},i=[{value:"Clone the code",id:"clone-the-code",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Module boilerplate",id:"module-boilerplate",children:[]},{value:".npmignore",id:"npmignore",children:[]},{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"config.js",id:"configjs",children:[{value:"iac.js",id:"iacjs",children:[]}]},{value:"package.json",id:"packagejson",children:[]},{value:"config.js",id:"configjs-1",children:[]},{value:"iac.js",id:"iacjs-1",children:[]},{value:"Generate the dependency graph",id:"generate-the-dependency-graph",children:[]},{value:"Running with gc",id:"running-with-gc",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This document will guide you through the implementation of new module for the ",Object(c.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@grucloud/provider-aws"},"GruCloud AWS provider"),"."),Object(c.b)("p",null,"A GruCloud module is just a bunch of functions to create a set of related resources, packaged and distributed with the node package manager NPM"),Object(c.b)("p",null,"A bunch of AWS GruCloud modules have already been crafted, check out the ",Object(c.b)("a",{parentName:"p",href:"/docs/aws/AwsModules"},"list of AWS GruCloud Module")),Object(c.b)("p",null,"Case study: VPC suited for EKS, the Amazon Elastic Kubernetes Service.\nThe following resources are required to create an EKS Cluster:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.grucloud.com/docs/aws/resources/EC2/Vpc"},"VPC")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.grucloud.com/docs/aws/resources/EC2/InternetGateway"},"Internet Gateway"),": one internet gateway attached to the VPC"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.grucloud.com/docs/aws/resources/EC2/Subnet"},"Subnet"),": 2 public and 2 private subnets belong to the VPC."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.grucloud.com/docs/aws/resources/EC2/SecurityGroup"},"SecurityGroup")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.grucloud.com/docs/aws/resources/EC2/ElasticIpAddress"},"Elastic IP Address"),": required by the NAT Gateway"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.grucloud.com/docs/aws/resources/EC2/NatGateway"},"NAT Gateway"),": a NAT gateway to allow the ec2 instances to connect to internet."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.grucloud.com/docs/aws/resources/EC2/RouteTable"},"Route Table")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.grucloud.com/docs/aws/resources/EC2/Route"},"Route"),": 3 routes for the public subnet and 3 routes for the private subnet")),Object(c.b)("p",null,"A picture is worth a thousand word, we'll be able to generate this dependency graph at the end of this tutorial:\n",Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/packages/modules/aws/vpc/example/artifacts/diagram-target.svg",alt:"Graph"})),Object(c.b)("h1",{id:"requirements"},"Requirements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"AWS account"),Object(c.b)("li",{parentName:"ul"},"AWS CLI: ",Object(c.b)("inlineCode",{parentName:"li"},"aws --version")),Object(c.b)("li",{parentName:"ul"},"AWS access and secret key"),Object(c.b)("li",{parentName:"ul"},"Configure authentication ans region with ",Object(c.b)("inlineCode",{parentName:"li"},"aws configure")),Object(c.b)("li",{parentName:"ul"},"Node 14: ",Object(c.b)("inlineCode",{parentName:"li"},"node --version")),Object(c.b)("li",{parentName:"ul"},"VS code for editing and debugging.")),Object(c.b)("h1",{id:"getting-started"},"Getting Started"),Object(c.b)("h2",{id:"clone-the-code"},"Clone the code"),Object(c.b)("p",null,"Visit the ",Object(c.b)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud"},"GruCloud github page")," and fork the monorepo."),Object(c.b)("p",null,"Clone the repository on your local machine:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:<yourusername>/grucloud.git\ncd grucloud\n")),Object(c.b)("h2",{id:"dependencies"},"Dependencies"),Object(c.b)("p",null,"Install the dependencies and run the ",Object(c.b)("em",{parentName:"p"},"bootstrap")," npm script:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm install\nnpm run bootstrap\n")),Object(c.b)("h1",{id:"aws-vpc-module"},"Aws Vpc Module"),Object(c.b)("h2",{id:"module-boilerplate"},"Module boilerplate"),Object(c.b)("p",null,"Change to the aws module directory:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"cd packages/modules/aws\n")),Object(c.b)("p",null,"Create the module directory ",Object(c.b)("em",{parentName:"p"},"vpc")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"mkdir vpc\ncd vpc\n")),Object(c.b)("p",null,"We'll create the ",Object(c.b)("em",{parentName:"p"},"package.json")," with ",Object(c.b)("inlineCode",{parentName:"p"},"npm init")),Object(c.b)("p",null,"The package name in this case is ",Object(c.b)("em",{parentName:"p"},"@grucloud/module-aws-vpc"),"."),Object(c.b)("p",null,"The entry point will be ",Object(c.b)("em",{parentName:"p"},"iac.js")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm init\n")),Object(c.b)("h2",{id:"npmignore"},".npmignore"),Object(c.b)("p",null,"This code will be published to NPM, therefore ensure ",Object(c.b)("em",{parentName:"p"},".npmignore")," excludes files and directories not needed by the published packages: logs, examples and tests."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"node_modules/\n*.log\n.vscode/\n**/test/*\nexample\n")),Object(c.b)("h2",{id:"install-dependencies"},"Install dependencies"),Object(c.b)("p",null,"Install the npm dependencies for this AWS module:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"npm install @grucloud/core @grucloud/provider-aws rubico\n")),Object(c.b)("p",null,"For testing, we'll use mocha that we install as a ",Object(c.b)("em",{parentName:"p"},"devDependencies"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"npm install -D mocha\n")),Object(c.b)("h2",{id:"configjs"},"config.js"),Object(c.b)("p",null,"Create the ",Object(c.b)("em",{parentName:"p"},"config.js")," file:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'module.exports = ({ region }) => ({\n  vpc: {\n    vpc: { name: "vpc", CidrBlock: "192.168.0.0/16", Tags },\n    internetGateway: { name: "internet-gateway" },\n    eip: { name: "eip" },\n    subnets: {\n      publicTags: [],\n      public: [\n        {\n          name: "subnet-public-1",\n          CidrBlock: "192.168.0.0/19",\n          AvailabilityZone: `${region}a`,\n        },\n        {\n          name: "subnet-public-2",\n          CidrBlock: "192.168.32.0/19",\n          AvailabilityZone: `${region}b`,\n        },\n        {\n          name: "subnet-public-3",\n          CidrBlock: "192.168.64.0/19",\n          AvailabilityZone: `${region}c`,\n        },\n      ],\n      privateTags: [],\n      private: [\n        {\n          name: "subnet-private-1",\n          CidrBlock: "192.168.96.0/19",\n          AvailabilityZone: `${region}a`,\n        },\n        {\n          name: "subnet-private-2",\n          CidrBlock: "192.168.128.0/19",\n          AvailabilityZone: `${region}b`,\n        },\n        {\n          name: "subnet-private-3",\n          CidrBlock: "192.168.160.0/19",\n          AvailabilityZone: `${region}c`,\n        },\n      ],\n    },\n  },\n});\n')),Object(c.b)("h3",{id:"iacjs"},"iac.js"),Object(c.b)("p",null,"For a module, the ",Object(c.b)("em",{parentName:"p"},"iac.js")," must exports the ",Object(c.b)("strong",{parentName:"p"},"createResources")," function which takes an already created AWS provider. This ",Object(c.b)("strong",{parentName:"p"},"createResources")," is responsible for creating VPC, subnets, internet gateway, NAT gateway and an elastic IP address."),Object(c.b)("p",null,"We'll also exports the ",Object(c.b)("em",{parentName:"p"},"config")," from here."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// TODO\n")),Object(c.b)("h1",{id:"example"},"Example"),Object(c.b)("p",null,"It is time to create an example to consume this module."),Object(c.b)("p",null,"We'll create its directory and package.json, install the dependencies, and create the ",Object(c.b)("em",{parentName:"p"},"config.js")," an ",Object(c.b)("em",{parentName:"p"},"iac.js")," file."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"mkdir example\ncd example\n")),Object(c.b)("h2",{id:"packagejson"},"package.json"),Object(c.b)("p",null,"Let's create the package.json with ",Object(c.b)("inlineCode",{parentName:"p"},"npm init"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The package name in this case is ",Object(c.b)("em",{parentName:"li"},"@grucloud/example-module-aws-vpc")),Object(c.b)("li",{parentName:"ul"},"The entry point is ",Object(c.b)("em",{parentName:"li"},"iac.js"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"npm init\n")),Object(c.b)("p",null,"This package is not meant to be pusblished to NPM, hence set the ",Object(c.b)("em",{parentName:"p"},"private")," package.json field to ",Object(c.b)("em",{parentName:"p"},"true")),Object(c.b)("p",null,"We'll install the module ",Object(c.b)("em",{parentName:"p"},"@grucloud/module-aws-vpc")," that has been implemented in the last steps:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm install @grucloud/core @grucloud/provider-aws @grucloud/module-aws-vpc\n")),Object(c.b)("h2",{id:"configjs-1"},"config.js"),Object(c.b)("p",null,"The example config is rather simple, we can set the tags for the VPCs and subnets."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const pkg = require("./package.json");\nmodule.exports = ({ region }) => ({\n  projectName: pkg.name,\n  vpc: {\n    vpc: { Tags: [] },\n    subnets: {\n      publicTags: [],\n      privateTags: [],\n    },\n  },\n});\n')),Object(c.b)("h2",{id:"iacjs-1"},"iac.js"),Object(c.b)("p",null,"The file will export the ",Object(c.b)("em",{parentName:"p"},"createStack")," function. It uses the ",Object(c.b)("em",{parentName:"p"},"createResources")," and ",Object(c.b)("em",{parentName:"p"},"config")," function from this module: ",Object(c.b)("em",{parentName:"p"},"@grucloud/module-aws-vpc"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const { AwsProvider } = require("@grucloud/provider-aws");\nconst ModuleAwsVpc = require("@grucloud/module-aws-vpc");\n// const ModuleAwsVpc = require("../iac"); When the package is not published yet.\n\nexports.createStack = async ({ createProvider }) => {\n  const provider = createProvider(AwsProvider, {\n    configs: [require("./config"), ModuleAwsVpc.config],\n  });\n  const resources = await ModuleAwsVpc.createResources({\n    provider,\n  });\n  return {\n    provider,\n    resources,\n  };\n};\n')),Object(c.b)("h2",{id:"generate-the-dependency-graph"},"Generate the dependency graph"),Object(c.b)("p",null,"Things can get quickly complicated, especially in term of dependencies. Some resources needs to created before others. Same for destruction, the order is paramount."),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"graph")," command generates a graph from the ",Object(c.b)("em",{parentName:"p"},"iac.js")," file in the form of a ",Object(c.b)("em",{parentName:"p"},".dot")," file and an SVG."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"gc graph\n")),Object(c.b)("h2",{id:"running-with-gc"},"Running with gc"),Object(c.b)("p",null,"At this stage, one can use the usual ",Object(c.b)("em",{parentName:"p"},"gc")," commands: ",Object(c.b)("em",{parentName:"p"},"plan"),", ",Object(c.b)("em",{parentName:"p"},"apply"),", ",Object(c.b)("em",{parentName:"p"},"list")," and ",Object(c.b)("em",{parentName:"p"},"destroy")),Object(c.b)("h1",{id:"testing-with-mocha"},"Testing with mocha"),Object(c.b)("p",null,"Testing the module is not an option. We'll use mocha to write and run the test suite."),Object(c.b)("p",null,"First of all create the file ",Object(c.b)("em",{parentName:"p"},".mocharc.json")," and the following content:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "watch-files": ["**/*.js"],\n  "extension": ["js"],\n  "exclude": "node_modules",\n  "reporter": "spec",\n  "timeout": 300e3,\n  "ui": "bdd",\n  "bail": false,\n  "recursive": true\n}\n')),Object(c.b)("p",null,"Now we'll add a new entry in the ",Object(c.b)("em",{parentName:"p"},"scripts")," section of our ",Object(c.b)("em",{parentName:"p"},"package.json")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'//package.json\n  "scripts": {\n    "test": "mocha \'test/**/*.test.js\'"\n  },\n')),Object(c.b)("p",null,"Finally let's create a test suite for this module.\nCreate the ",Object(c.b)("em",{parentName:"p"},"test")," directory and add ",Object(c.b)("em",{parentName:"p"},"iac.test.js")," with the following content:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'// test/iac.test.js\nconst assert = require("assert");\nconst cliCommands = require("@grucloud/core/cli/cliCommands");\nconst { createStack } = require("../example/iac");\nconst config = require("../example/config");\n\ndescribe("AWS VPC Module", async function () {\n  before(async function () {});\n  it("run workflow", async function () {\n    const infra = await createStack({ config });\n\n    await cliCommands.planDestroy({\n      infra,\n      commandOptions: { force: true },\n    });\n    await cliCommands.planApply({\n      infra,\n      commandOptions: { force: true },\n    });\n    await cliCommands.planDestroy({\n      infra,\n      commandOptions: { force: true },\n    });\n    // TODO list should be empty\n    const result = await cliCommands.list({\n      infra,\n      commandOptions: { our: true },\n    });\n    assert(result);\n  }).timeout(35 * 60e3);\n});\n')),Object(c.b)("p",null,"Ready to execute the test suite ?"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm test\n")))}p.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);