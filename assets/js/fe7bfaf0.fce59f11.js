"use strict";(self.webpackChunkgrucloud_doc=self.webpackChunkgrucloud_doc||[]).push([[4310],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(r),d=l,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4917:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(7462),l=r(3366),a=(r(7294),r(3905)),o=["components"],u={id:"Tree",title:"Tree"},i=void 0,p={unversionedId:"cli/Tree",id:"cli/Tree",isDocsHomePage:!1,title:"Tree",description:"The tree commands generates a mind map tree of the target resources.",source:"@site/docs/cli/Tree.md",sourceDirName:"cli",slug:"/cli/Tree",permalink:"/docs/cli/Tree",tags:[],version:"current",frontMatter:{id:"Tree",title:"Tree"},sidebar:"docs",previous:{title:"List Resources",permalink:"/docs/cli/List"},next:{title:"Plan Destroy",permalink:"/docs/cli/PlanDestroy"}},c=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Help",id:"help",children:[],level:2},{value:"Example",id:"example",children:[{value:"Alias",id:"alias",children:[],level:3},{value:"Full",id:"full",children:[],level:3}],level:2}],s={toc:c};function m(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"tree")," commands generates a ",(0,a.kt)("a",{parentName:"p",href:"https://plantuml.com/mindmap-diagram"},"mind map")," tree of the target resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gc tree\n")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"The conversion from ","*",".puml to SVG/PNG is performed by ",(0,a.kt)("a",{parentName:"p",href:"https://plantuml.com/download"},"plantuml"),".\nDo not forget to download the ",(0,a.kt)("a",{parentName:"p",href:"https://plantuml.com/download"},"plantuml.jar"),"."),(0,a.kt)("h2",{id:"help"},"Help"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gc tree --help\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},'Output the target resources as a mind map tree\n\nOptions:\n  --pumlFile <file>         plantuml output file name (default: "resources-mindmap.puml")\n  --title <value>           title (default: "multi")\n  -t, --type <type>         file type: png, svg (default: "svg")\n  -f, --full                display resources name\n  -j, --plantumlJar <type>  plantuml.jar location (default: "/Users/mario/Downloads/plantuml.jar")\n  -p, --provider <value>    Filter by provider, multiple values allowed\n  -h, --help                display help for command\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"alias"},"Alias"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gc t\n")),(0,a.kt)("p",null,"A kubernetes cluster running on AWS EKS:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/starhackit/eks-lean/resources-mindmap.svg",alt:"tree-eks"})),(0,a.kt)("h3",{id:"full"},"Full"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gc tree --full --pumlFile resources-all-mindmap.svg\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/starhackit/eks-lean/resources-all-mindmap.svg",alt:"tree-eks"})))}m.isMDXComponent=!0}}]);