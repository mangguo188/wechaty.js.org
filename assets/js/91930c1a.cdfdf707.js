"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[7377],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,m=h["".concat(i,".").concat(d)]||h[d]||c[d]||p;return a?r.createElement(m,o(o({ref:t},l),{},{components:a})):r.createElement(m,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<p;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(67294),n=a(79443);var p=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(86010),s="tabItem_1uMI",i="tabItemActive_2DSg";var u=function(e){var t,a=e.lazy,n=e.block,u=e.defaultValue,l=e.values,c=e.groupId,h=e.className,d=r.Children.toArray(e.children),m=null!=l?l:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=p(),y=v.tabGroupChoices,w=v.setTabGroupChoices,b=(0,r.useState)(f),g=b[0],k=b[1],P=[];if(null!=c){var N=y[c];null!=N&&N!==g&&m.some((function(e){return e.value===N}))&&k(N)}var O=function(e){var t=e.currentTarget,a=P.indexOf(t),r=m[a].value;k(r),null!=c&&(w(c,r),setTimeout((function(){var e,a,r,n,p,o,s,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,p=e.right,o=window,s=o.innerHeight,u=o.innerWidth,a>=0&&p<=u&&n<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.target)+1;a=P[r]||P[0];break;case"ArrowLeft":var n=P.indexOf(e.target)-1;a=P[n]||P[P.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},m.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":g===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:T,onFocus:O,onClick:O},null!=a?a:t)}))),a?(0,r.cloneElement)(d.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},54008:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return m}});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),o=a(55064),s=a(58215),i=["components"],u={title:"Puppet Provider: Whatsapp",sidebar_label:"Whatsapp"},l=void 0,c={unversionedId:"puppet-providers/whatsapp",id:"puppet-providers/whatsapp",isDocsHomePage:!1,title:"Puppet Provider: Whatsapp",description:"Wechaty Puppet Whatsapp",source:"@site/docs/puppet-providers/whatsapp.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/whatsapp",permalink:"/docs/puppet-providers/whatsapp",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/whatsapp.md",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616064498,formattedLastUpdatedAt:"3/18/2021",frontMatter:{title:"Puppet Provider: Whatsapp",sidebar_label:"Whatsapp"},sidebar:"docs",previous:{title:"WeChat",permalink:"/docs/puppet-providers/wechat"},next:{title:"Official Account",permalink:"/docs/puppet-providers/official-account"}},h=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],d={toc:h};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"whatsapp"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Whatsapp-blueviolet",alt:"Wechaty Puppet Whatsapp"}))),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-whatsapp/HEAD/docs/images/wechaty-puppet-whatsapp.png",alt:"Wechaty Puppet Whatsapp"})),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-whatsapp"},(0,p.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-whatsapp.svg",alt:"NPM Version"})),"\n",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-whatsapp?activeTab=versions"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-whatsapp/next.svg",alt:"npm (tag)"}))),(0,p.kt)("p",null,"WhatsApp is the most popular Instance Messaging service in many parts of the world. With the WhatsApp Wechaty Puppet Provider, you can reach more than 1.5 billion WhatsApp users. You can send notifications, have two-way conversations, by building chatbots. If you're trying to reach and better converse with users in the west world, you need to consider using WhatsApp."),(0,p.kt)("p",null,"The WhatsApp Wechaty Puppet Provider is now available in alpha stage, to allow developers to start building and prototyping in your developing environments."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Repo: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-whatsapp"},"https://github.com/wechaty/wechaty-puppet-whatsapp")),(0,p.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-whatsapp/issues"},"https://github.com/wechaty/wechaty-puppet-whatsapp/issues"))),(0,p.kt)("h2",{id:"features"},"Features"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Send & receive messages")),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,p.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,p.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,p.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nset WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")))),(0,p.kt)("h2",{id:"roadmap"},"Roadmap"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"to be added")),(0,p.kt)("h2",{id:"history"},"History"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatapp-puppet/"},"Wechaty Puppet Whatsapp Has been Published, Shan, Feb 15, 2021"))),(0,p.kt)("h2",{id:"maintainers"},"Maintainers"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/univerone"},"@univerone"))))}m.isMDXComponent=!0}}]);