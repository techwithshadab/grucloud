(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),c=r(8),a=(r(0),r(201)),o={id:"S3Object",title:"S3 Object"},i={unversionedId:"aws/resources/S3/S3Object",id:"aws/resources/S3/S3Object",isDocsHomePage:!1,title:"S3 Object",description:"Manages a S3 Object",source:"@site/docs/aws/resources/S3/S3Object.md",sourceDirName:"aws/resources/S3",slug:"/aws/resources/S3/S3Object",permalink:"/docs/aws/resources/S3/S3Object",version:"current",frontMatter:{id:"S3Object",title:"S3 Object"},sidebar:"docs",previous:{title:"S3 Bucket",permalink:"/docs/aws/resources/S3/S3Bucket"},next:{title:"Requirements",permalink:"/docs/aws/AwsRequirements"}},s=[{value:"Bucket Attributes",id:"bucket-attributes",children:[{value:"Basic",id:"basic",children:[]}]},{value:"Example Code",id:"example-code",children:[]},{value:"Properties",id:"properties",children:[]}],u={toc:s};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Manages a ",Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/s3/index.html"},"S3 Object")),Object(a.b)("h2",{id:"bucket-attributes"},"Bucket Attributes"),Object(a.b)("h3",{id:"basic"},"Basic"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const s3Bucket = provider.s3.makeBucket({\n  name: `myBucket`,\n  properties: () => ({}),\n});\n\nconst s3Object = provider.s3.makeObject({\n  name: `file-test`,\n  dependencies: { bucket: s3Bucket },\n  properties: () => ({\n    ACL: "public-read",\n    ContentType: "text/plain",\n    ServerSideEncryption: "AES256",\n    Tags: [\n      {\n        Key: "Key1",\n        Value: "Value1",\n      },\n      {\n        Key: "Key2",\n        Value: "Value2",\n      },\n    ],\n    source: "examples/aws/s3/fixtures/testFile.txt",\n  }),\n});\n')),Object(a.b)("h2",{id:"example-code"},"Example Code"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/s3/s3/iac.js"},"simple example"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property"},"properties list"))))}p.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),p=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||a;return r?c.a.createElement(m,i(i({ref:t},u),{},{components:r})):c.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);