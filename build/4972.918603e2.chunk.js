(self.webpackChunkchatapp=self.webpackChunkchatapp||[]).push([[4972],{14972:(R,m,i)=>{"use strict";i.r(m),i.d(m,{ROUTES_EE:()=>t});var u=i(67294),a=i(57993),l=i(36808),d=i.n(l),g=i(86896),n=i(16550),r=i(25804);const h=()=>{const{params:{authResponse:o}}=(0,n.$B)("/auth/login/:authResponse"),{formatMessage:e}=(0,g.Z)(),{push:f}=(0,n.k6)(),p=(0,u.useRef)(e);let c=(0,u.useCallback)(()=>{f(`/auth/oops?info=${encodeURIComponent(p.current({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`)},[f]);const{get:s}=(0,a.kY)(),v=(0,u.useCallback)(async()=>{try{const E=d().get("jwtToken");if(a.I8.clearAppStorage(),E){a.I8.setToken(E,!0);const I=(0,r.IF)("users/me"),{data:{data:A}}=await s(I);a.I8.setUserInfo(A,!0),d().remove("jwtToken"),f("/auth/login")}}catch{c()}},[s,f,c]);return(0,u.useEffect)(()=>{o==="error"&&c(),o==="success"&&v()},[o,v,c]),u.createElement(a.dO,null)},C=null,t=[{Component:()=>({default:h}),to:"/auth/login/:authResponse",exact:!0}]},36808:(R,m,i)=>{var u,a;/*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/(function(l){var d;if(u=l,a=typeof u=="function"?u.call(m,i,m,R):u,a!==void 0&&(R.exports=a),d=!0,R.exports=l(),d=!0,!d){var g=window.Cookies,n=window.Cookies=l();n.noConflict=function(){return window.Cookies=g,n}}})(function(){function l(){for(var n=0,r={};n<arguments.length;n++){var h=arguments[n];for(var C in h)r[C]=h[C]}return r}function d(n){return n.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function g(n){function r(){}function h(t,o,e){if(!(typeof document>"u")){e=l({path:"/"},r.defaults,e),typeof e.expires=="number"&&(e.expires=new Date(new Date*1+e.expires*864e5)),e.expires=e.expires?e.expires.toUTCString():"";try{var f=JSON.stringify(o);/^[\{\[]/.test(f)&&(o=f)}catch{}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var p="";for(var c in e)e[c]&&(p+="; "+c,e[c]!==!0&&(p+="="+e[c].split(";")[0]));return document.cookie=t+"="+o+p}}function C(t,o){if(!(typeof document>"u")){for(var e={},f=document.cookie?document.cookie.split("; "):[],p=0;p<f.length;p++){var c=f[p].split("="),s=c.slice(1).join("=");!o&&s.charAt(0)==='"'&&(s=s.slice(1,-1));try{var v=d(c[0]);if(s=(n.read||n)(s,v)||d(s),o)try{s=JSON.parse(s)}catch{}if(e[v]=s,t===v)break}catch{}}return t?e[t]:e}}return r.set=h,r.get=function(t){return C(t,!1)},r.getJSON=function(t){return C(t,!0)},r.remove=function(t,o){h(t,"",l(o,{expires:-1}))},r.defaults={},r.withConverter=g,r}return g(function(){})})}}]);
