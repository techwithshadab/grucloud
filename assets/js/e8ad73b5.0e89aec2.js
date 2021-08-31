(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(222));const c={id:"AwsRequirements",title:"Requirements"},s={unversionedId:"aws/AwsRequirements",id:"aws/AwsRequirements",isDocsHomePage:!1,title:"Requirements",description:"Ensure that you have the AWS necessary tools, accounts, keys, etc...",source:"@site/docs/aws/AwsRequirements.md",sourceDirName:"aws",slug:"/aws/AwsRequirements",permalink:"/docs/aws/AwsRequirements",version:"current",frontMatter:{id:"AwsRequirements",title:"Requirements"},sidebar:"docs",previous:{title:"Parameter",permalink:"/docs/aws/resources/SSM/SSMParameter"},next:{title:"Address",permalink:"/docs/google/resources/Compute/Address"}},o=[{value:"AWS account",id:"aws-account",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]},{value:"Access Key",id:"access-key",children:[]},{value:"Configure AWS CLI",id:"configure-aws-cli",children:[]},{value:"Key Pair",id:"key-pair",children:[]}],i={toc:o};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Ensure that you have the AWS necessary tools, accounts, keys, etc..."),Object(a.b)("h2",{id:"aws-account"},"AWS account"),Object(a.b)("p",null,"Ensure access to the ",Object(a.b)("a",{parentName:"p",href:"https://console.aws.amazon.com"},"amazon cloud console")," and create an account if necessary."),Object(a.b)("h2",{id:"aws-cli"},"AWS CLI"),Object(a.b)("p",null,"Ensure the ",Object(a.b)("em",{parentName:"p"},"AWS CLI")," is installed and configured:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"aws --version\n")),Object(a.b)("p",null,"If not, visit ",Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html"},"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html")),Object(a.b)("h2",{id:"access-key"},"Access Key"),Object(a.b)("p",null,"Visit the ",Object(a.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home#/security_credentials"},"security credentials")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click on ",Object(a.b)("strong",{parentName:"li"},"Access key (access key ID and secret access key).")),Object(a.b)("li",{parentName:"ul"},"Click on the button ",Object(a.b)("strong",{parentName:"li"},"Create New Access Key"),".")),Object(a.b)("p",null,"Write down the ",Object(a.b)("strong",{parentName:"p"},"AWSAccessKeyId")," and ",Object(a.b)("strong",{parentName:"p"},"AWSSecretKey")),Object(a.b)("h2",{id:"configure-aws-cli"},"Configure AWS CLI"),Object(a.b)("p",null,"Configure the account, region and zone:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"aws configure\n")),Object(a.b)("h2",{id:"key-pair"},"Key Pair"),Object(a.b)("p",null,"Let's create an ssh key pair to access the server."),Object(a.b)("p",null,"Some key pairs may already have been created, here is how to list all existing key pairs:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"aws ec2 describe-key-pairs\n")),Object(a.b)("p",null,"If you need to create a new key pair, go to the ",Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html"},"AWS documentation for ec2 key pair")))}l.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||b[m]||c;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<c;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);