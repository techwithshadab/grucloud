(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),c=(r(0),r(222));const o={id:"TLDR",title:"TL;DR"},a={unversionedId:"TLDR",id:"TLDR",isDocsHomePage:!1,title:"TL;DR",description:"Let's create a fake infrastructure with the mock provider.",source:"@site/docs/TLDR.md",sourceDirName:".",slug:"/TLDR",permalink:"/docs/TLDR",version:"current",frontMatter:{id:"TLDR",title:"TL;DR"}},l=[],i={toc:l};function p({components:e,...t}){return Object(c.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Let's create a fake infrastructure with the mock provider."),Object(c.b)("p",null,"First of all, install the command line utility ",Object(c.b)("strong",{parentName:"p"},"gc")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm i -g @grucloud/core\n")),Object(c.b)("p",null,"Clone the source code and install the dependencies"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"git clone git@github.com:grucloud/grucloud.git\ncd grucloud\nnpm install\nnpm run bootstrap\n")),Object(c.b)("p",null,"Start the mock cloud service provider located at ",Object(c.b)("inlineCode",{parentName:"p"},"package/tools/mockServer")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"cd package/tools/mockServer\nnpm run start\n")),Object(c.b)("p",null,"Open another console, go the mock example directory and install the dependencies:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"cd examples/mock\n")),Object(c.b)("p",null,"Now it is time to edit the infrastructure file that describes the architecture:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"<your favorite editor> iac.js\n")),Object(c.b)("p",null,"Find out which resources are going to be allocated:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc plan\n")),Object(c.b)("p",null,"Happy with the expected plan ? Deploy it now:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc apply\n")),Object(c.b)("p",null,"Time to destroy the resouces allocated:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc destroy\n")),Object(c.b)("p",null,"Well done. Infrastrucure as code in a few commands."))}p.isMDXComponent=!0},222:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=c.a.createContext({}),u=function(e){var t=c.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(a,".").concat(d)]||b[d]||s[d]||o;return r?c.a.createElement(m,l(l({ref:t},p),{},{components:r})):c.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);