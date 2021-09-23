(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(233)),c={id:"DynamoDBTable",title:"Table"},l={unversionedId:"aws/resources/DynamoDB/DynamoDBTable",id:"aws/resources/DynamoDB/DynamoDBTable",isDocsHomePage:!1,title:"Table",description:"Manages an DynamoDB Table.",source:"@site/docs/aws/resources/DynamoDB/Table.md",sourceDirName:"aws/resources/DynamoDB",slug:"/aws/resources/DynamoDB/DynamoDBTable",permalink:"/docs/aws/resources/DynamoDB/DynamoDBTable",version:"current",frontMatter:{id:"DynamoDBTable",title:"Table"},sidebar:"docs",previous:{title:"LogGroup",permalink:"/docs/aws/resources/CloudWatchLogs/CloudWatchLogGroup"},next:{title:"EC2 Instance",permalink:"/docs/aws/resources/EC2/EC2"}},i=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Manages an ",Object(o.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/dynamodbv2/home?#tables"},"DynamoDB Table"),"."),Object(o.b)("h2",{id:"sample-code"},"Sample code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'provider.DynamoDB.makeTable({\n  name: "myTable"\n  properties: () => ({\n    AttributeDefinitions: [\n      {\n        AttributeName: "Id",\n        AttributeType: "S",\n      },\n    ],\n    KeySchema: [\n      {\n        AttributeName: "Id",\n        KeyType: "HASH",\n      },\n    ],\n    ProvisionedThroughput: {\n      ReadCapacityUnits: 5,\n      WriteCapacityUnits: 5,\n    },\n    Tags: [\n      {\n        Key: "TOTOKEY",\n        Value: "TOTO",\n      },\n    ],\n  }),\n});\n')),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property"},"create properties"))),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../KMS/KmsKey"},"KMS Key"))),Object(o.b)("h2",{id:"full-examples"},"Full Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/dynamodb/table"},"Simple table"))),Object(o.b)("h2",{id:"list"},"List"),Object(o.b)("p",null,"The tables can be filtered with the ",Object(o.b)("em",{parentName:"p"},"Table")," type:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Table\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"")))}p.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);