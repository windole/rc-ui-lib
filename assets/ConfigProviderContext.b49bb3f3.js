import{r as x}from"./react-libs.5b212337.js";function M(){}const j=Object.assign,m=typeof window<"u";function q(n){return n!=null}function d(n){return typeof n=="function"}function D(n){return C(n)&&d(n.then)&&d(n.catch)}function C(n){return n!==null&&typeof n=="object"}function E(n,t,o){return t.reduce((r,e)=>((!o||n[e]!==void 0)&&(r[e]=n[e]),r),{})}function N(n){return(...t)=>{!n||(n(...t),n=null)}}function f(n,t){return t?typeof t=="string"?` ${n}--${t}`:Array.isArray(t)?t.reduce((o,r)=>o+f(n,r),""):Object.keys(t).reduce((o,r)=>o+(t[r]?f(n,r):""),""):""}function b(n){return(t,o)=>(t&&typeof t!="string"&&(o=t,t=""),t=t?`${n}__${t}`:n,`${t}${f(t,o)}`)}function $(n,t){return n=`${t||"rc"}-${n}`,[b(n),n]}const c=m?window:global;let g=Date.now();function y(n){const t=Date.now(),o=Math.max(0,16-(t-g)),r=setTimeout(n,o);return g=t+o,r}function s(n){return(c.requestAnimationFrame||y).call(c,n)}function I(n){(c.cancelAnimationFrame||c.clearTimeout).call(c,n)}function _(n){s(()=>{s(n)})}function S(){return m?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1}function l(n){return n===window}function w(n){const t="scrollTop"in n?n.scrollTop:n.pageYOffset;return Math.max(t,0)}function h(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function F(n){a(window,n),a(document.body,n)}function H(n,t){if(l(n))return 0;const o=t?w(t):h();return n.getBoundingClientRect().top+o}function V(n){return l(n)?n.innerHeight:n.getBoundingClientRect().height}function Y(n){return l(n)?0:n.getBoundingClientRect().top}function a(n,t){"scrollTop"in n?n.scrollTop=t:n.scrollTo(n.scrollX,t)}let T;function W(n,t,o){I(T);let r=0;const e=n.scrollLeft,i=o===0?1:Math.round(o/16);function u(){n.scrollLeft+=(t-e)/i,++r<i&&(T=s(u))}u()}function X(n,t,o,r){let e=w(n);const i=e<t,u=o===0?1:Math.round(o/16),A=(t-e)/u;function p(){e+=A,(i&&e>t||!i&&e<t)&&(e=t),a(n,e),i&&e<t||!i&&e>t?s(p):r&&s(r)}p()}const O=S();function v(){O&&F(h())}const R="rc",P="van-icon",B={iconPrefix:P,prefixCls:R,createNamespace:(n,t)=>$(n,t)},z=x.exports.createContext(B);export{z as C,B as I,m as a,C as b,d as c,_ as d,j as e,s as f,w as g,V as h,q as i,H as j,W as k,X as l,Y as m,M as n,N as o,E as p,D as q,v as r,F as s,I as t,a as u};
