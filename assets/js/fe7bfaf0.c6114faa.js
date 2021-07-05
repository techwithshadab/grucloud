(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{194:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),l=(r(0),r(199)),c={id:"Tree",title:"Tree"},o={unversionedId:"cli/Tree",id:"cli/Tree",isDocsHomePage:!1,title:"Tree",description:"The tree commands generates a mind map tree of the target resources.",source:"@site/docs/cli/Tree.md",sourceDirName:"cli",slug:"/cli/Tree",permalink:"/docs/cli/Tree",version:"current",frontMatter:{id:"Tree",title:"Tree"},sidebar:"docs",previous:{title:"List Resources",permalink:"/docs/cli/List"},next:{title:"Plan Destroy",permalink:"/docs/cli/PlanDestroy"}},i=[{value:"Requirements",id:"requirements",children:[]},{value:"Help",id:"help",children:[]},{value:"Example",id:"example",children:[{value:"Alias",id:"alias",children:[]},{value:"Full",id:"full",children:[]}]}],p={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("strong",{parentName:"p"},"tree")," commands generates a ",Object(l.b)("a",{parentName:"p",href:"https://plantuml.com/mindmap-diagram"},"mind map")," tree of the target resources."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"gc tree\n")),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("p",null,"The conversion from ","*",".puml to SVG/PNG is performed by ",Object(l.b)("a",{parentName:"p",href:"https://plantuml.com/download"},"plantuml"),".\nDo not forget to download the ",Object(l.b)("a",{parentName:"p",href:"https://plantuml.com/download"},"plantuml.jar"),"."),Object(l.b)("h2",{id:"help"},"Help"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"gc tree --help\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-txt"},'Output the target resources as a mind map tree\n\nOptions:\n  --pumlFile <file>         plantuml output file name (default: "resources-mindmap.puml")\n  --title <value>           title (default: "multi")\n  -t, --type <type>         file type: png, svg (default: "svg")\n  -f, --full                display resources name\n  -j, --plantumlJar <type>  plantuml.jar location (default: "/Users/mario/Downloads/plantuml.jar")\n  -p, --provider <value>    Filter by provider, multiple values allowed\n  -h, --help                display help for command\n')),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("h3",{id:"alias"},"Alias"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"gc t\n")),Object(l.b)("p",null,"A kubernetes cluster running on AWS EKS:"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/starhackit/eks-lean/resources-mindmap.svg",alt:"tree-eks"})),Object(l.b)("h3",{id:"full"},"Full"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"gc tree --full --pumlFile resources-all-mindmap.svg\n")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/starhackit/eks-lean/resources-all-mindmap.svg",alt:"tree-eks"})))}u.isMDXComponent=!0},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return r?a.a.createElement(b,o(o({ref:t},p),{},{components:r})):a.a.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<l;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);