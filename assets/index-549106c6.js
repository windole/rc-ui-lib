import{j as s,c as F}from"./locales-548059eb.js";import{r as o}from"./react-libs-840bfe49.js";import{c as T}from"./rc-cli_site-mobile-demo-eaa39090.js";import{C as b}from"./ConfigProviderContext-0f984393.js";import{p as x}from"./string-4e3cebce.js";import{c as A,r as g}from"./raf-f0838b14.js";import{a as B}from"./base-1da74170.js";import{G as C}from"./index-6e984e37.js";import"./mobile-e0307386.js";import"./constant-7552c2aa.js";import"./unit-bb3e6514.js";import"./index-59db7e48.js";function G(e,r){const{days:c}=r;let{hours:n,minutes:i,seconds:u,milliseconds:l}=r;if(e.includes("DD")?e=e.replace("DD",x(c)):n+=c*24,e.includes("HH")?e=e.replace("HH",x(n)):i+=n*60,e.includes("mm")?e=e.replace("mm",x(i)):u+=i*60,e.includes("ss")?e=e.replace("ss",x(u)):l+=u*1e3,e.includes("S")){const m=x(l,3);e.includes("SSS")?e=e.replace("SSS",m):e.includes("SS")?e=e.replace("SS",m.slice(0,2)):e=e.replace("S",m.charAt(0))}return e}const M=1e3,N=60*M,k=60*N,E=24*k;function I(e){const r=Math.floor(e/E),c=Math.floor(e%E/k),n=Math.floor(e%k/N),i=Math.floor(e%N/M),u=Math.floor(e%M);return{total:e,days:r,hours:c,minutes:n,seconds:i,milliseconds:u}}function O(e,r){return Math.floor(e/1e3)===Math.floor(r/1e3)}function P(e){const[r,c]=o.useState(e.time),n=o.useRef(r),i=o.useRef(),u=o.useRef(),l=o.useRef(),m=o.useMemo(()=>I(r),[r]),t=()=>{l.current=!1,A(i.current)},j=()=>Math.max(u.current-Date.now(),0),d=a=>{var h,w;c(a),n.current=a,(h=e.onChange)==null||h.call(e,I(a)),a===0&&(t(),(w=e.onFinish)==null||w.call(e))},p=()=>{i.current=g(()=>{l.current&&(d(j()),n.current>0&&p())})},f=()=>{i.current=g(()=>{if(l.current){const a=j();(!O(a,n.current)||a===0)&&d(a),n.current>0&&f()}})},R=()=>{B&&(e.millisecond?p():f())},D=()=>{l.current||(u.current=Date.now()+n.current,l.current=!0,R())},H=(a=e.time)=>{t(),c(a),n.current=a};return o.useEffect(()=>()=>{t()},[]),{start:D,pause:t,reset:H,current:m}}const y=o.forwardRef((e,r)=>{const{time:c,format:n,autoStart:i,millisecond:u,renderChildren:l}=e,{start:m,pause:t,reset:j,current:d}=P({time:+c,millisecond:u,onChange:a=>{var h;return(h=e.onChange)==null?void 0:h.call(e,a)},onFinish:e.onFinish}),p=o.useMemo(()=>G(n,d),[n,d]),f=()=>{j(+c),i&&m()};o.useEffect(()=>{f()},[c]),o.useImperativeHandle(r,()=>({start:m,pause:t,reset:f}));const{prefixCls:R,createNamespace:D}=o.useContext(b),[H]=D("count-down",R);return s.jsx("div",{role:"timer",className:F(H()),children:l?l(d):p})});y.defaultProps={time:0,format:"HH:mm:ss",autoStart:!0,millisecond:!1};const S=y;const W=()=>{const{DemoBlock:e,DemoSection:r}=T,[c]=o.useState(30*60*60*1e3),n=o.useRef(null),i=t=>s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"block",children:t.hours}),s.jsx("span",{className:"colon",children:":"}),s.jsx("span",{className:"block",children:t.minutes}),s.jsx("span",{className:"colon",children:":"}),s.jsx("span",{className:"block",children:t.seconds})]}),u=()=>{var t;(t=n.current)==null||t.start()},l=()=>{var t;(t=n.current)==null||t.pause()},m=()=>{var t;(t=n.current)==null||t.reset()};return s.jsxs(r,{className:"demo-count-down",children:[s.jsx(e,{title:"基础用法",children:s.jsx(S,{time:c})}),s.jsx(e,{title:"自定义格式",children:s.jsx(S,{time:c,format:"DD 天 HH 时 mm 分 ss 秒"})}),s.jsx(e,{title:"毫秒级渲染",children:s.jsx(S,{millisecond:!0,time:c,format:"HH:mm:ss:SS"})}),s.jsx(e,{title:"自定义样式",children:s.jsx(S,{time:c,renderChildren:i})}),s.jsxs(e,{title:"手动控制",children:[s.jsx(S,{autoStart:!1,millisecond:!0,format:"ss:SSS",time:"3000",ref:n}),s.jsxs(C,{columnNum:3,children:[s.jsx(C.Item,{icon:"play-circle-o",text:"开始",onClick:u}),s.jsx(C.Item,{icon:"pause-circle-o",text:"暂停",onClick:l}),s.jsx(C.Item,{icon:"replay",text:"重置",onClick:m})]})]})]})};export{W as default};