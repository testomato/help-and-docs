"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[648],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=p(r),u=a,f=l["".concat(s,".").concat(u)]||l[u]||m[u]||i;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=l;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},68385:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),c=["components"],o={title:"Credit card payments"},s=void 0,p={unversionedId:"payment/credit-card",id:"payment/credit-card",title:"Credit card payments",description:"Are my credit cards safe with Testomato?",source:"@site/docs/payment/02-credit-card.md",sourceDirName:"payment",slug:"/payment/credit-card",permalink:"/payment/credit-card",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/payment/02-credit-card.md",tags:[],version:"current",lastUpdatedAt:1638181254,formattedLastUpdatedAt:"Nov 29, 2021",sidebarPosition:2,frontMatter:{title:"Credit card payments"},sidebar:"docs",previous:{title:"Payment methods",permalink:"/payment/payment"},next:{title:"PayPal payments",permalink:"/payment/paypal-payments"}},d={},m=[{value:"Are my credit cards safe with Testomato?",id:"are-my-credit-cards-safe-with-testomato",level:2},{value:"Pay with credit card",id:"pay-with-credit-card",level:2},{value:"Which Credit Cards Are accepted?",id:"which-credit-cards-are-accepted",level:3}],l={toc:m};function u(e){var t=e.components,o=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"are-my-credit-cards-safe-with-testomato"},"Are my credit cards safe with Testomato?"),(0,i.kt)("p",null,"Yes. We are using ",(0,i.kt)("a",{parentName:"p",href:"https://www.braintreepayments.com/"},"BraintreePayments gateway")," for processing and storing your credit card information."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Braintree Payments")," is a merchant account provider based in Chicago, Illinois.\nFounded in 2007, Braintree markets its services primarily to e-commerce merchants,\nsubscription-based businesses, and merchants that key in all of their credit card transactions.\n",(0,i.kt)("a",{parentName:"p",href:"https://www.braintreepayments.com/cz/about-braintree"},"About Braintree"))),(0,i.kt)("h2",{id:"pay-with-credit-card"},"Pay with credit card"),(0,i.kt)("p",null,"Chose ",(0,i.kt)("strong",{parentName:"p"},"Card")," from ",(0,i.kt)("strong",{parentName:"p"},"Payment method"),": "),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(90864).Z,width:"981",height:"212"})),(0,i.kt)("p",null,"Enter credit card information:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(68327).Z,width:"985",height:"418"})),(0,i.kt)("p",null,"If you and the Business are based in the EU, the payment may require Strong Customer Authentication (SCA) first.\nYou\u2019ll receive a push notification, a text message or another method chosen by your bank,\ncomplete this authentication and your credit card payment will now begin processing."),(0,i.kt)("h3",{id:"which-credit-cards-are-accepted"},"Which Credit Cards Are accepted?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://usa.visa.com"},"Visa")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mastercard.us"},"Mastercard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.discover.com"},"Discover")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mastercard.us"},"Maestro"))))}u.isMDXComponent=!0},68327:function(e,t,r){t.Z=r.p+"assets/images/credit-card-2ba9cbaa6b5bedc2cdbee3dae35802bc.png"},90864:function(e,t,r){t.Z=r.p+"assets/images/payment-methods-814ba85990c1ee2cf7df2386b1d31abd.png"}}]);