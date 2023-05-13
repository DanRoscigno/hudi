"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[84472],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(a),m=n,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6746:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(72389);function i(e){let{children:t,url:i}=e;return(0,n.Z)()&&(a.g.window.location.href=i),r.createElement("span",null,t,"or click ",r.createElement("a",{href:i},"here"))}},3108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),i=a(6746);const o={title:"Setting Uber\u2019s Transactional Data Lake in Motion with Incremental ETL Using Apache Hudi",authors:[{name:"Vinoth Govindarajan"},{name:"Saketh Chintapalli"},{name:"Yogesh Saswade"},{name:"Aayush Bareja"}],category:"blog",image:"/assets/images/blog/hudi-lakehouse-architecture-uber.png",tags:["incremental-processing","datalake","apache hudi","medallion architecture","uber"]},l=void 0,c={permalink:"/blog/2023/03/16/Setting-Uber-Transactional-Data-Lake-in-Motion-with-Incremental-ETL-Using-Apache-Hudi",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-03-16-Setting-Uber-Transactional-Data-Lake-in-Motion-with-Incremental-ETL-Using-Apache-Hudi.mdx",source:"@site/blog/2023-03-16-Setting-Uber-Transactional-Data-Lake-in-Motion-with-Incremental-ETL-Using-Apache-Hudi.mdx",title:"Setting Uber\u2019s Transactional Data Lake in Motion with Incremental ETL Using Apache Hudi",description:"Redirecting... please wait!!",date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[{label:"incremental-processing",permalink:"/blog/tags/incremental-processing"},{label:"datalake",permalink:"/blog/tags/datalake"},{label:"apache hudi",permalink:"/blog/tags/apache-hudi"},{label:"medallion architecture",permalink:"/blog/tags/medallion-architecture"},{label:"uber",permalink:"/blog/tags/uber"}],readingTime:.045,truncated:!1,authors:[{name:"Vinoth Govindarajan"},{name:"Saketh Chintapalli"},{name:"Yogesh Saswade"},{name:"Aayush Bareja"}],prevItem:{title:"Introducing native support for Apache Hudi, Delta Lake, and Apache Iceberg on AWS Glue for Apache Spark, Part 2: AWS Glue Studio Visual Editor",permalink:"/blog/2023/03/20/Introducing-native-support-for-Apache Hudi-Delta-Lake-and-Apache-Iceberg-on-AWS-Glue-for-Apache-Spark-Part-2-AWS-Glue-Studio-Visual-Editor"},nextItem:{title:"Getting Started: Manage your Hudi tables with the admin Hudi-CLI tool",permalink:"/blog/2023/02/22/Getting-Started-Manage-your-Hudi-tables-with-the-admin-Hudi-CLI-tool"}},u={authorsImageUrls:[void 0,void 0,void 0,void 0]},p=[],s={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{url:"https://www.uber.com/blog/ubers-lakehouse-architecture/",mdxType:"Redirect"},"Redirecting... please wait!! "))}m.isMDXComponent=!0}}]);