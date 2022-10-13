"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[5249],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],c={title:"Invoices",sidebar_label:"Invoices"},s=void 0,l={unversionedId:"payment/invoices",id:"payment/invoices",title:"Invoices",description:"Can you email me a copy of my invoice?",source:"@site/docs/payment/05-invoices.md",sourceDirName:"payment",slug:"/payment/invoices",permalink:"/payment/invoices",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/payment/05-invoices.md",tags:[],version:"current",lastUpdatedAt:1619023317,formattedLastUpdatedAt:"Apr 21, 2021",sidebarPosition:5,frontMatter:{title:"Invoices",sidebar_label:"Invoices"},sidebar:"docs",previous:{title:"Manual payments",permalink:"/payment/manual-payments"},next:{title:"Uptime monitoring",permalink:"/monitoring/uptime"}},u={},p=[{value:"Can you email me a copy of my invoice?",id:"can-you-email-me-a-copy-of-my-invoice",level:2},{value:"Where can I find my invoices?",id:"where-can-i-find-my-invoices",level:2},{value:"My invoice is wrong. What should I do?",id:"my-invoice-is-wrong-what-should-i-do",level:2},{value:"What&#39;s <code>fakturoid</code> in invoices URL?",id:"whats-fakturoid-in-invoices-url",level:2}],m={toc:p};function d(e){var t=e.components,c=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"can-you-email-me-a-copy-of-my-invoice"},"Can you email me a copy of my invoice?"),(0,r.kt)("p",null,"Yes. Testomato is always sending you an invoice copy to your email. You can add three additional emails that also getting invoice copy.\nJust change you preferences at ",(0,r.kt)("a",{parentName:"p",href:"https://www.testomato.com/user/payments/billing"},"Your Profile > Billing & Payment > Billing Information")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Invoice emails",src:n(28248).Z,width:"988",height:"225"}),"  "),(0,r.kt)("h2",{id:"where-can-i-find-my-invoices"},"Where can I find my invoices?"),(0,r.kt)("p",null,"All Testomato invoices can be downloaded under ",(0,r.kt)("a",{parentName:"p",href:"https://www.testomato.com/user/payments/invoices"},"Your Profile > Billing & Payment > Your Invoices")," page.\nAdditionally, a copy of your invoices is always sent to the email address registered to your account. "),(0,r.kt)("h2",{id:"my-invoice-is-wrong-what-should-i-do"},"My invoice is wrong. What should I do?"),(0,r.kt)("p",null,"If you have any concerns on your invoice, please contact us by sending a message to: ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@testomato.com"},"support@testomato.com")," with following details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Invoice Number"),(0,r.kt)("li",{parentName:"ul"},"Your account id or email"),(0,r.kt)("li",{parentName:"ul"},"Reason for Dispute")),(0,r.kt)("h2",{id:"whats-fakturoid-in-invoices-url"},"What's ",(0,r.kt)("inlineCode",{parentName:"h2"},"fakturoid")," in invoices URL?"),(0,r.kt)("p",null,"Some of our invoices URL leads outside Testomato domain, that's because we are using ",(0,r.kt)("a",{parentName:"p",href:"https://www.fakturoid.cz/"},"Fakturoid")," for Invoicing.\n",(0,r.kt)("a",{parentName:"p",href:"https://www.fakturoid.cz/"},"Fakturoid")," is Czech well known invoice services. Our official account URL under Fakturoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://app.fakturoid.cz/testomato1/\n")),(0,r.kt)("img",{src:"https://www.fakturoid.cz/images/fakturoid-logo/fakturoid-logo.png",width:"180px"}))}d.isMDXComponent=!0},28248:function(e,t,n){t.Z=n.p+"assets/images/invoice-emails-6ab8fa315351ef80806598c37937249e.png"}}]);