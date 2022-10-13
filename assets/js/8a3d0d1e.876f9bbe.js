"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[567],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Manual payments"},u=void 0,p={unversionedId:"payment/manual-payments",id:"payment/manual-payments",title:"Manual payments",description:"Required billing information",source:"@site/docs/payment/04-manual-payments.md",sourceDirName:"payment",slug:"/payment/manual-payments",permalink:"/payment/manual-payments",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/payment/04-manual-payments.md",tags:[],version:"current",lastUpdatedAt:1638181152,formattedLastUpdatedAt:"Nov 29, 2021",sidebarPosition:4,frontMatter:{title:"Manual payments"},sidebar:"docs",previous:{title:"PayPal payments",permalink:"/payment/paypal-payments"},next:{title:"Invoices",permalink:"/payment/invoices"}},c={},m=[{value:"Required billing information",id:"required-billing-information",level:2},{value:"Pay received invoice",id:"pay-received-invoice",level:2},{value:"USD Bank Account:",id:"usd-bank-account",level:2},{value:"EUR Bank Account:",id:"eur-bank-account",level:2},{value:"CZK Bank Account:",id:"czk-bank-account",level:2},{value:"Bank address",id:"bank-address",level:2}],s={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"required-billing-information"},"Required billing information"),(0,o.kt)("p",null,"If you decide pay Testomato subscription manually via ",(0,o.kt)("strong",{parentName:"p"},"Wire/bank transfer")," or ",(0,o.kt)("strong",{parentName:"p"},"PayPal")," we\nwill require following billing information from you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"First name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Last name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Street address")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"City")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Postal code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Country"))),(0,o.kt)("p",null,"and optional also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Company name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"VAT number")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registration number"))),(0,o.kt)("p",null,"Please contact us first at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@testomato.com"},"support@testomato.com"),", we have to prepare everything for you."),(0,o.kt)("h2",{id:"pay-received-invoice"},"Pay received invoice"),(0,o.kt)("p",null,"Once you have received an invoice from Testomato, click the ",(0,o.kt)("strong",{parentName:"p"},"Pay via PayPal")," or ",(0,o.kt)("strong",{parentName:"p"},"Bank transfer")," button and follow the steps:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(52509).Z,width:"1100",height:"1128"})),(0,o.kt)("h2",{id:"usd-bank-account"},"USD Bank Account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Account number: 224721691 / 0600 (USD)\nSWIFT: AGBACZPP\nIBAN: CZ6306000000000224721691\n")),(0,o.kt)("h2",{id:"eur-bank-account"},"EUR Bank Account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Account number: 229149815 / 0600 (EUR)\nSWIFT: AGBACZPP\nIBAN: CZ0506000000000229149815\n")),(0,o.kt)("h2",{id:"czk-bank-account"},"CZK Bank Account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Account number: 224721819/0600 (CZK)\nSWIFT: AGBACZPP\nIBAN: CZ0206000000000224721819\n")),(0,o.kt)("h2",{id:"bank-address"},"Bank address"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"MONETA Money Bank, a.s."),(0,o.kt)("br",null),"\nBB Centrum, Vysko\u010dilova 1422/1a",(0,o.kt)("br",null),"\n140 00 Praha 4 - Michle",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.moneta.cz"},"https://www.moneta.cz"))))}d.isMDXComponent=!0},52509:function(e,t,n){t.Z=n.p+"assets/images/invoice-cd3db44172991e35f2091437800f552d.png"}}]);