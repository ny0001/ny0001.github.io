(function(t){function e(e){for(var a,c,r=e[0],o=e[1],l=e[2],m=0,f=[];m<r.length;m++)c=r[m],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},n=[];function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/AppStarterVue/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0ce8":function(t,e,s){"use strict";var a=s("817f"),i=s.n(a);i.a},"13fc":function(t,e,s){"use strict";var a=s("96d3"),i=s.n(a);i.a},"151c":function(t,e,s){"use strict";var a=s("d7e6"),i=s.n(a);i.a},4042:function(t,e,s){"use strict";var a=s("da96"),i=s.n(a);i.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="4678"},"50a4":function(t,e,s){"use strict";var a=s("b254"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a,i,n,c,r,o,l,u,m,f,d,_,b,v,p=s("2b0e"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("router-view"),s("Footer")],1)},j=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"l-header"},[s("header",[s("div",{staticClass:"layout"},[s("div",{staticClass:"l-header__wrapper"},[t._m(0),s("nav",{staticClass:"l-header__desktop-menu"},[s("ul",{staticClass:"l-header__list"},[t._m(1),t._m(2),t._m(3),t._m(4),s("li",{staticClass:"l-header__item"},[s("Button",{staticClass:"c-button--white c-button--upper"},[t._v("get it free")])],1)])])])])])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"l-header__title-container"},[s("span",{staticClass:"l-header__title"},[t._v("AppStarter")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"l-header__item"},[s("a",{staticClass:"l-header__link",attrs:{href:"#features"}},[t._v("Features")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"l-header__item"},[s("a",{staticClass:"l-header__link",attrs:{href:"#video-tour"}},[t._v("Video Tour")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"l-header__item"},[s("a",{staticClass:"l-header__link",attrs:{href:"#reviews"}},[t._v("Reviews")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"l-header__item"},[s("a",{staticClass:"l-header__link",attrs:{href:"#pricing"}},[t._v("Pricing")])])}],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"c-button",on:{click:function(e){return t.action()}}},[t._t("default",[t._v("Button")])],2)},w=[],k=(s("99af"),s("6b7b")),O=s("d4ec"),T=s("bee2"),H=s("257e"),S=s("262e"),I=s("2caf"),D=s("ade3"),Y=s("63ae"),E=(s("f890"),s("60a3")),z=(a=Object(E["b"])(),i=Object(E["b"])(),n=Object(E["b"])(),Object(E["a"])((m=function(t){Object(S["a"])(s,t);var e=Object(I["a"])(s);function s(){var t;Object(O["a"])(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return t=e.call.apply(e,[this].concat(i)),Object(k["a"])(Object(H["a"])(t),"actionsName",o,Object(H["a"])(t)),Object(k["a"])(Object(H["a"])(t),"timer",l,Object(H["a"])(t)),Object(k["a"])(Object(H["a"])(t),"index",u,Object(H["a"])(t)),t}return Object(T["a"])(s,[{key:"action",value:function(){}}]),s}(E["c"]),r=m,o=Object(Y["a"])(r.prototype,"actionsName",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=Object(Y["a"])(r.prototype,"timer",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=Object(Y["a"])(r.prototype,"index",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=r))||c),x=z,$=(s("0ce8"),s("2877")),N=Object($["a"])(x,y,w,!1,null,"2ed3cd1f",null),M=N.exports,A={name:"HeaderComponent",components:{Button:M},props:[],data:function(){return{}},computed:{},mounted:function(){},methods:{}},B=A,P=(s("50a4"),Object($["a"])(B,C,g,!1,null,"570fe489",null)),J=P.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"l-footer"},[s("div",{staticClass:"layout"},[s("div",{staticClass:"l-footer__inner"},[s("h5",{staticClass:"l-footer__title"},[t._v("AppStarter")]),s("div",{staticClass:"l-footer__creator-wr"},[s("div",{staticClass:"l-footer__creator-block"},[s("div",{staticClass:"l-footer__creator-inner"},[s("span",{staticClass:"l-footer__creator-text"},[t._v("Created with")]),s("img",{staticClass:"l-footer__creator-icon",attrs:{src:"icons/heart_icon.png",alt:"heart_icon"}}),s("span",{staticClass:"l-footer__creator-text"},[t._v("by")]),s("h6",{staticClass:"l-footer__author no-margin"},[t._v("Yurii Nibit")])])]),s("div",{staticClass:"l-footer__creator-block"},[s("span",{staticClass:"l-footer__copyright"},[t._v("© AppStarter, 2020")])])]),s("div",{staticClass:"l-footer__social"},[s("div",{staticClass:"l-footer__social-icon-wr",attrs:{id:"twitter"}},[s("a",{staticClass:"l-footer__social-link",attrs:{href:"https://twitter.com/?lang=ru",target:"_blank"}},[s("img",{staticClass:"l-footer__social-icon",attrs:{src:"icons/twitter_icon.png",alt:"twitter_icon"}})])]),s("div",{staticClass:"l-footer__social-icon-wr",attrs:{id:"facebook"}},[s("a",{staticClass:"l-footer__social-link",attrs:{href:"https://m.facebook.com/",target:"_blank"}},[s("img",{staticClass:"l-footer__social-icon",attrs:{src:"icons/facebook_Icon.png",alt:"facebook_icon"}})])]),s("div",{staticClass:"l-footer__social-icon-wr",attrs:{id:"insta"}},[s("a",{staticClass:"l-footer__social-link",attrs:{href:"https://www.instagram.com/?hl=ru",target:"_blank"}},[s("img",{staticClass:"l-footer__social-icon",attrs:{src:"icons/Instagram_Icon.png",alt:"Instagram_icon"}})])])])])])])])}],V={name:"FooterComponent",components:{},props:[],data:function(){return{}},computed:{},mounted:function(){},methods:{}},L=V,q=(s("151c"),Object($["a"])(L,F,R,!1,null,"771b48a6",null)),Q=q.exports,U={name:"App",components:{Header:J,Footer:Q}},W=U,G=(s("5c0b"),Object($["a"])(W,h,j,!1,null,null,null)),K=G.exports,X=s("8c4f"),Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("section",{staticClass:"first-section"},[s("div",{staticClass:"layout"},[s("div",{staticClass:"columns-wr"},[s("div",{staticClass:"column first-section__info"},[t._m(0),t._m(1),s("div",{staticClass:"c-button__wr"},[s("Button",{staticClass:"c-button--orange"},[t._v("Download Now")]),s("Button",{staticClass:"c-button--white"},[t._v("Watch Video")])],1)]),t._m(2)])])]),s("section",{staticClass:"section-pricing-table"},[s("div",{staticClass:"pricing-table",attrs:{id:"pricing"}},[s("div",{staticClass:"layout"},[s("div",{staticClass:"columns-wr"},[s("div",{staticClass:"column pricing-table__description"},[s("div",{staticClass:"pricing-table__description-content-block"},[t._m(3),t._m(4),t._m(5),s("div",{staticClass:"pricing-table__promocode"},[s("form",{staticClass:"pricing-table__promocode-form",on:{submit:function(e){return e.preventDefault(),t.Promocode()}}},[s("label",{staticClass:"c-label pricing-table__promocode-label",attrs:{for:"promocode"}},[t._v("Enter the promo code:")]),s("input",{staticClass:"c-input pricing-table__promocode-input",attrs:{type:"text",placeholder:"Promo code"}}),s("Button",{staticClass:"c-button c-button--blue pricing-table__promocode-btn"},[t._v("Apply")])],1)])])]),s("div",{staticClass:"column pricing-table__plans"},[s("div",{staticClass:"pricing-table__plans-inner"},[s("div",{staticClass:"c-card c-card--proff"},[t._m(6),s("div",{staticClass:"c-card__inner"},[s("h4",{staticClass:"c-card__price c-card__price--proff"},[t._v("10$")]),t._m(7),s("Button",{staticClass:"c-button c-button--orange"},[t._v(" Buy Now ")])],1)]),s("div",{staticClass:"c-card c-card--starter"},[t._m(8),s("div",{staticClass:"c-card__inner"},[s("h4",{staticClass:"c-card__price c-card__price--starter"},[t._v("FREE")]),t._m(9),s("Button",{staticClass:"c-button c-button--green"},[t._v(" Get Free ")])],1)])])])])])])]),s("section",{staticClass:"section-why-use why-use"},[s("div",{staticClass:"layout"},[t._m(10),t._m(11),s("div",{staticClass:"why-use__timers-block"},[s("TimerComponent")],1)])])])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-icon"},[s("img",{staticClass:"icon",attrs:{src:"icons/AppIcon.png",alt:"AppIcon"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"c-title c-title--margin"},[t._v(" AppStarter. "),s("span",{staticClass:"c-title--small"},[t._v("Best landing page for web and mobile apps")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column first-section__banner"},[s("img",{staticClass:"first-section__banner-image",attrs:{src:"img/Tablet.png",alt:"intro-tablet"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"c-title c-title--black"},[t._v(" Choose "),s("span",{staticClass:"c-title--small"},[t._v("your plan")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"pricing-table__description-text"},[t._v(" This sounded nonsense to Alice, so she said "),s("br"),t._v(" nothing, but set off at once toward the Red Queen. "),s("br"),t._v(" To her surprise, she lost sight of her in a moment, "),s("br"),t._v(" and found herself walking. ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pricing-table__selector-block"},[s("label",{staticClass:"pricing-table__selector-label",attrs:{for:"licences"}},[t._v(" Select the number of licenses: ")]),s("select",{staticClass:"pricing-table__selector",attrs:{name:"licenses",id:"licenses"}},[s("option",{attrs:{value:"1"}},[t._v("1")]),s("option",{attrs:{value:"2"}},[t._v("2")]),s("option",{attrs:{value:"3"}},[t._v("3")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-card__line c-card__line--proff"},[s("h5",{staticClass:"c-card__line-title c-card__line-title--white"},[t._v("Professional")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"c-card__list c-card__list--proff"},[s("li",{staticClass:"c-card__list-item c-card__list-item--white"},[t._v("Hundreds of elements")]),s("li",{staticClass:"c-card__list-item c-card__list-item--white"},[t._v("Style guide")]),s("li",{staticClass:"c-card__list-item c-card__list-item--white"},[t._v("160 icons included")]),s("li",{staticClass:"c-card__list-item c-card__list-item--white"},[t._v("Sketch files")]),s("li",{staticClass:"c-card__list-item c-card__list-item--white"},[t._v("Commercial licence")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-card__line c-card__line--starter"},[s("h5",{staticClass:"c-card__line-title"},[t._v("starter")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"c-card__list c-card__list--starter"},[s("li",{staticClass:"c-card__list-item c-card__list-item--grey"},[t._v("Hundreds of elements")]),s("li",{staticClass:"c-card__list-item c-card__list-item--grey"},[t._v("Style guide")]),s("li",{staticClass:"c-card__list-item c-card__list-item--grey"},[t._v("30 icons included")]),s("li",{staticClass:"c-card__list-item c-card__list-item--grey"},[t._v("Personal licence")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"c-title c-title--margin text-center"},[t._v(" Why "),s("span",{staticClass:"c-title--small"},[t._v("do we use it?")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"c-subtitle text-center"},[t._v(" This sounded nonsense to Alice, so she said nothing, but set off at once toward "),s("br"),t._v(" the Red Queen. To her surprise, she lost sight of her in a moment. ")])}],et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer-component"},[s("div",{staticClass:"timer-component__timers-header"},[s("form",{staticClass:"timer-component__timers-form",on:{submit:function(e){return e.preventDefault(),t.createTimer()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.timerName,expression:"timerName"}],staticClass:"c-input c-input--bg-gray timer-component__timers-input",attrs:{type:"text",placeholder:"Timer Name"},domProps:{value:t.timerName},on:{input:function(e){e.target.composing||(t.timerName=e.target.value)}}}),s("Button",{staticClass:"c-button c-button--orange timer-component__timers-btn"},[t._v(" Create Timer ")])],1)]),s("div",{staticClass:"timer-component__timers"},t._l(t.timers,(function(e,a){return s("div",{key:a,staticClass:"timer-component__timer-container"},[s("div",{staticClass:"timer-component__timer-name-container"},[s("span",{staticClass:"timer-component__timer-name"},[t._v(t._s(e.name))])]),s("span",{class:["timer-component__timer",{active:e.setIntervalInstance}]},[t._v(t._s(e.value))]),s("div",{staticClass:"timer-component__buttons"},[e.setIntervalInstance?s("div",{staticClass:"timer-component__button-wr",on:{click:function(s){return t.stopTimer(e)}}},[s("Button",{staticClass:"c-button--icon c-button--blue"},[s("pause-icon")],1)],1):s("div",{staticClass:"timer-component__button-wr",on:{click:function(s){return t.runTimer(e)}}},[s("Button",{staticClass:"c-button--icon c-button--green"},[s("play-icon")],1)],1),s("div",{staticClass:"timer-component__button-wr",on:{click:function(s){return t.removeTimer(e)}}},[s("Button",{staticClass:"c-button c-button--red"},[s("delete-icon")],1)],1)])])})),0)])},st=[],at=(s("4de4"),s("7db0"),s("c740"),s("d81d"),s("b0c0"),s("d48d"),s("ec1b")),it=s("dfa1"),nt=s("0647"),ct=s("c1df"),rt=s.n(ct),ot=(f=Object(E["a"])({components:{Button:M,PlayIcon:at["a"],DeleteIcon:nt["a"],PauseIcon:it["a"]},watch:{timers:{handler:function(t){window.localStorage.setItem("Timers",JSON.stringify(t))}}}}),f((_=function(t){Object(S["a"])(s,t);var e=Object(I["a"])(s);function s(){var t;Object(O["a"])(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return t=e.call.apply(e,[this].concat(i)),Object(D["a"])(Object(H["a"])(t),"timerName",""),Object(D["a"])(Object(H["a"])(t),"timers",[{id:String(1+Date.now()),name:"Timer Name 1",value:"00:00:37",creationDate:rt()().format("DD/MM/YYYY HH:mm:ss"),isActive:!0},{id:String(2+Date.now()),name:"Timer Name 2",value:"23:59:55",creationDate:rt()().format("DD/MM/YYYY HH:mm:ss"),isActive:!0},{id:String(3+Date.now()),name:"Timer Name 3",value:"00:01:00",creationDate:rt()().format("DD/MM/YYYY HH:mm:ss"),isActive:!1}]),t}return Object(T["a"])(s,[{key:"initTimers",value:function(){var t=this;this.timers.map((function(e){return e.isActive&&t.runTimer(e),!1}))}},{key:"runTimer",value:function(t){var e=this;if(t.value=new rt.a(t.value,"HH:mm:ss").add(1,"s").format("HH:mm:ss"),!t.setIntervalInstance){t.setIntervalInstance=setInterval((function(){e.runTimer(t)}),1e3);var s=this.timers.findIndex((function(e){return e.id==t.id}));~s&&(this.timers[s].isActive=!0)}}},{key:"stopTimer",value:function(t){clearInterval(t.setIntervalInstance),t.isActive=!1,t.setIntervalInstance=!1,Object.assign(this.timers.find((function(e){return e.id===t.id})),t),window.localStorage.setItem("Timers",JSON.stringify(this.timers))}},{key:"createTimer",value:function(){var t={id:rt()(),name:this.timerName||rt()().format("DD/MM, HH:mm:ss"),value:"00:00:00",creationDate:rt()().format("DD/MM/YYYY HH:mm:ss"),isActive:!0};this.timers.find((function(e){return e.name===t.name}))||this.timers.unshift(t),this.runTimer(t)}},{key:"removeTimer",value:function(t){var e=JSON.parse(localStorage.getItem("Timers"));this.timers=e.filter((function(e){return e.id!==t.id}))}},{key:"mounted",value:function(){var t=this;this.initTimers(),window.addEventListener("beforeunload",(function(){window.localStorage.setItem("Timers",JSON.stringify(t.timers,(function(t,e){var s=e;return"setIntervalInstance"===t&&(s=!1),s}))),localStorage.setItem("savedDate",JSON.stringify(rt()().format("DD/MM/YYYY HH:mm:ss")))}))}},{key:"saveToLS",value:function(){this.timers&&this.timers.length&&localStorage.setItem("Timers",JSON.stringify(this.timers))}},{key:"beforeMount",value:function(){window.localStorage.getItem("Timers")&&(this.timers=JSON.parse(window.localStorage.getItem("Timers")))}},{key:"created",value:function(){var t="06/07/2020 10:30:00";if(t){var e=rt()().format("DD/MM/YYYY HH:mm:ss");this.timers.map((function(t){var s=rt.a.utc(rt()(e,"DD/MM/YYYY HH:mm:ss").diff(rt()(t.creationDate,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");t.value=new rt.a(t.value,"HH:mm:ss").add(s,"HH:mm:ss").format("HH:mm:ss")}))}}}]),s}(E["c"]),d=_))||d),lt=ot,ut=(s("13fc"),Object($["a"])(lt,et,st,!1,null,"13da4c53",null)),mt=ut.exports,ft=(b=Object(E["a"])({components:{Button:M,TimerComponent:mt}}),b(v=function(t){Object(S["a"])(s,t);var e=Object(I["a"])(s);function s(){return Object(O["a"])(this,s),e.apply(this,arguments)}return Object(T["a"])(s,[{key:"Promocode",value:function(){}}]),s}(E["c"]))||v),dt=ft,_t=(s("4042"),Object($["a"])(dt,Z,tt,!1,null,null,null)),bt=_t.exports;p["a"].use(X["a"]);var vt=[{path:"/",name:"Home",component:bt}],pt=new X["a"]({mode:"history",base:"/AppStarterVue/",routes:vt}),ht=pt,jt=s("2f62");p["a"].use(jt["a"]);var Ct=new jt["a"].Store({state:{},mutations:{},actions:{},modules:{}});p["a"].config.productionTip=!1,new p["a"]({router:ht,store:Ct,render:function(t){return t(K)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"817f":function(t,e,s){},"96d3":function(t,e,s){},"9c0c":function(t,e,s){},b254:function(t,e,s){},d7e6:function(t,e,s){},da96:function(t,e,s){}});
//# sourceMappingURL=app.16e7aa68.js.map