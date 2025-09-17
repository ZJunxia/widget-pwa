function sy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function up(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ly={exports:{}},Rl={},uy={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),_x=Symbol.for("react.portal"),jx=Symbol.for("react.fragment"),Nx=Symbol.for("react.strict_mode"),kx=Symbol.for("react.profiler"),Mx=Symbol.for("react.provider"),zx=Symbol.for("react.context"),Lx=Symbol.for("react.forward_ref"),Dx=Symbol.for("react.suspense"),Bx=Symbol.for("react.memo"),Vx=Symbol.for("react.lazy"),th=Symbol.iterator;function Hx(e){return e===null||typeof e!="object"?null:(e=th&&e[th]||e["@@iterator"],typeof e=="function"?e:null)}var cy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dy=Object.assign,fy={};function ri(e,t,n){this.props=e,this.context=t,this.refs=fy,this.updater=n||cy}ri.prototype.isReactComponent={};ri.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ri.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function py(){}py.prototype=ri.prototype;function cp(e,t,n){this.props=e,this.context=t,this.refs=fy,this.updater=n||cy}var dp=cp.prototype=new py;dp.constructor=cp;dy(dp,ri.prototype);dp.isPureReactComponent=!0;var nh=Array.isArray,my=Object.prototype.hasOwnProperty,fp={current:null},hy={key:!0,ref:!0,__self:!0,__source:!0};function vy(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)my.call(t,r)&&!hy.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Ea,type:e,key:i,ref:a,props:o,_owner:fp.current}}function Ux(e,t){return{$$typeof:Ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ea}function Wx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rh=/\/+/g;function Xu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wx(""+e.key):t.toString(36)}function hs(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ea:case _x:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Xu(a,0):r,nh(o)?(n="",e!=null&&(n=e.replace(rh,"$&/")+"/"),hs(o,t,n,"",function(u){return u})):o!=null&&(pp(o)&&(o=Ux(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(rh,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",nh(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Xu(i,s);a+=hs(i,t,n,l,o)}else if(l=Hx(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Xu(i,s++),a+=hs(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ua(e,t,n){if(e==null)return e;var r=[],o=0;return hs(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Gx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ct={current:null},vs={transition:null},qx={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:vs,ReactCurrentOwner:fp};function gy(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Ua,forEach:function(e,t,n){Ua(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ua(e,function(){t++}),t},toArray:function(e){return Ua(e,function(t){return t})||[]},only:function(e){if(!pp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=ri;le.Fragment=jx;le.Profiler=kx;le.PureComponent=cp;le.StrictMode=Nx;le.Suspense=Dx;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qx;le.act=gy;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dy({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=fp.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)my.call(t,l)&&!hy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ea,type:e.type,key:o,ref:i,props:r,_owner:a}};le.createContext=function(e){return e={$$typeof:zx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mx,_context:e},e.Consumer=e};le.createElement=vy;le.createFactory=function(e){var t=vy.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Lx,render:e}};le.isValidElement=pp;le.lazy=function(e){return{$$typeof:Vx,_payload:{_status:-1,_result:e},_init:Gx}};le.memo=function(e,t){return{$$typeof:Bx,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=vs.transition;vs.transition={};try{e()}finally{vs.transition=t}};le.unstable_act=gy;le.useCallback=function(e,t){return Ct.current.useCallback(e,t)};le.useContext=function(e){return Ct.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return Ct.current.useDeferredValue(e)};le.useEffect=function(e,t){return Ct.current.useEffect(e,t)};le.useId=function(){return Ct.current.useId()};le.useImperativeHandle=function(e,t,n){return Ct.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return Ct.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return Ct.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return Ct.current.useMemo(e,t)};le.useReducer=function(e,t,n){return Ct.current.useReducer(e,t,n)};le.useRef=function(e){return Ct.current.useRef(e)};le.useState=function(e){return Ct.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return Ct.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return Ct.current.useTransition()};le.version="18.3.1";uy.exports=le;var v=uy.exports;const W=up(v),Pl=sy({__proto__:null,default:W},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx=v,Qx=Symbol.for("react.element"),Xx=Symbol.for("react.fragment"),Jx=Object.prototype.hasOwnProperty,Yx=Kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zx={key:!0,ref:!0,__self:!0,__source:!0};function yy(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Jx.call(t,r)&&!Zx.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Qx,type:e,key:i,ref:a,props:o,_owner:Yx.current}}Rl.Fragment=Xx;Rl.jsx=yy;Rl.jsxs=yy;ly.exports=Rl;var L=ly.exports,sd={},by={exports:{}},Gt={},wy={exports:{}},xy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,V){var U=F.length;F.push(V);e:for(;0<U;){var Q=U-1>>>1,G=F[Q];if(0<o(G,V))F[Q]=V,F[U]=G,U=Q;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var V=F[0],U=F.pop();if(U!==V){F[0]=U;e:for(var Q=0,G=F.length,K=G>>>1;Q<K;){var z=2*(Q+1)-1,q=F[z],H=z+1,ie=F[H];if(0>o(q,U))H<G&&0>o(ie,q)?(F[Q]=ie,F[H]=U,Q=H):(F[Q]=q,F[z]=U,Q=z);else if(H<G&&0>o(ie,U))F[Q]=ie,F[H]=U,Q=H;else break e}}return V}function o(F,V){var U=F.sortIndex-V.sortIndex;return U!==0?U:F.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,f=3,w=!1,h=!1,g=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=F)r(u),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(u)}}function C(F){if(g=!1,y(F),!h)if(n(l)!==null)h=!0,M(x);else{var V=n(u);V!==null&&B(C,V.startTime-F)}}function x(F,V){h=!1,g&&(g=!1,m(O),O=-1),w=!0;var U=f;try{for(y(V),d=n(l);d!==null&&(!(d.expirationTime>V)||F&&!I());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,f=d.priorityLevel;var G=Q(d.expirationTime<=V);V=e.unstable_now(),typeof G=="function"?d.callback=G:d===n(l)&&r(l),y(V)}else r(l);d=n(l)}if(d!==null)var K=!0;else{var z=n(u);z!==null&&B(C,z.startTime-V),K=!1}return K}finally{d=null,f=U,w=!1}}var E=!1,S=null,O=-1,R=5,T=-1;function I(){return!(e.unstable_now()-T<R)}function $(){if(S!==null){var F=e.unstable_now();T=F;var V=!0;try{V=S(!0,F)}finally{V?_():(E=!1,S=null)}}else E=!1}var _;if(typeof p=="function")_=function(){p($)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,k=N.port2;N.port1.onmessage=$,_=function(){k.postMessage(null)}}else _=function(){b($,0)};function M(F){S=F,E||(E=!0,_())}function B(F,V){O=b(function(){F(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){h||w||(h=!0,M(x))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(F){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var U=f;f=V;try{return F()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var U=f;f=F;try{return V()}finally{f=U}},e.unstable_scheduleCallback=function(F,V,U){var Q=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Q+U:Q):U=Q,F){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=U+G,F={id:c++,callback:V,priorityLevel:F,startTime:U,expirationTime:G,sortIndex:-1},U>Q?(F.sortIndex=U,t(u,F),n(l)===null&&F===n(u)&&(g?(m(O),O=-1):g=!0,B(C,U-Q))):(F.sortIndex=G,t(l,F),h||w||(h=!0,M(x))),F},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(F){var V=f;return function(){var U=f;f=V;try{return F.apply(this,arguments)}finally{f=U}}}})(xy);wy.exports=xy;var eC=wy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tC=v,Ut=eC;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cy=new Set,qi={};function ro(e,t){Vo(e,t),Vo(e+"Capture",t)}function Vo(e,t){for(qi[e]=t,e=0;e<t.length;e++)Cy.add(t[e])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,nC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oh={},ih={};function rC(e){return ld.call(ih,e)?!0:ld.call(oh,e)?!1:nC.test(e)?ih[e]=!0:(oh[e]=!0,!1)}function oC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function iC(e,t,n,r){if(t===null||typeof t>"u"||oC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function St(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new St(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new St(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new St(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new St(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new St(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new St(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new St(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new St(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new St(e,5,!1,e.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function hp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mp,hp);lt[t]=new St(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mp,hp);lt[t]=new St(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mp,hp);lt[t]=new St(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new St(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new St(e,1,!1,e.toLowerCase(),null,!0,!0)});function vp(e,t,n,r){var o=lt.hasOwnProperty(t)?lt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(iC(t,n,o,r)&&(n=null),r||o===null?rC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=tC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),ho=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),gp=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),Sy=Symbol.for("react.provider"),Ey=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),bp=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Oy=Symbol.for("react.offscreen"),ah=Symbol.iterator;function gi(e){return e===null||typeof e!="object"?null:(e=ah&&e[ah]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,Ju;function Pi(e){if(Ju===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ju=t&&t[1]||""}return`
`+Ju+e}var Yu=!1;function Zu(e,t){if(!e||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pi(e):""}function aC(e){switch(e.tag){case 5:return Pi(e.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return e=Zu(e.type,!1),e;case 11:return e=Zu(e.type.render,!1),e;case 1:return e=Zu(e.type,!0),e;default:return""}}function fd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vo:return"Fragment";case ho:return"Portal";case ud:return"Profiler";case gp:return"StrictMode";case cd:return"Suspense";case dd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ey:return(e.displayName||"Context")+".Consumer";case Sy:return(e._context.displayName||"Context")+".Provider";case yp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bp:return t=e.displayName||null,t!==null?t:fd(e.type)||"Memo";case tr:t=e._payload,e=e._init;try{return fd(e(t))}catch{}}return null}function sC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(t);case 8:return t===gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ty(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lC(e){var t=Ty(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ga(e){e._valueTracker||(e._valueTracker=lC(e))}function Ry(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ty(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pd(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Py(e,t){t=t.checked,t!=null&&vp(e,"checked",t,!1)}function md(e,t){Py(e,t);var n=Cr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hd(e,t.type,n):t.hasOwnProperty("defaultValue")&&hd(e,t.type,Cr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hd(e,t,n){(t!=="number"||Ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ai=Array.isArray;function $o(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Ai(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cr(n)}}function Ay(e,t){var n=Cr(t.value),r=Cr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ch(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $y(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$y(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qa,Iy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uC=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(e){uC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ni[t]=Ni[e]})});function Fy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ni.hasOwnProperty(e)&&Ni[e]?(""+t).trim():t+"px"}function _y(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Fy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var cC=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(e,t){if(t){if(cC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function bd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wd=null;function wp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xd=null,Io=null,Fo=null;function dh(e){if(e=Ra(e)){if(typeof xd!="function")throw Error(D(280));var t=e.stateNode;t&&(t=_l(t),xd(e.stateNode,e.type,t))}}function jy(e){Io?Fo?Fo.push(e):Fo=[e]:Io=e}function Ny(){if(Io){var e=Io,t=Fo;if(Fo=Io=null,dh(e),t)for(e=0;e<t.length;e++)dh(t[e])}}function ky(e,t){return e(t)}function My(){}var ec=!1;function zy(e,t,n){if(ec)return e(t,n);ec=!0;try{return ky(e,t,n)}finally{ec=!1,(Io!==null||Fo!==null)&&(My(),Ny())}}function Qi(e,t){var n=e.stateNode;if(n===null)return null;var r=_l(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Cd=!1;if(Wn)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Cd=!1}function dC(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ki=!1,Ds=null,Bs=!1,Sd=null,fC={onError:function(e){ki=!0,Ds=e}};function pC(e,t,n,r,o,i,a,s,l){ki=!1,Ds=null,dC.apply(fC,arguments)}function mC(e,t,n,r,o,i,a,s,l){if(pC.apply(this,arguments),ki){if(ki){var u=Ds;ki=!1,Ds=null}else throw Error(D(198));Bs||(Bs=!0,Sd=u)}}function oo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ly(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fh(e){if(oo(e)!==e)throw Error(D(188))}function hC(e){var t=e.alternate;if(!t){if(t=oo(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return fh(o),e;if(i===r)return fh(o),t;i=i.sibling}throw Error(D(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Dy(e){return e=hC(e),e!==null?By(e):null}function By(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=By(e);if(t!==null)return t;e=e.sibling}return null}var Vy=Ut.unstable_scheduleCallback,ph=Ut.unstable_cancelCallback,vC=Ut.unstable_shouldYield,gC=Ut.unstable_requestPaint,He=Ut.unstable_now,yC=Ut.unstable_getCurrentPriorityLevel,xp=Ut.unstable_ImmediatePriority,Hy=Ut.unstable_UserBlockingPriority,Vs=Ut.unstable_NormalPriority,bC=Ut.unstable_LowPriority,Uy=Ut.unstable_IdlePriority,Al=null,jn=null;function wC(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:SC,xC=Math.log,CC=Math.LN2;function SC(e){return e>>>=0,e===0?32:31-(xC(e)/CC|0)|0}var Ka=64,Qa=4194304;function $i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=$i(s):(i&=a,i!==0&&(r=$i(i)))}else a=n&~o,a!==0?r=$i(a):i!==0&&(r=$i(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yn(t),o=1<<n,r|=e[n],t&=~o;return r}function EC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OC(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-yn(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=EC(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Ed(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wy(){var e=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),e}function tc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yn(t),e[t]=n}function TC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-yn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Cp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ve=0;function Gy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qy,Sp,Ky,Qy,Xy,Od=!1,Xa=[],fr=null,pr=null,mr=null,Xi=new Map,Ji=new Map,rr=[],RC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mh(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(t.pointerId)}}function bi(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ra(t),t!==null&&Sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function PC(e,t,n,r,o){switch(t){case"focusin":return fr=bi(fr,e,t,n,r,o),!0;case"dragenter":return pr=bi(pr,e,t,n,r,o),!0;case"mouseover":return mr=bi(mr,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Xi.set(i,bi(Xi.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ji.set(i,bi(Ji.get(i)||null,e,t,n,r,o)),!0}return!1}function Jy(e){var t=Mr(e.target);if(t!==null){var n=oo(t);if(n!==null){if(t=n.tag,t===13){if(t=Ly(n),t!==null){e.blockedOn=t,Xy(e.priority,function(){Ky(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Td(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wd=r,n.target.dispatchEvent(r),wd=null}else return t=Ra(n),t!==null&&Sp(t),e.blockedOn=n,!1;t.shift()}return!0}function hh(e,t,n){gs(e)&&n.delete(t)}function AC(){Od=!1,fr!==null&&gs(fr)&&(fr=null),pr!==null&&gs(pr)&&(pr=null),mr!==null&&gs(mr)&&(mr=null),Xi.forEach(hh),Ji.forEach(hh)}function wi(e,t){e.blockedOn===t&&(e.blockedOn=null,Od||(Od=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,AC)))}function Yi(e){function t(o){return wi(o,e)}if(0<Xa.length){wi(Xa[0],e);for(var n=1;n<Xa.length;n++){var r=Xa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&wi(fr,e),pr!==null&&wi(pr,e),mr!==null&&wi(mr,e),Xi.forEach(t),Ji.forEach(t),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)Jy(n),n.blockedOn===null&&rr.shift()}var _o=Xn.ReactCurrentBatchConfig,Us=!0;function $C(e,t,n,r){var o=ve,i=_o.transition;_o.transition=null;try{ve=1,Ep(e,t,n,r)}finally{ve=o,_o.transition=i}}function IC(e,t,n,r){var o=ve,i=_o.transition;_o.transition=null;try{ve=4,Ep(e,t,n,r)}finally{ve=o,_o.transition=i}}function Ep(e,t,n,r){if(Us){var o=Td(e,t,n,r);if(o===null)dc(e,t,r,Ws,n),mh(e,r);else if(PC(o,e,t,n,r))r.stopPropagation();else if(mh(e,r),t&4&&-1<RC.indexOf(e)){for(;o!==null;){var i=Ra(o);if(i!==null&&qy(i),i=Td(e,t,n,r),i===null&&dc(e,t,r,Ws,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else dc(e,t,r,null,n)}}var Ws=null;function Td(e,t,n,r){if(Ws=null,e=wp(r),e=Mr(e),e!==null)if(t=oo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ly(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ws=e,null}function Yy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yC()){case xp:return 1;case Hy:return 4;case Vs:case bC:return 16;case Uy:return 536870912;default:return 16}default:return 16}}var ar=null,Op=null,ys=null;function Zy(){if(ys)return ys;var e,t=Op,n=t.length,r,o="value"in ar?ar.value:ar.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ys=o.slice(e,1<r?1-r:void 0)}function bs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ja(){return!0}function vh(){return!1}function qt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ja:vh,this.isPropagationStopped=vh,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tp=qt(oi),Ta=ze({},oi,{view:0,detail:0}),FC=qt(Ta),nc,rc,xi,$l=ze({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(nc=e.screenX-xi.screenX,rc=e.screenY-xi.screenY):rc=nc=0,xi=e),nc)},movementY:function(e){return"movementY"in e?e.movementY:rc}}),gh=qt($l),_C=ze({},$l,{dataTransfer:0}),jC=qt(_C),NC=ze({},Ta,{relatedTarget:0}),oc=qt(NC),kC=ze({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),MC=qt(kC),zC=ze({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),LC=qt(zC),DC=ze({},oi,{data:0}),yh=qt(DC),BC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=HC[e])?!!t[e]:!1}function Rp(){return UC}var WC=ze({},Ta,{key:function(e){if(e.key){var t=BC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?VC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rp,charCode:function(e){return e.type==="keypress"?bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),GC=qt(WC),qC=ze({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=qt(qC),KC=ze({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rp}),QC=qt(KC),XC=ze({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),JC=qt(XC),YC=ze({},$l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ZC=qt(YC),eS=[9,13,27,32],Pp=Wn&&"CompositionEvent"in window,Mi=null;Wn&&"documentMode"in document&&(Mi=document.documentMode);var tS=Wn&&"TextEvent"in window&&!Mi,e0=Wn&&(!Pp||Mi&&8<Mi&&11>=Mi),wh=" ",xh=!1;function t0(e,t){switch(e){case"keyup":return eS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var go=!1;function nS(e,t){switch(e){case"compositionend":return n0(t);case"keypress":return t.which!==32?null:(xh=!0,wh);case"textInput":return e=t.data,e===wh&&xh?null:e;default:return null}}function rS(e,t){if(go)return e==="compositionend"||!Pp&&t0(e,t)?(e=Zy(),ys=Op=ar=null,go=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return e0&&t.locale!=="ko"?null:t.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oS[e.type]:t==="textarea"}function r0(e,t,n,r){jy(r),t=Gs(t,"onChange"),0<t.length&&(n=new Tp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zi=null,Zi=null;function iS(e){m0(e,0)}function Il(e){var t=wo(e);if(Ry(t))return e}function aS(e,t){if(e==="change")return t}var o0=!1;if(Wn){var ic;if(Wn){var ac="oninput"in document;if(!ac){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),ac=typeof Sh.oninput=="function"}ic=ac}else ic=!1;o0=ic&&(!document.documentMode||9<document.documentMode)}function Eh(){zi&&(zi.detachEvent("onpropertychange",i0),Zi=zi=null)}function i0(e){if(e.propertyName==="value"&&Il(Zi)){var t=[];r0(t,Zi,e,wp(e)),zy(iS,t)}}function sS(e,t,n){e==="focusin"?(Eh(),zi=t,Zi=n,zi.attachEvent("onpropertychange",i0)):e==="focusout"&&Eh()}function lS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(Zi)}function uS(e,t){if(e==="click")return Il(t)}function cS(e,t){if(e==="input"||e==="change")return Il(t)}function dS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Cn=typeof Object.is=="function"?Object.is:dS;function ea(e,t){if(Cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ld.call(t,o)||!Cn(e[o],t[o]))return!1}return!0}function Oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Th(e,t){var n=Oh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function a0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?a0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function s0(){for(var e=window,t=Ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ls(e.document)}return t}function Ap(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fS(e){var t=s0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&a0(n.ownerDocument.documentElement,n)){if(r!==null&&Ap(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Th(n,i);var a=Th(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pS=Wn&&"documentMode"in document&&11>=document.documentMode,yo=null,Rd=null,Li=null,Pd=!1;function Rh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pd||yo==null||yo!==Ls(r)||(r=yo,"selectionStart"in r&&Ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Li&&ea(Li,r)||(Li=r,r=Gs(Rd,"onSelect"),0<r.length&&(t=new Tp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yo)))}function Ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bo={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},sc={},l0={};Wn&&(l0=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function Fl(e){if(sc[e])return sc[e];if(!bo[e])return e;var t=bo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in l0)return sc[e]=t[n];return e}var u0=Fl("animationend"),c0=Fl("animationiteration"),d0=Fl("animationstart"),f0=Fl("transitionend"),p0=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(e,t){p0.set(e,t),ro(t,[e])}for(var lc=0;lc<Ph.length;lc++){var uc=Ph[lc],mS=uc.toLowerCase(),hS=uc[0].toUpperCase()+uc.slice(1);Pr(mS,"on"+hS)}Pr(u0,"onAnimationEnd");Pr(c0,"onAnimationIteration");Pr(d0,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(f0,"onTransitionEnd");Vo("onMouseEnter",["mouseout","mouseover"]);Vo("onMouseLeave",["mouseout","mouseover"]);Vo("onPointerEnter",["pointerout","pointerover"]);Vo("onPointerLeave",["pointerout","pointerover"]);ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function Ah(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mC(r,t,void 0,e),e.currentTarget=null}function m0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Ah(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Ah(o,s,u),i=l}}}if(Bs)throw e=Sd,Bs=!1,Sd=null,e}function Ae(e,t){var n=t[_d];n===void 0&&(n=t[_d]=new Set);var r=e+"__bubble";n.has(r)||(h0(t,e,2,!1),n.add(r))}function cc(e,t,n){var r=0;t&&(r|=4),h0(n,e,r,t)}var Za="_reactListening"+Math.random().toString(36).slice(2);function ta(e){if(!e[Za]){e[Za]=!0,Cy.forEach(function(n){n!=="selectionchange"&&(vS.has(n)||cc(n,!1,e),cc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Za]||(t[Za]=!0,cc("selectionchange",!1,t))}}function h0(e,t,n,r){switch(Yy(t)){case 1:var o=$C;break;case 4:o=IC;break;default:o=Ep}n=o.bind(null,t,n,e),o=void 0,!Cd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function dc(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Mr(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}zy(function(){var u=i,c=wp(n),d=[];e:{var f=p0.get(e);if(f!==void 0){var w=Tp,h=e;switch(e){case"keypress":if(bs(n)===0)break e;case"keydown":case"keyup":w=GC;break;case"focusin":h="focus",w=oc;break;case"focusout":h="blur",w=oc;break;case"beforeblur":case"afterblur":w=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=jC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=QC;break;case u0:case c0:case d0:w=MC;break;case f0:w=JC;break;case"scroll":w=FC;break;case"wheel":w=ZC;break;case"copy":case"cut":case"paste":w=LC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=bh}var g=(t&4)!==0,b=!g&&e==="scroll",m=g?f!==null?f+"Capture":null:f;g=[];for(var p=u,y;p!==null;){y=p;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,m!==null&&(C=Qi(p,m),C!=null&&g.push(na(p,C,y)))),b)break;p=p.return}0<g.length&&(f=new w(f,h,null,n,c),d.push({event:f,listeners:g}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&n!==wd&&(h=n.relatedTarget||n.fromElement)&&(Mr(h)||h[Gn]))break e;if((w||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,w?(h=n.relatedTarget||n.toElement,w=u,h=h?Mr(h):null,h!==null&&(b=oo(h),h!==b||h.tag!==5&&h.tag!==6)&&(h=null)):(w=null,h=u),w!==h)){if(g=gh,C="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(g=bh,C="onPointerLeave",m="onPointerEnter",p="pointer"),b=w==null?f:wo(w),y=h==null?f:wo(h),f=new g(C,p+"leave",w,n,c),f.target=b,f.relatedTarget=y,C=null,Mr(c)===u&&(g=new g(m,p+"enter",h,n,c),g.target=y,g.relatedTarget=b,C=g),b=C,w&&h)t:{for(g=w,m=h,p=0,y=g;y;y=co(y))p++;for(y=0,C=m;C;C=co(C))y++;for(;0<p-y;)g=co(g),p--;for(;0<y-p;)m=co(m),y--;for(;p--;){if(g===m||m!==null&&g===m.alternate)break t;g=co(g),m=co(m)}g=null}else g=null;w!==null&&$h(d,f,w,g,!1),h!==null&&b!==null&&$h(d,b,h,g,!0)}}e:{if(f=u?wo(u):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var x=aS;else if(Ch(f))if(o0)x=cS;else{x=lS;var E=sS}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=uS);if(x&&(x=x(e,u))){r0(d,x,n,c);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&hd(f,"number",f.value)}switch(E=u?wo(u):window,e){case"focusin":(Ch(E)||E.contentEditable==="true")&&(yo=E,Rd=u,Li=null);break;case"focusout":Li=Rd=yo=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,Rh(d,n,c);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":Rh(d,n,c)}var S;if(Pp)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else go?t0(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(e0&&n.locale!=="ko"&&(go||O!=="onCompositionStart"?O==="onCompositionEnd"&&go&&(S=Zy()):(ar=c,Op="value"in ar?ar.value:ar.textContent,go=!0)),E=Gs(u,O),0<E.length&&(O=new yh(O,e,null,n,c),d.push({event:O,listeners:E}),S?O.data=S:(S=n0(n),S!==null&&(O.data=S)))),(S=tS?nS(e,n):rS(e,n))&&(u=Gs(u,"onBeforeInput"),0<u.length&&(c=new yh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}m0(d,t)})}function na(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Qi(e,n),i!=null&&r.unshift(na(e,i,o)),i=Qi(e,t),i!=null&&r.push(na(e,i,o))),e=e.return}return r}function co(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $h(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Qi(n,i),l!=null&&a.unshift(na(n,l,s))):o||(l=Qi(n,i),l!=null&&a.push(na(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var gS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function Ih(e){return(typeof e=="string"?e:""+e).replace(gS,`
`).replace(yS,"")}function es(e,t,n){if(t=Ih(t),Ih(e)!==t&&n)throw Error(D(425))}function qs(){}var Ad=null,$d=null;function Id(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,wS=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(e){return Fh.resolve(null).then(e).catch(xS)}:Fd;function xS(e){setTimeout(function(){throw e})}function fc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yi(t)}function hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _h(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ii=Math.random().toString(36).slice(2),Fn="__reactFiber$"+ii,ra="__reactProps$"+ii,Gn="__reactContainer$"+ii,_d="__reactEvents$"+ii,CS="__reactListeners$"+ii,SS="__reactHandles$"+ii;function Mr(e){var t=e[Fn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gn]||n[Fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_h(e);e!==null;){if(n=e[Fn])return n;e=_h(e)}return t}e=n,n=e.parentNode}return null}function Ra(e){return e=e[Fn]||e[Gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function _l(e){return e[ra]||null}var jd=[],xo=-1;function Ar(e){return{current:e}}function $e(e){0>xo||(e.current=jd[xo],jd[xo]=null,xo--)}function Oe(e,t){xo++,jd[xo]=e.current,e.current=t}var Sr={},yt=Ar(Sr),Tt=Ar(!1),Kr=Sr;function Ho(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Rt(e){return e=e.childContextTypes,e!=null}function Ks(){$e(Tt),$e(yt)}function jh(e,t,n){if(yt.current!==Sr)throw Error(D(168));Oe(yt,t),Oe(Tt,n)}function v0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(D(108,sC(e)||"Unknown",o));return ze({},n,r)}function Qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Kr=yt.current,Oe(yt,e),Oe(Tt,Tt.current),!0}function Nh(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=v0(e,t,Kr),r.__reactInternalMemoizedMergedChildContext=e,$e(Tt),$e(yt),Oe(yt,e)):$e(Tt),Oe(Tt,n)}var Bn=null,jl=!1,pc=!1;function g0(e){Bn===null?Bn=[e]:Bn.push(e)}function ES(e){jl=!0,g0(e)}function $r(){if(!pc&&Bn!==null){pc=!0;var e=0,t=ve;try{var n=Bn;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,jl=!1}catch(o){throw Bn!==null&&(Bn=Bn.slice(e+1)),Vy(xp,$r),o}finally{ve=t,pc=!1}}return null}var Co=[],So=0,Xs=null,Js=0,Zt=[],en=0,Qr=null,Vn=1,Hn="";function _r(e,t){Co[So++]=Js,Co[So++]=Xs,Xs=e,Js=t}function y0(e,t,n){Zt[en++]=Vn,Zt[en++]=Hn,Zt[en++]=Qr,Qr=e;var r=Vn;e=Hn;var o=32-yn(r)-1;r&=~(1<<o),n+=1;var i=32-yn(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Vn=1<<32-yn(t)+o|n<<o|r,Hn=i+e}else Vn=1<<i|n<<o|r,Hn=e}function $p(e){e.return!==null&&(_r(e,1),y0(e,1,0))}function Ip(e){for(;e===Xs;)Xs=Co[--So],Co[So]=null,Js=Co[--So],Co[So]=null;for(;e===Qr;)Qr=Zt[--en],Zt[en]=null,Hn=Zt[--en],Zt[en]=null,Vn=Zt[--en],Zt[en]=null}var Vt=null,Dt=null,je=!1,vn=null;function b0(e,t){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,Dt=hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qr!==null?{id:Vn,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Vt=e,Dt=null,!0):!1;default:return!1}}function Nd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kd(e){if(je){var t=Dt;if(t){var n=t;if(!kh(e,t)){if(Nd(e))throw Error(D(418));t=hr(n.nextSibling);var r=Vt;t&&kh(e,t)?b0(r,n):(e.flags=e.flags&-4097|2,je=!1,Vt=e)}}else{if(Nd(e))throw Error(D(418));e.flags=e.flags&-4097|2,je=!1,Vt=e}}}function Mh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function ts(e){if(e!==Vt)return!1;if(!je)return Mh(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Id(e.type,e.memoizedProps)),t&&(t=Dt)){if(Nd(e))throw w0(),Error(D(418));for(;t;)b0(e,t),t=hr(t.nextSibling)}if(Mh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=hr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=Vt?hr(e.stateNode.nextSibling):null;return!0}function w0(){for(var e=Dt;e;)e=hr(e.nextSibling)}function Uo(){Dt=Vt=null,je=!1}function Fp(e){vn===null?vn=[e]:vn.push(e)}var OS=Xn.ReactCurrentBatchConfig;function Ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zh(e){var t=e._init;return t(e._payload)}function x0(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=br(m,p),m.index=0,m.sibling=null,m}function i(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,y,C){return p===null||p.tag!==6?(p=wc(y,m.mode,C),p.return=m,p):(p=o(p,y),p.return=m,p)}function l(m,p,y,C){var x=y.type;return x===vo?c(m,p,y.props.children,C,y.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===tr&&zh(x)===p.type)?(C=o(p,y.props),C.ref=Ci(m,p,y),C.return=m,C):(C=Ts(y.type,y.key,y.props,null,m.mode,C),C.ref=Ci(m,p,y),C.return=m,C)}function u(m,p,y,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=xc(y,m.mode,C),p.return=m,p):(p=o(p,y.children||[]),p.return=m,p)}function c(m,p,y,C,x){return p===null||p.tag!==7?(p=Hr(y,m.mode,C,x),p.return=m,p):(p=o(p,y),p.return=m,p)}function d(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=wc(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wa:return y=Ts(p.type,p.key,p.props,null,m.mode,y),y.ref=Ci(m,null,p),y.return=m,y;case ho:return p=xc(p,m.mode,y),p.return=m,p;case tr:var C=p._init;return d(m,C(p._payload),y)}if(Ai(p)||gi(p))return p=Hr(p,m.mode,y,null),p.return=m,p;ns(m,p)}return null}function f(m,p,y,C){var x=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:s(m,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wa:return y.key===x?l(m,p,y,C):null;case ho:return y.key===x?u(m,p,y,C):null;case tr:return x=y._init,f(m,p,x(y._payload),C)}if(Ai(y)||gi(y))return x!==null?null:c(m,p,y,C,null);ns(m,y)}return null}function w(m,p,y,C,x){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(y)||null,s(p,m,""+C,x);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Wa:return m=m.get(C.key===null?y:C.key)||null,l(p,m,C,x);case ho:return m=m.get(C.key===null?y:C.key)||null,u(p,m,C,x);case tr:var E=C._init;return w(m,p,y,E(C._payload),x)}if(Ai(C)||gi(C))return m=m.get(y)||null,c(p,m,C,x,null);ns(p,C)}return null}function h(m,p,y,C){for(var x=null,E=null,S=p,O=p=0,R=null;S!==null&&O<y.length;O++){S.index>O?(R=S,S=null):R=S.sibling;var T=f(m,S,y[O],C);if(T===null){S===null&&(S=R);break}e&&S&&T.alternate===null&&t(m,S),p=i(T,p,O),E===null?x=T:E.sibling=T,E=T,S=R}if(O===y.length)return n(m,S),je&&_r(m,O),x;if(S===null){for(;O<y.length;O++)S=d(m,y[O],C),S!==null&&(p=i(S,p,O),E===null?x=S:E.sibling=S,E=S);return je&&_r(m,O),x}for(S=r(m,S);O<y.length;O++)R=w(S,m,O,y[O],C),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?O:R.key),p=i(R,p,O),E===null?x=R:E.sibling=R,E=R);return e&&S.forEach(function(I){return t(m,I)}),je&&_r(m,O),x}function g(m,p,y,C){var x=gi(y);if(typeof x!="function")throw Error(D(150));if(y=x.call(y),y==null)throw Error(D(151));for(var E=x=null,S=p,O=p=0,R=null,T=y.next();S!==null&&!T.done;O++,T=y.next()){S.index>O?(R=S,S=null):R=S.sibling;var I=f(m,S,T.value,C);if(I===null){S===null&&(S=R);break}e&&S&&I.alternate===null&&t(m,S),p=i(I,p,O),E===null?x=I:E.sibling=I,E=I,S=R}if(T.done)return n(m,S),je&&_r(m,O),x;if(S===null){for(;!T.done;O++,T=y.next())T=d(m,T.value,C),T!==null&&(p=i(T,p,O),E===null?x=T:E.sibling=T,E=T);return je&&_r(m,O),x}for(S=r(m,S);!T.done;O++,T=y.next())T=w(S,m,O,T.value,C),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?O:T.key),p=i(T,p,O),E===null?x=T:E.sibling=T,E=T);return e&&S.forEach(function($){return t(m,$)}),je&&_r(m,O),x}function b(m,p,y,C){if(typeof y=="object"&&y!==null&&y.type===vo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Wa:e:{for(var x=y.key,E=p;E!==null;){if(E.key===x){if(x=y.type,x===vo){if(E.tag===7){n(m,E.sibling),p=o(E,y.props.children),p.return=m,m=p;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===tr&&zh(x)===E.type){n(m,E.sibling),p=o(E,y.props),p.ref=Ci(m,E,y),p.return=m,m=p;break e}n(m,E);break}else t(m,E);E=E.sibling}y.type===vo?(p=Hr(y.props.children,m.mode,C,y.key),p.return=m,m=p):(C=Ts(y.type,y.key,y.props,null,m.mode,C),C.ref=Ci(m,p,y),C.return=m,m=C)}return a(m);case ho:e:{for(E=y.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=o(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=xc(y,m.mode,C),p.return=m,m=p}return a(m);case tr:return E=y._init,b(m,p,E(y._payload),C)}if(Ai(y))return h(m,p,y,C);if(gi(y))return g(m,p,y,C);ns(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,y),p.return=m,m=p):(n(m,p),p=wc(y,m.mode,C),p.return=m,m=p),a(m)):n(m,p)}return b}var Wo=x0(!0),C0=x0(!1),Ys=Ar(null),Zs=null,Eo=null,_p=null;function jp(){_p=Eo=Zs=null}function Np(e){var t=Ys.current;$e(Ys),e._currentValue=t}function Md(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jo(e,t){Zs=e,_p=Eo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ot=!0),e.firstContext=null)}function rn(e){var t=e._currentValue;if(_p!==e)if(e={context:e,memoizedValue:t,next:null},Eo===null){if(Zs===null)throw Error(D(308));Eo=e,Zs.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var zr=null;function kp(e){zr===null?zr=[e]:zr.push(e)}function S0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,kp(t)):(n.next=o.next,o.next=n),t.interleaved=n,qn(e,r)}function qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nr=!1;function Mp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qn(e,n)}return o=r.interleaved,o===null?(t.next=t,kp(r)):(t.next=o.next,o.next=t),r.interleaved=t,qn(e,n)}function ws(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cp(e,n)}}function Lh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function el(e,t,n,r){var o=e.updateQueue;nr=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;a=0,c=u=l=null,s=i;do{var f=s.lane,w=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,g=s;switch(f=t,w=n,g.tag){case 1:if(h=g.payload,typeof h=="function"){d=h.call(w,d,f);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h=="function"?h.call(w,d,f):h,f==null)break e;d=ze({},d,f);break e;case 2:nr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else w={eventTime:w,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=w,l=d):c=c.next=w,a|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Jr|=a,e.lanes=a,e.memoizedState=d}}function Dh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(D(191,o));o.call(r)}}}var Pa={},Nn=Ar(Pa),oa=Ar(Pa),ia=Ar(Pa);function Lr(e){if(e===Pa)throw Error(D(174));return e}function zp(e,t){switch(Oe(ia,t),Oe(oa,e),Oe(Nn,Pa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gd(t,e)}$e(Nn),Oe(Nn,t)}function Go(){$e(Nn),$e(oa),$e(ia)}function O0(e){Lr(ia.current);var t=Lr(Nn.current),n=gd(t,e.type);t!==n&&(Oe(oa,e),Oe(Nn,n))}function Lp(e){oa.current===e&&($e(Nn),$e(oa))}var Ne=Ar(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mc=[];function Dp(){for(var e=0;e<mc.length;e++)mc[e]._workInProgressVersionPrimary=null;mc.length=0}var xs=Xn.ReactCurrentDispatcher,hc=Xn.ReactCurrentBatchConfig,Xr=0,Me=null,Ke=null,tt=null,nl=!1,Di=!1,aa=0,TS=0;function ft(){throw Error(D(321))}function Bp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Cn(e[n],t[n]))return!1;return!0}function Vp(e,t,n,r,o,i){if(Xr=i,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xs.current=e===null||e.memoizedState===null?$S:IS,e=n(r,o),Di){i=0;do{if(Di=!1,aa=0,25<=i)throw Error(D(301));i+=1,tt=Ke=null,t.updateQueue=null,xs.current=FS,e=n(r,o)}while(Di)}if(xs.current=rl,t=Ke!==null&&Ke.next!==null,Xr=0,tt=Ke=Me=null,nl=!1,t)throw Error(D(300));return e}function Hp(){var e=aa!==0;return aa=0,e}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Me.memoizedState=tt=e:tt=tt.next=e,tt}function on(){if(Ke===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=tt===null?Me.memoizedState:tt.next;if(t!==null)tt=t,Ke=e;else{if(e===null)throw Error(D(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},tt===null?Me.memoizedState=tt=e:tt=tt.next=e}return tt}function sa(e,t){return typeof t=="function"?t(e):t}function vc(e){var t=on(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Ke,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var c=u.lane;if((Xr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,Me.lanes|=c,Jr|=c}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,Cn(r,t.memoizedState)||(Ot=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Me.lanes|=i,Jr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gc(e){var t=on(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Cn(i,t.memoizedState)||(Ot=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function T0(){}function R0(e,t){var n=Me,r=on(),o=t(),i=!Cn(r.memoizedState,o);if(i&&(r.memoizedState=o,Ot=!0),r=r.queue,Up($0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,la(9,A0.bind(null,n,r,o,t),void 0,null),nt===null)throw Error(D(349));Xr&30||P0(n,t,o)}return o}function P0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function A0(e,t,n,r){t.value=n,t.getSnapshot=r,I0(t)&&F0(e)}function $0(e,t,n){return n(function(){I0(t)&&F0(e)})}function I0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cn(e,n)}catch{return!0}}function F0(e){var t=qn(e,1);t!==null&&bn(t,e,1,-1)}function Bh(e){var t=$n();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t.queue=e,e=e.dispatch=AS.bind(null,Me,e),[t.memoizedState,e]}function la(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _0(){return on().memoizedState}function Cs(e,t,n,r){var o=$n();Me.flags|=e,o.memoizedState=la(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var o=on();r=r===void 0?null:r;var i=void 0;if(Ke!==null){var a=Ke.memoizedState;if(i=a.destroy,r!==null&&Bp(r,a.deps)){o.memoizedState=la(t,n,i,r);return}}Me.flags|=e,o.memoizedState=la(1|t,n,i,r)}function Vh(e,t){return Cs(8390656,8,e,t)}function Up(e,t){return Nl(2048,8,e,t)}function j0(e,t){return Nl(4,2,e,t)}function N0(e,t){return Nl(4,4,e,t)}function k0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function M0(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,k0.bind(null,t,e),n)}function Wp(){}function z0(e,t){var n=on();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function L0(e,t){var n=on();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function D0(e,t,n){return Xr&21?(Cn(n,t)||(n=Wy(),Me.lanes|=n,Jr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ot=!0),e.memoizedState=n)}function RS(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=hc.transition;hc.transition={};try{e(!1),t()}finally{ve=n,hc.transition=r}}function B0(){return on().memoizedState}function PS(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},V0(e))H0(t,n);else if(n=S0(e,t,n,r),n!==null){var o=xt();bn(n,e,r,o),U0(n,t,r)}}function AS(e,t,n){var r=yr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(V0(e))H0(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Cn(s,a)){var l=t.interleaved;l===null?(o.next=o,kp(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=S0(e,t,o,r),n!==null&&(o=xt(),bn(n,e,r,o),U0(n,t,r))}}function V0(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function H0(e,t){Di=nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function U0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cp(e,n)}}var rl={readContext:rn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},$S={readContext:rn,useCallback:function(e,t){return $n().memoizedState=[e,t===void 0?null:t],e},useContext:rn,useEffect:Vh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cs(4194308,4,k0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cs(4,2,e,t)},useMemo:function(e,t){var n=$n();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$n();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=PS.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=$n();return e={current:e},t.memoizedState=e},useState:Bh,useDebugValue:Wp,useDeferredValue:function(e){return $n().memoizedState=e},useTransition:function(){var e=Bh(!1),t=e[0];return e=RS.bind(null,e[1]),$n().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Me,o=$n();if(je){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),nt===null)throw Error(D(349));Xr&30||P0(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Vh($0.bind(null,r,i,e),[e]),r.flags|=2048,la(9,A0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$n(),t=nt.identifierPrefix;if(je){var n=Hn,r=Vn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=aa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=TS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},IS={readContext:rn,useCallback:z0,useContext:rn,useEffect:Up,useImperativeHandle:M0,useInsertionEffect:j0,useLayoutEffect:N0,useMemo:L0,useReducer:vc,useRef:_0,useState:function(){return vc(sa)},useDebugValue:Wp,useDeferredValue:function(e){var t=on();return D0(t,Ke.memoizedState,e)},useTransition:function(){var e=vc(sa)[0],t=on().memoizedState;return[e,t]},useMutableSource:T0,useSyncExternalStore:R0,useId:B0,unstable_isNewReconciler:!1},FS={readContext:rn,useCallback:z0,useContext:rn,useEffect:Up,useImperativeHandle:M0,useInsertionEffect:j0,useLayoutEffect:N0,useMemo:L0,useReducer:gc,useRef:_0,useState:function(){return gc(sa)},useDebugValue:Wp,useDeferredValue:function(e){var t=on();return Ke===null?t.memoizedState=e:D0(t,Ke.memoizedState,e)},useTransition:function(){var e=gc(sa)[0],t=on().memoizedState;return[e,t]},useMutableSource:T0,useSyncExternalStore:R0,useId:B0,unstable_isNewReconciler:!1};function fn(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?oo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xt(),o=yr(e),i=Un(r,o);i.payload=t,n!=null&&(i.callback=n),t=vr(e,i,o),t!==null&&(bn(t,e,o,r),ws(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xt(),o=yr(e),i=Un(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vr(e,i,o),t!==null&&(bn(t,e,o,r),ws(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xt(),r=yr(e),o=Un(n,r);o.tag=2,t!=null&&(o.callback=t),t=vr(e,o,r),t!==null&&(bn(t,e,r,n),ws(t,e,r))}};function Hh(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ea(n,r)||!ea(o,i):!0}function W0(e,t,n){var r=!1,o=Sr,i=t.contextType;return typeof i=="object"&&i!==null?i=rn(i):(o=Rt(t)?Kr:yt.current,r=t.contextTypes,i=(r=r!=null)?Ho(e,o):Sr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Uh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Ld(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Mp(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=rn(i):(i=Rt(t)?Kr:yt.current,o.context=Ho(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(zd(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&kl.enqueueReplaceState(o,o.state,null),el(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qo(e,t){try{var n="",r=t;do n+=aC(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function yc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _S=typeof WeakMap=="function"?WeakMap:Map;function G0(e,t,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,Xd=r),Dd(e,t)},n}function q0(e,t,n){n=Un(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Dd(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Dd(e,t),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Wh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _S;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=qS.bind(null,e,t,n),t.then(e,e))}function Gh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qh(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Un(-1,1),t.tag=2,vr(n,t,1))),n.lanes|=1),e)}var jS=Xn.ReactCurrentOwner,Ot=!1;function wt(e,t,n,r){t.child=e===null?C0(t,null,n,r):Wo(t,e.child,n,r)}function Kh(e,t,n,r,o){n=n.render;var i=t.ref;return jo(t,o),r=Vp(e,t,n,r,i,o),n=Hp(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Kn(e,t,o)):(je&&n&&$p(t),t.flags|=1,wt(e,t,r,o),t.child)}function Qh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Zp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,K0(e,t,i,r,o)):(e=Ts(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(a,r)&&e.ref===t.ref)return Kn(e,t,o)}return t.flags|=1,e=br(i,r),e.ref=t.ref,e.return=t,t.child=e}function K0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ea(i,r)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ot=!0);else return t.lanes=e.lanes,Kn(e,t,o)}return Bd(e,t,n,r,o)}function Q0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(To,Lt),Lt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oe(To,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Oe(To,Lt),Lt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Oe(To,Lt),Lt|=r;return wt(e,t,o,n),t.child}function X0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bd(e,t,n,r,o){var i=Rt(n)?Kr:yt.current;return i=Ho(t,i),jo(t,o),n=Vp(e,t,n,r,i,o),r=Hp(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Kn(e,t,o)):(je&&r&&$p(t),t.flags|=1,wt(e,t,n,o),t.child)}function Xh(e,t,n,r,o){if(Rt(n)){var i=!0;Qs(t)}else i=!1;if(jo(t,o),t.stateNode===null)Ss(e,t),W0(t,n,r),Ld(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=Rt(n)?Kr:yt.current,u=Ho(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Uh(t,a,r,u),nr=!1;var f=t.memoizedState;a.state=f,el(t,r,a,o),l=t.memoizedState,s!==r||f!==l||Tt.current||nr?(typeof c=="function"&&(zd(t,n,c,r),l=t.memoizedState),(s=nr||Hh(t,n,s,r,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,E0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:fn(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=Rt(n)?Kr:yt.current,l=Ho(t,l));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||f!==l)&&Uh(t,a,r,l),nr=!1,f=t.memoizedState,a.state=f,el(t,r,a,o);var h=t.memoizedState;s!==d||f!==h||Tt.current||nr?(typeof w=="function"&&(zd(t,n,w,r),h=t.memoizedState),(u=nr||Hh(t,n,u,r,f,h,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vd(e,t,n,r,i,o)}function Vd(e,t,n,r,o,i){X0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Nh(t,n,!1),Kn(e,t,i);r=t.stateNode,jS.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Wo(t,e.child,null,i),t.child=Wo(t,null,s,i)):wt(e,t,s,i),t.memoizedState=r.state,o&&Nh(t,n,!0),t.child}function J0(e){var t=e.stateNode;t.pendingContext?jh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jh(e,t.context,!1),zp(e,t.containerInfo)}function Jh(e,t,n,r,o){return Uo(),Fp(o),t.flags|=256,wt(e,t,n,r),t.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Ud(e){return{baseLanes:e,cachePool:null,transitions:null}}function Y0(e,t,n){var r=t.pendingProps,o=Ne.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Oe(Ne,o&1),e===null)return kd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ll(a,r,0,null),e=Hr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ud(n),t.memoizedState=Hd,e):Gp(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return NS(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=br(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=br(s,i):(i=Hr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ud(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Hd,r}return i=e.child,e=i.sibling,r=br(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gp(e,t){return t=Ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,n,r){return r!==null&&Fp(r),Wo(t,e.child,null,n),e=Gp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function NS(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=yc(Error(D(422))),rs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ll({mode:"visible",children:r.children},o,0,null),i=Hr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Wo(t,e.child,null,a),t.child.memoizedState=Ud(a),t.memoizedState=Hd,i);if(!(t.mode&1))return rs(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(D(419)),r=yc(i,r,void 0),rs(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ot||s){if(r=nt,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qn(e,o),bn(r,e,o,-1))}return Yp(),r=yc(Error(D(421))),rs(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=KS.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Dt=hr(o.nextSibling),Vt=t,je=!0,vn=null,e!==null&&(Zt[en++]=Vn,Zt[en++]=Hn,Zt[en++]=Qr,Vn=e.id,Hn=e.overflow,Qr=t),t=Gp(t,r.children),t.flags|=4096,t)}function Yh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Md(e.return,t,n)}function bc(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Z0(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(wt(e,t,r.children,n),r=Ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yh(e,n,t);else if(e.tag===19)Yh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oe(Ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&tl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),bc(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&tl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}bc(t,!0,n,null,i);break;case"together":bc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ss(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=br(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=br(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kS(e,t,n){switch(t.tag){case 3:J0(t),Uo();break;case 5:O0(t);break;case 1:Rt(t.type)&&Qs(t);break;case 4:zp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Oe(Ys,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Oe(Ne,Ne.current&1),t.flags|=128,null):n&t.child.childLanes?Y0(e,t,n):(Oe(Ne,Ne.current&1),e=Kn(e,t,n),e!==null?e.sibling:null);Oe(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Z0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Oe(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Q0(e,t,n)}return Kn(e,t,n)}var eb,Wd,tb,nb;eb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};tb=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Lr(Nn.current);var i=null;switch(n){case"input":o=pd(e,o),r=pd(e,r),i=[];break;case"select":o=ze({},o,{value:void 0}),r=ze({},r,{value:void 0}),i=[];break;case"textarea":o=vd(e,o),r=vd(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qs)}yd(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qi.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ae("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};nb=function(e,t,n,r){n!==r&&(t.flags|=4)};function Si(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function MS(e,t,n){var r=t.pendingProps;switch(Ip(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return Rt(t.type)&&Ks(),pt(t),null;case 3:return r=t.stateNode,Go(),$e(Tt),$e(yt),Dp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vn!==null&&(Zd(vn),vn=null))),Wd(e,t),pt(t),null;case 5:Lp(t);var o=Lr(ia.current);if(n=t.type,e!==null&&t.stateNode!=null)tb(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return pt(t),null}if(e=Lr(Nn.current),ts(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fn]=t,r[ra]=i,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(o=0;o<Ii.length;o++)Ae(Ii[o],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":sh(r,i),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ae("invalid",r);break;case"textarea":uh(r,i),Ae("invalid",r)}yd(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&es(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&es(r.textContent,s,e),o=["children",""+s]):qi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Ga(r),lh(r,i,!0);break;case"textarea":Ga(r),ch(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qs)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$y(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Fn]=t,e[ra]=r,eb(e,t,!1,!1),t.stateNode=e;e:{switch(a=bd(n,r),n){case"dialog":Ae("cancel",e),Ae("close",e),o=r;break;case"iframe":case"object":case"embed":Ae("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ii.length;o++)Ae(Ii[o],e);o=r;break;case"source":Ae("error",e),o=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),o=r;break;case"details":Ae("toggle",e),o=r;break;case"input":sh(e,r),o=pd(e,r),Ae("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ze({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":uh(e,r),o=vd(e,r),Ae("invalid",e);break;default:o=r}yd(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?_y(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Iy(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ki(e,l):typeof l=="number"&&Ki(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qi.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Ae("scroll",e):l!=null&&vp(e,i,l,a))}switch(n){case"input":Ga(e),lh(e,r,!1);break;case"textarea":Ga(e),ch(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$o(e,!!r.multiple,i,!1):r.defaultValue!=null&&$o(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=qs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)nb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Lr(ia.current),Lr(Nn.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fn]=t,(i=r.nodeValue!==n)&&(e=Vt,e!==null))switch(e.tag){case 3:es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=t,t.stateNode=r}return pt(t),null;case 13:if($e(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&Dt!==null&&t.mode&1&&!(t.flags&128))w0(),Uo(),t.flags|=98560,i=!1;else if(i=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(D(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(D(317));i[Fn]=t}else Uo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pt(t),i=!1}else vn!==null&&(Zd(vn),vn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?Qe===0&&(Qe=3):Yp())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return Go(),Wd(e,t),e===null&&ta(t.stateNode.containerInfo),pt(t),null;case 10:return Np(t.type._context),pt(t),null;case 17:return Rt(t.type)&&Ks(),pt(t),null;case 19:if($e(Ne),i=t.memoizedState,i===null)return pt(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Si(i,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=tl(e),a!==null){for(t.flags|=128,Si(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oe(Ne,Ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&He()>Ko&&(t.flags|=128,r=!0,Si(i,!1),t.lanes=4194304)}else{if(!r)if(e=tl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Si(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!je)return pt(t),null}else 2*He()-i.renderingStartTime>Ko&&n!==1073741824&&(t.flags|=128,r=!0,Si(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=He(),t.sibling=null,n=Ne.current,Oe(Ne,r?n&1|2:n&1),t):(pt(t),null);case 22:case 23:return Jp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Lt&1073741824&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function zS(e,t){switch(Ip(t),t.tag){case 1:return Rt(t.type)&&Ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Go(),$e(Tt),$e(yt),Dp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lp(t),null;case 13:if($e(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Ne),null;case 4:return Go(),null;case 10:return Np(t.type._context),null;case 22:case 23:return Jp(),null;case 24:return null;default:return null}}var os=!1,vt=!1,LS=typeof WeakSet=="function"?WeakSet:Set,X=null;function Oo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function Gd(e,t,n){try{n()}catch(r){De(e,t,r)}}var Zh=!1;function DS(e,t){if(Ad=Us,e=s0(),Ap(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var w;d!==n||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(w=d.firstChild)!==null;)f=d,d=w;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=a),f===i&&++c===r&&(l=a),(w=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=w}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:e,selectionRange:n},Us=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,b=h.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?g:fn(t.type,g),b);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(C){De(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return h=Zh,Zh=!1,h}function Bi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Gd(t,n,i)}o=o.next}while(o!==r)}}function Ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rb(e){var t=e.alternate;t!==null&&(e.alternate=null,rb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fn],delete t[ra],delete t[_d],delete t[CS],delete t[SS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ob(e){return e.tag===5||e.tag===3||e.tag===4}function ev(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ob(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qs));else if(r!==4&&(e=e.child,e!==null))for(Kd(e,t,n),e=e.sibling;e!==null;)Kd(e,t,n),e=e.sibling}function Qd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qd(e,t,n),e=e.sibling;e!==null;)Qd(e,t,n),e=e.sibling}var at=null,pn=!1;function Zn(e,t,n){for(n=n.child;n!==null;)ib(e,t,n),n=n.sibling}function ib(e,t,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:vt||Oo(n,t);case 6:var r=at,o=pn;at=null,Zn(e,t,n),at=r,pn=o,at!==null&&(pn?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(pn?(e=at,n=n.stateNode,e.nodeType===8?fc(e.parentNode,n):e.nodeType===1&&fc(e,n),Yi(e)):fc(at,n.stateNode));break;case 4:r=at,o=pn,at=n.stateNode.containerInfo,pn=!0,Zn(e,t,n),at=r,pn=o;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Gd(n,t,a),o=o.next}while(o!==r)}Zn(e,t,n);break;case 1:if(!vt&&(Oo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){De(n,t,s)}Zn(e,t,n);break;case 21:Zn(e,t,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,Zn(e,t,n),vt=r):Zn(e,t,n);break;default:Zn(e,t,n)}}function tv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new LS),t.forEach(function(r){var o=QS.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function dn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:at=s.stateNode,pn=!1;break e;case 3:at=s.stateNode.containerInfo,pn=!0;break e;case 4:at=s.stateNode.containerInfo,pn=!0;break e}s=s.return}if(at===null)throw Error(D(160));ib(i,a,o),at=null,pn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){De(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ab(t,e),t=t.sibling}function ab(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(t,e),Pn(e),r&4){try{Bi(3,e,e.return),Ml(3,e)}catch(g){De(e,e.return,g)}try{Bi(5,e,e.return)}catch(g){De(e,e.return,g)}}break;case 1:dn(t,e),Pn(e),r&512&&n!==null&&Oo(n,n.return);break;case 5:if(dn(t,e),Pn(e),r&512&&n!==null&&Oo(n,n.return),e.flags&32){var o=e.stateNode;try{Ki(o,"")}catch(g){De(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Py(o,i),bd(s,a);var u=bd(s,i);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?_y(o,d):c==="dangerouslySetInnerHTML"?Iy(o,d):c==="children"?Ki(o,d):vp(o,c,d,u)}switch(s){case"input":md(o,i);break;case"textarea":Ay(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?$o(o,!!i.multiple,w,!1):f!==!!i.multiple&&(i.defaultValue!=null?$o(o,!!i.multiple,i.defaultValue,!0):$o(o,!!i.multiple,i.multiple?[]:"",!1))}o[ra]=i}catch(g){De(e,e.return,g)}}break;case 6:if(dn(t,e),Pn(e),r&4){if(e.stateNode===null)throw Error(D(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){De(e,e.return,g)}}break;case 3:if(dn(t,e),Pn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yi(t.containerInfo)}catch(g){De(e,e.return,g)}break;case 4:dn(t,e),Pn(e);break;case 13:dn(t,e),Pn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qp=He())),r&4&&tv(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(vt=(u=vt)||c,dn(t,e),vt=u):dn(t,e),Pn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(X=e,c=e.child;c!==null;){for(d=X=c;X!==null;){switch(f=X,w=f.child,f.tag){case 0:case 11:case 14:case 15:Bi(4,f,f.return);break;case 1:Oo(f,f.return);var h=f.stateNode;if(typeof h.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){De(r,n,g)}}break;case 5:Oo(f,f.return);break;case 22:if(f.memoizedState!==null){rv(d);continue}}w!==null?(w.return=f,X=w):rv(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Fy("display",a))}catch(g){De(e,e.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){De(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dn(t,e),Pn(e),r&4&&tv(e);break;case 21:break;default:dn(t,e),Pn(e)}}function Pn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ob(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ki(o,""),r.flags&=-33);var i=ev(e);Qd(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ev(e);Kd(e,s,a);break;default:throw Error(D(161))}}catch(l){De(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function BS(e,t,n){X=e,sb(e)}function sb(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var o=X,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||os;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||vt;s=os;var u=vt;if(os=a,(vt=l)&&!u)for(X=o;X!==null;)a=X,l=a.child,a.tag===22&&a.memoizedState!==null?ov(o):l!==null?(l.return=a,X=l):ov(o);for(;i!==null;)X=i,sb(i),i=i.sibling;X=o,os=s,vt=u}nv(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,X=i):nv(e)}}function nv(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:vt||Ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!vt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:fn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Dh(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Yi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}vt||t.flags&512&&qd(t)}catch(f){De(t,t.return,f)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function rv(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function ov(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ml(4,t)}catch(l){De(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){De(t,o,l)}}var i=t.return;try{qd(t)}catch(l){De(t,i,l)}break;case 5:var a=t.return;try{qd(t)}catch(l){De(t,a,l)}}}catch(l){De(t,t.return,l)}if(t===e){X=null;break}var s=t.sibling;if(s!==null){s.return=t.return,X=s;break}X=t.return}}var VS=Math.ceil,ol=Xn.ReactCurrentDispatcher,qp=Xn.ReactCurrentOwner,nn=Xn.ReactCurrentBatchConfig,fe=0,nt=null,Ge=null,st=0,Lt=0,To=Ar(0),Qe=0,ua=null,Jr=0,zl=0,Kp=0,Vi=null,Et=null,Qp=0,Ko=1/0,Dn=null,il=!1,Xd=null,gr=null,is=!1,sr=null,al=0,Hi=0,Jd=null,Es=-1,Os=0;function xt(){return fe&6?He():Es!==-1?Es:Es=He()}function yr(e){return e.mode&1?fe&2&&st!==0?st&-st:OS.transition!==null?(Os===0&&(Os=Wy()),Os):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Yy(e.type)),e):1}function bn(e,t,n,r){if(50<Hi)throw Hi=0,Jd=null,Error(D(185));Oa(e,n,r),(!(fe&2)||e!==nt)&&(e===nt&&(!(fe&2)&&(zl|=n),Qe===4&&or(e,st)),Pt(e,r),n===1&&fe===0&&!(t.mode&1)&&(Ko=He()+500,jl&&$r()))}function Pt(e,t){var n=e.callbackNode;OC(e,t);var r=Hs(e,e===nt?st:0);if(r===0)n!==null&&ph(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ph(n),t===1)e.tag===0?ES(iv.bind(null,e)):g0(iv.bind(null,e)),wS(function(){!(fe&6)&&$r()}),n=null;else{switch(Gy(r)){case 1:n=xp;break;case 4:n=Hy;break;case 16:n=Vs;break;case 536870912:n=Uy;break;default:n=Vs}n=hb(n,lb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lb(e,t){if(Es=-1,Os=0,fe&6)throw Error(D(327));var n=e.callbackNode;if(No()&&e.callbackNode!==n)return null;var r=Hs(e,e===nt?st:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var o=fe;fe|=2;var i=cb();(nt!==e||st!==t)&&(Dn=null,Ko=He()+500,Vr(e,t));do try{WS();break}catch(s){ub(e,s)}while(!0);jp(),ol.current=i,fe=o,Ge!==null?t=0:(nt=null,st=0,t=Qe)}if(t!==0){if(t===2&&(o=Ed(e),o!==0&&(r=o,t=Yd(e,o))),t===1)throw n=ua,Vr(e,0),or(e,r),Pt(e,He()),n;if(t===6)or(e,r);else{if(o=e.current.alternate,!(r&30)&&!HS(o)&&(t=sl(e,r),t===2&&(i=Ed(e),i!==0&&(r=i,t=Yd(e,i))),t===1))throw n=ua,Vr(e,0),or(e,r),Pt(e,He()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:jr(e,Et,Dn);break;case 3:if(or(e,r),(r&130023424)===r&&(t=Qp+500-He(),10<t)){if(Hs(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Fd(jr.bind(null,e,Et,Dn),t);break}jr(e,Et,Dn);break;case 4:if(or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-yn(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*VS(r/1960))-r,10<r){e.timeoutHandle=Fd(jr.bind(null,e,Et,Dn),r);break}jr(e,Et,Dn);break;case 5:jr(e,Et,Dn);break;default:throw Error(D(329))}}}return Pt(e,He()),e.callbackNode===n?lb.bind(null,e):null}function Yd(e,t){var n=Vi;return e.current.memoizedState.isDehydrated&&(Vr(e,t).flags|=256),e=sl(e,t),e!==2&&(t=Et,Et=n,t!==null&&Zd(t)),e}function Zd(e){Et===null?Et=e:Et.push.apply(Et,e)}function HS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Cn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~Kp,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yn(t),r=1<<n;e[n]=-1,t&=~r}}function iv(e){if(fe&6)throw Error(D(327));No();var t=Hs(e,0);if(!(t&1))return Pt(e,He()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=Ed(e);r!==0&&(t=r,n=Yd(e,r))}if(n===1)throw n=ua,Vr(e,0),or(e,t),Pt(e,He()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jr(e,Et,Dn),Pt(e,He()),null}function Xp(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(Ko=He()+500,jl&&$r())}}function Yr(e){sr!==null&&sr.tag===0&&!(fe&6)&&No();var t=fe;fe|=1;var n=nn.transition,r=ve;try{if(nn.transition=null,ve=1,e)return e()}finally{ve=r,nn.transition=n,fe=t,!(fe&6)&&$r()}}function Jp(){Lt=To.current,$e(To)}function Vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bS(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Ip(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ks();break;case 3:Go(),$e(Tt),$e(yt),Dp();break;case 5:Lp(r);break;case 4:Go();break;case 13:$e(Ne);break;case 19:$e(Ne);break;case 10:Np(r.type._context);break;case 22:case 23:Jp()}n=n.return}if(nt=e,Ge=e=br(e.current,null),st=Lt=t,Qe=0,ua=null,Kp=zl=Jr=0,Et=Vi=null,zr!==null){for(t=0;t<zr.length;t++)if(n=zr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}zr=null}return e}function ub(e,t){do{var n=Ge;try{if(jp(),xs.current=rl,nl){for(var r=Me.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}nl=!1}if(Xr=0,tt=Ke=Me=null,Di=!1,aa=0,qp.current=null,n===null||n.return===null){Qe=1,ua=t,Ge=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=st,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=Gh(a);if(w!==null){w.flags&=-257,qh(w,a,s,i,t),w.mode&1&&Wh(i,u,t),t=w,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break e}else{if(!(t&1)){Wh(i,u,t),Yp();break e}l=Error(D(426))}}else if(je&&s.mode&1){var b=Gh(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),qh(b,a,s,i,t),Fp(qo(l,s));break e}}i=l=qo(l,s),Qe!==4&&(Qe=2),Vi===null?Vi=[i]:Vi.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=G0(i,l,t);Lh(i,m);break e;case 1:s=l;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(gr===null||!gr.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=q0(i,s,t);Lh(i,C);break e}}i=i.return}while(i!==null)}fb(n)}catch(x){t=x,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function cb(){var e=ol.current;return ol.current=rl,e===null?rl:e}function Yp(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),nt===null||!(Jr&268435455)&&!(zl&268435455)||or(nt,st)}function sl(e,t){var n=fe;fe|=2;var r=cb();(nt!==e||st!==t)&&(Dn=null,Vr(e,t));do try{US();break}catch(o){ub(e,o)}while(!0);if(jp(),fe=n,ol.current=r,Ge!==null)throw Error(D(261));return nt=null,st=0,Qe}function US(){for(;Ge!==null;)db(Ge)}function WS(){for(;Ge!==null&&!vC();)db(Ge)}function db(e){var t=mb(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?fb(e):Ge=t,qp.current=null}function fb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zS(n,t),n!==null){n.flags&=32767,Ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,Ge=null;return}}else if(n=MS(n,t,Lt),n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Qe===0&&(Qe=5)}function jr(e,t,n){var r=ve,o=nn.transition;try{nn.transition=null,ve=1,GS(e,t,n,r)}finally{nn.transition=o,ve=r}return null}function GS(e,t,n,r){do No();while(sr!==null);if(fe&6)throw Error(D(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(TC(e,i),e===nt&&(Ge=nt=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||is||(is=!0,hb(Vs,function(){return No(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nn.transition,nn.transition=null;var a=ve;ve=1;var s=fe;fe|=4,qp.current=null,DS(e,n),ab(n,e),fS($d),Us=!!Ad,$d=Ad=null,e.current=n,BS(n),gC(),fe=s,ve=a,nn.transition=i}else e.current=n;if(is&&(is=!1,sr=e,al=o),i=e.pendingLanes,i===0&&(gr=null),wC(n.stateNode),Pt(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(il)throw il=!1,e=Xd,Xd=null,e;return al&1&&e.tag!==0&&No(),i=e.pendingLanes,i&1?e===Jd?Hi++:(Hi=0,Jd=e):Hi=0,$r(),null}function No(){if(sr!==null){var e=Gy(al),t=nn.transition,n=ve;try{if(nn.transition=null,ve=16>e?16:e,sr===null)var r=!1;else{if(e=sr,sr=null,al=0,fe&6)throw Error(D(331));var o=fe;for(fe|=4,X=e.current;X!==null;){var i=X,a=i.child;if(X.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(X=u;X!==null;){var c=X;switch(c.tag){case 0:case 11:case 15:Bi(8,c,i)}var d=c.child;if(d!==null)d.return=c,X=d;else for(;X!==null;){c=X;var f=c.sibling,w=c.return;if(rb(c),c===u){X=null;break}if(f!==null){f.return=w,X=f;break}X=w}}}var h=i.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}X=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,X=a;else e:for(;X!==null;){if(i=X,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bi(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,X=m;break e}X=i.return}}var p=e.current;for(X=p;X!==null;){a=X;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,X=y;else e:for(a=p;X!==null;){if(s=X,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ml(9,s)}}catch(x){De(s,s.return,x)}if(s===a){X=null;break e}var C=s.sibling;if(C!==null){C.return=s.return,X=C;break e}X=s.return}}if(fe=o,$r(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{ve=n,nn.transition=t}}return!1}function av(e,t,n){t=qo(n,t),t=G0(e,t,1),e=vr(e,t,1),t=xt(),e!==null&&(Oa(e,1,t),Pt(e,t))}function De(e,t,n){if(e.tag===3)av(e,e,n);else for(;t!==null;){if(t.tag===3){av(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){e=qo(n,e),e=q0(t,e,1),t=vr(t,e,1),e=xt(),t!==null&&(Oa(t,1,e),Pt(t,e));break}}t=t.return}}function qS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xt(),e.pingedLanes|=e.suspendedLanes&n,nt===e&&(st&n)===n&&(Qe===4||Qe===3&&(st&130023424)===st&&500>He()-Qp?Vr(e,0):Kp|=n),Pt(e,t)}function pb(e,t){t===0&&(e.mode&1?(t=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):t=1);var n=xt();e=qn(e,t),e!==null&&(Oa(e,t,n),Pt(e,n))}function KS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pb(e,n)}function QS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),pb(e,n)}var mb;mb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)Ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ot=!1,kS(e,t,n);Ot=!!(e.flags&131072)}else Ot=!1,je&&t.flags&1048576&&y0(t,Js,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ss(e,t),e=t.pendingProps;var o=Ho(t,yt.current);jo(t,n),o=Vp(null,t,r,e,o,n);var i=Hp();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(r)?(i=!0,Qs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Mp(t),o.updater=kl,t.stateNode=o,o._reactInternals=t,Ld(t,r,e,n),t=Vd(null,t,r,!0,i,n)):(t.tag=0,je&&i&&$p(t),wt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ss(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=JS(r),e=fn(r,e),o){case 0:t=Bd(null,t,r,e,n);break e;case 1:t=Xh(null,t,r,e,n);break e;case 11:t=Kh(null,t,r,e,n);break e;case 14:t=Qh(null,t,r,fn(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:fn(r,o),Bd(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:fn(r,o),Xh(e,t,r,o,n);case 3:e:{if(J0(t),e===null)throw Error(D(387));r=t.pendingProps,i=t.memoizedState,o=i.element,E0(e,t),el(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=qo(Error(D(423)),t),t=Jh(e,t,r,n,o);break e}else if(r!==o){o=qo(Error(D(424)),t),t=Jh(e,t,r,n,o);break e}else for(Dt=hr(t.stateNode.containerInfo.firstChild),Vt=t,je=!0,vn=null,n=C0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Uo(),r===o){t=Kn(e,t,n);break e}wt(e,t,r,n)}t=t.child}return t;case 5:return O0(t),e===null&&kd(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Id(r,o)?a=null:i!==null&&Id(r,i)&&(t.flags|=32),X0(e,t),wt(e,t,a,n),t.child;case 6:return e===null&&kd(t),null;case 13:return Y0(e,t,n);case 4:return zp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wo(t,null,r,n):wt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:fn(r,o),Kh(e,t,r,o,n);case 7:return wt(e,t,t.pendingProps,n),t.child;case 8:return wt(e,t,t.pendingProps.children,n),t.child;case 12:return wt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Oe(Ys,r._currentValue),r._currentValue=a,i!==null)if(Cn(i.value,a)){if(i.children===o.children&&!Tt.current){t=Kn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Un(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Md(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(D(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Md(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}wt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,jo(t,n),o=rn(o),r=r(o),t.flags|=1,wt(e,t,r,n),t.child;case 14:return r=t.type,o=fn(r,t.pendingProps),o=fn(r.type,o),Qh(e,t,r,o,n);case 15:return K0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:fn(r,o),Ss(e,t),t.tag=1,Rt(r)?(e=!0,Qs(t)):e=!1,jo(t,n),W0(t,r,o),Ld(t,r,o,n),Vd(null,t,r,!0,e,n);case 19:return Z0(e,t,n);case 22:return Q0(e,t,n)}throw Error(D(156,t.tag))};function hb(e,t){return Vy(e,t)}function XS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,t,n,r){return new XS(e,t,n,r)}function Zp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function JS(e){if(typeof e=="function")return Zp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yp)return 11;if(e===bp)return 14}return 2}function br(e,t){var n=e.alternate;return n===null?(n=tn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ts(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Zp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vo:return Hr(n.children,o,i,t);case gp:a=8,o|=8;break;case ud:return e=tn(12,n,t,o|2),e.elementType=ud,e.lanes=i,e;case cd:return e=tn(13,n,t,o),e.elementType=cd,e.lanes=i,e;case dd:return e=tn(19,n,t,o),e.elementType=dd,e.lanes=i,e;case Oy:return Ll(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sy:a=10;break e;case Ey:a=9;break e;case yp:a=11;break e;case bp:a=14;break e;case tr:a=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=tn(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Hr(e,t,n,r){return e=tn(7,e,r,t),e.lanes=n,e}function Ll(e,t,n,r){return e=tn(22,e,r,t),e.elementType=Oy,e.lanes=n,e.stateNode={isHidden:!1},e}function wc(e,t,n){return e=tn(6,e,null,t),e.lanes=n,e}function xc(e,t,n){return t=tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function YS(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tc(0),this.expirationTimes=tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function em(e,t,n,r,o,i,a,s,l){return e=new YS(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tn(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mp(i),e}function ZS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ho,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vb(e){if(!e)return Sr;e=e._reactInternals;e:{if(oo(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(Rt(n))return v0(e,n,t)}return t}function gb(e,t,n,r,o,i,a,s,l){return e=em(n,r,!0,e,o,i,a,s,l),e.context=vb(null),n=e.current,r=xt(),o=yr(n),i=Un(r,o),i.callback=t??null,vr(n,i,o),e.current.lanes=o,Oa(e,o,r),Pt(e,r),e}function Dl(e,t,n,r){var o=t.current,i=xt(),a=yr(o);return n=vb(n),t.context===null?t.context=n:t.pendingContext=n,t=Un(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vr(o,t,a),e!==null&&(bn(e,o,a,i),ws(e,o,a)),a}function ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tm(e,t){sv(e,t),(e=e.alternate)&&sv(e,t)}function eE(){return null}var yb=typeof reportError=="function"?reportError:function(e){console.error(e)};function nm(e){this._internalRoot=e}Bl.prototype.render=nm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Dl(e,t,null,null)};Bl.prototype.unmount=nm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yr(function(){Dl(null,e,null,null)}),t[Gn]=null}};function Bl(e){this._internalRoot=e}Bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rr.length&&t!==0&&t<rr[n].priority;n++);rr.splice(n,0,e),n===0&&Jy(e)}};function rm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lv(){}function tE(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ll(a);i.call(u)}}var a=gb(t,r,e,0,null,!1,!1,"",lv);return e._reactRootContainer=a,e[Gn]=a.current,ta(e.nodeType===8?e.parentNode:e),Yr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=ll(l);s.call(u)}}var l=em(e,0,!1,null,null,!1,!1,"",lv);return e._reactRootContainer=l,e[Gn]=l.current,ta(e.nodeType===8?e.parentNode:e),Yr(function(){Dl(t,l,n,r)}),l}function Hl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=ll(a);s.call(l)}}Dl(t,a,e,o)}else a=tE(n,t,e,o,r);return ll(a)}qy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$i(t.pendingLanes);n!==0&&(Cp(t,n|1),Pt(t,He()),!(fe&6)&&(Ko=He()+500,$r()))}break;case 13:Yr(function(){var r=qn(e,1);if(r!==null){var o=xt();bn(r,e,1,o)}}),tm(e,1)}};Sp=function(e){if(e.tag===13){var t=qn(e,134217728);if(t!==null){var n=xt();bn(t,e,134217728,n)}tm(e,134217728)}};Ky=function(e){if(e.tag===13){var t=yr(e),n=qn(e,t);if(n!==null){var r=xt();bn(n,e,t,r)}tm(e,t)}};Qy=function(){return ve};Xy=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}};xd=function(e,t,n){switch(t){case"input":if(md(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=_l(r);if(!o)throw Error(D(90));Ry(r),md(r,o)}}}break;case"textarea":Ay(e,n);break;case"select":t=n.value,t!=null&&$o(e,!!n.multiple,t,!1)}};ky=Xp;My=Yr;var nE={usingClientEntryPoint:!1,Events:[Ra,wo,_l,jy,Ny,Xp]},Ei={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rE={bundleType:Ei.bundleType,version:Ei.version,rendererPackageName:Ei.rendererPackageName,rendererConfig:Ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dy(e),e===null?null:e.stateNode},findFiberByHostInstance:Ei.findFiberByHostInstance||eE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{Al=as.inject(rE),jn=as}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nE;Gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(t))throw Error(D(200));return ZS(e,t,null,n)};Gt.createRoot=function(e,t){if(!rm(e))throw Error(D(299));var n=!1,r="",o=yb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=em(e,1,!1,null,null,n,!1,r,o),e[Gn]=t.current,ta(e.nodeType===8?e.parentNode:e),new nm(t)};Gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Dy(t),e=e===null?null:e.stateNode,e};Gt.flushSync=function(e){return Yr(e)};Gt.hydrate=function(e,t,n){if(!Vl(t))throw Error(D(200));return Hl(null,e,t,!0,n)};Gt.hydrateRoot=function(e,t,n){if(!rm(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=yb;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=gb(t,null,e,1,n??null,o,!1,i,a),e[Gn]=t.current,ta(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Bl(t)};Gt.render=function(e,t,n){if(!Vl(t))throw Error(D(200));return Hl(null,e,t,!1,n)};Gt.unmountComponentAtNode=function(e){if(!Vl(e))throw Error(D(40));return e._reactRootContainer?(Yr(function(){Hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Gn]=null})}),!0):!1};Gt.unstable_batchedUpdates=Xp;Gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vl(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Hl(e,t,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function bb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bb)}catch(e){console.error(e)}}bb(),by.exports=Gt;var Ul=by.exports;const ef=up(Ul),oE=sy({__proto__:null,default:ef},[Ul]);var uv=Ul;sd.createRoot=uv.createRoot,sd.hydrateRoot=uv.hydrateRoot;var wb={exports:{}},xb={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=v;function iE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var aE=typeof Object.is=="function"?Object.is:iE,sE=Qo.useState,lE=Qo.useEffect,uE=Qo.useLayoutEffect,cE=Qo.useDebugValue;function dE(e,t){var n=t(),r=sE({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return uE(function(){o.value=n,o.getSnapshot=t,Cc(o)&&i({inst:o})},[e,n,t]),lE(function(){return Cc(o)&&i({inst:o}),e(function(){Cc(o)&&i({inst:o})})},[e]),cE(n),n}function Cc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!aE(e,n)}catch{return!0}}function fE(e,t){return t()}var pE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?fE:dE;xb.useSyncExternalStore=Qo.useSyncExternalStore!==void 0?Qo.useSyncExternalStore:pE;wb.exports=xb;var mE=wb.exports,Cb={exports:{}},Sb={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wl=v,hE=mE;function vE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gE=typeof Object.is=="function"?Object.is:vE,yE=hE.useSyncExternalStore,bE=Wl.useRef,wE=Wl.useEffect,xE=Wl.useMemo,CE=Wl.useDebugValue;Sb.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=bE(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=xE(function(){function l(w){if(!u){if(u=!0,c=w,w=r(w),o!==void 0&&a.hasValue){var h=a.value;if(o(h,w))return d=h}return d=w}if(h=d,gE(c,w))return h;var g=r(w);return o!==void 0&&o(h,g)?(c=w,h):(c=w,d=g)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,o]);var s=yE(e,i[0],i[1]);return wE(function(){a.hasValue=!0,a.value=s},[s]),CE(s),s};Cb.exports=Sb;var SE=Cb.exports;function EE(e){e()}let Eb=EE;const OE=e=>Eb=e,TE=()=>Eb,cv=Symbol.for("react-redux-context"),dv=typeof globalThis<"u"?globalThis:{};function RE(){var e;if(!v.createContext)return{};const t=(e=dv[cv])!=null?e:dv[cv]=new Map;let n=t.get(v.createContext);return n||(n=v.createContext(null),t.set(v.createContext,n)),n}const Er=RE();function om(e=Er){return function(){return v.useContext(e)}}const Ob=om(),PE=()=>{throw new Error("uSES not initialized!")};let Tb=PE;const AE=e=>{Tb=e},$E=(e,t)=>e===t;function IE(e=Er){const t=e===Er?Ob:om(e);return function(r,o={}){const{equalityFn:i=$E,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:l,subscription:u,getServerState:c,stabilityCheck:d,noopCheck:f}=t();v.useRef(!0);const w=v.useCallback({[r.name](g){return r(g)}}[r.name],[r,d,a]),h=Tb(u.addNestedSub,l.getState,c||l.getState,w,i);return v.useDebugValue(h),h}}const Zr=IE();function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Je.apply(null,arguments)}function FE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Rb={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=typeof Symbol=="function"&&Symbol.for,im=rt?Symbol.for("react.element"):60103,am=rt?Symbol.for("react.portal"):60106,Gl=rt?Symbol.for("react.fragment"):60107,ql=rt?Symbol.for("react.strict_mode"):60108,Kl=rt?Symbol.for("react.profiler"):60114,Ql=rt?Symbol.for("react.provider"):60109,Xl=rt?Symbol.for("react.context"):60110,sm=rt?Symbol.for("react.async_mode"):60111,Jl=rt?Symbol.for("react.concurrent_mode"):60111,Yl=rt?Symbol.for("react.forward_ref"):60112,Zl=rt?Symbol.for("react.suspense"):60113,_E=rt?Symbol.for("react.suspense_list"):60120,eu=rt?Symbol.for("react.memo"):60115,tu=rt?Symbol.for("react.lazy"):60116,jE=rt?Symbol.for("react.block"):60121,NE=rt?Symbol.for("react.fundamental"):60117,kE=rt?Symbol.for("react.responder"):60118,ME=rt?Symbol.for("react.scope"):60119;function Kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case im:switch(e=e.type,e){case sm:case Jl:case Gl:case Kl:case ql:case Zl:return e;default:switch(e=e&&e.$$typeof,e){case Xl:case Yl:case tu:case eu:case Ql:return e;default:return t}}case am:return t}}}function Pb(e){return Kt(e)===Jl}ge.AsyncMode=sm;ge.ConcurrentMode=Jl;ge.ContextConsumer=Xl;ge.ContextProvider=Ql;ge.Element=im;ge.ForwardRef=Yl;ge.Fragment=Gl;ge.Lazy=tu;ge.Memo=eu;ge.Portal=am;ge.Profiler=Kl;ge.StrictMode=ql;ge.Suspense=Zl;ge.isAsyncMode=function(e){return Pb(e)||Kt(e)===sm};ge.isConcurrentMode=Pb;ge.isContextConsumer=function(e){return Kt(e)===Xl};ge.isContextProvider=function(e){return Kt(e)===Ql};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===im};ge.isForwardRef=function(e){return Kt(e)===Yl};ge.isFragment=function(e){return Kt(e)===Gl};ge.isLazy=function(e){return Kt(e)===tu};ge.isMemo=function(e){return Kt(e)===eu};ge.isPortal=function(e){return Kt(e)===am};ge.isProfiler=function(e){return Kt(e)===Kl};ge.isStrictMode=function(e){return Kt(e)===ql};ge.isSuspense=function(e){return Kt(e)===Zl};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Gl||e===Jl||e===Kl||e===ql||e===Zl||e===_E||typeof e=="object"&&e!==null&&(e.$$typeof===tu||e.$$typeof===eu||e.$$typeof===Ql||e.$$typeof===Xl||e.$$typeof===Yl||e.$$typeof===NE||e.$$typeof===kE||e.$$typeof===ME||e.$$typeof===jE)};ge.typeOf=Kt;Rb.exports=ge;var zE=Rb.exports,Ab=zE,LE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},DE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$b={};$b[Ab.ForwardRef]=LE;$b[Ab.Memo]=DE;var xe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=Symbol.for("react.element"),um=Symbol.for("react.portal"),nu=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),ou=Symbol.for("react.profiler"),iu=Symbol.for("react.provider"),au=Symbol.for("react.context"),BE=Symbol.for("react.server_context"),su=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),uu=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),du=Symbol.for("react.lazy"),VE=Symbol.for("react.offscreen"),Ib;Ib=Symbol.for("react.module.reference");function sn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case lm:switch(e=e.type,e){case nu:case ou:case ru:case lu:case uu:return e;default:switch(e=e&&e.$$typeof,e){case BE:case au:case su:case du:case cu:case iu:return e;default:return t}}case um:return t}}}xe.ContextConsumer=au;xe.ContextProvider=iu;xe.Element=lm;xe.ForwardRef=su;xe.Fragment=nu;xe.Lazy=du;xe.Memo=cu;xe.Portal=um;xe.Profiler=ou;xe.StrictMode=ru;xe.Suspense=lu;xe.SuspenseList=uu;xe.isAsyncMode=function(){return!1};xe.isConcurrentMode=function(){return!1};xe.isContextConsumer=function(e){return sn(e)===au};xe.isContextProvider=function(e){return sn(e)===iu};xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===lm};xe.isForwardRef=function(e){return sn(e)===su};xe.isFragment=function(e){return sn(e)===nu};xe.isLazy=function(e){return sn(e)===du};xe.isMemo=function(e){return sn(e)===cu};xe.isPortal=function(e){return sn(e)===um};xe.isProfiler=function(e){return sn(e)===ou};xe.isStrictMode=function(e){return sn(e)===ru};xe.isSuspense=function(e){return sn(e)===lu};xe.isSuspenseList=function(e){return sn(e)===uu};xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nu||e===ou||e===ru||e===lu||e===uu||e===VE||typeof e=="object"&&e!==null&&(e.$$typeof===du||e.$$typeof===cu||e.$$typeof===iu||e.$$typeof===au||e.$$typeof===su||e.$$typeof===Ib||e.getModuleId!==void 0)};xe.typeOf=sn;function HE(){const e=TE();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const fv={notify(){},get:()=>[]};function UE(e,t){let n,r=fv,o=0,i=!1;function a(g){c();const b=r.subscribe(g);let m=!1;return()=>{m||(m=!0,b(),d())}}function s(){r.notify()}function l(){h.onStateChange&&h.onStateChange()}function u(){return i}function c(){o++,n||(n=e.subscribe(l),r=HE())}function d(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=fv)}function f(){i||(i=!0,c())}function w(){i&&(i=!1,d())}const h={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:w,getListeners:()=>r};return h}const WE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GE=WE?v.useLayoutEffect:v.useEffect;function qE({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const a=v.useMemo(()=>{const u=UE(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),s=v.useMemo(()=>e.getState(),[e]);GE(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,s]);const l=t||Er;return v.createElement(l.Provider,{value:a},n)}function Fb(e=Er){const t=e===Er?Ob:om(e);return function(){const{store:r}=t();return r}}const KE=Fb();function QE(e=Er){const t=e===Er?KE:Fb(e);return function(){return t().dispatch}}const Aa=QE();AE(SE.useSyncExternalStoreWithSelector);OE(Ul.unstable_batchedUpdates);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ca.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const pv="popstate";function XE(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return tf("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:jb(o)}return YE(t,n,null,e)}function Xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _b(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function JE(){return Math.random().toString(36).substr(2,8)}function mv(e,t){return{usr:e.state,key:e.key,idx:t}}function tf(e,t,n,r){return n===void 0&&(n=null),ca({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ai(t):t,{state:n,key:t&&t.key||r||JE()})}function jb(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ai(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function YE(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=lr.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(ca({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){s=lr.Pop;let b=c(),m=b==null?null:b-u;u=b,l&&l({action:s,location:g.location,delta:m})}function f(b,m){s=lr.Push;let p=tf(g.location,b,m);u=c()+1;let y=mv(p,u),C=g.createHref(p);try{a.pushState(y,"",C)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;o.location.assign(C)}i&&l&&l({action:s,location:g.location,delta:1})}function w(b,m){s=lr.Replace;let p=tf(g.location,b,m);u=c();let y=mv(p,u),C=g.createHref(p);a.replaceState(y,"",C),i&&l&&l({action:s,location:g.location,delta:0})}function h(b){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof b=="string"?b:jb(b);return p=p.replace(/ $/,"%20"),Xe(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let g={get action(){return s},get location(){return e(o,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(pv,d),l=b,()=>{o.removeEventListener(pv,d),l=null}},createHref(b){return t(o,b)},createURL:h,encodeLocation(b){let m=h(b);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:w,go(b){return a.go(b)}};return g}var hv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hv||(hv={}));function ZE(e,t,n){return n===void 0&&(n="/"),eO(e,t,n)}function eO(e,t,n,r){let o=typeof t=="string"?ai(t):t,i=Mb(o.pathname||"/",n);if(i==null)return null;let a=Nb(e);tO(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=pO(i);s=cO(a[l],u)}return s}function Nb(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(Xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ur([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(Xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nb(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:lO(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of kb(i.path))o(i,a,l)}),t}function kb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=kb(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function tO(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uO(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nO=/^:[\w-]+$/,rO=3,oO=2,iO=1,aO=10,sO=-2,vv=e=>e==="*";function lO(e,t){let n=e.split("/"),r=n.length;return n.some(vv)&&(r+=sO),t&&(r+=oO),n.filter(o=>!vv(o)).reduce((o,i)=>o+(nO.test(i)?rO:i===""?iO:aO),r)}function uO(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function cO(e,t,n){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=dO({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:Ur([i,d.pathname]),pathnameBase:bO(Ur([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Ur([i,d.pathnameBase]))}return a}function dO(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fO(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:w}=c;if(f==="*"){let g=s[d]||"";a=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const h=s[d];return w&&!h?u[f]=void 0:u[f]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function fO(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_b(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function pO(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _b(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Mb(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mO(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ai(e):e;return{pathname:n?n.startsWith("/")?n:hO(n,t):t,search:wO(r),hash:xO(o)}}function hO(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Sc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vO(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gO(e,t){let n=vO(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function yO(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ai(e):(o=ca({},e),Xe(!o.pathname||!o.pathname.includes("?"),Sc("?","pathname","search",o)),Xe(!o.pathname||!o.pathname.includes("#"),Sc("#","pathname","hash",o)),Xe(!o.search||!o.search.includes("#"),Sc("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}s=d>=0?t[d]:"/"}let l=mO(o,s),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ur=e=>e.join("/").replace(/\/\/+/g,"/"),bO=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wO=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xO=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function CO(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zb=["post","put","patch","delete"];new Set(zb);const SO=["get",...zb];new Set(SO);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},da.apply(this,arguments)}const cm=v.createContext(null),EO=v.createContext(null),fu=v.createContext(null),pu=v.createContext(null),si=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Lb=v.createContext(null);function mu(){return v.useContext(pu)!=null}function Db(){return mu()||Xe(!1),v.useContext(pu).location}function Bb(e){v.useContext(fu).static||v.useLayoutEffect(e)}function dm(){let{isDataRoute:e}=v.useContext(si);return e?MO():OO()}function OO(){mu()||Xe(!1);let e=v.useContext(cm),{basename:t,future:n,navigator:r}=v.useContext(fu),{matches:o}=v.useContext(si),{pathname:i}=Db(),a=JSON.stringify(gO(o,n.v7_relativeSplatPath)),s=v.useRef(!1);return Bb(()=>{s.current=!0}),v.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=yO(u,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Ur([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,a,i,e])}function TO(e,t){return RO(e,t)}function RO(e,t,n,r){mu()||Xe(!1);let{navigator:o}=v.useContext(fu),{matches:i}=v.useContext(si),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Db(),c;if(t){var d;let b=typeof t=="string"?ai(t):t;l==="/"||(d=b.pathname)!=null&&d.startsWith(l)||Xe(!1),c=b}else c=u;let f=c.pathname||"/",w=f;if(l!=="/"){let b=l.replace(/^\//,"").split("/");w="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let h=ZE(e,{pathname:w}),g=FO(h&&h.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:Ur([l,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Ur([l,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&g?v.createElement(pu.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:lr.Pop}},g):g}function PO(){let e=kO(),t=CO(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const AO=v.createElement(PO,null);class $O extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(si.Provider,{value:this.props.routeContext},v.createElement(Lb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IO(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(cm);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(si.Provider,{value:t},r)}function FO(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let c=a.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);c>=0||Xe(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:w}=n,h=d.route.loader&&f[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||h){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,f)=>{let w,h=!1,g=null,b=null;n&&(w=s&&d.route.id?s[d.route.id]:void 0,g=d.route.errorElement||AO,l&&(u<0&&f===0?(zO("route-fallback"),h=!0,b=null):u===f&&(h=!0,b=d.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,f+1)),p=()=>{let y;return w?y=g:h?y=b:d.route.Component?y=v.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,v.createElement(IO,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?v.createElement($O,{location:n.location,revalidation:n.revalidation,component:g,error:w,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Vb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vb||{}),Hb=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hb||{});function _O(e){let t=v.useContext(cm);return t||Xe(!1),t}function jO(e){let t=v.useContext(EO);return t||Xe(!1),t}function NO(e){let t=v.useContext(si);return t||Xe(!1),t}function Ub(e){let t=NO(),n=t.matches[t.matches.length-1];return n.route.id||Xe(!1),n.route.id}function kO(){var e;let t=v.useContext(Lb),n=jO(),r=Ub();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function MO(){let{router:e}=_O(Vb.UseNavigateStable),t=Ub(Hb.UseNavigateStable),n=v.useRef(!1);return Bb(()=>{n.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,da({fromRouteId:t},i)))},[e,t])}const gv={};function zO(e,t,n){gv[e]||(gv[e]=!0)}function LO(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Rs(e){Xe(!1)}function DO(e){let{basename:t="/",children:n=null,location:r,navigationType:o=lr.Pop,navigator:i,static:a=!1,future:s}=e;mu()&&Xe(!1);let l=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:l,navigator:i,static:a,future:da({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=ai(r));let{pathname:c="/",search:d="",hash:f="",state:w=null,key:h="default"}=r,g=v.useMemo(()=>{let b=Mb(c,l);return b==null?null:{location:{pathname:b,search:d,hash:f,state:w,key:h},navigationType:o}},[l,c,d,f,w,h,o]);return g==null?null:v.createElement(fu.Provider,{value:u},v.createElement(pu.Provider,{children:n,value:g}))}function BO(e){let{children:t,location:n}=e;return TO(nf(t),n)}new Promise(()=>{});function nf(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let i=[...t,o];if(r.type===v.Fragment){n.push.apply(n,nf(r.props.children,i));return}r.type!==Rs&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=nf(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const VO="6";try{window.__reactRouterVersion=VO}catch{}const HO="startTransition",yv=Pl[HO];function UO(e){let{basename:t,children:n,future:r,window:o}=e,i=v.useRef();i.current==null&&(i.current=XE({window:o,v5Compat:!0}));let a=i.current,[s,l]=v.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=v.useCallback(d=>{u&&yv?yv(()=>l(d)):l(d)},[l,u]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.useEffect(()=>LO(r),[r]),v.createElement(DO,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}var bv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bv||(bv={}));var wv;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wv||(wv={}));function gn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Or(e){return!!e&&!!e[_e]}function Qn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===ZO}(e)||Array.isArray(e)||!!e[Rv]||!!(!((t=e.constructor)===null||t===void 0)&&t[Rv])||fm(e)||pm(e))}function eo(e,t,n){n===void 0&&(n=!1),li(e)===0?(n?Object.keys:Mo)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function li(e){var t=e[_e];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:fm(e)?2:pm(e)?3:0}function ko(e,t){return li(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function WO(e,t){return li(e)===2?e.get(t):e[t]}function Wb(e,t,n){var r=li(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Gb(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function fm(e){return JO&&e instanceof Map}function pm(e){return YO&&e instanceof Set}function Nr(e){return e.o||e.t}function mm(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Kb(e);delete t[_e];for(var n=Mo(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function hm(e,t){return t===void 0&&(t=!1),vm(e)||Or(e)||!Qn(e)||(li(e)>1&&(e.set=e.add=e.clear=e.delete=GO),Object.freeze(e),t&&eo(e,function(n,r){return hm(r,!0)},!0)),e}function GO(){gn(2)}function vm(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function kn(e){var t=sf[e];return t||gn(18,e),t}function qO(e,t){sf[e]||(sf[e]=t)}function rf(){return fa}function Ec(e,t){t&&(kn("Patches"),e.u=[],e.s=[],e.v=t)}function ul(e){of(e),e.p.forEach(KO),e.p=null}function of(e){e===fa&&(fa=e.l)}function xv(e){return fa={p:[],l:fa,h:e,m:!0,_:0}}function KO(e){var t=e[_e];t.i===0||t.i===1?t.j():t.g=!0}function Oc(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||kn("ES5").S(t,e,r),r?(n[_e].P&&(ul(t),gn(4)),Qn(e)&&(e=cl(t,e),t.l||dl(t,e)),t.u&&kn("Patches").M(n[_e].t,e,t.u,t.s)):e=cl(t,n,[]),ul(t),t.u&&t.v(t.u,t.s),e!==qb?e:void 0}function cl(e,t,n){if(vm(t))return t;var r=t[_e];if(!r)return eo(t,function(s,l){return Cv(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return dl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=mm(r.k):r.o,i=o,a=!1;r.i===3&&(i=new Set(o),o.clear(),a=!0),eo(i,function(s,l){return Cv(e,r,o,s,l,n,a)}),dl(e,o,!1),n&&e.u&&kn("Patches").N(r,n,e.u,e.s)}return r.o}function Cv(e,t,n,r,o,i,a){if(Or(o)){var s=cl(e,o,i&&t&&t.i!==3&&!ko(t.R,r)?i.concat(r):void 0);if(Wb(n,r,s),!Or(s))return;e.m=!1}else a&&n.add(o);if(Qn(o)&&!vm(o)){if(!e.h.D&&e._<1)return;cl(e,o),t&&t.A.l||dl(e,o)}}function dl(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&hm(t,n)}function Tc(e,t){var n=e[_e];return(n?Nr(n):e)[t]}function Sv(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function ir(e){e.P||(e.P=!0,e.l&&ir(e.l))}function Rc(e){e.o||(e.o=mm(e.t))}function af(e,t,n){var r=fm(t)?kn("MapSet").F(t,n):pm(t)?kn("MapSet").T(t,n):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:rf(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},l=s,u=pa;a&&(l=[s],u=Fi);var c=Proxy.revocable(l,u),d=c.revoke,f=c.proxy;return s.k=f,s.j=d,f}(t,n):kn("ES5").J(t,n);return(n?n.A:rf()).p.push(r),r}function QO(e){return Or(e)||gn(22,e),function t(n){if(!Qn(n))return n;var r,o=n[_e],i=li(n);if(o){if(!o.P&&(o.i<4||!kn("ES5").K(o)))return o.t;o.I=!0,r=Ev(n,i),o.I=!1}else r=Ev(n,i);return eo(r,function(a,s){o&&WO(o.t,a)===s||Wb(r,a,t(s))}),i===3?new Set(r):r}(e)}function Ev(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return mm(e)}function XO(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var l=this[_e];return pa.get(l,i)},set:function(l){var u=this[_e];pa.set(u,i,l)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][_e];if(!s.P)switch(s.i){case 5:r(s)&&ir(s);break;case 4:n(s)&&ir(s)}}}function n(i){for(var a=i.t,s=i.k,l=Mo(s),u=l.length-1;u>=0;u--){var c=l[u];if(c!==_e){var d=a[c];if(d===void 0&&!ko(a,c))return!0;var f=s[c],w=f&&f[_e];if(w?w.t!==d:!Gb(f,d))return!0}}var h=!!a[_e];return l.length!==Mo(a).length+(h?0:1)}function r(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var o={};qO("ES5",{J:function(i,a){var s=Array.isArray(i),l=function(c,d){if(c){for(var f=Array(d.length),w=0;w<d.length;w++)Object.defineProperty(f,""+w,e(w,!0));return f}var h=Kb(d);delete h[_e];for(var g=Mo(h),b=0;b<g.length;b++){var m=g[b];h[m]=e(m,c||!!h[m].enumerable)}return Object.create(Object.getPrototypeOf(d),h)}(s,i),u={i:s?5:4,A:a?a.A:rf(),P:!1,I:!1,R:{},l:a,t:i,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,_e,{value:u,writable:!0}),l},S:function(i,a,s){s?Or(a)&&a[_e].A===i&&t(i.p):(i.u&&function l(u){if(u&&typeof u=="object"){var c=u[_e];if(c){var d=c.t,f=c.k,w=c.R,h=c.i;if(h===4)eo(f,function(y){y!==_e&&(d[y]!==void 0||ko(d,y)?w[y]||l(f[y]):(w[y]=!0,ir(c)))}),eo(d,function(y){f[y]!==void 0||ko(f,y)||(w[y]=!1,ir(c))});else if(h===5){if(r(c)&&(ir(c),w.length=!0),f.length<d.length)for(var g=f.length;g<d.length;g++)w[g]=!1;else for(var b=d.length;b<f.length;b++)w[b]=!0;for(var m=Math.min(f.length,d.length),p=0;p<m;p++)f.hasOwnProperty(p)||(w[p]=!0),w[p]===void 0&&l(f[p])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var Ov,fa,gm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",JO=typeof Map<"u",YO=typeof Set<"u",Tv=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",qb=gm?Symbol.for("immer-nothing"):((Ov={})["immer-nothing"]=!0,Ov),Rv=gm?Symbol.for("immer-draftable"):"__$immer_draftable",_e=gm?Symbol.for("immer-state"):"__$immer_state",ZO=""+Object.prototype.constructor,Mo=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Kb=Object.getOwnPropertyDescriptors||function(e){var t={};return Mo(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},sf={},pa={get:function(e,t){if(t===_e)return e;var n=Nr(e);if(!ko(n,t))return function(o,i,a){var s,l=Sv(i,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!Qn(r)?r:r===Tc(e.t,t)?(Rc(e),e.o[t]=af(e.A.h,r,e)):r},has:function(e,t){return t in Nr(e)},ownKeys:function(e){return Reflect.ownKeys(Nr(e))},set:function(e,t,n){var r=Sv(Nr(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=Tc(Nr(e),t),i=o==null?void 0:o[_e];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Gb(n,o)&&(n!==void 0||ko(e.t,t)))return!0;Rc(e),ir(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Tc(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Rc(e),ir(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Nr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){gn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){gn(12)}},Fi={};eo(pa,function(e,t){Fi[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Fi.deleteProperty=function(e,t){return Fi.set.call(this,e,t,void 0)},Fi.set=function(e,t,n){return pa.set.call(this,e[0],t,n,e[0])};var eT=function(){function e(n){var r=this;this.O=Tv,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var l=r;return function(g){var b=this;g===void 0&&(g=s);for(var m=arguments.length,p=Array(m>1?m-1:0),y=1;y<m;y++)p[y-1]=arguments[y];return l.produce(g,function(C){var x;return(x=i).call.apply(x,[b,C].concat(p))})}}var u;if(typeof i!="function"&&gn(6),a!==void 0&&typeof a!="function"&&gn(7),Qn(o)){var c=xv(r),d=af(r,o,void 0),f=!0;try{u=i(d),f=!1}finally{f?ul(c):of(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(g){return Ec(c,a),Oc(g,c)},function(g){throw ul(c),g}):(Ec(c,a),Oc(u,c))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===qb&&(u=void 0),r.D&&hm(u,!0),a){var w=[],h=[];kn("Patches").M(o,u,w,h),a(w,h)}return u}gn(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];return r.produceWithPatches(u,function(w){return o.apply(void 0,[w].concat(d))})};var a,s,l=r.produce(o,i,function(u,c){a=u,s=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Qn(n)||gn(8),Or(n)&&(n=QO(n));var r=xv(this),o=af(this,n,void 0);return o[_e].C=!0,of(r),o},t.finishDraft=function(n,r){var o=n&&n[_e],i=o.A;return Ec(i,r),Oc(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Tv&&gn(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var a=kn("Patches").$;return Or(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),Wt=new eT,Qb=Wt.produce;Wt.produceWithPatches.bind(Wt);Wt.setAutoFreeze.bind(Wt);Wt.setUseProxies.bind(Wt);Wt.applyPatches.bind(Wt);Wt.createDraft.bind(Wt);Wt.finishDraft.bind(Wt);function ee(e){"@babel/helpers - typeof";return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ee(e)}function tT(e,t){if(ee(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ee(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xb(e){var t=tT(e,"string");return ee(t)=="symbol"?t:t+""}function P(e,t,n){return(t=Xb(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pv(Object(n),!0).forEach(function(r){P(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Av=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Pc=function(){return Math.random().toString(36).substring(7).split("").join(".")},fl={INIT:"@@redux/INIT"+Pc(),REPLACE:"@@redux/REPLACE"+Pc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Pc()}};function nT(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Jb(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(mt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(mt(1));return n(Jb)(e,t)}if(typeof e!="function")throw new Error(mt(2));var o=e,i=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function c(){if(l)throw new Error(mt(3));return i}function d(g){if(typeof g!="function")throw new Error(mt(4));if(l)throw new Error(mt(5));var b=!0;return u(),s.push(g),function(){if(b){if(l)throw new Error(mt(6));b=!1,u();var p=s.indexOf(g);s.splice(p,1),a=null}}}function f(g){if(!nT(g))throw new Error(mt(7));if(typeof g.type>"u")throw new Error(mt(8));if(l)throw new Error(mt(9));try{l=!0,i=o(i,g)}finally{l=!1}for(var b=a=s,m=0;m<b.length;m++){var p=b[m];p()}return g}function w(g){if(typeof g!="function")throw new Error(mt(10));o=g,f({type:fl.REPLACE})}function h(){var g,b=d;return g={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(mt(11));function y(){p.next&&p.next(c())}y();var C=b(y);return{unsubscribe:C}}},g[Av]=function(){return this},g}return f({type:fl.INIT}),r={dispatch:f,subscribe:d,getState:c,replaceReducer:w},r[Av]=h,r}function rT(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:fl.INIT});if(typeof r>"u")throw new Error(mt(12));if(typeof n(void 0,{type:fl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(mt(13))})}function oT(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{rT(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var c=!1,d={},f=0;f<i.length;f++){var w=i[f],h=n[w],g=l[w],b=h(g,u);if(typeof b>"u")throw u&&u.type,new Error(mt(14));d[w]=b,c=c||b!==g}return c=c||i.length!==Object.keys(l).length,c?d:l}}function pl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function iT(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(mt(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return i=pl.apply(void 0,s)(o.dispatch),j(j({},o),{},{dispatch:i})}}}function Yb(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var lf=Yb();lf.withExtraArgument=Yb;var Zb=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),aT=function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Xo=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},sT=Object.defineProperty,lT=Object.defineProperties,uT=Object.getOwnPropertyDescriptors,$v=Object.getOwnPropertySymbols,cT=Object.prototype.hasOwnProperty,dT=Object.prototype.propertyIsEnumerable,Iv=function(e,t,n){return t in e?sT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},wr=function(e,t){for(var n in t||(t={}))cT.call(t,n)&&Iv(e,n,t[n]);if($v)for(var r=0,o=$v(t);r<o.length;r++){var n=o[r];dT.call(t,n)&&Iv(e,n,t[n])}return e},Ac=function(e,t){return lT(e,uT(t))},fT=function(e,t,n){return new Promise(function(r,o){var i=function(l){try{s(n.next(l))}catch(u){o(u)}},a=function(l){try{s(n.throw(l))}catch(u){o(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(i,a)};s((n=n.apply(e,t)).next())})},pT=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?pl:pl.apply(null,arguments)};function mT(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function xr(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return wr(wr({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var hT=function(e){Zb(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Xo([void 0],n[0].concat(this)))):new(t.bind.apply(t,Xo([void 0],n.concat(this))))},t}(Array),vT=function(e){Zb(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Xo([void 0],n[0].concat(this)))):new(t.bind.apply(t,Xo([void 0],n.concat(this))))},t}(Array);function uf(e){return Qn(e)?Qb(e,function(){}):e}function gT(e){return typeof e=="boolean"}function yT(){return function(t){return bT(t)}}function bT(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new hT;return n&&(gT(n)?r.push(lf):r.push(lf.withExtraArgument(n.extraArgument))),r}function wT(e){var t=yT(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,a=i===void 0?t():i,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,c=u===void 0?void 0:u,d=n.enhancers,f=d===void 0?void 0:d,w;if(typeof o=="function")w=o;else if(mT(o))w=oT(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;typeof h=="function"&&(h=h(t));var g=iT.apply(void 0,h),b=pl;l&&(b=pT(wr({trace:!1},typeof l=="object"&&l)));var m=new vT(g),p=m;Array.isArray(f)?p=Xo([g],f):typeof f=="function"&&(p=f(m));var y=b.apply(void 0,p);return Jb(w,c,y)}function e1(e){var t={},n=[],r,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return n.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function xT(e){return typeof e=="function"}function CT(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?e1(t):[t,n,r],i=o[0],a=o[1],s=o[2],l;if(xT(e))l=function(){return uf(e())};else{var u=uf(e);l=function(){return u}}function c(d,f){d===void 0&&(d=l());var w=Xo([i[f.type]],a.filter(function(h){var g=h.matcher;return g(f)}).map(function(h){var g=h.reducer;return g}));return w.filter(function(h){return!!h}).length===0&&(w=[s]),w.reduce(function(h,g){if(g)if(Or(h)){var b=h,m=g(b,f);return m===void 0?h:m}else{if(Qn(h))return Qb(h,function(p){return g(p,f)});var m=g(h,f);if(m===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return h},d)}return c.getInitialState=l,c}function ST(e,t){return e+"/"+t}function ym(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:uf(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},a={},s={};o.forEach(function(c){var d=r[c],f=ST(t,c),w,h;"reducer"in d?(w=d.reducer,h=d.prepare):w=d,i[c]=w,a[f]=w,s[c]=h?xr(f,h):xr(f)});function l(){var c=typeof e.extraReducers=="function"?e1(e.extraReducers):[e.extraReducers],d=c[0],f=d===void 0?{}:d,w=c[1],h=w===void 0?[]:w,g=c[2],b=g===void 0?void 0:g,m=wr(wr({},f),a);return CT(n,function(p){for(var y in m)p.addCase(y,m[y]);for(var C=0,x=h;C<x.length;C++){var E=x[C];p.addMatcher(E.matcher,E.reducer)}b&&p.addDefaultCase(b)})}var u;return{name:t,reducer:function(c,d){return u||(u=l()),u(c,d)},actions:s,caseReducers:i,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var ET="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",OT=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=ET[Math.random()*64|0];return t},TT=["name","message","stack","code"],$c=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Fv=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),RT=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=TT;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},t1=function(){function e(t,n,r){var o=xr(t+"/fulfilled",function(u,c,d,f){return{payload:u,meta:Ac(wr({},f||{}),{arg:d,requestId:c,requestStatus:"fulfilled"})}}),i=xr(t+"/pending",function(u,c,d){return{payload:void 0,meta:Ac(wr({},d||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),a=xr(t+"/rejected",function(u,c,d,f,w){return{payload:f,error:(r&&r.serializeError||RT)(u||"Rejected"),meta:Ac(wr({},w||{}),{arg:d,requestId:c,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,d,f){var w=r!=null&&r.idGenerator?r.idGenerator(u):OT(),h=new s,g;function b(p){g=p,h.abort()}var m=function(){return fT(this,null,function(){var p,y,C,x,E,S,O;return aT(this,function(R){switch(R.label){case 0:return R.trys.push([0,4,,5]),x=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,u,{getState:d,extra:f}),AT(x)?[4,x]:[3,2];case 1:x=R.sent(),R.label=2;case 2:if(x===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return E=new Promise(function(T,I){return h.signal.addEventListener("abort",function(){return I({name:"AbortError",message:g||"Aborted"})})}),c(i(w,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:w,arg:u},{getState:d,extra:f}))),[4,Promise.race([E,Promise.resolve(n(u,{dispatch:c,getState:d,extra:f,requestId:w,signal:h.signal,abort:b,rejectWithValue:function(T,I){return new $c(T,I)},fulfillWithValue:function(T,I){return new Fv(T,I)}})).then(function(T){if(T instanceof $c)throw T;return T instanceof Fv?o(T.payload,w,u,T.meta):o(T,w,u)})])];case 3:return C=R.sent(),[3,5];case 4:return S=R.sent(),C=S instanceof $c?a(null,w,u,S.payload,S.meta):a(S,w,u),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&a.match(C)&&C.meta.condition,O||c(C),[2,C]}})})}();return Object.assign(m,{abort:b,requestId:w,arg:u,unwrap:function(){return m.then(PT)}})}}return Object.assign(l,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e}();function PT(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function AT(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var bm="listenerMiddleware";xr(bm+"/add");xr(bm+"/removeAll");xr(bm+"/remove");var _v;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);XO();class Ic{static async delay(t){return new Promise(n=>setTimeout(n,t))}static async getNewsCardTemplate(){return await this.delay(500),{id:Date.now(),title:"React新闻卡片Widget",description:"这是一个基于React的新闻卡片组件，支持主题切换和响应式设计",templateType:"news-card",templatePath:"/widget-templates/template1-react.html",htmlCode:""}}static async getButtonGroupTemplate(){return await this.delay(500),{id:Date.now(),title:"交互按钮Widget",description:"这是一个包含多种样式按钮的交互组件",templateType:"button-group",htmlCode:`
        <div style="padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; text-align: center; color: white; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
          <h3 style="margin-bottom: 25px; font-size: 24px;">交互按钮组件</h3>
          <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <button style="background: white; color: #667eea; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;">主要按钮</button>
            <button style="background: transparent; color: white; border: 2px solid white; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;">次要按钮</button>
            <button style="background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;">成功按钮</button>
            <button style="background: #ef4444; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;">危险按钮</button>
          </div>
        </div>
      `}}static async getDefaultTemplate(){return await this.delay(300),{id:Date.now(),title:"AI生成的Widget卡片",description:"这是一个通过AI生成的Widget卡片",templateType:"default",htmlCode:`
       <div style="padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; text-align: center; color: white; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
          <h3 style="margin-bottom: 25px; font-size: 24px;">交互按钮组件</h3>
          <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <button style="background: white; color: #667eea; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;">主要按钮</button>
            <button style="background: transparent; color: white; border: 2px solid white; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;">次要按钮</button>
            <button style="background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;">成功按钮</button>
            <button style="background: #ef4444; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;">危险按钮</button>
          </div>
        </div>
      `}}static async getCarControlTemplate(){return await this.delay(300),await(await fetch("temp1.html")).text()}static async getTemplateByType(t){switch(t){case"news-card":return await this.getNewsCardTemplate();case"button-group":return await this.getButtonGroupTemplate();case"car-control":return await this.getCarControlTemplate();default:return await this.getDefaultTemplate()}}static async getTemplateByKeywords(t){const n=t.toLowerCase();return n.includes("按钮")||n.includes("button")?await this.getButtonGroupTemplate():n.includes("widget")||n.includes("卡片")?await this.getCarControlTemplate():null}}function n1(e,t){return function(){return e.apply(t,arguments)}}const{toString:$T}=Object.prototype,{getPrototypeOf:wm}=Object,{iterator:hu,toStringTag:r1}=Symbol,vu=(e=>t=>{const n=$T.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Sn=e=>(e=e.toLowerCase(),t=>vu(t)===e),gu=e=>t=>typeof t===e,{isArray:ui}=Array,ma=gu("undefined");function $a(e){return e!==null&&!ma(e)&&e.constructor!==null&&!ma(e.constructor)&&At(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const o1=Sn("ArrayBuffer");function IT(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&o1(e.buffer),t}const FT=gu("string"),At=gu("function"),i1=gu("number"),Ia=e=>e!==null&&typeof e=="object",_T=e=>e===!0||e===!1,Ps=e=>{if(vu(e)!=="object")return!1;const t=wm(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(r1 in e)&&!(hu in e)},jT=e=>{if(!Ia(e)||$a(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},NT=Sn("Date"),kT=Sn("File"),MT=Sn("Blob"),zT=Sn("FileList"),LT=e=>Ia(e)&&At(e.pipe),DT=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||At(e.append)&&((t=vu(e))==="formdata"||t==="object"&&At(e.toString)&&e.toString()==="[object FormData]"))},BT=Sn("URLSearchParams"),[VT,HT,UT,WT]=["ReadableStream","Request","Response","Headers"].map(Sn),GT=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fa(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),ui(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if($a(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function a1(e,t){if($a(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,s1=e=>!ma(e)&&e!==Dr;function cf(){const{caseless:e}=s1(this)&&this||{},t={},n=(r,o)=>{const i=e&&a1(t,o)||o;Ps(t[i])&&Ps(r)?t[i]=cf(t[i],r):Ps(r)?t[i]=cf({},r):ui(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Fa(arguments[r],n);return t}const qT=(e,t,n,{allOwnKeys:r}={})=>(Fa(t,(o,i)=>{n&&At(o)?e[i]=n1(o,n):e[i]=o},{allOwnKeys:r}),e),KT=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),QT=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},XT=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&wm(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},JT=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},YT=e=>{if(!e)return null;if(ui(e))return e;let t=e.length;if(!i1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ZT=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&wm(Uint8Array)),eR=(e,t)=>{const r=(e&&e[hu]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},tR=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},nR=Sn("HTMLFormElement"),rR=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),jv=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),oR=Sn("RegExp"),l1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Fa(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},iR=e=>{l1(e,(t,n)=>{if(At(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(At(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},aR=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return ui(e)?r(e):r(String(e).split(t)),n},sR=()=>{},lR=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function uR(e){return!!(e&&At(e.append)&&e[r1]==="FormData"&&e[hu])}const cR=e=>{const t=new Array(10),n=(r,o)=>{if(Ia(r)){if(t.indexOf(r)>=0)return;if($a(r))return r;if(!("toJSON"in r)){t[o]=r;const i=ui(r)?[]:{};return Fa(r,(a,s)=>{const l=n(a,o+1);!ma(l)&&(i[s]=l)}),t[o]=void 0,i}}return r};return n(e,0)},dR=Sn("AsyncFunction"),fR=e=>e&&(Ia(e)||At(e))&&At(e.then)&&At(e.catch),u1=((e,t)=>e?setImmediate:t?((n,r)=>(Dr.addEventListener("message",({source:o,data:i})=>{o===Dr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Dr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",At(Dr.postMessage)),pR=typeof queueMicrotask<"u"?queueMicrotask.bind(Dr):typeof process<"u"&&process.nextTick||u1,mR=e=>e!=null&&At(e[hu]),A={isArray:ui,isArrayBuffer:o1,isBuffer:$a,isFormData:DT,isArrayBufferView:IT,isString:FT,isNumber:i1,isBoolean:_T,isObject:Ia,isPlainObject:Ps,isEmptyObject:jT,isReadableStream:VT,isRequest:HT,isResponse:UT,isHeaders:WT,isUndefined:ma,isDate:NT,isFile:kT,isBlob:MT,isRegExp:oR,isFunction:At,isStream:LT,isURLSearchParams:BT,isTypedArray:ZT,isFileList:zT,forEach:Fa,merge:cf,extend:qT,trim:GT,stripBOM:KT,inherits:QT,toFlatObject:XT,kindOf:vu,kindOfTest:Sn,endsWith:JT,toArray:YT,forEachEntry:eR,matchAll:tR,isHTMLForm:nR,hasOwnProperty:jv,hasOwnProp:jv,reduceDescriptors:l1,freezeMethods:iR,toObjectSet:aR,toCamelCase:rR,noop:sR,toFiniteNumber:lR,findKey:a1,global:Dr,isContextDefined:s1,isSpecCompliantForm:uR,toJSONObject:cR,isAsyncFn:dR,isThenable:fR,setImmediate:u1,asap:pR,isIterable:mR};function oe(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}A.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.status}}});const c1=oe.prototype,d1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{d1[e]={value:e}});Object.defineProperties(oe,d1);Object.defineProperty(c1,"isAxiosError",{value:!0});oe.from=(e,t,n,r,o,i)=>{const a=Object.create(c1);return A.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),oe.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const hR=null;function df(e){return A.isPlainObject(e)||A.isArray(e)}function f1(e){return A.endsWith(e,"[]")?e.slice(0,-2):e}function Nv(e,t,n){return e?e.concat(t).map(function(o,i){return o=f1(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function vR(e){return A.isArray(e)&&!e.some(df)}const gR=A.toFlatObject(A,{},null,function(t){return/^is[A-Z]/.test(t)});function yu(e,t,n){if(!A.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=A.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,b){return!A.isUndefined(b[g])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&A.isSpecCompliantForm(t);if(!A.isFunction(o))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(A.isDate(h))return h.toISOString();if(A.isBoolean(h))return h.toString();if(!l&&A.isBlob(h))throw new oe("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(h)||A.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,g,b){let m=h;if(h&&!b&&typeof h=="object"){if(A.endsWith(g,"{}"))g=r?g:g.slice(0,-2),h=JSON.stringify(h);else if(A.isArray(h)&&vR(h)||(A.isFileList(h)||A.endsWith(g,"[]"))&&(m=A.toArray(h)))return g=f1(g),m.forEach(function(y,C){!(A.isUndefined(y)||y===null)&&t.append(a===!0?Nv([g],C,i):a===null?g:g+"[]",u(y))}),!1}return df(h)?!0:(t.append(Nv(b,g,i),u(h)),!1)}const d=[],f=Object.assign(gR,{defaultVisitor:c,convertValue:u,isVisitable:df});function w(h,g){if(!A.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+g.join("."));d.push(h),A.forEach(h,function(m,p){(!(A.isUndefined(m)||m===null)&&o.call(t,m,A.isString(p)?p.trim():p,g,f))===!0&&w(m,g?g.concat(p):[p])}),d.pop()}}if(!A.isObject(e))throw new TypeError("data must be an object");return w(e),t}function kv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function xm(e,t){this._pairs=[],e&&yu(e,this,t)}const p1=xm.prototype;p1.append=function(t,n){this._pairs.push([t,n])};p1.toString=function(t){const n=t?function(r){return t.call(this,r,kv)}:kv;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function yR(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function m1(e,t,n){if(!t)return e;const r=n&&n.encode||yR;A.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(o?i=o(t,n):i=A.isURLSearchParams(t)?t.toString():new xm(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Mv{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){A.forEach(this.handlers,function(r){r!==null&&t(r)})}}const h1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bR=typeof URLSearchParams<"u"?URLSearchParams:xm,wR=typeof FormData<"u"?FormData:null,xR=typeof Blob<"u"?Blob:null,CR={isBrowser:!0,classes:{URLSearchParams:bR,FormData:wR,Blob:xR},protocols:["http","https","file","blob","url","data"]},Cm=typeof window<"u"&&typeof document<"u",ff=typeof navigator=="object"&&navigator||void 0,SR=Cm&&(!ff||["ReactNative","NativeScript","NS"].indexOf(ff.product)<0),ER=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",OR=Cm&&window.location.href||"http://localhost",TR=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cm,hasStandardBrowserEnv:SR,hasStandardBrowserWebWorkerEnv:ER,navigator:ff,origin:OR},Symbol.toStringTag,{value:"Module"})),gt={...TR,...CR};function RR(e,t){return yu(e,new gt.classes.URLSearchParams,{visitor:function(n,r,o,i){return gt.isNode&&A.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function PR(e){return A.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function AR(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function v1(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&A.isArray(o)?o.length:a,l?(A.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!A.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&A.isArray(o[a])&&(o[a]=AR(o[a])),!s)}if(A.isFormData(e)&&A.isFunction(e.entries)){const n={};return A.forEachEntry(e,(r,o)=>{t(PR(r),o,n,0)}),n}return null}function $R(e,t,n){if(A.isString(e))try{return(t||JSON.parse)(e),A.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const _a={transitional:h1,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=A.isObject(t);if(i&&A.isHTMLForm(t)&&(t=new FormData(t)),A.isFormData(t))return o?JSON.stringify(v1(t)):t;if(A.isArrayBuffer(t)||A.isBuffer(t)||A.isStream(t)||A.isFile(t)||A.isBlob(t)||A.isReadableStream(t))return t;if(A.isArrayBufferView(t))return t.buffer;if(A.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return RR(t,this.formSerializer).toString();if((s=A.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return yu(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),$R(t)):t}],transformResponse:[function(t){const n=this.transitional||_a.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(A.isResponse(t)||A.isReadableStream(t))return t;if(t&&A.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?oe.from(s,oe.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:gt.classes.FormData,Blob:gt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};A.forEach(["delete","get","head","post","put","patch"],e=>{_a.headers[e]={}});const IR=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),FR=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&IR[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},zv=Symbol("internals");function Oi(e){return e&&String(e).trim().toLowerCase()}function As(e){return e===!1||e==null?e:A.isArray(e)?e.map(As):String(e)}function _R(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const jR=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Fc(e,t,n,r,o){if(A.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!A.isString(t)){if(A.isString(r))return t.indexOf(r)!==-1;if(A.isRegExp(r))return r.test(t)}}function NR(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function kR(e,t){const n=A.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}let $t=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,l,u){const c=Oi(l);if(!c)throw new Error("header name must be a non-empty string");const d=A.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||l]=As(s))}const a=(s,l)=>A.forEach(s,(u,c)=>i(u,c,l));if(A.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(A.isString(t)&&(t=t.trim())&&!jR(t))a(FR(t),n);else if(A.isObject(t)&&A.isIterable(t)){let s={},l,u;for(const c of t){if(!A.isArray(c))throw TypeError("Object iterator must return a key-value pair");s[u=c[0]]=(l=s[u])?A.isArray(l)?[...l,c[1]]:[l,c[1]]:c[1]}a(s,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Oi(t),t){const r=A.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return _R(o);if(A.isFunction(n))return n.call(this,o,r);if(A.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Oi(t),t){const r=A.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Fc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=Oi(a),a){const s=A.findKey(r,a);s&&(!n||Fc(r,r[s],s,n))&&(delete r[s],o=!0)}}return A.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Fc(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return A.forEach(this,(o,i)=>{const a=A.findKey(r,i);if(a){n[a]=As(o),delete n[i];return}const s=t?NR(i):String(i).trim();s!==i&&delete n[i],n[s]=As(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return A.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&A.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[zv]=this[zv]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=Oi(a);r[s]||(kR(o,a),r[s]=!0)}return A.isArray(t)?t.forEach(i):i(t),this}};$t.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.reduceDescriptors($t.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});A.freezeMethods($t);function _c(e,t){const n=this||_a,r=t||n,o=$t.from(r.headers);let i=r.data;return A.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function g1(e){return!!(e&&e.__CANCEL__)}function ci(e,t,n){oe.call(this,e??"canceled",oe.ERR_CANCELED,t,n),this.name="CanceledError"}A.inherits(ci,oe,{__CANCEL__:!0});function y1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new oe("Request failed with status code "+n.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function MR(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function zR(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];a||(a=u),n[o]=l,r[o]=u;let d=i,f=0;for(;d!==o;)f+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const w=c&&u-c;return w?Math.round(f*1e3/w):void 0}}function LR(e,t){let n=0,r=1e3/t,o,i;const a=(u,c=Date.now())=>{n=c,o=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const c=Date.now(),d=c-n;d>=r?a(u,c):(o=u,i||(i=setTimeout(()=>{i=null,a(o)},r-d)))},()=>o&&a(o)]}const ml=(e,t,n=3)=>{let r=0;const o=zR(50,250);return LR(i=>{const a=i.loaded,s=i.lengthComputable?i.total:void 0,l=a-r,u=o(l),c=a<=s;r=a;const d={loaded:a,total:s,progress:s?a/s:void 0,bytes:l,rate:u||void 0,estimated:u&&s&&c?(s-a)/u:void 0,event:i,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(d)},n)},Lv=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Dv=e=>(...t)=>A.asap(()=>e(...t)),DR=gt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,gt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(gt.origin),gt.navigator&&/(msie|trident)/i.test(gt.navigator.userAgent)):()=>!0,BR=gt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];A.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),A.isString(r)&&a.push("path="+r),A.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function VR(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function HR(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function b1(e,t,n){let r=!VR(t);return e&&(r||n==!1)?HR(e,t):t}const Bv=e=>e instanceof $t?{...e}:e;function to(e,t){t=t||{};const n={};function r(u,c,d,f){return A.isPlainObject(u)&&A.isPlainObject(c)?A.merge.call({caseless:f},u,c):A.isPlainObject(c)?A.merge({},c):A.isArray(c)?c.slice():c}function o(u,c,d,f){if(A.isUndefined(c)){if(!A.isUndefined(u))return r(void 0,u,d,f)}else return r(u,c,d,f)}function i(u,c){if(!A.isUndefined(c))return r(void 0,c)}function a(u,c){if(A.isUndefined(c)){if(!A.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c,d)=>o(Bv(u),Bv(c),d,!0)};return A.forEach(Object.keys({...e,...t}),function(c){const d=l[c]||o,f=d(e[c],t[c],c);A.isUndefined(f)&&d!==s||(n[c]=f)}),n}const w1=e=>{const t=to({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:s}=t;t.headers=a=$t.from(a),t.url=m1(b1(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&a.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let l;if(A.isFormData(n)){if(gt.hasStandardBrowserEnv||gt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((l=a.getContentType())!==!1){const[u,...c]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...c].join("; "))}}if(gt.hasStandardBrowserEnv&&(r&&A.isFunction(r)&&(r=r(t)),r||r!==!1&&DR(t.url))){const u=o&&i&&BR.read(i);u&&a.set(o,u)}return t},UR=typeof XMLHttpRequest<"u",WR=UR&&function(e){return new Promise(function(n,r){const o=w1(e);let i=o.data;const a=$t.from(o.headers).normalize();let{responseType:s,onUploadProgress:l,onDownloadProgress:u}=o,c,d,f,w,h;function g(){w&&w(),h&&h(),o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function m(){if(!b)return;const y=$t.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),x={data:!s||s==="text"||s==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:y,config:e,request:b};y1(function(S){n(S),g()},function(S){r(S),g()},x),b=null}"onloadend"in b?b.onloadend=m:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(m)},b.onabort=function(){b&&(r(new oe("Request aborted",oe.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new oe("Network Error",oe.ERR_NETWORK,e,b)),b=null},b.ontimeout=function(){let C=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const x=o.transitional||h1;o.timeoutErrorMessage&&(C=o.timeoutErrorMessage),r(new oe(C,x.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,e,b)),b=null},i===void 0&&a.setContentType(null),"setRequestHeader"in b&&A.forEach(a.toJSON(),function(C,x){b.setRequestHeader(x,C)}),A.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),s&&s!=="json"&&(b.responseType=o.responseType),u&&([f,h]=ml(u,!0),b.addEventListener("progress",f)),l&&b.upload&&([d,w]=ml(l),b.upload.addEventListener("progress",d),b.upload.addEventListener("loadend",w)),(o.cancelToken||o.signal)&&(c=y=>{b&&(r(!y||y.type?new ci(null,e,b):y),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const p=MR(o.url);if(p&&gt.protocols.indexOf(p)===-1){r(new oe("Unsupported protocol "+p+":",oe.ERR_BAD_REQUEST,e));return}b.send(i||null)})},GR=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(u){if(!o){o=!0,s();const c=u instanceof Error?u:this.reason;r.abort(c instanceof oe?c:new ci(c instanceof Error?c.message:c))}};let a=t&&setTimeout(()=>{a=null,i(new oe(`timeout ${t} of ms exceeded`,oe.ETIMEDOUT))},t);const s=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>A.asap(s),l}},qR=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},KR=async function*(e,t){for await(const n of QR(e))yield*qR(n,t)},QR=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Vv=(e,t,n,r)=>{const o=KR(e,t);let i=0,a,s=l=>{a||(a=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await o.next();if(u){s(),l.close();return}let d=c.byteLength;if(n){let f=i+=d;n(f)}l.enqueue(new Uint8Array(c))}catch(u){throw s(u),u}},cancel(l){return s(l),o.return()}},{highWaterMark:2})},bu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",x1=bu&&typeof ReadableStream=="function",XR=bu&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),C1=(e,...t)=>{try{return!!e(...t)}catch{return!1}},JR=x1&&C1(()=>{let e=!1;const t=new Request(gt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Hv=64*1024,pf=x1&&C1(()=>A.isReadableStream(new Response("").body)),hl={stream:pf&&(e=>e.body)};bu&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!hl[t]&&(hl[t]=A.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new oe(`Response type '${t}' is not supported`,oe.ERR_NOT_SUPPORT,r)})})})(new Response);const YR=async e=>{if(e==null)return 0;if(A.isBlob(e))return e.size;if(A.isSpecCompliantForm(e))return(await new Request(gt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(A.isArrayBufferView(e)||A.isArrayBuffer(e))return e.byteLength;if(A.isURLSearchParams(e)&&(e=e+""),A.isString(e))return(await XR(e)).byteLength},ZR=async(e,t)=>{const n=A.toFiniteNumber(e.getContentLength());return n??YR(t)},eP=bu&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:f}=w1(e);u=u?(u+"").toLowerCase():"text";let w=GR([o,i&&i.toAbortSignal()],a),h;const g=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let b;try{if(l&&JR&&n!=="get"&&n!=="head"&&(b=await ZR(c,r))!==0){let x=new Request(t,{method:"POST",body:r,duplex:"half"}),E;if(A.isFormData(r)&&(E=x.headers.get("content-type"))&&c.setContentType(E),x.body){const[S,O]=Lv(b,ml(Dv(l)));r=Vv(x.body,Hv,S,O)}}A.isString(d)||(d=d?"include":"omit");const m="credentials"in Request.prototype;h=new Request(t,{...f,signal:w,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:m?d:void 0});let p=await fetch(h,f);const y=pf&&(u==="stream"||u==="response");if(pf&&(s||y&&g)){const x={};["status","statusText","headers"].forEach(R=>{x[R]=p[R]});const E=A.toFiniteNumber(p.headers.get("content-length")),[S,O]=s&&Lv(E,ml(Dv(s),!0))||[];p=new Response(Vv(p.body,Hv,S,()=>{O&&O(),g&&g()}),x)}u=u||"text";let C=await hl[A.findKey(hl,u)||"text"](p,e);return!y&&g&&g(),await new Promise((x,E)=>{y1(x,E,{data:C,headers:$t.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:h})})}catch(m){throw g&&g(),m&&m.name==="TypeError"&&/Load failed|fetch/i.test(m.message)?Object.assign(new oe("Network Error",oe.ERR_NETWORK,e,h),{cause:m.cause||m}):oe.from(m,m&&m.code,e,h)}}),mf={http:hR,xhr:WR,fetch:eP};A.forEach(mf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Uv=e=>`- ${e}`,tP=e=>A.isFunction(e)||e===null||e===!1,S1={getAdapter:e=>{e=A.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!tP(n)&&(r=mf[(a=String(n)).toLowerCase()],r===void 0))throw new oe(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(Uv).join(`
`):" "+Uv(i[0]):"as no adapter specified";throw new oe("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:mf};function jc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ci(null,e)}function Wv(e){return jc(e),e.headers=$t.from(e.headers),e.data=_c.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),S1.getAdapter(e.adapter||_a.adapter)(e).then(function(r){return jc(e),r.data=_c.call(e,e.transformResponse,r),r.headers=$t.from(r.headers),r},function(r){return g1(r)||(jc(e),r&&r.response&&(r.response.data=_c.call(e,e.transformResponse,r.response),r.response.headers=$t.from(r.response.headers))),Promise.reject(r)})}const E1="1.11.0",wu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{wu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Gv={};wu.transitional=function(t,n,r){function o(i,a){return"[Axios v"+E1+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new oe(o(a," has been removed"+(n?" in "+n:"")),oe.ERR_DEPRECATED);return n&&!Gv[a]&&(Gv[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};wu.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function nP(e,t,n){if(typeof e!="object")throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new oe("option "+i+" must be "+l,oe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new oe("Unknown option "+i,oe.ERR_BAD_OPTION)}}const $s={assertOptions:nP,validators:wu},An=$s.validators;let Wr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Mv,response:new Mv}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=to(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&$s.assertOptions(r,{silentJSONParsing:An.transitional(An.boolean),forcedJSONParsing:An.transitional(An.boolean),clarifyTimeoutError:An.transitional(An.boolean)},!1),o!=null&&(A.isFunction(o)?n.paramsSerializer={serialize:o}:$s.assertOptions(o,{encode:An.function,serialize:An.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),$s.assertOptions(n,{baseUrl:An.spelling("baseURL"),withXsrfToken:An.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&A.merge(i.common,i[n.method]);i&&A.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=$t.concat(a,i);const s=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,s.unshift(g.fulfilled,g.rejected))});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let c,d=0,f;if(!l){const h=[Wv.bind(this),void 0];for(h.unshift(...s),h.push(...u),f=h.length,c=Promise.resolve(n);d<f;)c=c.then(h[d++],h[d++]);return c}f=s.length;let w=n;for(d=0;d<f;){const h=s[d++],g=s[d++];try{w=h(w)}catch(b){g.call(this,b);break}}try{c=Wv.call(this,w)}catch(h){return Promise.reject(h)}for(d=0,f=u.length;d<f;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=to(this.defaults,t);const n=b1(t.baseURL,t.url,t.allowAbsoluteUrls);return m1(n,t.params,t.paramsSerializer)}};A.forEach(["delete","get","head","options"],function(t){Wr.prototype[t]=function(n,r){return this.request(to(r||{},{method:t,url:n,data:(r||{}).data}))}});A.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(to(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Wr.prototype[t]=n(),Wr.prototype[t+"Form"]=n(!0)});let rP=class O1{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new ci(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new O1(function(o){t=o}),cancel:t}}};function oP(e){return function(n){return e.apply(null,n)}}function iP(e){return A.isObject(e)&&e.isAxiosError===!0}const hf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(hf).forEach(([e,t])=>{hf[t]=e});function T1(e){const t=new Wr(e),n=n1(Wr.prototype.request,t);return A.extend(n,Wr.prototype,t,{allOwnKeys:!0}),A.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return T1(to(e,o))},n}const Be=T1(_a);Be.Axios=Wr;Be.CanceledError=ci;Be.CancelToken=rP;Be.isCancel=g1;Be.VERSION=E1;Be.toFormData=yu;Be.AxiosError=oe;Be.Cancel=Be.CanceledError;Be.all=function(t){return Promise.all(t)};Be.spread=oP;Be.isAxiosError=iP;Be.mergeConfig=to;Be.AxiosHeaders=$t;Be.formToJSON=e=>v1(A.isHTMLForm(e)?new FormData(e):e);Be.getAdapter=S1.getAdapter;Be.HttpStatusCode=hf;Be.default=Be;const{Axios:rN,AxiosError:oN,CanceledError:iN,isCancel:aN,CancelToken:sN,VERSION:lN,all:uN,Cancel:cN,isAxiosError:dN,spread:fN,toFormData:pN,AxiosHeaders:mN,HttpStatusCode:hN,formToJSON:vN,getAdapter:gN,mergeConfig:yN}=Be;Be.defaults.withCredentials=!1;const Sm=Be.create({baseURL:"https://plugin-test.aijidou.com",timeout:15*1e3});function aP(e){return e}function sP(e){return console.log("response====",e),Promise.resolve(e.data)}function lP(e){return NProgress.done(),message.error(e.message),Promise.resolve({err:e.message})}Sm.interceptors.request.use(aP);Sm.interceptors.response.use(sP,lP);const uP=e=>Sm.post("/plugin/widget/getCard",e),cP={BASE_URL:"https://plugin-test.aijidou.com",ENDPOINTS:{STREAM_CHAT:"/api/chat/stream",STREAM_CHAT_SSE:"/api/chat/stream/sse"},MESSAGE_TYPES:{THINKING:"thinking",RESPONSE:"response",COMPLETE:"complete",ERROR:"error",WIDGET:"widget"},DEV:{ENABLE_MOCK_STREAM:!0,MOCK_THINKING_STEPS:["正在分析您的需求...","搜索相关信息...","生成回复内容...","优化表达方式...","检查内容准确性..."],MOCK_RESPONSES:{DEFAULT:"这是一个模拟的AI回复，展示了流式聊天的效果。AI会逐步思考并生成回复内容，让用户能够看到整个思考过程。",WIDGET:"我为您生成了一个Widget卡片，这个卡片包含了您需要的信息和功能。",CAR:"车控功能已生成，您可以控制车辆的各种功能。"}},ERROR_MESSAGES:{CONNECTION_FAILED:"连接失败，请检查网络连接",STREAM_ERROR:"流式传输出现错误",TIMEOUT:"请求超时，请稍后重试",PARSE_ERROR:"数据解析失败",UNKNOWN_ERROR:"未知错误，请稍后重试"}},dP=async(e,t,n,r)=>{try{const o=await fetch("https://plugin-test.aijidou.com/plugin/widget/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const i=o.body.getReader(),a=new TextDecoder;try{for(;;){const{done:s,value:l}=await i.read();if(s){r&&r();break}const c=a.decode(l,{stream:!0}).split(`
`);for(const d of c)if(d.trim()&&d.startsWith("data: "))try{const f=JSON.parse(d.slice(6));t({type:cP.MESSAGE_TYPES.RESPONSE,content:f.content,timestamp:new Date().toISOString()})}catch(f){console.error("解析流式数据失败:",f)}}}finally{i.releaseLock()}}catch(o){console.error("流式聊天请求失败:",o),n&&n(o)}},fP=(e,t,n,r)=>(console.log("使用Fetch API流式聊天"),dP(e,t,n,r)),pP={cards:[],selectedCard:null,appliedCards:null,previewMode:!1},R1=ym({name:"widget",initialState:pP,reducers:{addWidgetCard:(e,t)=>{let n=t.payload;typeof n=="string"?n={url:n,htmlCode:n.includes("<")?n:null,id:Date.now(),createdAt:new Date().toISOString()}:typeof n=="object"&&(n={...n,id:n.id||Date.now(),createdAt:n.createdAt||new Date().toISOString()});const r={url:n.url||n.content||n.htmlCode||"",htmlCode:n.htmlCode||n.content||n.url||"",title:n.title||"AI生成的Widget卡片",description:n.description||"这是一个通过AI生成的Widget卡片",id:n.id,createdAt:n.createdAt};e.cards.push(r)},selectCard:(e,t)=>{e.selectedCard=t.payload},applyCard:(e,t)=>{e.appliedCards=t.payload},removeAppliedCard:(e,t)=>{e.appliedCards=e.appliedCards.filter(n=>n.appliedId!==t.payload)},setPreviewMode:(e,t)=>{e.previewMode=t.payload},clearCards:e=>{e.cards=[],e.selectedCard=null}}}),{addWidgetCard:mP,selectCard:hP,applyCard:vP}=R1.actions,gP=R1.reducer,yP=`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新闻卡片模板 - 纯JS版本</title>
    <style>
        /* CSS变量系统 - 动态参数控制 */
        :root {
            /* 亮色模式 */
            --text-primary: #262626;
            --text-secondary: #8c8c8c;
            --border-color: #f0f0f0;
            --bg-color: #ffffff;
            --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            --border-radius: 8px;
            --spacing: 16px;
            --img-bg-color: #eee; 
            --hover-bg-color: #fafafa;
            --star-color: #faad14;
            --mask-color: rgba(0, 0, 0, 0.7);
            --mask-text-color: #fff;
            --star-gray-color: #ddd;
            --video-play-icon-color: #fff;
            --video-play-icon-bg-color: rgba(0, 0, 0, 0.5);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            color: var(--text-primary);
            line-height: 1.6;
        }

        .app {
            width: 700px;
            margin: 0 auto;
        }

        .header-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            padding: 20px;
        }

        .news-card {
            background: var(--bg-color);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            overflow: hidden;
            margin-bottom: 20px;
        }

        /* 单图新闻Item样式 */
        .news-item {
            display: flex;
            padding: var(--spacing);
            border-bottom: 1px solid var(--border-color);
            transition: background-color 0.2s;
            cursor: pointer;
        }

        .news-item:hover {
            background-color: var(--hover-bg-color);
        }

        .news-item:last-child {
            border-bottom: none;
        }

        .news-thumbnail {
            width: 120px;
            height: 80px;
            object-fit: cover;
            border-radius: 6px;
            margin-right: var(--spacing);
            flex-shrink: 0;
            background-color: var(--img-bg-color);
        }

        .news-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .news-title {
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 8px;
            line-height: 1.4;
            display: -webkit-box;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .news-meta {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: var(--text-secondary);
        }

        .time {
            margin-right: 12px;
        }

        /* 新闻Banner样式 */
        .banner-item {
            position: relative;
            height: 200px;
            overflow: hidden;
            cursor: pointer;
            margin: 0 20px;
            border-radius: 10px;
        }

        .banner-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            background-color: var(--img-bg-color);
        }

        .banner-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, var(--mask-color));
            color: var(--mask-text-color);
            padding: 20px;
        }

        .banner-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 1.3;
        }

        .banner-desc {
            font-size: 14px;
            opacity: 0.9;
            line-height: 1.4;
        }

        /* 视频Banner样式 */
        .video-banner-item {
            cursor: pointer;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .video-banner-cover {
            width: 100%;
            height: 180px;
            object-fit: cover;
            position: relative;
            background-color: var(--img-bg-color);
        }

        .video-play-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
            background: var(--video-play-icon-bg-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--video-play-icon-color);
            font-size: 24px;
        }

        .video-banner-title {
            padding: 16px;
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            line-height: 1.4;
        }

        /* 视频Item样式 */
        .video-item {
            cursor: pointer;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: transform 0.2s;
        }

        .video-item:hover {
            transform: translateY(-2px);
        }

        .video-cover {
            width: 100%;
            height: 120px;
            object-fit: cover;
            position: relative;
            background-color: var(--img-bg-color);
        }

        .video-item-title {
            padding: 12px;
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary);
            line-height: 1.3;
        }

        /* 移动端视频Item样式 */
        .movie-video-item {
            display: flex;
            padding: var(--spacing);
            border-bottom: 1px solid var(--border-color);
            cursor: pointer;
        }

        .movie-video-item:hover {
            background-color: var(--hover-bg-color);
        }

        .movie-video-cover {
            width: 160px;
            height: 200px;
            object-fit: cover;
            border-radius: 6px;
            margin-right: var(--spacing);
            flex-shrink: 0;
            background-color: var(--img-bg-color);
        }

        .movie-video-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 8px 0;
        }

        .movie-video-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
            line-height: 1.4;
            display: -webkit-box;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .movie-video-tag {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            font-size: 12px;
            color: var(--text-secondary);
        }

        .movie-video-tag::before {
            content: "🏷️";
            margin-right: 6px;
            font-size: 14px;
        }

        .movie-video-tag .year-separator {
            margin: 0 8px;
            color: var(--text-secondary);
            font-weight: 300;
        }

        .movie-video-rating-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }

        .movie-video-rating {
            display: flex;
            align-items: center;
            gap: 2px;
        }

        .movie-video-rating .star {
            font-size: 18px;
            color: var(--text-secondary);
            transition: color 0.2s ease;
        }

        .movie-video-rating .star.filled {
            color: var(--star-color);
        }

        .movie-video-rating .star.half {
            background: linear-gradient(90deg, var(--star-color) 50%, var(--star-gray-color) 50%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .movie-video-rating .rating-text {
            margin-left: 8px;
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .movie-video-meta {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: var(--text-secondary);
        }

        .movie-video-meta::before {
            content: "📅";
            margin-right: 6px;
            font-size: 14px;
        }

        .movie-video-desc {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
            display: -webkit-box;
            line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 8px;
        }

        .star {
            color: var(--star-color);
            margin-right: 2px;
        }

        /* 三图新闻样式 */
        .image-item {
            padding: var(--spacing);
            cursor: pointer;
            border-radius: 10px;
        }

        .image-item:hover {
            background-color: var(--hover-bg-color);
        }

        .image-item-title {
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 12px;
            line-height: 1.4;
        }

        .image-item-images {
            display: flex;
            gap: 8px;
            border-radius: 6px;
        }

        .image-item-images.three-equal img {
            flex: 1;
            height: 100px;
            object-fit: cover;
            border-radius: 6px;
            background-color: var(--img-bg-color);
        }

        .image-item-images.left-large {
            gap: 8px;
        }

        .image-item-images.left-large .large-image {
            flex: 2;
            height: 208px;
            object-fit: cover;
            border-radius: 6px;
            background-color: var(--img-bg-color);
        }

        .image-item-images.left-large .small-images {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .image-item-images.left-large .small-images img {
            height: 100px;
            object-fit: cover;
            border-radius: 6px;
            background-color: var(--img-bg-color);
        }

        /* 评论Item样式 */
        .comment-item {
            padding: var(--spacing);
            border-bottom: 1px solid var(--border-color);
            cursor: pointer;
        }

        .comment-item:hover {
            background-color: var(--hover-bg-color);
        }

        .comment-header {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
        }

        .comment-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-right: 12px;
            object-fit: cover;
            background-color: var(--img-bg-color);
        }

        .comment-user-info {
            flex: 1;
        }

        .comment-username {
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 2px;
        }

        .comment-time {
            font-size: 12px;
            color: var(--text-secondary);
        }

        .comment-content {
            font-size: 14px;
            color: var(--text-primary);
            line-height: 1.5;
            margin-left: 44px;
        }

        /* 加载状态样式 */
        .loading-container {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
            text-align: center;
            color: var(--text-secondary);
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .app {
                width: 100%;
            }

            .news-thumbnail {
                width: 100px;
                height: 70px;
            }

            .banner-item {
                height: 160px;
            }

            .banner-overlay {
                padding: 16px;
            }

            .banner-title {
                font-size: 16px;
            }
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script>
        // 工具函数：创建DOM元素
        function createElement(tag, className, attributes = {}) {
            const element = document.createElement(tag);
            if (className) {
                element.className = className;
            }
            for (const [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
            return element;
        }

        // 单图新闻Item(左边图片，右边上下结构，标题+描述)
        function createNewsItemWithOnePic(news) {
            const newsItem = createElement('div', 'news-item');
            
            const thumbnail = createElement('img', 'news-thumbnail', {
                src: news.picUrl,
                alt: news.newsTitle
            });
            
            const content = createElement('div', 'news-content');
            const title = createElement('div', 'news-title');
            title.textContent = news.newsTitle;
            
            const meta = createElement('div', 'news-meta');
            const time = createElement('span', 'time');
            time.textContent = news.pubTime;
            meta.appendChild(time);
            
            content.appendChild(title);
            content.appendChild(meta);
            
            newsItem.appendChild(thumbnail);
            newsItem.appendChild(content);
            
            return newsItem;
        }

        // 新闻bannerItem（大图+图底部标题+描述）
        function createNewsBannerItem(item) {
            const bannerItem = createElement('div', 'banner-item');
            
            const image = createElement('img', 'banner-image', {
                src: item.picUrl,
                alt: item.newsTitle
            });
            
            const overlay = createElement('div', 'banner-overlay');
            const title = createElement('div', 'banner-title');
            title.textContent = item.newsTitle;
            
            const desc = createElement('div', 'banner-desc');
            desc.textContent = item.description || '点击查看详情';
            
            overlay.appendChild(title);
            overlay.appendChild(desc);
            
            bannerItem.appendChild(image);
            bannerItem.appendChild(overlay);
            
            return bannerItem;
        }

        // 视频bannerItem（上封面,封面为宽度占满，下标题）
        function createVideoBannerItem(item) {
            const videoBannerItem = createElement('div', 'video-banner-item');
            
            const coverContainer = createElement('div');
            coverContainer.style.position = 'relative';
            
            const cover = createElement('img', 'video-banner-cover', {
                src: item.picUrl,
                alt: item.newsTitle
            });
            
            const playIcon = createElement('div', 'video-play-icon');
            playIcon.textContent = '▶';
            
            coverContainer.appendChild(cover);
            coverContainer.appendChild(playIcon);
            
            const title = createElement('div', 'video-banner-title');
            title.textContent = item.newsTitle;
            
            videoBannerItem.appendChild(coverContainer);
            videoBannerItem.appendChild(title);
            
            return videoBannerItem;
        }

        // 视频Item（上封面，封面为宽度为1/3，下标题）
        function createVideoNewsItem(item) {
            const videoItem = createElement('div', 'video-item');
            
            const coverContainer = createElement('div');
            coverContainer.style.position = 'relative';
            
            const cover = createElement('img', 'video-cover', {
                src: item.picUrl,
                alt: item.newsTitle
            });
            
            const playIcon = createElement('div', 'video-play-icon');
            playIcon.textContent = '▶';
            playIcon.style.width = '40px';
            playIcon.style.height = '40px';
            playIcon.style.fontSize = '16px';
            
            coverContainer.appendChild(cover);
            coverContainer.appendChild(playIcon);
            
            const title = createElement('div', 'video-item-title');
            title.textContent = item.newsTitle;
            
            videoItem.appendChild(coverContainer);
            videoItem.appendChild(title);
            
            return videoItem;
        }

        // 电影或唱片Item（左封面，右边为标题+描述+评分等信息）
        function createMovieVideoNewsItem(item) {
            const movieVideoItem = createElement('div', 'movie-video-item');
            
            const cover = createElement('img', 'movie-video-cover', {
                src: item.picUrl,
                alt: item.newsTitle
            });
            
            const content = createElement('div', 'movie-video-content');
            const contentTop = createElement('div', 'movie-video-content-top');
            
            const title = createElement('div', 'movie-video-title');
            title.textContent = item.newsTitle;
            
            const tag = createElement('div', 'movie-video-tag');
            tag.innerHTML = item.tag + '<span class="year-separator">•</span>' + item.pubTime;
            
            const ratingSection = createElement('div', 'movie-video-rating-section');
            const rating = createElement('div', 'movie-video-rating');
            
            // 根据评分计算星星显示状态（5分制）
            const ratingValue = parseFloat(item.rating);
            const fullStars = Math.floor(ratingValue);
            const hasHalfStar = ratingValue % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                const star = createElement('span', 'star filled');
                star.textContent = '★';
                rating.appendChild(star);
            }
            
            if (hasHalfStar) {
                const halfStar = createElement('span', 'star half');
                halfStar.textContent = '★';
                rating.appendChild(halfStar);
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                const star = createElement('span', 'star');
                star.textContent = '★';
                rating.appendChild(star);
            }
            
            const ratingText = createElement('span', 'rating-text');
            ratingText.textContent = item.rating + '/5';
            rating.appendChild(ratingText);
            
            ratingSection.appendChild(rating);
            
            contentTop.appendChild(title);
            contentTop.appendChild(tag);
            contentTop.appendChild(ratingSection);
            
            const desc = createElement('div', 'movie-video-desc');
            desc.textContent = item.description;
            
            content.appendChild(contentTop);
            content.appendChild(desc);
            
            movieVideoItem.appendChild(cover);
            movieVideoItem.appendChild(content);
            
            return movieVideoItem;
        }

        // 图片新闻Item(上标题，下三图 ，三图布局为1/3宽度或者左为大图2/3，右两小图上下布局)
        function createNewsItemWithThreePic(item, layout = 'three-equal') {
            const imageItem = createElement('div', 'image-item');
            
            const title = createElement('div', 'image-item-title');
            title.textContent = item.newsTitle;
            
            const imagesContainer = createElement('div', 'image-item-images ' + layout);
            
            if (layout === 'three-equal') {
                const img1 = createElement('img', null, {
                    src: item.picUrl1,
                    alt: '图片1'
                });
                const img2 = createElement('img', null, {
                    src: item.picUrl2,
                    alt: '图片2'
                });
                const img3 = createElement('img', null, {
                    src: item.picUrl3,
                    alt: '图片3'
                });
                
                imagesContainer.appendChild(img1);
                imagesContainer.appendChild(img2);
                imagesContainer.appendChild(img3);
            } else {
                const largeImg = createElement('img', 'large-image', {
                    src: item.picUrl1,
                    alt: '主图'
                });
                
                const smallImagesContainer = createElement('div', 'small-images');
                const img2 = createElement('img', null, {
                    src: item.picUrl2,
                    alt: '图片2'
                });
                const img3 = createElement('img', null, {
                    src: item.picUrl3,
                    alt: '图片3'
                });
                
                smallImagesContainer.appendChild(img2);
                smallImagesContainer.appendChild(img3);
                
                imagesContainer.appendChild(largeImg);
                imagesContainer.appendChild(smallImagesContainer);
            }
            
            imageItem.appendChild(title);
            imageItem.appendChild(imagesContainer);
            
            return imageItem;
        }

        // 评论Item
        function createCommentItem(item) {
            const commentItem = createElement('div', 'comment-item');
            
            const header = createElement('div', 'comment-header');
            const avatar = createElement('img', 'comment-avatar', {
                src: item.avatarUrl,
                alt: '用户头像'
            });
            
            const userInfo = createElement('div', 'comment-user-info');
            const username = createElement('div', 'comment-username');
            username.textContent = item.username;
            
            const time = createElement('div', 'comment-time');
            time.textContent = item.commentTime;
            
            userInfo.appendChild(username);
            userInfo.appendChild(time);
            
            header.appendChild(avatar);
            header.appendChild(userInfo);
            
            const content = createElement('div', 'comment-content');
            content.textContent = item.commentContent;
            
            commentItem.appendChild(header);
            commentItem.appendChild(content);
            
            return commentItem;
        }

        // 头部标题
        function createHeaderTitle(title) {
            const header = createElement('div', 'header-title');
            header.textContent = title;
            return header;
        }

        // 新闻卡片组件
        function createNewsCard() {
            // 初始数据
            let mockData = {
                cardTitle: "Widget卡片标题",
                bannerData: {
                    picUrl: "https://picsum.photos/600/300?random=100",
                    newsTitle: "今日热点资讯",
                    description: "汇聚最新、最热、最有价值的信息"
                },
                hotNews: [
                    {
                        picUrl1: "https://picsum.photos/300/200?random=1",
                        picUrl2: "https://picsum.photos/300/200?random=2",
                        picUrl3: "https://picsum.photos/300/200?random=3",
                        newsTitle: "重大突破！人工智能在医疗领域取得新进展",
                        pubTime: "2024-01-15 10:30"
                    },
                    {
                        picUrl1: "https://picsum.photos/300/200?random=4",
                        picUrl2: "https://picsum.photos/300/200?random=5",
                        picUrl3: "https://picsum.photos/300/200?random=6",
                        newsTitle: "全球气候变化：各国采取行动应对环境挑战",
                        pubTime: "2024-01-15 09:15"
                    },
                    {
                        picUrl1: "https://picsum.photos/300/200?random=7",
                        picUrl2: "https://picsum.photos/300/200?random=8",
                        picUrl3: "https://picsum.photos/300/200?random=9",
                        newsTitle: "科技创新：新型可再生能源技术问世",
                        pubTime: "2024-01-15 08:45"
                    }
                ]
            };

            // 更新卡片标题和横幅
            function updateCardTitleAndBanner(data) {
                if (!data) return;
                
                if (data.title && data.title !== mockData.cardTitle) {
                    mockData.cardTitle = data.title;
                }
                
                if (data.coverurl) {
                    mockData.bannerData.picUrl = data.coverurl;
                }
                
                if (data.title) {
                    mockData.bannerData.newsTitle = data.title;
                }
                
                if (data.subtitle) {
                    mockData.bannerData.description = data.subtitle;
                }
                
                renderNewsCard();
            }

            // 获取新闻数据
            async function fetchNewsData() {
                try {
                    const response = await fetch('https://plugin-test.aijidou.com/plugin/widget/testNews', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if (!response.ok) {
                        throw new Error('HTTP error! status: ' + response.status);
                    }

                    const data = await response.json();

                    if (data && data.data) {
                        const apiData = data.data;
                        if (apiData.hotNews || apiData.infolist) {
                            mockData.hotNews = apiData.hotNews || apiData.infolist;
                        }
                        updateCardTitleAndBanner(data.data);
                    }
                } catch (err) {
                    console.error('获取新闻数据失败:', err);
                }
            }

            // 渲染新闻卡片
            function renderNewsCard() {
                const root = document.getElementById('root');
                root.innerHTML = '';
                
                const app = createElement('div', 'app');
                const newsCard = createElement('div', 'news-card');
                
                // 头部标题
                newsCard.appendChild(createHeaderTitle(mockData.cardTitle));
                
                // 封面Banner
                newsCard.appendChild(createNewsBannerItem(mockData.bannerData));
                
                // 新闻热点分区
                const hotNewsSection = createElement('div');
                hotNewsSection.style.padding = '20px';
                hotNewsSection.style.borderBottom = '1px solid var(--border-color)';
                
                const hotNewsTitle = createElement('h3');
                hotNewsTitle.style.fontSize = '18px';
                hotNewsTitle.style.fontWeight = '600';
                hotNewsTitle.style.marginBottom = '16px';
                hotNewsTitle.style.color = 'var(--text-primary)';
                hotNewsTitle.textContent = '🔥 新闻热点';
                
                hotNewsSection.appendChild(hotNewsTitle);
                
                // 添加新闻项
                mockData.hotNews.forEach((news, index) => {
                    const layout = index % 2 === 0 ? 'left-large' : 'three-equal';
                    hotNewsSection.appendChild(createNewsItemWithThreePic(news, layout));
                });
                
                newsCard.appendChild(hotNewsSection);
                app.appendChild(newsCard);
                root.appendChild(app);
            }

            // 初始化
            function init() {
                fetchNewsData();
                renderNewsCard();
            }

            return {
                init,
                updateCardTitleAndBanner,
                renderNewsCard
            };
        }

        // 初始化应用
        document.addEventListener('DOMContentLoaded', function() {
            const newsCard = createNewsCard();
            newsCard.init();
        });
    <\/script>
</body>
</html>
`,bP=`
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新闻卡片模板 - 纯JavaScript版本</title>
    <style>
        /* CSS变量系统 - 动态参数控制 */
        :root {
            /* 亮色模式 */
            --text-primary: #262626;
            --text-secondary: #8c8c8c;
            --border-color: #f0f0f0;
            --bg-color: #ffffff;
            --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            --border-radius: 8px;
            --spacing: 16px;
            --img-bg-color: #eee; 
            --hover-bg-color: #fafafa;
            --star-color: #faad14;
            --mask-color: rgba(0, 0, 0, 0.7);
            --mask-text-color: #fff;
            --star-gray-color: #ddd;
            --video-play-icon-color: #fff;
            --video-play-icon-bg-color: rgba(0, 0, 0, 0.5);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            color: var(--text-primary);
            line-height: 1.6;
        }

        .app {
            width: 700px;
            margin: 0 auto;
        }

        .header-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            padding: 20px;
        }

        .news-card {
            background: var(--bg-color);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            overflow: hidden;
            margin-bottom: 20px;
        }

        /* 单图新闻Item样式 */
        .news-item {
            display: flex;
            padding: var(--spacing);
            border-bottom: 1px solid var(--border-color);
            transition: background-color 0.2s;
            cursor: pointer;
        }

        .news-item:hover {
            background-color: var(--hover-bg-color);
        }

        .news-item:last-child {
            border-bottom: none;
        }

        .news-thumbnail {
            width: 120px;
            height: 80px;
            object-fit: cover;
            border-radius: 6px;
            margin-right: var(--spacing);
            flex-shrink: 0;
            background-color: var(--img-bg-color);
        }

        .news-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .news-title {
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 8px;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .news-meta {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: var(--text-secondary);
        }

        .time {
            margin-right: 12px;
        }

        /* 新闻Banner样式 */
        .banner-item {
            position: relative;
            height: 200px;
            overflow: hidden;
            cursor: pointer;
            margin: 0 20px;
            border-radius: 10px;
        }

        .banner-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            background-color: var(--img-bg-color);
        }

        .banner-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, var(--mask-color));
            color: var(--mask-text-color);
            padding: 20px;
        }

        .banner-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 1.3;
        }

        .banner-desc {
            font-size: 14px;
            opacity: 0.9;
            line-height: 1.4;
        }

        /* 视频Banner样式 */
        .video-banner-item {
            cursor: pointer;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .video-banner-cover {
            width: 100%;
            height: 180px;
            object-fit: cover;
            position: relative;
            background-color: var(--img-bg-color);
        }

        .video-play-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
            background: var(--video-play-icon-bg-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--video-play-icon-color);
            font-size: 24px;
        }

        .video-banner-title {
            padding: 16px;
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            line-height: 1.4;
        }

        /* 视频Item样式 */
        .video-item {
            cursor: pointer;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: transform 0.2s;
        }

        .video-item:hover {
            transform: translateY(-2px);
        }

        .video-cover {
            width: 100%;
            height: 120px;
            object-fit: cover;
            position: relative;
            background-color: var(--img-bg-color);
        }

        .video-item-title {
            padding: 12px;
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary);
            line-height: 1.3;
        }

        /* 移动端视频Item样式 */
        .movie-video-item {
            display: flex;
            padding: var(--spacing);
            border-bottom: 1px solid var(--border-color);
            cursor: pointer;
        }

        .movie-video-item:hover {
            background-color: var(--hover-bg-color);
        }

        .movie-video-cover {
            width: 160px;
            height: 200px;
            object-fit: cover;
            border-radius: 6px;
            margin-right: var(--spacing);
            flex-shrink: 0;
            background-color: var(--img-bg-color);
        }

        .movie-video-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 8px 0;
        }

        .movie-video-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .movie-video-tag {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            font-size: 12px;
            color: var(--text-secondary);
        }

        .movie-video-tag::before {
            content: "🏷️";
            margin-right: 6px;
            font-size: 14px;
        }

        .movie-video-tag .year-separator {
            margin: 0 8px;
            color: var(--text-secondary);
            font-weight: 300;
        }

        .movie-video-rating-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }

        .movie-video-rating {
            display: flex;
            align-items: center;
            gap: 2px;
        }

        .movie-video-rating .star {
            font-size: 18px;
            color: var(--text-secondary);
            transition: color 0.2s ease;
        }

        .movie-video-rating .star.filled {
            color: var(--star-color);
        }

        .movie-video-rating .star.half {
            background: linear-gradient(90deg, var(--star-color) 50%, var(--star-gray-color) 50%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .movie-video-rating .rating-text {
            margin-left: 8px;
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .movie-video-meta {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: var(--text-secondary);
        }

        .movie-video-meta::before {
            content: "📅";
            margin-right: 6px;
            font-size: 14px;
        }

        .movie-video-desc {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 8px;
        }

        .star {
            color: var(--star-color);
            margin-right: 2px;
        }

        /* 三图新闻样式 */
        .image-item {
            padding: var(--spacing);
            cursor: pointer;
            border-radius: 10px;
        }

        .image-item:hover {
            background-color: var(--hover-bg-color);
        }

        .image-item-title {
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 12px;
            line-height: 1.4;
        }

        .image-item-images {
            display: flex;
            gap: 8px;
            border-radius: 6px;
        }

        .image-item-images.three-equal img {
            flex: 1;
            height: 100px;
            object-fit: cover;
            border-radius: 6px;
            background-color: var(--img-bg-color);
        }

        .image-item-images.left-large {
            gap: 8px;
        }

        .image-item-images.left-large .large-image {
            flex: 2;
            height: 208px;
            object-fit: cover;
            border-radius: 6px;
            background-color: var(--img-bg-color);
        }

        .image-item-images.left-large .small-images {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .image-item-images.left-large .small-images img {
            height: 100px;
            object-fit: cover;
            border-radius: 6px;
            background-color: var(--img-bg-color);
        }

        /* 评论Item样式 */
        .comment-item {
            padding: var(--spacing);
            border-bottom: 1px solid var(--border-color);
            cursor: pointer;
        }

        .comment-item:hover {
            background-color: var(--hover-bg-color);
        }

        .comment-header {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
        }

        .comment-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-right: 12px;
            object-fit: cover;
            background-color: var(--img-bg-color);
        }

        .comment-user-info {
            flex: 1;
        }

        .comment-username {
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 2px;
        }

        .comment-time {
            font-size: 12px;
            color: var(--text-secondary);
        }

        .comment-content {
            font-size: 14px;
            color: var(--text-primary);
            line-height: 1.5;
            margin-left: 44px;
        }

        /* 加载状态样式 */
        .loading-container {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
            text-align: center;
            color: var(--text-secondary);
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .app {
                width: 100%;
            }

            .news-thumbnail {
                width: 100px;
                height: 70px;
            }

            .banner-item {
                height: 160px;
            }

            .banner-overlay {
                padding: 16px;
            }

            .banner-title {
                font-size: 16px;
            }
        }
    </style>
</head>

<body>
    <div id="root"></div>

    <script>
        // 组件工厂函数
        const ComponentFactory = {
            // 创建元素辅助函数
            createElement: (tag, className, attributes = {}) => {
                const element = document.createElement(tag);
                if (className) element.className = className;
                
                for (const [key, value] of Object.entries(attributes)) {
                    if (key === 'textContent') {
                        element.textContent = value;
                    } else if (key === 'innerHTML') {
                        element.innerHTML = value;
                    } else if (key.startsWith('on')) {
                        element.addEventListener(key.substring(2).toLowerCase(), value);
                    } else {
                        element.setAttribute(key, value);
                    }
                }
                
                return element;
            },

            // 单图新闻Item(左边图片，右边上下结构，标题+描述)
            createNewsItemWithOnePic: (news, index) => {
                const newsItem = ComponentFactory.createElement('div', 'news-item');
                
                const thumbnail = ComponentFactory.createElement('img', 'news-thumbnail', {
                    src: news.picUrl,
                    alt: news.newsTitle
                });
                
                const content = ComponentFactory.createElement('div', 'news-content');
                const title = ComponentFactory.createElement('div', 'news-title', {
                    textContent: news.newsTitle
                });
                
                const meta = ComponentFactory.createElement('div', 'news-meta');
                const time = ComponentFactory.createElement('span', 'time', {
                    textContent: news.pubTime
                });
                
                meta.appendChild(time);
                content.appendChild(title);
                content.appendChild(meta);
                newsItem.appendChild(thumbnail);
                newsItem.appendChild(content);
                
                return newsItem;
            },

            // 新闻bannerItem（大图+图底部标题+描述）
            createNewsBannerItem: (item) => {
                const bannerItem = ComponentFactory.createElement('div', 'banner-item');
                
                const image = ComponentFactory.createElement('img', 'banner-image', {
                    src: item.picUrl,
                    alt: item.newsTitle
                });
                
                const overlay = ComponentFactory.createElement('div', 'banner-overlay');
                const title = ComponentFactory.createElement('div', 'banner-title', {
                    textContent: item.newsTitle
                });
                
                const desc = ComponentFactory.createElement('div', 'banner-desc', {
                    textContent: item.description || '点击查看详情'
                });
                
                overlay.appendChild(title);
                overlay.appendChild(desc);
                bannerItem.appendChild(image);
                bannerItem.appendChild(overlay);
                
                return bannerItem;
            },

            // 视频bannerItem（上封面,封面为宽度占满，下标题）
            createVideoBannerItem: (item) => {
                const videoBannerItem = ComponentFactory.createElement('div', 'video-banner-item');
                
                const coverContainer = ComponentFactory.createElement('div', null, {
                    style: 'position: relative;'
                });
                
                const cover = ComponentFactory.createElement('img', 'video-banner-cover', {
                    src: item.picUrl,
                    alt: item.newsTitle
                });
                
                const playIcon = ComponentFactory.createElement('div', 'video-play-icon', {
                    textContent: '▶'
                });
                
                const title = ComponentFactory.createElement('div', 'video-banner-title', {
                    textContent: item.newsTitle
                });
                
                coverContainer.appendChild(cover);
                coverContainer.appendChild(playIcon);
                videoBannerItem.appendChild(coverContainer);
                videoBannerItem.appendChild(title);
                
                return videoBannerItem;
            },

            // 视频Item（上封面，封面为宽度为1/3，下标题）
            createVideoNewsItem: (item) => {
                const videoItem = ComponentFactory.createElement('div', 'video-item');
                
                const coverContainer = ComponentFactory.createElement('div', null, {
                    style: 'position: relative;'
                });
                
                const cover = ComponentFactory.createElement('img', 'video-cover', {
                    src: item.picUrl,
                    alt: item.newsTitle
                });
                
                const playIcon = ComponentFactory.createElement('div', 'video-play-icon', {
                    style: 'width: 40px; height: 40px; font-size: 16px;',
                    textContent: '▶'
                });
                
                const title = ComponentFactory.createElement('div', 'video-item-title', {
                    textContent: item.newsTitle
                });
                
                coverContainer.appendChild(cover);
                coverContainer.appendChild(playIcon);
                videoItem.appendChild(coverContainer);
                videoItem.appendChild(title);
                
                return videoItem;
            },

            // 根据评分计算星星显示状态（5分制）
            renderStars: (rating) => {
                const starsContainer = document.createDocumentFragment();
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 !== 0;
                
                // 渲染完整的星星
                for (let i = 0; i < fullStars; i++) {
                    const star = ComponentFactory.createElement('span', 'star filled', {
                        textContent: '★'
                    });
                    starsContainer.appendChild(star);
                }

                // 渲染半星（如果有）
                if (hasHalfStar) {
                    const halfStar = ComponentFactory.createElement('span', 'star half', {
                        textContent: '★'
                    });
                    starsContainer.appendChild(halfStar);
                }

                // 渲染空星星
                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                for (let i = 0; i < emptyStars; i++) {
                    const emptyStar = ComponentFactory.createElement('span', 'star', {
                        textContent: '★'
                    });
                    starsContainer.appendChild(emptyStar);
                }

                return starsContainer;
            },

            // 电影或唱片Item（左封面，右边为标题+描述+评分等信息）
            createMovieVideoNewsItem: (item) => {
                const movieVideoItem = ComponentFactory.createElement('div', 'movie-video-item');
                
                const cover = ComponentFactory.createElement('img', 'movie-video-cover', {
                    src: item.picUrl,
                    alt: item.newsTitle
                });
                
                const content = ComponentFactory.createElement('div', 'movie-video-content');
                const contentTop = ComponentFactory.createElement('div', 'movie-video-content-top');
                
                const title = ComponentFactory.createElement('div', 'movie-video-title', {
                    textContent: item.newsTitle
                });
                
                const tag = ComponentFactory.createElement('div', 'movie-video-tag');
                tag.innerHTML = item.tag + '<span class="year-separator">•</span>' + item.pubTime;
                
                const ratingSection = ComponentFactory.createElement('div', 'movie-video-rating-section');
                const rating = ComponentFactory.createElement('div', 'movie-video-rating');
                
                const stars = ComponentFactory.renderStars(parseFloat(item.rating));
                const ratingText = ComponentFactory.createElement('span', 'rating-text', {
                    textContent: item.rating + '/5'
                });
                
                rating.appendChild(stars);
                rating.appendChild(ratingText);
                ratingSection.appendChild(rating);
                
                const desc = ComponentFactory.createElement('div', 'movie-video-desc', {
                    textContent: item.description
                });
                
                contentTop.appendChild(title);
                contentTop.appendChild(tag);
                contentTop.appendChild(ratingSection);
                content.appendChild(contentTop);
                content.appendChild(desc);
                
                movieVideoItem.appendChild(cover);
                movieVideoItem.appendChild(content);
                
                return movieVideoItem;
            },

            // 图片新闻Item(上标题，下三图)
            createNewsItemWithThreePic: (item, layout = 'three-equal') => {
                const imageItem = ComponentFactory.createElement('div', 'image-item');
                
                const title = ComponentFactory.createElement('div', 'image-item-title', {
                    textContent: item.newsTitle
                });
                
                const imagesContainer = ComponentFactory.createElement('div', 'image-item-images ' + layout);
                
                if (layout === 'three-equal') {
                    const img1 = ComponentFactory.createElement('img', null, {
                        src: item.picUrl1,
                        alt: "图片1"
                    });
                    
                    const img2 = ComponentFactory.createElement('img', null, {
                        src: item.picUrl2,
                        alt: "图片2"
                    });
                    
                    const img3 = ComponentFactory.createElement('img', null, {
                        src: item.picUrl3,
                        alt: "图片3"
                    });
                    
                    imagesContainer.appendChild(img1);
                    imagesContainer.appendChild(img2);
                    imagesContainer.appendChild(img3);
                } else {
                    const largeImage = ComponentFactory.createElement('img', 'large-image', {
                        src: item.picUrl1,
                        alt: "主图"
                    });
                    
                    const smallImages = ComponentFactory.createElement('div', 'small-images');
                    
                    const img2 = ComponentFactory.createElement('img', null, {
                        src: item.picUrl2,
                        alt: "图片2"
                    });
                    
                    const img3 = ComponentFactory.createElement('img', null, {
                        src: item.picUrl3,
                        alt: "图片3"
                    });
                    
                    smallImages.appendChild(img2);
                    smallImages.appendChild(img3);
                    imagesContainer.appendChild(largeImage);
                    imagesContainer.appendChild(smallImages);
                }
                
                imageItem.appendChild(title);
                imageItem.appendChild(imagesContainer);
                
                return imageItem;
            },

            // 评论Item
            createCommentItem: (item) => {
                const commentItem = ComponentFactory.createElement('div', 'comment-item');
                
                const header = ComponentFactory.createElement('div', 'comment-header');
                
                const avatar = ComponentFactory.createElement('img', 'comment-avatar', {
                    src: item.avatarUrl,
                    alt: "用户头像"
                });
                
                const userInfo = ComponentFactory.createElement('div', 'comment-user-info');
                const username = ComponentFactory.createElement('div', 'comment-username', {
                    textContent: item.username
                });
                
                const time = ComponentFactory.createElement('div', 'comment-time', {
                    textContent: item.commentTime
                });
                
                const content = ComponentFactory.createElement('div', 'comment-content', {
                    textContent: item.commentContent
                });
                
                userInfo.appendChild(username);
                userInfo.appendChild(time);
                header.appendChild(avatar);
                header.appendChild(userInfo);
                commentItem.appendChild(header);
                commentItem.appendChild(content);
                
                return commentItem;
            },

            // 头部标题
            createHeaderTitle: (title) => {
                return ComponentFactory.createElement('div', 'header-title', {
                    textContent: title
                });
            }
        };

        // 状态管理
        const StateManager = {
            data: {
                cardTitle: "Widget卡片标题",
                bannerData: {
                    picUrl: "https://picsum.photos/600/300?random=100",
                    newsTitle: "今日热点资讯",
                    description: "汇聚最新、最热、最有价值的信息"
                },
                hotComments: [
                    {
                        avatarUrl: "https://cdn-jdo-test.jidouauto.com/jdoplugin/pic/test/1bd77297-af68-4cd5-beec-9354518a8da7.png",
                        username: "科技爱好者",
                        commentTime: "2小时前",
                        commentContent: "这篇文章写得非常深入，对AI在医疗领域的应用分析得很透彻，期待看到更多相关报道！"
                    },
                    {
                        avatarUrl: "https://cdn-jdo-test.jidouauto.com/jdoplugin/pic/test/5bf5e69e-d5a0-43b4-acf2-58693ac1ed3c.jpg",
                        username: "环保达人",
                        commentTime: "3小时前",
                        commentContent: "气候变化确实是我们这个时代最大的挑战，希望各国能够真正行动起来，保护我们的地球。"
                    },
                    {
                        avatarUrl: "https://cdn-jdo-test.jidouauto.com/jdoplugin/pic/test/8ec2baeb-c29c-4a2c-84a1-30b793bd176a.jpg",
                        username: "电影迷",
                        commentTime: "5小时前",
                        commentContent: "这部电影的视觉效果太震撼了，剧情也很紧凑，强烈推荐大家去看！"
                    }
                ]
            },
            
            // 更新卡片标题和banner
            updateCardTitleAndBanner: function(data) {
                if (!data) return;
                
                if (data.title && data.title !== this.data.cardTitle) {
                    this.data.cardTitle = data.title || this.data.cardTitle;
                    this.data.bannerData = {
                        picUrl: data.coverurl || this.data.bannerData.picUrl,
                        newsTitle: data.title || this.data.bannerData.newsTitle,
                        description: data.subtitle || this.data.bannerData.description
                    };
                    
                    // 触发重新渲染
                    this.renderNewsCard();
                }
            },
            
            // 获取评论数据
            fetchCommentData: function() {
                try {
                    // 设置banner和cardTitle从hotComments获取，取第一个值
                    this.data.cardTitle = this.data.hotComments[0].username;
                    this.data.bannerData = {
                        picUrl: this.data.hotComments[0].avatarUrl,
                        newsTitle: this.data.hotComments[0].username,
                        description: this.data.hotComments[0].commentContent
                    };
                    
                    // 触发重新渲染
                    this.renderNewsCard();
                } catch (err) {
                    console.error('获取评论数据失败:', err);
                }
            },
            
            // 渲染新闻卡片
            renderNewsCard: function() {
                const root = document.getElementById('root');
                root.innerHTML = '';
                
                const app = ComponentFactory.createElement('div', 'app');
                const newsCard = ComponentFactory.createElement('div', 'news-card');
                
                // 头部标题区域
                const headerTitle = ComponentFactory.createHeaderTitle(this.data.cardTitle);
                newsCard.appendChild(headerTitle);
                
                // 封面Banner
                const bannerItem = ComponentFactory.createNewsBannerItem(this.data.bannerData);
                newsCard.appendChild(bannerItem);
                
                // 精彩评论分区
                const commentsSection = ComponentFactory.createElement('div', null, {
                    style: 'padding: 20px;'
                });
                
                const commentsTitle = ComponentFactory.createElement('h3', null, {
                    style: 'font-size: 18px; font-weight: 600; margin-bottom: 16px; color: var(--text-primary);',
                    textContent: '💭 精彩评论'
                });
                
                commentsSection.appendChild(commentsTitle);
                
                // 添加评论项
                this.data.hotComments.forEach(comment => {
                    const commentItem = ComponentFactory.createCommentItem(comment);
                    commentsSection.appendChild(commentItem);
                });
                
                newsCard.appendChild(commentsSection);
                app.appendChild(newsCard);
                root.appendChild(app);
            }
        };

        // 初始化应用
        document.addEventListener('DOMContentLoaded', () => {
            StateManager.fetchCommentData();
        });
    <\/script>
</body>

</html>
`,wP=`
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>视频推荐卡片 - 纯JavaScript版本</title>
    <style>
        /* CSS变量系统 - 动态参数控制 */
        :root {
            /* 亮色模式 */
            --text-primary: #262626;
            --text-secondary: #8c8c8c;
            --border-color: #f0f0f0;
            --bg-color: #ffffff;
            --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            --border-radius: 8px;
            --spacing: 16px;
            --img-bg-color: #eee; 
            --hover-bg-color: #fafafa;
            --star-color: #faad14;
            --mask-color: rgba(0, 0, 0, 0.7);
            --mask-text-color: #fff;
            --star-gray-color: #ddd;
            --video-play-icon-color: #fff;
            --video-play-icon-bg-color: rgba(0, 0, 0, 0.5);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            color: var(--text-primary);
            line-height: 1.6;
        }

        .app {
            width: 700px;
            margin: 0 auto;
        }

        .header-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            padding: 20px;
        }

        .news-card {
            background: var(--bg-color);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            overflow: hidden;
            margin-bottom: 20px;
        }

        /* 新闻Banner样式 */
        .banner-item {
            position: relative;
            height: 200px;
            overflow: hidden;
            cursor: pointer;
            margin: 0 20px;
            border-radius: 10px;
        }

        .banner-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            background-color: var(--img-bg-color);
        }

        .banner-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, var(--mask-color));
            color: var(--mask-text-color);
            padding: 20px;
        }

        .banner-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 1.3;
        }

        .banner-desc {
            font-size: 14px;
            opacity: 0.9;
            line-height: 1.4;
        }

        /* 视频Banner样式 */
        .video-banner-item {
            cursor: pointer;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .video-banner-cover {
            width: 100%;
            height: 180px;
            object-fit: cover;
            position: relative;
            background-color: var(--img-bg-color);
        }

        .video-play-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
            background: var(--video-play-icon-bg-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--video-play-icon-color);
            font-size: 24px;
        }

        .video-banner-title {
            padding: 16px;
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            line-height: 1.4;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .app {
                width: 100%;
            }

            .banner-item {
                height: 160px;
            }

            .banner-overlay {
                padding: 16px;
            }

            .banner-title {
                font-size: 16px;
            }
            
            .video-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
            }
        }
    </style>
</head>

<body>
    <div id="root"></div>

    <script>
        // 组件工厂函数
        const ComponentFactory = {
            // 创建元素辅助函数
            createElement: (tag, className, attributes = {}) => {
                const element = document.createElement(tag);
                if (className) element.className = className;
                
                for (const [key, value] of Object.entries(attributes)) {
                    if (key === 'textContent') {
                        element.textContent = value;
                    } else if (key === 'innerHTML') {
                        element.innerHTML = value;
                    } else if (key.startsWith('on')) {
                        element.addEventListener(key.substring(2).toLowerCase(), value);
                    } else if (key === 'style') {
                        Object.assign(element.style, value);
                    } else {
                        element.setAttribute(key, value);
                    }
                }
                
                return element;
            },

            // 新闻bannerItem（大图+图底部标题+描述）
            createNewsBannerItem: (item) => {
                const bannerItem = ComponentFactory.createElement('div', 'banner-item');
                
                const image = ComponentFactory.createElement('img', 'banner-image', {
                    src: item.picUrl,
                    alt: item.newsTitle
                });
                
                const overlay = ComponentFactory.createElement('div', 'banner-overlay');
                const title = ComponentFactory.createElement('div', 'banner-title', {
                    textContent: item.newsTitle
                });
                
                const desc = ComponentFactory.createElement('div', 'banner-desc', {
                    textContent: item.description || '点击查看详情'
                });
                
                overlay.appendChild(title);
                overlay.appendChild(desc);
                bannerItem.appendChild(image);
                bannerItem.appendChild(overlay);
                
                return bannerItem;
            },

            // 视频bannerItem（上封面,封面为宽度占满，下标题）
            createVideoBannerItem: (item) => {
                const videoBannerItem = ComponentFactory.createElement('div', 'video-banner-item');
                
                const coverContainer = ComponentFactory.createElement('div', null, {
                    style: { position: 'relative' }
                });
                
                const cover = ComponentFactory.createElement('img', 'video-banner-cover', {
                    src: item.picUrl,
                    alt: item.newsTitle
                });
                
                const playIcon = ComponentFactory.createElement('div', 'video-play-icon', {
                    textContent: '▶'
                });
                
                const title = ComponentFactory.createElement('div', 'video-banner-title', {
                    textContent: item.newsTitle
                });
                
                coverContainer.appendChild(cover);
                coverContainer.appendChild(playIcon);
                videoBannerItem.appendChild(coverContainer);
                videoBannerItem.appendChild(title);
                
                return videoBannerItem;
            },

            // 头部标题
            createHeaderTitle: (title) => {
                return ComponentFactory.createElement('div', 'header-title', {
                    textContent: title
                });
            }
        };

        // 状态管理
        const StateManager = {
            data: {
                cardTitle: "Widget卡片标题",
                bannerData: {
                    picUrl: "https://picsum.photos/600/300?random=100",
                    newsTitle: "今日热点资讯",
                    description: "汇聚最新、最热、最有价值的信息"
                },
                videoRecommendations: [
                    {
                        picUrl: "https://cdn-jdo-test.jidouauto.com/jdoplugin/pic/test/cae2ec31-5503-4322-8376-730bb4fb4771.png",
                        newsTitle: "2024年科技趋势预测：AI、量子计算、元宇宙"
                    },
                    {
                        picUrl: "https://cdn-jdo-test.jidouauto.com/jdoplugin/pic/test/82381e2c-03f2-44db-826d-233b691443d2.png",
                        newsTitle: "美食制作教程：米其林三星主厨教你做经典法餐"
                    },
                    {
                        picUrl: "https://cdn-jdo-test.jidouauto.com/jdoplugin/pic/test/8ad18217-b6b5-4260-8920-97699ab1fd7b.png",
                        newsTitle: "旅行vlog：探索神秘的亚马逊雨林深处"
                    }
                ]
            },
            
            // 获取视频数据
            fetchVideoData: function() {
                try {
                    // 设置banner和cardTitle从videoRecommendations获取，取第一个值
                    this.data.cardTitle = this.data.videoRecommendations[0].newsTitle;
                    this.data.bannerData = {
                        picUrl: this.data.videoRecommendations[0].picUrl,
                        newsTitle: this.data.videoRecommendations[0].newsTitle,
                        description: "精彩视频内容推荐"
                    };
                    
                    // 触发重新渲染
                    this.renderNewsCard();
                } catch (err) {
                    console.error('获取视频数据失败:', err);
                }
            },
            
            // 渲染新闻卡片
            renderNewsCard: function() {
                const root = document.getElementById('root');
                root.innerHTML = '';
                
                const app = ComponentFactory.createElement('div', 'app');
                const newsCard = ComponentFactory.createElement('div', 'news-card');
                
                // 头部标题区域
                const headerTitle = ComponentFactory.createHeaderTitle(this.data.cardTitle);
                newsCard.appendChild(headerTitle);
                
                // 封面Banner
                const bannerItem = ComponentFactory.createNewsBannerItem(this.data.bannerData);
                newsCard.appendChild(bannerItem);
                
                // 视频推荐分区
                const videosSection = ComponentFactory.createElement('div', null, {
                    style: {
                        padding: '20px', 
                        borderBottom: '1px solid var(--border-color)'
                    }
                });
                
                const videosTitle = ComponentFactory.createElement('h3', null, {
                    style: {
                        fontSize: '18px', 
                        fontWeight: '600', 
                        marginBottom: '16px', 
                        color: 'var(--text-primary)'
                    },
                    textContent: '📹 视频推荐'
                });
                
                videosSection.appendChild(videosTitle);
                
                // 创建视频网格
                const videoGrid = ComponentFactory.createElement('div', null, {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '16px'
                    }
                });
                
                // 添加视频项
                this.data.videoRecommendations.forEach(video => {
                    const videoItem = ComponentFactory.createVideoBannerItem(video);
                    videoGrid.appendChild(videoItem);
                });
                
                videosSection.appendChild(videoGrid);
                newsCard.appendChild(videosSection);
                app.appendChild(newsCard);
                root.appendChild(app);
            }
        };

        // 初始化应用
        document.addEventListener('DOMContentLoaded', () => {
            StateManager.fetchVideoData();
        });
    <\/script>
</body>

</html>
`,xP=`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>纯JS新闻卡片模板 - 电影合集</title>
    <style>
        /* CSS变量系统 - 动态参数控制 */
        :root {
            /* 亮色模式 */
            --text-primary: #262626;
            --text-secondary: #8c8c8c;
            --border-color: #f0f0f0;
            --bg-color: #ffffff;
            --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            --border-radius: 8px;
            --spacing: 16px;
            --img-bg-color: #eee; 
            --hover-bg-color: #fafafa;
            --star-color: #faad14;
            --mask-color: rgba(0, 0, 0, 0.7);
            --mask-text-color: #fff;
            --star-gray-color: #ddd;
            --video-play-icon-color: #fff;
            --video-play-icon-bg-color: rgba(0, 0, 0, 0.5);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            color: var(--text-primary);
            line-height: 1.6;
        }

        .app {
            width: 700px;
            margin: 0 auto;
        }

        .header-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            padding: 20px;
        }

        .news-card {
            background: var(--bg-color);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            overflow: hidden;
            margin-bottom: 20px;
        }

        /* 新闻Banner样式 */
        .banner-item {
            position: relative;
            height: 200px;
            overflow: hidden;
            cursor: pointer;
            margin: 0 20px;
            border-radius: 10px;
        }

        .banner-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            background-color: var(--img-bg-color);
        }

        .banner-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, var(--mask-color));
            color: var(--mask-text-color);
            padding: 20px;
        }

        .banner-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 1.3;
        }

        .banner-desc {
            font-size: 14px;
            opacity: 0.9;
            line-height: 1.4;
        }

        /* 移动端视频Item样式 */
        .movie-video-item {
            display: flex;
            padding: var(--spacing);
            border-bottom: 1px solid var(--border-color);
            cursor: pointer;
        }

        .movie-video-item:hover {
            background-color: var(--hover-bg-color);
        }

        .movie-video-cover {
            width: 160px;
            height: 200px;
            object-fit: cover;
            border-radius: 6px;
            margin-right: var(--spacing);
            flex-shrink: 0;
            background-color: var(--img-bg-color);
        }

        .movie-video-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 8px 0;
        }

        .movie-video-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
            line-height: 1.4;
            display: -webkit-box;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .movie-video-tag {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            font-size: 12px;
            color: var(--text-secondary);
        }

        .movie-video-tag::before {
            content: "🏷️";
            margin-right: 6px;
            font-size: 14px;
        }

        .movie-video-tag .year-separator {
            margin: 0 8px;
            color: var(--text-secondary);
            font-weight: 300;
        }

        .movie-video-rating-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }

        .movie-video-rating {
            display: flex;
            align-items: center;
            gap: 2px;
        }

        .movie-video-rating .star {
            font-size: 18px;
            color: var(--text-secondary);
            transition: color 0.2s ease;
        }

        .movie-video-rating .star.filled {
            color: var(--star-color);
        }

        .movie-video-rating .star.half {
            background: linear-gradient(90deg, var(--star-color) 50%, var(--star-gray-color) 50%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .movie-video-rating .rating-text {
            margin-left: 8px;
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .movie-video-meta {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: var(--text-secondary);
        }

        .movie-video-meta::before {
            content: "📅";
            margin-right: 6px;
            font-size: 14px;
        }

        .movie-video-desc {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
            display: -webkit-box;
            line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 8px;
        }

        .star {
            color: var(--star-color);
            margin-right: 2px;
        }

        /* 加载状态样式 */
        .loading-container {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
            text-align: center;
            color: var(--text-secondary);
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .app {
                width: 100%;
            }

            .banner-item {
                height: 160px;
            }

            .banner-overlay {
                padding: 16px;
            }

            .banner-title {
                font-size: 16px;
            }
            
            .movie-video-item {
                flex-direction: column;
            }
            
            .movie-video-cover {
                width: 100%;
                margin-right: 0;
                margin-bottom: 12px;
            }
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script>
        // 创建DOM元素的辅助函数
        function createElement(tag, className, attributes = {}, children = []) {
            const element = document.createElement(tag);
            if (className) element.className = className;
            
            // 设置属性
            for (const [key, value] of Object.entries(attributes)) {
                if (key === 'style' && typeof value === 'object') {
                    Object.assign(element.style, value);
                } else {
                    element.setAttribute(key, value);
                }
            }
            
            // 添加子元素
            if (typeof children === 'string') {
                element.textContent = children;
            } else if (Array.isArray(children)) {
                children.forEach(child => {
                    if (typeof child === 'string') {
                        element.appendChild(document.createTextNode(child));
                    } else if (child) {
                        element.appendChild(child);
                    }
                });
            }
            
            return element;
        }

        // 新闻bannerItem（大图+图底部标题+描述）
        function createNewsBannerItem(item) {
            const bannerItem = createElement('div', 'banner-item');
            
            const image = createElement('img', 'banner-image', {
                src: item.picUrl,
                alt: item.newsTitle
            });
            
            const overlay = createElement('div', 'banner-overlay');
            const title = createElement('div', 'banner-title', {}, item.newsTitle);
            const desc = createElement('div', 'banner-desc', {}, item.description || '点击查看详情');
            
            overlay.appendChild(title);
            overlay.appendChild(desc);
            bannerItem.appendChild(image);
            bannerItem.appendChild(overlay);
            
            return bannerItem;
        }

        // 电影或唱片Item（左封面，右边为标题+描述+评分等信息）
        function createMovieVideoNewsItem(item) {
            // 根据评分计算星星显示状态（5分制）
            function renderStars(rating) {
                const starsContainer = createElement('div', 'movie-video-rating');
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 !== 0;
                
                // 渲染完整的星星
                for (let i = 0; i < fullStars; i++) {
                    const star = createElement('span', 'star filled', {}, '★');
                    starsContainer.appendChild(star);
                }
                
                // 渲染半星（如果有）
                if (hasHalfStar) {
                    const star = createElement('span', 'star half', {}, '★');
                    starsContainer.appendChild(star);
                }
                
                // 渲染空星星
                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                for (let i = 0; i < emptyStars; i++) {
                    const star = createElement('span', 'star', {}, '★');
                    starsContainer.appendChild(star);
                }
                
                // 添加评分文本
                const ratingText = createElement('span', 'rating-text', {}, item.rating + '/5');
                starsContainer.appendChild(ratingText);
                
                return starsContainer;
            }

            const movieVideoItem = createElement('div', 'movie-video-item');
            
            const cover = createElement('img', 'movie-video-cover', {
                src: item.picUrl,
                alt: item.newsTitle
            });
            
            const content = createElement('div', 'movie-video-content');
            const contentTop = createElement('div', 'movie-video-content-top');
            
            const title = createElement('div', 'movie-video-title', {}, item.newsTitle);
            
            const tag = createElement('div', 'movie-video-tag');
            const tagText = document.createTextNode(item.tag);
            const yearSeparator = createElement('span', 'year-separator', {}, '•');
            const pubTime = document.createTextNode(item.pubTime);
            
            tag.appendChild(tagText);
            tag.appendChild(yearSeparator);
            tag.appendChild(pubTime);
            
            const ratingSection = createElement('div', 'movie-video-rating-section');
            const stars = renderStars(parseFloat(item.rating));
            ratingSection.appendChild(stars);
            
            const desc = createElement('div', 'movie-video-desc', {}, item.description);
            
            contentTop.appendChild(title);
            contentTop.appendChild(tag);
            contentTop.appendChild(ratingSection);
            contentTop.appendChild(desc);
            
            content.appendChild(contentTop);
            
            movieVideoItem.appendChild(cover);
            movieVideoItem.appendChild(content);
            
            return movieVideoItem;
        }

        function createHeaderTitle(title) {
            return createElement('div', 'header-title', {}, title);
        }

        // 主新闻卡片组件
        function createNewsCard() {
            // 写死的数据用于展示UI效果
            let mockData = {
                cardTitle: "Widget卡片标题",
                bannerData: {
                    picUrl: "https://picsum.photos/600/300?random=100",
                    newsTitle: "今日热点资讯",
                    description: "汇聚最新、最热、最有价值的信息"
                },
                // 电影合集数据
                movieCollection: [
                    {
                        picUrl: "https://picsum.photos/300/400?random=10",
                        newsTitle: "星际穿越",
                        tag: "科幻 剧情 悬疑",
                        pubTime: "2024-01-15",
                        rating: "4.7",
                        description: "诺兰导演的科幻经典之作,豆瓣评分9.3"
                    },
                    {
                        picUrl: "https://picsum.photos/300/400?random=11", 
                        newsTitle: "盗梦空间",
                        tag: "科幻 剧情 悬疑",
                        pubTime: "2024-01-14",
                        rating: "4.5",
                        description: "梦境与现实的边界探索,豆瓣评分9.0"
                    },
                    {
                        picUrl: "https://picsum.photos/300/400?random=12",
                        newsTitle: "泰坦尼克号",
                        tag: "爱情 剧情 经典",
                        pubTime: "2024-01-13", 
                        rating: "4.8",
                        description: "永恒的经典爱情故事,豆瓣评分9.4"
                    }
                ]
            };

            const newsCard = createElement('div', 'news-card');
            
            // 头部标题区域
            newsCard.appendChild(createHeaderTitle(mockData.cardTitle));
            
            // 封面Banner
            newsCard.appendChild(createNewsBannerItem(mockData.bannerData));
            
            // 电影合集分区
            const movieSection = createElement('div', '', {
                style: {padding: '20px', borderBottom: '1px solid var(--border-color)'}
            });
            
            const movieTitle = createElement('h3', '', {
                style: {fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)'}
            }, '🎬 电影合集');
            
            movieSection.appendChild(movieTitle);
            
            // 添加加载状态
            const loadingContainer = createElement('div', 'loading-container', {}, '加载中...');
            movieSection.appendChild(loadingContainer);
            
            newsCard.appendChild(movieSection);
            
            // 获取电影数据的函数
            async function fetchMovieData() {
                try {
                    // 这里可以替换为你的实际API接口
                    const response = await fetch('https://plugin-test.aijidou.com/plugin/widget/testMovie', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if (!response.ok) {
                        throw new Error('HTTP error! status: ' + response.status);
                    }

                    const data = await response.json();

                    // 将接口数据转换为组件需要的格式
                    if (data && data.data) {
                        const apiData = data.data;
                        
                        // 更新卡片标题和Banner
                        if (apiData.title) {
                            const headerTitle = newsCard.querySelector('.header-title');
                            if (headerTitle) {
                                headerTitle.textContent = apiData.title;
                            }
                            
                            // 更新Banner
                            const bannerImage = newsCard.querySelector('.banner-image');
                            const bannerTitle = newsCard.querySelector('.banner-title');
                            const bannerDesc = newsCard.querySelector('.banner-desc');
                            
                            if (bannerImage && apiData.coverurl) bannerImage.src = apiData.coverurl;
                            if (bannerTitle && apiData.title) bannerTitle.textContent = apiData.title;
                            if (bannerDesc && apiData.subtitle) bannerDesc.textContent = apiData.subtitle;
                        }
                        
                        // 移除加载状态
                        if (loadingContainer.parentNode) {
                            loadingContainer.parentNode.removeChild(loadingContainer);
                        }
                        
                        // 添加电影数据
                        if (apiData.infolist && Array.isArray(apiData.infolist)) {
                            apiData.infolist.forEach(movie => {
                                movieSection.appendChild(createMovieVideoNewsItem(movie));
                            });
                        } else {
                            // 如果没有获取到数据，使用默认数据
                            mockData.movieCollection.forEach(movie => {
                                movieSection.appendChild(createMovieVideoNewsItem(movie));
                            });
                        }
                    }
                } catch (err) {
                    console.error('获取电影数据失败:', err);
                    // 移除加载状态
                    if (loadingContainer.parentNode) {
                        loadingContainer.parentNode.removeChild(loadingContainer);
                    }
                    
                    // 使用默认数据
                    mockData.movieCollection.forEach(movie => {
                        movieSection.appendChild(createMovieVideoNewsItem(movie));
                    });
                }
            }

            // 组件挂载时获取数据
            fetchMovieData();
            
            return newsCard;
        }

        // 主应用组件
        function createApp() {
            const app = createElement('div', 'app');
            app.appendChild(createNewsCard());
            return app;
        }

        // 初始化应用
        document.addEventListener('DOMContentLoaded', function() {
            const root = document.getElementById('root');
            root.appendChild(createApp());
        });
    <\/script>
</body>
</html>
`,CP=[yP,bP,wP,xP],qv=t1("chat/sendStreamMessageToAI",async(e,{dispatch:t,rejectWithValue:n})=>{try{const r=Date.now();t(A1(r));const o=fP({message:e},i=>{t(OP({id:r,content:i.content}))},i=>{console.error("流式聊天错误:",i),t(TP({id:r,error:i.message||"聊天过程中出现错误"}))},()=>{t(RP(r))});return{messageId:r,controller:o}}catch{return n("发送流式消息失败")}}),zo=t1("chat/sendMessageToAI",async(e,{dispatch:t,rejectWithValue:n})=>{try{const r=`${Date.now()}${Math.random()*100}`;t(A1(r)),await new Promise(i=>setTimeout(i,800)),t(Nc({id:r,content:"正在分析需求..."})),await new Promise(i=>setTimeout(i,1e3)),t(Nc({id:r,content:"正在生成内容..."}));let o="";if(e.toLowerCase().includes("widget")||e.toLowerCase().includes("卡片"))try{let i=0;e.includes("新闻")&&(i=0),e.includes("电影")&&(i=1),e.includes("视频")&&(i=2),e.includes("评论")&&(i=3),await uP({description:e})?(t(Nc({id:r,content:"处理完成！"})),o={type:"widget",content:CP[i]},t(hP(o))):o={type:"widget",content:await Ic.getDefaultTemplate()}}catch(i){console.error("获取Widget模板失败:",i),o={type:"widget",content:await Ic.getDefaultTemplate()}}else if(e.toLowerCase().includes("car")||e.toLowerCase().includes("车控")){const i=await Ic.getCarControlTemplate(),a=new Blob([i],{type:"text/html"});o={type:"widget",content:URL.createObjectURL(a)}}else o={type:"text",content:`我收到了您的消息："${e}"。这是一个AI回复示例。您可以尝试询问"请生成一个新闻Widget卡片"、"请生成一个按钮Widget"或"请生成一个Widget卡片"来查看不同的Widget效果。`};return o}catch{return n("发送消息失败")}}),SP={messages:[],isLoading:!1,error:null,currentInput:"",streamControllers:{}},P1=ym({name:"chat",initialState:SP,reducers:{setCurrentInput:(e,t)=>{e.currentInput=t.payload},addUserMessage:(e,t)=>{const n={id:Date.now(),type:"user",content:t.payload,timestamp:new Date().toISOString()};e.messages.push(n)},addAIThinkingMessage:(e,t)=>{const n={id:t.payload,type:"ai",messageType:"thinking",content:"AI正在思考...",isStreaming:!0,timestamp:new Date().toISOString()};e.messages.push(n)},updateAIThinkingMessage:(e,t)=>{const n=e.messages.find(r=>r.id===t.payload.id);n&&(n.content=t.payload.content)},updateAIResponseMessage:(e,t)=>{const n=e.messages.find(r=>r.id===t.payload.id);n&&(n.messageType="response",n.content+=t.payload.content)},updateAIErrorMessage:(e,t)=>{const n=e.messages.find(r=>r.id===t.payload.id);n&&(n.messageType="error",n.content=t.payload.error,n.isStreaming=!1)},completeAIResponse:(e,t)=>{const n=e.messages.find(r=>r.id===t.payload);n&&(n.isStreaming=!1)},addStreamController:(e,t)=>{e.streamControllers[t.payload.messageId]=t.payload.controller},removeStreamController:(e,t)=>{delete e.streamControllers[t.payload]},clearError:e=>{e.error=null},clearChat:e=>{e.messages=[e.messages[0]]}},extraReducers:e=>{e.addCase(zo.pending,t=>{t.isLoading=!0,t.error=null}).addCase(zo.fulfilled,(t,n)=>{t.isLoading=!1;const r=t.messages.findLast(o=>o.messageType==="thinking");if(r)r.content=n.payload.content,r.messageType=n.payload.type,r.isStreaming=!1;else{const o={id:Date.now(),type:"ai",content:n.payload.content,messageType:n.payload.type,timestamp:new Date().toISOString()};t.messages.push(o)}}).addCase(zo.rejected,(t,n)=>{t.isLoading=!1,t.error=n.payload;const r=t.messages.findLast(o=>o.messageType==="thinking");r&&(r.content=n.payload||"发送消息失败",r.messageType="error",r.isStreaming=!1)}).addCase(qv.fulfilled,(t,n)=>{t.error=null,t.streamControllers[n.payload.messageId]=n.payload.controller}).addCase(qv.rejected,(t,n)=>{t.error=n.payload})}}),{setCurrentInput:EP,addUserMessage:vf,addAIThinkingMessage:A1,updateAIThinkingMessage:Nc,updateAIResponseMessage:OP,updateAIErrorMessage:TP,completeAIResponse:RP}=P1.actions,PP=P1.reducer,AP={theme:"dark",sidebarOpen:!1,currentPage:"chat",loadingStates:{chat:!1,voice:!1,widget:!1}},$P=ym({name:"ui",initialState:AP,reducers:{setTheme:(e,t)=>{e.theme=t.payload},toggleTheme:e=>{e.theme=e.theme==="light"?"dark":"light"},setSidebarOpen:(e,t)=>{e.sidebarOpen=t.payload},toggleSidebar:e=>{e.sidebarOpen=!e.sidebarOpen},setCurrentPage:(e,t)=>{e.currentPage=t.payload},setLoadingState:(e,t)=>{const{key:n,value:r}=t.payload;e.loadingStates.hasOwnProperty(n)&&(e.loadingStates[n]=r)}}}),IP=$P.reducer,FP=wT({reducer:{chat:PP,widget:gP,ui:IP},middleware:e=>e({serializableCheck:{ignoredActions:["voice/setRecognition"],ignoredPaths:["voice.recognition"]}})});var $1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(i=o(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var s in i)t.call(i,s)&&i[s]&&(a=o(a,s));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})($1);var _P=$1.exports;const ne=up(_P);var jP=Symbol.for("react.element"),NP=Symbol.for("react.transitional.element"),kP=Symbol.for("react.fragment");function I1(e){return e&&ee(e)==="object"&&(e.$$typeof===jP||e.$$typeof===NP)&&e.type===kP}function vl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[];return W.Children.forEach(e,function(r){r==null&&!t.keepEmpty||(Array.isArray(r)?n=n.concat(vl(r)):I1(r)&&r.props?n=n.concat(vl(r.props.children,t)):n.push(r))}),n}var gf={},MP=function(t){};function zP(e,t){}function LP(e,t){}function DP(){gf={}}function F1(e,t,n){!t&&!gf[n]&&(e(!1,n),gf[n]=!0)}function Ht(e,t){F1(zP,e,t)}function BP(e,t){F1(LP,e,t)}Ht.preMessage=MP;Ht.resetWarned=DP;Ht.noteOnce=BP;function Kv(e){return e instanceof HTMLElement||e instanceof SVGElement}function VP(e){return e&&ee(e)==="object"&&Kv(e.nativeElement)?e.nativeElement:Kv(e)?e:null}function Is(e){var t=VP(e);if(t)return t;if(e instanceof W.Component){var n;return(n=ef.findDOMNode)===null||n===void 0?void 0:n.call(ef,e)}return null}var _1={exports:{}},ye={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em=Symbol.for("react.element"),Om=Symbol.for("react.portal"),xu=Symbol.for("react.fragment"),Cu=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Eu=Symbol.for("react.provider"),Ou=Symbol.for("react.context"),HP=Symbol.for("react.server_context"),Tu=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Pu=Symbol.for("react.suspense_list"),Au=Symbol.for("react.memo"),$u=Symbol.for("react.lazy"),UP=Symbol.for("react.offscreen"),j1;j1=Symbol.for("react.module.reference");function ln(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Em:switch(e=e.type,e){case xu:case Su:case Cu:case Ru:case Pu:return e;default:switch(e=e&&e.$$typeof,e){case HP:case Ou:case Tu:case $u:case Au:case Eu:return e;default:return t}}case Om:return t}}}ye.ContextConsumer=Ou;ye.ContextProvider=Eu;ye.Element=Em;ye.ForwardRef=Tu;ye.Fragment=xu;ye.Lazy=$u;ye.Memo=Au;ye.Portal=Om;ye.Profiler=Su;ye.StrictMode=Cu;ye.Suspense=Ru;ye.SuspenseList=Pu;ye.isAsyncMode=function(){return!1};ye.isConcurrentMode=function(){return!1};ye.isContextConsumer=function(e){return ln(e)===Ou};ye.isContextProvider=function(e){return ln(e)===Eu};ye.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Em};ye.isForwardRef=function(e){return ln(e)===Tu};ye.isFragment=function(e){return ln(e)===xu};ye.isLazy=function(e){return ln(e)===$u};ye.isMemo=function(e){return ln(e)===Au};ye.isPortal=function(e){return ln(e)===Om};ye.isProfiler=function(e){return ln(e)===Su};ye.isStrictMode=function(e){return ln(e)===Cu};ye.isSuspense=function(e){return ln(e)===Ru};ye.isSuspenseList=function(e){return ln(e)===Pu};ye.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xu||e===Su||e===Cu||e===Ru||e===Pu||e===UP||typeof e=="object"&&e!==null&&(e.$$typeof===$u||e.$$typeof===Au||e.$$typeof===Eu||e.$$typeof===Ou||e.$$typeof===Tu||e.$$typeof===j1||e.getModuleId!==void 0)};ye.typeOf=ln;_1.exports=ye;var kc=_1.exports;function Tm(e,t,n){var r=v.useRef({});return(!("value"in r.current)||n(r.current.condition,t))&&(r.current.value=e(),r.current.condition=t),r.current.value}var WP=Number(v.version.split(".")[0]),N1=function(t,n){typeof t=="function"?t(n):ee(t)==="object"&&t&&"current"in t&&(t.current=n)},di=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.filter(Boolean);return o.length<=1?o[0]:function(i){n.forEach(function(a){N1(a,i)})}},k1=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Tm(function(){return di.apply(void 0,n)},n,function(o,i){return o.length!==i.length||o.every(function(a,s){return a!==i[s]})})},Rm=function(t){var n,r;if(!t)return!1;if(M1(t)&&WP>=19)return!0;var o=kc.isMemo(t)?t.type.type:t.type;return!(typeof o=="function"&&!((n=o.prototype)!==null&&n!==void 0&&n.render)&&o.$$typeof!==kc.ForwardRef||typeof t=="function"&&!((r=t.prototype)!==null&&r!==void 0&&r.render)&&t.$$typeof!==kc.ForwardRef)};function M1(e){return v.isValidElement(e)&&!I1(e)}var Pm=function(t){if(t&&M1(t)){var n=t;return n.props.propertyIsEnumerable("ref")?n.props.ref:n.ref}return null},yf=v.createContext(null);function GP(e){var t=e.children,n=e.onBatchResize,r=v.useRef(0),o=v.useRef([]),i=v.useContext(yf),a=v.useCallback(function(s,l,u){r.current+=1;var c=r.current;o.current.push({size:s,element:l,data:u}),Promise.resolve().then(function(){c===r.current&&(n==null||n(o.current),o.current=[])}),i==null||i(s,l,u)},[n,i]);return v.createElement(yf.Provider,{value:a},t)}var z1=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(o,i){return o[0]===n?(r=i,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var a=i[o];n.call(r,a[1],a[0])}},t}()}(),bf=typeof window<"u"&&typeof document<"u"&&window.document===document,gl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),qP=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(gl):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),KP=2;function QP(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&s()}function a(){qP(i)}function s(){var l=Date.now();if(n){if(l-o<KP)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=l}return s}var XP=20,JP=["top","right","bottom","left","width","height","size","weight"],YP=typeof MutationObserver<"u",ZP=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=QP(this.refresh.bind(this),XP)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!bf||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),YP?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!bf||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=JP.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),L1=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},Jo=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||gl},D1=Iu(0,0,0,0);function yl(e){return parseFloat(e)||0}function Qv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+yl(i)},0)}function e2(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var i=o[r],a=e["padding-"+i];n[i]=yl(a)}return n}function t2(e){var t=e.getBBox();return Iu(0,0,t.width,t.height)}function n2(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return D1;var r=Jo(e).getComputedStyle(e),o=e2(r),i=o.left+o.right,a=o.top+o.bottom,s=yl(r.width),l=yl(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+i)!==t&&(s-=Qv(r,"left","right")+i),Math.round(l+a)!==n&&(l-=Qv(r,"top","bottom")+a)),!o2(e)){var u=Math.round(s+i)-t,c=Math.round(l+a)-n;Math.abs(u)!==1&&(s-=u),Math.abs(c)!==1&&(l-=c)}return Iu(o.left,o.top,s,l)}var r2=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Jo(e).SVGGraphicsElement}:function(e){return e instanceof Jo(e).SVGElement&&typeof e.getBBox=="function"}}();function o2(e){return e===Jo(e).document.documentElement}function i2(e){return bf?r2(e)?t2(e):n2(e):D1}function a2(e){var t=e.x,n=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(i.prototype);return L1(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}function Iu(e,t,n,r){return{x:e,y:t,width:n,height:r}}var s2=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Iu(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=i2(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),l2=function(){function e(t,n){var r=a2(n);L1(this,{target:t,contentRect:r})}return e}(),u2=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new z1,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Jo(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new s2(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Jo(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new l2(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),B1=typeof WeakMap<"u"?new WeakMap:new z1,V1=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=ZP.getInstance(),r=new u2(t,n,this);B1.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){V1.prototype[e]=function(){var t;return(t=B1.get(this))[e].apply(t,arguments)}});var c2=function(){return typeof gl.ResizeObserver<"u"?gl.ResizeObserver:V1}(),ur=new Map;function d2(e){e.forEach(function(t){var n,r=t.target;(n=ur.get(r))===null||n===void 0||n.forEach(function(o){return o(r)})})}var H1=new c2(d2);function f2(e,t){ur.has(e)||(ur.set(e,new Set),H1.observe(e)),ur.get(e).add(t)}function p2(e,t){ur.has(e)&&(ur.get(e).delete(t),ur.get(e).size||(H1.unobserve(e),ur.delete(e)))}function ct(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Xb(r.key),r)}}function dt(e,t,n){return t&&Xv(e.prototype,t),n&&Xv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ha(e,t){return ha=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},ha(e,t)}function Ir(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ha(e,t)}function va(e){return va=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},va(e)}function Am(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Am=function(){return!!e})()}function se(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m2(e,t){if(t&&(ee(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return se(e)}function Fr(e){var t=Am();return function(){var n,r=va(e);if(t){var o=va(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m2(this,n)}}var h2=function(e){Ir(n,e);var t=Fr(n);function n(){return ct(this,n),t.apply(this,arguments)}return dt(n,[{key:"render",value:function(){return this.props.children}}]),n}(v.Component);function v2(e,t){var n=e.children,r=e.disabled,o=v.useRef(null),i=v.useRef(null),a=v.useContext(yf),s=typeof n=="function",l=s?n(o):n,u=v.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),c=!s&&v.isValidElement(l)&&Rm(l),d=c?Pm(l):null,f=k1(d,o),w=function(){var m;return Is(o.current)||(o.current&&ee(o.current)==="object"?Is((m=o.current)===null||m===void 0?void 0:m.nativeElement):null)||Is(i.current)};v.useImperativeHandle(t,function(){return w()});var h=v.useRef(e);h.current=e;var g=v.useCallback(function(b){var m=h.current,p=m.onResize,y=m.data,C=b.getBoundingClientRect(),x=C.width,E=C.height,S=b.offsetWidth,O=b.offsetHeight,R=Math.floor(x),T=Math.floor(E);if(u.current.width!==R||u.current.height!==T||u.current.offsetWidth!==S||u.current.offsetHeight!==O){var I={width:R,height:T,offsetWidth:S,offsetHeight:O};u.current=I;var $=S===Math.round(x)?x:S,_=O===Math.round(E)?E:O,N=j(j({},I),{},{offsetWidth:$,offsetHeight:_});a==null||a(N,b,y),p&&Promise.resolve().then(function(){p(N,b)})}},[]);return v.useEffect(function(){var b=w();return b&&!r&&f2(b,g),function(){return p2(b,g)}},[o.current,r]),v.createElement(h2,{ref:i},c?v.cloneElement(l,{ref:f}):l)}var g2=v.forwardRef(v2),y2="rc-observer-key";function b2(e,t){var n=e.children,r=typeof n=="function"?[n]:vl(n);return r.map(function(o,i){var a=(o==null?void 0:o.key)||"".concat(y2,"-").concat(i);return v.createElement(g2,Je({},e,{key:a,ref:i===0?t:void 0}),o)})}var U1=v.forwardRef(b2);U1.Collection=GP;function wf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function w2(e){if(Array.isArray(e))return wf(e)}function W1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $m(e,t){if(e){if(typeof e=="string")return wf(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wf(e,t):void 0}}function x2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(e){return w2(e)||W1(e)||$m(e)||x2()}var G1=function(t){return+setTimeout(t,16)},q1=function(t){return clearTimeout(t)};typeof window<"u"&&"requestAnimationFrame"in window&&(G1=function(t){return window.requestAnimationFrame(t)},q1=function(t){return window.cancelAnimationFrame(t)});var Jv=0,Im=new Map;function K1(e){Im.delete(e)}var Mn=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Jv+=1;var r=Jv;function o(i){if(i===0)K1(r),t();else{var a=G1(function(){o(i-1)});Im.set(r,a)}}return o(n),r};Mn.cancel=function(e){var t=Im.get(e);return K1(e),q1(t)};function Q1(e){if(Array.isArray(e))return e}function C2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,s=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,o=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}function X1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(e,t){return Q1(e)||C2(e,t)||$m(e,t)||X1()}function ga(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}function Jn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function S2(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}var Yv="data-rc-order",Zv="data-rc-priority",E2="rc-util-key",xf=new Map;function J1(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.mark;return t?t.startsWith("data-")?t:"data-".concat(t):E2}function Fu(e){if(e.attachTo)return e.attachTo;var t=document.querySelector("head");return t||document.body}function O2(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function Fm(e){return Array.from((xf.get(e)||e).children).filter(function(t){return t.tagName==="STYLE"})}function Y1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Jn())return null;var n=t.csp,r=t.prepend,o=t.priority,i=o===void 0?0:o,a=O2(r),s=a==="prependQueue",l=document.createElement("style");l.setAttribute(Yv,a),s&&i&&l.setAttribute(Zv,"".concat(i)),n!=null&&n.nonce&&(l.nonce=n==null?void 0:n.nonce),l.innerHTML=e;var u=Fu(t),c=u.firstChild;if(r){if(s){var d=(t.styles||Fm(u)).filter(function(f){if(!["prepend","prependQueue"].includes(f.getAttribute(Yv)))return!1;var w=Number(f.getAttribute(Zv)||0);return i>=w});if(d.length)return u.insertBefore(l,d[d.length-1].nextSibling),l}u.insertBefore(l,c)}else u.appendChild(l);return l}function Z1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Fu(t);return(t.styles||Fm(n)).find(function(r){return r.getAttribute(J1(t))===e})}function ew(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Z1(e,t);if(n){var r=Fu(t);r.removeChild(n)}}function T2(e,t){var n=xf.get(e);if(!n||!S2(document,n)){var r=Y1("",t),o=r.parentNode;xf.set(e,o),e.removeChild(r)}}function Gr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Fu(n),o=Fm(r),i=j(j({},n),{},{styles:o});T2(r,i);var a=Z1(t,i);if(a){var s,l;if((s=i.csp)!==null&&s!==void 0&&s.nonce&&a.nonce!==((l=i.csp)===null||l===void 0?void 0:l.nonce)){var u;a.nonce=(u=i.csp)===null||u===void 0?void 0:u.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var c=Y1(e,i);return c.setAttribute(J1(i),t),c}function It(e,t){if(e==null)return{};var n,r,o=FE(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Cf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function o(i,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,l=r.has(i);if(Ht(!l,"Warning: There may be circular references"),l)return!1;if(i===a)return!0;if(n&&s>1)return!1;r.add(i);var u=s+1;if(Array.isArray(i)){if(!Array.isArray(a)||i.length!==a.length)return!1;for(var c=0;c<i.length;c++)if(!o(i[c],a[c],u))return!1;return!0}if(i&&a&&ee(i)==="object"&&ee(a)==="object"){var d=Object.keys(i);return d.length!==Object.keys(a).length?!1:d.every(function(f){return o(i[f],a[f],u)})}return!1}return o(e,t)}var R2="%";function Sf(e){return e.join(R2)}var P2=function(){function e(t){ct(this,e),P(this,"instanceId",void 0),P(this,"cache",new Map),P(this,"extracted",new Set),this.instanceId=t}return dt(e,[{key:"get",value:function(n){return this.opGet(Sf(n))}},{key:"opGet",value:function(n){return this.cache.get(n)||null}},{key:"update",value:function(n,r){return this.opUpdate(Sf(n),r)}},{key:"opUpdate",value:function(n,r){var o=this.cache.get(n),i=r(o);i===null?this.cache.delete(n):this.cache.set(n,i)}}]),e}(),Yo="data-token-hash",wn="data-css-hash",cr="__cssinjs_instance__";function A2(){var e=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){var t=document.body.querySelectorAll("style[".concat(wn,"]"))||[],n=document.head.firstChild;Array.from(t).forEach(function(o){o[cr]=o[cr]||e,o[cr]===e&&document.head.insertBefore(o,n)});var r={};Array.from(document.querySelectorAll("style[".concat(wn,"]"))).forEach(function(o){var i=o.getAttribute(wn);if(r[i]){if(o[cr]===e){var a;(a=o.parentNode)===null||a===void 0||a.removeChild(o)}}else r[i]=!0})}return new P2(e)}var ja=v.createContext({hashPriority:"low",cache:A2(),defaultCache:!0});function $2(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var _m=function(){function e(){ct(this,e),P(this,"cache",void 0),P(this,"keys",void 0),P(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return dt(e,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(n){var r,o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a={map:this.cache};return n.forEach(function(s){if(!a)a=void 0;else{var l;a=(l=a)===null||l===void 0||(l=l.map)===null||l===void 0?void 0:l.get(s)}}),(r=a)!==null&&r!==void 0&&r.value&&i&&(a.value[1]=this.cacheCallTimes++),(o=a)===null||o===void 0?void 0:o.value}},{key:"get",value:function(n){var r;return(r=this.internalGet(n,!0))===null||r===void 0?void 0:r[0]}},{key:"has",value:function(n){return!!this.internalGet(n)}},{key:"set",value:function(n,r){var o=this;if(!this.has(n)){if(this.size()+1>e.MAX_CACHE_SIZE+e.MAX_CACHE_OFFSET){var i=this.keys.reduce(function(u,c){var d=J(u,2),f=d[1];return o.internalGet(c)[1]<f?[c,o.internalGet(c)[1]]:u},[this.keys[0],this.cacheCallTimes]),a=J(i,1),s=a[0];this.delete(s)}this.keys.push(n)}var l=this.cache;n.forEach(function(u,c){if(c===n.length-1)l.set(u,{value:[r,o.cacheCallTimes++]});else{var d=l.get(u);d?d.map||(d.map=new Map):l.set(u,{map:new Map}),l=l.get(u).map}})}},{key:"deleteByPath",value:function(n,r){var o=n.get(r[0]);if(r.length===1){var i;return o.map?n.set(r[0],{map:o.map}):n.delete(r[0]),(i=o.value)===null||i===void 0?void 0:i[0]}var a=this.deleteByPath(o.map,r.slice(1));return(!o.map||o.map.size===0)&&!o.value&&n.delete(r[0]),a}},{key:"delete",value:function(n){if(this.has(n))return this.keys=this.keys.filter(function(r){return!$2(r,n)}),this.deleteByPath(this.cache,n)}}]),e}();P(_m,"MAX_CACHE_SIZE",20);P(_m,"MAX_CACHE_OFFSET",5);var eg=0,tw=function(){function e(t){ct(this,e),P(this,"derivatives",void 0),P(this,"id",void 0),this.derivatives=Array.isArray(t)?t:[t],this.id=eg,t.length===0&&(t.length>0,void 0),eg+=1}return dt(e,[{key:"getDerivativeToken",value:function(n){return this.derivatives.reduce(function(r,o){return o(n,r)},void 0)}}]),e}(),Mc=new _m;function Ef(e){var t=Array.isArray(e)?e:[e];return Mc.has(t)||Mc.set(t,new tw(t)),Mc.get(t)}var I2=new WeakMap,zc={};function F2(e,t){for(var n=I2,r=0;r<t.length;r+=1){var o=t[r];n.has(o)||n.set(o,new WeakMap),n=n.get(o)}return n.has(zc)||n.set(zc,e()),n.get(zc)}var tg=new WeakMap;function Ui(e){var t=tg.get(e)||"";return t||(Object.keys(e).forEach(function(n){var r=e[n];t+=n,r instanceof tw?t+=r.id:r&&ee(r)==="object"?t+=Ui(r):t+=r}),t=ga(t),tg.set(e,t)),t}function ng(e,t){return ga("".concat(t,"_").concat(Ui(e)))}var Of=Jn();function Ce(e){return typeof e=="number"?"".concat(e,"px"):e}function bl(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(o)return e;var i=j(j({},r),{},P(P({},Yo,t),wn,n)),a=Object.keys(i).map(function(s){var l=i[s];return l?"".concat(s,'="').concat(l,'"'):null}).filter(function(s){return s}).join(" ");return"<style ".concat(a,">").concat(e,"</style>")}var Fs=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return"--".concat(n?"".concat(n,"-"):"").concat(t).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase()},_2=function(t,n,r){return Object.keys(t).length?".".concat(n).concat(r!=null&&r.scope?".".concat(r.scope):"","{").concat(Object.entries(t).map(function(o){var i=J(o,2),a=i[0],s=i[1];return"".concat(a,":").concat(s,";")}).join(""),"}"):""},nw=function(t,n,r){var o={},i={};return Object.entries(t).forEach(function(a){var s,l,u=J(a,2),c=u[0],d=u[1];if(r!=null&&(s=r.preserve)!==null&&s!==void 0&&s[c])i[c]=d;else if((typeof d=="string"||typeof d=="number")&&!(r!=null&&(l=r.ignore)!==null&&l!==void 0&&l[c])){var f,w=Fs(c,r==null?void 0:r.prefix);o[w]=typeof d=="number"&&!(r!=null&&(f=r.unitless)!==null&&f!==void 0&&f[c])?"".concat(d,"px"):String(d),i[c]="var(".concat(w,")")}}),[i,_2(o,n,{scope:r==null?void 0:r.scope})]},rg=Jn()?v.useLayoutEffect:v.useEffect,ya=function(t,n){var r=v.useRef(!0);rg(function(){return t(r.current)},n),rg(function(){return r.current=!1,function(){r.current=!0}},[])},og=function(t,n){ya(function(r){if(!r)return t()},n)},j2=j({},Pl),ig=j2.useInsertionEffect,N2=function(t,n,r){v.useMemo(t,r),ya(function(){return n(!0)},r)},k2=ig?function(e,t,n){return ig(function(){return e(),t()},n)}:N2,M2=j({},Pl),z2=M2.useInsertionEffect,L2=function(t){var n=[],r=!1;function o(i){r||n.push(i)}return v.useEffect(function(){return r=!1,function(){r=!0,n.length&&n.forEach(function(i){return i()})}},t),o},D2=function(){return function(t){t()}},B2=typeof z2<"u"?L2:D2;function jm(e,t,n,r,o){var i=v.useContext(ja),a=i.cache,s=[e].concat(Z(t)),l=Sf(s),u=B2([l]),c=function(h){a.opUpdate(l,function(g){var b=g||[void 0,void 0],m=J(b,2),p=m[0],y=p===void 0?0:p,C=m[1],x=C,E=x||n(),S=[y,E];return h?h(S):S})};v.useMemo(function(){c()},[l]);var d=a.opGet(l),f=d[1];return k2(function(){o==null||o(f)},function(w){return c(function(h){var g=J(h,2),b=g[0],m=g[1];return w&&b===0&&(o==null||o(f)),[b+1,m]}),function(){a.opUpdate(l,function(h){var g=h||[],b=J(g,2),m=b[0],p=m===void 0?0:m,y=b[1],C=p-1;return C===0?(u(function(){(w||!a.opGet(l))&&(r==null||r(y,!1))}),null):[p-1,y]})}},[l]),f}var V2={},H2="css",kr=new Map;function U2(e){kr.set(e,(kr.get(e)||0)+1)}function W2(e,t){if(typeof document<"u"){var n=document.querySelectorAll("style[".concat(Yo,'="').concat(e,'"]'));n.forEach(function(r){if(r[cr]===t){var o;(o=r.parentNode)===null||o===void 0||o.removeChild(r)}})}}var G2=0;function q2(e,t){kr.set(e,(kr.get(e)||0)-1);var n=new Set;kr.forEach(function(r,o){r<=0&&n.add(o)}),kr.size-n.size>G2&&n.forEach(function(r){W2(r,t),kr.delete(r)})}var K2=function(t,n,r,o){var i=r.getDerivativeToken(t),a=j(j({},i),n);return o&&(a=o(a)),a},rw="token";function Q2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=v.useContext(ja),o=r.cache.instanceId,i=r.container,a=n.salt,s=a===void 0?"":a,l=n.override,u=l===void 0?V2:l,c=n.formatToken,d=n.getComputedToken,f=n.cssVar,w=F2(function(){return Object.assign.apply(Object,[{}].concat(Z(t)))},t),h=Ui(w),g=Ui(u),b=f?Ui(f):"",m=jm(rw,[s,e.id,h,g,b],function(){var p,y=d?d(w,u,e):K2(w,u,e,c),C=j({},y),x="";if(f){var E=nw(y,f.key,{prefix:f.prefix,ignore:f.ignore,unitless:f.unitless,preserve:f.preserve}),S=J(E,2);y=S[0],x=S[1]}var O=ng(y,s);y._tokenKey=O,C._tokenKey=ng(C,s);var R=(p=f==null?void 0:f.key)!==null&&p!==void 0?p:O;y._themeKey=R,U2(R);var T="".concat(H2,"-").concat(ga(O));return y._hashId=T,[y,T,C,x,(f==null?void 0:f.key)||""]},function(p){q2(p[0]._themeKey,o)},function(p){var y=J(p,4),C=y[0],x=y[3];if(f&&x){var E=Gr(x,ga("css-variables-".concat(C._themeKey)),{mark:wn,prepend:"queue",attachTo:i,priority:-999});E[cr]=o,E.setAttribute(Yo,C._themeKey)}});return m}var X2=function(t,n,r){var o=J(t,5),i=o[2],a=o[3],s=o[4],l=r||{},u=l.plain;if(!a)return null;var c=i._tokenKey,d=-999,f={"data-rc-order":"prependQueue","data-rc-priority":"".concat(d)},w=bl(a,s,c,f,u);return[d,c,w]},J2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ow="comm",iw="rule",aw="decl",Y2="@import",Z2="@namespace",eA="@keyframes",tA="@layer",sw=Math.abs,Nm=String.fromCharCode;function lw(e){return e.trim()}function _s(e,t,n){return e.replace(t,n)}function nA(e,t,n){return e.indexOf(t,n)}function Lo(e,t){return e.charCodeAt(t)|0}function Zo(e,t,n){return e.slice(t,n)}function In(e){return e.length}function rA(e){return e.length}function ss(e,t){return t.push(e),e}var _u=1,ei=1,uw=0,an=0,We=0,fi="";function km(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:_u,column:ei,length:a,return:"",siblings:s}}function oA(){return We}function iA(){return We=an>0?Lo(fi,--an):0,ei--,We===10&&(ei=1,_u--),We}function xn(){return We=an<uw?Lo(fi,an++):0,ei++,We===10&&(ei=1,_u++),We}function dr(){return Lo(fi,an)}function js(){return an}function ju(e,t){return Zo(fi,e,t)}function ba(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function aA(e){return _u=ei=1,uw=In(fi=e),an=0,[]}function sA(e){return fi="",e}function Lc(e){return lw(ju(an-1,Tf(e===91?e+2:e===40?e+1:e)))}function lA(e){for(;(We=dr())&&We<33;)xn();return ba(e)>2||ba(We)>3?"":" "}function uA(e,t){for(;--t&&xn()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return ju(e,js()+(t<6&&dr()==32&&xn()==32))}function Tf(e){for(;xn();)switch(We){case e:return an;case 34:case 39:e!==34&&e!==39&&Tf(We);break;case 40:e===41&&Tf(e);break;case 92:xn();break}return an}function cA(e,t){for(;xn()&&e+We!==57;)if(e+We===84&&dr()===47)break;return"/*"+ju(t,an-1)+"*"+Nm(e===47?e:xn())}function dA(e){for(;!ba(dr());)xn();return ju(e,an)}function fA(e){return sA(Ns("",null,null,null,[""],e=aA(e),0,[0],e))}function Ns(e,t,n,r,o,i,a,s,l){for(var u=0,c=0,d=a,f=0,w=0,h=0,g=1,b=1,m=1,p=0,y="",C=o,x=i,E=r,S=y;b;)switch(h=p,p=xn()){case 40:if(h!=108&&Lo(S,d-1)==58){nA(S+=_s(Lc(p),"&","&\f"),"&\f",sw(u?s[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=Lc(p);break;case 9:case 10:case 13:case 32:S+=lA(h);break;case 92:S+=uA(js()-1,7);continue;case 47:switch(dr()){case 42:case 47:ss(pA(cA(xn(),js()),t,n,l),l),(ba(h||1)==5||ba(dr()||1)==5)&&In(S)&&Zo(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*g:s[u++]=In(S)*m;case 125*g:case 59:case 0:switch(p){case 0:case 125:b=0;case 59+c:m==-1&&(S=_s(S,/\f/g,"")),w>0&&(In(S)-d||g===0&&h===47)&&ss(w>32?sg(S+";",r,n,d-1,l):sg(_s(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(ss(E=ag(S,t,n,u,c,o,s,y,C=[],x=[],d,i),i),p===123)if(c===0)Ns(S,t,E,E,C,i,d,s,x);else{switch(f){case 99:if(Lo(S,3)===110)break;case 108:if(Lo(S,2)===97)break;default:c=0;case 100:case 109:case 115:}c?Ns(e,E,E,r&&ss(ag(e,E,E,0,0,o,s,y,o,C=[],d,x),x),o,x,d,s,r?C:x):Ns(S,E,E,E,[""],x,0,s,x)}}u=c=w=0,g=m=1,y=S="",d=a;break;case 58:d=1+In(S),w=h;default:if(g<1){if(p==123)--g;else if(p==125&&g++==0&&iA()==125)continue}switch(S+=Nm(p),p*g){case 38:m=c>0?1:(S+="\f",-1);break;case 44:s[u++]=(In(S)-1)*m,m=1;break;case 64:dr()===45&&(S+=Lc(xn())),f=dr(),c=d=In(y=S+=dA(js())),p++;break;case 45:h===45&&In(S)==2&&(g=0)}}return i}function ag(e,t,n,r,o,i,a,s,l,u,c,d){for(var f=o-1,w=o===0?i:[""],h=rA(w),g=0,b=0,m=0;g<r;++g)for(var p=0,y=Zo(e,f+1,f=sw(b=a[g])),C=e;p<h;++p)(C=lw(b>0?w[p]+" "+y:_s(y,/&\f/g,w[p])))&&(l[m++]=C);return km(e,t,n,o===0?iw:s,l,u,c,d)}function pA(e,t,n,r){return km(e,t,n,ow,Nm(oA()),Zo(e,2,-2),0,r)}function sg(e,t,n,r,o){return km(e,t,n,aw,Zo(e,0,r),Zo(e,r+1,-1),r,o)}function Rf(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function mA(e,t,n,r){switch(e.type){case tA:if(e.children.length)break;case Y2:case Z2:case aw:return e.return=e.return||e.value;case ow:return"";case eA:return e.return=e.value+"{"+Rf(e.children,r)+"}";case iw:if(!In(e.value=e.props.join(",")))return""}return In(n=Rf(e.children,r))?e.return=e.value+"{"+n+"}":""}var lg="data-ant-cssinjs-cache-path",cw="_FILE_STYLE__",qr,dw=!0;function hA(){if(!qr&&(qr={},Jn())){var e=document.createElement("div");e.className=lg,e.style.position="fixed",e.style.visibility="hidden",e.style.top="-9999px",document.body.appendChild(e);var t=getComputedStyle(e).content||"";t=t.replace(/^"/,"").replace(/"$/,""),t.split(";").forEach(function(o){var i=o.split(":"),a=J(i,2),s=a[0],l=a[1];qr[s]=l});var n=document.querySelector("style[".concat(lg,"]"));if(n){var r;dw=!1,(r=n.parentNode)===null||r===void 0||r.removeChild(n)}document.body.removeChild(e)}}function vA(e){return hA(),!!qr[e]}function gA(e){var t=qr[e],n=null;if(t&&Jn())if(dw)n=cw;else{var r=document.querySelector("style[".concat(wn,'="').concat(qr[e],'"]'));r?n=r.innerHTML:delete qr[e]}return[n,t]}var yA="_skip_check_",fw="_multi_value_";function ks(e){var t=Rf(fA(e),mA);return t.replace(/\{%%%\:[^;];}/g,";")}function bA(e){return ee(e)==="object"&&e&&(yA in e||fw in e)}function ug(e,t,n){if(!t)return e;var r=".".concat(t),o=n==="low"?":where(".concat(r,")"):r,i=e.split(",").map(function(a){var s,l=a.trim().split(/\s+/),u=l[0]||"",c=((s=u.match(/^\w+/))===null||s===void 0?void 0:s[0])||"";return u="".concat(c).concat(o).concat(u.slice(c.length)),[u].concat(Z(l.slice(1))).join(" ")});return i.join(",")}var wA=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]},o=r.root,i=r.injectHash,a=r.parentSelectors,s=n.hashId,l=n.layer;n.path;var u=n.hashPriority,c=n.transformers,d=c===void 0?[]:c;n.linters;var f="",w={};function h(m){var p=m.getName(s);if(!w[p]){var y=e(m.style,n,{root:!1,parentSelectors:a}),C=J(y,1),x=C[0];w[p]="@keyframes ".concat(m.getName(s)).concat(x)}}function g(m){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return m.forEach(function(y){Array.isArray(y)?g(y,p):y&&p.push(y)}),p}var b=g(Array.isArray(t)?t:[t]);return b.forEach(function(m){var p=typeof m=="string"&&!o?{}:m;if(typeof p=="string")f+="".concat(p,`
`);else if(p._keyframe)h(p);else{var y=d.reduce(function(C,x){var E;return(x==null||(E=x.visit)===null||E===void 0?void 0:E.call(x,C))||C},p);Object.keys(y).forEach(function(C){var x=y[C];if(ee(x)==="object"&&x&&(C!=="animationName"||!x._keyframe)&&!bA(x)){var E=!1,S=C.trim(),O=!1;(o||i)&&s?S.startsWith("@")?E=!0:S==="&"?S=ug("",s,u):S=ug(C,s,u):o&&!s&&(S==="&"||S==="")&&(S="",O=!0);var R=e(x,n,{root:O,injectHash:E,parentSelectors:[].concat(Z(a),[S])}),T=J(R,2),I=T[0],$=T[1];w=j(j({},w),$),f+="".concat(S).concat(I)}else{let k=function(M,B){var F=M.replace(/[A-Z]/g,function(U){return"-".concat(U.toLowerCase())}),V=B;!J2[M]&&typeof V=="number"&&V!==0&&(V="".concat(V,"px")),M==="animationName"&&B!==null&&B!==void 0&&B._keyframe&&(h(B),V=B.getName(s)),f+="".concat(F,":").concat(V,";")};var _,N=(_=x==null?void 0:x.value)!==null&&_!==void 0?_:x;ee(x)==="object"&&x!==null&&x!==void 0&&x[fw]&&Array.isArray(N)?N.forEach(function(M){k(C,M)}):k(C,N)}})}}),o?l&&(f&&(f="@layer ".concat(l.name," {").concat(f,"}")),l.dependencies&&(w["@layer ".concat(l.name)]=l.dependencies.map(function(m){return"@layer ".concat(m,", ").concat(l.name,";")}).join(`
`))):f="{".concat(f,"}"),[f,w]};function pw(e,t){return ga("".concat(e.join("%")).concat(t))}function xA(){return null}var mw="style";function Pf(e,t){var n=e.token,r=e.path,o=e.hashId,i=e.layer,a=e.nonce,s=e.clientOnly,l=e.order,u=l===void 0?0:l,c=v.useContext(ja),d=c.autoClear;c.mock;var f=c.defaultCache,w=c.hashPriority,h=c.container,g=c.ssrInline,b=c.transformers,m=c.linters,p=c.cache,y=c.layer,C=n._tokenKey,x=[C];y&&x.push("layer"),x.push.apply(x,Z(r));var E=Of,S=jm(mw,x,function(){var $=x.join("|");if(vA($)){var _=gA($),N=J(_,2),k=N[0],M=N[1];if(k)return[k,C,M,{},s,u]}var B=t(),F=wA(B,{hashId:o,hashPriority:w,layer:y?i:void 0,path:r.join("-"),transformers:b,linters:m}),V=J(F,2),U=V[0],Q=V[1],G=ks(U),K=pw(x,G);return[G,C,K,Q,s,u]},function($,_){var N=J($,3),k=N[2];(_||d)&&Of&&ew(k,{mark:wn,attachTo:h})},function($){var _=J($,4),N=_[0];_[1];var k=_[2],M=_[3];if(E&&N!==cw){var B={mark:wn,prepend:y?!1:"queue",attachTo:h,priority:u},F=typeof a=="function"?a():a;F&&(B.csp={nonce:F});var V=[],U=[];Object.keys(M).forEach(function(G){G.startsWith("@layer")?V.push(G):U.push(G)}),V.forEach(function(G){Gr(ks(M[G]),"_layer-".concat(G),j(j({},B),{},{prepend:!0}))});var Q=Gr(N,k,B);Q[cr]=p.instanceId,Q.setAttribute(Yo,C),U.forEach(function(G){Gr(ks(M[G]),"_effect-".concat(G),B)})}}),O=J(S,3),R=O[0],T=O[1],I=O[2];return function($){var _;return!g||E||!f?_=v.createElement(xA,null):_=v.createElement("style",Je({},P(P({},Yo,T),wn,I),{dangerouslySetInnerHTML:{__html:R}})),v.createElement(v.Fragment,null,_,$)}}var CA=function(t,n,r){var o=J(t,6),i=o[0],a=o[1],s=o[2],l=o[3],u=o[4],c=o[5],d=r||{},f=d.plain;if(u)return null;var w=i,h={"data-rc-order":"prependQueue","data-rc-priority":"".concat(c)};return w=bl(i,a,s,h,f),l&&Object.keys(l).forEach(function(g){if(!n[g]){n[g]=!0;var b=ks(l[g]),m=bl(b,a,"_effect-".concat(g),h,f);g.startsWith("@layer")?w=m+w:w+=m}}),[c,s,w]},hw="cssVar",SA=function(t,n){var r=t.key,o=t.prefix,i=t.unitless,a=t.ignore,s=t.token,l=t.scope,u=l===void 0?"":l,c=v.useContext(ja),d=c.cache.instanceId,f=c.container,w=s._tokenKey,h=[].concat(Z(t.path),[r,u,w]),g=jm(hw,h,function(){var b=n(),m=nw(b,r,{prefix:o,unitless:i,ignore:a,scope:u}),p=J(m,2),y=p[0],C=p[1],x=pw(h,C);return[y,C,x,r]},function(b){var m=J(b,3),p=m[2];Of&&ew(p,{mark:wn,attachTo:f})},function(b){var m=J(b,3),p=m[1],y=m[2];if(p){var C=Gr(p,y,{mark:wn,prepend:"queue",attachTo:f,priority:-999});C[cr]=d,C.setAttribute(Yo,r)}});return g},EA=function(t,n,r){var o=J(t,4),i=o[1],a=o[2],s=o[3],l=r||{},u=l.plain;if(!i)return null;var c=-999,d={"data-rc-order":"prependQueue","data-rc-priority":"".concat(c)},f=bl(i,s,a,d,u);return[c,a,f]};P(P(P({},mw,CA),rw,X2),hw,EA);function fo(e){return e.notSplit=!0,e}fo(["borderTop","borderBottom"]),fo(["borderTop"]),fo(["borderBottom"]),fo(["borderLeft","borderRight"]),fo(["borderLeft"]),fo(["borderRight"]);var Mm=v.createContext({});function OA(e){return Q1(e)||W1(e)||$m(e)||X1()}function _n(e,t){for(var n=e,r=0;r<t.length;r+=1){if(n==null)return;n=n[t[r]]}return n}function vw(e,t,n,r){if(!t.length)return n;var o=OA(t),i=o[0],a=o.slice(1),s;return!e&&typeof i=="number"?s=[]:Array.isArray(e)?s=Z(e):s=j({},e),r&&n===void 0&&a.length===1?delete s[i][a[0]]:s[i]=vw(s[i],a,n,r),s}function mn(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.length&&r&&n===void 0&&!_n(e,t.slice(0,-1))?e:vw(e,t,n,r)}function TA(e){return ee(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function cg(e){return Array.isArray(e)?[]:{}}var RA=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function Ro(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=cg(t[0]);return t.forEach(function(o){function i(a,s){var l=new Set(s),u=_n(o,a),c=Array.isArray(u);if(c||TA(u)){if(!l.has(u)){l.add(u);var d=_n(r,a);c?r=mn(r,a,[]):(!d||ee(d)!=="object")&&(r=mn(r,a,cg(u))),RA(u).forEach(function(f){i([].concat(Z(a),[f]),l)})}}else r=mn(r,a,u)}i([])}),r}const PA=v.createContext({}),AA=v.createContext(void 0),kt="${label} is not a valid ${type}",Nu={Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:kt,method:kt,array:kt,object:kt,number:kt,date:kt,boolean:kt,integer:kt,float:kt,regexp:kt,email:kt,url:kt,hex:kt},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}}};Object.assign({},Nu.Modal);let Ms=[];const dg=()=>Ms.reduce((e,t)=>Object.assign(Object.assign({},e),t),Nu.Modal);function $A(e){if(e){const t=Object.assign({},e);return Ms.push(t),dg(),()=>{Ms=Ms.filter(n=>n!==t),dg()}}Object.assign({},Nu.Modal)}const gw=v.createContext(void 0),IA="internalMark",FA=e=>{const{locale:t={},children:n,_ANT_MARK__:r}=e;v.useEffect(()=>$A(t==null?void 0:t.Modal),[t]);const o=v.useMemo(()=>Object.assign(Object.assign({},t),{exist:!0}),[t]);return v.createElement(gw.Provider,{value:o},n)},yw={blue:"#1677FF",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#EB2F96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},wa=Object.assign(Object.assign({},yw),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0}),et=Math.round;function Dc(e,t){const n=e.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],r=n.map(o=>parseFloat(o));for(let o=0;o<3;o+=1)r[o]=t(r[o]||0,n[o]||"",o);return n[3]?r[3]=n[3].includes("%")?r[3]/100:r[3]:r[3]=1,r}const fg=(e,t,n)=>n===0?e:e/100;function Ti(e,t){const n=t||255;return e>n?n:e<0?0:e}class ke{constructor(t){P(this,"isValid",!0),P(this,"r",0),P(this,"g",0),P(this,"b",0),P(this,"a",1),P(this,"_h",void 0),P(this,"_s",void 0),P(this,"_l",void 0),P(this,"_v",void 0),P(this,"_max",void 0),P(this,"_min",void 0),P(this,"_brightness",void 0);function n(o){return o[0]in t&&o[1]in t&&o[2]in t}if(t)if(typeof t=="string"){let i=function(a){return o.startsWith(a)};var r=i;const o=t.trim();/^#?[A-F\d]{3,8}$/i.test(o)?this.fromHexString(o):i("rgb")?this.fromRgbString(o):i("hsl")?this.fromHslString(o):(i("hsv")||i("hsb"))&&this.fromHsvString(o)}else if(t instanceof ke)this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this._h=t._h,this._s=t._s,this._l=t._l,this._v=t._v;else if(n("rgb"))this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this.a=typeof t.a=="number"?Ti(t.a,1):1;else if(n("hsl"))this.fromHsl(t);else if(n("hsv"))this.fromHsv(t);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(t))}setR(t){return this._sc("r",t)}setG(t){return this._sc("g",t)}setB(t){return this._sc("b",t)}setA(t){return this._sc("a",t,1)}setHue(t){const n=this.toHsv();return n.h=t,this._c(n)}getLuminance(){function t(i){const a=i/255;return a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)}const n=t(this.r),r=t(this.g),o=t(this.b);return .2126*n+.7152*r+.0722*o}getHue(){if(typeof this._h>"u"){const t=this.getMax()-this.getMin();t===0?this._h=0:this._h=et(60*(this.r===this.getMax()?(this.g-this.b)/t+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/t+2:(this.r-this.g)/t+4))}return this._h}getSaturation(){if(typeof this._s>"u"){const t=this.getMax()-this.getMin();t===0?this._s=0:this._s=t/this.getMax()}return this._s}getLightness(){return typeof this._l>"u"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v>"u"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness>"u"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(t=10){const n=this.getHue(),r=this.getSaturation();let o=this.getLightness()-t/100;return o<0&&(o=0),this._c({h:n,s:r,l:o,a:this.a})}lighten(t=10){const n=this.getHue(),r=this.getSaturation();let o=this.getLightness()+t/100;return o>1&&(o=1),this._c({h:n,s:r,l:o,a:this.a})}mix(t,n=50){const r=this._c(t),o=n/100,i=s=>(r[s]-this[s])*o+this[s],a={r:et(i("r")),g:et(i("g")),b:et(i("b")),a:et(i("a")*100)/100};return this._c(a)}tint(t=10){return this.mix({r:255,g:255,b:255,a:1},t)}shade(t=10){return this.mix({r:0,g:0,b:0,a:1},t)}onBackground(t){const n=this._c(t),r=this.a+n.a*(1-this.a),o=i=>et((this[i]*this.a+n[i]*n.a*(1-this.a))/r);return this._c({r:o("r"),g:o("g"),b:o("b"),a:r})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}clone(){return this._c(this)}toHexString(){let t="#";const n=(this.r||0).toString(16);t+=n.length===2?n:"0"+n;const r=(this.g||0).toString(16);t+=r.length===2?r:"0"+r;const o=(this.b||0).toString(16);if(t+=o.length===2?o:"0"+o,typeof this.a=="number"&&this.a>=0&&this.a<1){const i=et(this.a*255).toString(16);t+=i.length===2?i:"0"+i}return t}toHsl(){return{h:this.getHue(),s:this.getSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const t=this.getHue(),n=et(this.getSaturation()*100),r=et(this.getLightness()*100);return this.a!==1?`hsla(${t},${n}%,${r}%,${this.a})`:`hsl(${t},${n}%,${r}%)`}toHsv(){return{h:this.getHue(),s:this.getSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(t,n,r){const o=this.clone();return o[t]=Ti(n,r),o}_c(t){return new this.constructor(t)}getMax(){return typeof this._max>"u"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min>"u"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(t){const n=t.replace("#","");function r(o,i){return parseInt(n[o]+n[i||o],16)}n.length<6?(this.r=r(0),this.g=r(1),this.b=r(2),this.a=n[3]?r(3)/255:1):(this.r=r(0,1),this.g=r(2,3),this.b=r(4,5),this.a=n[6]?r(6,7)/255:1)}fromHsl({h:t,s:n,l:r,a:o}){if(this._h=t%360,this._s=n,this._l=r,this.a=typeof o=="number"?o:1,n<=0){const f=et(r*255);this.r=f,this.g=f,this.b=f}let i=0,a=0,s=0;const l=t/60,u=(1-Math.abs(2*r-1))*n,c=u*(1-Math.abs(l%2-1));l>=0&&l<1?(i=u,a=c):l>=1&&l<2?(i=c,a=u):l>=2&&l<3?(a=u,s=c):l>=3&&l<4?(a=c,s=u):l>=4&&l<5?(i=c,s=u):l>=5&&l<6&&(i=u,s=c);const d=r-u/2;this.r=et((i+d)*255),this.g=et((a+d)*255),this.b=et((s+d)*255)}fromHsv({h:t,s:n,v:r,a:o}){this._h=t%360,this._s=n,this._v=r,this.a=typeof o=="number"?o:1;const i=et(r*255);if(this.r=i,this.g=i,this.b=i,n<=0)return;const a=t/60,s=Math.floor(a),l=a-s,u=et(r*(1-n)*255),c=et(r*(1-n*l)*255),d=et(r*(1-n*(1-l))*255);switch(s){case 0:this.g=d,this.b=u;break;case 1:this.r=c,this.b=u;break;case 2:this.r=u,this.b=d;break;case 3:this.r=u,this.g=c;break;case 4:this.r=d,this.g=u;break;case 5:default:this.g=u,this.b=c;break}}fromHsvString(t){const n=Dc(t,fg);this.fromHsv({h:n[0],s:n[1],v:n[2],a:n[3]})}fromHslString(t){const n=Dc(t,fg);this.fromHsl({h:n[0],s:n[1],l:n[2],a:n[3]})}fromRgbString(t){const n=Dc(t,(r,o)=>o.includes("%")?et(r/100*255):r);this.r=n[0],this.g=n[1],this.b=n[2],this.a=n[3]}}var ls=2,pg=.16,_A=.05,jA=.05,NA=.15,bw=5,ww=4,kA=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function mg(e,t,n){var r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=n?Math.round(e.h)-ls*t:Math.round(e.h)+ls*t:r=n?Math.round(e.h)+ls*t:Math.round(e.h)-ls*t,r<0?r+=360:r>=360&&(r-=360),r}function hg(e,t,n){if(e.h===0&&e.s===0)return e.s;var r;return n?r=e.s-pg*t:t===ww?r=e.s+pg:r=e.s+_A*t,r>1&&(r=1),n&&t===bw&&r>.1&&(r=.1),r<.06&&(r=.06),Math.round(r*100)/100}function vg(e,t,n){var r;return n?r=e.v+jA*t:r=e.v-NA*t,r=Math.max(0,Math.min(1,r)),Math.round(r*100)/100}function xa(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=new ke(e),o=r.toHsv(),i=bw;i>0;i-=1){var a=new ke({h:mg(o,i,!0),s:hg(o,i,!0),v:vg(o,i,!0)});n.push(a)}n.push(r);for(var s=1;s<=ww;s+=1){var l=new ke({h:mg(o,s),s:hg(o,s),v:vg(o,s)});n.push(l)}return t.theme==="dark"?kA.map(function(u){var c=u.index,d=u.amount;return new ke(t.backgroundColor||"#141414").mix(n[c],d).toHexString()}):n.map(function(u){return u.toHexString()})}var Bc={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Af=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"];Af.primary=Af[5];var $f=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"];$f.primary=$f[5];var If=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"];If.primary=If[5];var Ff=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"];Ff.primary=Ff[5];var _f=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"];_f.primary=_f[5];var jf=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"];jf.primary=jf[5];var Nf=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"];Nf.primary=Nf[5];var kf=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"];kf.primary=kf[5];var wl=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];wl.primary=wl[5];var Mf=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"];Mf.primary=Mf[5];var zf=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"];zf.primary=zf[5];var Lf=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"];Lf.primary=Lf[5];var Df=["#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#404040","#1a1a1a","#000000","#000000"];Df.primary=Df[5];var Vc={red:Af,volcano:$f,orange:If,gold:Ff,yellow:_f,lime:jf,green:Nf,cyan:kf,blue:wl,geekblue:Mf,purple:zf,magenta:Lf,grey:Df};function MA(e,{generateColorPalettes:t,generateNeutralColorPalettes:n}){const{colorSuccess:r,colorWarning:o,colorError:i,colorInfo:a,colorPrimary:s,colorBgBase:l,colorTextBase:u}=e,c=t(s),d=t(r),f=t(o),w=t(i),h=t(a),g=n(l,u),b=e.colorLink||e.colorInfo,m=t(b),p=new ke(w[1]).mix(new ke(w[3]),50).toHexString();return Object.assign(Object.assign({},g),{colorPrimaryBg:c[1],colorPrimaryBgHover:c[2],colorPrimaryBorder:c[3],colorPrimaryBorderHover:c[4],colorPrimaryHover:c[5],colorPrimary:c[6],colorPrimaryActive:c[7],colorPrimaryTextHover:c[8],colorPrimaryText:c[9],colorPrimaryTextActive:c[10],colorSuccessBg:d[1],colorSuccessBgHover:d[2],colorSuccessBorder:d[3],colorSuccessBorderHover:d[4],colorSuccessHover:d[4],colorSuccess:d[6],colorSuccessActive:d[7],colorSuccessTextHover:d[8],colorSuccessText:d[9],colorSuccessTextActive:d[10],colorErrorBg:w[1],colorErrorBgHover:w[2],colorErrorBgFilledHover:p,colorErrorBgActive:w[3],colorErrorBorder:w[3],colorErrorBorderHover:w[4],colorErrorHover:w[5],colorError:w[6],colorErrorActive:w[7],colorErrorTextHover:w[8],colorErrorText:w[9],colorErrorTextActive:w[10],colorWarningBg:f[1],colorWarningBgHover:f[2],colorWarningBorder:f[3],colorWarningBorderHover:f[4],colorWarningHover:f[4],colorWarning:f[6],colorWarningActive:f[7],colorWarningTextHover:f[8],colorWarningText:f[9],colorWarningTextActive:f[10],colorInfoBg:h[1],colorInfoBgHover:h[2],colorInfoBorder:h[3],colorInfoBorderHover:h[4],colorInfoHover:h[4],colorInfo:h[6],colorInfoActive:h[7],colorInfoTextHover:h[8],colorInfoText:h[9],colorInfoTextActive:h[10],colorLinkHover:m[4],colorLink:m[6],colorLinkActive:m[7],colorBgMask:new ke("#000").setA(.45).toRgbString(),colorWhite:"#fff"})}const zA=e=>{let t=e,n=e,r=e,o=e;return e<6&&e>=5?t=e+1:e<16&&e>=6?t=e+2:e>=16&&(t=16),e<7&&e>=5?n=4:e<8&&e>=7?n=5:e<14&&e>=8?n=6:e<16&&e>=14?n=7:e>=16&&(n=8),e<6&&e>=2?r=1:e>=6&&(r=2),e>4&&e<8?o=4:e>=8&&(o=6),{borderRadius:e,borderRadiusXS:r,borderRadiusSM:n,borderRadiusLG:t,borderRadiusOuter:o}};function LA(e){const{motionUnit:t,motionBase:n,borderRadius:r,lineWidth:o}=e;return Object.assign({motionDurationFast:`${(n+t).toFixed(1)}s`,motionDurationMid:`${(n+t*2).toFixed(1)}s`,motionDurationSlow:`${(n+t*3).toFixed(1)}s`,lineWidthBold:o+1},zA(r))}const DA=e=>{const{controlHeight:t}=e;return{controlHeightSM:t*.75,controlHeightXS:t*.5,controlHeightLG:t*1.25}};function zs(e){return(e+8)/e}function BA(e){const t=Array.from({length:10}).map((n,r)=>{const o=r-1,i=e*Math.pow(Math.E,o/5),a=r>1?Math.floor(i):Math.ceil(i);return Math.floor(a/2)*2});return t[1]=e,t.map(n=>({size:n,lineHeight:zs(n)}))}const VA=e=>{const t=BA(e),n=t.map(c=>c.size),r=t.map(c=>c.lineHeight),o=n[1],i=n[0],a=n[2],s=r[1],l=r[0],u=r[2];return{fontSizeSM:i,fontSize:o,fontSizeLG:a,fontSizeXL:n[3],fontSizeHeading1:n[6],fontSizeHeading2:n[5],fontSizeHeading3:n[4],fontSizeHeading4:n[3],fontSizeHeading5:n[2],lineHeight:s,lineHeightLG:u,lineHeightSM:l,fontHeight:Math.round(s*o),fontHeightLG:Math.round(u*a),fontHeightSM:Math.round(l*i),lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}};function HA(e){const{sizeUnit:t,sizeStep:n}=e;return{sizeXXL:t*(n+8),sizeXL:t*(n+4),sizeLG:t*(n+2),sizeMD:t*(n+1),sizeMS:t*n,size:t*n,sizeSM:t*(n-1),sizeXS:t*(n-2),sizeXXS:t*(n-3)}}const Jt=(e,t)=>new ke(e).setA(t).toRgbString(),Ri=(e,t)=>new ke(e).darken(t).toHexString(),UA=e=>{const t=xa(e);return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[4],6:t[5],7:t[6],8:t[4],9:t[5],10:t[6]}},WA=(e,t)=>{const n=e||"#fff",r=t||"#000";return{colorBgBase:n,colorTextBase:r,colorText:Jt(r,.88),colorTextSecondary:Jt(r,.65),colorTextTertiary:Jt(r,.45),colorTextQuaternary:Jt(r,.25),colorFill:Jt(r,.15),colorFillSecondary:Jt(r,.06),colorFillTertiary:Jt(r,.04),colorFillQuaternary:Jt(r,.02),colorBgSolid:Jt(r,1),colorBgSolidHover:Jt(r,.75),colorBgSolidActive:Jt(r,.95),colorBgLayout:Ri(n,4),colorBgContainer:Ri(n,0),colorBgElevated:Ri(n,0),colorBgSpotlight:Jt(r,.85),colorBgBlur:"transparent",colorBorder:Ri(n,15),colorBorderSecondary:Ri(n,6)}};function GA(e){Bc.pink=Bc.magenta,Vc.pink=Vc.magenta;const t=Object.keys(yw).map(n=>{const r=e[n]===Bc[n]?Vc[n]:xa(e[n]);return Array.from({length:10},()=>1).reduce((o,i,a)=>(o[`${n}-${a+1}`]=r[a],o[`${n}${a+1}`]=r[a],o),{})}).reduce((n,r)=>(n=Object.assign(Object.assign({},n),r),n),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e),t),MA(e,{generateColorPalettes:UA,generateNeutralColorPalettes:WA})),VA(e.fontSize)),HA(e)),DA(e)),LA(e))}const xw=Ef(GA),Bf={token:wa,override:{override:wa},hashed:!0},Cw=W.createContext(Bf),xl="ant",zm="anticon",qA=["outlined","borderless","filled","underlined"],KA=(e,t)=>t||(e?`${xl}-${e}`:xl),ut=v.createContext({getPrefixCls:KA,iconPrefixCls:zm}),{Consumer:bN}=ut,gg={};function Lm(e){const t=v.useContext(ut),{getPrefixCls:n,direction:r,getPopupContainer:o}=t,i=t[e];return Object.assign(Object.assign({classNames:gg,styles:gg},i),{getPrefixCls:n,direction:r,getPopupContainer:o})}const QA=`-ant-${Date.now()}-${Math.random()}`;function XA(e,t){const n={},r=(a,s)=>{let l=a.clone();return l=(s==null?void 0:s(l))||l,l.toRgbString()},o=(a,s)=>{const l=new ke(a),u=xa(l.toRgbString());n[`${s}-color`]=r(l),n[`${s}-color-disabled`]=u[1],n[`${s}-color-hover`]=u[4],n[`${s}-color-active`]=u[6],n[`${s}-color-outline`]=l.clone().setA(.2).toRgbString(),n[`${s}-color-deprecated-bg`]=u[0],n[`${s}-color-deprecated-border`]=u[2]};if(t.primaryColor){o(t.primaryColor,"primary");const a=new ke(t.primaryColor),s=xa(a.toRgbString());s.forEach((u,c)=>{n[`primary-${c+1}`]=u}),n["primary-color-deprecated-l-35"]=r(a,u=>u.lighten(35)),n["primary-color-deprecated-l-20"]=r(a,u=>u.lighten(20)),n["primary-color-deprecated-t-20"]=r(a,u=>u.tint(20)),n["primary-color-deprecated-t-50"]=r(a,u=>u.tint(50)),n["primary-color-deprecated-f-12"]=r(a,u=>u.setA(u.a*.12));const l=new ke(s[0]);n["primary-color-active-deprecated-f-30"]=r(l,u=>u.setA(u.a*.3)),n["primary-color-active-deprecated-d-02"]=r(l,u=>u.darken(2))}return t.successColor&&o(t.successColor,"success"),t.warningColor&&o(t.warningColor,"warning"),t.errorColor&&o(t.errorColor,"error"),t.infoColor&&o(t.infoColor,"info"),`
  :root {
    ${Object.keys(n).map(a=>`--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()}function JA(e,t){const n=XA(e,t);Jn()&&Gr(n,`${QA}-dynamic-theme`)}const no=v.createContext(!1),YA=({children:e,disabled:t})=>{const n=v.useContext(no);return v.createElement(no.Provider,{value:t??n},e)},ti=v.createContext(void 0),ZA=({children:e,size:t})=>{const n=v.useContext(ti);return v.createElement(ti.Provider,{value:t||n},e)};function e$(){const e=v.useContext(no),t=v.useContext(ti);return{componentDisabled:e,componentSize:t}}var Sw=dt(function e(){ct(this,e)}),Ew="CALC_UNIT",t$=new RegExp(Ew,"g");function Hc(e){return typeof e=="number"?"".concat(e).concat(Ew):e}var n$=function(e){Ir(n,e);var t=Fr(n);function n(r,o){var i;ct(this,n),i=t.call(this),P(se(i),"result",""),P(se(i),"unitlessCssVar",void 0),P(se(i),"lowPriority",void 0);var a=ee(r);return i.unitlessCssVar=o,r instanceof n?i.result="(".concat(r.result,")"):a==="number"?i.result=Hc(r):a==="string"&&(i.result=r),i}return dt(n,[{key:"add",value:function(o){return o instanceof n?this.result="".concat(this.result," + ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," + ").concat(Hc(o))),this.lowPriority=!0,this}},{key:"sub",value:function(o){return o instanceof n?this.result="".concat(this.result," - ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," - ").concat(Hc(o))),this.lowPriority=!0,this}},{key:"mul",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof n?this.result="".concat(this.result," * ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," * ").concat(o)),this.lowPriority=!1,this}},{key:"div",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof n?this.result="".concat(this.result," / ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," / ").concat(o)),this.lowPriority=!1,this}},{key:"getResult",value:function(o){return this.lowPriority||o?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(o){var i=this,a=o||{},s=a.unit,l=!0;return typeof s=="boolean"?l=s:Array.from(this.unitlessCssVar).some(function(u){return i.result.includes(u)})&&(l=!1),this.result=this.result.replace(t$,l?"px":""),typeof this.lowPriority<"u"?"calc(".concat(this.result,")"):this.result}}]),n}(Sw),r$=function(e){Ir(n,e);var t=Fr(n);function n(r){var o;return ct(this,n),o=t.call(this),P(se(o),"result",0),r instanceof n?o.result=r.result:typeof r=="number"&&(o.result=r),o}return dt(n,[{key:"add",value:function(o){return o instanceof n?this.result+=o.result:typeof o=="number"&&(this.result+=o),this}},{key:"sub",value:function(o){return o instanceof n?this.result-=o.result:typeof o=="number"&&(this.result-=o),this}},{key:"mul",value:function(o){return o instanceof n?this.result*=o.result:typeof o=="number"&&(this.result*=o),this}},{key:"div",value:function(o){return o instanceof n?this.result/=o.result:typeof o=="number"&&(this.result/=o),this}},{key:"equal",value:function(){return this.result}}]),n}(Sw),o$=function(t,n){var r=t==="css"?n$:r$;return function(o){return new r(o,n)}},yg=function(t,n){return"".concat([n,t.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-"))};function Tr(e){var t=v.useRef();t.current=e;var n=v.useCallback(function(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(r=t.current)===null||r===void 0?void 0:r.call.apply(r,[t].concat(i))},[]);return n}function Ca(e){var t=v.useRef(!1),n=v.useState(e),r=J(n,2),o=r[0],i=r[1];v.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function a(s,l){l&&t.current||i(s)}return[o,a]}function Uc(e){return e!==void 0}function Dm(e,t){var n=t||{},r=n.defaultValue,o=n.value,i=n.onChange,a=n.postState,s=Ca(function(){return Uc(o)?o:Uc(r)?typeof r=="function"?r():r:typeof e=="function"?e():e}),l=J(s,2),u=l[0],c=l[1],d=o!==void 0?o:u,f=a?a(d):d,w=Tr(i),h=Ca([d]),g=J(h,2),b=g[0],m=g[1];og(function(){var y=b[0];u!==y&&w(u,y)},[b]),og(function(){Uc(o)||c(o)},[o]);var p=Tr(function(y,C){c(y,C),m([d],C)});return[f,p]}function bg(e,t,n,r){var o=j({},t[e]);if(r!=null&&r.deprecatedTokens){var i=r.deprecatedTokens;i.forEach(function(s){var l=J(s,2),u=l[0],c=l[1];if(o!=null&&o[u]||o!=null&&o[c]){var d;(d=o[c])!==null&&d!==void 0||(o[c]=o==null?void 0:o[u])}})}var a=j(j({},n),o);return Object.keys(a).forEach(function(s){a[s]===t[s]&&delete a[s]}),a}var Ow=typeof CSSINJS_STATISTIC<"u",Vf=!0;function un(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!Ow)return Object.assign.apply(Object,[{}].concat(t));Vf=!1;var r={};return t.forEach(function(o){if(ee(o)==="object"){var i=Object.keys(o);i.forEach(function(a){Object.defineProperty(r,a,{configurable:!0,enumerable:!0,get:function(){return o[a]}})})}}),Vf=!0,r}var wg={};function i$(){}var a$=function(t){var n,r=t,o=i$;return Ow&&typeof Proxy<"u"&&(n=new Set,r=new Proxy(t,{get:function(a,s){if(Vf){var l;(l=n)===null||l===void 0||l.add(s)}return a[s]}}),o=function(a,s){var l;wg[a]={global:Array.from(n),component:j(j({},(l=wg[a])===null||l===void 0?void 0:l.component),s)}}),{token:r,keys:n,flush:o}};function xg(e,t,n){if(typeof n=="function"){var r;return n(un(t,(r=t[e])!==null&&r!==void 0?r:{}))}return n??{}}function s$(e){return e==="js"?{max:Math.max,min:Math.min}:{max:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return"max(".concat(r.map(function(i){return Ce(i)}).join(","),")")},min:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return"min(".concat(r.map(function(i){return Ce(i)}).join(","),")")}}}var l$=1e3*60*10,u$=function(){function e(){ct(this,e),P(this,"map",new Map),P(this,"objectIDMap",new WeakMap),P(this,"nextID",0),P(this,"lastAccessBeat",new Map),P(this,"accessBeat",0)}return dt(e,[{key:"set",value:function(n,r){this.clear();var o=this.getCompositeKey(n);this.map.set(o,r),this.lastAccessBeat.set(o,Date.now())}},{key:"get",value:function(n){var r=this.getCompositeKey(n),o=this.map.get(r);return this.lastAccessBeat.set(r,Date.now()),this.accessBeat+=1,o}},{key:"getCompositeKey",value:function(n){var r=this,o=n.map(function(i){return i&&ee(i)==="object"?"obj_".concat(r.getObjectID(i)):"".concat(ee(i),"_").concat(i)});return o.join("|")}},{key:"getObjectID",value:function(n){if(this.objectIDMap.has(n))return this.objectIDMap.get(n);var r=this.nextID;return this.objectIDMap.set(n,r),this.nextID+=1,r}},{key:"clear",value:function(){var n=this;if(this.accessBeat>1e4){var r=Date.now();this.lastAccessBeat.forEach(function(o,i){r-o>l$&&(n.map.delete(i),n.lastAccessBeat.delete(i))}),this.accessBeat=0}}}]),e}(),Cg=new u$;function c$(e,t){return W.useMemo(function(){var n=Cg.get(t);if(n)return n;var r=e();return Cg.set(t,r),r},t)}var d$=function(){return{}};function f$(e){var t=e.useCSP,n=t===void 0?d$:t,r=e.useToken,o=e.usePrefix,i=e.getResetStyles,a=e.getCommonStyle,s=e.getCompUnitless;function l(f,w,h,g){var b=Array.isArray(f)?f[0]:f;function m(O){return"".concat(String(b)).concat(O.slice(0,1).toUpperCase()).concat(O.slice(1))}var p=(g==null?void 0:g.unitless)||{},y=typeof s=="function"?s(f):{},C=j(j({},y),{},P({},m("zIndexPopup"),!0));Object.keys(p).forEach(function(O){C[m(O)]=p[O]});var x=j(j({},g),{},{unitless:C,prefixToken:m}),E=c(f,w,h,x),S=u(b,h,x);return function(O){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O,T=E(O,R),I=J(T,2),$=I[1],_=S(R),N=J(_,2),k=N[0],M=N[1];return[k,$,M]}}function u(f,w,h){var g=h.unitless,b=h.injectStyle,m=b===void 0?!0:b,p=h.prefixToken,y=h.ignore,C=function(S){var O=S.rootCls,R=S.cssVar,T=R===void 0?{}:R,I=r(),$=I.realToken;return SA({path:[f],prefix:T.prefix,key:T.key,unitless:g,ignore:y,token:$,scope:O},function(){var _=xg(f,$,w),N=bg(f,$,_,{deprecatedTokens:h==null?void 0:h.deprecatedTokens});return Object.keys(_).forEach(function(k){N[p(k)]=N[k],delete N[k]}),N}),null},x=function(S){var O=r(),R=O.cssVar;return[function(T){return m&&R?W.createElement(W.Fragment,null,W.createElement(C,{rootCls:S,cssVar:R,component:f}),T):T},R==null?void 0:R.key]};return x}function c(f,w,h){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},b=Array.isArray(f)?f:[f,f],m=J(b,1),p=m[0],y=b.join("-"),C=e.layer||{name:"antd"};return function(x){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x,S=r(),O=S.theme,R=S.realToken,T=S.hashId,I=S.token,$=S.cssVar,_=o(),N=_.rootPrefixCls,k=_.iconPrefixCls,M=n(),B=$?"css":"js",F=c$(function(){var z=new Set;return $&&Object.keys(g.unitless||{}).forEach(function(q){z.add(Fs(q,$.prefix)),z.add(Fs(q,yg(p,$.prefix)))}),o$(B,z)},[B,p,$==null?void 0:$.prefix]),V=s$(B),U=V.max,Q=V.min,G={theme:O,token:I,hashId:T,nonce:function(){return M.nonce},clientOnly:g.clientOnly,layer:C,order:g.order||-999};typeof i=="function"&&Pf(j(j({},G),{},{clientOnly:!1,path:["Shared",N]}),function(){return i(I,{prefix:{rootPrefixCls:N,iconPrefixCls:k},csp:M})});var K=Pf(j(j({},G),{},{path:[y,x,k]}),function(){if(g.injectStyle===!1)return[];var z=a$(I),q=z.token,H=z.flush,ie=xg(p,R,h),Y=".".concat(x),he=bg(p,R,ie,{deprecatedTokens:g.deprecatedTokens});$&&ie&&ee(ie)==="object"&&Object.keys(ie).forEach(function(Ie){ie[Ie]="var(".concat(Fs(Ie,yg(p,$.prefix)),")")});var pe=un(q,{componentCls:Y,prefixCls:x,iconCls:".".concat(k),antCls:".".concat(N),calc:F,max:U,min:Q},$?ie:he),Se=w(pe,{hashId:T,prefixCls:x,rootPrefixCls:N,iconPrefixCls:k});H(p,he);var Le=typeof a=="function"?a(pe,x,E,g.resetFont):null;return[g.resetStyle===!1?null:Le,Se]});return[K,T]}}function d(f,w,h){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},b=c(f,w,h,j({resetStyle:!1,order:-998},g)),m=function(y){var C=y.prefixCls,x=y.rootCls,E=x===void 0?C:x;return b(C,E),null};return m}return{genStyleHooks:l,genSubStyleComponent:d,genComponentStyleHook:c}}const Bm=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],p$="5.27.0";function Wc(e){return e>=0&&e<=255}function _i(e,t){const{r:n,g:r,b:o,a:i}=new ke(e).toRgb();if(i<1)return e;const{r:a,g:s,b:l}=new ke(t).toRgb();for(let u=.01;u<=1;u+=.01){const c=Math.round((n-a*(1-u))/u),d=Math.round((r-s*(1-u))/u),f=Math.round((o-l*(1-u))/u);if(Wc(c)&&Wc(d)&&Wc(f))return new ke({r:c,g:d,b:f,a:Math.round(u*100)/100}).toRgbString()}return new ke({r:n,g:r,b:o,a:1}).toRgbString()}var m$=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Tw(e){const{override:t}=e,n=m$(e,["override"]),r=Object.assign({},t);Object.keys(wa).forEach(f=>{delete r[f]});const o=Object.assign(Object.assign({},n),r),i=480,a=576,s=768,l=992,u=1200,c=1600;if(o.motion===!1){const f="0s";o.motionDurationFast=f,o.motionDurationMid=f,o.motionDurationSlow=f}return Object.assign(Object.assign(Object.assign({},o),{colorFillContent:o.colorFillSecondary,colorFillContentHover:o.colorFill,colorFillAlter:o.colorFillQuaternary,colorBgContainerDisabled:o.colorFillTertiary,colorBorderBg:o.colorBgContainer,colorSplit:_i(o.colorBorderSecondary,o.colorBgContainer),colorTextPlaceholder:o.colorTextQuaternary,colorTextDisabled:o.colorTextQuaternary,colorTextHeading:o.colorText,colorTextLabel:o.colorTextSecondary,colorTextDescription:o.colorTextTertiary,colorTextLightSolid:o.colorWhite,colorHighlight:o.colorError,colorBgTextHover:o.colorFillSecondary,colorBgTextActive:o.colorFill,colorIcon:o.colorTextTertiary,colorIconHover:o.colorText,colorErrorOutline:_i(o.colorErrorBg,o.colorBgContainer),colorWarningOutline:_i(o.colorWarningBg,o.colorBgContainer),fontSizeIcon:o.fontSizeSM,lineWidthFocus:o.lineWidth*3,lineWidth:o.lineWidth,controlOutlineWidth:o.lineWidth*2,controlInteractiveSize:o.controlHeight/2,controlItemBgHover:o.colorFillTertiary,controlItemBgActive:o.colorPrimaryBg,controlItemBgActiveHover:o.colorPrimaryBgHover,controlItemBgActiveDisabled:o.colorFill,controlTmpOutline:o.colorFillQuaternary,controlOutline:_i(o.colorPrimaryBg,o.colorBgContainer),lineType:o.lineType,borderRadius:o.borderRadius,borderRadiusXS:o.borderRadiusXS,borderRadiusSM:o.borderRadiusSM,borderRadiusLG:o.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:o.sizeXXS,paddingXS:o.sizeXS,paddingSM:o.sizeSM,padding:o.size,paddingMD:o.sizeMD,paddingLG:o.sizeLG,paddingXL:o.sizeXL,paddingContentHorizontalLG:o.sizeLG,paddingContentVerticalLG:o.sizeMS,paddingContentHorizontal:o.sizeMS,paddingContentVertical:o.sizeSM,paddingContentHorizontalSM:o.size,paddingContentVerticalSM:o.sizeXS,marginXXS:o.sizeXXS,marginXS:o.sizeXS,marginSM:o.sizeSM,margin:o.size,marginMD:o.sizeMD,marginLG:o.sizeLG,marginXL:o.sizeXL,marginXXL:o.sizeXXL,boxShadow:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:i,screenXSMin:i,screenXSMax:a-1,screenSM:a,screenSMMin:a,screenSMMax:s-1,screenMD:s,screenMDMin:s,screenMDMax:l-1,screenLG:l,screenLGMin:l,screenLGMax:u-1,screenXL:u,screenXLMin:u,screenXLMax:c-1,screenXXL:c,screenXXLMin:c,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new ke("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ke("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ke("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),r)}var Sg=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Rw={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0,opacityImage:!0},h$={motionBase:!0,motionUnit:!0},v$={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},Pw=(e,t,n)=>{const r=n.getDerivativeToken(e),{override:o}=t,i=Sg(t,["override"]);let a=Object.assign(Object.assign({},r),{override:o});return a=Tw(a),i&&Object.entries(i).forEach(([s,l])=>{const{theme:u}=l,c=Sg(l,["theme"]);let d=c;u&&(d=Pw(Object.assign(Object.assign({},a),c),{override:c},u)),a[s]=d}),a};function pi(){const{token:e,hashed:t,theme:n,override:r,cssVar:o}=W.useContext(Cw),i=`${p$}-${t||""}`,a=n||xw,[s,l,u]=Q2(a,[wa,e],{salt:i,override:r,getComputedToken:Pw,formatToken:Tw,cssVar:o&&{prefix:o.prefix,key:o.key,unitless:Rw,ignore:h$,preserve:v$}});return[a,u,t?l:"",s,o]}const Aw=(e,t=!1)=>({boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:t?"inherit":e.fontFamily}),$w=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),g$=()=>({"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}),y$=e=>({a:{color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive},"&:active, &:hover":{textDecoration:e.linkHoverDecoration,outline:0},"&:focus":{textDecoration:e.linkFocusDecoration,outline:0},"&[disabled]":{color:e.colorTextDisabled,cursor:"not-allowed"}}}),b$=(e,t,n,r)=>{const o=`[class^="${t}"], [class*=" ${t}"]`,i=n?`.${n}`:o,a={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}};let s={};return r!==!1&&(s={fontFamily:e.fontFamily,fontSize:e.fontSize}),{[i]:Object.assign(Object.assign(Object.assign({},s),a),{[o]:a})}},w$=(e,t)=>({outline:`${Ce(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,outlineOffset:1,transition:"outline-offset 0s, outline 0s"}),x$=(e,t)=>({"&:focus-visible":w$(e)}),Iw=e=>({[`.${e}`]:Object.assign(Object.assign({},$w()),{[`.${e} .${e}-icon`]:{display:"block"}})}),{genStyleHooks:Na,genComponentStyleHook:C$,genSubStyleComponent:S$}=f$({usePrefix:()=>{const{getPrefixCls:e,iconPrefixCls:t}=v.useContext(ut);return{rootPrefixCls:e(),iconPrefixCls:t}},useToken:()=>{const[e,t,n,r,o]=pi();return{theme:e,realToken:t,hashId:n,token:r,cssVar:o}},useCSP:()=>{const{csp:e}=v.useContext(ut);return e??{}},getResetStyles:(e,t)=>{var n;const r=y$(e);return[r,{"&":r},Iw((n=t==null?void 0:t.prefix.iconPrefixCls)!==null&&n!==void 0?n:zm)]},getCommonStyle:b$,getCompUnitless:()=>Rw}),E$=(e,t)=>{const[n,r]=pi();return Pf({token:r,hashId:"",path:["ant-design-icons",e],nonce:()=>t==null?void 0:t.nonce,layer:{name:"antd"}},()=>Iw(e))},O$=Object.assign({},Pl),{useId:Eg}=O$,T$=()=>"",R$=typeof Eg>"u"?T$:Eg;function P$(e,t,n){var r;const o=e||{},i=o.inherit===!1||!t?Object.assign(Object.assign({},Bf),{hashed:(r=t==null?void 0:t.hashed)!==null&&r!==void 0?r:Bf.hashed,cssVar:t==null?void 0:t.cssVar}):t,a=R$();return Tm(()=>{var s,l;if(!e)return t;const u=Object.assign({},i.components);Object.keys(e.components||{}).forEach(f=>{u[f]=Object.assign(Object.assign({},u[f]),e.components[f])});const c=`css-var-${a.replace(/:/g,"")}`,d=((s=o.cssVar)!==null&&s!==void 0?s:i.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:n==null?void 0:n.prefixCls},typeof i.cssVar=="object"?i.cssVar:{}),typeof o.cssVar=="object"?o.cssVar:{}),{key:typeof o.cssVar=="object"&&((l=o.cssVar)===null||l===void 0?void 0:l.key)||c});return Object.assign(Object.assign(Object.assign({},i),o),{token:Object.assign(Object.assign({},i.token),o.token),components:u,cssVar:d})},[o,i],(s,l)=>s.some((u,c)=>{const d=l[c];return!Cf(u,d,!0)}))}var A$=["children"],Fw=v.createContext({});function $$(e){var t=e.children,n=It(e,A$);return v.createElement(Fw.Provider,{value:n},t)}var I$=function(e){Ir(n,e);var t=Fr(n);function n(){return ct(this,n),t.apply(this,arguments)}return dt(n,[{key:"render",value:function(){return this.props.children}}]),n}(v.Component);function F$(e){var t=v.useReducer(function(s){return s+1},0),n=J(t,2),r=n[1],o=v.useRef(e),i=Tr(function(){return o.current}),a=Tr(function(s){o.current=typeof s=="function"?s(o.current):s,r()});return[i,a]}var er="none",us="appear",cs="enter",ds="leave",Og="none",hn="prepare",Po="start",Ao="active",Vm="end",_w="prepared";function Tg(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit".concat(e)]="webkit".concat(t),n["Moz".concat(e)]="moz".concat(t),n["ms".concat(e)]="MS".concat(t),n["O".concat(e)]="o".concat(t.toLowerCase()),n}function _$(e,t){var n={animationend:Tg("Animation","AnimationEnd"),transitionend:Tg("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete n.animationend.animation,"TransitionEvent"in t||delete n.transitionend.transition),n}var j$=_$(Jn(),typeof window<"u"?window:{}),jw={};if(Jn()){var N$=document.createElement("div");jw=N$.style}var fs={};function Nw(e){if(fs[e])return fs[e];var t=j$[e];if(t)for(var n=Object.keys(t),r=n.length,o=0;o<r;o+=1){var i=n[o];if(Object.prototype.hasOwnProperty.call(t,i)&&i in jw)return fs[e]=t[i],fs[e]}return""}var kw=Nw("animationend"),Mw=Nw("transitionend"),zw=!!(kw&&Mw),Rg=kw||"animationend",Pg=Mw||"transitionend";function Ag(e,t){if(!e)return null;if(ee(e)==="object"){var n=t.replace(/-\w/g,function(r){return r[1].toUpperCase()});return e[n]}return"".concat(e,"-").concat(t)}const k$=function(e){var t=v.useRef();function n(o){o&&(o.removeEventListener(Pg,e),o.removeEventListener(Rg,e))}function r(o){t.current&&t.current!==o&&n(t.current),o&&o!==t.current&&(o.addEventListener(Pg,e),o.addEventListener(Rg,e),t.current=o)}return v.useEffect(function(){return function(){n(t.current)}},[]),[r,n]};var Lw=Jn()?v.useLayoutEffect:v.useEffect;const M$=function(){var e=v.useRef(null);function t(){Mn.cancel(e.current)}function n(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;t();var i=Mn(function(){o<=1?r({isCanceled:function(){return i!==e.current}}):n(r,o-1)});e.current=i}return v.useEffect(function(){return function(){t()}},[]),[n,t]};var z$=[hn,Po,Ao,Vm],L$=[hn,_w],Dw=!1,D$=!0;function Bw(e){return e===Ao||e===Vm}const B$=function(e,t,n){var r=Ca(Og),o=J(r,2),i=o[0],a=o[1],s=M$(),l=J(s,2),u=l[0],c=l[1];function d(){a(hn,!0)}var f=t?L$:z$;return Lw(function(){if(i!==Og&&i!==Vm){var w=f.indexOf(i),h=f[w+1],g=n(i);g===Dw?a(h,!0):h&&u(function(b){function m(){b.isCanceled()||a(h,!0)}g===!0?m():Promise.resolve(g).then(m)})}},[e,i]),v.useEffect(function(){return function(){c()}},[]),[d,i]};function V$(e,t,n,r){var o=r.motionEnter,i=o===void 0?!0:o,a=r.motionAppear,s=a===void 0?!0:a,l=r.motionLeave,u=l===void 0?!0:l,c=r.motionDeadline,d=r.motionLeaveImmediately,f=r.onAppearPrepare,w=r.onEnterPrepare,h=r.onLeavePrepare,g=r.onAppearStart,b=r.onEnterStart,m=r.onLeaveStart,p=r.onAppearActive,y=r.onEnterActive,C=r.onLeaveActive,x=r.onAppearEnd,E=r.onEnterEnd,S=r.onLeaveEnd,O=r.onVisibleChanged,R=Ca(),T=J(R,2),I=T[0],$=T[1],_=F$(er),N=J(_,2),k=N[0],M=N[1],B=Ca(null),F=J(B,2),V=F[0],U=F[1],Q=k(),G=v.useRef(!1),K=v.useRef(null);function z(){return n()}var q=v.useRef(!1);function H(){M(er),U(null,!0)}var ie=Tr(function(Re){var Pe=k();if(Pe!==er){var ae=z();if(!(Re&&!Re.deadline&&Re.target!==ae)){var re=q.current,be;Pe===us&&re?be=x==null?void 0:x(ae,Re):Pe===cs&&re?be=E==null?void 0:E(ae,Re):Pe===ds&&re&&(be=S==null?void 0:S(ae,Re)),re&&be!==!1&&H()}}}),Y=k$(ie),he=J(Y,1),pe=he[0],Se=function(Pe){switch(Pe){case us:return P(P(P({},hn,f),Po,g),Ao,p);case cs:return P(P(P({},hn,w),Po,b),Ao,y);case ds:return P(P(P({},hn,h),Po,m),Ao,C);default:return{}}},Le=v.useMemo(function(){return Se(Q)},[Q]),Ie=B$(Q,!e,function(Re){if(Re===hn){var Pe=Le[hn];return Pe?Pe(z()):Dw}if(te in Le){var ae;U(((ae=Le[te])===null||ae===void 0?void 0:ae.call(Le,z(),null))||null)}return te===Ao&&Q!==er&&(pe(z()),c>0&&(clearTimeout(K.current),K.current=setTimeout(function(){ie({deadline:!0})},c))),te===_w&&H(),D$}),Ee=J(Ie,2),Ue=Ee[0],te=Ee[1],ce=Bw(te);q.current=ce;var me=v.useRef(null);Lw(function(){if(!(G.current&&me.current===t)){$(t);var Re=G.current;G.current=!0;var Pe;!Re&&t&&s&&(Pe=us),Re&&t&&i&&(Pe=cs),(Re&&!t&&u||!Re&&d&&!t&&u)&&(Pe=ds);var ae=Se(Pe);Pe&&(e||ae[hn])?(M(Pe),Ue()):M(er),me.current=t}},[t]),v.useEffect(function(){(Q===us&&!s||Q===cs&&!i||Q===ds&&!u)&&M(er)},[s,i,u]),v.useEffect(function(){return function(){G.current=!1,clearTimeout(K.current)}},[]);var Te=v.useRef(!1);v.useEffect(function(){I&&(Te.current=!0),I!==void 0&&Q===er&&((Te.current||I)&&(O==null||O(I)),Te.current=!0)},[I,Q]);var Qt=V;return Le[hn]&&te===Po&&(Qt=j({transition:"none"},Qt)),[Q,te,Qt,I??t]}function H$(e){var t=e;ee(e)==="object"&&(t=e.transitionSupport);function n(o,i){return!!(o.motionName&&t&&i!==!1)}var r=v.forwardRef(function(o,i){var a=o.visible,s=a===void 0?!0:a,l=o.removeOnLeave,u=l===void 0?!0:l,c=o.forceRender,d=o.children,f=o.motionName,w=o.leavedClassName,h=o.eventProps,g=v.useContext(Fw),b=g.motion,m=n(o,b),p=v.useRef(),y=v.useRef();function C(){try{return p.current instanceof HTMLElement?p.current:Is(y.current)}catch{return null}}var x=V$(m,s,C,o),E=J(x,4),S=E[0],O=E[1],R=E[2],T=E[3],I=v.useRef(T);T&&(I.current=!0);var $=v.useCallback(function(F){p.current=F,N1(i,F)},[i]),_,N=j(j({},h),{},{visible:s});if(!d)_=null;else if(S===er)T?_=d(j({},N),$):!u&&I.current&&w?_=d(j(j({},N),{},{className:w}),$):c||!u&&!w?_=d(j(j({},N),{},{style:{display:"none"}}),$):_=null;else{var k;O===hn?k="prepare":Bw(O)?k="active":O===Po&&(k="start");var M=Ag(f,"".concat(S,"-").concat(k));_=d(j(j({},N),{},{className:ne(Ag(f,S),P(P({},M,M&&k),f,typeof f=="string")),style:R}),$)}if(v.isValidElement(_)&&Rm(_)){var B=Pm(_);B||(_=v.cloneElement(_,{ref:$}))}return v.createElement(I$,{ref:y},_)});return r.displayName="CSSMotion",r}const Hm=H$(zw);var Hf="add",Uf="keep",Wf="remove",Gc="removed";function U$(e){var t;return e&&ee(e)==="object"&&"key"in e?t=e:t={key:e},j(j({},t),{},{key:String(t.key)})}function Gf(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(U$)}function W$(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=[],r=0,o=t.length,i=Gf(e),a=Gf(t);i.forEach(function(u){for(var c=!1,d=r;d<o;d+=1){var f=a[d];if(f.key===u.key){r<d&&(n=n.concat(a.slice(r,d).map(function(w){return j(j({},w),{},{status:Hf})})),r=d),n.push(j(j({},f),{},{status:Uf})),r+=1,c=!0;break}}c||n.push(j(j({},u),{},{status:Wf}))}),r<o&&(n=n.concat(a.slice(r).map(function(u){return j(j({},u),{},{status:Hf})})));var s={};n.forEach(function(u){var c=u.key;s[c]=(s[c]||0)+1});var l=Object.keys(s).filter(function(u){return s[u]>1});return l.forEach(function(u){n=n.filter(function(c){var d=c.key,f=c.status;return d!==u||f!==Wf}),n.forEach(function(c){c.key===u&&(c.status=Uf)})}),n}var G$=["component","children","onVisibleChanged","onAllRemoved"],q$=["status"],K$=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function Q$(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hm,n=function(r){Ir(i,r);var o=Fr(i);function i(){var a;ct(this,i);for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];return a=o.call.apply(o,[this].concat(l)),P(se(a),"state",{keyEntities:[]}),P(se(a),"removeKey",function(c){a.setState(function(d){var f=d.keyEntities.map(function(w){return w.key!==c?w:j(j({},w),{},{status:Gc})});return{keyEntities:f}},function(){var d=a.state.keyEntities,f=d.filter(function(w){var h=w.status;return h!==Gc}).length;f===0&&a.props.onAllRemoved&&a.props.onAllRemoved()})}),a}return dt(i,[{key:"render",value:function(){var s=this,l=this.state.keyEntities,u=this.props,c=u.component,d=u.children,f=u.onVisibleChanged;u.onAllRemoved;var w=It(u,G$),h=c||v.Fragment,g={};return K$.forEach(function(b){g[b]=w[b],delete w[b]}),delete w.keys,v.createElement(h,w,l.map(function(b,m){var p=b.status,y=It(b,q$),C=p===Hf||p===Uf;return v.createElement(t,Je({},g,{key:y.key,visible:C,eventProps:y,onVisibleChanged:function(E){f==null||f(E,{key:y.key}),E||s.removeKey(y.key)}}),function(x,E){return d(j(j({},x),{},{index:m}),E)})}))}}],[{key:"getDerivedStateFromProps",value:function(s,l){var u=s.keys,c=l.keyEntities,d=Gf(u),f=W$(c,d);return{keyEntities:f.filter(function(w){var h=c.find(function(g){var b=g.key;return w.key===b});return!(h&&h.status===Gc&&w.status===Wf)})}}}]),i}(v.Component);return P(n,"defaultProps",{component:"div"}),n}Q$(zw);const $g=v.createContext(!0);function X$(e){const t=v.useContext($g),{children:n}=e,[,r]=pi(),{motion:o}=r,i=v.useRef(!1);return i.current||(i.current=t!==o),i.current?v.createElement($g.Provider,{value:o},v.createElement($$,{motion:o},n)):n}const J$=()=>null;var Y$=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Z$=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"];let Vw;function eI(){return Vw||xl}function tI(e){return Object.keys(e).some(t=>t.endsWith("Color"))}const nI=e=>{const{prefixCls:t,iconPrefixCls:n,theme:r,holderRender:o}=e;t!==void 0&&(Vw=t),r&&tI(r)&&JA(eI(),r)},rI=e=>{const{children:t,csp:n,autoInsertSpaceInButton:r,alert:o,anchor:i,form:a,locale:s,componentSize:l,direction:u,space:c,splitter:d,virtual:f,dropdownMatchSelectWidth:w,popupMatchSelectWidth:h,popupOverflow:g,legacyLocale:b,parentContext:m,iconPrefixCls:p,theme:y,componentDisabled:C,segmented:x,statistic:E,spin:S,calendar:O,carousel:R,cascader:T,collapse:I,typography:$,checkbox:_,descriptions:N,divider:k,drawer:M,skeleton:B,steps:F,image:V,layout:U,list:Q,mentions:G,modal:K,progress:z,result:q,slider:H,breadcrumb:ie,menu:Y,pagination:he,input:pe,textArea:Se,empty:Le,badge:Ie,radio:Ee,rate:Ue,switch:te,transfer:ce,avatar:me,message:Te,tag:Qt,table:Re,card:Pe,tabs:ae,timeline:re,timePicker:be,upload:Xt,notification:Ft,tree:_t,colorPicker:jt,datePicker:En,rangePicker:ao,flex:so,wave:Fe,dropdown:de,warning:Nt,tour:On,tooltip:Ze,popover:cn,popconfirm:vi,floatButton:Sx,floatButtonGroup:Ex,variant:Ox,inputNumber:Tx,treeSelect:Rx}=e,Xm=v.useCallback((qe,it)=>{const{prefixCls:Tn}=e;if(it)return it;const Rn=Tn||m.getPrefixCls("");return qe?`${Rn}-${qe}`:Rn},[m.getPrefixCls,e.prefixCls]),Ba=p||m.iconPrefixCls||zm,Va=n||m.csp;E$(Ba,Va);const qu=P$(y,m.theme,{prefixCls:Xm("")}),Ku={csp:Va,autoInsertSpaceInButton:r,alert:o,anchor:i,locale:s||b,direction:u,space:c,splitter:d,virtual:f,popupMatchSelectWidth:h??w,popupOverflow:g,getPrefixCls:Xm,iconPrefixCls:Ba,theme:qu,segmented:x,statistic:E,spin:S,calendar:O,carousel:R,cascader:T,collapse:I,typography:$,checkbox:_,descriptions:N,divider:k,drawer:M,skeleton:B,steps:F,image:V,input:pe,textArea:Se,layout:U,list:Q,mentions:G,modal:K,progress:z,result:q,slider:H,breadcrumb:ie,menu:Y,pagination:he,empty:Le,badge:Ie,radio:Ee,rate:Ue,switch:te,transfer:ce,avatar:me,message:Te,tag:Qt,table:Re,card:Pe,tabs:ae,timeline:re,timePicker:be,upload:Xt,notification:Ft,tree:_t,colorPicker:jt,datePicker:En,rangePicker:ao,flex:so,wave:Fe,dropdown:de,warning:Nt,tour:On,tooltip:Ze,popover:cn,popconfirm:vi,floatButton:Sx,floatButtonGroup:Ex,variant:Ox,inputNumber:Tx,treeSelect:Rx},lo=Object.assign({},m);Object.keys(Ku).forEach(qe=>{Ku[qe]!==void 0&&(lo[qe]=Ku[qe])}),Z$.forEach(qe=>{const it=e[qe];it&&(lo[qe]=it)}),typeof r<"u"&&(lo.button=Object.assign({autoInsertSpace:r},lo.button));const uo=Tm(()=>lo,lo,(qe,it)=>{const Tn=Object.keys(qe),Rn=Object.keys(it);return Tn.length!==Rn.length||Tn.some(Ha=>qe[Ha]!==it[Ha])}),{layer:Jm}=v.useContext(ja),Px=v.useMemo(()=>({prefixCls:Ba,csp:Va,layer:Jm?"antd":void 0}),[Ba,Va,Jm]);let ot=v.createElement(v.Fragment,null,v.createElement(J$,{dropdownMatchSelectWidth:w}),t);const Ym=v.useMemo(()=>{var qe,it,Tn,Rn;return Ro(((qe=Nu.Form)===null||qe===void 0?void 0:qe.defaultValidateMessages)||{},((Tn=(it=uo.locale)===null||it===void 0?void 0:it.Form)===null||Tn===void 0?void 0:Tn.defaultValidateMessages)||{},((Rn=uo.form)===null||Rn===void 0?void 0:Rn.validateMessages)||{},(a==null?void 0:a.validateMessages)||{})},[uo,a==null?void 0:a.validateMessages]);Object.keys(Ym).length>0&&(ot=v.createElement(AA.Provider,{value:Ym},ot)),s&&(ot=v.createElement(FA,{locale:s,_ANT_MARK__:IA},ot)),ot=v.createElement(Mm.Provider,{value:Px},ot),l&&(ot=v.createElement(ZA,{size:l},ot)),ot=v.createElement(X$,null,ot);const Ax=v.useMemo(()=>{const qe=qu||{},{algorithm:it,token:Tn,components:Rn,cssVar:Ha}=qe,$x=Y$(qe,["algorithm","token","components","cssVar"]),Zm=it&&(!Array.isArray(it)||it.length>0)?Ef(it):xw,Qu={};Object.entries(Rn||{}).forEach(([Ix,Fx])=>{const Ln=Object.assign({},Fx);"algorithm"in Ln&&(Ln.algorithm===!0?Ln.theme=Zm:(Array.isArray(Ln.algorithm)||typeof Ln.algorithm=="function")&&(Ln.theme=Ef(Ln.algorithm)),delete Ln.algorithm),Qu[Ix]=Ln});const eh=Object.assign(Object.assign({},wa),Tn);return Object.assign(Object.assign({},$x),{theme:Zm,token:eh,components:Qu,override:Object.assign({override:eh},Qu),cssVar:Ha})},[qu]);return y&&(ot=v.createElement(Cw.Provider,{value:Ax},ot)),uo.warning&&(ot=v.createElement(PA.Provider,{value:uo.warning},ot)),C!==void 0&&(ot=v.createElement(YA,{disabled:C},ot)),v.createElement(ut.Provider,{value:uo},ot)},ka=e=>{const t=v.useContext(ut),n=v.useContext(gw);return v.createElement(rI,Object.assign({parentContext:t,legacyLocale:n},e))};ka.ConfigContext=ut;ka.SizeContext=ti;ka.config=nI;ka.useConfig=e$;Object.defineProperty(ka,"SizeContext",{get:()=>ti});function Hw(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}function oI(e){return Hw(e)instanceof ShadowRoot}function iI(e){return oI(e)?Hw(e):null}function aI(e){return e.replace(/-(.)/g,function(t,n){return n.toUpperCase()})}function sI(e,t){Ht(e,"[@ant-design/icons] ".concat(t))}function Ig(e){return ee(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(ee(e.icon)==="object"||typeof e.icon=="function")}function Fg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(t,n){var r=e[n];switch(n){case"class":t.className=r,delete t.class;break;default:delete t[n],t[aI(n)]=r}return t},{})}function qf(e,t,n){return n?W.createElement(e.tag,j(j({key:t},Fg(e.attrs)),n),(e.children||[]).map(function(r,o){return qf(r,"".concat(t,"-").concat(e.tag,"-").concat(o))})):W.createElement(e.tag,j({key:t},Fg(e.attrs)),(e.children||[]).map(function(r,o){return qf(r,"".concat(t,"-").concat(e.tag,"-").concat(o))}))}function Uw(e){return xa(e)[0]}function Ww(e){return e?Array.isArray(e)?e:[e]:[]}var lI=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,uI=function(t){var n=v.useContext(Mm),r=n.csp,o=n.prefixCls,i=n.layer,a=lI;o&&(a=a.replace(/anticon/g,o)),i&&(a="@layer ".concat(i,` {
`).concat(a,`
}`)),v.useEffect(function(){var s=t.current,l=iI(s);Gr(a,"@ant-design-icons",{prepend:!i,csp:r,attachTo:l})},[])},cI=["icon","className","onClick","style","primaryColor","secondaryColor"],Wi={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function dI(e){var t=e.primaryColor,n=e.secondaryColor;Wi.primaryColor=t,Wi.secondaryColor=n||Uw(t),Wi.calculated=!!n}function fI(){return j({},Wi)}var mi=function(t){var n=t.icon,r=t.className,o=t.onClick,i=t.style,a=t.primaryColor,s=t.secondaryColor,l=It(t,cI),u=v.useRef(),c=Wi;if(a&&(c={primaryColor:a,secondaryColor:s||Uw(a)}),uI(u),sI(Ig(n),"icon should be icon definiton, but got ".concat(n)),!Ig(n))return null;var d=n;return d&&typeof d.icon=="function"&&(d=j(j({},d),{},{icon:d.icon(c.primaryColor,c.secondaryColor)})),qf(d.icon,"svg-".concat(d.name),j(j({className:r,onClick:o,style:i,"data-icon":d.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l),{},{ref:u}))};mi.displayName="IconReact";mi.getTwoToneColors=fI;mi.setTwoToneColors=dI;function Gw(e){var t=Ww(e),n=J(t,2),r=n[0],o=n[1];return mi.setTwoToneColors({primaryColor:r,secondaryColor:o})}function pI(){var e=mi.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var mI=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];Gw(wl.primary);var Yn=v.forwardRef(function(e,t){var n=e.className,r=e.icon,o=e.spin,i=e.rotate,a=e.tabIndex,s=e.onClick,l=e.twoToneColor,u=It(e,mI),c=v.useContext(Mm),d=c.prefixCls,f=d===void 0?"anticon":d,w=c.rootClassName,h=ne(w,f,P(P({},"".concat(f,"-").concat(r.name),!!r.name),"".concat(f,"-spin"),!!o||r.name==="loading"),n),g=a;g===void 0&&s&&(g=-1);var b=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,m=Ww(l),p=J(m,2),y=p[0],C=p[1];return v.createElement("span",Je({role:"img","aria-label":r.name},u,{ref:t,tabIndex:g,onClick:s,className:h}),v.createElement(mi,{icon:r,primaryColor:y,secondaryColor:C,style:b}))});Yn.displayName="AntdIcon";Yn.getTwoToneColor=pI;Yn.setTwoToneColor=Gw;var hI={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"},vI=function(t,n){return v.createElement(Yn,Je({},t,{ref:n,icon:hI}))},gI=v.forwardRef(vI),yI=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,bI=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,wI="".concat(yI," ").concat(bI).split(/[\s\n]+/),xI="aria-",CI="data-";function _g(e,t){return e.indexOf(t)===0}function SI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;t===!1?n={aria:!0,data:!0,attr:!0}:t===!0?n={aria:!0}:n=j({},t);var r={};return Object.keys(e).forEach(function(o){(n.aria&&(o==="role"||_g(o,xI))||n.data&&_g(o,CI)||n.attr&&wI.includes(o))&&(r[o]=e[o])}),r}function EI(e){return e&&W.isValidElement(e)&&e.type===W.Fragment}const OI=(e,t,n)=>W.isValidElement(e)?W.cloneElement(e,typeof n=="function"?n(e.props||{}):n):t;function Cl(e,t){return OI(e,e,t)}const qw=e=>{const[,,,,t]=pi();return t?`${e}-css-var`:""};var TI={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},RI=function(t,n){return v.createElement(Yn,Je({},t,{ref:n,icon:TI}))},PI=v.forwardRef(RI);function Kw(e,t){this.v=e,this.k=t}function ht(e,t,n,r){var o=Object.defineProperty;try{o({},"",{})}catch{o=0}ht=function(a,s,l,u){function c(d,f){ht(a,d,function(w){return this._invoke(d,f,w)})}s?o?o(a,s,{value:l,enumerable:!u,configurable:!u,writable:!u}):a[s]=l:(c("next",0),c("throw",1),c("return",2))},ht(e,t,n,r)}function Um(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,n=typeof Symbol=="function"?Symbol:{},r=n.iterator||"@@iterator",o=n.toStringTag||"@@toStringTag";function i(w,h,g,b){var m=h&&h.prototype instanceof s?h:s,p=Object.create(m.prototype);return ht(p,"_invoke",function(y,C,x){var E,S,O,R=0,T=x||[],I=!1,$={p:0,n:0,v:e,a:_,f:_.bind(e,4),d:function(k,M){return E=k,S=0,O=e,$.n=M,a}};function _(N,k){for(S=N,O=k,t=0;!I&&R&&!M&&t<T.length;t++){var M,B=T[t],F=$.p,V=B[2];N>3?(M=V===k)&&(O=B[(S=B[4])?5:(S=3,3)],B[4]=B[5]=e):B[0]<=F&&((M=N<2&&F<B[1])?(S=0,$.v=k,$.n=B[1]):F<V&&(M=N<3||B[0]>k||k>V)&&(B[4]=N,B[5]=k,$.n=V,S=0))}if(M||N>1)return a;throw I=!0,k}return function(N,k,M){if(R>1)throw TypeError("Generator is already running");for(I&&k===1&&_(k,M),S=k,O=M;(t=S<2?e:O)||!I;){E||(S?S<3?(S>1&&($.n=-1),_(S,O)):$.n=O:$.v=O);try{if(R=2,E){if(S||(N="next"),t=E[N]){if(!(t=t.call(E,O)))throw TypeError("iterator result is not an object");if(!t.done)return t;O=t.value,S<2&&(S=0)}else S===1&&(t=E.return)&&t.call(E),S<2&&(O=TypeError("The iterator does not provide a '"+N+"' method"),S=1);E=e}else if((t=(I=$.n<0)?O:y.call(C,$))!==a)break}catch(B){E=e,S=1,O=B}finally{R=1}}return{value:t,done:I}}}(w,g,b),!0),p}var a={};function s(){}function l(){}function u(){}t=Object.getPrototypeOf;var c=[][r]?t(t([][r]())):(ht(t={},r,function(){return this}),t),d=u.prototype=s.prototype=Object.create(c);function f(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,u):(w.__proto__=u,ht(w,o,"GeneratorFunction")),w.prototype=Object.create(d),w}return l.prototype=u,ht(d,"constructor",u),ht(u,"constructor",l),l.displayName="GeneratorFunction",ht(u,o,"GeneratorFunction"),ht(d),ht(d,o,"Generator"),ht(d,r,function(){return this}),ht(d,"toString",function(){return"[object Generator]"}),(Um=function(){return{w:i,m:f}})()}function Sl(e,t){function n(o,i,a,s){try{var l=e[o](i),u=l.value;return u instanceof Kw?t.resolve(u.v).then(function(c){n("next",c,a,s)},function(c){n("throw",c,a,s)}):t.resolve(u).then(function(c){l.value=c,a(l)},function(c){return n("throw",c,a,s)})}catch(c){s(c)}}var r;this.next||(ht(Sl.prototype),ht(Sl.prototype,typeof Symbol=="function"&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),ht(this,"_invoke",function(o,i,a){function s(){return new t(function(l,u){n(o,a,l,u)})}return r=r?r.then(s,s):s()},!0)}function Qw(e,t,n,r,o){return new Sl(Um().w(e,t,n,r),o||Promise)}function AI(e,t,n,r,o){var i=Qw(e,t,n,r,o);return i.next().then(function(a){return a.done?a.value:i.next()})}function $I(e){var t=Object(e),n=[];for(var r in t)n.unshift(r);return function o(){for(;n.length;)if((r=n.pop())in t)return o.value=r,o.done=!1,o;return o.done=!0,o}}function jg(e){if(e!=null){var t=e[typeof Symbol=="function"&&Symbol.iterator||"@@iterator"],n=0;if(t)return t.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}throw new TypeError(ee(e)+" is not iterable")}function bt(){var e=Um(),t=e.m(bt),n=(Object.getPrototypeOf?Object.getPrototypeOf(t):t.__proto__).constructor;function r(a){var s=typeof a=="function"&&a.constructor;return!!s&&(s===n||(s.displayName||s.name)==="GeneratorFunction")}var o={throw:1,return:2,break:3,continue:3};function i(a){var s,l;return function(u){s||(s={stop:function(){return l(u.a,2)},catch:function(){return u.v},abrupt:function(d,f){return l(u.a,o[d],f)},delegateYield:function(d,f,w){return s.resultName=f,l(u.d,jg(d),w)},finish:function(d){return l(u.f,d)}},l=function(d,f,w){u.p=s.prev,u.n=s.next;try{return d(f,w)}finally{s.next=u.n}}),s.resultName&&(s[s.resultName]=u.v,s.resultName=void 0),s.sent=u.v,s.next=u.n;try{return a.call(this,s)}finally{u.p=s.prev,u.n=s.next}}}return(bt=function(){return{wrap:function(l,u,c,d){return e.w(i(l),u,c,d&&d.reverse())},isGeneratorFunction:r,mark:e.m,awrap:function(l,u){return new Kw(l,u)},AsyncIterator:Sl,async:function(l,u,c,d,f){return(r(u)?Qw:AI)(i(l),u,c,d,f)},keys:$I,values:jg}})()}function Ng(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(u){return void n(u)}s.done?t(l):Promise.resolve(l).then(r,o)}function io(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(l){Ng(i,r,o,a,s,"next",l)}function s(l){Ng(i,r,o,a,s,"throw",l)}a(void 0)})}}var Ma=j({},oE),II=Ma.version,qc=Ma.render,FI=Ma.unmountComponentAtNode,ku;try{var _I=Number((II||"").split(".")[0]);_I>=18&&(ku=Ma.createRoot)}catch{}function kg(e){var t=Ma.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&ee(t)==="object"&&(t.usingClientEntryPoint=e)}var El="__rc_react_root__";function jI(e,t){kg(!0);var n=t[El]||ku(t);kg(!1),n.render(e),t[El]=n}function NI(e,t){qc==null||qc(e,t)}function kI(e,t){if(ku){jI(e,t);return}NI(e,t)}function MI(e){return Kf.apply(this,arguments)}function Kf(){return Kf=io(bt().mark(function e(t){return bt().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.resolve().then(function(){var o;(o=t[El])===null||o===void 0||o.unmount(),delete t[El]}));case 1:case"end":return r.stop()}},e)})),Kf.apply(this,arguments)}function zI(e){FI(e)}function LI(e){return Qf.apply(this,arguments)}function Qf(){return Qf=io(bt().mark(function e(t){return bt().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(ku===void 0){r.next=2;break}return r.abrupt("return",MI(t));case 2:zI(t);case 3:case"end":return r.stop()}},e)})),Qf.apply(this,arguments)}const DI=(e,t)=>(kI(e,t),()=>LI(t));let BI=DI;function VI(e){return BI}function Wm(e,t){var n=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(r){delete n[r]}),n}const HI=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),n=t.width,r=t.height;if(n||r)return!0}if(e.getBoundingClientRect){var o=e.getBoundingClientRect(),i=o.width,a=o.height;if(i||a)return!0}}return!1},UI=e=>{const{componentCls:t,colorPrimary:n}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${n})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},WI=C$("Wave",UI),Xw=`${xl}-wave-target`;function Kc(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"&&e!=="canvastext"}function GI(e){const{borderTopColor:t,borderColor:n,backgroundColor:r}=getComputedStyle(e);return Kc(t)?t:Kc(n)?n:Kc(r)?r:null}function Qc(e){return Number.isNaN(e)?0:e}const qI=e=>{const{className:t,target:n,component:r,registerUnmount:o}=e,i=v.useRef(null),a=v.useRef(null);v.useEffect(()=>{a.current=o()},[]);const[s,l]=v.useState(null),[u,c]=v.useState([]),[d,f]=v.useState(0),[w,h]=v.useState(0),[g,b]=v.useState(0),[m,p]=v.useState(0),[y,C]=v.useState(!1),x={left:d,top:w,width:g,height:m,borderRadius:u.map(O=>`${O}px`).join(" ")};s&&(x["--wave-color"]=s);function E(){const O=getComputedStyle(n);l(GI(n));const R=O.position==="static",{borderLeftWidth:T,borderTopWidth:I}=O;f(R?n.offsetLeft:Qc(-parseFloat(T))),h(R?n.offsetTop:Qc(-parseFloat(I))),b(n.offsetWidth),p(n.offsetHeight);const{borderTopLeftRadius:$,borderTopRightRadius:_,borderBottomLeftRadius:N,borderBottomRightRadius:k}=O;c([$,_,k,N].map(M=>Qc(parseFloat(M))))}if(v.useEffect(()=>{if(n){const O=Mn(()=>{E(),C(!0)});let R;return typeof ResizeObserver<"u"&&(R=new ResizeObserver(E),R.observe(n)),()=>{Mn.cancel(O),R==null||R.disconnect()}}},[]),!y)return null;const S=(r==="Checkbox"||r==="Radio")&&(n==null?void 0:n.classList.contains(Xw));return v.createElement(Hm,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(O,R)=>{var T,I;if(R.deadline||R.propertyName==="opacity"){const $=(T=i.current)===null||T===void 0?void 0:T.parentElement;(I=a.current)===null||I===void 0||I.call(a).then(()=>{$==null||$.remove()})}return!1}},({className:O},R)=>v.createElement("div",{ref:di(i,R),className:ne(t,O,{"wave-quick":S}),style:x}))},KI=(e,t)=>{var n;const{component:r}=t;if(r==="Checkbox"&&!(!((n=e.querySelector("input"))===null||n===void 0)&&n.checked))return;const o=document.createElement("div");o.style.position="absolute",o.style.left="0px",o.style.top="0px",e==null||e.insertBefore(o,e==null?void 0:e.firstChild);const i=VI();let a=null;function s(){return a}a=i(v.createElement(qI,Object.assign({},t,{target:e,registerUnmount:s})),o)},QI=(e,t,n)=>{const{wave:r}=v.useContext(ut),[,o,i]=pi(),a=Tr(u=>{const c=e.current;if(r!=null&&r.disabled||!c)return;const d=c.querySelector(`.${Xw}`)||c,{showEffect:f}=r||{};(f||KI)(d,{className:t,token:o,component:n,event:u,hashId:i})}),s=v.useRef(null);return u=>{Mn.cancel(s.current),s.current=Mn(()=>{a(u)})}},XI=e=>{const{children:t,disabled:n,component:r}=e,{getPrefixCls:o}=v.useContext(ut),i=v.useRef(null),a=o("wave"),[,s]=WI(a),l=QI(i,ne(a,s),r);if(W.useEffect(()=>{const c=i.current;if(!c||c.nodeType!==1||n)return;const d=f=>{!HI(f.target)||!c.getAttribute||c.getAttribute("disabled")||c.disabled||c.className.includes("disabled")||c.className.includes("-leave")||l(f)};return c.addEventListener("click",d,!0),()=>{c.removeEventListener("click",d,!0)}},[n]),!W.isValidElement(t))return t??null;const u=Rm(t)?di(Pm(t),i):i;return Cl(t,{ref:u})},za=e=>{const t=W.useContext(ti);return W.useMemo(()=>e?typeof e=="string"?e??t:typeof e=="function"?e(t):t:t,[e,t])},Jw=v.createContext(null),Mu=(e,t)=>{const n=v.useContext(Jw),r=v.useMemo(()=>{if(!n)return"";const{compactDirection:o,isFirstItem:i,isLastItem:a}=n,s=o==="vertical"?"-vertical-":"-";return ne(`${e}-compact${s}item`,{[`${e}-compact${s}first-item`]:i,[`${e}-compact${s}last-item`]:a,[`${e}-compact${s}item-rtl`]:t==="rtl"})},[e,t,n]);return{compactSize:n==null?void 0:n.compactSize,compactDirection:n==null?void 0:n.compactDirection,compactItemClassnames:r}},JI=e=>{const{children:t}=e;return v.createElement(Jw.Provider,{value:null},t)};var YI=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Yw=v.createContext(void 0),ZI=e=>{const{getPrefixCls:t,direction:n}=v.useContext(ut),{prefixCls:r,size:o,className:i}=e,a=YI(e,["prefixCls","size","className"]),s=t("btn-group",r),[,,l]=pi(),u=v.useMemo(()=>{switch(o){case"large":return"lg";case"small":return"sm";default:return""}},[o]),c=ne(s,{[`${s}-${u}`]:u,[`${s}-rtl`]:n==="rtl"},i,l);return v.createElement(Yw.Provider,{value:o},v.createElement("div",Object.assign({},a,{className:c})))},Mg=/^[\u4E00-\u9FA5]{2}$/,Xf=Mg.test.bind(Mg);function zg(e){return typeof e=="string"}function Xc(e){return e==="text"||e==="link"}function eF(e,t){if(e==null)return;const n=t?" ":"";return typeof e!="string"&&typeof e!="number"&&zg(e.type)&&Xf(e.props.children)?Cl(e,{children:e.props.children.split("").join(n)}):zg(e)?Xf(e)?W.createElement("span",null,e.split("").join(n)):W.createElement("span",null,e):EI(e)?W.createElement("span",null,e):e}function tF(e,t){let n=!1;const r=[];return W.Children.forEach(e,o=>{const i=typeof o,a=i==="string"||i==="number";if(n&&a){const s=r.length-1,l=r[s];r[s]=`${l}${o}`}else r.push(o);n=a}),W.Children.map(r,o=>eF(o,t))}["default","primary","danger"].concat(Z(Bm));const Jf=v.forwardRef((e,t)=>{const{className:n,style:r,children:o,prefixCls:i}=e,a=ne(`${i}-icon`,n);return W.createElement("span",{ref:t,className:a,style:r},o)}),Lg=v.forwardRef((e,t)=>{const{prefixCls:n,className:r,style:o,iconClassName:i}=e,a=ne(`${n}-loading-icon`,r);return W.createElement(Jf,{prefixCls:n,className:a,style:o,ref:t},W.createElement(PI,{className:i}))}),Jc=()=>({width:0,opacity:0,transform:"scale(0)"}),Yc=e=>({width:e.scrollWidth,opacity:1,transform:"scale(1)"}),nF=e=>{const{prefixCls:t,loading:n,existIcon:r,className:o,style:i,mount:a}=e,s=!!n;return r?W.createElement(Lg,{prefixCls:t,className:o,style:i}):W.createElement(Hm,{visible:s,motionName:`${t}-loading-icon-motion`,motionAppear:!a,motionEnter:!a,motionLeave:!a,removeOnLeave:!0,onAppearStart:Jc,onAppearActive:Yc,onEnterStart:Jc,onEnterActive:Yc,onLeaveStart:Yc,onLeaveActive:Jc},({className:l,style:u},c)=>{const d=Object.assign(Object.assign({},i),u);return W.createElement(Lg,{prefixCls:t,className:ne(o,l),style:d,ref:c})})},Dg=(e,t)=>({[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineEndColor:t}}},"&:not(:first-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineStartColor:t}}}}}),rF=e=>{const{componentCls:t,fontSize:n,lineWidth:r,groupBorderColor:o,colorErrorHover:i}=e;return{[`${t}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:e.calc(r).mul(-1).equal(),[`&, & > ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[t]:{position:"relative",zIndex:1,"&:hover, &:focus, &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${t}-icon-only`]:{fontSize:n}},Dg(`${t}-primary`,o),Dg(`${t}-danger`,i)]}};var oF=["b"],iF=["v"],Zc=function(t){return Math.round(Number(t||0))},aF=function(t){if(t instanceof ke)return t;if(t&&ee(t)==="object"&&"h"in t&&"b"in t){var n=t,r=n.b,o=It(n,oF);return j(j({},o),{},{v:r})}return typeof t=="string"&&/hsb/.test(t)?t.replace(/hsb/,"hsv"):t},Sa=function(e){Ir(n,e);var t=Fr(n);function n(r){return ct(this,n),t.call(this,aF(r))}return dt(n,[{key:"toHsbString",value:function(){var o=this.toHsb(),i=Zc(o.s*100),a=Zc(o.b*100),s=Zc(o.h),l=o.a,u="hsb(".concat(s,", ").concat(i,"%, ").concat(a,"%)"),c="hsba(".concat(s,", ").concat(i,"%, ").concat(a,"%, ").concat(l.toFixed(l===0?0:2),")");return l===1?u:c}},{key:"toHsb",value:function(){var o=this.toHsv(),i=o.v,a=It(o,iF);return j(j({},a),{},{b:i,a:this.a})}}]),n}(ke),sF=function(t){return t instanceof Sa?t:new Sa(t)};sF("#1677ff");const lF=(e,t)=>(e==null?void 0:e.replace(/[^\w/]/g,"").slice(0,t?8:6))||"",uF=(e,t)=>e?lF(e,t):"";let cF=function(){function e(t){ct(this,e);var n;if(this.cleared=!1,t instanceof e){this.metaColor=t.metaColor.clone(),this.colors=(n=t.colors)===null||n===void 0?void 0:n.map(o=>({color:new e(o.color),percent:o.percent})),this.cleared=t.cleared;return}const r=Array.isArray(t);r&&t.length?(this.colors=t.map(({color:o,percent:i})=>({color:new e(o),percent:i})),this.metaColor=new Sa(this.colors[0].color.metaColor)):this.metaColor=new Sa(r?"":t),(!t||r&&!this.colors)&&(this.metaColor=this.metaColor.setA(0),this.cleared=!0)}return dt(e,[{key:"toHsb",value:function(){return this.metaColor.toHsb()}},{key:"toHsbString",value:function(){return this.metaColor.toHsbString()}},{key:"toHex",value:function(){return uF(this.toHexString(),this.metaColor.a<1)}},{key:"toHexString",value:function(){return this.metaColor.toHexString()}},{key:"toRgb",value:function(){return this.metaColor.toRgb()}},{key:"toRgbString",value:function(){return this.metaColor.toRgbString()}},{key:"isGradient",value:function(){return!!this.colors&&!this.cleared}},{key:"getColors",value:function(){return this.colors||[{color:this,percent:0}]}},{key:"toCssString",value:function(){const{colors:n}=this;return n?`linear-gradient(90deg, ${n.map(o=>`${o.color.toRgbString()} ${o.percent}%`).join(", ")})`:this.metaColor.toRgbString()}},{key:"equals",value:function(n){return!n||this.isGradient()!==n.isGradient()?!1:this.isGradient()?this.colors.length===n.colors.length&&this.colors.every((r,o)=>{const i=n.colors[o];return r.percent===i.percent&&r.color.equals(i.color)}):this.toHexString()===n.toHexString()}}])}();const dF=(e,t)=>{const{r:n,g:r,b:o,a:i}=e.toRgb(),a=new Sa(e.toRgbString()).onBackground(t).toHsv();return i<=.5?a.v>.5:n*.299+r*.587+o*.114>192},Zw=e=>{const{paddingInline:t,onlyIconSize:n}=e;return un(e,{buttonPaddingHorizontal:t,buttonPaddingVertical:0,buttonIconOnlyFontSize:n})},ex=e=>{var t,n,r,o,i,a;const s=(t=e.contentFontSize)!==null&&t!==void 0?t:e.fontSize,l=(n=e.contentFontSizeSM)!==null&&n!==void 0?n:e.fontSize,u=(r=e.contentFontSizeLG)!==null&&r!==void 0?r:e.fontSizeLG,c=(o=e.contentLineHeight)!==null&&o!==void 0?o:zs(s),d=(i=e.contentLineHeightSM)!==null&&i!==void 0?i:zs(l),f=(a=e.contentLineHeightLG)!==null&&a!==void 0?a:zs(u),w=dF(new cF(e.colorBgSolid),"#fff")?"#000":"#fff",h=Bm.reduce((g,b)=>Object.assign(Object.assign({},g),{[`${b}ShadowColor`]:`0 ${Ce(e.controlOutlineWidth)} 0 ${_i(e[`${b}1`],e.colorBgContainer)}`}),{});return Object.assign(Object.assign({},h),{fontWeight:400,iconGap:e.marginXS,defaultShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,primaryShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,dangerShadow:`0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,primaryColor:e.colorTextLightSolid,dangerColor:e.colorTextLightSolid,borderColorDisabled:e.colorBorder,defaultGhostColor:e.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:e.colorBgContainer,paddingInline:e.paddingContentHorizontal-e.lineWidth,paddingInlineLG:e.paddingContentHorizontal-e.lineWidth,paddingInlineSM:8-e.lineWidth,onlyIconSize:"inherit",onlyIconSizeSM:"inherit",onlyIconSizeLG:"inherit",groupBorderColor:e.colorPrimaryHover,linkHoverBg:"transparent",textTextColor:e.colorText,textTextHoverColor:e.colorText,textTextActiveColor:e.colorText,textHoverBg:e.colorFillTertiary,defaultColor:e.colorText,defaultBg:e.colorBgContainer,defaultBorderColor:e.colorBorder,defaultBorderColorDisabled:e.colorBorder,defaultHoverBg:e.colorBgContainer,defaultHoverColor:e.colorPrimaryHover,defaultHoverBorderColor:e.colorPrimaryHover,defaultActiveBg:e.colorBgContainer,defaultActiveColor:e.colorPrimaryActive,defaultActiveBorderColor:e.colorPrimaryActive,solidTextColor:w,contentFontSize:s,contentFontSizeSM:l,contentFontSizeLG:u,contentLineHeight:c,contentLineHeightSM:d,contentLineHeightLG:f,paddingBlock:Math.max((e.controlHeight-s*c)/2-e.lineWidth,0),paddingBlockSM:Math.max((e.controlHeightSM-l*d)/2-e.lineWidth,0),paddingBlockLG:Math.max((e.controlHeightLG-u*f)/2-e.lineWidth,0)})},fF=e=>{const{componentCls:t,iconCls:n,fontWeight:r,opacityLoading:o,motionDurationSlow:i,motionEaseInOut:a,iconGap:s,calc:l}=e;return{[t]:{outline:"none",position:"relative",display:"inline-flex",gap:s,alignItems:"center",justifyContent:"center",fontWeight:r,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${Ce(e.lineWidth)} ${e.lineType} transparent`,cursor:"pointer",transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:e.colorText,"&:disabled > *":{pointerEvents:"none"},[`${t}-icon > svg`]:$w(),"> a":{color:"currentColor"},"&:not(:disabled)":x$(e),[`&${t}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${t}-two-chinese-chars > *:not(${n})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},[`&${t}-icon-only`]:{paddingInline:0,[`&${t}-compact-item`]:{flex:"none"},[`&${t}-round`]:{width:"auto"}},[`&${t}-loading`]:{opacity:o,cursor:"default"},[`${t}-loading-icon`]:{transition:["width","opacity","margin"].map(u=>`${u} ${i} ${a}`).join(",")},[`&:not(${t}-icon-end)`]:{[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineEnd:l(s).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineEnd:0},"&-leave-start":{marginInlineEnd:0},"&-leave-active":{marginInlineEnd:l(s).mul(-1).equal()}}},"&-icon-end":{flexDirection:"row-reverse",[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineStart:l(s).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineStart:0},"&-leave-start":{marginInlineStart:0},"&-leave-active":{marginInlineStart:l(s).mul(-1).equal()}}}}}},tx=(e,t,n)=>({[`&:not(:disabled):not(${e}-disabled)`]:{"&:hover":t,"&:active":n}}),pF=e=>({minWidth:e.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),mF=e=>({borderRadius:e.controlHeight,paddingInlineStart:e.calc(e.controlHeight).div(2).equal(),paddingInlineEnd:e.calc(e.controlHeight).div(2).equal()}),hF=e=>({cursor:"not-allowed",borderColor:e.borderColorDisabled,color:e.colorTextDisabled,background:e.colorBgContainerDisabled,boxShadow:"none"}),zu=(e,t,n,r,o,i,a,s)=>({[`&${e}-background-ghost`]:Object.assign(Object.assign({color:n||void 0,background:t,borderColor:r||void 0,boxShadow:"none"},tx(e,Object.assign({background:t},a),Object.assign({background:t},s))),{"&:disabled":{cursor:"not-allowed",color:o||void 0,borderColor:i||void 0}})}),vF=e=>({[`&:disabled, &${e.componentCls}-disabled`]:Object.assign({},hF(e))}),gF=e=>({[`&:disabled, &${e.componentCls}-disabled`]:{cursor:"not-allowed",color:e.colorTextDisabled}}),Lu=(e,t,n,r)=>{const i=r&&["link","text"].includes(r)?gF:vF;return Object.assign(Object.assign({},i(e)),tx(e.componentCls,t,n))},Du=(e,t,n,r,o)=>({[`&${e.componentCls}-variant-solid`]:Object.assign({color:t,background:n},Lu(e,r,o))}),Bu=(e,t,n,r,o)=>({[`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]:Object.assign({borderColor:t,background:n},Lu(e,r,o))}),Vu=e=>({[`&${e.componentCls}-variant-dashed`]:{borderStyle:"dashed"}}),Hu=(e,t,n,r)=>({[`&${e.componentCls}-variant-filled`]:Object.assign({boxShadow:"none",background:t},Lu(e,n,r))}),zn=(e,t,n,r,o)=>({[`&${e.componentCls}-variant-${n}`]:Object.assign({color:t,boxShadow:"none"},Lu(e,r,o,n))}),yF=e=>{const{componentCls:t}=e;return Bm.reduce((n,r)=>{const o=e[`${r}6`],i=e[`${r}1`],a=e[`${r}5`],s=e[`${r}2`],l=e[`${r}3`],u=e[`${r}7`];return Object.assign(Object.assign({},n),{[`&${t}-color-${r}`]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:o,boxShadow:e[`${r}ShadowColor`]},Du(e,e.colorTextLightSolid,o,{background:a},{background:u})),Bu(e,o,e.colorBgContainer,{color:a,borderColor:a,background:e.colorBgContainer},{color:u,borderColor:u,background:e.colorBgContainer})),Vu(e)),Hu(e,i,{color:o,background:s},{color:o,background:l})),zn(e,o,"link",{color:a},{color:u})),zn(e,o,"text",{color:a,background:i},{color:u,background:l}))})},{})},bF=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.defaultColor,boxShadow:e.defaultShadow},Du(e,e.solidTextColor,e.colorBgSolid,{color:e.solidTextColor,background:e.colorBgSolidHover},{color:e.solidTextColor,background:e.colorBgSolidActive})),Vu(e)),Hu(e,e.colorFillTertiary,{color:e.defaultColor,background:e.colorFillSecondary},{color:e.defaultColor,background:e.colorFill})),zu(e.componentCls,e.ghostBg,e.defaultGhostColor,e.defaultGhostBorderColor,e.colorTextDisabled,e.colorBorder)),zn(e,e.textTextColor,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),wF=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorPrimary,boxShadow:e.primaryShadow},Bu(e,e.colorPrimary,e.colorBgContainer,{color:e.colorPrimaryTextHover,borderColor:e.colorPrimaryHover,background:e.colorBgContainer},{color:e.colorPrimaryTextActive,borderColor:e.colorPrimaryActive,background:e.colorBgContainer})),Vu(e)),Hu(e,e.colorPrimaryBg,{color:e.colorPrimary,background:e.colorPrimaryBgHover},{color:e.colorPrimary,background:e.colorPrimaryBorder})),zn(e,e.colorPrimaryText,"text",{color:e.colorPrimaryTextHover,background:e.colorPrimaryBg},{color:e.colorPrimaryTextActive,background:e.colorPrimaryBorder})),zn(e,e.colorPrimaryText,"link",{color:e.colorPrimaryTextHover,background:e.linkHoverBg},{color:e.colorPrimaryTextActive})),zu(e.componentCls,e.ghostBg,e.colorPrimary,e.colorPrimary,e.colorTextDisabled,e.colorBorder,{color:e.colorPrimaryHover,borderColor:e.colorPrimaryHover},{color:e.colorPrimaryActive,borderColor:e.colorPrimaryActive})),xF=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorError,boxShadow:e.dangerShadow},Du(e,e.dangerColor,e.colorError,{background:e.colorErrorHover},{background:e.colorErrorActive})),Bu(e,e.colorError,e.colorBgContainer,{color:e.colorErrorHover,borderColor:e.colorErrorBorderHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),Vu(e)),Hu(e,e.colorErrorBg,{color:e.colorError,background:e.colorErrorBgFilledHover},{color:e.colorError,background:e.colorErrorBgActive})),zn(e,e.colorError,"text",{color:e.colorErrorHover,background:e.colorErrorBg},{color:e.colorErrorHover,background:e.colorErrorBgActive})),zn(e,e.colorError,"link",{color:e.colorErrorHover},{color:e.colorErrorActive})),zu(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder,{color:e.colorErrorHover,borderColor:e.colorErrorHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),CF=e=>Object.assign(Object.assign({},zn(e,e.colorLink,"link",{color:e.colorLinkHover},{color:e.colorLinkActive})),zu(e.componentCls,e.ghostBg,e.colorInfo,e.colorInfo,e.colorTextDisabled,e.colorBorder,{color:e.colorInfoHover,borderColor:e.colorInfoHover},{color:e.colorInfoActive,borderColor:e.colorInfoActive})),SF=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-color-default`]:bF(e),[`${t}-color-primary`]:wF(e),[`${t}-color-dangerous`]:xF(e),[`${t}-color-link`]:CF(e)},yF(e))},EF=e=>Object.assign(Object.assign(Object.assign(Object.assign({},Bu(e,e.defaultBorderColor,e.defaultBg,{color:e.defaultHoverColor,borderColor:e.defaultHoverBorderColor,background:e.defaultHoverBg},{color:e.defaultActiveColor,borderColor:e.defaultActiveBorderColor,background:e.defaultActiveBg})),zn(e,e.textTextColor,"text",{color:e.textTextHoverColor,background:e.textHoverBg},{color:e.textTextActiveColor,background:e.colorBgTextActive})),Du(e,e.primaryColor,e.colorPrimary,{background:e.colorPrimaryHover,color:e.primaryColor},{background:e.colorPrimaryActive,color:e.primaryColor})),zn(e,e.colorLink,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),Gm=(e,t="")=>{const{componentCls:n,controlHeight:r,fontSize:o,borderRadius:i,buttonPaddingHorizontal:a,iconCls:s,buttonPaddingVertical:l,buttonIconOnlyFontSize:u}=e;return[{[t]:{fontSize:o,height:r,padding:`${Ce(l)} ${Ce(a)}`,borderRadius:i,[`&${n}-icon-only`]:{width:r,[s]:{fontSize:u}}}},{[`${n}${n}-circle${t}`]:pF(e)},{[`${n}${n}-round${t}`]:mF(e)}]},OF=e=>{const t=un(e,{fontSize:e.contentFontSize});return Gm(t,e.componentCls)},TF=e=>{const t=un(e,{controlHeight:e.controlHeightSM,fontSize:e.contentFontSizeSM,padding:e.paddingXS,buttonPaddingHorizontal:e.paddingInlineSM,buttonPaddingVertical:0,borderRadius:e.borderRadiusSM,buttonIconOnlyFontSize:e.onlyIconSizeSM});return Gm(t,`${e.componentCls}-sm`)},RF=e=>{const t=un(e,{controlHeight:e.controlHeightLG,fontSize:e.contentFontSizeLG,buttonPaddingHorizontal:e.paddingInlineLG,buttonPaddingVertical:0,borderRadius:e.borderRadiusLG,buttonIconOnlyFontSize:e.onlyIconSizeLG});return Gm(t,`${e.componentCls}-lg`)},PF=e=>{const{componentCls:t}=e;return{[t]:{[`&${t}-block`]:{width:"100%"}}}},AF=Na("Button",e=>{const t=Zw(e);return[fF(t),OF(t),TF(t),RF(t),PF(t),SF(t),EF(t),rF(t)]},ex,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function $F(e,t,n,r){const{focusElCls:o,focus:i,borderElCls:a}=n,s=a?"> *":"",l=["hover",i?"focus":null,"active"].filter(Boolean).map(u=>`&:${u} ${s}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},[`&-item:not(${r}-status-success)`]:{zIndex:2},"&-item":Object.assign(Object.assign({[l]:{zIndex:3}},o?{[`&${o}`]:{zIndex:3}}:{}),{[`&[disabled] ${s}`]:{zIndex:0}})}}function IF(e,t,n){const{borderElCls:r}=n,o=r?`> ${r}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function nx(e,t={focus:!0}){const{componentCls:n}=e,r=`${n}-compact`;return{[r]:Object.assign(Object.assign({},$F(e,r,t,n)),IF(n,r,t))}}function FF(e,t,n){return{[`&-item:not(${t}-last-item)`]:{marginBottom:e.calc(e.lineWidth).mul(-1).equal()},[`&-item:not(${n}-status-success)`]:{zIndex:2},"&-item":{"&:hover,&:focus,&:active":{zIndex:3},"&[disabled]":{zIndex:0}}}}function _F(e,t){return{[`&-item:not(${t}-first-item):not(${t}-last-item)`]:{borderRadius:0},[`&-item${t}-first-item:not(${t}-last-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${t}-last-item:not(${t}-first-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function jF(e){const t=`${e.componentCls}-compact-vertical`;return{[t]:Object.assign(Object.assign({},FF(e,t,e.componentCls)),_F(e.componentCls,t))}}const NF=e=>{const{componentCls:t,colorPrimaryHover:n,lineWidth:r,calc:o}=e,i=o(r).mul(-1).equal(),a=s=>{const l=`${t}-compact${s?"-vertical":""}-item${t}-primary:not([disabled])`;return{[`${l} + ${l}::before`]:{position:"absolute",top:s?i:0,insetInlineStart:s?0:i,backgroundColor:n,content:'""',width:s?"100%":r,height:s?r:"100%"}}};return Object.assign(Object.assign({},a()),a(!0))},kF=S$(["Button","compact"],e=>{const t=Zw(e);return[nx(t),jF(t),NF(t)]},ex);var MF=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function zF(e){if(typeof e=="object"&&e){let t=e==null?void 0:e.delay;return t=!Number.isNaN(t)&&typeof t=="number"?t:0,{loading:t<=0,delay:t}}return{loading:!!e,delay:0}}const LF={default:["default","outlined"],primary:["primary","solid"],dashed:["default","dashed"],link:["link","link"],text:["default","text"]},DF=W.forwardRef((e,t)=>{var n,r;const{loading:o=!1,prefixCls:i,color:a,variant:s,type:l,danger:u=!1,shape:c,size:d,styles:f,disabled:w,className:h,rootClassName:g,children:b,icon:m,iconPosition:p="start",ghost:y=!1,block:C=!1,htmlType:x="button",classNames:E,style:S={},autoInsertSpace:O,autoFocus:R}=e,T=MF(e,["loading","prefixCls","color","variant","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","iconPosition","ghost","block","htmlType","classNames","style","autoInsertSpace","autoFocus"]),I=l||"default",{button:$}=W.useContext(ut),_=c||($==null?void 0:$.shape)||"default",[N,k]=v.useMemo(()=>{if(a&&s)return[a,s];if(l||u){const Ze=LF[I]||[];return u?["danger",Ze[1]]:Ze}return $!=null&&$.color&&($!=null&&$.variant)?[$.color,$.variant]:["default","outlined"]},[l,a,s,u,$==null?void 0:$.variant,$==null?void 0:$.color]),B=N==="danger"?"dangerous":N,{getPrefixCls:F,direction:V,autoInsertSpace:U,className:Q,style:G,classNames:K,styles:z}=Lm("button"),q=(n=O??U)!==null&&n!==void 0?n:!0,H=F("btn",i),[ie,Y,he]=AF(H),pe=v.useContext(no),Se=w??pe,Le=v.useContext(Yw),Ie=v.useMemo(()=>zF(o),[o]),[Ee,Ue]=v.useState(Ie.loading),[te,ce]=v.useState(!1),me=v.useRef(null),Te=k1(t,me),Qt=v.Children.count(b)===1&&!m&&!Xc(k),Re=v.useRef(!0);W.useEffect(()=>(Re.current=!1,()=>{Re.current=!0}),[]),ya(()=>{let Ze=null;Ie.delay>0?Ze=setTimeout(()=>{Ze=null,Ue(!0)},Ie.delay):Ue(Ie.loading);function cn(){Ze&&(clearTimeout(Ze),Ze=null)}return cn},[Ie.delay,Ie.loading]),v.useEffect(()=>{if(!me.current||!q)return;const Ze=me.current.textContent||"";Qt&&Xf(Ze)?te||ce(!0):te&&ce(!1)}),v.useEffect(()=>{R&&me.current&&me.current.focus()},[]);const Pe=W.useCallback(Ze=>{var cn;if(Ee||Se){Ze.preventDefault();return}(cn=e.onClick)===null||cn===void 0||cn.call(e,("href"in e,Ze))},[e.onClick,Ee,Se]),{compactSize:ae,compactItemClassnames:re}=Mu(H,V),be={large:"lg",small:"sm",middle:void 0},Xt=za(Ze=>{var cn,vi;return(vi=(cn=d??ae)!==null&&cn!==void 0?cn:Le)!==null&&vi!==void 0?vi:Ze}),Ft=Xt&&(r=be[Xt])!==null&&r!==void 0?r:"",_t=Ee?"loading":m,jt=Wm(T,["navigate"]),En=ne(H,Y,he,{[`${H}-${_}`]:_!=="default"&&_,[`${H}-${I}`]:I,[`${H}-dangerous`]:u,[`${H}-color-${B}`]:B,[`${H}-variant-${k}`]:k,[`${H}-${Ft}`]:Ft,[`${H}-icon-only`]:!b&&b!==0&&!!_t,[`${H}-background-ghost`]:y&&!Xc(k),[`${H}-loading`]:Ee,[`${H}-two-chinese-chars`]:te&&q&&!Ee,[`${H}-block`]:C,[`${H}-rtl`]:V==="rtl",[`${H}-icon-end`]:p==="end"},re,h,g,Q),ao=Object.assign(Object.assign({},G),S),so=ne(E==null?void 0:E.icon,K.icon),Fe=Object.assign(Object.assign({},(f==null?void 0:f.icon)||{}),z.icon||{}),de=m&&!Ee?W.createElement(Jf,{prefixCls:H,className:so,style:Fe},m):o&&typeof o=="object"&&o.icon?W.createElement(Jf,{prefixCls:H,className:so,style:Fe},o.icon):W.createElement(nF,{existIcon:!!m,prefixCls:H,loading:Ee,mount:Re.current}),Nt=b||b===0?tF(b,Qt&&q):null;if(jt.href!==void 0)return ie(W.createElement("a",Object.assign({},jt,{className:ne(En,{[`${H}-disabled`]:Se}),href:Se?void 0:jt.href,style:ao,onClick:Pe,ref:Te,tabIndex:Se?-1:0}),de,Nt));let On=W.createElement("button",Object.assign({},T,{type:x,className:En,style:ao,onClick:Pe,disabled:Se,ref:Te}),de,Nt,re&&W.createElement(kF,{prefixCls:H}));return Xc(k)||(On=W.createElement(XI,{component:"Button",disabled:Ee},On)),ie(On)}),Do=DF;Do.Group=ZI;Do.__ANT_BUTTON=!0;var Br="RC_FORM_INTERNAL_HOOKS",we=function(){Ht(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},ni=v.createContext({getFieldValue:we,getFieldsValue:we,getFieldError:we,getFieldWarning:we,getFieldsError:we,isFieldsTouched:we,isFieldTouched:we,isFieldValidating:we,isFieldsValidating:we,resetFields:we,setFields:we,setFieldValue:we,setFieldsValue:we,validateFields:we,submit:we,getInternalHooks:function(){return we(),{dispatch:we,initEntityValue:we,registerField:we,useSubscribe:we,setInitialValues:we,destroyForm:we,setCallbacks:we,registerWatch:we,getFields:we,setValidateMessages:we,setPreserve:we,getInitialValue:we}}}),Ol=v.createContext(null);function Yf(e){return e==null?[]:Array.isArray(e)?e:[e]}function BF(e){return e&&!!e._init}function Zf(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var ep=Zf();function VF(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function HF(e,t,n){if(Am())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var o=new(e.bind.apply(e,r));return n&&ha(o,n.prototype),o}function tp(e){var t=typeof Map=="function"?new Map:void 0;return tp=function(r){if(r===null||!VF(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(r))return t.get(r);t.set(r,o)}function o(){return HF(r,arguments,va(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),ha(o,r)},tp(e)}var UF=/%[sdj%]/g,WF=function(){};function np(e){if(!e||!e.length)return null;var t={};return e.forEach(function(n){var r=n.field;t[r]=t[r]||[],t[r].push(n)}),t}function Bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i=n.length;if(typeof e=="function")return e.apply(null,n);if(typeof e=="string"){var a=e.replace(UF,function(s){if(s==="%%")return"%";if(o>=i)return s;switch(s){case"%s":return String(n[o++]);case"%d":return Number(n[o++]);case"%j":try{return JSON.stringify(n[o++])}catch{return"[Circular]"}break;default:return s}});return a}return e}function GF(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function Ye(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||GF(t)&&typeof e=="string"&&!e)}function qF(e,t,n){var r=[],o=0,i=e.length;function a(s){r.push.apply(r,Z(s||[])),o++,o===i&&n(r)}e.forEach(function(s){t(s,a)})}function Bg(e,t,n){var r=0,o=e.length;function i(a){if(a&&a.length){n(a);return}var s=r;r=r+1,s<o?t(e[s],i):n([])}i([])}function KF(e){var t=[];return Object.keys(e).forEach(function(n){t.push.apply(t,Z(e[n]||[]))}),t}var Vg=function(e){Ir(n,e);var t=Fr(n);function n(r,o){var i;return ct(this,n),i=t.call(this,"Async Validation Error"),P(se(i),"errors",void 0),P(se(i),"fields",void 0),i.errors=r,i.fields=o,i}return dt(n)}(tp(Error));function QF(e,t,n,r,o){if(t.first){var i=new Promise(function(f,w){var h=function(m){return r(m),m.length?w(new Vg(m,np(m))):f(o)},g=KF(e);Bg(g,n,h)});return i.catch(function(f){return f}),i}var a=t.firstFields===!0?Object.keys(e):t.firstFields||[],s=Object.keys(e),l=s.length,u=0,c=[],d=new Promise(function(f,w){var h=function(b){if(c.push.apply(c,b),u++,u===l)return r(c),c.length?w(new Vg(c,np(c))):f(o)};s.length||(r(c),f(o)),s.forEach(function(g){var b=e[g];a.indexOf(g)!==-1?Bg(b,n,h):qF(b,n,h)})});return d.catch(function(f){return f}),d}function XF(e){return!!(e&&e.message!==void 0)}function JF(e,t){for(var n=e,r=0;r<t.length;r++){if(n==null)return n;n=n[t[r]]}return n}function Hg(e,t){return function(n){var r;return e.fullFields?r=JF(t,e.fullFields):r=t[n.field||e.fullField],XF(n)?(n.field=n.field||e.fullField,n.fieldValue=r,n):{message:typeof n=="function"?n():n,fieldValue:r,field:n.field||e.fullField}}}function Ug(e,t){if(t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];ee(r)==="object"&&ee(e[n])==="object"?e[n]=j(j({},e[n]),r):e[n]=r}}return e}var po="enum",YF=function(t,n,r,o,i){t[po]=Array.isArray(t[po])?t[po]:[],t[po].indexOf(n)===-1&&o.push(Bt(i.messages[po],t.fullField,t[po].join(", ")))},ZF=function(t,n,r,o,i){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(n)||o.push(Bt(i.messages.pattern.mismatch,t.fullField,n,t.pattern));else if(typeof t.pattern=="string"){var a=new RegExp(t.pattern);a.test(n)||o.push(Bt(i.messages.pattern.mismatch,t.fullField,n,t.pattern))}}},e_=function(t,n,r,o,i){var a=typeof t.len=="number",s=typeof t.min=="number",l=typeof t.max=="number",u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=n,d=null,f=typeof n=="number",w=typeof n=="string",h=Array.isArray(n);if(f?d="number":w?d="string":h&&(d="array"),!d)return!1;h&&(c=n.length),w&&(c=n.replace(u,"_").length),a?c!==t.len&&o.push(Bt(i.messages[d].len,t.fullField,t.len)):s&&!l&&c<t.min?o.push(Bt(i.messages[d].min,t.fullField,t.min)):l&&!s&&c>t.max?o.push(Bt(i.messages[d].max,t.fullField,t.max)):s&&l&&(c<t.min||c>t.max)&&o.push(Bt(i.messages[d].range,t.fullField,t.min,t.max))},rx=function(t,n,r,o,i,a){t.required&&(!r.hasOwnProperty(t.field)||Ye(n,a||t.type))&&o.push(Bt(i.messages.required,t.fullField))},ps;const t_=function(){if(ps)return ps;var e="[a-fA-F\\d:]",t=function(E){return E&&E.includeBoundaries?"(?:(?<=\\s|^)(?=".concat(e,")|(?<=").concat(e,")(?=\\s|$))"):""},n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",o=["(?:".concat(r,":){7}(?:").concat(r,"|:)"),"(?:".concat(r,":){6}(?:").concat(n,"|:").concat(r,"|:)"),"(?:".concat(r,":){5}(?::").concat(n,"|(?::").concat(r,"){1,2}|:)"),"(?:".concat(r,":){4}(?:(?::").concat(r,"){0,1}:").concat(n,"|(?::").concat(r,"){1,3}|:)"),"(?:".concat(r,":){3}(?:(?::").concat(r,"){0,2}:").concat(n,"|(?::").concat(r,"){1,4}|:)"),"(?:".concat(r,":){2}(?:(?::").concat(r,"){0,3}:").concat(n,"|(?::").concat(r,"){1,5}|:)"),"(?:".concat(r,":){1}(?:(?::").concat(r,"){0,4}:").concat(n,"|(?::").concat(r,"){1,6}|:)"),"(?::(?:(?::".concat(r,"){0,5}:").concat(n,"|(?::").concat(r,"){1,7}|:))")],i="(?:%[0-9a-zA-Z]{1,})?",a="(?:".concat(o.join("|"),")").concat(i),s=new RegExp("(?:^".concat(n,"$)|(?:^").concat(a,"$)")),l=new RegExp("^".concat(n,"$")),u=new RegExp("^".concat(a,"$")),c=function(E){return E&&E.exact?s:new RegExp("(?:".concat(t(E)).concat(n).concat(t(E),")|(?:").concat(t(E)).concat(a).concat(t(E),")"),"g")};c.v4=function(x){return x&&x.exact?l:new RegExp("".concat(t(x)).concat(n).concat(t(x)),"g")},c.v6=function(x){return x&&x.exact?u:new RegExp("".concat(t(x)).concat(a).concat(t(x)),"g")};var d="(?:(?:[a-z]+:)?//)",f="(?:\\S+(?::\\S*)?@)?",w=c.v4().source,h=c.v6().source,g="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",b="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",m="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",p="(?::\\d{2,5})?",y='(?:[/?#][^\\s"]*)?',C="(?:".concat(d,"|www\\.)").concat(f,"(?:localhost|").concat(w,"|").concat(h,"|").concat(g).concat(b).concat(m,")").concat(p).concat(y);return ps=new RegExp("(?:^".concat(C,"$)"),"i"),ps};var Wg={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},ji={integer:function(t){return ji.number(t)&&parseInt(t,10)===t},float:function(t){return ji.number(t)&&!ji.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return ee(t)==="object"&&!ji.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(Wg.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(t_())},hex:function(t){return typeof t=="string"&&!!t.match(Wg.hex)}},n_=function(t,n,r,o,i){if(t.required&&n===void 0){rx(t,n,r,o,i);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=t.type;a.indexOf(s)>-1?ji[s](n)||o.push(Bt(i.messages.types[s],t.fullField,t.type)):s&&ee(n)!==t.type&&o.push(Bt(i.messages.types[s],t.fullField,t.type))},r_=function(t,n,r,o,i){(/^\s+$/.test(n)||n==="")&&o.push(Bt(i.messages.whitespace,t.fullField))};const ue={required:rx,whitespace:r_,type:n_,range:e_,enum:YF,pattern:ZF};var o_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n)&&!t.required)return r();ue.required(t,n,o,a,i)}r(a)},i_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(n==null&&!t.required)return r();ue.required(t,n,o,a,i,"array"),n!=null&&(ue.type(t,n,o,a,i),ue.range(t,n,o,a,i))}r(a)},a_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n)&&!t.required)return r();ue.required(t,n,o,a,i),n!==void 0&&ue.type(t,n,o,a,i)}r(a)},s_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n,"date")&&!t.required)return r();if(ue.required(t,n,o,a,i),!Ye(n,"date")){var l;n instanceof Date?l=n:l=new Date(n),ue.type(t,l,o,a,i),l&&ue.range(t,l.getTime(),o,a,i)}}r(a)},l_="enum",u_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n)&&!t.required)return r();ue.required(t,n,o,a,i),n!==void 0&&ue[l_](t,n,o,a,i)}r(a)},c_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n)&&!t.required)return r();ue.required(t,n,o,a,i),n!==void 0&&(ue.type(t,n,o,a,i),ue.range(t,n,o,a,i))}r(a)},d_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n)&&!t.required)return r();ue.required(t,n,o,a,i),n!==void 0&&(ue.type(t,n,o,a,i),ue.range(t,n,o,a,i))}r(a)},f_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n)&&!t.required)return r();ue.required(t,n,o,a,i),n!==void 0&&ue.type(t,n,o,a,i)}r(a)},p_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(n===""&&(n=void 0),Ye(n)&&!t.required)return r();ue.required(t,n,o,a,i),n!==void 0&&(ue.type(t,n,o,a,i),ue.range(t,n,o,a,i))}r(a)},m_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n)&&!t.required)return r();ue.required(t,n,o,a,i),n!==void 0&&ue.type(t,n,o,a,i)}r(a)},h_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n,"string")&&!t.required)return r();ue.required(t,n,o,a,i),Ye(n,"string")||ue.pattern(t,n,o,a,i)}r(a)},v_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n)&&!t.required)return r();ue.required(t,n,o,a,i),Ye(n)||ue.type(t,n,o,a,i)}r(a)},g_=function(t,n,r,o,i){var a=[],s=Array.isArray(n)?"array":ee(n);ue.required(t,n,o,a,i,s),r(a)},y_=function(t,n,r,o,i){var a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n,"string")&&!t.required)return r();ue.required(t,n,o,a,i,"string"),Ye(n,"string")||(ue.type(t,n,o,a,i),ue.range(t,n,o,a,i),ue.pattern(t,n,o,a,i),t.whitespace===!0&&ue.whitespace(t,n,o,a,i))}r(a)},ed=function(t,n,r,o,i){var a=t.type,s=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n,a)&&!t.required)return r();ue.required(t,n,o,s,i,a),Ye(n,a)||ue.type(t,n,o,s,i)}r(s)};const Gi={string:y_,method:f_,number:p_,boolean:a_,regexp:v_,integer:d_,float:c_,array:i_,object:m_,enum:u_,pattern:h_,date:s_,url:ed,hex:ed,email:ed,required:g_,any:o_};var La=function(){function e(t){ct(this,e),P(this,"rules",null),P(this,"_messages",ep),this.define(t)}return dt(e,[{key:"define",value:function(n){var r=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(ee(n)!=="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(o){var i=n[o];r.rules[o]=Array.isArray(i)?i:[i]})}},{key:"messages",value:function(n){return n&&(this._messages=Ug(Zf(),n)),this._messages}},{key:"validate",value:function(n){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},a=n,s=o,l=i;if(typeof s=="function"&&(l=s,s={}),!this.rules||Object.keys(this.rules).length===0)return l&&l(null,a),Promise.resolve(a);function u(h){var g=[],b={};function m(y){if(Array.isArray(y)){var C;g=(C=g).concat.apply(C,Z(y))}else g.push(y)}for(var p=0;p<h.length;p++)m(h[p]);g.length?(b=np(g),l(g,b)):l(null,a)}if(s.messages){var c=this.messages();c===ep&&(c=Zf()),Ug(c,s.messages),s.messages=c}else s.messages=this.messages();var d={},f=s.keys||Object.keys(this.rules);f.forEach(function(h){var g=r.rules[h],b=a[h];g.forEach(function(m){var p=m;typeof p.transform=="function"&&(a===n&&(a=j({},a)),b=a[h]=p.transform(b),b!=null&&(p.type=p.type||(Array.isArray(b)?"array":ee(b)))),typeof p=="function"?p={validator:p}:p=j({},p),p.validator=r.getValidationMethod(p),p.validator&&(p.field=h,p.fullField=p.fullField||h,p.type=r.getType(p),d[h]=d[h]||[],d[h].push({rule:p,value:b,source:a,field:h}))})});var w={};return QF(d,s,function(h,g){var b=h.rule,m=(b.type==="object"||b.type==="array")&&(ee(b.fields)==="object"||ee(b.defaultField)==="object");m=m&&(b.required||!b.required&&h.value),b.field=h.field;function p(S,O){return j(j({},O),{},{fullField:"".concat(b.fullField,".").concat(S),fullFields:b.fullFields?[].concat(Z(b.fullFields),[S]):[S]})}function y(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],O=Array.isArray(S)?S:[S];!s.suppressWarning&&O.length&&e.warning("async-validator:",O),O.length&&b.message!==void 0&&(O=[].concat(b.message));var R=O.map(Hg(b,a));if(s.first&&R.length)return w[b.field]=1,g(R);if(!m)g(R);else{if(b.required&&!h.value)return b.message!==void 0?R=[].concat(b.message).map(Hg(b,a)):s.error&&(R=[s.error(b,Bt(s.messages.required,b.field))]),g(R);var T={};b.defaultField&&Object.keys(h.value).map(function(_){T[_]=b.defaultField}),T=j(j({},T),h.rule.fields);var I={};Object.keys(T).forEach(function(_){var N=T[_],k=Array.isArray(N)?N:[N];I[_]=k.map(p.bind(null,_))});var $=new e(I);$.messages(s.messages),h.rule.options&&(h.rule.options.messages=s.messages,h.rule.options.error=s.error),$.validate(h.value,h.rule.options||s,function(_){var N=[];R&&R.length&&N.push.apply(N,Z(R)),_&&_.length&&N.push.apply(N,Z(_)),g(N.length?N:null)})}}var C;if(b.asyncValidator)C=b.asyncValidator(b,h.value,y,h.source,s);else if(b.validator){try{C=b.validator(b,h.value,y,h.source,s)}catch(S){var x,E;(x=(E=console).error)===null||x===void 0||x.call(E,S),s.suppressValidatorError||setTimeout(function(){throw S},0),y(S.message)}C===!0?y():C===!1?y(typeof b.message=="function"?b.message(b.fullField||b.field):b.message||"".concat(b.fullField||b.field," fails")):C instanceof Array?y(C):C instanceof Error&&y(C.message)}C&&C.then&&C.then(function(){return y()},function(S){return y(S)})},function(h){u(h)},a)}},{key:"getType",value:function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!Gi.hasOwnProperty(n.type))throw new Error(Bt("Unknown rule type %s",n.type));return n.type||"string"}},{key:"getValidationMethod",value:function(n){if(typeof n.validator=="function")return n.validator;var r=Object.keys(n),o=r.indexOf("message");return o!==-1&&r.splice(o,1),r.length===1&&r[0]==="required"?Gi.required:Gi[this.getType(n)]||void 0}}]),e}();P(La,"register",function(t,n){if(typeof n!="function")throw new Error("Cannot register a validator by type, validator is not a function");Gi[t]=n});P(La,"warning",WF);P(La,"messages",ep);P(La,"validators",Gi);var Mt="'${name}' is not a valid ${type}",ox={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:Mt,method:Mt,array:Mt,object:Mt,number:Mt,date:Mt,boolean:Mt,integer:Mt,float:Mt,regexp:Mt,email:Mt,url:Mt,hex:Mt},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},Gg=La;function b_(e,t){return e.replace(/\\?\$\{\w+\}/g,function(n){if(n.startsWith("\\"))return n.slice(1);var r=n.slice(2,-1);return t[r]})}var qg="CODE_LOGIC_ERROR";function rp(e,t,n,r,o){return op.apply(this,arguments)}function op(){return op=io(bt().mark(function e(t,n,r,o,i){var a,s,l,u,c,d,f,w,h;return bt().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return a=j({},r),delete a.ruleIndex,Gg.warning=function(){},a.validator&&(s=a.validator,a.validator=function(){try{return s.apply(void 0,arguments)}catch(m){return console.error(m),Promise.reject(qg)}}),l=null,a&&a.type==="array"&&a.defaultField&&(l=a.defaultField,delete a.defaultField),u=new Gg(P({},t,[a])),c=Ro(ox,o.validateMessages),u.messages(c),d=[],b.prev=10,b.next=13,Promise.resolve(u.validate(P({},t,n),j({},o)));case 13:b.next=18;break;case 15:b.prev=15,b.t0=b.catch(10),b.t0.errors&&(d=b.t0.errors.map(function(m,p){var y=m.message,C=y===qg?c.default:y;return v.isValidElement(C)?v.cloneElement(C,{key:"error_".concat(p)}):C}));case 18:if(!(!d.length&&l)){b.next=23;break}return b.next=21,Promise.all(n.map(function(m,p){return rp("".concat(t,".").concat(p),m,l,o,i)}));case 21:return f=b.sent,b.abrupt("return",f.reduce(function(m,p){return[].concat(Z(m),Z(p))},[]));case 23:return w=j(j({},r),{},{name:t,enum:(r.enum||[]).join(", ")},i),h=d.map(function(m){return typeof m=="string"?b_(m,w):m}),b.abrupt("return",h);case 26:case"end":return b.stop()}},e,null,[[10,15]])})),op.apply(this,arguments)}function w_(e,t,n,r,o,i){var a=e.join("."),s=n.map(function(c,d){var f=c.validator,w=j(j({},c),{},{ruleIndex:d});return f&&(w.validator=function(h,g,b){var m=!1,p=function(){for(var x=arguments.length,E=new Array(x),S=0;S<x;S++)E[S]=arguments[S];Promise.resolve().then(function(){Ht(!m,"Your validator function has already return a promise. `callback` will be ignored."),m||b.apply(void 0,E)})},y=f(h,g,p);m=y&&typeof y.then=="function"&&typeof y.catch=="function",Ht(m,"`callback` is deprecated. Please return a promise instead."),m&&y.then(function(){b()}).catch(function(C){b(C||" ")})}),w}).sort(function(c,d){var f=c.warningOnly,w=c.ruleIndex,h=d.warningOnly,g=d.ruleIndex;return!!f==!!h?w-g:f?1:-1}),l;if(o===!0)l=new Promise(function(){var c=io(bt().mark(function d(f,w){var h,g,b;return bt().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:h=0;case 1:if(!(h<s.length)){p.next=12;break}return g=s[h],p.next=5,rp(a,t,g,r,i);case 5:if(b=p.sent,!b.length){p.next=9;break}return w([{errors:b,rule:g}]),p.abrupt("return");case 9:h+=1,p.next=1;break;case 12:f([]);case 13:case"end":return p.stop()}},d)}));return function(d,f){return c.apply(this,arguments)}}());else{var u=s.map(function(c){return rp(a,t,c,r,i).then(function(d){return{errors:d,rule:c}})});l=(o?C_(u):x_(u)).then(function(c){return Promise.reject(c)})}return l.catch(function(c){return c}),l}function x_(e){return ip.apply(this,arguments)}function ip(){return ip=io(bt().mark(function e(t){return bt().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.all(t).then(function(o){var i,a=(i=[]).concat.apply(i,Z(o));return a}));case 1:case"end":return r.stop()}},e)})),ip.apply(this,arguments)}function C_(e){return ap.apply(this,arguments)}function ap(){return ap=io(bt().mark(function e(t){var n;return bt().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=0,o.abrupt("return",new Promise(function(i){t.forEach(function(a){a.then(function(s){s.errors.length&&i([s]),n+=1,n===t.length&&i([])})})}));case 2:case"end":return o.stop()}},e)})),ap.apply(this,arguments)}function Ve(e){return Yf(e)}function Kg(e,t){var n={};return t.forEach(function(r){var o=_n(e,r);n=mn(n,r,o)}),n}function Bo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return e&&e.some(function(r){return ix(t,r,n)})}function ix(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e||!t||!n&&e.length!==t.length?!1:t.every(function(r,o){return e[o]===r})}function S_(e,t){if(e===t)return!0;if(!e&&t||e&&!t||!e||!t||ee(e)!=="object"||ee(t)!=="object")return!1;var n=Object.keys(e),r=Object.keys(t),o=new Set([].concat(n,r));return Z(o).every(function(i){var a=e[i],s=t[i];return typeof a=="function"&&typeof s=="function"?!0:a===s})}function E_(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&ee(t.target)==="object"&&e in t.target?t.target[e]:t}function Qg(e,t,n){var r=e.length;if(t<0||t>=r||n<0||n>=r)return e;var o=e[t],i=t-n;return i>0?[].concat(Z(e.slice(0,n)),[o],Z(e.slice(n,t)),Z(e.slice(t+1,r))):i<0?[].concat(Z(e.slice(0,t)),Z(e.slice(t+1,n+1)),[o],Z(e.slice(n+1,r))):e}var O_=["name"],Yt=[];function td(e,t,n,r,o,i){return typeof e=="function"?e(t,n,"source"in i?{source:i.source}:{}):r!==o}var qm=function(e){Ir(n,e);var t=Fr(n);function n(r){var o;if(ct(this,n),o=t.call(this,r),P(se(o),"state",{resetCount:0}),P(se(o),"cancelRegisterFunc",null),P(se(o),"mounted",!1),P(se(o),"touched",!1),P(se(o),"dirty",!1),P(se(o),"validatePromise",void 0),P(se(o),"prevValidating",void 0),P(se(o),"errors",Yt),P(se(o),"warnings",Yt),P(se(o),"cancelRegister",function(){var l=o.props,u=l.preserve,c=l.isListField,d=l.name;o.cancelRegisterFunc&&o.cancelRegisterFunc(c,u,Ve(d)),o.cancelRegisterFunc=null}),P(se(o),"getNamePath",function(){var l=o.props,u=l.name,c=l.fieldContext,d=c.prefixName,f=d===void 0?[]:d;return u!==void 0?[].concat(Z(f),Z(u)):[]}),P(se(o),"getRules",function(){var l=o.props,u=l.rules,c=u===void 0?[]:u,d=l.fieldContext;return c.map(function(f){return typeof f=="function"?f(d):f})}),P(se(o),"refresh",function(){o.mounted&&o.setState(function(l){var u=l.resetCount;return{resetCount:u+1}})}),P(se(o),"metaCache",null),P(se(o),"triggerMetaEvent",function(l){var u=o.props.onMetaChange;if(u){var c=j(j({},o.getMeta()),{},{destroy:l});Cf(o.metaCache,c)||u(c),o.metaCache=c}else o.metaCache=null}),P(se(o),"onStoreChange",function(l,u,c){var d=o.props,f=d.shouldUpdate,w=d.dependencies,h=w===void 0?[]:w,g=d.onReset,b=c.store,m=o.getNamePath(),p=o.getValue(l),y=o.getValue(b),C=u&&Bo(u,m);switch(c.type==="valueUpdate"&&c.source==="external"&&!Cf(p,y)&&(o.touched=!0,o.dirty=!0,o.validatePromise=null,o.errors=Yt,o.warnings=Yt,o.triggerMetaEvent()),c.type){case"reset":if(!u||C){o.touched=!1,o.dirty=!1,o.validatePromise=void 0,o.errors=Yt,o.warnings=Yt,o.triggerMetaEvent(),g==null||g(),o.refresh();return}break;case"remove":{if(f&&td(f,l,b,p,y,c)){o.reRender();return}break}case"setField":{var x=c.data;if(C){"touched"in x&&(o.touched=x.touched),"validating"in x&&!("originRCField"in x)&&(o.validatePromise=x.validating?Promise.resolve([]):null),"errors"in x&&(o.errors=x.errors||Yt),"warnings"in x&&(o.warnings=x.warnings||Yt),o.dirty=!0,o.triggerMetaEvent(),o.reRender();return}else if("value"in x&&Bo(u,m,!0)){o.reRender();return}if(f&&!m.length&&td(f,l,b,p,y,c)){o.reRender();return}break}case"dependenciesUpdate":{var E=h.map(Ve);if(E.some(function(S){return Bo(c.relatedFields,S)})){o.reRender();return}break}default:if(C||(!h.length||m.length||f)&&td(f,l,b,p,y,c)){o.reRender();return}break}f===!0&&o.reRender()}),P(se(o),"validateRules",function(l){var u=o.getNamePath(),c=o.getValue(),d=l||{},f=d.triggerName,w=d.validateOnly,h=w===void 0?!1:w,g=Promise.resolve().then(io(bt().mark(function b(){var m,p,y,C,x,E,S;return bt().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(o.mounted){R.next=2;break}return R.abrupt("return",[]);case 2:if(m=o.props,p=m.validateFirst,y=p===void 0?!1:p,C=m.messageVariables,x=m.validateDebounce,E=o.getRules(),f&&(E=E.filter(function(T){return T}).filter(function(T){var I=T.validateTrigger;if(!I)return!0;var $=Yf(I);return $.includes(f)})),!(x&&f)){R.next=10;break}return R.next=8,new Promise(function(T){setTimeout(T,x)});case 8:if(o.validatePromise===g){R.next=10;break}return R.abrupt("return",[]);case 10:return S=w_(u,c,E,l,y,C),S.catch(function(T){return T}).then(function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Yt;if(o.validatePromise===g){var I;o.validatePromise=null;var $=[],_=[];(I=T.forEach)===null||I===void 0||I.call(T,function(N){var k=N.rule.warningOnly,M=N.errors,B=M===void 0?Yt:M;k?_.push.apply(_,Z(B)):$.push.apply($,Z(B))}),o.errors=$,o.warnings=_,o.triggerMetaEvent(),o.reRender()}}),R.abrupt("return",S);case 13:case"end":return R.stop()}},b)})));return h||(o.validatePromise=g,o.dirty=!0,o.errors=Yt,o.warnings=Yt,o.triggerMetaEvent(),o.reRender()),g}),P(se(o),"isFieldValidating",function(){return!!o.validatePromise}),P(se(o),"isFieldTouched",function(){return o.touched}),P(se(o),"isFieldDirty",function(){if(o.dirty||o.props.initialValue!==void 0)return!0;var l=o.props.fieldContext,u=l.getInternalHooks(Br),c=u.getInitialValue;return c(o.getNamePath())!==void 0}),P(se(o),"getErrors",function(){return o.errors}),P(se(o),"getWarnings",function(){return o.warnings}),P(se(o),"isListField",function(){return o.props.isListField}),P(se(o),"isList",function(){return o.props.isList}),P(se(o),"isPreserve",function(){return o.props.preserve}),P(se(o),"getMeta",function(){o.prevValidating=o.isFieldValidating();var l={touched:o.isFieldTouched(),validating:o.prevValidating,errors:o.errors,warnings:o.warnings,name:o.getNamePath(),validated:o.validatePromise===null};return l}),P(se(o),"getOnlyChild",function(l){if(typeof l=="function"){var u=o.getMeta();return j(j({},o.getOnlyChild(l(o.getControlled(),u,o.props.fieldContext))),{},{isFunction:!0})}var c=vl(l);return c.length!==1||!v.isValidElement(c[0])?{child:c,isFunction:!1}:{child:c[0],isFunction:!1}}),P(se(o),"getValue",function(l){var u=o.props.fieldContext.getFieldsValue,c=o.getNamePath();return _n(l||u(!0),c)}),P(se(o),"getControlled",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=o.props,c=u.name,d=u.trigger,f=u.validateTrigger,w=u.getValueFromEvent,h=u.normalize,g=u.valuePropName,b=u.getValueProps,m=u.fieldContext,p=f!==void 0?f:m.validateTrigger,y=o.getNamePath(),C=m.getInternalHooks,x=m.getFieldsValue,E=C(Br),S=E.dispatch,O=o.getValue(),R=b||function(N){return P({},g,N)},T=l[d],I=c!==void 0?R(O):{},$=j(j({},l),I);$[d]=function(){o.touched=!0,o.dirty=!0,o.triggerMetaEvent();for(var N,k=arguments.length,M=new Array(k),B=0;B<k;B++)M[B]=arguments[B];w?N=w.apply(void 0,M):N=E_.apply(void 0,[g].concat(M)),h&&(N=h(N,O,x(!0))),N!==O&&S({type:"updateValue",namePath:y,value:N}),T&&T.apply(void 0,M)};var _=Yf(p||[]);return _.forEach(function(N){var k=$[N];$[N]=function(){k&&k.apply(void 0,arguments);var M=o.props.rules;M&&M.length&&S({type:"validateField",namePath:y,triggerName:N})}}),$}),r.fieldContext){var i=r.fieldContext.getInternalHooks,a=i(Br),s=a.initEntityValue;s(se(o))}return o}return dt(n,[{key:"componentDidMount",value:function(){var o=this.props,i=o.shouldUpdate,a=o.fieldContext;if(this.mounted=!0,a){var s=a.getInternalHooks,l=s(Br),u=l.registerField;this.cancelRegisterFunc=u(this)}i===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var o=this.state.resetCount,i=this.props.children,a=this.getOnlyChild(i),s=a.child,l=a.isFunction,u;return l?u=s:v.isValidElement(s)?u=v.cloneElement(s,this.getControlled(s.props)):(Ht(!s,"`children` of Field is not validate ReactElement."),u=s),v.createElement(v.Fragment,{key:o},u)}}]),n}(v.Component);P(qm,"contextType",ni);P(qm,"defaultProps",{trigger:"onChange",valuePropName:"value"});function ax(e){var t,n=e.name,r=It(e,O_),o=v.useContext(ni),i=v.useContext(Ol),a=n!==void 0?Ve(n):void 0,s=(t=r.isListField)!==null&&t!==void 0?t:!!i,l="keep";return s||(l="_".concat((a||[]).join("_"))),v.createElement(qm,Je({key:l,name:a,isListField:s},r,{fieldContext:o}))}function T_(e){var t=e.name,n=e.initialValue,r=e.children,o=e.rules,i=e.validateTrigger,a=e.isListField,s=v.useContext(ni),l=v.useContext(Ol),u=v.useRef({keys:[],id:0}),c=u.current,d=v.useMemo(function(){var g=Ve(s.prefixName)||[];return[].concat(Z(g),Z(Ve(t)))},[s.prefixName,t]),f=v.useMemo(function(){return j(j({},s),{},{prefixName:d})},[s,d]),w=v.useMemo(function(){return{getKey:function(b){var m=d.length,p=b[m];return[c.keys[p],b.slice(m+1)]}}},[d]);if(typeof r!="function")return Ht(!1,"Form.List only accepts function as children."),null;var h=function(b,m,p){var y=p.source;return y==="internal"?!1:b!==m};return v.createElement(Ol.Provider,{value:w},v.createElement(ni.Provider,{value:f},v.createElement(ax,{name:[],shouldUpdate:h,rules:o,validateTrigger:i,initialValue:n,isList:!0,isListField:a??!!l},function(g,b){var m=g.value,p=m===void 0?[]:m,y=g.onChange,C=s.getFieldValue,x=function(){var R=C(d||[]);return R||[]},E={add:function(R,T){var I=x();T>=0&&T<=I.length?(c.keys=[].concat(Z(c.keys.slice(0,T)),[c.id],Z(c.keys.slice(T))),y([].concat(Z(I.slice(0,T)),[R],Z(I.slice(T))))):(c.keys=[].concat(Z(c.keys),[c.id]),y([].concat(Z(I),[R]))),c.id+=1},remove:function(R){var T=x(),I=new Set(Array.isArray(R)?R:[R]);I.size<=0||(c.keys=c.keys.filter(function($,_){return!I.has(_)}),y(T.filter(function($,_){return!I.has(_)})))},move:function(R,T){if(R!==T){var I=x();R<0||R>=I.length||T<0||T>=I.length||(c.keys=Qg(c.keys,R,T),y(Qg(I,R,T)))}}},S=p||[];return Array.isArray(S)||(S=[]),r(S.map(function(O,R){var T=c.keys[R];return T===void 0&&(c.keys[R]=c.id,T=c.keys[R],c.id+=1),{name:R,key:T,isListField:!0}}),E,b)})))}function R_(e){var t=!1,n=e.length,r=[];return e.length?new Promise(function(o,i){e.forEach(function(a,s){a.catch(function(l){return t=!0,l}).then(function(l){n-=1,r[s]=l,!(n>0)&&(t&&i(r),o(r))})})}):Promise.resolve([])}var sx="__@field_split__";function nd(e){return e.map(function(t){return"".concat(ee(t),":").concat(t)}).join(sx)}var mo=function(){function e(){ct(this,e),P(this,"kvs",new Map)}return dt(e,[{key:"set",value:function(n,r){this.kvs.set(nd(n),r)}},{key:"get",value:function(n){return this.kvs.get(nd(n))}},{key:"update",value:function(n,r){var o=this.get(n),i=r(o);i?this.set(n,i):this.delete(n)}},{key:"delete",value:function(n){this.kvs.delete(nd(n))}},{key:"map",value:function(n){return Z(this.kvs.entries()).map(function(r){var o=J(r,2),i=o[0],a=o[1],s=i.split(sx);return n({key:s.map(function(l){var u=l.match(/^([^:]*):(.*)$/),c=J(u,3),d=c[1],f=c[2];return d==="number"?Number(f):f}),value:a})})}},{key:"toJSON",value:function(){var n={};return this.map(function(r){var o=r.key,i=r.value;return n[o.join(".")]=i,null}),n}}]),e}(),P_=["name"],A_=dt(function e(t){var n=this;ct(this,e),P(this,"formHooked",!1),P(this,"forceRootUpdate",void 0),P(this,"subscribable",!0),P(this,"store",{}),P(this,"fieldEntities",[]),P(this,"initialValues",{}),P(this,"callbacks",{}),P(this,"validateMessages",null),P(this,"preserve",null),P(this,"lastValidatePromise",null),P(this,"getForm",function(){return{getFieldValue:n.getFieldValue,getFieldsValue:n.getFieldsValue,getFieldError:n.getFieldError,getFieldWarning:n.getFieldWarning,getFieldsError:n.getFieldsError,isFieldsTouched:n.isFieldsTouched,isFieldTouched:n.isFieldTouched,isFieldValidating:n.isFieldValidating,isFieldsValidating:n.isFieldsValidating,resetFields:n.resetFields,setFields:n.setFields,setFieldValue:n.setFieldValue,setFieldsValue:n.setFieldsValue,validateFields:n.validateFields,submit:n.submit,_init:!0,getInternalHooks:n.getInternalHooks}}),P(this,"getInternalHooks",function(r){return r===Br?(n.formHooked=!0,{dispatch:n.dispatch,initEntityValue:n.initEntityValue,registerField:n.registerField,useSubscribe:n.useSubscribe,setInitialValues:n.setInitialValues,destroyForm:n.destroyForm,setCallbacks:n.setCallbacks,setValidateMessages:n.setValidateMessages,getFields:n.getFields,setPreserve:n.setPreserve,getInitialValue:n.getInitialValue,registerWatch:n.registerWatch}):(Ht(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)}),P(this,"useSubscribe",function(r){n.subscribable=r}),P(this,"prevWithoutPreserves",null),P(this,"setInitialValues",function(r,o){if(n.initialValues=r||{},o){var i,a=Ro(r,n.store);(i=n.prevWithoutPreserves)===null||i===void 0||i.map(function(s){var l=s.key;a=mn(a,l,_n(r,l))}),n.prevWithoutPreserves=null,n.updateStore(a)}}),P(this,"destroyForm",function(r){if(r)n.updateStore({});else{var o=new mo;n.getFieldEntities(!0).forEach(function(i){n.isMergedPreserve(i.isPreserve())||o.set(i.getNamePath(),!0)}),n.prevWithoutPreserves=o}}),P(this,"getInitialValue",function(r){var o=_n(n.initialValues,r);return r.length?Ro(o):o}),P(this,"setCallbacks",function(r){n.callbacks=r}),P(this,"setValidateMessages",function(r){n.validateMessages=r}),P(this,"setPreserve",function(r){n.preserve=r}),P(this,"watchList",[]),P(this,"registerWatch",function(r){return n.watchList.push(r),function(){n.watchList=n.watchList.filter(function(o){return o!==r})}}),P(this,"notifyWatch",function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(n.watchList.length){var o=n.getFieldsValue(),i=n.getFieldsValue(!0);n.watchList.forEach(function(a){a(o,i,r)})}}),P(this,"timeoutId",null),P(this,"warningUnhooked",function(){}),P(this,"updateStore",function(r){n.store=r}),P(this,"getFieldEntities",function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return r?n.fieldEntities.filter(function(o){return o.getNamePath().length}):n.fieldEntities}),P(this,"getFieldsMap",function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,o=new mo;return n.getFieldEntities(r).forEach(function(i){var a=i.getNamePath();o.set(a,i)}),o}),P(this,"getFieldEntitiesForNamePathList",function(r){if(!r)return n.getFieldEntities(!0);var o=n.getFieldsMap(!0);return r.map(function(i){var a=Ve(i);return o.get(a)||{INVALIDATE_NAME_PATH:Ve(i)}})}),P(this,"getFieldsValue",function(r,o){n.warningUnhooked();var i,a,s;if(r===!0||Array.isArray(r)?(i=r,a=o):r&&ee(r)==="object"&&(s=r.strict,a=r.filter),i===!0&&!a)return n.store;var l=n.getFieldEntitiesForNamePathList(Array.isArray(i)?i:null),u=[];return l.forEach(function(c){var d,f,w="INVALIDATE_NAME_PATH"in c?c.INVALIDATE_NAME_PATH:c.getNamePath();if(s){var h,g;if((h=(g=c).isList)!==null&&h!==void 0&&h.call(g))return}else if(!i&&(d=(f=c).isListField)!==null&&d!==void 0&&d.call(f))return;if(!a)u.push(w);else{var b="getMeta"in c?c.getMeta():null;a(b)&&u.push(w)}}),Kg(n.store,u.map(Ve))}),P(this,"getFieldValue",function(r){n.warningUnhooked();var o=Ve(r);return _n(n.store,o)}),P(this,"getFieldsError",function(r){n.warningUnhooked();var o=n.getFieldEntitiesForNamePathList(r);return o.map(function(i,a){return i&&!("INVALIDATE_NAME_PATH"in i)?{name:i.getNamePath(),errors:i.getErrors(),warnings:i.getWarnings()}:{name:Ve(r[a]),errors:[],warnings:[]}})}),P(this,"getFieldError",function(r){n.warningUnhooked();var o=Ve(r),i=n.getFieldsError([o])[0];return i.errors}),P(this,"getFieldWarning",function(r){n.warningUnhooked();var o=Ve(r),i=n.getFieldsError([o])[0];return i.warnings}),P(this,"isFieldsTouched",function(){n.warningUnhooked();for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=o[0],s=o[1],l,u=!1;o.length===0?l=null:o.length===1?Array.isArray(a)?(l=a.map(Ve),u=!1):(l=null,u=a):(l=a.map(Ve),u=s);var c=n.getFieldEntities(!0),d=function(b){return b.isFieldTouched()};if(!l)return u?c.every(function(g){return d(g)||g.isList()}):c.some(d);var f=new mo;l.forEach(function(g){f.set(g,[])}),c.forEach(function(g){var b=g.getNamePath();l.forEach(function(m){m.every(function(p,y){return b[y]===p})&&f.update(m,function(p){return[].concat(Z(p),[g])})})});var w=function(b){return b.some(d)},h=f.map(function(g){var b=g.value;return b});return u?h.every(w):h.some(w)}),P(this,"isFieldTouched",function(r){return n.warningUnhooked(),n.isFieldsTouched([r])}),P(this,"isFieldsValidating",function(r){n.warningUnhooked();var o=n.getFieldEntities();if(!r)return o.some(function(a){return a.isFieldValidating()});var i=r.map(Ve);return o.some(function(a){var s=a.getNamePath();return Bo(i,s)&&a.isFieldValidating()})}),P(this,"isFieldValidating",function(r){return n.warningUnhooked(),n.isFieldsValidating([r])}),P(this,"resetWithFieldInitialValue",function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=new mo,i=n.getFieldEntities(!0);i.forEach(function(l){var u=l.props.initialValue,c=l.getNamePath();if(u!==void 0){var d=o.get(c)||new Set;d.add({entity:l,value:u}),o.set(c,d)}});var a=function(u){u.forEach(function(c){var d=c.props.initialValue;if(d!==void 0){var f=c.getNamePath(),w=n.getInitialValue(f);if(w!==void 0)Ht(!1,"Form already set 'initialValues' with path '".concat(f.join("."),"'. Field can not overwrite it."));else{var h=o.get(f);if(h&&h.size>1)Ht(!1,"Multiple Field with path '".concat(f.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(h){var g=n.getFieldValue(f),b=c.isListField();!b&&(!r.skipExist||g===void 0)&&n.updateStore(mn(n.store,f,Z(h)[0].value))}}}})},s;r.entities?s=r.entities:r.namePathList?(s=[],r.namePathList.forEach(function(l){var u=o.get(l);if(u){var c;(c=s).push.apply(c,Z(Z(u).map(function(d){return d.entity})))}})):s=i,a(s)}),P(this,"resetFields",function(r){n.warningUnhooked();var o=n.store;if(!r){n.updateStore(Ro(n.initialValues)),n.resetWithFieldInitialValue(),n.notifyObservers(o,null,{type:"reset"}),n.notifyWatch();return}var i=r.map(Ve);i.forEach(function(a){var s=n.getInitialValue(a);n.updateStore(mn(n.store,a,s))}),n.resetWithFieldInitialValue({namePathList:i}),n.notifyObservers(o,i,{type:"reset"}),n.notifyWatch(i)}),P(this,"setFields",function(r){n.warningUnhooked();var o=n.store,i=[];r.forEach(function(a){var s=a.name,l=It(a,P_),u=Ve(s);i.push(u),"value"in l&&n.updateStore(mn(n.store,u,l.value)),n.notifyObservers(o,[u],{type:"setField",data:a})}),n.notifyWatch(i)}),P(this,"getFields",function(){var r=n.getFieldEntities(!0),o=r.map(function(i){var a=i.getNamePath(),s=i.getMeta(),l=j(j({},s),{},{name:a,value:n.getFieldValue(a)});return Object.defineProperty(l,"originRCField",{value:!0}),l});return o}),P(this,"initEntityValue",function(r){var o=r.props.initialValue;if(o!==void 0){var i=r.getNamePath(),a=_n(n.store,i);a===void 0&&n.updateStore(mn(n.store,i,o))}}),P(this,"isMergedPreserve",function(r){var o=r!==void 0?r:n.preserve;return o??!0}),P(this,"registerField",function(r){n.fieldEntities.push(r);var o=r.getNamePath();if(n.notifyWatch([o]),r.props.initialValue!==void 0){var i=n.store;n.resetWithFieldInitialValue({entities:[r],skipExist:!0}),n.notifyObservers(i,[r.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(a,s){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(n.fieldEntities=n.fieldEntities.filter(function(d){return d!==r}),!n.isMergedPreserve(s)&&(!a||l.length>1)){var u=a?void 0:n.getInitialValue(o);if(o.length&&n.getFieldValue(o)!==u&&n.fieldEntities.every(function(d){return!ix(d.getNamePath(),o)})){var c=n.store;n.updateStore(mn(c,o,u,!0)),n.notifyObservers(c,[o],{type:"remove"}),n.triggerDependenciesUpdate(c,o)}}n.notifyWatch([o])}}),P(this,"dispatch",function(r){switch(r.type){case"updateValue":{var o=r.namePath,i=r.value;n.updateValue(o,i);break}case"validateField":{var a=r.namePath,s=r.triggerName;n.validateFields([a],{triggerName:s});break}}}),P(this,"notifyObservers",function(r,o,i){if(n.subscribable){var a=j(j({},i),{},{store:n.getFieldsValue(!0)});n.getFieldEntities().forEach(function(s){var l=s.onStoreChange;l(r,o,a)})}else n.forceRootUpdate()}),P(this,"triggerDependenciesUpdate",function(r,o){var i=n.getDependencyChildrenFields(o);return i.length&&n.validateFields(i),n.notifyObservers(r,i,{type:"dependenciesUpdate",relatedFields:[o].concat(Z(i))}),i}),P(this,"updateValue",function(r,o){var i=Ve(r),a=n.store;n.updateStore(mn(n.store,i,o)),n.notifyObservers(a,[i],{type:"valueUpdate",source:"internal"}),n.notifyWatch([i]);var s=n.triggerDependenciesUpdate(a,i),l=n.callbacks.onValuesChange;if(l){var u=Kg(n.store,[i]);l(u,n.getFieldsValue())}n.triggerOnFieldsChange([i].concat(Z(s)))}),P(this,"setFieldsValue",function(r){n.warningUnhooked();var o=n.store;if(r){var i=Ro(n.store,r);n.updateStore(i)}n.notifyObservers(o,null,{type:"valueUpdate",source:"external"}),n.notifyWatch()}),P(this,"setFieldValue",function(r,o){n.setFields([{name:r,value:o,errors:[],warnings:[]}])}),P(this,"getDependencyChildrenFields",function(r){var o=new Set,i=[],a=new mo;n.getFieldEntities().forEach(function(l){var u=l.props.dependencies;(u||[]).forEach(function(c){var d=Ve(c);a.update(d,function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return f.add(l),f})})});var s=function l(u){var c=a.get(u)||new Set;c.forEach(function(d){if(!o.has(d)){o.add(d);var f=d.getNamePath();d.isFieldDirty()&&f.length&&(i.push(f),l(f))}})};return s(r),i}),P(this,"triggerOnFieldsChange",function(r,o){var i=n.callbacks.onFieldsChange;if(i){var a=n.getFields();if(o){var s=new mo;o.forEach(function(u){var c=u.name,d=u.errors;s.set(c,d)}),a.forEach(function(u){u.errors=s.get(u.name)||u.errors})}var l=a.filter(function(u){var c=u.name;return Bo(r,c)});l.length&&i(l,a)}}),P(this,"validateFields",function(r,o){n.warningUnhooked();var i,a;Array.isArray(r)||typeof r=="string"||typeof o=="string"?(i=r,a=o):a=r;var s=!!i,l=s?i.map(Ve):[],u=[],c=String(Date.now()),d=new Set,f=a||{},w=f.recursive,h=f.dirty;n.getFieldEntities(!0).forEach(function(p){if(s||l.push(p.getNamePath()),!(!p.props.rules||!p.props.rules.length)&&!(h&&!p.isFieldDirty())){var y=p.getNamePath();if(d.add(y.join(c)),!s||Bo(l,y,w)){var C=p.validateRules(j({validateMessages:j(j({},ox),n.validateMessages)},a));u.push(C.then(function(){return{name:y,errors:[],warnings:[]}}).catch(function(x){var E,S=[],O=[];return(E=x.forEach)===null||E===void 0||E.call(x,function(R){var T=R.rule.warningOnly,I=R.errors;T?O.push.apply(O,Z(I)):S.push.apply(S,Z(I))}),S.length?Promise.reject({name:y,errors:S,warnings:O}):{name:y,errors:S,warnings:O}}))}}});var g=R_(u);n.lastValidatePromise=g,g.catch(function(p){return p}).then(function(p){var y=p.map(function(C){var x=C.name;return x});n.notifyObservers(n.store,y,{type:"validateFinish"}),n.triggerOnFieldsChange(y,p)});var b=g.then(function(){return n.lastValidatePromise===g?Promise.resolve(n.getFieldsValue(l)):Promise.reject([])}).catch(function(p){var y=p.filter(function(C){return C&&C.errors.length});return Promise.reject({values:n.getFieldsValue(l),errorFields:y,outOfDate:n.lastValidatePromise!==g})});b.catch(function(p){return p});var m=l.filter(function(p){return d.has(p.join(c))});return n.triggerOnFieldsChange(m),b}),P(this,"submit",function(){n.warningUnhooked(),n.validateFields().then(function(r){var o=n.callbacks.onFinish;if(o)try{o(r)}catch(i){console.error(i)}}).catch(function(r){var o=n.callbacks.onFinishFailed;o&&o(r)})}),this.forceRootUpdate=t});function lx(e){var t=v.useRef(),n=v.useState({}),r=J(n,2),o=r[1];if(!t.current)if(e)t.current=e;else{var i=function(){o({})},a=new A_(i);t.current=a.getForm()}return[t.current]}var sp=v.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),$_=function(t){var n=t.validateMessages,r=t.onFormChange,o=t.onFormFinish,i=t.children,a=v.useContext(sp),s=v.useRef({});return v.createElement(sp.Provider,{value:j(j({},a),{},{validateMessages:j(j({},a.validateMessages),n),triggerFormChange:function(u,c){r&&r(u,{changedFields:c,forms:s.current}),a.triggerFormChange(u,c)},triggerFormFinish:function(u,c){o&&o(u,{values:c,forms:s.current}),a.triggerFormFinish(u,c)},registerForm:function(u,c){u&&(s.current=j(j({},s.current),{},P({},u,c))),a.registerForm(u,c)},unregisterForm:function(u){var c=j({},s.current);delete c[u],s.current=c,a.unregisterForm(u)}})},i)},I_=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed","clearOnDestroy"],F_=function(t,n){var r=t.name,o=t.initialValues,i=t.fields,a=t.form,s=t.preserve,l=t.children,u=t.component,c=u===void 0?"form":u,d=t.validateMessages,f=t.validateTrigger,w=f===void 0?"onChange":f,h=t.onValuesChange,g=t.onFieldsChange,b=t.onFinish,m=t.onFinishFailed,p=t.clearOnDestroy,y=It(t,I_),C=v.useRef(null),x=v.useContext(sp),E=lx(a),S=J(E,1),O=S[0],R=O.getInternalHooks(Br),T=R.useSubscribe,I=R.setInitialValues,$=R.setCallbacks,_=R.setValidateMessages,N=R.setPreserve,k=R.destroyForm;v.useImperativeHandle(n,function(){return j(j({},O),{},{nativeElement:C.current})}),v.useEffect(function(){return x.registerForm(r,O),function(){x.unregisterForm(r)}},[x,O,r]),_(j(j({},x.validateMessages),d)),$({onValuesChange:h,onFieldsChange:function(z){if(x.triggerFormChange(r,z),g){for(var q=arguments.length,H=new Array(q>1?q-1:0),ie=1;ie<q;ie++)H[ie-1]=arguments[ie];g.apply(void 0,[z].concat(H))}},onFinish:function(z){x.triggerFormFinish(r,z),b&&b(z)},onFinishFailed:m}),N(s);var M=v.useRef(null);I(o,!M.current),M.current||(M.current=!0),v.useEffect(function(){return function(){return k(p)}},[]);var B,F=typeof l=="function";if(F){var V=O.getFieldsValue(!0);B=l(V,O)}else B=l;T(!F);var U=v.useRef();v.useEffect(function(){S_(U.current||[],i||[])||O.setFields(i||[]),U.current=i},[i,O]);var Q=v.useMemo(function(){return j(j({},O),{},{validateTrigger:w})},[O,w]),G=v.createElement(Ol.Provider,{value:null},v.createElement(ni.Provider,{value:Q},B));return c===!1?G:v.createElement(c,Je({},y,{ref:C,onSubmit:function(z){z.preventDefault(),z.stopPropagation(),O.submit()},onReset:function(z){var q;z.preventDefault(),O.resetFields(),(q=y.onReset)===null||q===void 0||q.call(y,z)}}),G)};function Xg(e){try{return JSON.stringify(e)}catch{return Math.random()}}function __(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],o=t[1],i=o===void 0?{}:o,a=BF(i)?{form:i}:i,s=a.form,l=v.useState(),u=J(l,2),c=u[0],d=u[1],f=v.useMemo(function(){return Xg(c)},[c]),w=v.useRef(f);w.current=f;var h=v.useContext(ni),g=s||h,b=g&&g._init,m=Ve(r),p=v.useRef(m);return p.current=m,v.useEffect(function(){if(b){var y=g.getFieldsValue,C=g.getInternalHooks,x=C(Br),E=x.registerWatch,S=function(I,$){var _=a.preserve?$:I;return typeof r=="function"?r(_):_n(_,p.current)},O=E(function(T,I){var $=S(T,I),_=Xg($);w.current!==_&&(w.current=_,d($))}),R=S(y(),y(!0));return c!==R&&d(R),O}},[b]),c}var j_=v.forwardRef(F_),Da=j_;Da.FormProvider=$_;Da.Field=ax;Da.List=T_;Da.useForm=lx;Da.useWatch=__;const Rr=v.createContext({}),N_=({children:e,status:t,override:n})=>{const r=v.useContext(Rr),o=v.useMemo(()=>{const i=Object.assign({},r);return n&&delete i.isFormItemInput,t&&(delete i.status,delete i.hasFeedback,delete i.feedbackIcon),i},[t,n,r]);return v.createElement(Rr.Provider,{value:o},e)},k_=v.createContext(void 0),Jg=e=>{const{space:t,form:n,children:r}=e;if(r==null)return null;let o=r;return n&&(o=W.createElement(N_,{override:!0,status:!0},o)),t&&(o=W.createElement(JI,null,o)),o};function lp(e,t,n){return ne({[`${e}-status-success`]:t==="success",[`${e}-status-warning`]:t==="warning",[`${e}-status-error`]:t==="error",[`${e}-status-validating`]:t==="validating",[`${e}-has-feedback`]:n})}const Km=(e,t)=>t||e,ux=(e,t,n=void 0)=>{var r,o;const{variant:i,[e]:a}=v.useContext(ut),s=v.useContext(k_),l=a==null?void 0:a.variant;let u;typeof t<"u"?u=t:n===!1?u="borderless":u=(o=(r=s??l)!==null&&r!==void 0?r:i)!==null&&o!==void 0?o:"outlined";const c=qA.includes(u);return[u,c]};var M_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},z_=function(t,n){return v.createElement(Yn,Je({},t,{ref:n,icon:M_}))},L_=v.forwardRef(z_);function Uu(e){return un(e,{inputAffixPadding:e.paddingXXS})}const Wu=e=>{const{controlHeight:t,fontSize:n,lineHeight:r,lineWidth:o,controlHeightSM:i,controlHeightLG:a,fontSizeLG:s,lineHeightLG:l,paddingSM:u,controlPaddingHorizontalSM:c,controlPaddingHorizontal:d,colorFillAlter:f,colorPrimaryHover:w,colorPrimary:h,controlOutlineWidth:g,controlOutline:b,colorErrorOutline:m,colorWarningOutline:p,colorBgContainer:y,inputFontSize:C,inputFontSizeLG:x,inputFontSizeSM:E}=e,S=C||n,O=E||S,R=x||s,T=Math.round((t-S*r)/2*10)/10-o,I=Math.round((i-O*r)/2*10)/10-o,$=Math.ceil((a-R*l)/2*10)/10-o;return{paddingBlock:Math.max(T,0),paddingBlockSM:Math.max(I,0),paddingBlockLG:Math.max($,0),paddingInline:u-o,paddingInlineSM:c-o,paddingInlineLG:d-o,addonBg:f,activeBorderColor:h,hoverBorderColor:w,activeShadow:`0 0 0 ${g}px ${b}`,errorActiveShadow:`0 0 0 ${g}px ${m}`,warningActiveShadow:`0 0 0 ${g}px ${p}`,hoverBg:y,activeBg:y,inputFontSize:S,inputFontSizeLG:R,inputFontSizeSM:O}},D_=e=>({borderColor:e.hoverBorderColor,backgroundColor:e.hoverBg}),Qm=e=>({color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"input[disabled], textarea[disabled]":{cursor:"not-allowed"},"&:hover:not([disabled])":Object.assign({},D_(un(e,{hoverBorderColor:e.colorBorder,hoverBg:e.colorBgContainerDisabled})))}),cx=(e,t)=>({background:e.colorBgContainer,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:t.borderColor,"&:hover":{borderColor:t.hoverBorderColor,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:t.activeBorderColor,boxShadow:t.activeShadow,outline:0,backgroundColor:e.activeBg}}),Yg=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},cx(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}}),[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:t.borderColor}}),B_=(e,t)=>({"&-outlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},cx(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow})),{[`&${e.componentCls}-disabled, &[disabled]`]:Object.assign({},Qm(e))}),Yg(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError})),Yg(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning})),t)}),Zg=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{borderColor:t.addonBorderColor,color:t.addonColor}}}),V_=e=>({"&-outlined":Object.assign(Object.assign(Object.assign({[`${e.componentCls}-group`]:{"&-addon":{background:e.addonBg,border:`${Ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}}},Zg(e,{status:"error",addonBorderColor:e.colorError,addonColor:e.colorErrorText})),Zg(e,{status:"warning",addonBorderColor:e.colorWarning,addonColor:e.colorWarningText})),{[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group-addon`]:Object.assign({},Qm(e))}})}),H_=(e,t)=>{const{componentCls:n}=e;return{"&-borderless":Object.assign({background:"transparent",border:"none","&:focus, &:focus-within":{outline:"none"},[`&${n}-disabled, &[disabled]`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${n}-status-error`]:{"&, & input, & textarea":{color:e.colorError}},[`&${n}-status-warning`]:{"&, & input, & textarea":{color:e.colorWarning}}},t)}},dx=(e,t)=>{var n;return{background:t.bg,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:"transparent","input&, & input, textarea&, & textarea":{color:(n=t==null?void 0:t.inputColor)!==null&&n!==void 0?n:"unset"},"&:hover":{background:t.hoverBg},"&:focus, &:focus-within":{outline:0,borderColor:t.activeBorderColor,backgroundColor:e.activeBg}}},ey=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},dx(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}})}),U_=(e,t)=>({"&-filled":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},dx(e,{bg:e.colorFillTertiary,hoverBg:e.colorFillSecondary,activeBorderColor:e.activeBorderColor})),{[`&${e.componentCls}-disabled, &[disabled]`]:Object.assign({},Qm(e))}),ey(e,{status:"error",bg:e.colorErrorBg,hoverBg:e.colorErrorBgHover,activeBorderColor:e.colorError,inputColor:e.colorErrorText,affixColor:e.colorError})),ey(e,{status:"warning",bg:e.colorWarningBg,hoverBg:e.colorWarningBgHover,activeBorderColor:e.colorWarning,inputColor:e.colorWarningText,affixColor:e.colorWarning})),t)}),ty=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{background:t.addonBg,color:t.addonColor}}}),W_=e=>({"&-filled":Object.assign(Object.assign(Object.assign({[`${e.componentCls}-group-addon`]:{background:e.colorFillTertiary,"&:last-child":{position:"static"}}},ty(e,{status:"error",addonBg:e.colorErrorBg,addonColor:e.colorErrorText})),ty(e,{status:"warning",addonBg:e.colorWarningBg,addonColor:e.colorWarningText})),{[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group`]:{"&-addon":{background:e.colorFillTertiary,color:e.colorTextDisabled},"&-addon:first-child":{borderInlineStart:`${Ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${Ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${Ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:last-child":{borderInlineEnd:`${Ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${Ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${Ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`}}}})}),fx=(e,t)=>({background:e.colorBgContainer,borderWidth:`${Ce(e.lineWidth)} 0`,borderStyle:`${e.lineType} none`,borderColor:`transparent transparent ${t.borderColor} transparent`,borderRadius:0,"&:hover":{borderColor:`transparent transparent ${t.borderColor} transparent`,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:`transparent transparent ${t.activeBorderColor} transparent`,outline:0,backgroundColor:e.activeBg}}),ny=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},fx(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}}),[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:`transparent transparent ${t.borderColor} transparent`}}),G_=(e,t)=>({"&-underlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},fx(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow})),{[`&${e.componentCls}-disabled, &[disabled]`]:{color:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed","&:hover":{borderColor:`transparent transparent ${e.colorBorder} transparent`}},"input[disabled], textarea[disabled]":{cursor:"not-allowed"}}),ny(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError})),ny(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning})),t)}),q_=e=>({"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:e,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}}),px=e=>{const{paddingBlockLG:t,lineHeightLG:n,borderRadiusLG:r,paddingInlineLG:o}=e;return{padding:`${Ce(t)} ${Ce(o)}`,fontSize:e.inputFontSizeLG,lineHeight:n,borderRadius:r}},mx=e=>({padding:`${Ce(e.paddingBlockSM)} ${Ce(e.paddingInlineSM)}`,fontSize:e.inputFontSizeSM,borderRadius:e.borderRadiusSM}),hx=e=>Object.assign(Object.assign({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${Ce(e.paddingBlock)} ${Ce(e.paddingInline)}`,color:e.colorText,fontSize:e.inputFontSize,lineHeight:e.lineHeight,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid}`},q_(e.colorTextPlaceholder)),{"&-lg":Object.assign({},px(e)),"&-sm":Object.assign({},mx(e)),"&-rtl, &-textarea-rtl":{direction:"rtl"}}),K_=e=>{const{componentCls:t,antCls:n}=e;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,"&[class*='col-']":{paddingInlineEnd:e.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${t}, &-lg > ${t}-group-addon`]:Object.assign({},px(e)),[`&-sm ${t}, &-sm > ${t}-group-addon`]:Object.assign({},mx(e)),[`&-lg ${n}-select-single ${n}-select-selector`]:{height:e.controlHeightLG},[`&-sm ${n}-select-single ${n}-select-selector`]:{height:e.controlHeightSM},[`> ${t}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${t}-group`]:{"&-addon, &-wrap":{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${Ce(e.paddingInline)}`,color:e.colorText,fontWeight:"normal",fontSize:e.inputFontSize,textAlign:"center",borderRadius:e.borderRadius,transition:`all ${e.motionDurationSlow}`,lineHeight:1,[`${n}-select`]:{margin:`${Ce(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${Ce(e.calc(e.paddingInline).mul(-1).equal())}`,[`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]:{[`${n}-select-selector`]:{backgroundColor:"inherit",border:`${Ce(e.lineWidth)} ${e.lineType} transparent`,boxShadow:"none"}}},[`${n}-cascader-picker`]:{margin:`-9px ${Ce(e.calc(e.paddingInline).mul(-1).equal())}`,backgroundColor:"transparent",[`${n}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}}},[t]:{width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1,[`${t}-search-with-button &`]:{zIndex:0}}},[`> ${t}:first-child, ${t}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${n}-select ${n}-select-selector`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}-affix-wrapper`]:{[`&:not(:first-child) ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}:last-child, ${t}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${n}-select ${n}-select-selector`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${t}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0,[`${t}-search &`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius}},[`&:not(:first-child), ${t}-search &:not(:first-child)`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${t}-group-compact`]:Object.assign(Object.assign({display:"block"},g$()),{[`${t}-group-addon, ${t}-group-wrap, > ${t}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:e.lineWidth,"&:hover, &:focus":{zIndex:1}}},"& > *":{display:"inline-flex",float:"none",verticalAlign:"top",borderRadius:0},[`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]:{display:"inline-flex"},"& > *:not(:last-child)":{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderInlineEndWidth:e.lineWidth},[t]:{float:"none"},[`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]:{borderInlineEndWidth:e.lineWidth,borderRadius:0,"&:hover, &:focus":{zIndex:1}},[`& > ${n}-select-focused`]:{zIndex:1},[`& > ${n}-select > ${n}-select-arrow`]:{zIndex:1},[`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius},[`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]:{borderInlineEndWidth:e.lineWidth,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius},[`& > ${n}-select-auto-complete ${t}`]:{verticalAlign:"top"},[`${t}-group-wrapper + ${t}-group-wrapper`]:{marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),[`${t}-affix-wrapper`]:{borderRadius:0}},[`${t}-group-wrapper:not(:last-child)`]:{[`&${t}-search > ${t}-group`]:{[`& > ${t}-group-addon > ${t}-search-button`]:{borderRadius:0},[`& > ${t}`]:{borderStartStartRadius:e.borderRadius,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:e.borderRadius}}}})}},Q_=e=>{const{componentCls:t,controlHeightSM:n,lineWidth:r,calc:o}=e,a=o(n).sub(o(r).mul(2)).sub(16).div(2).equal();return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Aw(e)),hx(e)),B_(e)),U_(e)),H_(e)),G_(e)),{'&[type="color"]':{height:e.controlHeight,[`&${t}-lg`]:{height:e.controlHeightLG},[`&${t}-sm`]:{height:n,paddingTop:a,paddingBottom:a}},'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':{appearance:"none"}})}},X_=e=>{const{componentCls:t}=e;return{[`${t}-clear-icon`]:{margin:0,padding:0,lineHeight:0,color:e.colorTextQuaternary,fontSize:e.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${e.motionDurationSlow}`,border:"none",outline:"none",backgroundColor:"transparent","&:hover":{color:e.colorIcon},"&:active":{color:e.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${Ce(e.inputAffixPadding)}`}}}},J_=e=>{const{componentCls:t,inputAffixPadding:n,colorTextDescription:r,motionDurationSlow:o,colorIcon:i,colorIconHover:a,iconCls:s}=e,l=`${t}-affix-wrapper`,u=`${t}-affix-wrapper-disabled`;return{[l]:Object.assign(Object.assign(Object.assign(Object.assign({},hx(e)),{display:"inline-flex",[`&:not(${t}-disabled):hover`]:{zIndex:1,[`${t}-search-with-button &`]:{zIndex:0}},"&-focused, &:focus":{zIndex:1},[`> input${t}`]:{padding:0},[`> input${t}, > textarea${t}`]:{fontSize:"inherit",border:"none",borderRadius:0,outline:"none",background:"transparent",color:"inherit","&::-ms-reveal":{display:"none"},"&:focus":{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[t]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:e.paddingXS}},"&-show-count-suffix":{color:r,direction:"ltr"},"&-show-count-has-suffix":{marginInlineEnd:e.paddingXXS},"&-prefix":{marginInlineEnd:n},"&-suffix":{marginInlineStart:n}}}),X_(e)),{[`${s}${t}-password-icon`]:{color:i,cursor:"pointer",transition:`all ${o}`,"&:hover":{color:a}}}),[`${t}-underlined`]:{borderRadius:0},[u]:{[`${s}${t}-password-icon`]:{color:i,cursor:"not-allowed","&:hover":{color:i}}}}},Y_=e=>{const{componentCls:t,borderRadiusLG:n,borderRadiusSM:r}=e;return{[`${t}-group`]:Object.assign(Object.assign(Object.assign({},Aw(e)),K_(e)),{"&-rtl":{direction:"rtl"},"&-wrapper":Object.assign(Object.assign(Object.assign({display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${t}-group-addon`]:{borderRadius:n,fontSize:e.inputFontSizeLG}},"&-sm":{[`${t}-group-addon`]:{borderRadius:r}}},V_(e)),W_(e)),{[`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}, ${t}-group-addon`]:{borderRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-first-item`]:{[`${t}, ${t}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-last-item`]:{[`${t}, ${t}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}-affix-wrapper`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-item`]:{[`${t}-affix-wrapper`]:{borderStartStartRadius:0,borderEndStartRadius:0}}})})}},Z_=e=>{const{componentCls:t,antCls:n}=e,r=`${t}-search`;return{[r]:{[t]:{"&:hover, &:focus":{[`+ ${t}-group-addon ${r}-button:not(${n}-btn-color-primary):not(${n}-btn-variant-text)`]:{borderInlineStartColor:e.colorPrimaryHover}}},[`${t}-affix-wrapper`]:{height:e.controlHeight,borderRadius:0},[`${t}-lg`]:{lineHeight:e.calc(e.lineHeightLG).sub(2e-4).equal()},[`> ${t}-group`]:{[`> ${t}-group-addon:last-child`]:{insetInlineStart:-1,padding:0,border:0,[`${r}-button`]:{marginInlineEnd:-1,borderStartStartRadius:0,borderEndStartRadius:0,boxShadow:"none"},[`${r}-button:not(${n}-btn-color-primary)`]:{color:e.colorTextDescription,"&:hover":{color:e.colorPrimaryHover},"&:active":{color:e.colorPrimaryActive},[`&${n}-btn-loading::before`]:{inset:0}}}},[`${r}-button`]:{height:e.controlHeight,"&:hover, &:focus":{zIndex:1}},"&-large":{[`${t}-affix-wrapper, ${r}-button`]:{height:e.controlHeightLG}},"&-small":{[`${t}-affix-wrapper, ${r}-button`]:{height:e.controlHeightSM}},"&-rtl":{direction:"rtl"},[`&${t}-compact-item`]:{[`&:not(${t}-compact-last-item)`]:{[`${t}-group-addon`]:{[`${t}-search-button`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderRadius:0}}},[`&:not(${t}-compact-first-item)`]:{[`${t},${t}-affix-wrapper`]:{borderRadius:0}},[`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]:{"&:hover, &:focus, &:active":{zIndex:2}},[`> ${t}-affix-wrapper-focused`]:{zIndex:2}}}}},ej=e=>{const{componentCls:t}=e;return{[`${t}-out-of-range`]:{[`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]:{color:e.colorError}}}},vx=Na(["Input","Shared"],e=>{const t=un(e,Uu(e));return[Q_(t),J_(t)]},Wu,{resetFont:!1}),gx=Na(["Input","Component"],e=>{const t=un(e,Uu(e));return[Y_(t),Z_(t),ej(t),nx(t)]},Wu,{resetFont:!1});function tj(e){return!!(e.addonBefore||e.addonAfter)}function nj(e){return!!(e.prefix||e.suffix||e.allowClear)}function ry(e,t,n){var r=t.cloneNode(!0),o=Object.create(e,{target:{value:r},currentTarget:{value:r}});return r.value=n,typeof t.selectionStart=="number"&&typeof t.selectionEnd=="number"&&(r.selectionStart=t.selectionStart,r.selectionEnd=t.selectionEnd),r.setSelectionRange=function(){t.setSelectionRange.apply(t,arguments)},o}function Tl(e,t,n,r){if(n){var o=t;if(t.type==="click"){o=ry(t,e,""),n(o);return}if(e.type!=="file"&&r!==void 0){o=ry(t,e,r),n(o);return}n(o)}}function yx(e,t){if(e){e.focus(t);var n=t||{},r=n.cursor;if(r){var o=e.value.length;switch(r){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(o,o);break;default:e.setSelectionRange(0,o)}}}}var bx=W.forwardRef(function(e,t){var n,r,o,i=e.inputElement,a=e.children,s=e.prefixCls,l=e.prefix,u=e.suffix,c=e.addonBefore,d=e.addonAfter,f=e.className,w=e.style,h=e.disabled,g=e.readOnly,b=e.focused,m=e.triggerFocus,p=e.allowClear,y=e.value,C=e.handleReset,x=e.hidden,E=e.classes,S=e.classNames,O=e.dataAttrs,R=e.styles,T=e.components,I=e.onClear,$=a??i,_=(T==null?void 0:T.affixWrapper)||"span",N=(T==null?void 0:T.groupWrapper)||"span",k=(T==null?void 0:T.wrapper)||"span",M=(T==null?void 0:T.groupAddon)||"span",B=v.useRef(null),F=function(Ue){var te;(te=B.current)!==null&&te!==void 0&&te.contains(Ue.target)&&(m==null||m())},V=nj(e),U=v.cloneElement($,{value:y,className:ne((n=$.props)===null||n===void 0?void 0:n.className,!V&&(S==null?void 0:S.variant))||null}),Q=v.useRef(null);if(W.useImperativeHandle(t,function(){return{nativeElement:Q.current||B.current}}),V){var G=null;if(p){var K=!h&&!g&&y,z="".concat(s,"-clear-icon"),q=ee(p)==="object"&&p!==null&&p!==void 0&&p.clearIcon?p.clearIcon:"✖";G=W.createElement("button",{type:"button",tabIndex:-1,onClick:function(Ue){C==null||C(Ue),I==null||I()},onMouseDown:function(Ue){return Ue.preventDefault()},className:ne(z,P(P({},"".concat(z,"-hidden"),!K),"".concat(z,"-has-suffix"),!!u))},q)}var H="".concat(s,"-affix-wrapper"),ie=ne(H,P(P(P(P(P({},"".concat(s,"-disabled"),h),"".concat(H,"-disabled"),h),"".concat(H,"-focused"),b),"".concat(H,"-readonly"),g),"".concat(H,"-input-with-clear-btn"),u&&p&&y),E==null?void 0:E.affixWrapper,S==null?void 0:S.affixWrapper,S==null?void 0:S.variant),Y=(u||p)&&W.createElement("span",{className:ne("".concat(s,"-suffix"),S==null?void 0:S.suffix),style:R==null?void 0:R.suffix},G,u);U=W.createElement(_,Je({className:ie,style:R==null?void 0:R.affixWrapper,onClick:F},O==null?void 0:O.affixWrapper,{ref:B}),l&&W.createElement("span",{className:ne("".concat(s,"-prefix"),S==null?void 0:S.prefix),style:R==null?void 0:R.prefix},l),U,Y)}if(tj(e)){var he="".concat(s,"-group"),pe="".concat(he,"-addon"),Se="".concat(he,"-wrapper"),Le=ne("".concat(s,"-wrapper"),he,E==null?void 0:E.wrapper,S==null?void 0:S.wrapper),Ie=ne(Se,P({},"".concat(Se,"-disabled"),h),E==null?void 0:E.group,S==null?void 0:S.groupWrapper);U=W.createElement(N,{className:Ie,ref:Q},W.createElement(k,{className:Le},c&&W.createElement(M,{className:pe},c),U,d&&W.createElement(M,{className:pe},d)))}return W.cloneElement(U,{className:ne((r=U.props)===null||r===void 0?void 0:r.className,f)||null,style:j(j({},(o=U.props)===null||o===void 0?void 0:o.style),w),hidden:x})}),rj=["show"];function wx(e,t){return v.useMemo(function(){var n={};t&&(n.show=ee(t)==="object"&&t.formatter?t.formatter:!!t),n=j(j({},n),e);var r=n,o=r.show,i=It(r,rj);return j(j({},i),{},{show:!!o,showFormatter:typeof o=="function"?o:void 0,strategy:i.strategy||function(a){return a.length}})},[e,t])}var oj=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],ij=v.forwardRef(function(e,t){var n=e.autoComplete,r=e.onChange,o=e.onFocus,i=e.onBlur,a=e.onPressEnter,s=e.onKeyDown,l=e.onKeyUp,u=e.prefixCls,c=u===void 0?"rc-input":u,d=e.disabled,f=e.htmlSize,w=e.className,h=e.maxLength,g=e.suffix,b=e.showCount,m=e.count,p=e.type,y=p===void 0?"text":p,C=e.classes,x=e.classNames,E=e.styles,S=e.onCompositionStart,O=e.onCompositionEnd,R=It(e,oj),T=v.useState(!1),I=J(T,2),$=I[0],_=I[1],N=v.useRef(!1),k=v.useRef(!1),M=v.useRef(null),B=v.useRef(null),F=function(re){M.current&&yx(M.current,re)},V=Dm(e.defaultValue,{value:e.value}),U=J(V,2),Q=U[0],G=U[1],K=Q==null?"":String(Q),z=v.useState(null),q=J(z,2),H=q[0],ie=q[1],Y=wx(m,b),he=Y.max||h,pe=Y.strategy(K),Se=!!he&&pe>he;v.useImperativeHandle(t,function(){var ae;return{focus:F,blur:function(){var be;(be=M.current)===null||be===void 0||be.blur()},setSelectionRange:function(be,Xt,Ft){var _t;(_t=M.current)===null||_t===void 0||_t.setSelectionRange(be,Xt,Ft)},select:function(){var be;(be=M.current)===null||be===void 0||be.select()},input:M.current,nativeElement:((ae=B.current)===null||ae===void 0?void 0:ae.nativeElement)||M.current}}),v.useEffect(function(){k.current&&(k.current=!1),_(function(ae){return ae&&d?!1:ae})},[d]);var Le=function(re,be,Xt){var Ft=be;if(!N.current&&Y.exceedFormatter&&Y.max&&Y.strategy(be)>Y.max){if(Ft=Y.exceedFormatter(be,{max:Y.max}),be!==Ft){var _t,jt;ie([((_t=M.current)===null||_t===void 0?void 0:_t.selectionStart)||0,((jt=M.current)===null||jt===void 0?void 0:jt.selectionEnd)||0])}}else if(Xt.source==="compositionEnd")return;G(Ft),M.current&&Tl(M.current,re,r,Ft)};v.useEffect(function(){if(H){var ae;(ae=M.current)===null||ae===void 0||ae.setSelectionRange.apply(ae,Z(H))}},[H]);var Ie=function(re){Le(re,re.target.value,{source:"change"})},Ee=function(re){N.current=!1,Le(re,re.currentTarget.value,{source:"compositionEnd"}),O==null||O(re)},Ue=function(re){a&&re.key==="Enter"&&!k.current&&(k.current=!0,a(re)),s==null||s(re)},te=function(re){re.key==="Enter"&&(k.current=!1),l==null||l(re)},ce=function(re){_(!0),o==null||o(re)},me=function(re){k.current&&(k.current=!1),_(!1),i==null||i(re)},Te=function(re){G(""),F(),M.current&&Tl(M.current,re,r)},Qt=Se&&"".concat(c,"-out-of-range"),Re=function(){var re=Wm(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return W.createElement("input",Je({autoComplete:n},re,{onChange:Ie,onFocus:ce,onBlur:me,onKeyDown:Ue,onKeyUp:te,className:ne(c,P({},"".concat(c,"-disabled"),d),x==null?void 0:x.input),style:E==null?void 0:E.input,ref:M,size:f,type:y,onCompositionStart:function(Xt){N.current=!0,S==null||S(Xt)},onCompositionEnd:Ee}))},Pe=function(){var re=Number(he)>0;if(g||Y.show){var be=Y.showFormatter?Y.showFormatter({value:K,count:pe,maxLength:he}):"".concat(pe).concat(re?" / ".concat(he):"");return W.createElement(W.Fragment,null,Y.show&&W.createElement("span",{className:ne("".concat(c,"-show-count-suffix"),P({},"".concat(c,"-show-count-has-suffix"),!!g),x==null?void 0:x.count),style:j({},E==null?void 0:E.count)},be),g)}return null};return W.createElement(bx,Je({},R,{prefixCls:c,className:ne(w,Qt),handleReset:Te,value:K,focused:$,triggerFocus:F,suffix:Pe(),disabled:d,classes:C,classNames:x,styles:E,ref:B}),Re())});const xx=e=>{let t;return typeof e=="object"&&(e!=null&&e.clearIcon)?t=e:e&&(t={clearIcon:W.createElement(gI,null)}),t};function Cx(e,t){const n=v.useRef([]),r=()=>{n.current.push(setTimeout(()=>{var o,i,a,s;!((o=e.current)===null||o===void 0)&&o.input&&((i=e.current)===null||i===void 0?void 0:i.input.getAttribute("type"))==="password"&&(!((a=e.current)===null||a===void 0)&&a.input.hasAttribute("value"))&&((s=e.current)===null||s===void 0||s.input.removeAttribute("value"))}))};return v.useEffect(()=>(t&&r(),()=>n.current.forEach(o=>{o&&clearTimeout(o)})),[]),r}function aj(e){return!!(e.prefix||e.suffix||e.allowClear||e.showCount)}var sj=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Gu=v.forwardRef((e,t)=>{const{prefixCls:n,bordered:r=!0,status:o,size:i,disabled:a,onBlur:s,onFocus:l,suffix:u,allowClear:c,addonAfter:d,addonBefore:f,className:w,style:h,styles:g,rootClassName:b,onChange:m,classNames:p,variant:y}=e,C=sj(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames","variant"]),{getPrefixCls:x,direction:E,allowClear:S,autoComplete:O,className:R,style:T,classNames:I,styles:$}=Lm("input"),_=x("input",n),N=v.useRef(null),k=qw(_),[M,B,F]=vx(_,b),[V]=gx(_,k),{compactSize:U,compactItemClassnames:Q}=Mu(_,E),G=za(me=>{var Te;return(Te=i??U)!==null&&Te!==void 0?Te:me}),K=W.useContext(no),z=a??K,{status:q,hasFeedback:H,feedbackIcon:ie}=v.useContext(Rr),Y=Km(q,o),he=aj(e)||!!H;v.useRef(he);const pe=Cx(N,!0),Se=me=>{pe(),s==null||s(me)},Le=me=>{pe(),l==null||l(me)},Ie=me=>{pe(),m==null||m(me)},Ee=(H||u)&&W.createElement(W.Fragment,null,u,H&&ie),Ue=xx(c??S),[te,ce]=ux("input",y,r);return M(V(W.createElement(ij,Object.assign({ref:di(t,N),prefixCls:_,autoComplete:O},C,{disabled:z,onBlur:Se,onFocus:Le,style:Object.assign(Object.assign({},T),h),styles:Object.assign(Object.assign({},$),g),suffix:Ee,allowClear:Ue,className:ne(w,b,F,k,Q,R),onChange:Ie,addonBefore:f&&W.createElement(Jg,{form:!0,space:!0},f),addonAfter:d&&W.createElement(Jg,{form:!0,space:!0},d),classNames:Object.assign(Object.assign(Object.assign({},p),I),{input:ne({[`${_}-sm`]:G==="small",[`${_}-lg`]:G==="large",[`${_}-rtl`]:E==="rtl"},p==null?void 0:p.input,I.input,B),variant:ne({[`${_}-${te}`]:ce},lp(_,Y)),affixWrapper:ne({[`${_}-affix-wrapper-sm`]:G==="small",[`${_}-affix-wrapper-lg`]:G==="large",[`${_}-affix-wrapper-rtl`]:E==="rtl"},B),wrapper:ne({[`${_}-group-rtl`]:E==="rtl"},B),groupWrapper:ne({[`${_}-group-wrapper-sm`]:G==="small",[`${_}-group-wrapper-lg`]:G==="large",[`${_}-group-wrapper-rtl`]:E==="rtl",[`${_}-group-wrapper-${te}`]:ce},lp(`${_}-group-wrapper`,Y,H),B)})}))))});var lj={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},uj=function(t,n){return v.createElement(Yn,Je({},t,{ref:n,icon:lj}))},cj=v.forwardRef(uj);const dj=e=>{const{getPrefixCls:t,direction:n}=v.useContext(ut),{prefixCls:r,className:o}=e,i=t("input-group",r),a=t("input"),[s,l,u]=gx(a),c=ne(i,u,{[`${i}-lg`]:e.size==="large",[`${i}-sm`]:e.size==="small",[`${i}-compact`]:e.compact,[`${i}-rtl`]:n==="rtl"},l,o),d=v.useContext(Rr),f=v.useMemo(()=>Object.assign(Object.assign({},d),{isFormItemInput:!1}),[d]);return s(v.createElement("span",{className:c,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},v.createElement(Rr.Provider,{value:f},e.children)))},fj=e=>{const{componentCls:t,paddingXS:n}=e;return{[t]:{display:"inline-flex",alignItems:"center",flexWrap:"nowrap",columnGap:n,[`${t}-input-wrapper`]:{position:"relative",[`${t}-mask-icon`]:{position:"absolute",zIndex:"1",top:"50%",right:"50%",transform:"translate(50%, -50%)",pointerEvents:"none"},[`${t}-mask-input`]:{color:"transparent",caretColor:e.colorText},[`${t}-mask-input[type=number]::-webkit-inner-spin-button`]:{"-webkit-appearance":"none",margin:0},[`${t}-mask-input[type=number]`]:{"-moz-appearance":"textfield"}},"&-rtl":{direction:"rtl"},[`${t}-input`]:{textAlign:"center",paddingInline:e.paddingXXS},[`&${t}-sm ${t}-input`]:{paddingInline:e.calc(e.paddingXXS).div(2).equal()},[`&${t}-lg ${t}-input`]:{paddingInline:e.paddingXS}}}},pj=Na(["Input","OTP"],e=>{const t=un(e,Uu(e));return fj(t)},Wu);var mj=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const hj=v.forwardRef((e,t)=>{const{className:n,value:r,onChange:o,onActiveChange:i,index:a,mask:s}=e,l=mj(e,["className","value","onChange","onActiveChange","index","mask"]),{getPrefixCls:u}=v.useContext(ut),c=u("otp"),d=typeof s=="string"?s:r,f=v.useRef(null);v.useImperativeHandle(t,()=>f.current);const w=m=>{o(a,m.target.value)},h=()=>{Mn(()=>{var m;const p=(m=f.current)===null||m===void 0?void 0:m.input;document.activeElement===p&&p&&p.select()})},g=m=>{const{key:p,ctrlKey:y,metaKey:C}=m;p==="ArrowLeft"?i(a-1):p==="ArrowRight"?i(a+1):p==="z"&&(y||C)&&m.preventDefault(),h()},b=m=>{m.key==="Backspace"&&!r&&i(a-1),h()};return v.createElement("span",{className:`${c}-input-wrapper`,role:"presentation"},s&&r!==""&&r!==void 0&&v.createElement("span",{className:`${c}-mask-icon`,"aria-hidden":"true"},d),v.createElement(Gu,Object.assign({"aria-label":`OTP Input ${a+1}`,type:s===!0?"password":"text"},l,{ref:f,value:r,onInput:w,onFocus:h,onKeyDown:g,onKeyUp:b,onMouseDown:h,onMouseUp:h,className:ne(n,{[`${c}-mask-input`]:s})})))});var vj=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function ms(e){return(e||"").split("")}const gj=e=>{const{index:t,prefixCls:n,separator:r}=e,o=typeof r=="function"?r(t):r;return o?v.createElement("span",{className:`${n}-separator`},o):null},yj=v.forwardRef((e,t)=>{const{prefixCls:n,length:r=6,size:o,defaultValue:i,value:a,onChange:s,formatter:l,separator:u,variant:c,disabled:d,status:f,autoFocus:w,mask:h,type:g,onInput:b,inputMode:m}=e,p=vj(e,["prefixCls","length","size","defaultValue","value","onChange","formatter","separator","variant","disabled","status","autoFocus","mask","type","onInput","inputMode"]),{getPrefixCls:y,direction:C}=v.useContext(ut),x=y("otp",n),E=SI(p,{aria:!0,data:!0,attr:!0}),[S,O,R]=pj(x),T=za(z=>o??z),I=v.useContext(Rr),$=Km(I.status,f),_=v.useMemo(()=>Object.assign(Object.assign({},I),{status:$,hasFeedback:!1,feedbackIcon:null}),[I,$]),N=v.useRef(null),k=v.useRef({});v.useImperativeHandle(t,()=>({focus:()=>{var z;(z=k.current[0])===null||z===void 0||z.focus()},blur:()=>{var z;for(let q=0;q<r;q+=1)(z=k.current[q])===null||z===void 0||z.blur()},nativeElement:N.current}));const M=z=>l?l(z):z,[B,F]=v.useState(()=>ms(M(i||"")));v.useEffect(()=>{a!==void 0&&F(ms(a))},[a]);const V=Tr(z=>{F(z),b&&b(z),s&&z.length===r&&z.every(q=>q)&&z.some((q,H)=>B[H]!==q)&&s(z.join(""))}),U=Tr((z,q)=>{let H=Z(B);for(let Y=0;Y<z;Y+=1)H[Y]||(H[Y]="");q.length<=1?H[z]=q:H=H.slice(0,z).concat(ms(q)),H=H.slice(0,r);for(let Y=H.length-1;Y>=0&&!H[Y];Y-=1)H.pop();const ie=M(H.map(Y=>Y||" ").join(""));return H=ms(ie).map((Y,he)=>Y===" "&&!H[he]?H[he]:Y),H}),Q=(z,q)=>{var H;const ie=U(z,q),Y=Math.min(z+q.length,r-1);Y!==z&&ie[z]!==void 0&&((H=k.current[Y])===null||H===void 0||H.focus()),V(ie)},G=z=>{var q;(q=k.current[z])===null||q===void 0||q.focus()},K={variant:c,disabled:d,status:$,mask:h,type:g,inputMode:m};return S(v.createElement("div",Object.assign({},E,{ref:N,className:ne(x,{[`${x}-sm`]:T==="small",[`${x}-lg`]:T==="large",[`${x}-rtl`]:C==="rtl"},R,O),role:"group"}),v.createElement(Rr.Provider,{value:_},Array.from({length:r}).map((z,q)=>{const H=`otp-${q}`,ie=B[q]||"";return v.createElement(v.Fragment,{key:H},v.createElement(hj,Object.assign({ref:Y=>{k.current[q]=Y},index:q,size:T,htmlSize:1,className:`${x}-input`,onChange:Q,value:ie,onActiveChange:G,autoFocus:q===0&&w},K)),q<r-1&&v.createElement(gj,{separator:u,index:q,prefixCls:x}))}))))});var bj={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},wj=function(t,n){return v.createElement(Yn,Je({},t,{ref:n,icon:bj}))},xj=v.forwardRef(wj),Cj=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Sj=e=>e?v.createElement(cj,null):v.createElement(xj,null),Ej={click:"onClick",hover:"onMouseOver"},Oj=v.forwardRef((e,t)=>{const{disabled:n,action:r="click",visibilityToggle:o=!0,iconRender:i=Sj,suffix:a}=e,s=v.useContext(no),l=n??s,u=typeof o=="object"&&o.visible!==void 0,[c,d]=v.useState(()=>u?o.visible:!1),f=v.useRef(null);v.useEffect(()=>{u&&d(o.visible)},[u,o]);const w=Cx(f),h=()=>{var I;if(l)return;c&&w();const $=!c;d($),typeof o=="object"&&((I=o.onVisibleChange)===null||I===void 0||I.call(o,$))},g=I=>{const $=Ej[r]||"",_=i(c),N={[$]:h,className:`${I}-icon`,key:"passwordIcon",onMouseDown:k=>{k.preventDefault()},onMouseUp:k=>{k.preventDefault()}};return v.cloneElement(v.isValidElement(_)?_:v.createElement("span",null,_),N)},{className:b,prefixCls:m,inputPrefixCls:p,size:y}=e,C=Cj(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:x}=v.useContext(ut),E=x("input",p),S=x("input-password",m),O=o&&g(S),R=ne(S,b,{[`${S}-${y}`]:!!y}),T=Object.assign(Object.assign({},Wm(C,["suffix","iconRender","visibilityToggle"])),{type:c?"text":"password",className:R,prefixCls:E,suffix:v.createElement(v.Fragment,null,O,a)});return y&&(T.size=y),v.createElement(Gu,Object.assign({ref:di(t,f)},T))});var Tj=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Rj=v.forwardRef((e,t)=>{const{prefixCls:n,inputPrefixCls:r,className:o,size:i,suffix:a,enterButton:s=!1,addonAfter:l,loading:u,disabled:c,onSearch:d,onChange:f,onCompositionStart:w,onCompositionEnd:h,variant:g,onPressEnter:b}=e,m=Tj(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd","variant","onPressEnter"]),{getPrefixCls:p,direction:y}=v.useContext(ut),C=v.useRef(!1),x=p("input-search",n),E=p("input",r),{compactSize:S}=Mu(x,y),O=za(K=>{var z;return(z=i??S)!==null&&z!==void 0?z:K}),R=v.useRef(null),T=K=>{K!=null&&K.target&&K.type==="click"&&d&&d(K.target.value,K,{source:"clear"}),f==null||f(K)},I=K=>{var z;document.activeElement===((z=R.current)===null||z===void 0?void 0:z.input)&&K.preventDefault()},$=K=>{var z,q;d&&d((q=(z=R.current)===null||z===void 0?void 0:z.input)===null||q===void 0?void 0:q.value,K,{source:"input"})},_=K=>{C.current||u||(b==null||b(K),$(K))},N=typeof s=="boolean"?v.createElement(L_,null):null,k=`${x}-button`;let M;const B=s||{},F=B.type&&B.type.__ANT_BUTTON===!0;F||B.type==="button"?M=Cl(B,Object.assign({onMouseDown:I,onClick:K=>{var z,q;(q=(z=B==null?void 0:B.props)===null||z===void 0?void 0:z.onClick)===null||q===void 0||q.call(z,K),$(K)},key:"enterButton"},F?{className:k,size:O}:{})):M=v.createElement(Do,{className:k,color:s?"primary":"default",size:O,disabled:c,key:"enterButton",onMouseDown:I,onClick:$,loading:u,icon:N,variant:g==="borderless"||g==="filled"||g==="underlined"?"text":s?"solid":void 0},s),l&&(M=[M,Cl(l,{key:"addonAfter"})]);const V=ne(x,{[`${x}-rtl`]:y==="rtl",[`${x}-${O}`]:!!O,[`${x}-with-button`]:!!s},o),U=K=>{C.current=!0,w==null||w(K)},Q=K=>{C.current=!1,h==null||h(K)},G=Object.assign(Object.assign({},m),{className:V,prefixCls:E,type:"search",size:O,variant:g,onPressEnter:_,onCompositionStart:U,onCompositionEnd:Q,addonAfter:M,suffix:a,onChange:T,disabled:c});return v.createElement(Gu,Object.assign({ref:di(R,t)},G))});var Pj=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,Aj=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],rd={},zt;function $j(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&rd[n])return rd[n];var r=window.getComputedStyle(e),o=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),i=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),a=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),s=Aj.map(function(u){return"".concat(u,":").concat(r.getPropertyValue(u))}).join(";"),l={sizingStyle:s,paddingSize:i,borderSize:a,boxSizing:o};return t&&n&&(rd[n]=l),l}function Ij(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;zt||(zt=document.createElement("textarea"),zt.setAttribute("tab-index","-1"),zt.setAttribute("aria-hidden","true"),zt.setAttribute("name","hiddenTextarea"),document.body.appendChild(zt)),e.getAttribute("wrap")?zt.setAttribute("wrap",e.getAttribute("wrap")):zt.removeAttribute("wrap");var o=$j(e,t),i=o.paddingSize,a=o.borderSize,s=o.boxSizing,l=o.sizingStyle;zt.setAttribute("style","".concat(l,";").concat(Pj)),zt.value=e.value||e.placeholder||"";var u=void 0,c=void 0,d,f=zt.scrollHeight;if(s==="border-box"?f+=a:s==="content-box"&&(f-=i),n!==null||r!==null){zt.value=" ";var w=zt.scrollHeight-i;n!==null&&(u=w*n,s==="border-box"&&(u=u+i+a),f=Math.max(u,f)),r!==null&&(c=w*r,s==="border-box"&&(c=c+i+a),d=f>c?"":"hidden",f=Math.min(c,f))}var h={height:f,overflowY:d,resize:"none"};return u&&(h.minHeight=u),c&&(h.maxHeight=c),h}var Fj=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],od=0,id=1,ad=2,_j=v.forwardRef(function(e,t){var n=e,r=n.prefixCls,o=n.defaultValue,i=n.value,a=n.autoSize,s=n.onResize,l=n.className,u=n.style,c=n.disabled,d=n.onChange;n.onInternalAutoSize;var f=It(n,Fj),w=Dm(o,{value:i,postState:function(K){return K??""}}),h=J(w,2),g=h[0],b=h[1],m=function(K){b(K.target.value),d==null||d(K)},p=v.useRef();v.useImperativeHandle(t,function(){return{textArea:p.current}});var y=v.useMemo(function(){return a&&ee(a)==="object"?[a.minRows,a.maxRows]:[]},[a]),C=J(y,2),x=C[0],E=C[1],S=!!a,O=v.useState(ad),R=J(O,2),T=R[0],I=R[1],$=v.useState(),_=J($,2),N=_[0],k=_[1],M=function(){I(od)};ya(function(){S&&M()},[i,x,E,S]),ya(function(){if(T===od)I(id);else if(T===id){var G=Ij(p.current,!1,x,E);I(ad),k(G)}},[T]);var B=v.useRef(),F=function(){Mn.cancel(B.current)},V=function(K){T===ad&&(s==null||s(K),a&&(F(),B.current=Mn(function(){M()})))};v.useEffect(function(){return F},[]);var U=S?N:null,Q=j(j({},u),U);return(T===od||T===id)&&(Q.overflowY="hidden",Q.overflowX="hidden"),v.createElement(U1,{onResize:V,disabled:!(a||s)},v.createElement("textarea",Je({},f,{ref:p,style:Q,className:ne(r,l,P({},"".concat(r,"-disabled"),c)),disabled:c,value:g,onChange:m})))}),jj=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],Nj=W.forwardRef(function(e,t){var n,r=e.defaultValue,o=e.value,i=e.onFocus,a=e.onBlur,s=e.onChange,l=e.allowClear,u=e.maxLength,c=e.onCompositionStart,d=e.onCompositionEnd,f=e.suffix,w=e.prefixCls,h=w===void 0?"rc-textarea":w,g=e.showCount,b=e.count,m=e.className,p=e.style,y=e.disabled,C=e.hidden,x=e.classNames,E=e.styles,S=e.onResize,O=e.onClear,R=e.onPressEnter,T=e.readOnly,I=e.autoSize,$=e.onKeyDown,_=It(e,jj),N=Dm(r,{value:o,defaultValue:r}),k=J(N,2),M=k[0],B=k[1],F=M==null?"":String(M),V=W.useState(!1),U=J(V,2),Q=U[0],G=U[1],K=W.useRef(!1),z=W.useState(null),q=J(z,2),H=q[0],ie=q[1],Y=v.useRef(null),he=v.useRef(null),pe=function(){var de;return(de=he.current)===null||de===void 0?void 0:de.textArea},Se=function(){pe().focus()};v.useImperativeHandle(t,function(){var Fe;return{resizableTextArea:he.current,focus:Se,blur:function(){pe().blur()},nativeElement:((Fe=Y.current)===null||Fe===void 0?void 0:Fe.nativeElement)||pe()}}),v.useEffect(function(){G(function(Fe){return!y&&Fe})},[y]);var Le=W.useState(null),Ie=J(Le,2),Ee=Ie[0],Ue=Ie[1];W.useEffect(function(){if(Ee){var Fe;(Fe=pe()).setSelectionRange.apply(Fe,Z(Ee))}},[Ee]);var te=wx(b,g),ce=(n=te.max)!==null&&n!==void 0?n:u,me=Number(ce)>0,Te=te.strategy(F),Qt=!!ce&&Te>ce,Re=function(de,Nt){var On=Nt;!K.current&&te.exceedFormatter&&te.max&&te.strategy(Nt)>te.max&&(On=te.exceedFormatter(Nt,{max:te.max}),Nt!==On&&Ue([pe().selectionStart||0,pe().selectionEnd||0])),B(On),Tl(de.currentTarget,de,s,On)},Pe=function(de){K.current=!0,c==null||c(de)},ae=function(de){K.current=!1,Re(de,de.currentTarget.value),d==null||d(de)},re=function(de){Re(de,de.target.value)},be=function(de){de.key==="Enter"&&R&&R(de),$==null||$(de)},Xt=function(de){G(!0),i==null||i(de)},Ft=function(de){G(!1),a==null||a(de)},_t=function(de){B(""),Se(),Tl(pe(),de,s)},jt=f,En;te.show&&(te.showFormatter?En=te.showFormatter({value:F,count:Te,maxLength:ce}):En="".concat(Te).concat(me?" / ".concat(ce):""),jt=W.createElement(W.Fragment,null,jt,W.createElement("span",{className:ne("".concat(h,"-data-count"),x==null?void 0:x.count),style:E==null?void 0:E.count},En)));var ao=function(de){var Nt;S==null||S(de),(Nt=pe())!==null&&Nt!==void 0&&Nt.style.height&&ie(!0)},so=!I&&!g&&!l;return W.createElement(bx,{ref:Y,value:F,allowClear:l,handleReset:_t,suffix:jt,prefixCls:h,classNames:j(j({},x),{},{affixWrapper:ne(x==null?void 0:x.affixWrapper,P(P({},"".concat(h,"-show-count"),g),"".concat(h,"-textarea-allow-clear"),l))}),disabled:y,focused:Q,className:ne(m,Qt&&"".concat(h,"-out-of-range")),style:j(j({},p),H&&!so?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof En=="string"?En:void 0}},hidden:C,readOnly:T,onClear:O},W.createElement(_j,Je({},_,{autoSize:I,maxLength:u,onKeyDown:be,onChange:re,onFocus:Xt,onBlur:Ft,onCompositionStart:Pe,onCompositionEnd:ae,className:ne(x==null?void 0:x.textarea),style:j(j({},E==null?void 0:E.textarea),{},{resize:p==null?void 0:p.resize}),disabled:y,prefixCls:h,onResize:ao,ref:he,readOnly:T})))});const kj=e=>{const{componentCls:t,paddingLG:n}=e,r=`${t}-textarea`;return{[`textarea${t}`]:{maxWidth:"100%",height:"auto",minHeight:e.controlHeight,lineHeight:e.lineHeight,verticalAlign:"bottom",transition:`all ${e.motionDurationSlow}`,resize:"vertical",[`&${t}-mouse-active`]:{transition:`all ${e.motionDurationSlow}, height 0s, width 0s`}},[`${t}-textarea-affix-wrapper-resize-dirty`]:{width:"auto"},[r]:{position:"relative","&-show-count":{[`${t}-data-count`]:{position:"absolute",bottom:e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),insetInlineEnd:0,color:e.colorTextDescription,whiteSpace:"nowrap",pointerEvents:"none"}},[`
        &-allow-clear > ${t},
        &-affix-wrapper${r}-has-feedback ${t}
      `]:{paddingInlineEnd:n},[`&-affix-wrapper${t}-affix-wrapper`]:{padding:0,[`> textarea${t}`]:{fontSize:"inherit",border:"none",outline:"none",background:"transparent",minHeight:e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),"&:focus":{boxShadow:"none !important"}},[`${t}-suffix`]:{margin:0,"> *:not(:last-child)":{marginInline:0},[`${t}-clear-icon`]:{position:"absolute",insetInlineEnd:e.paddingInline,insetBlockStart:e.paddingXS},[`${r}-suffix`]:{position:"absolute",top:0,insetInlineEnd:e.paddingInline,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto",pointerEvents:"none"}}},[`&-affix-wrapper${t}-affix-wrapper-rtl`]:{[`${t}-suffix`]:{[`${t}-data-count`]:{direction:"ltr",insetInlineStart:0}}},[`&-affix-wrapper${t}-affix-wrapper-sm`]:{[`${t}-suffix`]:{[`${t}-clear-icon`]:{insetInlineEnd:e.paddingInlineSM}}}}}},Mj=Na(["Input","TextArea"],e=>{const t=un(e,Uu(e));return kj(t)},Wu,{resetFont:!1});var zj=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Lj=v.forwardRef((e,t)=>{var n;const{prefixCls:r,bordered:o=!0,size:i,disabled:a,status:s,allowClear:l,classNames:u,rootClassName:c,className:d,style:f,styles:w,variant:h,showCount:g,onMouseDown:b,onResize:m}=e,p=zj(e,["prefixCls","bordered","size","disabled","status","allowClear","classNames","rootClassName","className","style","styles","variant","showCount","onMouseDown","onResize"]),{getPrefixCls:y,direction:C,allowClear:x,autoComplete:E,className:S,style:O,classNames:R,styles:T}=Lm("textArea"),I=v.useContext(no),$=a??I,{status:_,hasFeedback:N,feedbackIcon:k}=v.useContext(Rr),M=Km(_,s),B=v.useRef(null);v.useImperativeHandle(t,()=>{var te;return{resizableTextArea:(te=B.current)===null||te===void 0?void 0:te.resizableTextArea,focus:ce=>{var me,Te;yx((Te=(me=B.current)===null||me===void 0?void 0:me.resizableTextArea)===null||Te===void 0?void 0:Te.textArea,ce)},blur:()=>{var ce;return(ce=B.current)===null||ce===void 0?void 0:ce.blur()}}});const F=y("input",r),V=qw(F),[U,Q,G]=vx(F,c),[K]=Mj(F,V),{compactSize:z,compactItemClassnames:q}=Mu(F,C),H=za(te=>{var ce;return(ce=i??z)!==null&&ce!==void 0?ce:te}),[ie,Y]=ux("textArea",h,o),he=xx(l??x),[pe,Se]=v.useState(!1),[Le,Ie]=v.useState(!1),Ee=te=>{Se(!0),b==null||b(te);const ce=()=>{Se(!1),document.removeEventListener("mouseup",ce)};document.addEventListener("mouseup",ce)},Ue=te=>{var ce,me;if(m==null||m(te),pe&&typeof getComputedStyle=="function"){const Te=(me=(ce=B.current)===null||ce===void 0?void 0:ce.nativeElement)===null||me===void 0?void 0:me.querySelector("textarea");Te&&getComputedStyle(Te).resize==="both"&&Ie(!0)}};return U(K(v.createElement(Nj,Object.assign({autoComplete:E},p,{style:Object.assign(Object.assign({},O),f),styles:Object.assign(Object.assign({},T),w),disabled:$,allowClear:he,className:ne(G,V,d,c,q,S,Le&&`${F}-textarea-affix-wrapper-resize-dirty`),classNames:Object.assign(Object.assign(Object.assign({},u),R),{textarea:ne({[`${F}-sm`]:H==="small",[`${F}-lg`]:H==="large"},Q,u==null?void 0:u.textarea,R.textarea,pe&&`${F}-mouse-active`),variant:ne({[`${F}-${ie}`]:Y},lp(F,M)),affixWrapper:ne(`${F}-textarea-affix-wrapper`,{[`${F}-affix-wrapper-rtl`]:C==="rtl",[`${F}-affix-wrapper-sm`]:H==="small",[`${F}-affix-wrapper-lg`]:H==="large",[`${F}-textarea-show-count`]:g||((n=e.count)===null||n===void 0?void 0:n.show)},Q)}),prefixCls:F,suffix:N&&v.createElement("span",{className:`${F}-textarea-suffix`},k),showCount:g,ref:B,onResize:Ue,onMouseDown:Ee}))))}),hi=Gu;hi.Group=dj;hi.Search=Rj;hi.TextArea=Lj;hi.Password=Oj;hi.OTP=yj;var Dj={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},Bj=function(t,n){return v.createElement(Yn,Je({},t,{ref:n,icon:Dj}))},oy=v.forwardRef(Bj);const Vj=({widget:e,onAdd:t,showAddButton:n=!1})=>(Aa(),dm(),L.jsx("div",{className:"widget-card",children:L.jsxs("div",{className:"widget-header",children:[L.jsx("h3",{children:e.title}),L.jsx("p",{children:e.description})]})})),Hj="/assets/user-BY9pqo8a.png",Uj="/assets/jdo-Bb6O-TXq.png",Wj=({message:e})=>{const t=Aa(),n=e.type==="user",r=c=>{t(mP(c))},o=c=>new Date(c).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"}),i=()=>L.jsxs("div",{className:"thinking-message",children:[L.jsxs("div",{className:"thinking-indicator",children:[L.jsx("span",{className:"thinking-dot"}),L.jsx("span",{className:"thinking-dot"}),L.jsx("span",{className:"thinking-dot"})]}),L.jsx("div",{className:"thinking-text",children:e.content||"AI正在思考中..."})]}),a=()=>L.jsx("div",{className:"streaming-message",children:L.jsxs("div",{className:"message-text-content",children:[e.content,e.isStreaming&&L.jsx("span",{className:"streaming-cursor",children:"|"})]})}),s=()=>L.jsxs("div",{className:"error-message",children:[L.jsx("div",{className:"error-icon",children:"⚠️"}),L.jsx("div",{className:"error-text",children:e.content})]}),l=()=>L.jsxs("div",{className:"widget-message",children:[L.jsx("p",{children:"我为您生成了一个Widget卡片，您可以在右侧查看效果并应用到桌面"}),L.jsx(Vj,{widget:e.content,onAdd:r,showAddButton:!0})]}),u=()=>{switch(e.messageType){case"widget":return l();case"thinking":return i();case"error":return s();case"response":default:return a()}};return L.jsxs("div",{className:`message-item ${n?"user":"ai"}`,children:[n?L.jsx("img",{src:Hj,alt:"user",className:"message-avatar"}):L.jsx("img",{src:Uj,alt:"ai",className:"message-avatar"}),L.jsxs("div",{className:"message-content",children:[L.jsx("div",{className:"message-text",children:u()}),L.jsx("div",{className:"message-time",children:o(e.timestamp)})]})]})},Gj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJgSURBVHgB7d3hcdMwGAbgLxwDlAkIG8AElA0YoUwAG9BuABMQNoAJ6AjdIGYCuoFRLuVPL6FOJVt29Tx3Ot25yrm131qyVNcRAAAAAAAAAAAAAAAAAAAAAAAAzM4qCun7/ixVH1M5vyuUd5PK19VqtYlCigQgnfx1qn6lsg6m0KXyLgWhi0ylArANJ39qXSpvUghuI8OzyJRO/kU4+TWsU/kUmbIDEPt+nzreRqbsLiBdAfqgmtQFFBvIP0p/3DooYncsjx3kyDTaFaB6Mp+YsY5ziTEACyYAjROAxglA4wSgcc9jYgNmDrv7ix13t5QX8X+b+3Pjc97XkfZdyYWeSZx6f9oPcOAzlwM+drmkfQ1pk9N+KF1A4wSgcQLQOAFo3OR3AcmHeGC0fGDbJh62WeC+qrMYVMmpx22s46wLaJwANE4AKuhn9Mcykwcg/fDbAxNa26fWPm276I/P3m1jJiYfBLbSvt9PF3+OExkEMikBmJeshzweQwDm5XtMrEYAuoHblt7+0LZjdr/5V6k7z37S51RmAhfCIJBRCEDjBKBxAtA4AWjcUtcCaqm2BjGWxa4F1LKUNYuhdAGNE4DGCUDjlroWUEt34tdKth+FtYCFMAhkFALQOAFonAA0TgAaJwCNG+3p4HTX8i1Vv4MSXsZISswD/EnVWVDDbZoGeBEZSnQBP4NafkSmEleA89i/Lobpvcp9bUz2FSB9A9epugqmdrWayzuDdvr9Pz7cPQy5Dsb07yGSL1FA8QWbFIT3qXodjOE6lZvcF0UBAAAAAAAAAAAAAAAAAAAAALAIfwG2PXFl6cHdyQAAAABJRU5ErkJggg==",iy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbTSURBVHgB7Z3bURtJFIYPggKqeFj2hSquFhEYR2ARASYCiwiwI0BEABuBRQRrIrCIABwB4s7b6pWr9j9sa4tyabpbo7Honv6/KpUE3SOGOX/fu88RIYQQQgghhBBCCCGEEEIIIYQQQgghpWJMEuL09HR2amqq1u121/Dju1+Sz8bGxk7u7u5aq6urHUmE0gvAGL2OjxswfM3nGgih9fz8fLC0tNSUklNqAdze3m4/PT018HFW8tGGaHbLLIRSCuDm5qaKEvw3Pq5JMbQrlcr6/Px8W0pGRUoGjP8Zxj+W4oyvqKCOz8/PP0nJKFUNYIzflN8IaoI6aoIDKQmlEQCMX4Pxf8gIwN9ZX15ebkkJKIUAtM1HZ+0HXlUZDR3UBB/K0CeYkBKAErmDt6pn9o4O8/B+hOtexvswpo4SPkJAvm38LPJ+w/u6RE70NcDl5WUdBv3mkbUDg//1+Pi4nzXRozUJ0usQxI7H95WiKSiDAI4hAFePf6BhnG+TojXJwsJC1LVA1MNAGH+taOMrmhffu46X9RqdWby4uKhJxMQ+D1B3ZYCRNvN01vQazCJuufJBJFHPDcQugI+O9CamcU8kJ9q+Q0DWMT8EsCERE60AdJHHVf3rgo4MCQTQdGSp6r1IpEQrgOnpaVfb3ymih26+w7o8PDMzU5VIKd1aQA9d25eCcH0Xho5ViZRoBYAOWtWWjqq7LQWBpuTMkc4mgMQJBZA4FEDiUACJQwEkDgWQOBRA4lAAiUMBJA4FkDgUQOJQAIlDASQOBZA4FEDiUACJQwEkDgWQOEGcDTTHuzK3eOvu3tiOYOmBkUql8jkrvdvtHoXgeSSUw6E1vDIfFsRxJJGBe66K5eAK0vWtKW8Mm4DEoQA8QGn9w5aOqj5at3LRCmB8fLztyFKYjyAIwLrt++npiQJ4A9qO9MKObLn8C05NTVEAo8ac+LU9+BevoDIkOkJx5ZmbmyvsFNKoiboP4HH8a1uGxOUtxLibiZZQBGCtQs2Qqh+HYkGr7uvr6y+Sk5ubmx2Xl5CsE8iWe+5xJgEQhABQytqOLO/6/fLu7q4pDmDAPfUfKANifA42XPnQGW1lJL23XKYCCaLfEIQAHh8f244stX6/VGdPLgcOijqP1NIsnqiPYU+Hk80s7yOumgMjhyD6DUE4iTK+fU9tee7v7//s593LXKuuYX16/JnOn3uu5PFx29erOGqu1X4C8Pl/sq4dNcF4Cbu6uvpHLEZElfl1YWFhP+PaBt68S7j5vhbetAZRUemcQVUG8CoOA+9ifaLRL83DdV17cXFxVQIgmFEADHHoyJLpiwcPszFob1xLuXEMWZf/BDDInMFJlvEV2yKQ4acEQkjDwJYtUQ1mm9iBALZcbt0KQt3ObWYlGh+DNbGA9O8SCMEI4OHhwflQJicnM4d0vr79hsTpc9C4rbViGTmMnGAEoB08j2p8W0tYVmJPBPhYeA9b781lfHNvdbFzGJKT6aBmAjE02nVkUSfNe7YM+nDRJ/ignTQpBvUxvKsuYV2G8yn9EFJTAiI4X8GYuTv1GENvrqysOJsMLZEaMwgPfeCJIEMTpX7Xp8R6Oq0OpvffIzgBeD7Igfz1GyG8bNFydNA6Zn3hUGcZfcPH+TqXRvpWaAGogvQWjnG9T8yfE0wOreeJ8adOpmEMbU5mNVaAupSbmJho52mbzQTSsUewiuBKvxKkAMyGSp/wL7lFUARqfIxM9D6dm098m61RE+RysO4A1uAOHlnX1AC2kcHvYhDjg2aIxleC3Q+ABaKG55h+TYNFjVIE+re02hc/4+vcQVEjksIJVgBarcOwm57ZXxaEhln798WsFPq0+S/kjVcwKoIPGYMO2xfUBHsDXKIlbgsPvSUFomHpYMwd35VCBXm/ote/LwETRcwgdAobvoGcehQVADqP4RXbamFIRBM0Ko8IDG28WhDEoY7xXdVxb84AH98jf11yBJ6OxfhKVFHDhhDBa3qTPf+7lNf9ezonIAPuCehHTMZXogsbZ/oEKoLQfPR3TJvflIiIMm7gG4SKdXGiewRiDCUb5bkAfdBYnVstcMUvN3oPOhsZaxzh6COHFrDilwsdZegupNgDSJcpfPxIhKCG130LDB8fKKZ/8AkvFUIhJ4R1ShpGP7AFno6V0gngNa/2AWyYDqOXINTgyK9V/E+8vsdezdsotQD6cXV11bWlY80+qWdCDyGJQwEkDgWQOBRA4lAAiUMBJA4FkDgUQOJQAIlDASQOBZA4FEDiUACJQwEkDgWQOBRA4lAAiUMBJA4FkDgUQOJQAIlDARBCCCGEEEIIIYQQQgghhBBCCCGElIx/AaUUMdff2cR8AAAAAElFTkSuQmCC",{TextArea:qj}=hi,Kj=()=>{const e=Aa();Zr(p=>p.chat.currentInput);const t=Zr(p=>p.chat.isLoading),[n,r]=v.useState(""),[o,i]=v.useState(!1),[a,s]=v.useState(!1),[l,u]=v.useState(0);v.useRef(null);const c=()=>{const p=[{displayMessage:"我比较关注科技领域的新咨询，也想了解大家的观点",apiMessage:"评论卡片"},{displayMessage:"我需要一个热点新闻的桌面卡片",apiMessage:"新闻卡片"},{displayMessage:"我喜欢看一些科普类的视频",apiMessage:"视频卡片"},{displayMessage:"我想要一个最近热播电影的卡片，要有评分和介绍",apiMessage:"电影卡片"}],y=p[l];return u(C=>(C+1)%p.length),y},d=()=>{a||s(!0)},f=()=>{s(!1);const p=c();e(vf(p.displayMessage)),e(zo(p.apiMessage))},w=()=>{s(!0)},h=()=>{s(!1)},g=p=>{p.preventDefault(),p.stopPropagation(),i(!o),r("")},b=async p=>{if(p.preventDefault(),!n.trim()||t)return;const y=n.trim();e(vf(y)),r(""),e(EP("")),e(zo(y))},m=p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),b(p))};return L.jsx("div",{className:"textarea-container",children:o?L.jsxs("div",{className:"voice-input-container",children:[L.jsxs("div",{className:`voice-input-bar ${a?"recording":""}`,onMouseDown:w,onMouseUp:h,onTouchStart:d,onTouchEnd:f,children:[L.jsxs("div",{className:"voice-input-bar-content",children:[L.jsx("img",{src:iy,alt:"语音",className:"voice-icon"}),L.jsx("span",{className:"voice-text",children:a?"正在录音...":"按住说话"})]}),L.jsx("img",{src:Gj,alt:"键盘",className:"keyboard-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),g(p)},onTouchStart:p=>{p.preventDefault(),p.stopPropagation()},onTouchEnd:p=>{p.preventDefault(),p.stopPropagation(),g(p)}})]}),a&&L.jsx("div",{className:"recording-overlay","aria-live":"polite",children:L.jsxs("div",{className:"recording-overlay-content",children:[L.jsxs("div",{className:"recording-eq","aria-hidden":"true",children:[L.jsx("span",{className:"eq-bar"}),L.jsx("span",{className:"eq-bar"}),L.jsx("span",{className:"eq-bar"}),L.jsx("span",{className:"eq-bar"}),L.jsx("span",{className:"eq-bar"})]}),L.jsx("span",{className:"recording-text",children:"正在录音..."})]})})]}):L.jsxs(L.Fragment,{children:[L.jsx(qj,{value:n,onChange:p=>r(p.target.value),onKeyPress:m,placeholder:"给AI助手发送的消息",disabled:t,className:"text-input-field",autoSize:{minRows:5,maxRows:5},style:{resize:"none",position:"relative",paddingTop:"12px",paddingLeft:"20px",border:"none",borderRadius:"30px"}}),n.trim()?L.jsx(Do,{type:"primary",size:"middle",onClick:b,disabled:t,icon:L.jsx(oy,{className:"send-button-icon"}),className:"send-button",title:"发送消息",style:{position:"absolute",right:"20px",bottom:"20px",borderRadius:"25px",width:"50px",height:"50px",padding:"0",display:"flex",alignItems:"center",justifyContent:"center"}}):L.jsx(Do,{type:"default",size:"middle",disabled:!0,icon:L.jsx(oy,{style:{opacity:.5,color:"var(--text-primary)"}}),className:"send-button-disabled",title:"请输入消息",style:{position:"absolute",right:"20px",bottom:"20px",borderRadius:"25px",width:"50px",height:"50px",padding:"0",display:"flex",alignItems:"center",justifyContent:"center",opacity:.8}}),L.jsx(Do,{type:"text",size:"small",onClick:g,className:"voice-toggle-button",title:"切换到语音输入",style:{position:"absolute",right:"80px",bottom:"20px",borderRadius:"25px",width:"50px",height:"50px",padding:"0",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:"none"},children:L.jsx("img",{src:iy,alt:"语音",style:{width:"40px",height:"40px"}})})]})})},Qj=()=>{const e=Zr(r=>r.chat.messages),t=v.useRef(null),n=()=>{var r;(r=t.current)==null||r.scrollIntoView({behavior:"smooth"})};return v.useEffect(()=>{n()},[e]),L.jsxs("div",{className:"chat-container",children:[e.length>0&&L.jsxs("div",{className:"chat-messages",children:[e.map(r=>L.jsx(Wj,{message:r},r.id)),L.jsx("div",{ref:t})]}),L.jsx("div",{className:"chat-input-container",children:L.jsx(Kj,{})})]})},ay=()=>{const e=Zr(s=>s.chat.messages),t=Zr(s=>s.widget.selectedCard),n=Aa(),[r,o]=v.useState(0),i=dm();v.useEffect(()=>{t&&o(s=>s+1)},[t]);const a=()=>{t&&(n(vP(t)),i("/widget"))};return console.log("selectedCard-====",t),L.jsxs("div",{className:"chat-page-container",children:[L.jsxs("div",{className:"chat-page",children:[e.length===0&&L.jsxs("div",{className:"chat-page-header",children:[L.jsx("h2",{children:"AI智能聊天界面"}),L.jsx("p",{children:"与AI助手对话，生成Widget卡片"})]}),L.jsx("div",{className:`${e.length===0?"chat-page-content":"chat-page-content-no-header"}`,children:L.jsx(Qj,{})})]}),L.jsx("div",{className:"rightPreview",children:t?L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"chat-tips-title"}),L.jsx("iframe",{srcDoc:t.content,title:"widget",className:"template-iframe",sandbox:"allow-scripts allow-same-origin"},r),L.jsx("div",{className:"apply-to-desktop",onClick:a,children:"应用到桌面"})]}):L.jsx(Xj,{})})]})},Xj=()=>{const e=Aa(),t=n=>{e(vf(n)),e(zo(n))};return L.jsxs("div",{className:"chat-tips",children:[L.jsx("div",{className:"chat-tips-title",children:"你可以这样说："}),L.jsx("div",{className:"chat-tips-item",onClick:()=>t("生成一个新闻卡片"),children:"生成一个新闻卡片"}),L.jsx("div",{className:"chat-tips-item",onClick:()=>t("生成一个电影卡片"),children:"生成一个电影卡片"}),L.jsx("div",{className:"chat-tips-item",onClick:()=>t("生成一个视频卡片"),children:"生成一个视频卡片"}),L.jsx("div",{className:"chat-tips-item",onClick:()=>t("生成一个评论卡片"),children:"生成一个评论卡片"})]})},Jj=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),Yj=()=>Jj()?{width:"100%",height:"600px",border:"none",maxWidth:"700px",margin:"0 auto",display:"block"}:{display:"block"},Zj=()=>{const e=dm(),t=Zr(o=>o.widget.appliedCards);console.log("appliedCards====",t);const n=v.useRef(null),r=()=>{e("/chat")};return L.jsxs("div",{className:"widget-page",children:[L.jsx("div",{className:"status-bar"}),L.jsx("div",{className:"desk-bar"}),L.jsx("div",{className:"widget-page-content",children:L.jsx("div",{className:"widget-preview-area",children:t&&L.jsx("iframe",{ref:n,srcDoc:t.content,height:"100%",title:"widget",className:"desk-iframe",sandbox:"allow-scripts allow-same-origin",style:Yj()})})}),L.jsx("div",{className:"chat_bg",onClick:r})]})};function eN(){const e=Zr(t=>t.ui.theme);return L.jsx("div",{className:`app ${e}`,children:L.jsx("div",{className:"main-content",children:L.jsxs(BO,{children:[L.jsx(Rs,{path:"/",element:L.jsx(ay,{})}),L.jsx(Rs,{path:"/chat",element:L.jsx(ay,{})}),L.jsx(Rs,{path:"/widget",element:L.jsx(Zj,{})})]})})})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("SW registered: ",e),e.addEventListener("updatefound",()=>{const t=e.installing;t.addEventListener("statechange",()=>{t.state==="installed"&&navigator.serviceWorker.controller&&confirm("发现新版本，是否立即刷新？")&&window.location.reload()})})}).catch(e=>{console.log("SW registration failed: ",e)})});sd.createRoot(document.getElementById("root")).render(L.jsx(W.StrictMode,{children:L.jsx(qE,{store:FP,children:L.jsx(UO,{children:L.jsx(eN,{})})})}));
