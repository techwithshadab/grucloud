(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(201)),o={id:"AcmCertificate",title:"Certificate"},c={id:"aws/resources/ACM/AcmCertificate",isDocsHomePage:!1,title:"Certificate",description:"Provides an SSL certificate.",source:"@site/docs/aws/resources/ACM/AcmCertificate.md",permalink:"/docs/aws/resources/ACM/AcmCertificate",sidebar:"someSidebar",previous:{title:"Examples",permalink:"/docs/aws/AwsExamples"},next:{title:"Distribution",permalink:"/docs/aws/resources/CloudFront/CloudFrontDistribution"}},s=[{value:"Examples",id:"examples",children:[{value:"Create a certificate with DNS validation",id:"create-a-certificate-with-dns-validation",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"UsedBy",id:"usedby",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provides an SSL certificate."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Certificates for CloudFront must be created in the us-east-1 region only.")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"create-a-certificate-with-dns-validation"},"Create a certificate with DNS validation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const domainName = "your.domain.name.com";\n\nconst certificate = await provider.makeCertificate({\n  name: domainName,\n  properties: () => ({}),\n});\n\nconst domain = await provider.useRoute53Domain({\n  name: domainName,\n});\nconst hostedZone = await provider.makeHostedZone({\n  name: `${domainName}.`,\n  dependencies: { domain },\n});\n\nconst recordValidation = await provider.makeRoute53Record({\n  name: `certificate-validation-${domainName}.`,\n  dependencies: { hostedZone, certificate },\n  properties: ({ dependencies: { certificate } }) => {\n    const domainValidationOption =\n      certificate?.live?.DomainValidationOptions[0];\n    const record = domainValidationOption?.ResourceRecord;\n    if (domainValidationOption) {\n      assert(\n        record,\n        `missing record in DomainValidationOptions, certificate ${JSON.stringify(\n          certificate.live\n        )}`\n      );\n    }\n    return {\n      Name: record?.Name,\n      ResourceRecords: [\n        {\n          Value: record?.Value,\n        },\n      ],\n      TTL: 300,\n      Type: "CNAME",\n    };\n  },\n});\n')),Object(i.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/website-https/iac.js"}),"https static website "))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ACM.html#requestCertificate-property"}),"properties list"))),Object(i.b)("h2",{id:"usedby"},"UsedBy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../Route53/Route53HostedZone"}),"HostedZone")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../CloudFront/CloudFrontDistribution"}),"CloudFrontDistribution"))))}u.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);