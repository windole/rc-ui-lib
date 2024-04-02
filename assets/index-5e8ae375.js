import{j as u,c as T}from"./locales-548059eb.js";import{r as x}from"./react-libs-840bfe49.js";import{c as Oe}from"./rc-cli_site-mobile-demo-eaa39090.js";import{P as ve}from"./Popup-a2a0dcda.js";import{a as Ee}from"./index-59db7e48.js";import{f as je}from"./constant-7552c2aa.js";import{u as Se}from"./use-click-away-fbf72a4b.js";import{C as Re}from"./ConfigProviderContext-0f984393.js";import{p as ke,e as Ce}from"./base-1da74170.js";import{a as A}from"./index-9cdb6f61.js";import{C as Pe}from"./index-9549eced.js";import{P as Ae}from"./Picker-38a496e4.js";import{G as oe}from"./index-6e984e37.js";import{T as Le}from"./index-ec9d0b36.js";import"./mobile-e0307386.js";import"./Overlay-d703c016.js";import"./use-touch-76dedc34.js";import"./use-scroll-parent-a4dd715d.js";import"./CSSTransition-ea203202.js";import"./use-event-listener-721bbec6.js";import"./interceptor-35467a90.js";import"./PopupContext-0557b73d.js";import"./unit-bb3e6514.js";import"./Loading-c60598b2.js";import"./use-gesture-react.esm-484f41f1.js";import"./bound-41eb6e06.js";import"./use-set-state-898f20ed.js";import"./use-update-effect-09c1ca0c.js";import"./number-b57f7cd4.js";import"./use-refs-92151253.js";import"./event-07a78c2b.js";import"./lock-click-c7a7fb0f.js";import"./render-38a34f7f.js";function R(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ee(e){var t=R(e).Element;return e instanceof t||e instanceof Element}function S(e){var t=R(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function me(e){if(typeof ShadowRoot>"u")return!1;var t=R(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var V=Math.round;function Q(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function De(){return!/^((?!chrome|android).)*safari/i.test(Q())}function z(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&S(e)&&(o=e.offsetWidth>0&&V(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&V(n.height)/e.offsetHeight||1);var c=ee(e)?R(e):window,i=c.visualViewport,f=!De()&&r,l=(n.left+(f&&i?i.offsetLeft:0))/o,s=(n.top+(f&&i?i.offsetTop:0))/a,d=n.width/o,O=n.height/a;return{width:d,height:O,top:s,right:l+d,bottom:s+O,left:l,x:l,y:s}}function he(e){var t=R(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Te(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ne(e){return e===R(e)||!S(e)?he(e):Te(e)}function k(e){return e?(e.nodeName||"").toLowerCase():null}function J(e){return((ee(e)?e.ownerDocument:e.document)||window.document).documentElement}function Me(e){return z(J(e)).left+he(e).scrollLeft}function C(e){return R(e).getComputedStyle(e)}function te(e){var t=C(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Ie(e){var t=e.getBoundingClientRect(),r=V(t.width)/e.offsetWidth||1,n=V(t.height)/e.offsetHeight||1;return r!==1||n!==1}function qe(e,t,r){r===void 0&&(r=!1);var n=S(t),o=S(t)&&Ie(t),a=J(t),c=z(e,o,r),i={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(n||!n&&!r)&&((k(t)!=="body"||te(a))&&(i=Ne(t)),S(t)?(f=z(t,!0),f.x+=t.clientLeft,f.y+=t.clientTop):a&&(f.x=Me(a))),{x:c.left+i.scrollLeft-f.x,y:c.top+i.scrollTop-f.y,width:c.width,height:c.height}}function We(e){var t=z(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function re(e){return k(e)==="html"?e:e.assignedSlot||e.parentNode||(me(e)?e.host:null)||J(e)}function ge(e){return["html","body","#document"].indexOf(k(e))>=0?e.ownerDocument.body:S(e)&&te(e)?e:ge(re(e))}function U(e,t){var r;t===void 0&&(t=[]);var n=ge(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=R(n),c=o?[a].concat(a.visualViewport||[],te(n)?n:[]):n,i=t.concat(c);return o?i:i.concat(U(re(c)))}function Be(e){return["table","td","th"].indexOf(k(e))>=0}function ae(e){return!S(e)||C(e).position==="fixed"?null:e.offsetParent}function Ve(e){var t=/firefox/i.test(Q()),r=/Trident/i.test(Q());if(r&&S(e)){var n=C(e);if(n.position==="fixed")return null}var o=re(e);for(me(o)&&(o=o.host);S(o)&&["html","body"].indexOf(k(o))<0;){var a=C(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function ye(e){for(var t=R(e),r=ae(e);r&&Be(r)&&C(r).position==="static";)r=ae(r);return r&&(k(r)==="html"||k(r)==="body"&&C(r).position==="static")?t:r||Ve(e)||t}var B="top",G="bottom",Y="right",I="left",be="auto",He=[B,G,Y,I],xe="start",_="end",$e=[].concat(He,[be]).reduce(function(e,t){return e.concat([t,t+"-"+xe,t+"-"+_])},[]),Xe="beforeRead",Ye="read",Fe="afterRead",Ue="beforeMain",ze="main",Ge="afterMain",_e="beforeWrite",Je="write",Ke="afterWrite",Z=[Xe,Ye,Fe,Ue,ze,Ge,_e,Je,Ke];function Qe(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var f=t.get(i);f&&o(f)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function Ze(e){var t=Qe(e);return Z.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function et(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function L(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return[].concat(r).reduce(function(o,a){return o.replace(/%s/,a)},e)}var N='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',tt='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',ie=["name","enabled","phase","fn","effect","requires","options"];function rt(e){e.forEach(function(t){[].concat(Object.keys(t),ie).filter(function(r,n,o){return o.indexOf(r)===n}).forEach(function(r){switch(r){case"name":typeof t.name!="string"&&console.error(L(N,String(t.name),'"name"','"string"','"'+String(t.name)+'"'));break;case"enabled":typeof t.enabled!="boolean"&&console.error(L(N,t.name,'"enabled"','"boolean"','"'+String(t.enabled)+'"'));break;case"phase":Z.indexOf(t.phase)<0&&console.error(L(N,t.name,'"phase"',"either "+Z.join(", "),'"'+String(t.phase)+'"'));break;case"fn":typeof t.fn!="function"&&console.error(L(N,t.name,'"fn"','"function"','"'+String(t.fn)+'"'));break;case"effect":t.effect!=null&&typeof t.effect!="function"&&console.error(L(N,t.name,'"effect"','"function"','"'+String(t.fn)+'"'));break;case"requires":t.requires!=null&&!Array.isArray(t.requires)&&console.error(L(N,t.name,'"requires"','"array"','"'+String(t.requires)+'"'));break;case"requiresIfExists":Array.isArray(t.requiresIfExists)||console.error(L(N,t.name,'"requiresIfExists"','"array"','"'+String(t.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+t.name+'" modifier, valid properties are '+ie.map(function(n){return'"'+n+'"'}).join(", ")+'; but "'+r+'" was provided.')}t.requires&&t.requires.forEach(function(n){e.find(function(o){return o.name===n})==null&&console.error(L(tt,String(t.name),n,n))})})})}function nt(e,t){var r=new Set;return e.filter(function(n){var o=t(n);if(!r.has(o))return r.add(o),!0})}function K(e){return e.split("-")[0]}function ot(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}function we(e){return e.split("-")[1]}function at(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function it(e){var t=e.reference,r=e.element,n=e.placement,o=n?K(n):null,a=n?we(n):null,c=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,f;switch(o){case B:f={x:c,y:t.y-r.height};break;case G:f={x:c,y:t.y+t.height};break;case Y:f={x:t.x+t.width,y:i};break;case I:f={x:t.x-r.width,y:i};break;default:f={x:t.x,y:t.y}}var l=o?at(o):null;if(l!=null){var s=l==="y"?"height":"width";switch(a){case xe:f[l]=f[l]-(t[s]/2-r[s]/2);break;case _:f[l]=f[l]+(t[s]/2-r[s]/2);break}}return f}var se="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",st="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",ce={placement:"bottom",modifiers:[],strategy:"absolute"};function fe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function ct(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?ce:o;return function(i,f,l){l===void 0&&(l=a);var s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ce,a),modifiersData:{},elements:{reference:i,popper:f},attributes:{},styles:{}},d=[],O=!1,m={state:s,setOptions:function(h){var j=typeof h=="function"?h(s.options):h;p(),s.options=Object.assign({},a,s.options,j),s.scrollParents={reference:ee(i)?U(i):i.contextElement?U(i.contextElement):[],popper:U(f)};var w=Ze(ot([].concat(n,s.options.modifiers)));s.orderedModifiers=w.filter(function(E){return E.enabled});{var b=nt([].concat(w,s.options.modifiers),function(E){var W=E.name;return W});if(rt(b),K(s.options.placement)===be){var y=s.orderedModifiers.find(function(E){var W=E.name;return W==="flip"});y||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var g=C(f),P=g.marginTop,D=g.marginRight,H=g.marginBottom,$=g.marginLeft;[P,D,H,$].some(function(E){return parseFloat(E)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return q(),m.update()},forceUpdate:function(){if(!O){var h=s.elements,j=h.reference,w=h.popper;if(!fe(j,w)){console.error(se);return}s.rects={reference:qe(j,ye(w),s.options.strategy==="fixed"),popper:We(w)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(E){return s.modifiersData[E.name]=Object.assign({},E.data)});for(var b=0,y=0;y<s.orderedModifiers.length;y++){if(b+=1,b>100){console.error(st);break}if(s.reset===!0){s.reset=!1,y=-1;continue}var g=s.orderedModifiers[y],P=g.fn,D=g.options,H=D===void 0?{}:D,$=g.name;typeof P=="function"&&(s=P({state:s,options:H,name:$,instance:m})||s)}}},update:et(function(){return new Promise(function(v){m.forceUpdate(),v(s)})}),destroy:function(){p(),O=!0}};if(!fe(i,f))return console.error(se),m;m.setOptions(l).then(function(v){!O&&l.onFirstUpdate&&l.onFirstUpdate(v)});function q(){s.orderedModifiers.forEach(function(v){var h=v.name,j=v.options,w=j===void 0?{}:j,b=v.effect;if(typeof b=="function"){var y=b({state:s,name:h,instance:m,options:w}),g=function(){};d.push(y||g)}})}function p(){d.forEach(function(v){return v()}),d=[]}return m}}var F={passive:!0};function ft(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,c=n.resize,i=c===void 0?!0:c,f=R(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(s){s.addEventListener("scroll",r.update,F)}),i&&f.addEventListener("resize",r.update,F),function(){a&&l.forEach(function(s){s.removeEventListener("scroll",r.update,F)}),i&&f.removeEventListener("resize",r.update,F)}}var lt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ft,data:{}};function ut(e){var t=e.state,r=e.name;t.modifiersData[r]=it({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var pt={name:"popperOffsets",enabled:!0,phase:"read",fn:ut,data:{}},dt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function vt(e){var t=e.x,r=e.y,n=window,o=n.devicePixelRatio||1;return{x:V(t*o)/o||0,y:V(r*o)/o||0}}function le(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,c=e.offsets,i=e.position,f=e.gpuAcceleration,l=e.adaptive,s=e.roundOffsets,d=e.isFixed,O=c.x,m=O===void 0?0:O,q=c.y,p=q===void 0?0:q,v=typeof s=="function"?s({x:m,y:p}):{x:m,y:p};m=v.x,p=v.y;var h=c.hasOwnProperty("x"),j=c.hasOwnProperty("y"),w=I,b=B,y=window;if(l){var g=ye(r),P="clientHeight",D="clientWidth";if(g===R(r)&&(g=J(r),C(g).position!=="static"&&i==="absolute"&&(P="scrollHeight",D="scrollWidth")),g=g,o===B||(o===I||o===Y)&&a===_){b=G;var H=d&&g===y&&y.visualViewport?y.visualViewport.height:g[P];p-=H-n.height,p*=f?1:-1}if(o===I||(o===B||o===G)&&a===_){w=Y;var $=d&&g===y&&y.visualViewport?y.visualViewport.width:g[D];m-=$-n.width,m*=f?1:-1}}var E=Object.assign({position:i},l&&dt),W=s===!0?vt({x:m,y:p}):{x:m,y:p};if(m=W.x,p=W.y,f){var X;return Object.assign({},E,(X={},X[b]=j?"0":"",X[w]=h?"0":"",X.transform=(y.devicePixelRatio||1)<=1?"translate("+m+"px, "+p+"px)":"translate3d("+m+"px, "+p+"px, 0)",X))}return Object.assign({},E,(t={},t[b]=j?p+"px":"",t[w]=h?m+"px":"",t.transform="",t))}function mt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,c=a===void 0?!0:a,i=r.roundOffsets,f=i===void 0?!0:i;{var l=C(t.elements.popper).transitionProperty||"";c&&["transform","top","right","bottom","left"].some(function(d){return l.indexOf(d)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var s={placement:K(t.placement),variation:we(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,le(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:f})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,le(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ht={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mt,data:{}};function gt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!S(a)||!k(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(c){var i=o[c];i===!1?a.removeAttribute(c):a.setAttribute(c,i===!0?"":i)}))})}function yt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=c.reduce(function(f,l){return f[l]="",f},{});!S(o)||!k(o)||(Object.assign(o.style,i),Object.keys(a).forEach(function(f){o.removeAttribute(f)}))})}}var bt={name:"applyStyles",enabled:!0,phase:"write",fn:gt,effect:yt,requires:["computeStyles"]},xt=[lt,pt,ht,bt],wt=ct({defaultModifiers:xt});function Ot(e,t,r){var n=K(e),o=[I,B].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=a[0],i=a[1];return c=c||0,i=(i||0)*o,[I,Y].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function Et(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,c=$e.reduce(function(s,d){return s[d]=Ot(d,t.rects,a),s},{}),i=c[t.placement],f=i.x,l=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=c}var jt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Et};const St=["overlay","duration","overlayStyle","overlayClass","closeOnClickOverlay","teleport","onClose","onOpen","onClosed","onOpened","onClickOverlay"],ne=x.forwardRef((e,t)=>{const{prefixCls:r,createNamespace:n}=x.useContext(Re),[o]=n("popover",r),[a,c]=x.useState(!1),i=x.useRef(null),f=x.useRef(),l=x.useRef(),s=()=>wt(f.current,l.current.popupRef.current,{placement:e.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},Ce({},jt,{options:{offset:e.offset}})]}),d=()=>{e.trigger==="click"&&c(p=>!p)},O=(p,v)=>{var h;p.disabled||((h=e.onSelect)==null||h.call(e,p,v),e.closeOnClickAction&&c(!1))},m=()=>{(!e.overlay||e.closeOnClickOverlay)&&c(!1)},q=(p,v)=>{const{icon:h,text:j,color:w,disabled:b,className:y}=p;return u.jsxs("div",{className:T(o("action",{disabled:b,"with-icon":h}),y),style:{color:w},tabIndex:b?void 0:0,"aria-disabled":b||void 0,onClick:()=>O(p,v),children:[h&&u.jsx(Ee,{name:h,classPrefix:e.iconPrefix,className:T(o("action-icon"))}),u.jsx("div",{className:T(o("action-text"),je),children:j})]},v)};return x.useEffect(()=>()=>{var p;i.current&&((p=i.current)==null||p.destroy(),i.current=null)},[]),x.useEffect(()=>{(()=>{var v;a&&(i.current?(v=i.current)==null||v.setOptions({placement:e.placement}):i.current=s())})()},[a,e.placement]),x.useEffect(()=>{let p;const v=h=>h.stopPropagation();return l.current&&l.current.popupRef.current&&(p=l.current.popupRef.current,p.addEventListener("touchstart",v)),()=>{p&&p.removeEventListener("touchstart",v)}},[l.current]),x.useImperativeHandle(t,()=>({show:()=>{if(a){c(!1),setTimeout(()=>c(!0),0);return}c(!0)},hide:()=>c(!1)})),Se(f,m,"touchstart",e.closeOnClickOutside),u.jsxs(u.Fragment,{children:[u.jsx("span",{ref:f,className:T(o("wrapper")),onClick:d,children:e.reference}),u.jsxs(ve,{ref:l,visible:a,className:T(o([e.theme])),position:"",transition:"rc-zoom",lockScroll:!1,...ke(e,St),children:[u.jsx("div",{className:T(o("arrow"))}),u.jsx("div",{role:"menu",className:T(o("content")),children:e.children||e.actions.map(q)})]})]})});ne.defaultProps={overlay:!1,duration:300,closeOnClickAction:!0,closeOnClickOverlay:!0,closeOnClickOutside:!0,offset:[0,8],theme:"light",trigger:"click",actions:[],placement:"bottom"};ne.displayName="Popover";const M=ne;const ue=[{text:"选项一"},{text:"选项二"},{text:"选项三"}],Rt=[{text:"选项一"},{text:"选项二"}],pe=[{text:"选项一",icon:"add-o"},{text:"选项二",icon:"music-o"},{text:"选项三",icon:"more-o"}],kt=[{text:"选项一",disabled:!0},{text:"选项二",disabled:!0},{text:"选项三"}],de=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],sr=()=>{const{DemoBlock:e,DemoSection:t}=Oe,r=x.useRef(null),n=x.useRef(null),o=x.useRef(null),[a,c]=x.useState(!1),[i,f]=x.useState(de[0]),l=d=>Le.info(d.text),s=d=>{f(d),setTimeout(()=>r.current.show(),0)};return u.jsxs(t,{className:"demo-slider",children:[u.jsxs(e,{title:"基础用法",children:[u.jsx(M,{placement:"bottom-start",actions:ue,onSelect:l,reference:u.jsx(A,{type:"primary",children:"浅色风格"})}),u.jsx(M,{actions:ue,theme:"dark",onSelect:l,reference:u.jsx(A,{type:"primary",children:"深色风格"})})]}),u.jsxs(e,{card:!0,title:"弹出位置",children:[u.jsx(Pe,{title:"选择弹出位置",onClick:()=>c(!0),isLink:!0}),u.jsxs(ve,{round:!0,position:"bottom",visible:a,onClose:()=>c(!1),children:[u.jsx("div",{className:"demo-popover-box",children:u.jsx(M,{ref:r,theme:"dark",actions:Rt,onSelect:l,placement:i,reference:u.jsx("div",{className:"demo-popover-refer"})})}),u.jsx(Ae,{showToolbar:!1,columns:de,onChange:s})]})]}),u.jsxs(e,{title:"选项配置",children:[u.jsx(M,{placement:"bottom-start",actions:pe,onSelect:l,reference:u.jsx(A,{type:"primary",children:"展示图标"})}),u.jsx(M,{actions:kt,onSelect:l,reference:u.jsx(A,{type:"primary",children:"禁用选项"})})]}),u.jsx(e,{title:"自定义内容",children:u.jsx(M,{ref:n,placement:"top-start",reference:u.jsx(A,{type:"primary",children:"自定义内容"}),children:u.jsx(oe,{square:!0,border:!1,columnNum:3,style:{width:240},children:Array.from({length:6},(d,O)=>u.jsx(oe.Item,{onClick:()=>{var m;return(m=n.current)==null?void 0:m.hide()},icon:"photo-o",text:"文字"},O))})})}),u.jsxs(e,{title:"手动控制",children:[u.jsx(M,{placement:"bottom-start",trigger:"manual",ref:o,actions:pe,onSelect:l,reference:u.jsx(A,{type:"primary",children:"展示图标"})}),u.jsx(A,{onClick:()=>{var d;return(d=o.current)==null?void 0:d.show()},children:"显示"}),u.jsx(A,{onClick:()=>{var d;return(d=o.current)==null?void 0:d.hide()},children:"关闭"})]})]})};export{sr as default};
