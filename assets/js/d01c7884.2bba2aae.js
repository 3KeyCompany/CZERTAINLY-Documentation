"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8408],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={},p="Key",d={unversionedId:"concept-design/core-components/key",id:"concept-design/core-components/key",title:"Key",description:"The Key holds the information about the cryptographic key and its lifecycle. It represents the cryptographic key in a human-readable format. Key holds the following information:",source:"@site/docs/02-concept-design/04-core-components/16-key.md",sourceDirName:"02-concept-design/04-core-components",slug:"/concept-design/core-components/key",permalink:"/docs/concept-design/core-components/key",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Token",permalink:"/docs/concept-design/core-components/token"},next:{title:"Token Profile",permalink:"/docs/concept-design/core-components/token-profile"}},m={},s=[{value:"Attributes",id:"attributes",level:2},{value:"Key state",id:"key-state",level:2},{value:"Key usage",id:"key-usage",level:2}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"key"},"Key"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," holds the information about the cryptographic key and its lifecycle. It represents the cryptographic key in a human-readable format. ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," holds the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key")," management details"),(0,i.kt)("li",{parentName:"ul"},"Attributes of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Key")),(0,i.kt)("li",{parentName:"ul"},"Association with other related objects like ",(0,i.kt)("inlineCode",{parentName:"li"},"Certificate")),(0,i.kt)("li",{parentName:"ul"},"History of events associated with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Key")),(0,i.kt)("li",{parentName:"ul"},"Wrapped content of other related parts of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Key"),", for example public/private key, or split/component parts")),(0,i.kt)("p",null,"In addition to the above details, the following are mapped to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," for the ease of management:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Token Profile")," it belongs to and managed by"),(0,i.kt)("li",{parentName:"ul"},"Owner of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Group")," it belongs to"),(0,i.kt)("li",{parentName:"ul"},"Optionally description of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Key"))),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Key")," attributes hold information related to the platform. It can contain Custom Attributes as well as Metadata Attributes."),(0,i.kt)("p",null,"Metadata Attributes provides any additional information about the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," that can be technology specific.\nThey can be used for further processing of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," by different components and modules of the platform."),(0,i.kt)("h2",{id:"key-state"},"Key state"),(0,i.kt)("p",null,"Every key has defined its state during its lifecycle. The state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," defines its lifecycle phase and operations that can be performed.\nOnce the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," is created, it is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pre-active")," state and must be activated before it can be used for any cryptographic operation."),(0,i.kt)("p",null,"The following states are supported:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"State"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Pre-active")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"Key")," is created and ready to be used once activated, or activate date is reached")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Active")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"Key")," is ready to be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Deactivated")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"Key")," is not ready to be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Compromised")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"Key")," is compromised and cannot be used, however it still exists")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Destroyed")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"Key")," is destroyed and mark for removal, however it is still in the inventory for the auditing purposes")))),(0,i.kt)("p",null,"The transition ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," state diagram is as follows:"),(0,i.kt)("p",null,(0,i.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/ZP3F2i8m3CRlUOgmez1Na8a-W7VnKDR02dOjIHJszeOojPiUl7tv9VdofnVrhFTqWp46Gaf5Pmma0yUYCKy0Lg24tPd9-K7ZWphqWXOUQWHmsLtHkNs3tghod_14efnd2Xj-pAbmJb4iioglissJ08rk_VynUStSMdmoJUjNpw8gjwC1Ufg2lUu9"})),(0,i.kt)("h2",{id:"key-usage"},"Key usage"),(0,i.kt)("p",null,"Every key has defined its key usages. The key usage can restrict the type of cryptographic operation that can be performed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key"),"."),(0,i.kt)("p",null,"The following key usages are supported:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Encrypt")),(0,i.kt)("td",{parentName:"tr",align:null},"Allows to request encryption operation using the ",(0,i.kt)("inlineCode",{parentName:"td"},"Key"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Decrypt")),(0,i.kt)("td",{parentName:"tr",align:null},"Allows to request decryption operation using the ",(0,i.kt)("inlineCode",{parentName:"td"},"Key"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Sign")),(0,i.kt)("td",{parentName:"tr",align:null},"Allows to request signing operation using the ",(0,i.kt)("inlineCode",{parentName:"td"},"Key"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Verify")),(0,i.kt)("td",{parentName:"tr",align:null},"Allows to request verification operation using the ",(0,i.kt)("inlineCode",{parentName:"td"},"Key"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Wrap")),(0,i.kt)("td",{parentName:"tr",align:null},"Allows to request wrapping operation using the ",(0,i.kt)("inlineCode",{parentName:"td"},"Key"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Unwrap")),(0,i.kt)("td",{parentName:"tr",align:null},"Allows to request unwrapping operation using the ",(0,i.kt)("inlineCode",{parentName:"td"},"Key"))))),(0,i.kt)("p",null,"The supported key usages and key types combinations are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Key Usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Public Key")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Encrypt"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Verify"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Wrap"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Private Key")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Decrypt"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Sign"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Unwrap"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Secret Key")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Encrypt"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Decrypt"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Sign"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Verify"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Wrap"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Unwrap"))))))}c.isMDXComponent=!0}}]);