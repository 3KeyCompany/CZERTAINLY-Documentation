"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6883],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=n,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?i.createElement(m,a(a({ref:t},l),{},{components:r})):i.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91379:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var i=r(83117),n=r(80102),o=(r(67294),r(3905)),a=["components"],c={},s="Create Intune Profiles",u={unversionedId:"certificate-key/integration-guides/intune/create-intune-profiles",id:"certificate-key/integration-guides/intune/create-intune-profiles",title:"Create Intune Profiles",description:"For successful enrollment of certificate to device, it is necessary to configure Intune configuration profiles.",source:"@site/docs/10-certificate-key/20-integration-guides/12-intune/07-create-intune-profiles.md",sourceDirName:"10-certificate-key/20-integration-guides/12-intune",slug:"/certificate-key/integration-guides/intune/create-intune-profiles",permalink:"/docs/certificate-key/integration-guides/intune/create-intune-profiles",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/20-integration-guides/12-intune/07-create-intune-profiles.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure Intune SCEP Profile",permalink:"/docs/certificate-key/integration-guides/intune/configure-scep-intune"},next:{title:"Enroll Device",permalink:"/docs/certificate-key/integration-guides/intune/enroll-device"}},l={},f=[{value:"Trusted certificate configuration profiles",id:"trusted-certificate-configuration-profiles",level:2},{value:"SCEP certificate configuration profile",id:"scep-certificate-configuration-profile",level:2}],p={toc:f},d="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-intune-profiles"},"Create Intune Profiles"),(0,o.kt)("p",null,"For successful enrollment of certificate to device, it is necessary to configure Intune configuration profiles."),(0,o.kt)("h2",{id:"trusted-certificate-configuration-profiles"},"Trusted certificate configuration profiles"),(0,o.kt)("p",null,"Trusted certificate profile is used to deploy the trusted certificates to devices that will be enrolled with certificate through Intune. Trusted root certificates establish a trust from the device to your root or intermediate (issuing) CA from which the other certificates are issued."),(0,o.kt)("p",null,"Following ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/mem/intune/protect/certificates-trusted-root#to-create-a-trusted-certificate-profile"},"To create a trusted certificate profile"),", create trusted certificate profiles for root CA certificate and issuing (intermediate) CA certificates and select corresponding destination:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Computer certificate store - root CA certificate"),(0,o.kt)("li",{parentName:"ul"},"Computer certificate store - issuing CA certificate"),(0,o.kt)("li",{parentName:"ul"},"User certificate store - issuing CA certificate")),(0,o.kt)("p",null,"Based on the selected destination, the CA certificate will be deployed to the corresponding certificate store on the device."),(0,o.kt)("p",null,"Create as many trusted certificate profiles as you need to represent the chain of trust for both device certificates and ",(0,o.kt)("inlineCode",{parentName:"p"},"SCEP Profile")," certificate."),(0,o.kt)("admonition",{title:"CA certificate",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Selected SCEP CA certificate in ",(0,o.kt)("inlineCode",{parentName:"p"},"SCEP profile")," has to be issued by same CA as device certificates that will be enrolled through Intune, for more information, see ",(0,o.kt)("a",{parentName:"p",href:"./configure-scep-intune#scep-profile-certificate"},(0,o.kt)("inlineCode",{parentName:"a"},"SCEP Profile")," certificate"),".")),(0,o.kt)("h2",{id:"scep-certificate-configuration-profile"},"SCEP certificate configuration profile"),(0,o.kt)("p",null,"For devices to use SCEP certificate profile, they must trust your Trusted Root Certification Authority (CA) by deploying a trusted certificate profile to the same group that receives the SCEP certificate profile."),(0,o.kt)("p",null,"Following ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/mem/intune/protect/certificates-profile-scep#create-a-scep-certificate-profile"},"Create a SCEP certificate profile"),", create SCEP certificate profile with the following configuration specific to CZERTAINLY SCEP service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Root Certificate")," - select trusted certificate profile representing issuing CA certificate"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SCEP Server URLs")," - specify URL found in detail page of ",(0,o.kt)("inlineCode",{parentName:"li"},"SCEP Profile")," without ",(0,o.kt)("inlineCode",{parentName:"li"},"pkiclient.exe"))),(0,o.kt)("admonition",{title:"SCEP Server URLs",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"See ",(0,o.kt)("a",{parentName:"p",href:"../../protocols/scep/overview#scep-profile-vs-ra-profile-scep-api"},"SCEP Profile vs RA Profile SCEP API")," for more information on how to configure SCEP server URL. For example, it can be:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://<hostname>:<port>/api/v1/protocols/scep/{scepProfileName}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://<hostname>:<port>/api/v1/protocols/scep/raProfile/{raProfileName}")))),(0,o.kt)("p",null,"After SCEP certificate profile is created, assign it to corresponding group."),(0,o.kt)("admonition",{title:"Manage groups and users",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In case you need more information how to create group to manage your users, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/mem/intune/fundamentals/quickstart-create-group"},"Step 3 - Create a group to manage users")," of the Microsoft Intune evaluation guide. ")))}m.isMDXComponent=!0}}]);