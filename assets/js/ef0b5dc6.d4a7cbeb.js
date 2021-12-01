"use strict";(self.webpackChunkgrucloud_doc=self.webpackChunkgrucloud_doc||[]).push([[6349],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9951:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={id:"Disk",title:"Disk"},s=void 0,l={unversionedId:"google/resources/compute/Disk",id:"google/resources/compute/Disk",isDocsHomePage:!1,title:"Disk",description:"Manages a Peristent Disk",source:"@site/docs/google/resources/compute/Disk.md",sourceDirName:"google/resources/compute",slug:"/google/resources/compute/Disk",permalink:"/docs/google/resources/compute/Disk",tags:[],version:"current",frontMatter:{id:"Disk",title:"Disk"},sidebar:"docs",previous:{title:"Backend Bucket",permalink:"/docs/google/resources/compute/BackendBucket"},next:{title:"Firewall",permalink:"/docs/google/resources/compute/Firewall"}},u=[{value:"Examples",id:"examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Used By",id:"used-by",children:[],level:3}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Manages a ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/disks#pdspecs"},"Peristent Disk")),(0,a.kt)("p",null,"Create a disk and attach it to a virtual machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const disk = provider.compute.makeDisk({\n  name: `my-disk`,\n  properties: () => ({\n    sizeGb: "50",\n  }),\n});\n\nconst server = provider.compute.makeVmInstance({\n  name: `webserver`,\n  dependencies: {\n    disks: [disk],\n  },\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "enable-oslogin",\n          value: "True",\n        },\n      ],\n    },\n  }),\n});\n')),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm/iac.js"},"create and attach a disk to an instance"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/disks/insert"},"all properties"))),(0,a.kt)("h3",{id:"used-by"},"Used By"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/VmInstance"},"VmInstance"))))}m.isMDXComponent=!0}}]);