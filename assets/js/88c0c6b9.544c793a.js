"use strict";(self.webpackChunkgrucloud_doc=self.webpackChunkgrucloud_doc||[]).push([[9355],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),g=i(n),m=r,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||o;return n?a.createElement(d,c(c({ref:t},s),{},{components:n})):a.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var i=2;i<o;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2651:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return g}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),c=["components"],u={id:"AutoScalingAttachment",title:"AutoScaling Attachment"},l=void 0,i={unversionedId:"aws/resources/AutoScaling/AutoScalingAttachment",id:"aws/resources/AutoScaling/AutoScalingAttachment",isDocsHomePage:!1,title:"AutoScaling Attachment",description:"Attach a TargetGroup to an AutoScalingGroup.",source:"@site/docs/aws/resources/AutoScaling/AutoScalingAttachment.md",sourceDirName:"aws/resources/AutoScaling",slug:"/aws/resources/AutoScaling/AutoScalingAttachment",permalink:"/docs/aws/resources/AutoScaling/AutoScalingAttachment",tags:[],version:"current",frontMatter:{id:"AutoScalingAttachment",title:"AutoScaling Attachment"},sidebar:"docs",previous:{title:"Stage",permalink:"/docs/aws/resources/ApiGatewayV2/Stage"},next:{title:"AutoScaling Group",permalink:"/docs/aws/resources/AutoScaling/AutoScalingGroup"}},s=[{value:"Sample code",id:"sample-code",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"List",id:"list",children:[],level:2}],p={toc:s};function g(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Attach a TargetGroup to an AutoScalingGroup."),(0,o.kt)("h2",{id:"sample-code"},"Sample code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.AutoScaling.makeAutoScalingAttachment({\n  dependencies: ({ resources }) => ({\n    autoScalingGroup: resources.AutoScaling.AutoScalingGroup["ag"],\n    targetGroup: resources.ELBv2.TargetGroup["target-group-rest"],\n  }),\n});\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/aws/resources/AutoScaling/AutoScalingGroup"},"AutoScalingGroup"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/aws/resources/ELBv2/TargetGroup"},"TargetGroup")),(0,o.kt)("h2",{parentName:"li",id:"full-examples"},"Full Examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ELBv2/load-balancer"},"AutoScalingGroup attached to a load balancer")))),(0,o.kt)("h2",{id:"list"},"List"),(0,o.kt)("p",null,"The autoscaling attachments can be filtered with the ",(0,o.kt)("em",{parentName:"p"},"AutoScalingAttachment")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t AutoScalingAttachment\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 16/16\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2 AutoScaling::AutoScalingAttachment from aws                                  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: autoscaling-attachment::ag::target-group-rest                            \u2502\n\u2502 managedByUs: Yes                                                               \u2502\n\u2502 live:                                                                          \u2502\n\u2502   TargetGroupARN: arn:aws:elasticloadbalancing:us-east-1:840541460064:targetg\u2026 \u2502\n\u2502   AutoScalingGroupName: ag                                                     \u2502\n\u2502   AutoScalingGroupARN: arn:aws:autoscaling:us-east-1:840541460064:autoScaling\u2026 \u2502\n\u2502                                                                                \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: autoscaling-attachment::ag::target-group-web                             \u2502\n\u2502 managedByUs: Yes                                                               \u2502\n\u2502 live:                                                                          \u2502\n\u2502   TargetGroupARN: arn:aws:elasticloadbalancing:us-east-1:840541460064:targetg\u2026 \u2502\n\u2502   AutoScalingGroupName: ag                                                     \u2502\n\u2502   AutoScalingGroupARN: arn:aws:autoscaling:us-east-1:840541460064:autoScaling\u2026 \u2502\n\u2502                                                                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                           \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AutoScaling::AutoScalingAttachment \u2502 autoscaling-attachment::ag::target-grou\u2026 \u2502\n\u2502                                    \u2502 autoscaling-attachment::ag::target-grou\u2026 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n2 resources, 1 type, 1 provider\nCommand "gc l -t AutoScalingAttachment" executed in 6s\n')))}g.isMDXComponent=!0}}]);