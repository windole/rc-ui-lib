function r(){}const s=Object.assign,f=typeof window<"u";function a(n){return n!=null}function o(n){return typeof n=="function"}function d(n){return c(n)&&o(n.then)&&o(n.catch)}function c(n){return n!==null&&typeof n=="object"}function p(n,t,u){return t.reduce((i,e)=>((!u||n[e]!==void 0)&&(i[e]=n[e]),i),{})}function b(n){return(...t)=>{n&&(n(...t),n=null)}}export{f as a,d as b,c,o as d,s as e,a as i,r as n,b as o,p};