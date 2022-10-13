"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[2313],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return f}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},m=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=p(n),f=r,d=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return n?o.createElement(d,a(a({ref:e},m),{},{components:n})):o.createElement(d,a({ref:e},m))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72644:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"uptime",title:"Uptime monitoring"},l=void 0,p={unversionedId:"monitoring/uptime",id:"monitoring/uptime",title:"Uptime monitoring",description:"Getting false timeouts",source:"@site/docs/monitoring/01-uptime.md",sourceDirName:"monitoring",slug:"/monitoring/uptime",permalink:"/monitoring/uptime",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/monitoring/01-uptime.md",tags:[],version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"Apr 19, 2021",sidebarPosition:1,frontMatter:{id:"uptime",title:"Uptime monitoring"},sidebar:"docs",previous:{title:"Invoices",permalink:"/payment/invoices"},next:{title:"Hypertext Transfer Protocol",permalink:"/monitoring/http"}},m={},u=[{value:"Getting false timeouts",id:"getting-false-timeouts",level:3},{value:"Location Matters",id:"location-matters",level:3},{value:"Disable Uptime Monitoring",id:"disable-uptime-monitoring",level:2},{value:"How to Disable Uptime Monitoring",id:"how-to-disable-uptime-monitoring",level:4}],c={toc:u};function f(t){var e=t.components,s=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"getting-false-timeouts"},"Getting false timeouts"),(0,i.kt)("p",null,"Why Does Testomato Say My Site Is Down When It's Not? Testomato may\noccasionally report your site is down or unavailable, but everything\nlooks fine when you go and investigate the problem for yourself."),(0,i.kt)("h3",{id:"location-matters"},"Location Matters"),(0,i.kt)("p",null,"Uptime Monitoring in Testomato is done externally rather than internally\nThis means that ",(0,i.kt)("a",{parentName:"p",href:"https://www.testomato.com"},"Testomatobot")," tests and\nmonitors your site or server from a location that is outside the\nlocal network where your server is hosted."),(0,i.kt)("p",null,"In some cases, a project may be unavailable to Testomato a very short\nperiod of time due to problems with network latency, i.e. how long it\ntakes data to get from one point to another."),(0,i.kt)("p",null,"To help avoid sending alerts about false timeouts or short-term issues,\nwe retest your project a second time before we send an alert if\n",(0,i.kt)("a",{parentName:"p",href:"https://www.testomato.com"},"Testomato")," is unable to connect with your site or server."),(0,i.kt)("p",null,"We have also started adding more testing locations in Testomato to help\nminimize the influence of our connection on your project test results."),(0,i.kt)("h2",{id:"disable-uptime-monitoring"},"Disable Uptime Monitoring"),(0,i.kt)("p",null,"Site downtime can mean loss of revenue and user trust, so it's important\nto stay one step ahead by knowing when your website is up or down.\nUptime Monitoring & Response Time is automatically enabled for our:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Professional Plan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Business Plan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enterprise Plan")),(0,i.kt)("li",{parentName:"ul"},"and during a 30-day free trial period")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If your plan does not support uptime monitoring, please take a look at\nour ",(0,i.kt)("a",{parentName:"p",href:"https://www.testomato.com/pricing"},"pricing plans")," for more\ninformation.")),(0,i.kt)("h4",{id:"how-to-disable-uptime-monitoring"},"How to Disable Uptime Monitoring"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on the project you'd like to manage or select it from your All\nprojects menu in the top right corner."),(0,i.kt)("li",{parentName:"ol"},"Click to ",(0,i.kt)("strong",{parentName:"li"},"edit button")," near to uptime ",(0,i.kt)("img",{src:n(52438).Z,width:"1392",height:"601"})),(0,i.kt)("li",{parentName:"ol"},"Then select ",(0,i.kt)("inlineCode",{parentName:"li"},"OFF")," in uptime interval menu, and confirm change ",(0,i.kt)("img",{src:n(70930).Z,width:"506",height:"204"}))))}f.isMDXComponent=!0},70930:function(t,e,n){e.Z=n.p+"assets/images/uptime-disable-068599a82cdf6b0866e733cc279ceccb.png"},52438:function(t,e,n){e.Z=n.p+"assets/images/uptime-setup-44dff714683fb6b1afce390910bf5d18.png"}}]);