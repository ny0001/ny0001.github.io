(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d2e6c8a"],{"31e4":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"login"},[a("div",{staticClass:"login-wr"},[a("div",{staticClass:"form-wr"},[a("h1",[e._v("Sign in")]),a("GoogleLogin",{attrs:{params:e.params,renderParams:e.renderParams,onSuccess:e.onSuccess,onFailure:e.onFailure}})],1)])])},s=[],n=a("d4ec"),i=a("bee2"),c=a("99de"),r=a("7e84"),l=a("262e"),u=a("9ab4"),g=a("60a3"),m=a("e571"),p=m.GoogleLogin,h=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(c["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.params={client_id:"545324358636-40oml219h11b1st6aitu67ub5pd6sm9l.apps.googleusercontent.com",scopes:"https://www.googleapis.com/auth/books"},e.renderParams={width:250,height:50,longtitle:!0},e}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"onSuccess",value:function(e){console.log("Login",e);var t={name:e.getBasicProfile().getName(),image:e.getBasicProfile().getImageUrl()};localStorage.setItem("User",JSON.stringify(t)),localStorage.setItem("access_token",e.getAuthResponse(this.params).access_token),this.$router.push("/Home")}},{key:"onFailure",value:function(e){alert("Login onFailure")}}]),t}(g["c"]);h=u["a"]([Object(g["a"])({components:{GoogleLogin:p}})],h);var d=h,f=d,b=(a("7f41"),a("2877")),w=Object(b["a"])(f,o,s,!1,null,null,null);t["default"]=w.exports},"4d74":function(e,t,a){},"7f41":function(e,t,a){"use strict";var o=a("4d74"),s=a.n(o);s.a}}]);
//# sourceMappingURL=chunk-9d2e6c8a.432990e1.js.map