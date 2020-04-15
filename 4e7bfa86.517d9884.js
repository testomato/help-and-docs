(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),c=(n(0),n(123)),i={id:"project-response-times",title:"Project Response Times"},o={id:"api/project-response-times",title:"Project Response Times",description:"# Project Response Times",source:"@site/docs/api/project-response-times.md",permalink:"/docs/api/project-response-times",editUrl:"https://github.com/testomato/help-and-docs/edit/master/docs/api/project-response-times.md",lastUpdatedAt:1586893071,sidebar:"someSidebar",previous:{title:"Project Status",permalink:"/docs/api/project-status"},next:{title:"Areas",permalink:"/docs/api/areas"}},p=[{value:"API Endpoint",id:"api-endpoint",children:[]},{value:"Request params",id:"request-params",children:[]},{value:"Call example",id:"call-example",children:[]},{value:"Response",id:"response",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"project-response-times"},"Project Response Times"),Object(c.b)("h2",{id:"api-endpoint"},"API Endpoint"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-txt",metastring:'title="API endpoint"',title:'"API','endpoint"':!0}),"GET /api/project/[id]/responseTimes?start=[date]&time=[date]apikey=[key]\n")),Object(c.b)("h2",{id:"request-params"},"Request params"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"id")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Your project ID"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"apikey")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An API key unique to each project"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"start")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Date in ISO 8601"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"end")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Date in ISO 8601"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required")))),Object(c.b)("h2",{id:"call-example"},"Call example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0}),'curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/responseTimes?apikey=4PJAOwTK&start=2020-04-01T00:00:00.000+02:00&end=2020-04-30T23:59:59.999+02:00"\n')),Object(c.b)("h2",{id:"response"},"Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0}),'[\n    [\n        "Time",\n        "DNS Lookup",\n        "Initial connection",\n        "SSL",\n        "Request",\n        "Waiting",\n        "Content download",\n        "Total"\n    ],\n    [ 1586880000, 0.1, 1, 5.8, 0, 31.1, 3.1, 42.1],\n    [ 1586885000, 0.1, 1, 5.9, 0, 32, 3, 42.3 ],\n    [ 1586890000, 0, 0.9, 5.8, 0, 33.6, 3.1, 44.3]\n]\n')))}b.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||c;return n?a.a.createElement(m,o({ref:t},l,{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);