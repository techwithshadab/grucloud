"use strict";(self.webpackChunkgrucloud_doc=self.webpackChunkgrucloud_doc||[]).push([[321],{3905:function(e,t,i){i.d(t,{Zo:function(){return g},kt:function(){return d}});var a=i(7294);function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function I(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?I(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):I(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,c=function(e,t){if(null==e)return{};var i,a,c={},I=Object.keys(e);for(a=0;a<I.length;a++)i=I[a],t.indexOf(i)>=0||(c[i]=e[i]);return c}(e,t);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);for(a=0;a<I.length;a++)i=I[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(c[i]=e[i])}return c}var n=a.createContext({}),M=function(e){var t=a.useContext(n),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},g=function(e){var t=M(e.components);return a.createElement(n.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var i=e.components,c=e.mdxType,I=e.originalType,n=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),N=M(i),d=c,u=N["".concat(n,".").concat(d)]||N[d]||s[d]||I;return i?a.createElement(u,l(l({ref:t},g),{},{components:i})):a.createElement(u,l({ref:t},g))}));function d(e,t){var i=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var I=i.length,l=new Array(I);l[0]=N;var r={};for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n]);r.originalType=e,r.mdxType="string"==typeof e?e:c,l[1]=r;for(var M=2;M<I;M++)l[M]=i[M];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}N.displayName="MDXCreateElement"},1121:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return r},contentTitle:function(){return n},metadata:function(){return M},toc:function(){return g},default:function(){return N}});var a=i(7462),c=i(3366),I=(i(7294),i(3905)),l=["components"],r={id:"AzureGettingStarted",title:"Azure Getting Started"},n=void 0,M={unversionedId:"azure/AzureGettingStarted",id:"azure/AzureGettingStarted",isDocsHomePage:!1,title:"Azure Getting Started",description:"This document describes how to get started with GruCloud on Azure.",source:"@site/docs/azure/AzureGettingStarted.md",sourceDirName:"azure",slug:"/azure/AzureGettingStarted",permalink:"/docs/azure/AzureGettingStarted",tags:[],version:"current",frontMatter:{id:"AzureGettingStarted",title:"Azure Getting Started"},sidebar:"docs",previous:{title:"GCP Getting Started",permalink:"/docs/google/GoogleGettingStarted"},next:{title:"Kubernetes Getting Started",permalink:"/docs/k8s/K8sGettingStarted"}},g=[{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Workflow",id:"workflow",children:[],level:2},{value:"Requirement",id:"requirement",children:[{value:"Azure Account",id:"azure-account",children:[],level:3},{value:"Azure CLI",id:"azure-cli",children:[],level:3},{value:"Install the GruCloud CLI",id:"install-the-grucloud-cli",children:[],level:3}],level:2},{value:"GruCloud CLI",id:"grucloud-cli",children:[{value:"<code>gc new</code> Create a new project",id:"gc-new-create-a-new-project",children:[],level:3},{value:"<code>gc list</code> List the live resources",id:"gc-list-list-the-live-resources",children:[],level:3},{value:"<code>gc gencode</code>\xa0Generate the code",id:"gc-gencodegenerate-the-code",children:[],level:3},{value:"<code>gc apply</code> Update the resources",id:"gc-apply-update-the-resources",children:[],level:3},{value:"<code>gc destroy</code> Destroy the resources",id:"gc-destroy-destroy-the-resources",children:[],level:3}],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],s={toc:g};function N(e){var t=e.components,r=(0,c.Z)(e,l);return(0,I.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,I.kt)("p",null,"This document describes how to get started with GruCloud on Azure."),(0,I.kt)("h2",{id:"use-cases"},"Use Cases"),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"usecase.svg",src:i(9717).Z})),(0,I.kt)("h2",{id:"workflow"},"Workflow"),(0,I.kt)("p",null,(0,I.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/docusaurus/plantuml/gc-new-workflow.svg",alt:"gc-new-workflow"})),(0,I.kt)("h2",{id:"requirement"},"Requirement"),(0,I.kt)("h3",{id:"azure-account"},"Azure Account"),(0,I.kt)("p",null,"Visit the ",(0,I.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"azure portal")," and ensure you have an azure account as well as a subscription."),(0,I.kt)("h3",{id:"azure-cli"},"Azure CLI"),(0,I.kt)("p",null,"Install the Azure Command Line Interface ",(0,I.kt)("strong",{parentName:"p"},"az")," from ",(0,I.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"},"here")),(0,I.kt)("p",null,"At this point, ensure the ",(0,I.kt)("strong",{parentName:"p"},"az")," command is installed:"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-bash"},"az --version\n")),(0,I.kt)("h3",{id:"install-the-grucloud-cli"},"Install the GruCloud CLI"),(0,I.kt)("p",null,"Install the grucloud command line utility: ",(0,I.kt)("strong",{parentName:"p"},"gc")),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g @grucloud/core\n")),(0,I.kt)("h2",{id:"grucloud-cli"},"GruCloud CLI"),(0,I.kt)("h3",{id:"gc-new-create-a-new-project"},(0,I.kt)("inlineCode",{parentName:"h3"},"gc new")," Create a new project"),(0,I.kt)("p",null,"Use the ",(0,I.kt)("em",{parentName:"p"},"new")," command to create a new project:"),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"gc-new-azure",src:i(7028).Z})),(0,I.kt)("div",null,(0,I.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/MFw0YToJlA6BpFgUU3LY2LA1D/embed?autoplay=true&speed=2&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"900px",height:"500px"}})),"The boilerplate project is now created and configured.",(0,I.kt)("h3",{id:"gc-list-list-the-live-resources"},(0,I.kt)("inlineCode",{parentName:"h3"},"gc list")," List the live resources"),(0,I.kt)("p",null,"List the available resources and display a diagram with:"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"gc list --graph\n")),(0,I.kt)("div",null,(0,I.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/zbXkGiXBdDwOXHCJtKvttxv9z/embed?autoplay=true&speed=1&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"900px",height:"700px"}})),(0,I.kt)("p",null,(0,I.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/azure/vm/artifacts/diagram-live.svg",alt:"diagram-live.svg"})),(0,I.kt)("h3",{id:"gc-gencodegenerate-the-code"},(0,I.kt)("inlineCode",{parentName:"h3"},"gc gencode"),"\xa0Generate the code"),(0,I.kt)("p",null,"Here we assume some resources are already deployed."),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"gc gencode\n")),(0,I.kt)("p",null,"This command fetches the resources inventory and generate the code in ",(0,I.kt)("em",{parentName:"p"},"resource.js"),"."),(0,I.kt)("div",null,(0,I.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/MyAIWObbcxVXLMaBA2A05u3y4/embed?autoplay=true&speed=1&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"900px",height:"700px"}})),(0,I.kt)("h3",{id:"gc-apply-update-the-resources"},(0,I.kt)("inlineCode",{parentName:"h3"},"gc apply")," Update the resources"),(0,I.kt)("p",null,"To update the infrastructure, either use the ",(0,I.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure portal")," and run ",(0,I.kt)("strong",{parentName:"p"},"gc gencode"),", or modify directly the file ",(0,I.kt)("strong",{parentName:"p"},"resource.js"),".\nOnce done, use the ",(0,I.kt)("strong",{parentName:"p"},"apply")," command to update the infrastructure:"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"gc apply\n")),(0,I.kt)("div",null,(0,I.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/X8nXfxNUnAKVPTORfPRggDbP0/embed?autoplay=true&speed=1&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"700px",height:"800px"}})),(0,I.kt)("h3",{id:"gc-destroy-destroy-the-resources"},(0,I.kt)("inlineCode",{parentName:"h3"},"gc destroy")," Destroy the resources"),(0,I.kt)("p",null,"Time to destroy the resouces allocated:"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"gc destroy\n")),(0,I.kt)("div",null,(0,I.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/2pQiYTgZgQD776G077qOHBU64/embed?autoplay=true&speed=1&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"700px",height:"900px"}})),(0,I.kt)("h2",{id:"next-steps"},"Next Steps"),(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},(0,I.kt)("p",{parentName:"li"},"Browse the various ",(0,I.kt)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/tree/main/examples/azure"},"examples")," which helps to find out how to use this software.")),(0,I.kt)("li",{parentName:"ul"},(0,I.kt)("p",{parentName:"li"},"Available ",(0,I.kt)("a",{parentName:"p",href:"/docs/azure/ResourcesList"},"Azure Resources")))))}N.isMDXComponent=!0},7028:function(e,t,i){t.Z=i.p+"assets/images/gc-new-azure-37e045b89e150e673539a25a6febacb0.svg"},9717:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjb250ZW50U2NyaXB0VHlwZT0iYXBwbGljYXRpb24vZWNtYXNjcmlwdCIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIGhlaWdodD0iNDk4cHgiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHN0eWxlPSJ3aWR0aDo3MzJweDtoZWlnaHQ6NDk4cHg7YmFja2dyb3VuZDojRkZGRkZGOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNzMyIDQ5OCIgd2lkdGg9IjczMnB4IiB6b29tQW5kUGFuPSJtYWduaWZ5Ij48ZGVmcy8+PGc+PCEtLU1ENT1bZDNjNjEyYTY0ZDhhNmIwMDQ5NGI0MWNlOWQ0ZGFjZTddCmNsdXN0ZXIgR3J1Q2xvdWQgdXNlIGNhc2VzLS0+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxNDUsMTIuMTE5MSwzOTUsMTIuMTE5MSw0MDIsNDQuODU2NCw1NDUsNDQuODU2NCw1NDUsNDkxLjExOTEsMTQ1LDQ5MS4xMTkxLDE0NSwxMi4xMTkxIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIxNDUiIHgyPSI0MDIiIHkxPSI0NC44NTY0IiB5Mj0iNDQuODU2NCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIyNDQiIHg9IjE0OSIgeT0iMzYuMjM3MyI+R3J1Q2xvdWQgdXNlIGNhc2VzPC90ZXh0PjxlbGxpcHNlIGN4PSIzNDUuMDE5OCIgY3k9Ijg5LjAyMzEiIGZpbGw9IiNGRkZGRkYiIHJ4PSIxNDUuMDE5OCIgcnk9IjMxLjQwNCIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IlZlcmRhbmEiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMjU5IiB4PSIyMTUuNTE5OCIgeT0iOTIuNTkxIj5EaXNwbGF5IGRpYWdyYW1zIGZyb20gbGl2ZSByZXNvdXJjZXM8L3RleHQ+PGVsbGlwc2UgY3g9IjM0NS4wNjczIiBjeT0iMTk1LjMzMjYiIGZpbGw9IiNGRkZGRkYiIHJ4PSIxODQuMDY3MyIgcnk9IjM5LjIxMzUiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjM0MCIgeD0iMTc1LjA2NzMiIHk9IjE5OC45MDA1Ij5HZW5lcmF0ZSBpbmZyYXN0cnVjdHVyZSBjb2RlIGZyb20gbGl2ZSByZXNvdXJjZXM8L3RleHQ+PGVsbGlwc2UgY3g9IjM0NC44MzIxIiBjeT0iMjk5LjI4NTYiIGZpbGw9IiNGRkZGRkYiIHJ4PSIxMzguODMyMSIgcnk9IjMwLjE2NjQiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjI0NiIgeD0iMjIxLjgzMjEiIHk9IjMwMi44NTM0Ij5EZXBsb3kgcmVzb3VyY2VzIHRvIHZhcmlvdXMgcGhhc2VzPC90ZXh0PjxlbGxpcHNlIGN4PSIzNDQuOTQwNiIgY3k9IjM4Mi45MDczIiBmaWxsPSIjRkZGRkZGIiByeD0iODEuOTQwNiIgcnk9IjE4Ljc4ODEiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEyMSIgeD0iMjg0LjQ0MDYiIHk9IjM4Ni40NzUxIj5VcGRhdGUgcmVzb3VyY2VzPC90ZXh0PjxlbGxpcHNlIGN4PSIzNDUuMTMyNiIgY3k9IjQ1Ni4yNDU3IiBmaWxsPSIjRkZGRkZGIiByeD0iODMuNjMyNiIgcnk9IjE5LjEyNjUiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEyNSIgeD0iMjgyLjYzMjYiIHk9IjQ1OS44MTM1Ij5EZXN0cm95IHJlc291cmNlczwvdGV4dD48IS0tTUQ1PVswMTFkYjFkMjcyNzRjODY2OTE4NzFiYzUxYjEyYmViOF0KZW50aXR5IGQtLT48ZWxsaXBzZSBjeD0iNTYiIGN5PSIyNjkuMTE5MSIgZmlsbD0iI0ZGRkZGRiIgcng9IjgiIHJ5PSI4IiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cGF0aCBkPSJNNTYsMjc3LjExOTEgTDU2LDMwNC4xMTkxIE00MywyODUuMTE5MSBMNjksMjg1LjExOTEgTTU2LDMwNC4xMTkxIEw0MywzMTkuMTE5MSBNNTYsMzA0LjExOTEgTDY5LDMxOS4xMTkxICIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IlZlcmRhbmEiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iOTAiIHg9IjExIiB5PSIzMzUuMTk0MyI+RGV2T3BzIFVzZXI8L3RleHQ+PHBhdGggZD0iTTU4OSwyODYuMTE5MSBMNTg5LDI5NS4xMTkxIEw0ODQuMjMsMjk5LjExOTEgTDU4OSwzMDMuMTE5MSBMNTg5LDMxMS45MTg1IEEwLDAgMCAwIDAgNTg5LDMxMS45MTg1IEw3MjUsMzExLjkxODUgQTAsMCAwIDAgMCA3MjUsMzExLjkxODUgTDcyNSwyOTYuMTE5MSBMNzE1LDI4Ni4xMTkxIEw1ODksMjg2LjExOTEgQTAsMCAwIDAgMCA1ODksMjg2LjExOTEgIiBmaWxsPSIjRkZGRkZGIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cGF0aCBkPSJNNzE1LDI4Ni4xMTkxIEw3MTUsMjk2LjExOTEgTDcyNSwyOTYuMTE5MSBMNzE1LDI4Ni4xMTkxICIgZmlsbD0iI0ZGRkZGRiIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IlZlcmRhbmEiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTE1IiB4PSI1OTUiIHk9IjMwNC4xODkiPnByb2QsIHRlc3QsIGV0YyAuLi48L3RleHQ+PCEtLU1ENT1bNTk0ZGZkMjliYjc4NTE0NmQwNDJlNDZiYTY3MGIxZjFdCmxpbmsgZCB0byBVQzEtLT48cGF0aCBkPSJNNjYuMjIsMjU5Ljg3OTEgQzc2Ljk2LDIyMi45MjkxIDk4LjM4LDE2OC43NzkxIDEzNywxMzguMTE5MSBDMTU3LjQsMTIxLjkxOTEgMTgyLjI4LDExMC45MjkxIDIwNy42MiwxMDMuNDk5MSAiIGZpbGw9Im5vbmUiIGlkPSJkLXRvLVVDMSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIyMTIuNjksMTAyLjA1OTEsMjAyLjkzODUsMTAwLjY3NzksMjA3Ljg4MTMsMTAzLjQyOSwyMDUuMTMwMiwxMDguMzcxOCwyMTIuNjksMTAyLjA1OTEiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjwhLS1NRDU9WzlhNzBhYjkwMDQ2OTViZjI4NmMyZWM4NjVkYjViYzQ3XQpsaW5rIGQgdG8gVUMyLS0+PHBhdGggZD0iTTEwMS4xMiwyNjkuNjk5MSBDMTEyLjQ5LDI2Mi45NDkxIDEyNC45MywyNTYuMjU5MSAxMzcsMjUxLjExOTEgQzE2MC44NSwyNDAuOTY5MSAxODcuMDMsMjMyLjE5OTEgMjEyLjUxLDIyNC44MDkxICIgZmlsbD0ibm9uZSIgaWQ9ImQtdG8tVUMyIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjIxNy42LDIyMy4zNDkxLDIwNy44NDM3LDIyMi4wMDI0LDIxMi43OTYyLDIyNC43MzYsMjEwLjA2MjYsMjI5LjY4ODUsMjE3LjYsMjIzLjM0OTEiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjwhLS1NRDU9WzZkZmYxMjg5ZDU3ZWNjM2MzZGY1MTNjNmZkZDAzNDI0XQpsaW5rIGQgdG8gVUMzLS0+PHBhdGggZD0iTTEwMS4yMSwyOTkuMTE5MSBDMTI4LjE5LDI5OS4xMTkxIDE2NC4zNSwyOTkuMTE5MSAyMDAuNTEsMjk5LjExOTEgIiBmaWxsPSJub25lIiBpZD0iZC10by1VQzMiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMjA1Ljg0LDI5OS4xMTkxLDE5Ni44NCwyOTUuMTE5MSwyMDAuODQsMjk5LjExOTEsMTk2Ljg0LDMwMy4xMTkxLDIwNS44NCwyOTkuMTE5MSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PCEtLU1ENT1bZDEwYzVhMzNmYTIxMmM5NWYxN2MzNGQ4NzQ2ZTcyMjVdCmxpbmsgZCB0byBVQzQtLT48cGF0aCBkPSJNMTAxLjMxLDMyOC44NzkxIEMxMTIuNTcsMzM1LjM4OTEgMTI0LjkxLDM0MS42NDkxIDEzNywzNDYuMTE5MSBDMTc3LjMxLDM2MS4wMTkxIDIyNC4zMiwzNzAuMDM5MSAyNjMuMzQsMzc1LjQzOTEgIiBmaWxsPSJub25lIiBpZD0iZC10by1VQzQiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMjY4LjU0LDM3Ni4xMzkxLDI2MC4xNjAzLDM3MC45NjQxLDI2My41ODU1LDM3NS40NjYxLDI1OS4wODM1LDM3OC44OTEzLDI2OC41NCwzNzYuMTM5MSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PCEtLU1ENT1bYWEyYmY2NGUxZDYxMjQ3YTJkYTg3OGMyNDIyZmM5YzhdCmxpbmsgZCB0byBVQzUtLT48cGF0aCBkPSJNNzMuMDUsMzM4LjI5OTEgQzg2LjIsMzY1LjMzOTEgMTA3LjQ3LDM5OS43NzkxIDEzNyw0MTkuMTE5MSBDMTcxLjkzLDQ0MS45OTkxIDIxNi45Niw0NTEuODE5MSAyNTYuMSw0NTUuNjc5MSAiIGZpbGw9Im5vbmUiIGlkPSJkLXRvLVVDNSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIyNjEuMzMsNDU2LjE2OTEsMjUyLjc0NjUsNDUxLjMzOTcsMjU2LjM1MjIsNDU1LjY5ODUsMjUxLjk5MzQsNDU5LjMwNDIsMjYxLjMzLDQ1Ni4xNjkxIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiLz48IS0tTUQ1PVs3NmJkZGQxZTcxNjIwZDViY2FkZTA3ZTdiMjJkZjgwOV0KQHN0YXJ0dW1sDQoNCiF0aGVtZSBwbGFpbg0KbGVmdCB0byByaWdodCBkaXJlY3Rpb24NCmFjdG9yICJEZXZPcHMgVXNlciIgYXMgZA0KDQpwYWNrYWdlICJHcnVDbG91ZCB1c2UgY2FzZXMiIHsNCiAgdXNlY2FzZSAiRGlzcGxheSBkaWFncmFtcyBmcm9tIGxpdmUgcmVzb3VyY2VzIiBhcyBVQzENCiAgdXNlY2FzZSAiR2VuZXJhdGUgaW5mcmFzdHJ1Y3R1cmUgY29kZSBmcm9tIGxpdmUgcmVzb3VyY2VzIiBhcyBVQzINCiAgdXNlY2FzZSAiRGVwbG95IHJlc291cmNlcyB0byB2YXJpb3VzIHBoYXNlcyIgYXMgVUMzDQogIHVzZWNhc2UgIlVwZGF0ZSByZXNvdXJjZXMiIGFzIFVDNA0KICB1c2VjYXNlICJEZXN0cm95IHJlc291cmNlcyIgYXMgVUM1DQp9DQoNCm5vdGUgcmlnaHQgb2YgVUMzDQpwcm9kLCB0ZXN0LCBldGMgLi4uDQplbmQgbm90ZQ0KDQpkIC0gLT4gVUMxDQpkIC0gLT4gVUMyDQpkIC0gLT4gVUMzDQpkIC0gLT4gVUM0DQpkIC0gLT4gVUM1DQoNCkBlbmR1bWwNCgpAc3RhcnR1bWwNCg0KDQoNCg0KDQoNCg0KDQo8c3R5bGU+DQogIHJvb3Qgew0KICAgIEJhY2tncm91bmRDb2xvciB3aGl0ZQ0KICAgIEZvbnRDb2xvciBibGFjaw0KICAgIEZvbnROYW1lIFZlcmRhbmENCiAgICBIeXBlckxpbmtDb2xvciBibHVlDQogICAgTGluZUNvbG9yIGJsYWNrDQogICAgTGluZVRoaWNrbmVzcyAxDQogICAgTWFyZ2luIDUNCiAgfQ0KICBjYXB0aW9uIHsNCiAgICBMaW5lVGhpY2tuZXNzIDANCiAgfQ0KICBmb290ZXIgew0KICAgIExpbmVUaGlja25lc3MgMA0KICB9DQogIGhlYWRlciB7DQogICAgTGluZVRoaWNrbmVzcyAwDQogIH0NCiAgbm9kZSB7DQogICAgTWF4aW11bVdpZHRoIDMwMA0KICB9DQogIHRpdGxlIHsNCiAgICBGb250U2l6ZSAyMg0KICAgIExpbmVUaGlja25lc3MgMA0KICB9DQo8L3N0eWxlPg0KDQpza2lucGFyYW0gQXJyb3dMb2xsaXBvcENvbG9yIGJsYWNrDQpza2lucGFyYW0gQmFja2dyb3VuZENvbG9yIHdoaXRlDQpza2lucGFyYW0gRGVmYXVsdEZvbnROYW1lIFZlcmRhbmENCnNraW5wYXJhbSBEZWZhdWx0TW9ub3NwYWNlZEZvbnROYW1lIENvdXJpZXINCnNraW5wYXJhbSBMaWZlbGluZVN0cmF0ZWd5IG5vc29saWQNCnNraW5wYXJhbSBQYXJ0aWNpcGFudFBhZGRpbmcgMTANCnNraW5wYXJhbSBTZXF1ZW5jZUxpZmVMaW5lQm9yZGVyQ29sb3IgYmxhY2sNCnNraW5wYXJhbSBTaGFkb3dpbmcgZmFsc2UNCnNraW5wYXJhbSBVc2VCZXRhU3R5bGUgdHJ1ZQ0KDQpza2lucGFyYW0gQWN0aXZpdHkgew0KICBCYWNrZ3JvdW5kQ29sb3Igd2hpdGUNCiAgQmFyQ29sb3IgYmxhY2sNCiAgQm9yZGVyQ29sb3IgYmxhY2sNCiAgRm9udENvbG9yIGJsYWNrDQogIEZvbnROYW1lIFZlcmRhbmENCn0NCnNraW5wYXJhbSBCb3VuZGFyeSB7DQogIEZvbnRDb2xvciBibGFjaw0KfQ0Kc2tpbnBhcmFtIEJveCB7DQogIFBhZGRpbmcgNQ0KfQ0Kc2tpbnBhcmFtIENpcmNsZWRDaGFyYWN0ZXIgew0KICBGb250Q29sb3IgYmxhY2sNCiAgRm9udE5hbWUgQ291cmllcg0KICBSYWRpdXMgOQ0KfQ0Kc2tpbnBhcmFtIENsYXNzIHsNCiAgQmFja2dyb3VuZENvbG9yIHdoaXRlDQogIEJvcmRlckNvbG9yIGJsYWNrDQogIEZvbnRDb2xvciBibGFjaw0KICBGb250TmFtZSBWZXJkYW5hDQp9DQpza2lucGFyYW0gQ2xhc3NBdHRyaWJ1dGUgew0KICBGb250Q29sb3IgYmxhY2sNCiAgRm9udE5hbWUgVmVyZGFuYQ0KfQ0Kc2tpbnBhcmFtIENsYXNzU3RlcmVvdHlwZSB7DQogIEZvbnRDb2xvciBibGFjaw0KICBGb250TmFtZSBWZXJkYW5hDQp9DQpza2lucGFyYW0gRm9vdGVyIHsNCiAgRm9udENvbG9yIGJsYWNrDQogIEZvbnROYW1lIFZlcmRhbmENCn0NCnNraW5wYXJhbSBIZWFkZXIgew0KICBGb250Q29sb3IgYmxhY2sNCiAgRm9udE5hbWUgVmVyZGFuYQ0KfQ0Kc2tpbnBhcmFtIEh5cGVybGluayB7DQogIENvbG9yIGJsdWUNCn0NCnNraW5wYXJhbSBJY29uUGFja2FnZSB7DQogIENvbG9yIGJsYWNrDQogIEJhY2tncm91bmRDb2xvciB3aGl0ZQ0KfQ0Kc2tpbnBhcmFtIEljb25Qcml2YXRlIHsNCiAgQ29sb3IgYmxhY2sNCiAgQmFja2dyb3VuZENvbG9yIHdoaXRlDQp9DQpza2lucGFyYW0gSWNvblByb3RlY3RlZCB7DQogIENvbG9yIGJsYWNrDQogIEJhY2tncm91bmRDb2xvciB3aGl0ZQ0KfQ0Kc2tpbnBhcmFtIEljb25QdWJsaWMgew0KICBDb2xvciBibGFjaw0KICBCYWNrZ3JvdW5kQ29sb3Igd2hpdGUNCn0NCnNraW5wYXJhbSBOb3RlIHsNCiAgRm9udENvbG9yIGJsYWNrDQogIEZvbnROYW1lIFZlcmRhbmENCn0NCnNraW5wYXJhbSBPYmplY3Qgew0KICBCb3JkZXJDb2xvciBibGFjaw0KfQ0Kc2tpbnBhcmFtIFBhY2thZ2Ugew0KICBCb3JkZXJDb2xvciBibGFjaw0KICBGb250Q29sb3IgYmxhY2sNCiAgRm9udE5hbWUgVmVyZGFuYQ0KfQ0Kc2tpbnBhcmFtIFN0YXRlIHsNCiAgQmFja2dyb3VuZENvbG9yIHdoaXRlDQogIEJvcmRlckNvbG9yIGJsYWNrDQp9DQpza2lucGFyYW0gU3RlcmVvdHlwZUEgew0KICBCYWNrZ3JvdW5kQ29sb3Igd2hpdGUNCiAgQm9yZGVyQ29sb3IgYmxhY2sNCn0NCnNraW5wYXJhbSBTdGVyZW90eXBlQyB7DQogIEJhY2tncm91bmRDb2xvciB3aGl0ZQ0KICBCb3JkZXJDb2xvciBibGFjaw0KfQ0Kc2tpbnBhcmFtIFN0ZXJlb3R5cGVFIHsNCiAgQmFja2dyb3VuZENvbG9yIHdoaXRlDQogIEJvcmRlckNvbG9yIGJsYWNrDQp9DQpza2lucGFyYW0gU3RlcmVvdHlwZUkgew0KICBCYWNrZ3JvdW5kQ29sb3Igd2hpdGUNCiAgQm9yZGVyQ29sb3IgYmxhY2sNCn0NCnNraW5wYXJhbSBTdGVyZW90eXBlTiB7DQogIEJhY2tncm91bmRDb2xvciB3aGl0ZQ0KICBCb3JkZXJDb2xvciBibGFjaw0KfQ0Kc2tpbnBhcmFtIFVzZUNhc2VTdGVyZW9UeXBlIHsNCiAgRm9udENvbG9yIGJsYWNrDQogIEZvbnROYW1lIFZlcmRhbmENCn0NCmxlZnQgdG8gcmlnaHQgZGlyZWN0aW9uDQphY3RvciAiRGV2T3BzIFVzZXIiIGFzIGQNCg0KcGFja2FnZSAiR3J1Q2xvdWQgdXNlIGNhc2VzIiB7DQogIHVzZWNhc2UgIkRpc3BsYXkgZGlhZ3JhbXMgZnJvbSBsaXZlIHJlc291cmNlcyIgYXMgVUMxDQogIHVzZWNhc2UgIkdlbmVyYXRlIGluZnJhc3RydWN0dXJlIGNvZGUgZnJvbSBsaXZlIHJlc291cmNlcyIgYXMgVUMyDQogIHVzZWNhc2UgIkRlcGxveSByZXNvdXJjZXMgdG8gdmFyaW91cyBwaGFzZXMiIGFzIFVDMw0KICB1c2VjYXNlICJVcGRhdGUgcmVzb3VyY2VzIiBhcyBVQzQNCiAgdXNlY2FzZSAiRGVzdHJveSByZXNvdXJjZXMiIGFzIFVDNQ0KfQ0KDQpub3RlIHJpZ2h0IG9mIFVDMw0KcHJvZCwgdGVzdCwgZXRjIC4uLg0KZW5kIG5vdGUNCg0KZCAtIC0+IFVDMQ0KZCAtIC0+IFVDMg0KZCAtIC0+IFVDMw0KZCAtIC0+IFVDNA0KZCAtIC0+IFVDNQ0KDQpAZW5kdW1sDQoKUGxhbnRVTUwgdmVyc2lvbiAxLjIwMjEuMTQoRnJpIE5vdiAxMiAxMTo0Njo1MCBDT1QgMjAyMSkKKEdQTCBzb3VyY2UgZGlzdHJpYnV0aW9uKQpKYXZhIFJ1bnRpbWU6IE9wZW5KREsgUnVudGltZSBFbnZpcm9ubWVudApKVk06IE9wZW5KREsgNjQtQml0IFNlcnZlciBWTQpEZWZhdWx0IEVuY29kaW5nOiBVVEYtOApMYW5ndWFnZTogZW4KQ291bnRyeTogR0IKLS0+PC9nPjwvc3ZnPg=="}}]);