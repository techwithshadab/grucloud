(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),c=(r(0),r(164));const o={id:"GcpBucket",title:"Bucket"},a={id:"google/resources/storage/GcpBucket",isDocsHomePage:!1,title:"Bucket",description:"Provides a bucket storage for a project.",source:"@site/docs/google/resources/storage/GcpBucket.md",permalink:"/docs/google/resources/storage/GcpBucket",sidebar:"someSidebar",previous:{title:"Service Account",permalink:"/docs/google/resources/IAM/ServiceAccount"},next:{title:"Object",permalink:"/docs/google/resources/storage/GcpObject"}},i=[{value:"Examples",id:"examples",children:[{value:"Simple Bucket",id:"simple-bucket",children:[]},{value:"Example Code",id:"example-code",children:[]}]},{value:"Properties",id:"properties",children:[]},{value:"Used By",id:"used-by",children:[]}],u={rightToc:i};function l({components:e,...t}){return Object(c.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides a bucket storage for a project."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"simple-bucket"},"Simple Bucket"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const bucket = await provider.makeBucket({\n  name: "myuniquebucketname",\n  properties: () => ({ storageClass: "STANDARD" }),\n});\n')),Object(c.b)("h3",{id:"example-code"},"Example Code"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/master/examples/google/storage/simple/iac.js#L7"}),"basic example"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/storage/docs/json_api/v1/buckets/insert#request-body"}),"Bucket Create properties")),Object(c.b)("h2",{id:"used-by"},"Used By"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"./GcpObject"}),"GcpObject"))))}l.isMDXComponent=!0},164:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(a,".").concat(d)]||s[d]||b[d]||o;return r?c.a.createElement(m,i(i({ref:t},l),{},{components:r})):c.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);