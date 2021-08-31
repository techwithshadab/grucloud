(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{222:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?o.a.createElement(m,a(a({ref:t},l),{},{components:n})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(222));const i={id:"gc",title:"gc"},c={unversionedId:"cli/gc",id:"cli/gc",isDocsHomePage:!1,title:"gc",description:"The gc command line interface is a short for GruCloud.",source:"@site/docs/cli/gc.md",sourceDirName:"cli",slug:"/cli/gc",permalink:"/docs/cli/gc",version:"current",frontMatter:{id:"gc",title:"gc"},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/Requirements"},next:{title:"Init",permalink:"/docs/cli/Init"}},a=[],p={toc:a};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"gc")," command line interface is a short for GruCloud.\nIt is a ",Object(o.b)("em",{parentName:"p"},"node js")," application which can be installed with ",Object(o.b)("em",{parentName:"p"},"npm")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm i -g @grucloud/core\n")),Object(o.b)("p",null,"Now check that ",Object(o.b)("strong",{parentName:"p"},"gc")," is installed correctly:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"gc\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Usage: gc [options] [command]\n\nOptions:\n  -V, --version        output the version number\n  -i, --infra <file>   infrastructure default is iac.js\n  -c, --config <file>  config file, default is config/default.js\n  -j, --json <file>    write result to a file in json format\n  -h, --help           display help for command\n\nCommands:\n  info [options]       Get Information about the current project\n  init|i               Initialise the cloud providers\n  uninit|u             Un-initialise the cloud providers\n  plan|p [options]     Find out which resources need to be deployed or destroyed\n  run|r [options]      run onDeployed or onDestroy\n  apply|a [options]    Apply the plan, a.k.a deploy the resources\n  destroy|d [options]  Destroy the resources\n  list|l [options]     List the live resources\n  output|o [options]   Output the value of a resource\n  graph|gt [options]   Output the target resources in a dot file and a graphical format such as SVG\n  tree|t [options]     Output the target resources as a mind map tree\n  help [command]       display help for command\n")))}l.isMDXComponent=!0}}]);