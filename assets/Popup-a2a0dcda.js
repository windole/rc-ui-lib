import{j as r,c as a}from"./locales-548059eb.js";import{d as H,r as t}from"./react-libs-840bfe49.js";import{a as U}from"./index-59db7e48.js";import{u as Z,O as q}from"./Overlay-d703c016.js";import{u as F}from"./use-event-listener-721bbec6.js";import{c as G}from"./interceptor-35467a90.js";import{C as J}from"./ConfigProviderContext-0f984393.js";import{P as K}from"./PopupContext-0557b73d.js";import{C as Q}from"./CSSTransition-ea203202.js";import{i as W}from"./base-1da74170.js";function X(e){return(typeof e=="function"?e():e)||document.body}function Y(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function _(e,l){if(Y&&e){const i=X(e);return H.createPortal(l,i)}return l}const ae=["round","zIndex","closeable","overlay","overlayClass","overlayStyle","destroyOnClose","mountOnEnter","lockScroll","duration","transition","closeOnClickOverlay","closeOnPopstate","onClickOverlay","safeAreaInsetBottom","onOpen","onClose","onOpened","onClosed","beforeClose"];let E=2e3;const v=t.forwardRef((e,l)=>{const{prefixCls:i,createNamespace:D}=t.useContext(J),[s]=D("popup",i),{round:S,visible:c,closeable:j,title:x,description:O,children:w,duration:I,closeIcon:C,position:u}=e,d=t.useRef(!1),f=t.useRef(e.zIndex??E),m=t.useRef(),[N,k]=t.useState(c),h=t.useMemo(()=>{const n={zIndex:f.current,...e.style};if(W(e.duration)){const o=e.position==="center"?"animationDuration":"transitionDuration";n[o]=`${e.duration}ms`}return n},[f.current,e.style,e.duration]),z=()=>{var n;f.current=e.zIndex!==void 0?+e.zIndex:E++,d.current=!0,(n=e.onOpen)==null||n.call(e)},y=()=>{d.current&&G({interceptor:e.beforeClose,args:["close"],done:()=>{var n;d.current=!1,(n=e.onClose)==null||n.call(e)}})},R=n=>{var o;(o=e.onClickOverlay)==null||o.call(e,n),e.closeOnClickOverlay&&y()},$=()=>e.overlay?r.jsx(q,{visible:c,lockScroll:e.lockScroll,className:e.overlayClass,customStyle:e.overlayStyle,zIndex:f.current,duration:I,onClick:R}):null,P=n=>{e.onClickCloseIcon&&e.onClickCloseIcon(n),y()},M=()=>{if(j){const{closeIconPosition:n}=e;return typeof C=="string"?r.jsx(U,{name:C,className:a(s("close-icon",n)),classPrefix:e.iconPrefix,onClick:P}):r.jsx("div",{className:a(s("close-icon",n)),onClick:P,children:C})}return null},T=()=>x?r.jsx("div",{className:a(s("title")),children:x}):null,A=()=>O?r.jsx("div",{className:a(s("description")),children:O}):null,g=()=>{const{safeAreaInsetBottom:n}=e;return r.jsxs("div",{ref:m,style:{...h,display:N?void 0:"none"},className:a(s({round:S,[u]:u}),{"rc-safe-area-bottom":n},e.className),onClick:e.onClick,onMouseDown:o=>{e.preventDefaultMouseDown&&o.preventDefault()},children:[T(),A(),w,M()]})},B=()=>{const{transition:n,destroyOnClose:o,mountOnEnter:L}=e,V=u==="center"?`${i}-fade`:`${i}-popup-slide-${u}`;return r.jsx(Q,{in:c,nodeRef:m,timeout:{exit:I},classNames:n||V,mountOnEnter:!L,unmountOnExit:o,onEnter:z,onEntered:e.onOpened,onExited:()=>{var b;k(!1),(b=e.onClosed)==null||b.call(e)},children:g()})};return F("popstate",()=>{e.closeOnPopstate&&y()}),Z(m,e.visible),t.useEffect(()=>{c&&(d.current=!0,k(!0))},[c]),t.useImperativeHandle(l,()=>({popupRef:m})),_(e.teleport,r.jsxs(K.Provider,{value:{visible:c},children:[$(),B()]}))});v.defaultProps={duration:300,overlay:!0,lockScroll:!0,position:"center",closeIcon:"cross",closeIconPosition:"top-right",closeOnClickOverlay:!0,preventDefaultMouseDown:!1,teleport:()=>document.body};v.displayName="Popup";const ue=v;export{ue as P,_ as a,X as r,ae as s};
