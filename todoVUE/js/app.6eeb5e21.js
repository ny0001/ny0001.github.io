(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a14c80ed"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise(function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"0a61733e"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],p.parentNode.removeChild(p),r(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){a[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/todoVUE/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1177:function(t,e,r){"use strict";var n=r("5010"),a=r.n(n);a.a},"199c":function(t,e){},"1e84":function(t,e,r){},"23be":function(t,e,r){"use strict";var n=r("199c"),a=r.n(n);e["default"]=a.a},"3dfd":function(t,e,r){"use strict";var n=r("e431"),a=r("23be"),o=(r("5c0b"),r("2877")),i=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},5010:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("3dfd"),o=r("8c4f"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-main-wr"},[r("div",{staticClass:"main-wrapper"},[r("div",{staticClass:"header"},[r("p",{staticClass:"user"},[t._v(t._s(t.Email))]),r("div",{staticClass:"button-wr"},[r("button",{staticClass:"logout",on:{click:function(e){return t.logout()}}},[t._v("Logout")])])]),r("div",{staticClass:"content-wr"},[r("div",{staticClass:"content-inner"},[r("ul",{staticClass:"content-ul"},t._l(t.all_TODOs,function(t){return r("li",{key:t.id},[r("task",{attrs:{name:"task",todo:t}})],1)}),0)]),r("button",{staticClass:"addTask",on:{click:function(e){return t.addTaskButton()}}},[t._v("+")]),t.drawerStateStatus?r("drawer"):t._e(),r("modal")],1)])])},s=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),u=r("2f62"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"drawer-main-wr"},[r("div",{class:["drawer-wrapp",{open:t.drawerStateStatus}]},[r("div",{staticClass:"drawwer-inner"},[r("form",{staticClass:"form-drawer",on:{submit:function(e){return e.preventDefault(),t.drawerSUBMIT()}}},[r("div",{staticClass:"title-wr"},[r("label",{staticClass:"label",attrs:{for:"title"}},[t._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.drawerTitle,expression:"drawerTitle"}],staticClass:"title",attrs:{type:"text",placeholder:"enter title"},domProps:{value:t.drawerTitle},on:{input:function(e){e.target.composing||(t.drawerTitle=e.target.value)}}})]),r("div",{staticClass:"description-wr"},[r("label",{staticClass:"label",attrs:{for:"textarea"}},[t._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.drawerDescription,expression:"drawerDescription"}],staticClass:"textarea",attrs:{placeholder:"ToDo:",maxlength:"1000"},domProps:{value:t.drawerDescription},on:{input:function(e){e.target.composing||(t.drawerDescription=e.target.value)}}})]),t._m(0),r("div",{staticClass:"close-wr"},[r("button",{staticClass:"close",on:{click:function(e){return t.closeDrawerInComponent()}}},[t._v("x")])])])])]),r("div",{class:["overlay-drawer",{active:t.drawerStateStatus}],on:{click:function(e){return t.closeDrawerInComponent()}}})])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"desc-button-wr"},[r("button",{staticClass:"desc-submit-btn"},[t._v("Submit")])])}];function p(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var m={name:"Drawer",data:function(){return{drawerTitle:"",drawerDescription:""}},mounted:function(){this.drawerTitle=this.$store.getters.getDrawerTitle,this.drawerDescription=this.$store.getters.getDrawerDescription},computed:f({},Object(u["b"])(["drawerStateStatus"])),methods:{closeDrawerInComponent:function(){this.$store.dispatch("actionDrawerOpen",!1)},drawerSUBMIT:function(){var t={author:this.$store.getters.getMail,title:this.drawerTitle||"title",description:this.drawerDescription||"description"};this.$store.dispatch("actionAdd_or_ChangeTask",t)}}},h=m,v=(r("1177"),r("2877")),w=Object(v["a"])(h,l,d,!1,null,"925fb868",null),b=w.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"task-wr"},[r("div",{staticClass:"task-inner"},[r("div",{staticClass:"task-btns-wr"},[r("button",{staticClass:"edit",on:{click:function(e){return t.editTask()}}}),r("button",{staticClass:"delete",on:{click:function(e){return t.deleteComponent()}}})]),r("div",{staticClass:"task-content-wr"},[r("div",{staticClass:"task-title"},[r("h3",{staticClass:"title"},[t._v(" "+t._s(this.todo.title)+" ")])]),r("div",{staticClass:"task-content"},[r("p",{staticClass:"desc"},[t._v(" \n              "+t._s(this.todo.description)+"\n            ")])])])])])},O=[],D={name:"Task",props:["todo"],data:function(){return{}},created:function(){},computed:{},methods:{saveTaskID:function(){this.$store.dispatch("actionSaveTaskID",this.todo._id)},deleteComponent:function(){this.saveTaskID(),this.$store.dispatch("actionModalOpen",!0)},editTask:function(){this.saveTaskID(),this.$store.dispatch("actionEditDrawerTitle",this.todo.title),this.$store.dispatch("actionEditDrawerDescription",this.todo.description),this.$store.dispatch("actionDrawerOpen",!0)}}},T=D,k=(r("6943"),Object(v["a"])(T,g,O,!1,null,"64e9fd92",null)),y=k.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["modal-wrapper",{active:t.modalStateStatus}]},[r("div",{staticClass:"modal"},[r("p",[t._v("Are you sure you want to permanently remove this item ?")]),r("div",{staticClass:"button-wrapp"},[r("button",{staticClass:"btn-no",on:{click:function(e){return t.closeModal()}}},[t._v("No")])]),r("div",{staticClass:"button-wrapp"},[r("button",{staticClass:"btn-yes",on:{click:function(e){return t.modalBtnYes()}}},[t._v("Yes")])])]),r("div",{class:["overlay",{active:t.modalStateStatus}],on:{click:function(e){return t.closeModal()}}})])},C=[];function _(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var E={name:"Modal",data:function(){return{}},computed:j({},Object(u["b"])(["modalStateStatus"])),methods:{closeModal:function(){this.$store.dispatch("actionModalOpen",!1)},modalBtnYes:function(){this.$store.dispatch("requestDeleteTask",this.$store.getters.getTaskID),this.closeModal()}}},P=E,$=(r("635e"),Object(v["a"])(P,S,C,!1,null,"06ee2ecf",null)),M=$.exports;function I(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var A={name:"home",components:{Drawer:b,Task:y,Modal:M},data:function(){return{Email:""}},created:function(){if(localStorage.getItem("login")){var t=JSON.parse(localStorage.getItem("login"));this.Email=t,this.$store.dispatch("actionSaveMail",t),this.$store.dispatch("requestGetAllTasks",t)}else this.$router.push({path:"/login",name:"login"})},computed:x({},Object(u["b"])(["all_TODOs","drawerStateStatus"])),methods:{logout:function(){localStorage.removeItem("login"),this.$router.push({path:"/login",name:"login"}),this.$store.dispatch("action_DEL_allTasks")},addTaskButton:function(){this.$store.dispatch("actionSaveTaskID",null),this.$store.dispatch("actionEditDrawerTitle",""),this.$store.dispatch("actionEditDrawerDescription",""),this.$store.dispatch("actionDrawerOpen",!0)}}},N=A,q=(r("eb99"),Object(v["a"])(N,i,s,!1,null,"75bfbb78",null)),B=q.exports;n["a"].use(o["a"]);var L=new o["a"]({mode:"history",base:"/todoVUE/",routes:[{path:"/",name:"home",component:B},{path:"/login",name:"login",component:function(){return r.e("about").then(r.bind(null,"013f"))}}]}),U={state:{mail:""},getters:{getMail:function(t){return t.mail}},mutations:{mutateMailState:function(t,e){t.mail=e}},actions:{actionSaveMail:function(t,e){t.commit("mutateMailState",e)}}},F=U,J=(r("20d6"),{state:{isDrawerOpen:!1,drawerTitle:"",drawerDescription:""},getters:{drawerStateStatus:function(t){return t.isDrawerOpen},getDrawerTitle:function(t){return t.drawerTitle},getDrawerDescription:function(t){return t.drawerDescription}},mutations:{mutateDrawerState:function(t,e){t.isDrawerOpen=e},mutateDrawerTitle:function(t,e){t.drawerTitle=e},mutateDrawerDescription:function(t,e){t.drawerDescription=e},mutationAddNewTask:function(t,e){this.state.TODOs.push(e)}},actions:{actionDrawerOpen:function(t,e){t.commit("mutateDrawerState",e)},actionEditDrawerTitle:function(t,e){t.commit("mutateDrawerTitle",e)},actionEditDrawerDescription:function(t,e){t.commit("mutateDrawerDescription",e)},actionAdd_or_ChangeTask:function(t,e){var r=this.getters.getTaskID,n=this.state.TODOs,a=n.findIndex(function(t){return t._id==r});-1!=a?(n[a].title=e.title,n[a].description=e.description,t.dispatch("requestEditTask",e,r)):t.dispatch("requestAddNewTask",e),t.commit("mutateDrawerState",!1)}}}),Y=J,G={state:{isModalOpen:!1},getters:{modalStateStatus:function(t){return t.isModalOpen}},mutations:{mutateModalState:function(t,e,r){t.isModalOpen=e}},actions:{actionModalOpen:function(t,e){t.commit("mutateModalState",e)}}},K=G,V=r("bc3a"),H=r.n(V),z={state:{},getters:{},mutations:{},actions:{requestGetAllTasks:function(t,e){var r="https://raysael.herokuapp.com/todo?author=";H.a.get("".concat(r).concat(e)).then(function(e){var r=e.data;r.forEach(function(e){t.commit("mutationAddNewTask",e)})}).catch(function(t){console.error(t),alert("Something wrong...")})},requestAddNewTask:function(t,e){var r="https://raysael.herokuapp.com/todo";H.a.post("".concat(r),e,{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}).then(function(e){t.commit("mutationAddNewTask",e.data)}).catch(function(t){console.error(t),alert("Something wrong...")})},requestEditTask:function(t,e){var r=this.getters.getTaskID,n="https://raysael.herokuapp.com/todo/";H.a.patch("".concat(n).concat(r),e).catch(function(t){console.error(t),alert("Something wrong...")})},requestDeleteTask:function(t,e){var r="https://raysael.herokuapp.com/todo/";H.a.delete("".concat(r).concat(e)).then(function(r){"OK"==r.statusText&&t.commit("deleteTaskFromTOSOs",e)}).catch(function(t){console.error(t),alert("Something wrong...")})}}},Q=z;n["a"].use(u["a"]);var R=new u["a"].Store({modules:{modal:K,drawer:Y,login:F,requests:Q},state:{taskID:"",TODOs:[]},getters:{all_TODOs:function(t){return t.TODOs},getTaskID:function(t){return t.taskID}},mutations:{deleteTaskFromTOSOs:function(t,e){var r=t.TODOs.filter(function(t){return t._id!==String(e)});t.TODOs=r},mutateTaskID:function(t,e){t.taskID=e},deleteAllTasks:function(t){t.TODOs=[]}},actions:{actionDeleteTask:function(t,e){t.commit("deleteTaskFromTOSOs",e)},actionSaveTaskID:function(t,e){t.commit("mutateTaskID",e)},action_DEL_allTasks:function(t){t.commit("deleteAllTasks")}}});n["a"].config.productionTip=!1,new n["a"]({router:L,store:R,render:function(t){return t(a["default"])}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(t,e,r){},"635e":function(t,e,r){"use strict";var n=r("e255"),a=r.n(n);a.a},6943:function(t,e,r){"use strict";var n=r("1e84"),a=r.n(n);a.a},b9b0:function(t,e,r){},e255:function(t,e,r){},e431:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a})},eb99:function(t,e,r){"use strict";var n=r("b9b0"),a=r.n(n);a.a}});
//# sourceMappingURL=app.6eeb5e21.js.map