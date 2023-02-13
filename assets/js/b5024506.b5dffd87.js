"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9894],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],s={},l="Access control",c={unversionedId:"contributors/access-control",id:"contributors/access-control",title:"Access control",description:"Authorization is an integral part of CZERTAINLY platform. Each authenticated user and permissions are represented by internal authorization token which is evaluated using Open Policy Agent (OPA) and pre-defined policies. For more information, refer to Access Control.",source:"@site/docs/60-contributors/08-access-control.md",sourceDirName:"60-contributors",slug:"/contributors/access-control",permalink:"/docs/contributors/access-control",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database control",permalink:"/docs/contributors/database"}},p={},u=[{value:"Resources and actions",id:"resources-and-actions",level:2},{value:"Permissions object",id:"permissions-object",level:2},{value:"<code>@ExternalAuthorization</code> annotation",id:"externalauthorization-annotation",level:2},{value:"Object access level permissions evaluation",id:"object-access-level-permissions-evaluation",level:2},{value:"How are resource and actions synchronized",id:"how-are-resource-and-actions-synchronized",level:2},{value:"<code>@AuthEndpoint</code> annotation",id:"authendpoint-annotation",level:2},{value:"Extending resources and actions",id:"extending-resources-and-actions",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-control"},"Access control"),(0,r.kt)("p",null,"Authorization is an integral part of CZERTAINLY platform. Each authenticated user and permissions are represented by internal authorization token which is evaluated using ",(0,r.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/"},"Open Policy Agent")," (OPA) and pre-defined policies. For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/concept-design/architecture/access-control/overview"},"Access Control"),"."),(0,r.kt)("p",null,"For more information about the definition of authorization policies, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Auth-OPA-Policies"},"CZERTAINLY Auth OPA Policies")," repository. Individual permissions are set for roles existing in ",(0,r.kt)("inlineCode",{parentName:"p"},"Auth")," service which then can be assigned to users."),(0,r.kt)("h2",{id:"resources-and-actions"},"Resources and actions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Core")," service works with different types of objects (entities) that are called ",(0,r.kt)("strong",{parentName:"p"},"resources"),". Each resource then has defined set of ",(0,r.kt)("strong",{parentName:"p"},"actions")," that are available for that particular resource. Available resources and actions are defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," type to easily refer to."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Access Control Enum"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Resources")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Core/blob/master/src/main/java/com/czertainly/core/model/auth/Resource.java"},"Resource enum"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Actions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Core/blob/master/src/main/java/com/czertainly/core/model/auth/ResourceAction.java"},"ResourceAction enum"))))),(0,r.kt)("p",null,"The list of available actions for particular resources is dynamically constructed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Core")," service based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"@ExternalAuthorization")," annotation. Continue reading to get more details."),(0,r.kt)("h2",{id:"permissions-object"},"Permissions object"),(0,r.kt)("p",null,"The permissions object represents set of actions performed on resources that need to be evaluated. It conforms with the JSON data structure and is constructed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Auth")," service and evaluated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"OPA")," service."),(0,r.kt)("p",null,"Individual permissions can be evaluated on two levels (represented by different OPA policies), generally if action is allowed / denied on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"resource level or (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/3KeyCompany/CZERTAINLY-Auth-OPA-Policies/blob/develop/policies/method_policy.rego"},"Method policy"),")"),(0,r.kt)("li",{parentName:"ul"},"on object level for specific object UUID. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/3KeyCompany/CZERTAINLY-Auth-OPA-Policies/blob/develop/policies/objects_policy.rego"},"Objects policy"),")")),(0,r.kt)("p",null,"Example of permissions objects for some resource can be seen on following excerpt from authorization token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": {\n    "allowAllResources": false,\n    "resources":\n    [\n      {\n        "name": "raProfiles",\n        "allowAllActions": false,\n        "actions": [ "detail", "list" ],\n        "objects": [\n          {\n            "name": "NG-RA-Profile1",\n            "uuid": "d7d5b6e6-0335-4492-a994-6120751fced1",\n            "allow": [],\n            "deny": [ "detail" ]\n          }\n        ]\n      },\n      {\n        "name": "certificates",\n        "allowAllActions": true,\n        "actions": [],\n        "objects": []\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"In this example there are permissions defined for two resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raProfiles")," and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"certificates"),".\nFor ",(0,r.kt)("inlineCode",{parentName:"li"},"certificates")," resource all actions are allowed and for ",(0,r.kt)("inlineCode",{parentName:"li"},"raProfiles")," detail and list action on any RA Profile except RA Profile named ",(0,r.kt)("em",{parentName:"li"},"NG-RA-Profile1")," where detail action is denied.")),(0,r.kt)("admonition",{title:"OPA evaluation input",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Auth-OPA-Policies/blob/master/samples/input.json"},(0,r.kt)("inlineCode",{parentName:"a"},"input.json"))," for a complete input sample for OPA evaluation.")),(0,r.kt)("h2",{id:"externalauthorization-annotation"},(0,r.kt)("inlineCode",{parentName:"h2"},"@ExternalAuthorization")," annotation"),(0,r.kt)("p",null,"Authorization process is triggered by accessing methods annotated with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Core/blob/master/src/main/java/com/czertainly/core/security/authz/ExternalAuthorization.java"},(0,r.kt)("inlineCode",{parentName:"a"},"@ExternalAuthorization")," annotation"),". Typically, public methods of service implementations are annotated with this annotation, to require authorization if service is called from anywhere across ",(0,r.kt)("inlineCode",{parentName:"p"},"Core")," service."),(0,r.kt)("p",null,"Authorization mechanism itself is driven by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-security/reference/servlet/authorization/architecture.html"},"Spring framework")," security layer and custom implementations of ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessDecisionVoter"),"."),(0,r.kt)("p",null,"For example, voter responsible for evaluating ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," policies extracts parameters of annotation of method that is being accessed and constructs input to include in request to OPA evaluation. Based on response from ",(0,r.kt)("inlineCode",{parentName:"p"},"OPA")," service, result can be ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCESS_GRANTED")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCESS_DENIED"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@ExternalAuthorization")," annotation has parameters to define two pairs of ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceAction"),". One is for resource that is being accessed and the second for parent resource. Both can be evaluated simultaneously to authorize access to resources in hierarchical dependency.\nResource and action names are codes for enums defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"Core")," service."),(0,r.kt)("p",null,"To specify parent resource/action is optional and its usage depends on the context, if method requires authorization for more resources. Typically, you can use evaluation of permissions together with parent resource when input of your method are two resources that are hierarchically related (e.g., concept of principal and dependent entities in DB).\nBut in case access to other resource is in separate corresponding service method, permissions for that resource can be evaluated separately in its own context (service)."),(0,r.kt)("admonition",{title:"Parent resource",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Even the name parent resource suggests some dependency between resources specified, you can use parent resource / action pair to evaluate any resource pair without any relation.")),(0,r.kt)("p",null,"For example, method annotated with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@ExternalAuthorization(\n  resource = Resource.RA_PROFILE,\n  action = ResourceAction.DELETE,\n  parentResource = Resource.AUTHORITY,\n  parentAction = ResourceAction.DETAIL\n)\n")),(0,r.kt)("p",null,"means that accessing this method triggers evaluation of permissions for ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," action on resource ",(0,r.kt)("inlineCode",{parentName:"p"},"raProfiles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"detail")," action on parent resource ",(0,r.kt)("inlineCode",{parentName:"p"},"authorities"),". (Note: Between resource ",(0,r.kt)("inlineCode",{parentName:"p"},"raProfiles")," and parent resource ",(0,r.kt)("inlineCode",{parentName:"p"},"authorities")," is one-to-many relationship)."),(0,r.kt)("h2",{id:"object-access-level-permissions-evaluation"},"Object access level permissions evaluation"),(0,r.kt)("p",null,"In case we want to evaluate permissions for resource / action on object access level, ",(0,r.kt)("inlineCode",{parentName:"p"},"@ExternalAuthorization")," annotation is combined with method parameters. Parameter representing UUID of object that should be evaluated needs to be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"SecuredUUID"),". To evaluate object access level for parent resource / action, we use similarly type ",(0,r.kt)("inlineCode",{parentName:"p"},"SecuredParentUUID"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@ExternalAuthorization(\n  resource = Resource.RA_PROFILE,\n  action = ResourceAction.DELETE,\n  parentResource = Resource.AUTHORITY,\n  parentAction = ResourceAction.DETAIL\n)\npublic void deleteRaProfile(SecuredParentUUID authorityUuid, SecuredUUID uuid) throws NotFoundException {\n    // your code\n}\n")),(0,r.kt)("p",null,"In the example above we can see how annotation and method signature should look if we want to evaluate permissions to delete RA Profile object with UUID specified by parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," and permissions to retrieve detail of object of parent resource authority with UUID specified by parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"authorityUuid"),"."),(0,r.kt)("p",null,"If we have list of UUIDs to evaluate, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"List<SecuredUuid>")," type in similar fashion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@ExternalAuthorization(\n  resource = Resource.RA_PROFILE,\n  action = ResourceAction.DELETE\n)\npublic void bulkDeleteRaProfile(List<SecuredUUID> uuids) {\n    // your code\n}\n")),(0,r.kt)("p",null,"Other use case for evaluation object access level permissions is when we want to filter list of retrieved objects to contain only objects that have allowed action specified in the annotation (usually applicable in listing endpoints)."),(0,r.kt)("p",null,"This can be achieved by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"SecurityFilter")," object to method annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@ExternalAuthorization"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"SecurityFilter")," contains resource filters (for resource and parent resource from annotation) with list of allowed and denied object UUIDs that are populated with response from OPA ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," policy evaluation. ",(0,r.kt)("inlineCode",{parentName:"p"},"SecurityFilter")," can then be used for example to filter out records retrieved from DB."),(0,r.kt)("p",null,"If you want to automatize retrieving records from database based on ",(0,r.kt)("inlineCode",{parentName:"p"},"SecurityFilter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Core")," service offers generic implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"SecurityFilterRepository"),". Its method ",(0,r.kt)("inlineCode",{parentName:"p"},"findUsingSecurityFilter")," constructs query with ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE IN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE NOT IN")," conditions based on lists of allowed and denied UUIDs in security filter.\nIn case if parent resource is set, it is necessary to set property of entity (representing resource object) that holds reference UUID for parent resource (DB table column). It can be done by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"parentRefProperty")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"SecurityFilter"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@ExternalAuthorization(\n  resource = Resource.RA_PROFILE,\n  action = ResourceAction.LIST,\n  parentResource = Resource.AUTHORITY,\n  parentAction = ResourceAction.LIST\n)\npublic List<RaProfileDto> listRaProfiles(SecurityFilter filter) {\n    filter.setParentRefProperty("authorityInstanceReferenceUuid");\n    return securityFilterRepository.findUsingSecurityFilter(filter).stream().map(RaProfile::mapToDtoSimple).collect(Collectors.toList());\n}\n')),(0,r.kt)("p",null,"In this example, we are using security filter to get filters for RA Profile objects that have permission for list action and their parent resource authority, too. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"SecurityFilterRepository")," is used to retrieve list of allowed RA profiles based on authorization, ",(0,r.kt)("inlineCode",{parentName:"p"},"parentRefProperty")," of filter is set to ",(0,r.kt)("inlineCode",{parentName:"p"},'"authorityInstanceReferenceUuid"')," which contains reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"RaProfile")," entity."),(0,r.kt)("h2",{id:"how-are-resource-and-actions-synchronized"},"How are resource and actions synchronized"),(0,r.kt)("p",null,"To achieve that changes in available set of resources and their actions are reflected in role permissions, ",(0,r.kt)("inlineCode",{parentName:"p"},"Core")," service manages changes automatically with the help of syncing mechanism."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"Core")," service starts, it collects all ",(0,r.kt)("inlineCode",{parentName:"p"},"@ExternalAuthorization")," annotation instances and builds map of available resources and their actions. This information is then passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Auth")," service which can then store role permissions with reference to corresponding resource/action."),(0,r.kt)("p",null,"This way, ",(0,r.kt)("inlineCode",{parentName:"p"},"Core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Auth")," services are in sync and permissions can refer to all resources and actions that are actually used and require authorization."),(0,r.kt)("h2",{id:"authendpoint-annotation"},(0,r.kt)("inlineCode",{parentName:"h2"},"@AuthEndpoint")," annotation"),(0,r.kt)("p",null,"In addition, you can mark resources to allow adding permissions on object access level. It can be achieved by annotating listing endpoint in corresponding ",(0,r.kt)("strong",{parentName:"p"},"controller")," that can be used to list objects. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Core/blob/master/src/main/java/com/czertainly/core/auth/AuthEndpoint.java"},"annotation ",(0,r.kt)("inlineCode",{parentName:"a"},"@AuthEndpoint"))," is used to set object listing endpoint path for a resource which can be later used in permissions editor to dynamically retrieve available objects of that resource."),(0,r.kt)("p",null,"Example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"@AuthEndpoint")," annotation to mark RA profile resource to have object access level permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@AuthEndpoint(\n  resourceName = Resource.RA_PROFILE\n)\npublic List<RaProfileDto> listRaProfiles(Optional<Boolean> enabled) {\n    return raProfileService.listRaProfiles(SecurityFilter.create(), enabled);\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Object ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"uuid")," and ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"name")," property"),(0,r.kt)("p",{parentName:"admonition"},"Entity and DTO that is returned from listing endpoint which is representing resource that has object access level has to contain ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property. That way any object can be properly labeled also with human readable name instead of its UUID. Without ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property, objects will be identified only through its UUID.")),(0,r.kt)("h2",{id:"extending-resources-and-actions"},"Extending resources and actions"),(0,r.kt)("p",null,"Finally, when you need to extend set of available resources and / or actions that can be used within platform access control, you need to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add new items to ",(0,r.kt)("inlineCode",{parentName:"li"},"enums")," specified in ",(0,r.kt)("a",{parentName:"li",href:"#resources-and-actions"},"Resources and actions")),(0,r.kt)("li",{parentName:"ul"},"annotate corresponding object listing endpoint with annotation ",(0,r.kt)("a",{parentName:"li",href:"#authendpoint-annotation"},(0,r.kt)("inlineCode",{parentName:"a"},"@AuthEndpoint"))," to allow setting permissions on objects access level"),(0,r.kt)("li",{parentName:"ul"},"make sure that entity and response objects from listing endpoint contain ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," property"),(0,r.kt)("li",{parentName:"ul"},"implement methods with proper ",(0,r.kt)("a",{parentName:"li",href:"#externalauthorization-annotation"},(0,r.kt)("inlineCode",{parentName:"a"},"@ExternalAuthorization"))," annotation properties"),(0,r.kt)("li",{parentName:"ul"},"map parameters of method representing object UUIDs to resources used in annotation by using correct parameter type ",(0,r.kt)("inlineCode",{parentName:"li"},"SecuredUUID")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"SecuredParentUUID")," to evaluate ",(0,r.kt)("a",{parentName:"li",href:"#object-access-level-permissions-evaluation"},"object access level permissions"))))}m.isMDXComponent=!0}}]);