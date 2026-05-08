(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var lv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rm={exports:{}},xl={},sm={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),uv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),fv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),gv=Symbol.for("react.forward_ref"),vv=Symbol.for("react.suspense"),_v=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),Gf=Symbol.iterator;function yv(t){return t===null||typeof t!="object"?null:(t=Gf&&t[Gf]||t["@@iterator"],typeof t=="function"?t:null)}var om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},am=Object.assign,lm={};function bs(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||om}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cm(){}cm.prototype=bs.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||om}var Pd=Rd.prototype=new cm;Pd.constructor=Rd;am(Pd,bs.prototype);Pd.isPureReactComponent=!0;var Wf=Array.isArray,um=Object.prototype.hasOwnProperty,Ld={current:null},dm={key:!0,ref:!0,__self:!0,__source:!0};function fm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)um.call(e,i)&&!dm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ro,type:t,key:s,ref:o,props:r,_owner:Ld.current}}function Sv(t,e){return{$$typeof:Ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ro}function Mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jf=/\/+/g;function Gl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mv(""+t.key):e.toString(36)}function ba(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ro:case uv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Gl(o,0):i,Wf(r)?(n="",t!=null&&(n=t.replace(jf,"$&/")+"/"),ba(r,e,n,"",function(c){return c})):r!=null&&(Nd(r)&&(r=Sv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(jf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Wf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Gl(s,a);o+=ba(s,e,n,l,r)}else if(l=yv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Gl(s,a++),o+=ba(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ho(t,e,n){if(t==null)return t;var i=[],r=0;return ba(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Ra={transition:null},wv={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Ra,ReactCurrentOwner:Ld};function hm(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Ho,forEach:function(t,e,n){Ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ho(t,function(){e++}),e},toArray:function(t){return Ho(t,function(e){return e})||[]},only:function(t){if(!Nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=bs;He.Fragment=dv;He.Profiler=hv;He.PureComponent=Rd;He.StrictMode=fv;He.Suspense=vv;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;He.act=hm;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=am({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ld.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)um.call(e,l)&&!dm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ro,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pv,_context:t},t.Consumer=t};He.createElement=fm;He.createFactory=function(t){var e=fm.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:gv,render:t}};He.isValidElement=Nd;He.lazy=function(t){return{$$typeof:xv,_payload:{_status:-1,_result:t},_init:Ev}};He.memo=function(t,e){return{$$typeof:_v,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Ra.transition;Ra.transition={};try{t()}finally{Ra.transition=e}};He.unstable_act=hm;He.useCallback=function(t,e){return $t.current.useCallback(t,e)};He.useContext=function(t){return $t.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};He.useEffect=function(t,e){return $t.current.useEffect(t,e)};He.useId=function(){return $t.current.useId()};He.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return $t.current.useMemo(t,e)};He.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};He.useRef=function(t){return $t.current.useRef(t)};He.useState=function(t){return $t.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return $t.current.useTransition()};He.version="18.3.1";sm.exports=He;var Qe=sm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=Qe,Av=Symbol.for("react.element"),Cv=Symbol.for("react.fragment"),bv=Object.prototype.hasOwnProperty,Rv=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function pm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)bv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Av,type:t,key:s,ref:o,props:r,_owner:Rv.current}}xl.Fragment=Cv;xl.jsx=pm;xl.jsxs=pm;rm.exports=xl;var b=rm.exports,mm={exports:{}},gn={},gm={exports:{}},vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,q){var Z=D.length;D.push(q);e:for(;0<Z;){var oe=Z-1>>>1,Se=D[oe];if(0<r(Se,q))D[oe]=q,D[Z]=Se,Z=oe;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var q=D[0],Z=D.pop();if(Z!==q){D[0]=Z;e:for(var oe=0,Se=D.length,Ie=Se>>>1;oe<Ie;){var W=2*(oe+1)-1,te=D[W],ae=W+1,ne=D[ae];if(0>r(te,Z))ae<Se&&0>r(ne,te)?(D[oe]=ne,D[ae]=Z,oe=ae):(D[oe]=te,D[W]=Z,oe=W);else if(ae<Se&&0>r(ne,Z))D[oe]=ne,D[ae]=Z,oe=ae;else break e}}return q}function r(D,q){var Z=D.sortIndex-q.sortIndex;return Z!==0?Z:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=D)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function x(D){if(y=!1,v(D),!_)if(n(l)!==null)_=!0,X(P);else{var q=n(c);q!==null&&K(x,q.startTime-D)}}function P(D,q){_=!1,y&&(y=!1,u(T),T=-1),p=!0;var Z=f;try{for(v(q),h=n(l);h!==null&&(!(h.expirationTime>q)||D&&!L());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var Se=oe(h.expirationTime<=q);q=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&i(l),v(q)}else i(l);h=n(l)}if(h!==null)var Ie=!0;else{var W=n(c);W!==null&&K(x,W.startTime-q),Ie=!1}return Ie}finally{h=null,f=Z,p=!1}}var C=!1,A=null,T=-1,w=5,S=-1;function L(){return!(t.unstable_now()-S<w)}function I(){if(A!==null){var D=t.unstable_now();S=D;var q=!0;try{q=A(!0,D)}finally{q?z():(C=!1,A=null)}}else C=!1}var z;if(typeof g=="function")z=function(){g(I)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Y=H.port2;H.port1.onmessage=I,z=function(){Y.postMessage(null)}}else z=function(){m(I,0)};function X(D){A=D,C||(C=!0,z())}function K(D,q){T=m(function(){D(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,X(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var Z=f;f=q;try{return D()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=f;f=D;try{return q()}finally{f=Z}},t.unstable_scheduleCallback=function(D,q,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,D={id:d++,callback:q,priorityLevel:D,startTime:Z,expirationTime:Se,sortIndex:-1},Z>oe?(D.sortIndex=Z,e(c,D),n(l)===null&&D===n(c)&&(y?(u(T),T=-1):y=!0,K(x,Z-oe))):(D.sortIndex=Se,e(l,D),_||p||(_=!0,X(P))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var q=f;return function(){var Z=f;f=q;try{return D.apply(this,arguments)}finally{f=Z}}}})(vm);gm.exports=vm;var Lv=gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=Qe,mn=Lv;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _m=new Set,co={};function Cr(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(co[t]=e,t=0;t<e.length;t++)_m.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=Object.prototype.hasOwnProperty,Dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xf={},qf={};function Iv(t){return qc.call(qf,t)?!0:qc.call(Xf,t)?!1:Dv.test(t)?qf[t]=!0:(Xf[t]=!0,!1)}function Uv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fv(t,e,n,i){if(e===null||typeof e>"u"||Uv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dd,Id);Ft[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dd,Id);Ft[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dd,Id);Ft[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ud(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fv(e,n,r,i)&&(n=null),i||r===null?Iv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),Fd=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),xm=Symbol.for("react.provider"),ym=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),Kc=Symbol.for("react.suspense_list"),kd=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),Sm=Symbol.for("react.offscreen"),Yf=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=Yf&&t[Yf]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Wl;function $s(t){if(Wl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wl=e&&e[1]||""}return`
`+Wl+t}var jl=!1;function Xl(t,e){if(!t||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function Ov(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function Zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qr:return"Fragment";case Xr:return"Portal";case Yc:return"Profiler";case Fd:return"StrictMode";case $c:return"Suspense";case Kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ym:return(t.displayName||"Context")+".Consumer";case xm:return(t._context.displayName||"Context")+".Provider";case Od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kd:return e=t.displayName||null,e!==null?e:Zc(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return Zc(t(e))}catch{}}return null}function kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zc(e);case 8:return e===Fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=Mm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Go(t){t._valueTracker||(t._valueTracker=zv(t))}function Em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qc(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $f(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wm(t,e){e=e.checked,e!=null&&Ud(t,"checked",e,!1)}function Jc(t,e){wm(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&eu(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function eu(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ks=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Ks(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function Tm(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wo,Cm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bv=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){Bv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function bm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function Rm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=bm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Hv=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function iu(t,e){if(e){if(Hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var su=null;function zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ou=null,os=null,as=null;function Jf(t){if(t=No(t)){if(typeof ou!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=wl(e),ou(t.stateNode,t.type,e))}}function Pm(t){os?as?as.push(t):as=[t]:os=t}function Lm(){if(os){var t=os,e=as;if(as=os=null,Jf(t),e)for(t=0;t<e.length;t++)Jf(e[t])}}function Nm(t,e){return t(e)}function Dm(){}var ql=!1;function Im(t,e,n){if(ql)return t(e,n);ql=!0;try{return Nm(t,e,n)}finally{ql=!1,(os!==null||as!==null)&&(Dm(),Lm())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var i=wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var au=!1;if(gi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){au=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{au=!1}function Vv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var to=!1,qa=null,Ya=!1,lu=null,Gv={onError:function(t){to=!0,qa=t}};function Wv(t,e,n,i,r,s,o,a,l){to=!1,qa=null,Vv.apply(Gv,arguments)}function jv(t,e,n,i,r,s,o,a,l){if(Wv.apply(this,arguments),to){if(to){var c=qa;to=!1,qa=null}else throw Error(ie(198));Ya||(Ya=!0,lu=c)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Um(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eh(t){if(br(t)!==t)throw Error(ie(188))}function Xv(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return eh(r),t;if(s===i)return eh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Fm(t){return t=Xv(t),t!==null?Om(t):null}function Om(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Om(t);if(e!==null)return e;t=t.sibling}return null}var km=mn.unstable_scheduleCallback,th=mn.unstable_cancelCallback,qv=mn.unstable_shouldYield,Yv=mn.unstable_requestPaint,Mt=mn.unstable_now,$v=mn.unstable_getCurrentPriorityLevel,Bd=mn.unstable_ImmediatePriority,zm=mn.unstable_UserBlockingPriority,$a=mn.unstable_NormalPriority,Kv=mn.unstable_LowPriority,Bm=mn.unstable_IdlePriority,yl=null,Zn=null;function Zv(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:e_,Qv=Math.log,Jv=Math.LN2;function e_(t){return t>>>=0,t===0?32:31-(Qv(t)/Jv|0)|0}var jo=64,Xo=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zs(a):(s&=o,s!==0&&(i=Zs(s)))}else o=n&~r,o!==0?i=Zs(o):s!==0&&(i=Zs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function t_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=t_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hm(){var t=jo;return jo<<=1,!(jo&4194240)&&(jo=64),t}function Yl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Po(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function i_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Hd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Vm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gm,Vd,Wm,jm,Xm,uu=!1,qo=[],Fi=null,Oi=null,ki=null,ho=new Map,po=new Map,Li=[],r_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Os(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=No(e),e!==null&&Vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function s_(t,e,n,i,r){switch(e){case"focusin":return Fi=Os(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Os(Oi,t,e,n,i,r),!0;case"mouseover":return ki=Os(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ho.set(s,Os(ho.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,po.set(s,Os(po.get(s)||null,t,e,n,i,r)),!0}return!1}function qm(t){var e=hr(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=Um(n),e!==null){t.blockedOn=e,Xm(t.priority,function(){Wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);su=i,n.target.dispatchEvent(i),su=null}else return e=No(n),e!==null&&Vd(e),t.blockedOn=n,!1;e.shift()}return!0}function ih(t,e,n){Pa(t)&&n.delete(e)}function o_(){uu=!1,Fi!==null&&Pa(Fi)&&(Fi=null),Oi!==null&&Pa(Oi)&&(Oi=null),ki!==null&&Pa(ki)&&(ki=null),ho.forEach(ih),po.forEach(ih)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,uu||(uu=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,o_)))}function mo(t){function e(r){return ks(r,t)}if(0<qo.length){ks(qo[0],t);for(var n=1;n<qo.length;n++){var i=qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&ks(Fi,t),Oi!==null&&ks(Oi,t),ki!==null&&ks(ki,t),ho.forEach(e),po.forEach(e),n=0;n<Li.length;n++)i=Li[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)qm(n),n.blockedOn===null&&Li.shift()}var ls=Si.ReactCurrentBatchConfig,Za=!0;function a_(t,e,n,i){var r=it,s=ls.transition;ls.transition=null;try{it=1,Gd(t,e,n,i)}finally{it=r,ls.transition=s}}function l_(t,e,n,i){var r=it,s=ls.transition;ls.transition=null;try{it=4,Gd(t,e,n,i)}finally{it=r,ls.transition=s}}function Gd(t,e,n,i){if(Za){var r=du(t,e,n,i);if(r===null)rc(t,e,i,Qa,n),nh(t,i);else if(s_(r,t,e,n,i))i.stopPropagation();else if(nh(t,i),e&4&&-1<r_.indexOf(t)){for(;r!==null;){var s=No(r);if(s!==null&&Gm(s),s=du(t,e,n,i),s===null&&rc(t,e,i,Qa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else rc(t,e,i,null,n)}}var Qa=null;function du(t,e,n,i){if(Qa=null,t=zd(i),t=hr(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Um(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qa=t,null}function Ym(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($v()){case Bd:return 1;case zm:return 4;case $a:case Kv:return 16;case Bm:return 536870912;default:return 16}default:return 16}}var Ii=null,Wd=null,La=null;function $m(){if(La)return La;var t,e=Wd,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return La=r.slice(t,1<i?1-i:void 0)}function Na(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function rh(){return!1}function vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yo:rh,this.isPropagationStopped=rh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jd=vn(Rs),Lo=_t({},Rs,{view:0,detail:0}),c_=vn(Lo),$l,Kl,zs,Sl=_t({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?($l=t.screenX-zs.screenX,Kl=t.screenY-zs.screenY):Kl=$l=0,zs=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),sh=vn(Sl),u_=_t({},Sl,{dataTransfer:0}),d_=vn(u_),f_=_t({},Lo,{relatedTarget:0}),Zl=vn(f_),h_=_t({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),p_=vn(h_),m_=_t({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g_=vn(m_),v_=_t({},Rs,{data:0}),oh=vn(v_),__={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y_[t])?!!e[t]:!1}function Xd(){return S_}var M_=_t({},Lo,{key:function(t){if(t.key){var e=__[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xd,charCode:function(t){return t.type==="keypress"?Na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),E_=vn(M_),w_=_t({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=vn(w_),T_=_t({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xd}),A_=vn(T_),C_=_t({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),b_=vn(C_),R_=_t({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P_=vn(R_),L_=[9,13,27,32],qd=gi&&"CompositionEvent"in window,no=null;gi&&"documentMode"in document&&(no=document.documentMode);var N_=gi&&"TextEvent"in window&&!no,Km=gi&&(!qd||no&&8<no&&11>=no),lh=" ",ch=!1;function Zm(t,e){switch(t){case"keyup":return L_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function D_(t,e){switch(t){case"compositionend":return Qm(e);case"keypress":return e.which!==32?null:(ch=!0,lh);case"textInput":return t=e.data,t===lh&&ch?null:t;default:return null}}function I_(t,e){if(Yr)return t==="compositionend"||!qd&&Zm(t,e)?(t=$m(),La=Wd=Ii=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Km&&e.locale!=="ko"?null:e.data;default:return null}}var U_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!U_[t.type]:e==="textarea"}function Jm(t,e,n,i){Pm(i),e=Ja(e,"onChange"),0<e.length&&(n=new jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var io=null,go=null;function F_(t){u0(t,0)}function Ml(t){var e=Zr(t);if(Em(e))return t}function O_(t,e){if(t==="change")return e}var e0=!1;if(gi){var Ql;if(gi){var Jl="oninput"in document;if(!Jl){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),Jl=typeof dh.oninput=="function"}Ql=Jl}else Ql=!1;e0=Ql&&(!document.documentMode||9<document.documentMode)}function fh(){io&&(io.detachEvent("onpropertychange",t0),go=io=null)}function t0(t){if(t.propertyName==="value"&&Ml(go)){var e=[];Jm(e,go,t,zd(t)),Im(F_,e)}}function k_(t,e,n){t==="focusin"?(fh(),io=e,go=n,io.attachEvent("onpropertychange",t0)):t==="focusout"&&fh()}function z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(go)}function B_(t,e){if(t==="click")return Ml(e)}function H_(t,e){if(t==="input"||t==="change")return Ml(e)}function V_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:V_;function vo(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qc.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,e){var n=hh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hh(n)}}function n0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i0(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function Yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function G_(t){var e=i0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n0(n.ownerDocument.documentElement,n)){if(i!==null&&Yd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ph(n,s);var o=ph(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W_=gi&&"documentMode"in document&&11>=document.documentMode,$r=null,fu=null,ro=null,hu=!1;function mh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||$r==null||$r!==Xa(i)||(i=$r,"selectionStart"in i&&Yd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ro&&vo(ro,i)||(ro=i,i=Ja(fu,"onSelect"),0<i.length&&(e=new jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$r)))}function $o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},ec={},r0={};gi&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function El(t){if(ec[t])return ec[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r0)return ec[t]=e[n];return t}var s0=El("animationend"),o0=El("animationiteration"),a0=El("animationstart"),l0=El("transitionend"),c0=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){c0.set(t,e),Cr(e,[t])}for(var tc=0;tc<gh.length;tc++){var nc=gh[tc],j_=nc.toLowerCase(),X_=nc[0].toUpperCase()+nc.slice(1);Ki(j_,"on"+X_)}Ki(s0,"onAnimationEnd");Ki(o0,"onAnimationIteration");Ki(a0,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(l0,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function vh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jv(i,e,void 0,t),t.currentTarget=null}function u0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;vh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;vh(r,a,c),s=l}}}if(Ya)throw t=lu,Ya=!1,lu=null,t}function ut(t,e){var n=e[_u];n===void 0&&(n=e[_u]=new Set);var i=t+"__bubble";n.has(i)||(d0(e,t,2,!1),n.add(i))}function ic(t,e,n){var i=0;e&&(i|=4),d0(n,t,i,e)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Ko]){t[Ko]=!0,_m.forEach(function(n){n!=="selectionchange"&&(q_.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ko]||(e[Ko]=!0,ic("selectionchange",!1,e))}}function d0(t,e,n,i){switch(Ym(e)){case 1:var r=a_;break;case 4:r=l_;break;default:r=Gd}n=r.bind(null,e,n,t),r=void 0,!au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Im(function(){var c=s,d=zd(n),h=[];e:{var f=c0.get(t);if(f!==void 0){var p=jd,_=t;switch(t){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":p=E_;break;case"focusin":_="focus",p=Zl;break;case"focusout":_="blur",p=Zl;break;case"beforeblur":case"afterblur":p=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=d_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=A_;break;case s0:case o0:case a0:p=p_;break;case l0:p=b_;break;case"scroll":p=c_;break;case"wheel":p=P_;break;case"copy":case"cut":case"paste":p=g_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ah}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,u!==null&&(x=fo(g,u),x!=null&&y.push(xo(g,x,v)))),m)break;g=g.return}0<y.length&&(f=new p(f,_,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==su&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[vi]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?hr(_):null,_!==null&&(m=br(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=sh,x="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=ah,x="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:Zr(p),v=_==null?f:Zr(_),f=new y(x,g+"leave",p,n,d),f.target=m,f.relatedTarget=v,x=null,hr(d)===c&&(y=new y(u,g+"enter",_,n,d),y.target=v,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,u=_,g=0,v=y;v;v=Pr(v))g++;for(v=0,x=u;x;x=Pr(x))v++;for(;0<g-v;)y=Pr(y),g--;for(;0<v-g;)u=Pr(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Pr(y),u=Pr(u)}y=null}else y=null;p!==null&&_h(h,f,p,y,!1),_!==null&&m!==null&&_h(h,m,_,y,!0)}}e:{if(f=c?Zr(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=O_;else if(uh(f))if(e0)P=H_;else{P=z_;var C=k_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=B_);if(P&&(P=P(t,c))){Jm(h,P,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&eu(f,"number",f.value)}switch(C=c?Zr(c):window,t){case"focusin":(uh(C)||C.contentEditable==="true")&&($r=C,fu=c,ro=null);break;case"focusout":ro=fu=$r=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,mh(h,n,d);break;case"selectionchange":if(W_)break;case"keydown":case"keyup":mh(h,n,d)}var A;if(qd)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Yr?Zm(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Km&&n.locale!=="ko"&&(Yr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Yr&&(A=$m()):(Ii=d,Wd="value"in Ii?Ii.value:Ii.textContent,Yr=!0)),C=Ja(c,T),0<C.length&&(T=new oh(T,t,null,n,d),h.push({event:T,listeners:C}),A?T.data=A:(A=Qm(n),A!==null&&(T.data=A)))),(A=N_?D_(t,n):I_(t,n))&&(c=Ja(c,"onBeforeInput"),0<c.length&&(d=new oh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=A))}u0(h,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fo(t,n),s!=null&&i.unshift(xo(t,s,r)),s=fo(t,e),s!=null&&i.push(xo(t,s,r))),t=t.return}return i}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _h(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=fo(n,s),l!=null&&o.unshift(xo(n,l,a))):r||(l=fo(n,s),l!=null&&o.push(xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Y_=/\r\n?/g,$_=/\u0000|\uFFFD/g;function xh(t){return(typeof t=="string"?t:""+t).replace(Y_,`
`).replace($_,"")}function Zo(t,e,n){if(e=xh(e),xh(t)!==e&&n)throw Error(ie(425))}function el(){}var pu=null,mu=null;function gu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,K_=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,Z_=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(t){return yh.resolve(null).then(t).catch(Q_)}:vu;function Q_(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);mo(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ps,yo="__reactProps$"+Ps,vi="__reactContainer$"+Ps,_u="__reactEvents$"+Ps,J_="__reactListeners$"+Ps,ex="__reactHandles$"+Ps;function hr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sh(t);t!==null;){if(n=t[$n])return n;t=Sh(t)}return e}t=n,n=t.parentNode}return null}function No(t){return t=t[$n]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function wl(t){return t[yo]||null}var xu=[],Qr=-1;function Zi(t){return{current:t}}function dt(t){0>Qr||(t.current=xu[Qr],xu[Qr]=null,Qr--)}function lt(t,e){Qr++,xu[Qr]=t.current,t.current=e}var qi={},Gt=Zi(qi),tn=Zi(!1),yr=qi;function ms(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function tl(){dt(tn),dt(Gt)}function Mh(t,e,n){if(Gt.current!==qi)throw Error(ie(168));lt(Gt,e),lt(tn,n)}function f0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,kv(t)||"Unknown",r));return _t({},n,i)}function nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,yr=Gt.current,lt(Gt,t),lt(tn,tn.current),!0}function Eh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=f0(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,dt(tn),dt(Gt),lt(Gt,t)):dt(tn),lt(tn,n)}var li=null,Tl=!1,oc=!1;function h0(t){li===null?li=[t]:li.push(t)}function tx(t){Tl=!0,h0(t)}function Qi(){if(!oc&&li!==null){oc=!0;var t=0,e=it;try{var n=li;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,Tl=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),km(Bd,Qi),r}finally{it=e,oc=!1}}return null}var Jr=[],es=0,il=null,rl=0,Mn=[],En=0,Sr=null,ui=1,di="";function ar(t,e){Jr[es++]=rl,Jr[es++]=il,il=t,rl=e}function p0(t,e,n){Mn[En++]=ui,Mn[En++]=di,Mn[En++]=Sr,Sr=t;var i=ui;t=di;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ui=1<<32-Bn(e)+r|n<<r|i,di=s+t}else ui=1<<s|n<<r|i,di=t}function $d(t){t.return!==null&&(ar(t,1),p0(t,1,0))}function Kd(t){for(;t===il;)il=Jr[--es],Jr[es]=null,rl=Jr[--es],Jr[es]=null;for(;t===Sr;)Sr=Mn[--En],Mn[En]=null,di=Mn[--En],Mn[En]=null,ui=Mn[--En],Mn[En]=null}var hn=null,fn=null,ht=!1,On=null;function m0(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:ui,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Su(t){if(ht){var e=fn;if(e){var n=e;if(!wh(t,e)){if(yu(t))throw Error(ie(418));e=zi(n.nextSibling);var i=hn;e&&wh(t,e)?m0(i,n):(t.flags=t.flags&-4097|2,ht=!1,hn=t)}}else{if(yu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ht=!1,hn=t}}}function Th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Qo(t){if(t!==hn)return!1;if(!ht)return Th(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gu(t.type,t.memoizedProps)),e&&(e=fn)){if(yu(t))throw g0(),Error(ie(418));for(;e;)m0(t,e),e=zi(e.nextSibling)}if(Th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?zi(t.stateNode.nextSibling):null;return!0}function g0(){for(var t=fn;t;)t=zi(t.nextSibling)}function gs(){fn=hn=null,ht=!1}function Zd(t){On===null?On=[t]:On.push(t)}var nx=Si.ReactCurrentBatchConfig;function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Jo(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ah(t){var e=t._init;return e(t._payload)}function v0(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Gi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,x){return g===null||g.tag!==6?(g=hc(v,u.mode,x),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,x){var P=v.type;return P===qr?d(u,g,v.props.children,x,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ri&&Ah(P)===g.type)?(x=r(g,v.props),x.ref=Bs(u,g,v),x.return=u,x):(x=za(v.type,v.key,v.props,null,u.mode,x),x.ref=Bs(u,g,v),x.return=u,x)}function c(u,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=pc(v,u.mode,x),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,x,P){return g===null||g.tag!==7?(g=xr(v,u.mode,x,P),g.return=u,g):(g=r(g,v),g.return=u,g)}function h(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=hc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vo:return v=za(g.type,g.key,g.props,null,u.mode,v),v.ref=Bs(u,null,g),v.return=u,v;case Xr:return g=pc(g,u.mode,v),g.return=u,g;case Ri:var x=g._init;return h(u,x(g._payload),v)}if(Ks(g)||Us(g))return g=xr(g,u.mode,v,null),g.return=u,g;Jo(u,g)}return null}function f(u,g,v,x){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vo:return v.key===P?l(u,g,v,x):null;case Xr:return v.key===P?c(u,g,v,x):null;case Ri:return P=v._init,f(u,g,P(v._payload),x)}if(Ks(v)||Us(v))return P!==null?null:d(u,g,v,x,null);Jo(u,v)}return null}function p(u,g,v,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(v)||null,a(g,u,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vo:return u=u.get(x.key===null?v:x.key)||null,l(g,u,x,P);case Xr:return u=u.get(x.key===null?v:x.key)||null,c(g,u,x,P);case Ri:var C=x._init;return p(u,g,v,C(x._payload),P)}if(Ks(x)||Us(x))return u=u.get(v)||null,d(g,u,x,P,null);Jo(g,x)}return null}function _(u,g,v,x){for(var P=null,C=null,A=g,T=g=0,w=null;A!==null&&T<v.length;T++){A.index>T?(w=A,A=null):w=A.sibling;var S=f(u,A,v[T],x);if(S===null){A===null&&(A=w);break}t&&A&&S.alternate===null&&e(u,A),g=s(S,g,T),C===null?P=S:C.sibling=S,C=S,A=w}if(T===v.length)return n(u,A),ht&&ar(u,T),P;if(A===null){for(;T<v.length;T++)A=h(u,v[T],x),A!==null&&(g=s(A,g,T),C===null?P=A:C.sibling=A,C=A);return ht&&ar(u,T),P}for(A=i(u,A);T<v.length;T++)w=p(A,u,T,v[T],x),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?T:w.key),g=s(w,g,T),C===null?P=w:C.sibling=w,C=w);return t&&A.forEach(function(L){return e(u,L)}),ht&&ar(u,T),P}function y(u,g,v,x){var P=Us(v);if(typeof P!="function")throw Error(ie(150));if(v=P.call(v),v==null)throw Error(ie(151));for(var C=P=null,A=g,T=g=0,w=null,S=v.next();A!==null&&!S.done;T++,S=v.next()){A.index>T?(w=A,A=null):w=A.sibling;var L=f(u,A,S.value,x);if(L===null){A===null&&(A=w);break}t&&A&&L.alternate===null&&e(u,A),g=s(L,g,T),C===null?P=L:C.sibling=L,C=L,A=w}if(S.done)return n(u,A),ht&&ar(u,T),P;if(A===null){for(;!S.done;T++,S=v.next())S=h(u,S.value,x),S!==null&&(g=s(S,g,T),C===null?P=S:C.sibling=S,C=S);return ht&&ar(u,T),P}for(A=i(u,A);!S.done;T++,S=v.next())S=p(A,u,T,S.value,x),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?T:S.key),g=s(S,g,T),C===null?P=S:C.sibling=S,C=S);return t&&A.forEach(function(I){return e(u,I)}),ht&&ar(u,T),P}function m(u,g,v,x){if(typeof v=="object"&&v!==null&&v.type===qr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Vo:e:{for(var P=v.key,C=g;C!==null;){if(C.key===P){if(P=v.type,P===qr){if(C.tag===7){n(u,C.sibling),g=r(C,v.props.children),g.return=u,u=g;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ri&&Ah(P)===C.type){n(u,C.sibling),g=r(C,v.props),g.ref=Bs(u,C,v),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===qr?(g=xr(v.props.children,u.mode,x,v.key),g.return=u,u=g):(x=za(v.type,v.key,v.props,null,u.mode,x),x.ref=Bs(u,g,v),x.return=u,u=x)}return o(u);case Xr:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=pc(v,u.mode,x),g.return=u,u=g}return o(u);case Ri:return C=v._init,m(u,g,C(v._payload),x)}if(Ks(v))return _(u,g,v,x);if(Us(v))return y(u,g,v,x);Jo(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=hc(v,u.mode,x),g.return=u,u=g),o(u)):n(u,g)}return m}var vs=v0(!0),_0=v0(!1),sl=Zi(null),ol=null,ts=null,Qd=null;function Jd(){Qd=ts=ol=null}function ef(t){var e=sl.current;dt(sl),t._currentValue=e}function Mu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){ol=t,Qd=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Qd!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(ol===null)throw Error(ie(308));ts=t,ol.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var pr=null;function tf(t){pr===null?pr=[t]:pr.push(t)}function x0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tf(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,tf(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function Da(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hd(t,n)}}function Ch(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function al(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=_t({},h,f);break e;case 2:Pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=h}}function bh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Do={},Qn=Zi(Do),So=Zi(Do),Mo=Zi(Do);function mr(t){if(t===Do)throw Error(ie(174));return t}function rf(t,e){switch(lt(Mo,e),lt(So,t),lt(Qn,Do),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nu(e,t)}dt(Qn),lt(Qn,e)}function _s(){dt(Qn),dt(So),dt(Mo)}function S0(t){mr(Mo.current);var e=mr(Qn.current),n=nu(e,t.type);e!==n&&(lt(So,t),lt(Qn,n))}function sf(t){So.current===t&&(dt(Qn),dt(So))}var gt=Zi(0);function ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ac=[];function of(){for(var t=0;t<ac.length;t++)ac[t]._workInProgressVersionPrimary=null;ac.length=0}var Ia=Si.ReactCurrentDispatcher,lc=Si.ReactCurrentBatchConfig,Mr=0,vt=null,At=null,Lt=null,cl=!1,so=!1,Eo=0,ix=0;function kt(){throw Error(ie(321))}function af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function lf(t,e,n,i,r,s){if(Mr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ia.current=t===null||t.memoizedState===null?ax:lx,t=n(i,r),so){s=0;do{if(so=!1,Eo=0,25<=s)throw Error(ie(301));s+=1,Lt=At=null,e.updateQueue=null,Ia.current=cx,t=n(i,r)}while(so)}if(Ia.current=ul,e=At!==null&&At.next!==null,Mr=0,Lt=At=vt=null,cl=!1,e)throw Error(ie(300));return t}function cf(){var t=Eo!==0;return Eo=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?vt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function bn(){if(At===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?vt.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(ie(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?vt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function wo(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Mr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,vt.lanes|=d,Er|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Wn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Wn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function M0(){}function E0(t,e){var n=vt,i=bn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,uf(A0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,To(9,T0.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ie(349));Mr&30||w0(n,e,r)}return r}function w0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T0(t,e,n,i){e.value=n,e.getSnapshot=i,C0(e)&&b0(t)}function A0(t,e,n){return n(function(){C0(e)&&b0(t)})}function C0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function b0(t){var e=_i(t,1);e!==null&&Hn(e,t,1,-1)}function Rh(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=ox.bind(null,vt,t),[e.memoizedState,t]}function To(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function R0(){return bn().memoizedState}function Ua(t,e,n,i){var r=qn();vt.flags|=t,r.memoizedState=To(1|e,n,void 0,i===void 0?null:i)}function Al(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&af(i,o.deps)){r.memoizedState=To(e,n,s,i);return}}vt.flags|=t,r.memoizedState=To(1|e,n,s,i)}function Ph(t,e){return Ua(8390656,8,t,e)}function uf(t,e){return Al(2048,8,t,e)}function P0(t,e){return Al(4,2,t,e)}function L0(t,e){return Al(4,4,t,e)}function N0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function D0(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,N0.bind(null,e,t),n)}function df(){}function I0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function U0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F0(t,e,n){return Mr&21?(Wn(n,e)||(n=Hm(),vt.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function rx(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=lc.transition;lc.transition={};try{t(!1),e()}finally{it=n,lc.transition=i}}function O0(){return bn().memoizedState}function sx(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},k0(t))z0(e,n);else if(n=x0(t,e,n,i),n!==null){var r=qt();Hn(n,t,i,r),B0(n,e,i)}}function ox(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(t))z0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(r.next=r,tf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=x0(t,e,r,i),n!==null&&(r=qt(),Hn(n,t,i,r),B0(n,e,i))}}function k0(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function z0(t,e){so=cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hd(t,n)}}var ul={readContext:Cn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},ax={readContext:Cn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Ph,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ua(4194308,4,N0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ua(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ua(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sx.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Rh,useDebugValue:df,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Rh(!1),e=t[0];return t=rx.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=qn();if(ht){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Nt===null)throw Error(ie(349));Mr&30||w0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ph(A0.bind(null,i,s,t),[t]),i.flags|=2048,To(9,T0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Nt.identifierPrefix;if(ht){var n=di,i=ui;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ix++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lx={readContext:Cn,useCallback:I0,useContext:Cn,useEffect:uf,useImperativeHandle:D0,useInsertionEffect:P0,useLayoutEffect:L0,useMemo:U0,useReducer:cc,useRef:R0,useState:function(){return cc(wo)},useDebugValue:df,useDeferredValue:function(t){var e=bn();return F0(e,At.memoizedState,t)},useTransition:function(){var t=cc(wo)[0],e=bn().memoizedState;return[t,e]},useMutableSource:M0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1},cx={readContext:Cn,useCallback:I0,useContext:Cn,useEffect:uf,useImperativeHandle:D0,useInsertionEffect:P0,useLayoutEffect:L0,useMemo:U0,useReducer:uc,useRef:R0,useState:function(){return uc(wo)},useDebugValue:df,useDeferredValue:function(t){var e=bn();return At===null?e.memoizedState=t:F0(e,At.memoizedState,t)},useTransition:function(){var t=uc(wo)[0],e=bn().memoizedState;return[t,e]},useMutableSource:M0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Eu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Vi(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Hn(e,t,r,i),Da(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Vi(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Hn(e,t,r,i),Da(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Vi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(Hn(e,t,i,n),Da(e,t,i))}};function Lh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,i)||!vo(r,s):!0}function H0(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=nn(e)?yr:Gt.current,i=e.contextTypes,s=(i=i!=null)?ms(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function wu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=nn(e)?yr:Gt.current,r.context=ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cl.enqueueReplaceState(r,r.state,null),al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",i=e;do n+=Ov(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Tu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ux=typeof WeakMap=="function"?WeakMap:Map;function V0(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){fl||(fl=!0,Uu=i),Tu(t,e)},n}function G0(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Tu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tu(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ux;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wx.bind(null,t,e,n),e.then(t,t))}function Ih(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var dx=Si.ReactCurrentOwner,en=!1;function Xt(t,e,n,i){e.child=t===null?_0(e,null,n,i):vs(e,t.child,n,i)}function Fh(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=lf(t,e,n,i,s,r),n=cf(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(ht&&n&&$d(e),e.flags|=1,Xt(t,e,i,r),e.child)}function Oh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,W0(t,e,s,i,r)):(t=za(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,i)&&t.ref===e.ref)return xi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function W0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(vo(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,xi(t,e,r)}return Au(t,e,n,i,r)}function j0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(is,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(is,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(is,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(is,un),un|=i;return Xt(t,e,r,n),e.child}function X0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Au(t,e,n,i,r){var s=nn(n)?yr:Gt.current;return s=ms(e,s),cs(e,r),n=lf(t,e,n,i,s,r),i=cf(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(ht&&i&&$d(e),e.flags|=1,Xt(t,e,n,r),e.child)}function kh(t,e,n,i,r){if(nn(n)){var s=!0;nl(e)}else s=!1;if(cs(e,r),e.stateNode===null)Fa(t,e),H0(e,n,i),wu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=nn(n)?yr:Gt.current,c=ms(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Nh(e,o,i,c),Pi=!1;var f=e.memoizedState;o.state=f,al(e,i,o,r),l=e.memoizedState,a!==i||f!==l||tn.current||Pi?(typeof d=="function"&&(Eu(e,n,d,i),l=e.memoizedState),(a=Pi||Lh(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,y0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Un(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=nn(n)?yr:Gt.current,l=ms(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Nh(e,o,i,l),Pi=!1,f=e.memoizedState,o.state=f,al(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||tn.current||Pi?(typeof p=="function"&&(Eu(e,n,p,i),_=e.memoizedState),(c=Pi||Lh(e,n,c,i,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Cu(t,e,n,i,s,r)}function Cu(t,e,n,i,r,s){X0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Eh(e,n,!1),xi(t,e,s);i=e.stateNode,dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&Eh(e,n,!0),e.child}function q0(t){var e=t.stateNode;e.pendingContext?Mh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mh(t,e.context,!1),rf(t,e.containerInfo)}function zh(t,e,n,i,r){return gs(),Zd(r),e.flags|=256,Xt(t,e,n,i),e.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y0(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(gt,r&1),t===null)return Su(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pl(o,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ru(n),e.memoizedState=bu,t):ff(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return fx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Gi(a,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ru(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bu,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ff(t,e){return e=Pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ea(t,e,n,i){return i!==null&&Zd(i),vs(e,t.child,null,n),t=ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=dc(Error(ie(422))),ea(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pl({mode:"visible",children:i.children},r,0,null),s=xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=Ru(o),e.memoizedState=bu,s);if(!(e.mode&1))return ea(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=dc(s,i,void 0),ea(t,e,o,i)}if(a=(o&t.childLanes)!==0,en||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),Hn(i,t,r,-1))}return _f(),i=dc(Error(ie(421))),ea(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Tx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=zi(r.nextSibling),hn=e,ht=!0,On=null,t!==null&&(Mn[En++]=ui,Mn[En++]=di,Mn[En++]=Sr,ui=t.id,di=t.overflow,Sr=e),e=ff(e,i.children),e.flags|=4096,e)}function Bh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mu(t.return,e,n)}function fc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,n,e);else if(t.tag===19)Bh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),fc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hx(t,e,n){switch(e.tag){case 3:q0(e),gs();break;case 5:S0(e);break;case 1:nn(e.type)&&nl(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?Y0(t,e,n):(lt(gt,gt.current&1),t=xi(t,e,n),t!==null?t.sibling:null);lt(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,j0(t,e,n)}return xi(t,e,n)}var K0,Pu,Z0,Q0;K0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};Z0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Qn.current);var s=null;switch(n){case"input":r=Qc(t,r),i=Qc(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=tu(t,r),i=tu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=el)}iu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Q0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Hs(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function px(t,e,n){var i=e.pendingProps;switch(Kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return nn(e.type)&&tl(),zt(e),null;case 3:return i=e.stateNode,_s(),dt(tn),dt(Gt),of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(ku(On),On=null))),Pu(t,e),zt(e),null;case 5:sf(e);var r=mr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)Z0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return zt(e),null}if(t=mr(Qn.current),Qo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[yo]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Qs.length;r++)ut(Qs[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":$f(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Zf(i,s),ut("invalid",i)}iu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Zo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Zo(i.textContent,a,t),r=["children",""+a]):co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":Go(i),Kf(i,s,!0);break;case"textarea":Go(i),Qf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=el)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$n]=e,t[yo]=i,K0(t,e,!1,!1),e.stateNode=t;e:{switch(o=ru(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qs.length;r++)ut(Qs[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":$f(t,i),r=Qc(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Zf(t,i),r=tu(t,i),ut("invalid",t);break;default:r=i}iu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&uo(t,l):typeof l=="number"&&uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&Ud(t,s,l,o))}switch(n){case"input":Go(t),Kf(t,i,!1);break;case"textarea":Go(t),Qf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Q0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=mr(Mo.current),mr(Qn.current),Qo(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Zo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return zt(e),null;case 13:if(dt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&fn!==null&&e.mode&1&&!(e.flags&128))g0(),gs(),e.flags|=98560,s=!1;else if(s=Qo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[$n]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else On!==null&&(ku(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Ct===0&&(Ct=3):_f())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return _s(),Pu(t,e),t===null&&_o(e.stateNode.containerInfo),zt(e),null;case 10:return ef(e.type._context),zt(e),null;case 17:return nn(e.type)&&tl(),zt(e),null;case 19:if(dt(gt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Hs(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ll(t),o!==null){for(e.flags|=128,Hs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>ys&&(e.flags|=128,i=!0,Hs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ll(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return zt(e),null}else 2*Mt()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,i=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=gt.current,lt(gt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return vf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function mx(t,e){switch(Kd(e),e.tag){case 1:return nn(e.type)&&tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),dt(tn),dt(Gt),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sf(e),null;case 13:if(dt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(gt),null;case 4:return _s(),null;case 10:return ef(e.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var ta=!1,Vt=!1,gx=typeof WeakSet=="function"?WeakSet:Set,me=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Lu(t,e,n){try{n()}catch(i){St(t,e,i)}}var Hh=!1;function vx(t,e){if(pu=Za,t=i0(),Yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:t,selectionRange:n},Za=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Un(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(x){St(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=Hh,Hh=!1,_}function oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lu(e,n,s)}r=r.next}while(r!==i)}}function bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Nu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J0(t){var e=t.alternate;e!==null&&(t.alternate=null,J0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[yo],delete e[_u],delete e[J_],delete e[ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eg(t){return t.tag===5||t.tag===3||t.tag===4}function Vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Du(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=el));else if(i!==4&&(t=t.child,t!==null))for(Du(t,e,n),t=t.sibling;t!==null;)Du(t,e,n),t=t.sibling}function Iu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Iu(t,e,n),t=t.sibling;t!==null;)Iu(t,e,n),t=t.sibling}var It=null,Fn=!1;function Mi(t,e,n){for(n=n.child;n!==null;)tg(t,e,n),n=n.sibling}function tg(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:Vt||ns(n,e);case 6:var i=It,r=Fn;It=null,Mi(t,e,n),It=i,Fn=r,It!==null&&(Fn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Fn?(t=It,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),mo(t)):sc(It,n.stateNode));break;case 4:i=It,r=Fn,It=n.stateNode.containerInfo,Fn=!0,Mi(t,e,n),It=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lu(n,e,o),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!Vt&&(ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Mi(t,e,n),Vt=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function Gh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gx),e.forEach(function(i){var r=Ax.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Fn=!1;break e;case 3:It=a.stateNode.containerInfo,Fn=!0;break e;case 4:It=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(It===null)throw Error(ie(160));tg(s,o,r),It=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ng(e,t),e=e.sibling}function ng(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Xn(t),i&4){try{oo(3,t,t.return),bl(3,t)}catch(y){St(t,t.return,y)}try{oo(5,t,t.return)}catch(y){St(t,t.return,y)}}break;case 1:Ln(e,t),Xn(t),i&512&&n!==null&&ns(n,n.return);break;case 5:if(Ln(e,t),Xn(t),i&512&&n!==null&&ns(n,n.return),t.flags&32){var r=t.stateNode;try{uo(r,"")}catch(y){St(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wm(r,s),ru(a,o);var c=ru(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Rm(r,h):d==="dangerouslySetInnerHTML"?Cm(r,h):d==="children"?uo(r,h):Ud(r,d,h,c)}switch(a){case"input":Jc(r,s);break;case"textarea":Tm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ss(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[yo]=s}catch(y){St(t,t.return,y)}}break;case 6:if(Ln(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){St(t,t.return,y)}}break;case 3:if(Ln(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(y){St(t,t.return,y)}break;case 4:Ln(e,t),Xn(t);break;case 13:Ln(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mf=Mt())),i&4&&Gh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||d,Ln(e,t),Vt=c):Ln(e,t),Xn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(h=me=d;me!==null;){switch(f=me,p=f.child,f.tag){case 0:case 11:case 14:case 15:oo(4,f,f.return);break;case 1:ns(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){St(i,n,y)}}break;case 5:ns(f,f.return);break;case 22:if(f.memoizedState!==null){jh(h);continue}}p!==null?(p.return=f,me=p):jh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bm("display",o))}catch(y){St(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){St(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ln(e,t),Xn(t),i&4&&Gh(t);break;case 21:break;default:Ln(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(eg(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uo(r,""),i.flags&=-33);var s=Vh(t);Iu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Vh(t);Du(t,a,o);break;default:throw Error(ie(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _x(t,e,n){me=t,ig(t)}function ig(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ta;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=ta;var c=Vt;if(ta=o,(Vt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Xh(r):l!==null?(l.return=o,me=l):Xh(r);for(;s!==null;)me=s,ig(s),s=s.sibling;me=r,ta=a,Vt=c}Wh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Wh(t)}}function Wh(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||bl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&mo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Vt||e.flags&512&&Nu(e)}catch(f){St(e,e.return,f)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function jh(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Xh(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bl(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Nu(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Nu(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var xx=Math.ceil,dl=Si.ReactCurrentDispatcher,hf=Si.ReactCurrentOwner,An=Si.ReactCurrentBatchConfig,$e=0,Nt=null,Tt=null,Ut=0,un=0,is=Zi(0),Ct=0,Ao=null,Er=0,Rl=0,pf=0,ao=null,Jt=null,mf=0,ys=1/0,ai=null,fl=!1,Uu=null,Hi=null,na=!1,Ui=null,hl=0,lo=0,Fu=null,Oa=-1,ka=0;function qt(){return $e&6?Mt():Oa!==-1?Oa:Oa=Mt()}function Vi(t){return t.mode&1?$e&2&&Ut!==0?Ut&-Ut:nx.transition!==null?(ka===0&&(ka=Hm()),ka):(t=it,t!==0||(t=window.event,t=t===void 0?16:Ym(t.type)),t):1}function Hn(t,e,n,i){if(50<lo)throw lo=0,Fu=null,Error(ie(185));Po(t,n,i),(!($e&2)||t!==Nt)&&(t===Nt&&(!($e&2)&&(Rl|=n),Ct===4&&Ni(t,Ut)),rn(t,i),n===1&&$e===0&&!(e.mode&1)&&(ys=Mt()+500,Tl&&Qi()))}function rn(t,e){var n=t.callbackNode;n_(t,e);var i=Ka(t,t===Nt?Ut:0);if(i===0)n!==null&&th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&th(n),e===1)t.tag===0?tx(qh.bind(null,t)):h0(qh.bind(null,t)),Z_(function(){!($e&6)&&Qi()}),n=null;else{switch(Vm(i)){case 1:n=Bd;break;case 4:n=zm;break;case 16:n=$a;break;case 536870912:n=Bm;break;default:n=$a}n=dg(n,rg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rg(t,e){if(Oa=-1,ka=0,$e&6)throw Error(ie(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=Ka(t,t===Nt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=pl(t,i);else{e=i;var r=$e;$e|=2;var s=og();(Nt!==t||Ut!==e)&&(ai=null,ys=Mt()+500,_r(t,e));do try{Mx();break}catch(a){sg(t,a)}while(!0);Jd(),dl.current=s,$e=r,Tt!==null?e=0:(Nt=null,Ut=0,e=Ct)}if(e!==0){if(e===2&&(r=cu(t),r!==0&&(i=r,e=Ou(t,r))),e===1)throw n=Ao,_r(t,0),Ni(t,i),rn(t,Mt()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!yx(r)&&(e=pl(t,i),e===2&&(s=cu(t),s!==0&&(i=s,e=Ou(t,s))),e===1))throw n=Ao,_r(t,0),Ni(t,i),rn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:lr(t,Jt,ai);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=mf+500-Mt(),10<e)){if(Ka(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=vu(lr.bind(null,t,Jt,ai),e);break}lr(t,Jt,ai);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xx(i/1960))-i,10<i){t.timeoutHandle=vu(lr.bind(null,t,Jt,ai),i);break}lr(t,Jt,ai);break;case 5:lr(t,Jt,ai);break;default:throw Error(ie(329))}}}return rn(t,Mt()),t.callbackNode===n?rg.bind(null,t):null}function Ou(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=pl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&ku(e)),t}function ku(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function yx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~pf,e&=~Rl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function qh(t){if($e&6)throw Error(ie(327));us();var e=Ka(t,0);if(!(e&1))return rn(t,Mt()),null;var n=pl(t,e);if(t.tag!==0&&n===2){var i=cu(t);i!==0&&(e=i,n=Ou(t,i))}if(n===1)throw n=Ao,_r(t,0),Ni(t,e),rn(t,Mt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Jt,ai),rn(t,Mt()),null}function gf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(ys=Mt()+500,Tl&&Qi())}}function wr(t){Ui!==null&&Ui.tag===0&&!($e&6)&&us();var e=$e;$e|=1;var n=An.transition,i=it;try{if(An.transition=null,it=1,t)return t()}finally{it=i,An.transition=n,$e=e,!($e&6)&&Qi()}}function vf(){un=is.current,dt(is)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,K_(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Kd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tl();break;case 3:_s(),dt(tn),dt(Gt),of();break;case 5:sf(i);break;case 4:_s();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:ef(i.type._context);break;case 22:case 23:vf()}n=n.return}if(Nt=t,Tt=t=Gi(t.current,null),Ut=un=e,Ct=0,Ao=null,pf=Rl=Er=0,Jt=ao=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}pr=null}return t}function sg(t,e){do{var n=Tt;try{if(Jd(),Ia.current=ul,cl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cl=!1}if(Mr=0,Lt=At=vt=null,so=!1,Eo=0,hf.current=null,n===null||n.return===null){Ct=1,Ao=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Ih(o);if(p!==null){p.flags&=-257,Uh(p,o,a,s,e),p.mode&1&&Dh(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Dh(s,c,e),_f();break e}l=Error(ie(426))}}else if(ht&&a.mode&1){var m=Ih(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Uh(m,o,a,s,e),Zd(xs(l,a));break e}}s=l=xs(l,a),Ct!==4&&(Ct=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=V0(s,l,e);Ch(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Hi===null||!Hi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=G0(s,a,e);Ch(s,x);break e}}s=s.return}while(s!==null)}lg(n)}catch(P){e=P,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function og(){var t=dl.current;return dl.current=ul,t===null?ul:t}function _f(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Nt===null||!(Er&268435455)&&!(Rl&268435455)||Ni(Nt,Ut)}function pl(t,e){var n=$e;$e|=2;var i=og();(Nt!==t||Ut!==e)&&(ai=null,_r(t,e));do try{Sx();break}catch(r){sg(t,r)}while(!0);if(Jd(),$e=n,dl.current=i,Tt!==null)throw Error(ie(261));return Nt=null,Ut=0,Ct}function Sx(){for(;Tt!==null;)ag(Tt)}function Mx(){for(;Tt!==null&&!qv();)ag(Tt)}function ag(t){var e=ug(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?lg(t):Tt=e,hf.current=null}function lg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mx(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Tt=null;return}}else if(n=px(n,e,un),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Ct===0&&(Ct=5)}function lr(t,e,n){var i=it,r=An.transition;try{An.transition=null,it=1,Ex(t,e,n,i)}finally{An.transition=r,it=i}return null}function Ex(t,e,n,i){do us();while(Ui!==null);if($e&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(i_(t,s),t===Nt&&(Tt=Nt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||na||(na=!0,dg($a,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=it;it=1;var a=$e;$e|=4,hf.current=null,vx(t,n),ng(n,t),G_(mu),Za=!!pu,mu=pu=null,t.current=n,_x(n),Yv(),$e=a,it=o,An.transition=s}else t.current=n;if(na&&(na=!1,Ui=t,hl=r),s=t.pendingLanes,s===0&&(Hi=null),Zv(n.stateNode),rn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(fl)throw fl=!1,t=Uu,Uu=null,t;return hl&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===Fu?lo++:(lo=0,Fu=t):lo=0,Qi(),null}function us(){if(Ui!==null){var t=Vm(hl),e=An.transition,n=it;try{if(An.transition=null,it=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,hl=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:oo(8,d,s)}var h=d.child;if(h!==null)h.return=d,me=h;else for(;me!==null;){d=me;var f=d.sibling,p=d.return;if(J0(d),d===c){me=null;break}if(f!==null){f.return=p,me=f;break}me=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bl(9,a)}}catch(P){St(a,a.return,P)}if(a===o){me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,me=x;break e}me=a.return}}if($e=r,Qi(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(yl,t)}catch{}i=!0}return i}finally{it=n,An.transition=e}}return!1}function Yh(t,e,n){e=xs(n,e),e=V0(t,e,1),t=Bi(t,e,1),e=qt(),t!==null&&(Po(t,1,e),rn(t,e))}function St(t,e,n){if(t.tag===3)Yh(t,t,n);else for(;e!==null;){if(e.tag===3){Yh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=xs(n,t),t=G0(e,t,1),e=Bi(e,t,1),t=qt(),e!==null&&(Po(e,1,t),rn(e,t));break}}e=e.return}}function wx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ut&n)===n&&(Ct===4||Ct===3&&(Ut&130023424)===Ut&&500>Mt()-mf?_r(t,0):pf|=n),rn(t,e)}function cg(t,e){e===0&&(t.mode&1?(e=Xo,Xo<<=1,!(Xo&130023424)&&(Xo=4194304)):e=1);var n=qt();t=_i(t,e),t!==null&&(Po(t,e,n),rn(t,n))}function Tx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cg(t,n)}function Ax(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),cg(t,n)}var ug;ug=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,hx(t,e,n);en=!!(t.flags&131072)}else en=!1,ht&&e.flags&1048576&&p0(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fa(t,e),t=e.pendingProps;var r=ms(e,Gt.current);cs(e,n),r=lf(null,e,i,t,r,n);var s=cf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,nl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nf(e),r.updater=Cl,e.stateNode=r,r._reactInternals=e,wu(e,i,t,n),e=Cu(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&$d(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=bx(i),t=Un(i,t),r){case 0:e=Au(null,e,i,t,n);break e;case 1:e=kh(null,e,i,t,n);break e;case 11:e=Fh(null,e,i,t,n);break e;case 14:e=Oh(null,e,i,Un(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Au(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),kh(t,e,i,r,n);case 3:e:{if(q0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,y0(t,e),al(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(ie(423)),e),e=zh(t,e,i,n,r);break e}else if(i!==r){r=xs(Error(ie(424)),e),e=zh(t,e,i,n,r);break e}else for(fn=zi(e.stateNode.containerInfo.firstChild),hn=e,ht=!0,On=null,n=_0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=xi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return S0(e),t===null&&Su(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,gu(i,r)?o=null:s!==null&&gu(i,s)&&(e.flags|=32),X0(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&Su(e),null;case 13:return Y0(t,e,n);case 4:return rf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Fh(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(sl,i._currentValue),i._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===r.children&&!tn.current){e=xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=Cn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Oh(t,e,i,r,n);case 15:return W0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Fa(t,e),e.tag=1,nn(i)?(t=!0,nl(e)):t=!1,cs(e,n),H0(e,i,r),wu(e,i,r,n),Cu(null,e,i,!0,t,n);case 19:return $0(t,e,n);case 22:return j0(t,e,n)}throw Error(ie(156,e.tag))};function dg(t,e){return km(t,e)}function Cx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new Cx(t,e,n,i)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bx(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Od)return 11;if(t===kd)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function za(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qr:return xr(n.children,r,s,e);case Fd:o=8,r|=8;break;case Yc:return t=wn(12,n,e,r|2),t.elementType=Yc,t.lanes=s,t;case $c:return t=wn(13,n,e,r),t.elementType=$c,t.lanes=s,t;case Kc:return t=wn(19,n,e,r),t.elementType=Kc,t.lanes=s,t;case Sm:return Pl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xm:o=10;break e;case ym:o=9;break e;case Od:o=11;break e;case kd:o=14;break e;case Ri:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Pl(t,e,n,i){return t=wn(22,t,i,e),t.elementType=Sm,t.lanes=n,t.stateNode={isHidden:!1},t}function hc(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function pc(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yf(t,e,n,i,r,s,o,a,l){return t=new Rx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),t}function Px(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fg(t){if(!t)return qi;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(nn(n))return f0(t,n,e)}return e}function hg(t,e,n,i,r,s,o,a,l){return t=yf(n,i,!0,t,r,s,o,a,l),t.context=fg(null),n=t.current,i=qt(),r=Vi(n),s=pi(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,Po(t,r,i),rn(t,i),t}function Ll(t,e,n,i){var r=e.current,s=qt(),o=Vi(r);return n=fg(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,o),t!==null&&(Hn(t,r,o,s),Da(t,r,o)),o}function ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $h(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sf(t,e){$h(t,e),(t=t.alternate)&&$h(t,e)}function Lx(){return null}var pg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mf(t){this._internalRoot=t}Nl.prototype.render=Mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Ll(t,e,null,null)};Nl.prototype.unmount=Mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Ll(null,t,null,null)}),e[vi]=null}};function Nl(t){this._internalRoot=t}Nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=jm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Li.length&&e!==0&&e<Li[n].priority;n++);Li.splice(n,0,t),n===0&&qm(t)}};function Ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kh(){}function Nx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ml(o);s.call(c)}}var o=hg(e,i,t,0,null,!1,!1,"",Kh);return t._reactRootContainer=o,t[vi]=o.current,_o(t.nodeType===8?t.parentNode:t),wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ml(l);a.call(c)}}var l=yf(t,0,!1,null,null,!1,!1,"",Kh);return t._reactRootContainer=l,t[vi]=l.current,_o(t.nodeType===8?t.parentNode:t),wr(function(){Ll(e,l,n,i)}),l}function Il(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ml(o);a.call(l)}}Ll(e,o,t,r)}else o=Nx(n,e,t,r,i);return ml(o)}Gm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(Hd(e,n|1),rn(e,Mt()),!($e&6)&&(ys=Mt()+500,Qi()))}break;case 13:wr(function(){var i=_i(t,1);if(i!==null){var r=qt();Hn(i,t,1,r)}}),Sf(t,1)}};Vd=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=qt();Hn(e,t,134217728,n)}Sf(t,134217728)}};Wm=function(t){if(t.tag===13){var e=Vi(t),n=_i(t,e);if(n!==null){var i=qt();Hn(n,t,e,i)}Sf(t,e)}};jm=function(){return it};Xm=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};ou=function(t,e,n){switch(e){case"input":if(Jc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wl(i);if(!r)throw Error(ie(90));Em(i),Jc(i,r)}}}break;case"textarea":Tm(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};Nm=gf;Dm=wr;var Dx={usingClientEntryPoint:!1,Events:[No,Zr,wl,Pm,Lm,gf]},Vs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ix={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fm(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||Lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{yl=ia.inject(Ix),Zn=ia}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dx;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(e))throw Error(ie(200));return Px(t,e,null,n)};gn.createRoot=function(t,e){if(!Ef(t))throw Error(ie(299));var n=!1,i="",r=pg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yf(t,1,!1,null,null,n,!1,i,r),t[vi]=e.current,_o(t.nodeType===8?t.parentNode:t),new Mf(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Fm(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return wr(t)};gn.hydrate=function(t,e,n){if(!Dl(e))throw Error(ie(200));return Il(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Ef(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=pg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hg(e,null,t,1,n??null,r,!1,s,o),t[vi]=e.current,_o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nl(e)};gn.render=function(t,e,n){if(!Dl(e))throw Error(ie(200));return Il(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Dl(t))throw Error(ie(40));return t._reactRootContainer?(wr(function(){Il(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1};gn.unstable_batchedUpdates=gf;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Dl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Il(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function mg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mg)}catch(t){console.error(t)}}mg(),mm.exports=gn;var Ux=mm.exports,gg,Zh=Ux;gg=Zh.createRoot,Zh.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),mt=(t,e)=>{const n=Qe.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},d)=>Qe.createElement("svg",{ref:d,...Fx,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Ox(t)}`,a].join(" "),...c},[...e.map(([h,f])=>Qe.createElement(h,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=mt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=mt("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=mt("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=mt("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=mt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=mt("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=mt("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=mt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=mt("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=mt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=mt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=mt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=mt("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=mt("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=mt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=mt("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=mt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=mt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=mt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=mt("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=mt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=mt("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=mt("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=mt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),iy="/moazzamgodil/assets/Moazzam's%20Resume-DQ6Jb6tf.pdf",Bu=iy,Qh=()=>{const[t,e]=Qe.useState(!1),[n,i]=Qe.useState(window.scrollY>50);Qe.useEffect(()=>{const s=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const r=[{href:"#home",label:"Home"},{href:"#about",label:"About"},{href:"#services",label:"Services"},{href:"#skills",label:"Skills"},{href:"#projects",label:"Projects"},{href:"#contact",label:"Contact"}];return b.jsxs("nav",{className:`fixed w-full z-50 transition-all duration-300 ${n?"bg-slate-950/75 backdrop-blur-md border-b border-cyan-200/20 shadow-[0_16px_40px_rgba(2,6,23,0.6)]":"bg-transparent"}`,children:[b.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:b.jsxs("div",{className:"flex items-center justify-between h-16",children:[b.jsx("div",{className:"flex-shrink-0",children:b.jsx("a",{href:"#",className:"text-2xl font-bold text-cyan-100 tracking-widest hover:text-white transition-colors",style:{fontFamily:"Orbitron, sans-serif"},children:"Moazzam (MG)"})}),b.jsx("div",{className:"hidden md:block",children:b.jsx("div",{className:"ml-10 flex items-baseline space-x-4",children:r.map(s=>b.jsx("a",{href:s.href,className:"px-3 py-2 rounded-md text-sm font-medium text-cyan-50 hover:text-cyan-300 transition-colors",children:s.label},s.href))})}),b.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[b.jsx("a",{href:"https://github.com/moazzamgodil",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-50 hover:text-cyan-300",children:b.jsx(Co,{className:"h-5 w-5"})}),b.jsx("a",{href:"https://linkedin.com/in/moazzamgodil",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-50 hover:text-cyan-300",children:b.jsx(Ul,{className:"h-5 w-5"})}),b.jsx("a",{href:Bu,target:"_blank",rel:"noopener noreferrer",className:"inline-flex px-4 py-2 border border-cyan-300/70 text-cyan-50 rounded-full hover:bg-cyan-300 hover:text-slate-950 transition-colors",children:"Download Resume"})]}),b.jsx("div",{className:"md:hidden",children:b.jsx("button",{onClick:()=>e(!t),className:"inline-flex items-center justify-center p-2 rounded-md text-cyan-50 hover:text-cyan-300 focus:outline-none",children:t?b.jsx(ny,{className:"h-6 w-6"}):b.jsx(Qx,{className:"h-6 w-6"})})})]})}),b.jsx("div",{className:`md:hidden transition-all duration-500 overflow-hidden ${t?" h-screen":" h-[0vh]"}`,children:b.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950/95 backdrop-blur-md shadow-lg h-full",children:[r.map(s=>b.jsx("a",{href:s.href,className:"block px-3 py-2 rounded-md text-base font-medium text-cyan-50 hover:text-cyan-300",onClick:()=>e(!1),children:s.label},s.href)),b.jsx("a",{href:Bu,target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 inline-block border border-cyan-300/70 text-cyan-50 rounded-full hover:bg-cyan-300 hover:text-slate-950 transition-colors",children:"Download Resume"})]})})]})},Jh=["Full Stack Developer","MERN Stack Developer","NodeJS Developer","Blockchain Developer","AI Engineer","PHP Developer","Database Developer","Software Developer","DevOps Engineer"],ry=()=>{const[t,e]=Qe.useState(0),[n,i]=Qe.useState(""),[r,s]=Qe.useState(!1),[o,a]=Qe.useState(!0);return Qe.useEffect(()=>{const l=Jh[t];!r&&n===l?setTimeout(()=>s(!0),1e3):r&&n===""?(s(!1),e(d=>(d+1)%Jh.length)):setTimeout(()=>{i(d=>r?d.slice(0,-1):l.slice(0,d.length+1))},50)},[n,r,t]),Qe.useEffect(()=>{const l=setInterval(()=>{a(c=>!c)},500);return()=>clearInterval(l)},[]),b.jsxs("span",{children:[n,b.jsx("span",{className:o?"visible":"invisible",children:"|"})]})},sy=()=>(Qe.useEffect(()=>{const t=setInterval(()=>{},1e3);return()=>clearInterval(t)},[]),b.jsxs("section",{id:"home",className:"relative min-h-screen flex items-center",children:[b.jsxs("div",{className:"absolute inset-0 overflow-hidden hero-3d-scene",children:[b.jsx("div",{className:"object object-cube","aria-hidden":"true"}),b.jsx("div",{className:"object object-cube-sm","aria-hidden":"true"}),b.jsx("div",{className:"object object-sphere","aria-hidden":"true"}),b.jsx("div",{className:"object object-ring","aria-hidden":"true"}),b.jsx("div",{className:"object object-pyramid","aria-hidden":"true"}),b.jsx("div",{className:"hero-floor","aria-hidden":"true"}),b.jsx("div",{className:"absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]"})]}),b.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32","data-aos":"fade","data-aos-delay":"1000",children:b.jsxs("div",{className:"text-center",children:[b.jsxs("h1",{className:"text-4xl sm:text-6xl font-bold text-cyan-50 mb-6 headline-glow",style:{fontFamily:"Orbitron, sans-serif"},children:[b.jsx("span",{className:"block",children:"Hi, I'm Moazzam Ahmed"}),b.jsx("span",{className:"block mt-2 bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent",children:b.jsx(ry,{})})]}),b.jsx("p",{className:"mt-6 max-w-2xl mx-auto text-xl text-cyan-50/85",children:"I design, develop, and optimize Web2 and Web3 applications, building frontend, backend, smart contracts, and AI-powered solutions while ensuring scalability, security, and performance."}),b.jsxs("div",{className:"mt-10 flex justify-center flex-col md:flex-row gap-x-6 md:space-y-0 space-y-4",children:[b.jsxs("a",{href:"#contact",className:"rounded-full bg-cyan-300 px-8 py-3 text-slate-950 hover:bg-cyan-200 transition-colors flex items-center justify-center gap-2 font-semibold",children:["Let's Talk ",b.jsx(kx,{className:"h-5 w-5"})]}),b.jsx("a",{href:"#projects",className:"rounded-full bg-slate-900/40 border border-cyan-200/40 backdrop-blur-sm px-8 py-3 text-cyan-50 hover:bg-slate-800/70 transition-colors",children:"View Projects"})]})]})}),b.jsx("a",{href:"#about",className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-100 animate-bounce",children:b.jsx(Vx,{className:"h-8 w-8"})})]})),oy=()=>b.jsx("section",{id:"about",className:"py-20",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsxs("div",{className:"text-center mb-16","data-aos":"fade-up",children:[b.jsx("h2",{className:"text-3xl font-bold text-cyan-100 sm:text-4xl",style:{fontFamily:"Orbitron, sans-serif"},children:"About Me"}),b.jsx("div",{className:"mt-4 h-1 w-24 bg-cyan-300 mx-auto rounded-full"})]}),b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[b.jsx("div",{className:"space-y-6","data-aos":"fade-right","data-aos-delay":"500",children:b.jsxs("div",{className:"tech-card border border-cyan-200/40 bg-slate-950/50 backdrop-blur-sm rounded-none p-6 h-full",children:[b.jsxs("div",{className:"mb-6",children:[b.jsx("h4",{className:"font-bold text-cyan-300",children:"Full Name:"}),b.jsx("p",{className:"text-xl text-cyan-50",children:"Moazzam Ahmed Godil"})]}),b.jsxs("div",{className:"mb-6",children:[b.jsx("h4",{className:"font-bold text-cyan-300",children:"Phone:"}),b.jsx("p",{className:"text-xl text-cyan-50",children:"+92 300 359 8393"})]}),b.jsxs("div",{className:"mb-6",children:[b.jsx("h4",{className:"font-bold text-cyan-300",children:"Email:"}),b.jsx("p",{className:"text-xl text-cyan-50",children:"moazzamgodil@gmail.com"})]}),b.jsxs("div",{className:"mb-6",children:[b.jsx("h4",{className:"font-bold text-cyan-300",children:"Location:"}),b.jsx("p",{className:"text-xl text-cyan-50",children:"Karachi, Pakistan"})]}),b.jsxs("a",{href:"https://www.linkedin.com/in/moazzamgodil/",target:"_blank",rel:"noopener noreferrer",className:"border border-cyan-300/70 rounded-none p-2 w-full text-cyan-200 hover:bg-cyan-300 hover:text-slate-950 transition-colors flex items-center justify-center",children:[b.jsx(Ul,{className:"h-4 w-4"}),b.jsx("span",{className:"ml-2",children:"Connect on LinkedIn"})]})]})}),b.jsxs("div",{className:"space-y-6 col-span-2","data-aos":"fade","data-aos-delay":"500",children:[b.jsx("h3",{className:"text-3xl text-cyan-300",children:"Hello There!"}),b.jsx("p",{className:"leading-relaxed text-cyan-50/85",children:"I started my journey in tech more than a decade ago. In the beginning, I was fascinated by how websites and applications work, so I started building small projects—first simple websites, then full applications. Over time, I explored both frontend and backend development, which helped me understand the complete picture of software development."}),b.jsx("p",{className:"leading-relaxed text-cyan-50/85",children:"As I worked on different projects, I realized that technology keeps evolving. That's when I got into blockchain. The idea of decentralization and smart contracts really excited me. I started learning and experimenting, building Web3 applications, and working with different blockchain networks. At the same time, AI caught my attention, and I explored machine learning and computer vision, integrating AI into real-world applications."}),b.jsx("p",{className:"leading-relaxed text-cyan-50/85",children:"Along the way, I worked on many challenging projects—some were purely Web2, handling large-scale users, and others were Web3, where security and smart contract logic were key. I also focused on DevOps, automation, and deployment strategies to ensure everything runs smoothly."}),b.jsx("p",{className:"leading-relaxed text-cyan-50/85",children:"Today, I enjoy solving complex problems, working with the latest technologies, and building things that have real impact. I'm always excited about what's next in tech and how I can contribute to it."}),b.jsx("div",{className:"mt-6",children:b.jsxs("a",{href:Bu,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-3 bg-cyan-300 text-slate-950 rounded-none hover:bg-cyan-200 transition-colors font-semibold",children:[b.jsx(qx,{className:"h-5 w-5"}),"Download Resume"]})})]})]})]})}),ay=()=>{const t=[{title:"CTO & Full-Stack Blockchain Engineer",company:"Chaos Corporation",period:"12/2021 - 01/2025",description:"I build powerful web and blockchain applications, combining Web2, Web3, and AI technologies. From designing user-friendly interfaces to developing secure backends and smart contracts, I handle it all. I also manage DevOps to keep everything running smoothly."},{title:"Software Developer",company:"TeraHz Solutions",period:"03/2021 - 12/2021",description:"I have mostly worked on product frontends using Vanilla HTML, CSS, and JavaScript, creating clean and responsive UIs. One of my key achievements is developing a custom WordPress plugin, which added valuable functionality and improved user experience."},{title:"PHP, MERN Stack Developer",company:"Freelancing",period:"02/2019 - 04/2021",description:"I develop dynamic and responsive web applications using PHP, and MERN stack. I build scalable backends, interactive frontends, and ensure smooth functionality for seamless user experiences."}],e=[{degree:"BS in Computer Engineering",school:"Sir Syed University Of Engineering And Technology",period:"01/2017 - 03/2021"},{degree:"Diploma of Associate Engineering in Electronics",school:"Aligarh Institute Of Technology",period:"2013 - 2016"}];return b.jsx("section",{id:"resume",className:"py-20",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsxs("div",{className:"text-center mb-16","data-aos":"fade-up",children:[b.jsx("h2",{className:"text-3xl font-bold text-cyan-100 sm:text-4xl",style:{fontFamily:"Orbitron, sans-serif"},children:"My Resume"}),b.jsx("div",{className:"mt-4 h-1 w-24 bg-cyan-300 mx-auto rounded-full"})]}),b.jsxs("div",{className:"max-w-3xl mx-auto",children:[b.jsxs("div",{className:"space-y-6 mb-16",children:[b.jsxs("h3",{className:"text-2xl font-semibold mb-10 flex items-center gap-2 text-cyan-50","data-aos":"fade",children:[b.jsx("div",{className:"w-14 h-14 rounded-none bg-slate-900 border border-cyan-200/30 flex items-center justify-center text-cyan-300 hover:bg-cyan-300 hover:text-slate-950 transition-colors mr-4",children:b.jsx(Hx,{})}),"Work Experience"]}),b.jsx("div",{className:"space-y-8",children:t.map((n,i)=>b.jsxs("div",{className:"relative pl-8 border-l-2 border-cyan-100/30","data-aos":"fade",children:[b.jsx("div",{className:"absolute w-4 h-4 bg-cyan-300 rounded-full -left-[9px] top-1"}),b.jsx("h4",{className:"font-semibold text-lg text-cyan-50",children:n.title}),b.jsx("p",{className:"text-cyan-300",children:n.company}),b.jsx("p",{className:"text-sm text-cyan-50/60",children:n.period}),b.jsx("p",{className:"mt-2 text-cyan-50/70",children:n.description})]},i))})]}),b.jsxs("div",{className:"space-y-6",children:[b.jsxs("h3",{className:"text-2xl font-semibold mb-10 flex items-center gap-2 text-cyan-50","data-aos":"fade",children:[b.jsx("div",{className:"w-14 h-14 rounded-none bg-slate-900 border border-cyan-200/30 flex items-center justify-center text-cyan-300 hover:bg-cyan-300 hover:text-slate-950 transition-colors mr-4",children:b.jsx(Zx,{})}),"Education"]}),b.jsx("div",{className:"space-y-8",children:e.map((n,i)=>b.jsxs("div",{className:"relative pl-8 border-l-2 border-cyan-100/30","data-aos":"fade",children:[b.jsx("div",{className:"absolute w-4 h-4 bg-cyan-300 rounded-full -left-[9px] top-1"}),b.jsx("h4",{className:"font-semibold text-lg text-cyan-50",children:n.degree}),b.jsx("p",{className:"text-cyan-300",children:n.school}),b.jsx("p",{className:"text-sm text-cyan-50/70",children:n.period})]},i))})]})]})]})})},ly=()=>{const t=[{icon:b.jsx(jx,{className:"h-8 w-8"}),title:"Web Development",description:"Building responsive and performant web applications using modern technologies."},{icon:b.jsx(Jx,{className:"h-8 w-8"}),title:"Blockchain Development",description:"Secure, scalable, and custom blockchain solutions, from smart contracts to dApps."},{icon:b.jsx(vg,{className:"h-8 w-8"}),title:"Backend Development",description:"Developing robust and scalable server-side applications and APIs."},{icon:b.jsx(Bx,{className:"h-8 w-8"}),title:"AI-Powered Agents & Solutions",description:"Automate and optimize with intelligent AI agents for seamless efficiency."},{icon:b.jsx(_g,{className:"h-8 w-8"}),title:"Efficient DevOps Solutions",description:"Streamlined CI/CD, automation, and cloud solutions for efficient deployment and scaling."},{icon:b.jsx($x,{className:"h-8 w-8"}),title:"SEO & Performance Optimization",description:"Enhance search rankings and visibility while boosting application performance and loading speeds."}];return b.jsx("section",{id:"services",className:"py-20",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsxs("div",{className:"text-center mb-16","data-aos":"fade-up",children:[b.jsx("h2",{className:"text-3xl font-bold text-cyan-100 sm:text-4xl",style:{fontFamily:"Orbitron, sans-serif"},children:"My Services"}),b.jsx("div",{className:"mt-4 h-1 w-24 bg-cyan-300 mx-auto rounded-full"}),b.jsx("p",{className:"mt-4 text-xl text-cyan-50/60",children:"Comprehensive solutions for your digital needs"})]}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((e,n)=>b.jsxs("div",{className:"tech-card p-6 bg-slate-950/55 rounded-none shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cyan-100/20 group backdrop-blur-sm","data-aos":"fade","data-aos-delay":(n+1)*100,children:[b.jsx("div",{className:"w-14 h-14 rounded-none bg-slate-900 border border-cyan-200/30 flex items-center justify-center mb-6 text-cyan-300 group-hover:bg-cyan-300 group-hover:text-slate-950 transition-colors",children:e.icon}),b.jsx("h3",{className:"text-cyan-50 text-xl font-semibold mb-3 transition-colors",children:e.title}),b.jsx("p",{className:"text-cyan-50/70 transition-colors",children:e.description})]},n))})]})})},ep="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2024.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20300%20383.5'%20style='enable-background:new%200%200%20300%20383.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill-rule:evenodd;clip-rule:evenodd;fill:%234DA2FF;}%20%3c/style%3e%3cpath%20class='st0'%20d='M240.1,159.9c15.6,19.6,25,44.5,25,71.5s-9.6,52.6-25.7,72.4l-1.4,1.7l-0.4-2.2c-0.3-1.8-0.7-3.7-1.1-5.6%20c-8-35.3-34.2-65.6-77.4-90.2c-29.1-16.5-45.8-36.4-50.2-59c-2.8-14.6-0.7-29.3,3.3-41.9c4.1-12.6,10.1-23.1,15.2-29.4l16.8-20.5%20c2.9-3.6,8.5-3.6,11.4,0L240.1,159.9L240.1,159.9z%20M266.6,139.4L154.2,2c-2.1-2.6-6.2-2.6-8.3,0L33.4,139.4l-0.4,0.5%20C12.4,165.6,0,198.2,0,233.7c0,82.7,67.2,149.8,150,149.8c82.8,0,150-67.1,150-149.8c0-35.5-12.4-68.1-33.1-93.8L266.6,139.4%20L266.6,139.4z%20M60.3,159.5l10-12.3l0.3,2.3c0.2,1.8,0.5,3.6,0.9,5.4c6.5,34.1,29.8,62.6,68.6,84.6c33.8,19.2,53.4,41.3,59.1,65.6%20c2.4,10.1,2.8,20.1,1.8,28.8l-0.1,0.5l-0.5,0.2c-15.2,7.4-32.4,11.6-50.5,11.6c-63.5,0-115-51.4-115-114.8%20C34.9,204.2,44.4,179.1,60.3,159.5L60.3,159.5z'/%3e%3c/svg%3e",cy="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%202019%20(64-Bit)%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='100%25'%20height='100%25'%20version='1.1'%20shape-rendering='geometricPrecision'%20text-rendering='geometricPrecision'%20image-rendering='optimizeQuality'%20fill-rule='evenodd'%20clip-rule='evenodd'%20viewBox='0%200%20784.37%201277.39'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:xodm='http://www.corel.com/coreldraw/odm/2003'%3e%3cg%20id='Layer_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cg%20id='_1421394342400'%3e%3cg%3e%3cpolygon%20fill='%23343434'%20fill-rule='nonzero'%20points='392.07,0%20383.5,29.11%20383.5,873.74%20392.07,882.29%20784.13,650.54%20'/%3e%3cpolygon%20fill='%238C8C8C'%20fill-rule='nonzero'%20points='392.07,0%20-0,650.54%20392.07,882.29%20392.07,472.33%20'/%3e%3cpolygon%20fill='%233C3C3B'%20fill-rule='nonzero'%20points='392.07,956.52%20387.24,962.41%20387.24,1263.28%20392.07,1277.38%20784.37,724.89%20'/%3e%3cpolygon%20fill='%238C8C8C'%20fill-rule='nonzero'%20points='392.07,1277.38%20392.07,956.52%20-0,724.89%20'/%3e%3cpolygon%20fill='%23141414'%20fill-rule='nonzero'%20points='392.07,882.29%20784.13,650.54%20392.07,472.33%20'/%3e%3cpolygon%20fill='%23393939'%20fill-rule='nonzero'%20points='0,650.54%20392.07,882.29%20392.07,472.33%20'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",uy="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2024.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20397.7%20311.7'%20style='enable-background:new%200%200%20397.7%20311.7;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:url(%23SVGID_1_);}%20.st1{fill:url(%23SVGID_2_);}%20.st2{fill:url(%23SVGID_3_);}%20%3c/style%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='360.8791'%20y1='351.4553'%20x2='141.213'%20y2='-69.2936'%20gradientTransform='matrix(1%200%200%20-1%200%20314)'%3e%3cstop%20offset='0'%20style='stop-color:%2300FFA3'/%3e%3cstop%20offset='1'%20style='stop-color:%23DC1FFF'/%3e%3c/linearGradient%3e%3cpath%20class='st0'%20d='M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5%20c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z'/%3e%3clinearGradient%20id='SVGID_2_'%20gradientUnits='userSpaceOnUse'%20x1='264.8291'%20y1='401.6014'%20x2='45.163'%20y2='-19.1475'%20gradientTransform='matrix(1%200%200%20-1%200%20314)'%3e%3cstop%20offset='0'%20style='stop-color:%2300FFA3'/%3e%3cstop%20offset='1'%20style='stop-color:%23DC1FFF'/%3e%3c/linearGradient%3e%3cpath%20class='st1'%20d='M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5%20c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z'/%3e%3clinearGradient%20id='SVGID_3_'%20gradientUnits='userSpaceOnUse'%20x1='312.5484'%20y1='376.688'%20x2='92.8822'%20y2='-44.061'%20gradientTransform='matrix(1%200%200%20-1%200%20314)'%3e%3cstop%20offset='0'%20style='stop-color:%2300FFA3'/%3e%3cstop%20offset='1'%20style='stop-color:%23DC1FFF'/%3e%3c/linearGradient%3e%3cpath%20class='st2'%20d='M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4%20c5.8,0,8.7-7,4.6-11.1L333.1,120.1z'/%3e%3c/svg%3e",dy="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20424'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2323292f;}%3c/style%3e%3c/defs%3e%3ctitle%3ex%3c/title%3e%3cg%20id='Layer_2'%20data-name='Layer%202'%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cpath%20class='cls-1'%20d='M437,0h74L357,152.48c-55.77,55.19-146.19,55.19-202,0L.94,0H75L192,115.83a91.11,91.11,0,0,0,127.91,0Z'/%3e%3cpath%20class='cls-1'%20d='M74.05,424H0L155,270.58c55.77-55.19,146.19-55.19,202,0L512,424H438L320,307.23a91.11,91.11,0,0,0-127.91,0Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",fy="data:image/svg+xml,%3csvg%20id='Calque_1'%20data-name='Calque%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23ff060a;}%3c/style%3e%3c/defs%3e%3ctitle%3etron%3c/title%3e%3cg%20id='tron'%3e%3cpath%20class='cls-1'%20d='M61.55,19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82,3.82,0,0,0-1.11-.62l0,0C41.56,7,3.63-.09,2.89,0a1.4,1.4,0,0,0-.58.22L2.12.37a2.23,2.23,0,0,0-.52.84l-.05.13v.71l0,.11C5.82,14.05,22.68,53,26,62.14c.2.62.58,1.8,1.29,1.86h.16c.38,0,2-2.14,2-2.14S58.41,26.74,61.34,23a9.46,9.46,0,0,0,1-1.48A2.41,2.41,0,0,0,61.55,19.28ZM36.88,23.37,49.24,13.12l7.25,6.68Zm-4.8-.67L10.8,5.26l34.43,6.35ZM34,27.27l21.78-3.51-24.9,30ZM7.91,7,30.3,26,27.06,53.78Z'/%3e%3c/g%3e%3c/svg%3e",hy="/moazzamgodil/assets/web3js-logo-CIAxC35x.svg",py="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='256px'%20height='162px'%20viewBox='0%200%20256%20162'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3ctitle%3eEthers%3c/title%3e%3cg%3e%3cpath%20d='M256,138.738687%20C122.160964,156.230086%2026.6334307,177.238606%2025.2203015,91.0063227%20C25.2203015,91.0063227%2028.1407685,57.593668%2069.121515,55.4896757%20C69.121515,55.4896757%2070.5032414,25.8139626%20101.811904,22.4538555%20C118.643843,20.6324889%20137.768191,37.9668737%20139.84078,56.2119417%20C139.84078,56.2119417%20181.261167,48.5496412%20183.051131,88.9337332%20C183.679188,103.002219%20180.507498,126.931207%20140.563046,125.894912%20C140.563046,125.894912%20117.450533,122.754625%20114.310246,87.0181581%20C107.809852,156.198683%20207.827996,152.179115%20209.272528,89.3419706%20C209.900585,62.1784872%20192.503395,34.2299321%20153.312612,39.4742115%20C131.833048,-14.5701294%2074.6484203,-11.4612452%2053.3572738,38.6577369%20C22.9278919,38.6577369%20-0.341635476,62.0842786%200.00379610417,92.6706749%20C1.16570233,191.118675%20138.176428,161.442962%20256,138.738687%20Z'%20fill='%2324339B'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",my="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20role='img'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eOpenAI%20icon%3c/title%3e%3cpath%20d='M22.2819%209.8211a5.9847%205.9847%200%200%200-.5157-4.9108%206.0462%206.0462%200%200%200-6.5098-2.9A6.0651%206.0651%200%200%200%204.9807%204.1818a5.9847%205.9847%200%200%200-3.9977%202.9%206.0462%206.0462%200%200%200%20.7427%207.0966%205.98%205.98%200%200%200%20.511%204.9107%206.051%206.051%200%200%200%206.5146%202.9001A5.9847%205.9847%200%200%200%2013.2599%2024a6.0557%206.0557%200%200%200%205.7718-4.2058%205.9894%205.9894%200%200%200%203.9977-2.9001%206.0557%206.0557%200%200%200-.7475-7.0729zm-9.022%2012.6081a4.4755%204.4755%200%200%201-2.8764-1.0408l.1419-.0804%204.7783-2.7582a.7948.7948%200%200%200%20.3927-.6813v-6.7369l2.02%201.1686a.071.071%200%200%201%20.038.052v5.5826a4.504%204.504%200%200%201-4.4945%204.4944zm-9.6607-4.1254a4.4708%204.4708%200%200%201-.5346-3.0137l.142.0852%204.783%202.7582a.7712.7712%200%200%200%20.7806%200l5.8428-3.3685v2.3324a.0804.0804%200%200%201-.0332.0615L9.74%2019.9502a4.4992%204.4992%200%200%201-6.1408-1.6464zM2.3408%207.8956a4.485%204.485%200%200%201%202.3655-1.9728V11.6a.7664.7664%200%200%200%20.3879.6765l5.8144%203.3543-2.0201%201.1685a.0757.0757%200%200%201-.071%200l-4.8303-2.7865A4.504%204.504%200%200%201%202.3408%207.872zm16.5963%203.8558L13.1038%208.364%2015.1192%207.2a.0757.0757%200%200%201%20.071%200l4.8303%202.7913a4.4944%204.4944%200%200%201-.6765%208.1042v-5.6772a.79.79%200%200%200-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759%200%200%200-.7854%200L9.409%209.2297V6.8974a.0662.0662%200%200%201%20.0284-.0615l4.8303-2.7866a4.4992%204.4992%200%200%201%206.6802%204.66zM8.3065%2012.863l-2.02-1.1638a.0804.0804%200%200%201-.038-.0567V6.0742a4.4992%204.4992%200%200%201%207.3757-3.4537l-.142.0805L8.704%205.459a.7948.7948%200%200%200-.3927.6813zm1.0976-2.3654l2.602-1.4998%202.6069%201.4998v2.9994l-2.5974%201.4997-2.6067-1.4997Z'/%3e%3c/svg%3e",gy="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20shape-rendering='geometricPrecision'%20text-rendering='geometricPrecision'%20image-rendering='optimizeQuality'%20fill-rule='evenodd'%20clip-rule='evenodd'%20viewBox='0%200%20512%20509.64'%3e%3cpath%20fill='%23fff'%20d='M115.612%200h280.775C459.974%200%20512%2052.026%20512%20115.612v278.415c0%2063.587-52.026%20115.613-115.613%20115.613H115.612C52.026%20509.64%200%20457.614%200%20394.027V115.612C0%2052.026%2052.026%200%20115.612%200z'/%3e%3cpath%20fill='%234D6BFE'%20fill-rule='nonzero'%20d='M440.898%20139.167c-4.001-1.961-5.723%201.776-8.062%203.673-.801.612-1.479%201.407-2.154%202.141-5.848%206.246-12.681%2010.349-21.607%209.859-13.048-.734-24.192%203.368-34.04%2013.348-2.093-12.307-9.048-19.658-19.635-24.37-5.54-2.449-11.141-4.9-15.02-10.227-2.708-3.795-3.447-8.021-4.801-12.185-.861-2.509-1.725-5.082-4.618-5.512-3.139-.49-4.372%202.142-5.601%204.349-4.925%209.002-6.833%2018.921-6.647%2028.962.432%2022.597%209.972%2040.597%2028.932%2053.397%202.154%201.47%202.707%202.939%202.032%205.082-1.293%204.41-2.832%208.695-4.186%2013.105-.862%202.817-2.157%203.429-5.172%202.205-10.402-4.346-19.391-10.778-27.332-18.553-13.481-13.044-25.668-27.434-40.873-38.702a177.614%20177.614%200%2000-10.834-7.409c-15.512-15.063%202.032-27.434%206.094-28.902%204.247-1.532%201.478-6.797-12.251-6.736-13.727.061-26.285%204.653-42.288%2010.777-2.34.92-4.801%201.593-7.326%202.142-14.527-2.756-29.608-3.368-45.367-1.593-29.671%203.305-53.368%2017.329-70.788%2041.272-20.928%2028.785-25.854%2061.482-19.821%2095.59%206.34%2035.943%2024.683%2065.704%2052.876%2088.974%2029.239%2024.123%2062.911%2035.943%20101.32%2033.677%2023.329-1.346%2049.307-4.468%2078.607-29.27%207.387%203.673%2015.142%205.144%2028.008%206.246%209.911.92%2019.452-.49%2026.839-2.019%2011.573-2.449%2010.773-13.166%206.586-15.124-33.915-15.797-26.47-9.368-33.24-14.573%2017.235-20.39%2043.213-41.577%2053.369-110.222.8-5.448.121-8.877%200-13.287-.061-2.692.553-3.734%203.632-4.041%208.494-.981%2016.742-3.305%2024.314-7.471%2021.975-12.002%2030.84-31.719%2032.933-55.355.307-3.612-.061-7.348-3.879-9.245v-.003zM249.4%20351.89c-32.872-25.838-48.814-34.352-55.4-33.984-6.155.368-5.048%207.41-3.694%2012.002%201.415%204.532%203.264%207.654%205.848%2011.634%201.785%202.634%203.017%206.551-1.784%209.493-10.587%206.55-28.993-2.205-29.856-2.635-21.421-12.614-39.334-29.269-51.954-52.047-12.187-21.924-19.267-45.435-20.435-70.542-.308-6.061%201.478-8.207%207.509-9.307%207.94-1.471%2016.127-1.778%2024.068-.615%2033.547%204.9%2062.108%2019.902%2086.054%2043.66%2013.666%2013.531%2024.007%2029.699%2034.658%2045.496%2011.326%2016.778%2023.514%2032.761%2039.026%2045.865%205.479%204.592%209.848%208.083%2014.035%2010.656-12.62%201.407-33.673%201.714-48.075-9.676zm15.899-102.519c.521-2.111%202.421-3.658%204.722-3.658a4.74%204.74%200%20011.661.305c.678.246%201.293.614%201.786%201.163.861.859%201.354%202.083%201.354%203.368%200%202.695-2.154%204.837-4.862%204.837a4.748%204.748%200%2001-4.738-4.034%205.01%205.01%200%2001.077-1.981zm47.208%2026.915c-2.606.996-5.2%201.778-7.707%201.88-4.679.244-9.787-1.654-12.556-3.981-4.308-3.612-7.386-5.631-8.679-11.941-.554-2.695-.247-6.858.246-9.246%201.108-5.144-.124-8.451-3.754-11.451-2.954-2.449-6.711-3.122-10.834-3.122-1.539%200-2.954-.673-4.001-1.224-1.724-.856-3.139-3-1.785-5.634.432-.856%202.525-2.939%203.018-3.305%205.6-3.185%2012.065-2.144%2018.034.244%205.54%202.266%209.727%206.429%2015.759%2012.307%206.155%207.102%207.263%209.063%2010.773%2014.39%202.771%204.163%205.294%208.451%207.018%2013.348.877%202.561.071%204.74-2.341%206.277-.981.625-2.109%201.044-3.191%201.458z'/%3e%3c/svg%3e",vy="/moazzamgodil/assets/trivy-logo-2H9_Mf96.svg",_y=()=>{const t=[{title:"Programming & Scripting Languages",icon:b.jsx(Wx,{className:"h-6 w-6"}),skills:[{name:"JavaScript (Frontend & Backend)",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},{name:"TypeScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},{name:"PHP",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"},{name:"Solidity (Smart Contracts - EVM)",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg"},{name:"Rust (Solana)",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"},{name:"Move (Sui Blockchain)",logo:ep},{name:"Python (AI & Backend)",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},{name:"SQL (MySQL, PostgreSQL)",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"},{name:"NoSQL Query Language (MongoDB, Firebase)",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"},{name:"Shell Scripting (Bash)",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"},{name:"HTML & CSS (Frontend Development)",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"}]},{title:"Frontend",icon:b.jsx(Kx,{className:"h-6 w-6"}),skills:[{name:"React.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{name:"Next.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"},{name:"React Native",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{name:"Svelte",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"}]},{title:"Backend",icon:b.jsx(ty,{className:"h-6 w-6"}),skills:[{name:"Node.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"},{name:"Express.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"},{name:"NestJS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"},{name:"Flask",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"},{name:"FastAPI",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"},{name:"PHP",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"}]},{title:"Blockchain & Web3",icon:b.jsx(zx,{className:"h-6 w-6"}),skills:[{name:"EVM-based Chains (Ethereum, BSC, Polygon, etc.)",logo:cy},{name:"Tron",logo:fy},{name:"Solana",logo:uy},{name:"XRP",logo:dy},{name:"Sui",logo:ep},{name:"Web3.js",logo:hy},{name:"Ethers.js",logo:py}]},{title:"AI & ML",icon:b.jsx(Xx,{className:"h-6 w-6"}),skills:[{name:"OpenAI",logo:my},{name:"Deepseek",logo:gy},{name:"TensorFlow",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"},{name:"OpenCV",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"}]},{title:"DevOps & CI/CD",icon:b.jsx(_g,{className:"h-6 w-6"}),skills:[{name:"Docker",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"},{name:"Kubernetes",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"},{name:"Jenkins",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"},{name:"Git & Version Control",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},{name:"Terraform",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg"},{name:"Ansible",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg"},{name:"Trivy",logo:vy}]},{title:"Databases",icon:b.jsx(vg,{className:"h-6 w-6"}),skills:[{name:"PostgreSQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},{name:"MySQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"},{name:"MongoDB",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"},{name:"Redis",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"},{name:"Firebase",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"}]},{title:"Cloud & Services",icon:b.jsx(Gx,{className:"h-6 w-6"}),skills:[{name:"AWS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},{name:"OCI",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"},{name:"GCP",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"},{name:"Azure",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"},{name:"DigitalOcean",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg"}]}];return b.jsx("section",{id:"skills",className:"py-20",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsxs("div",{className:"text-center mb-16","data-aos":"fade-up",children:[b.jsx("h2",{className:"text-3xl font-bold text-cyan-100 sm:text-4xl",style:{fontFamily:"Orbitron, sans-serif"},children:"Skills & Expertise"}),b.jsx("div",{className:"mt-4 h-1 w-24 bg-cyan-300 mx-auto rounded-full"}),b.jsx("p",{className:"mt-4 text-xl text-cyan-50/60",children:"Comprehensive technical expertise across multiple domains"})]}),b.jsx("div",{className:"space-y-8",children:t.map(e=>b.jsxs("div",{className:"tech-card bg-slate-950/50 border border-cyan-100/20 p-6 rounded-none shadow-lg backdrop-blur-sm","data-aos":"fade-up",children:[b.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[b.jsx("div",{className:"text-cyan-300",children:e.icon}),b.jsx("h3",{className:"text-xl font-semibold text-cyan-50",children:e.title})]}),b.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6",children:e.skills.map((n,i)=>b.jsxs("div",{className:"flex flex-col items-center p-4 rounded-none bg-slate-900/50 hover:bg-slate-800 transition-colors group border border-cyan-100/10","data-aos":"fade","data-aos-delay":(i+1)*100,children:[b.jsx("img",{src:n.logo,alt:n.name,className:"w-12 h-12 mb-3 group-hover:scale-110 transition-transform"}),b.jsx("span",{className:"text-sm font-medium text-cyan-50 text-center",children:n.name})]},n.name))})]},e.title))}),b.jsx("div",{className:"mt-12 text-center w-8/12 mx-auto",children:b.jsx("p",{className:"text-cyan-50/70",children:"Additional expertise in Software Architecture, System Design, Smart Contract Security, WordPress, APIs, Microservices, WebSockets, Cloud Services, OAuth, and Agile Methodologies."})})]})})},xy=({projects:t,moreProjects:e})=>b.jsx("section",{id:"projects",className:"py-20",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsxs("div",{className:"text-center mb-16","data-aos":"fade-up",children:[b.jsx("h2",{className:"text-3xl font-bold text-cyan-100 sm:text-4xl",style:{fontFamily:"Orbitron, sans-serif"},children:"Some Featured"}),b.jsx("div",{className:"mt-4 h-1 w-24 bg-cyan-300 mx-auto rounded-full"})]}),b.jsx("div",{className:"space-y-32",children:t.map((n,i)=>b.jsxs("div",{className:`relative md:grid md:grid-cols-12 md:gap-4 group ${i%2===0?"":"md:text-right"}`,children:[b.jsx("div",{className:`relative col-span-7 row-span-full ${i%2===0?"md:col-start-6":"md:col-start-1"}`,"data-aos":i%2===0?"fade-left":"fade-right",children:b.jsx("a",{href:n.demo||n.github||"#",className:"block relative group-hover:opacity-100 md:opacity-20 transition-opacity duration-300",target:"__blank",children:b.jsxs("div",{className:"relative h-full",children:[b.jsx("div",{className:"absolute inset-0 bg-dark mix-blend-screen opacity-25 group-hover:opacity-0 transition-opacity duration-1000"}),b.jsx("img",{src:`/moazzamgodil/${n.image}`,alt:n.title,className:"w-full h-full object-cover rounded-none aspect-video filter saturate-0 group-hover:saturate-100"})]})})}),b.jsx("div",{className:`relative z-10 col-span-7 row-span-full self-center ${i%2===0?"md:col-start-1":"md:col-start-6 md:text-right"}`,children:b.jsxs("div",{className:"relative bg-slate-950/60 md:bg-transparent p-6 md:p-0 rounded-none mt-[-2rem] md:mt-0 border border-cyan-100/20 md:border-0 backdrop-blur-sm",children:[b.jsx("p",{className:"text-cyan-300 font-mono text-sm mb-2","data-aos":i%2===0?"fade-right":"fade-left",children:"Featured Project"}),b.jsx("h3",{className:"text-cyan-50 text-2xl font-semibold mb-1","data-aos":i%2===0?"fade-right":"fade-left","data-aos-delay":"100",children:b.jsx("a",{href:n.demo||n.github||"#",className:"hover:text-primary transition-colors",target:"__blank",children:n.title})}),b.jsx("h5",{className:"text-cyan-50/60 mb-4","data-aos":i%2===0?"fade-right":"fade-left","data-aos-delay":"200",children:n==null?void 0:n.subTitle}),b.jsx("div",{className:"text-cyan-50/80 mb-6 md:bg-slate-950/70 md:p-6 md:rounded-none md:border md:border-cyan-100/20","data-aos":i%2===0?"fade-right":"fade-left","data-aos-delay":"300",children:b.jsx("p",{children:n.description})}),b.jsx("ul",{className:`flex flex-wrap gap-3 text-sm font-mono mb-6 text-cyan-50/90 ${i%2===0?"":"md:justify-end"}`,children:n.tech.map((r,s)=>b.jsx("li",{"data-aos":"fade","data-aos-delay":(s+1)*100,children:r},s))}),b.jsxs("div",{className:`flex gap-4 ${i%2===0?"":"md:justify-end"}`,children:[n.github&&b.jsx("a",{href:n.github,className:"text-cyan-50 hover:text-cyan-300 transition-colors","aria-label":"GitHub Repository",target:"__blank",children:b.jsx(Co,{size:20})}),n.demo&&b.jsx("a",{href:n.demo,className:"text-cyan-50 hover:text-cyan-300 transition-colors","aria-label":"Live Demo",target:"__blank",children:b.jsx(zu,{size:20})})]})]})})]},i))}),b.jsxs("div",{className:"mt-48",children:[b.jsxs("div",{className:"text-center mb-16","data-aos":"fade-up",children:[b.jsx("h2",{className:"text-3xl font-bold text-cyan-100 sm:text-4xl",style:{fontFamily:"Orbitron, sans-serif"},children:"Other Notable Projects"}),b.jsx("div",{className:"mt-4 h-1 w-24 bg-cyan-300 mx-auto rounded-full"}),b.jsx("a",{className:"mt-5 inline-flex items-center justify-center mx-auto text-sm tracking-[0.22em] uppercase border border-cyan-200/70 bg-slate-950/70 px-5 py-2 text-cyan-100 hover:bg-cyan-300 hover:text-slate-950 hover:border-cyan-300 transition-colors",href:"#archive",children:"View The Archive"})]}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:e.map((n,i)=>b.jsxs("div",{onClick:()=>{const r=n.demo||n.github;r&&window.open(r,"_blank")},className:"tech-card bg-slate-950/55 rounded-none p-8 flex flex-col h-full group transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-cyan-100/20 backdrop-blur-sm","data-aos":"fade","data-aos-delay":(i+1)*100,children:[b.jsxs("header",{className:"flex justify-between items-start mb-6",children:[b.jsx("div",{className:"text-cyan-300",children:b.jsx(Yx,{size:40})}),b.jsxs("div",{className:"flex gap-4",children:[n.github&&b.jsx("a",{href:n.github,className:"text-cyan-50 hover:text-cyan-300 transition-colors","aria-label":"GitHub Repository",target:"__blank",children:b.jsx(Co,{size:20})}),n.demo&&b.jsx("a",{href:n.demo,className:"text-cyan-50 hover:text-cyan-300 transition-colors","aria-label":"Live Demo",target:"__blank",children:b.jsx(zu,{size:20})})]})]}),b.jsx("h3",{className:"text-xl font-semibold text-cyan-50 group-hover:text-cyan-300 mb-0 transition-colors",children:b.jsx("a",{target:"__blank",href:n.demo||n.github||"#",children:n.title})}),b.jsx("h5",{className:"text-cyan-300 mb-4",children:n==null?void 0:n.subTitle}),b.jsx("p",{className:"text-cyan-50/70 mb-4 flex-grow",children:n.description}),b.jsx("footer",{children:b.jsx("ul",{className:"flex flex-wrap gap-3 text-xs font-mono text-cyan-50/90",children:n.tech.map((r,s)=>b.jsx("li",{children:r},s))})})]},i))}),b.jsx("a",{href:"#archive",className:"md:w-3/12 w-9/12 border border-cyan-200/70 bg-slate-950/70 rounded-none p-2 text-cyan-100 hover:bg-cyan-300 hover:text-slate-950 hover:border-cyan-300 transition-colors flex items-center justify-center mt-10 mx-auto font-semibold tracking-wide","data-aos":"fade-up",children:"View Archive"})]})]})}),yy=()=>b.jsx("section",{id:"contact",className:"py-20",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8","data-aos":"zoom-out",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-3xl font-bold text-cyan-100 sm:text-4xl",style:{fontFamily:"Orbitron, sans-serif"},children:"Get in Touch"}),b.jsx("div",{className:"mt-4 h-1 w-24 bg-cyan-300 mx-auto rounded-full"})]}),b.jsxs("div",{className:"flex justify-center flex-col md:flex-row items-center gap-5",children:[b.jsxs("a",{href:"mailto:moazzamgodil@gmail.com",className:"md:w-2/12 w-8/12 border border-cyan-200/50 rounded-none p-2 text-cyan-50 hover:bg-cyan-300 hover:text-slate-950 hover:border-cyan-300 transition-colors flex items-center justify-center",children:[b.jsx("span",{className:"mr-2",children:"Send Message"}),b.jsx(ey,{className:"h-4 w-4"})]}),b.jsxs("a",{href:"https://www.linkedin.com/in/moazzamgodil/",target:"_blank",rel:"noopener noreferrer",className:"md:w-2/12 w-8/12 border border-cyan-200/50 rounded-none p-2 text-cyan-50 hover:bg-cyan-300 hover:text-slate-950 hover:border-cyan-300 transition-colors flex items-center justify-center",children:[b.jsx(Ul,{className:"h-4 w-4"}),b.jsx("span",{className:"ml-2",children:"Connect on LinkedIn"})]})]})]})}),tp=()=>{const t=new Date().getFullYear();return b.jsx("footer",{className:"bg-slate-950/95 text-white py-6 border-t border-cyan-100/20",children:b.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:b.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center",children:[b.jsxs("p",{className:"text-cyan-50/70",children:["© ",t," MG. All rights reserved."]}),b.jsxs("div",{className:"text-cyan-50/70 flex items-center mt-4 sm:mt-0",children:[b.jsx("span",{className:"me-5",children:"Connect"}),b.jsxs("div",{className:"flex items-center space-x-4",children:[b.jsx("a",{href:"https://github.com/moazzamgodil",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-50 hover:text-cyan-300",children:b.jsx(Co,{className:"h-5 w-5"})}),b.jsx("a",{href:"https://linkedin.com/in/moazzamgodil",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-50 hover:text-cyan-300",children:b.jsx(Ul,{className:"h-5 w-5"})})]})]})]})})})};var xg={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(lv,function(){return function(n){function i(s){if(r[s])return r[s].exports;var o=r[s]={exports:{},id:s,loaded:!1};return n[s].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}var r={};return i.m=n,i.c=r,i.p="dist/",i(0)}([function(n,i,r){function s(H){return H&&H.__esModule?H:{default:H}}var o=Object.assign||function(H){for(var Y=1;Y<arguments.length;Y++){var X=arguments[Y];for(var K in X)Object.prototype.hasOwnProperty.call(X,K)&&(H[K]=X[K])}return H},a=r(1),l=(s(a),r(6)),c=s(l),d=r(7),h=s(d),f=r(8),p=s(f),_=r(9),y=s(_),m=r(10),u=s(m),g=r(11),v=s(g),x=r(14),P=s(x),C=[],A=!1,T={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},w=function(){var H=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(H&&(A=!0),A)return C=(0,v.default)(C,T),(0,u.default)(C,T.once),C},S=function(){C=(0,P.default)(),w()},L=function(){C.forEach(function(H,Y){H.node.removeAttribute("data-aos"),H.node.removeAttribute("data-aos-easing"),H.node.removeAttribute("data-aos-duration"),H.node.removeAttribute("data-aos-delay")})},I=function(H){return H===!0||H==="mobile"&&y.default.mobile()||H==="phone"&&y.default.phone()||H==="tablet"&&y.default.tablet()||typeof H=="function"&&H()===!0},z=function(H){T=o(T,H),C=(0,P.default)();var Y=document.all&&!window.atob;return I(T.disable)||Y?L():(T.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),T.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",T.easing),document.querySelector("body").setAttribute("data-aos-duration",T.duration),document.querySelector("body").setAttribute("data-aos-delay",T.delay),T.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?w(!0):T.startEvent==="load"?window.addEventListener(T.startEvent,function(){w(!0)}):document.addEventListener(T.startEvent,function(){w(!0)}),window.addEventListener("resize",(0,h.default)(w,T.debounceDelay,!0)),window.addEventListener("orientationchange",(0,h.default)(w,T.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,u.default)(C,T.once)},T.throttleDelay)),T.disableMutationObserver||p.default.ready("[data-aos]",S),C)};n.exports={init:z,refresh:w,refreshHard:S}},function(n,i){},,,,,function(n,i){(function(r){function s(I,z,H){function Y(N){var ot=W,Ue=te;return W=te=void 0,we=N,ne=I.apply(Ue,ot)}function X(N){return we=N,pe=setTimeout(q,z),Je?Y(N):ne}function K(N){var ot=N-Pe,Ue=N-we,Be=z-ot;return Xe?S(Be,ae-Ue):Be}function D(N){var ot=N-Pe,Ue=N-we;return Pe===void 0||ot>=z||ot<0||Xe&&Ue>=ae}function q(){var N=L();return D(N)?Z(N):void(pe=setTimeout(q,K(N)))}function Z(N){return pe=void 0,Me&&W?Y(N):(W=te=void 0,ne)}function oe(){pe!==void 0&&clearTimeout(pe),we=0,W=Pe=te=pe=void 0}function Se(){return pe===void 0?ne:Z(L())}function Ie(){var N=L(),ot=D(N);if(W=arguments,te=this,Pe=N,ot){if(pe===void 0)return X(Pe);if(Xe)return pe=setTimeout(q,z),Y(Pe)}return pe===void 0&&(pe=setTimeout(q,z)),ne}var W,te,ae,ne,pe,Pe,we=0,Je=!1,Xe=!1,Me=!0;if(typeof I!="function")throw new TypeError(f);return z=d(z)||0,a(H)&&(Je=!!H.leading,Xe="maxWait"in H,ae=Xe?w(d(H.maxWait)||0,z):ae,Me="trailing"in H?!!H.trailing:Me),Ie.cancel=oe,Ie.flush=Se,Ie}function o(I,z,H){var Y=!0,X=!0;if(typeof I!="function")throw new TypeError(f);return a(H)&&(Y="leading"in H?!!H.leading:Y,X="trailing"in H?!!H.trailing:X),s(I,z,{leading:Y,maxWait:z,trailing:X})}function a(I){var z=typeof I>"u"?"undefined":h(I);return!!I&&(z=="object"||z=="function")}function l(I){return!!I&&(typeof I>"u"?"undefined":h(I))=="object"}function c(I){return(typeof I>"u"?"undefined":h(I))=="symbol"||l(I)&&T.call(I)==_}function d(I){if(typeof I=="number")return I;if(c(I))return p;if(a(I)){var z=typeof I.valueOf=="function"?I.valueOf():I;I=a(z)?z+"":z}if(typeof I!="string")return I===0?I:+I;I=I.replace(y,"");var H=u.test(I);return H||g.test(I)?v(I.slice(2),H?2:8):m.test(I)?p:+I}var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I},f="Expected a function",p=NaN,_="[object Symbol]",y=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,g=/^0o[0-7]+$/i,v=parseInt,x=(typeof r>"u"?"undefined":h(r))=="object"&&r&&r.Object===Object&&r,P=(typeof self>"u"?"undefined":h(self))=="object"&&self&&self.Object===Object&&self,C=x||P||Function("return this")(),A=Object.prototype,T=A.toString,w=Math.max,S=Math.min,L=function(){return C.Date.now()};n.exports=o}).call(i,function(){return this}())},function(n,i){(function(r){function s(L,I,z){function H(Me){var N=Ie,ot=W;return Ie=W=void 0,Pe=Me,ae=L.apply(ot,N)}function Y(Me){return Pe=Me,ne=setTimeout(D,I),we?H(Me):ae}function X(Me){var N=Me-pe,ot=Me-Pe,Ue=I-N;return Je?w(Ue,te-ot):Ue}function K(Me){var N=Me-pe,ot=Me-Pe;return pe===void 0||N>=I||N<0||Je&&ot>=te}function D(){var Me=S();return K(Me)?q(Me):void(ne=setTimeout(D,X(Me)))}function q(Me){return ne=void 0,Xe&&Ie?H(Me):(Ie=W=void 0,ae)}function Z(){ne!==void 0&&clearTimeout(ne),Pe=0,Ie=pe=W=ne=void 0}function oe(){return ne===void 0?ae:q(S())}function Se(){var Me=S(),N=K(Me);if(Ie=arguments,W=this,pe=Me,N){if(ne===void 0)return Y(pe);if(Je)return ne=setTimeout(D,I),H(pe)}return ne===void 0&&(ne=setTimeout(D,I)),ae}var Ie,W,te,ae,ne,pe,Pe=0,we=!1,Je=!1,Xe=!0;if(typeof L!="function")throw new TypeError(h);return I=c(I)||0,o(z)&&(we=!!z.leading,Je="maxWait"in z,te=Je?T(c(z.maxWait)||0,I):te,Xe="trailing"in z?!!z.trailing:Xe),Se.cancel=Z,Se.flush=oe,Se}function o(L){var I=typeof L>"u"?"undefined":d(L);return!!L&&(I=="object"||I=="function")}function a(L){return!!L&&(typeof L>"u"?"undefined":d(L))=="object"}function l(L){return(typeof L>"u"?"undefined":d(L))=="symbol"||a(L)&&A.call(L)==p}function c(L){if(typeof L=="number")return L;if(l(L))return f;if(o(L)){var I=typeof L.valueOf=="function"?L.valueOf():L;L=o(I)?I+"":I}if(typeof L!="string")return L===0?L:+L;L=L.replace(_,"");var z=m.test(L);return z||u.test(L)?g(L.slice(2),z?2:8):y.test(L)?f:+L}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},h="Expected a function",f=NaN,p="[object Symbol]",_=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,u=/^0o[0-7]+$/i,g=parseInt,v=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,x=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,P=v||x||Function("return this")(),C=Object.prototype,A=C.toString,T=Math.max,w=Math.min,S=function(){return P.Date.now()};n.exports=s}).call(i,function(){return this}())},function(n,i){function r(d){var h=void 0,f=void 0;for(h=0;h<d.length;h+=1)if(f=d[h],f.dataset&&f.dataset.aos||f.children&&r(f.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!s()}function a(d,h){var f=window.document,p=s(),_=new p(l);c=h,_.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(d){d&&d.forEach(function(h){var f=Array.prototype.slice.call(h.addedNodes),p=Array.prototype.slice.call(h.removedNodes),_=f.concat(p);if(r(_))return c()})}Object.defineProperty(i,"__esModule",{value:!0});var c=function(){};i.default={isSupported:o,ready:a}},function(n,i){function r(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function f(p,_){for(var y=0;y<_.length;y++){var m=_[y];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(p,m.key,m)}}return function(p,_,y){return _&&f(p.prototype,_),y&&f(p,y),p}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,h=function(){function f(){r(this,f)}return o(f,[{key:"phone",value:function(){var p=s();return!(!a.test(p)&&!l.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=s();return!(!c.test(p)&&!d.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();i.default=new h},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(o,a,l){var c=o.node.getAttribute("data-aos-once");a>o.position?o.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!l&&c!=="true")&&o.node.classList.remove("aos-animate")},s=function(o,a){var l=window.pageYOffset,c=window.innerHeight;o.forEach(function(d,h){r(d,c+l,a)})};i.default=s},function(n,i,r){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(12),a=s(o),l=function(c,d){return c.forEach(function(h,f){h.node.classList.add("aos-init"),h.position=(0,a.default)(h.node,d.offset)}),c};i.default=l},function(n,i,r){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(13),a=s(o),l=function(c,d){var h=0,f=0,p=window.innerHeight,_={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(_.offset&&!isNaN(_.offset)&&(f=parseInt(_.offset)),_.anchor&&document.querySelectorAll(_.anchor)&&(c=document.querySelectorAll(_.anchor)[0]),h=(0,a.default)(c).top,_.anchorPlacement){case"top-bottom":break;case"center-bottom":h+=c.offsetHeight/2;break;case"bottom-bottom":h+=c.offsetHeight;break;case"top-center":h+=p/2;break;case"bottom-center":h+=p/2+c.offsetHeight;break;case"center-center":h+=p/2+c.offsetHeight/2;break;case"top-top":h+=p;break;case"bottom-top":h+=c.offsetHeight+p;break;case"center-top":h+=c.offsetHeight/2+p}return _.anchorPlacement||_.offset||isNaN(d)||(f=d),h+f};i.default=l},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){for(var o=0,a=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)o+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),a+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:a,left:o}};i.default=r},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(o){return{node:o}})};i.default=r}])})})(xg);var Sy=xg.exports;const My=cv(Sy),Ey=({data:t})=>b.jsx("section",{id:"projects",className:"py-28 md:py-48",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsxs("div",{className:"mb-16","data-aos":"fade-up",children:[b.jsx("h2",{className:"text-3xl font-bold text-cyan-100 sm:text-4xl",style:{fontFamily:"Orbitron, sans-serif"},children:"Archive"}),b.jsx("div",{className:"mt-4 h-1 w-24 bg-cyan-300"}),b.jsx("p",{className:"mt-4 text-xl text-cyan-50/70",children:"A big list of things I've worked on"})]}),b.jsxs("div",{className:"md:space-y-4 space-y-8",children:[b.jsxs("div",{className:"relative md:grid md:grid-cols-12 md:gap-4 hidden border-b border-cyan-200/30 pb-4","data-aos":"fade",children:[b.jsx("div",{className:"col-span-1 row-span-full",children:b.jsx("p",{className:"text-cyan-200 font-bold text-lg",children:"Year"})}),b.jsx("div",{className:"col-span-4 row-span-full",children:b.jsx("p",{className:"text-cyan-200 font-bold text-lg",children:"Title"})}),b.jsx("div",{className:"col-span-5 row-span-full",children:b.jsx("p",{className:"text-cyan-200 font-bold text-lg",children:"Built with"})}),b.jsx("div",{className:"col-span-2 row-span-full",children:b.jsx("p",{className:"text-cyan-200 font-bold text-lg",children:"Link"})})]}),t.map((e,n)=>b.jsxs("div",{className:"tech-card relative grid grid-cols-12 md:gap-4 gap-1 border border-cyan-100/20 bg-slate-950/35 p-4","data-aos":"fade","data-aos-duration":"2000","data-aos-anchor-placement":"bottom-bottom",children:[b.jsx("div",{className:"md:col-span-1 col-span-6 md:order-1 order-1 md:row-span-full row-span-1",children:b.jsx("p",{className:"text-cyan-200 font-semibold",children:e.year})}),b.jsx("div",{className:"md:col-span-4 col-span-12 md:order-2 order-3 md:row-span-full row-span-1",children:b.jsx("p",{className:"text-cyan-50 font-medium",children:e.title})}),b.jsx("div",{className:"md:col-span-5 col-span-12 md:order-3 order-4 md:row-span-full row-span-1",children:b.jsx("p",{className:"text-cyan-50/70 text-sm",children:e.tech.join(", ")})}),b.jsxs("div",{className:"md:col-span-1 col-span-6 md:order-4 order-2 md:row-span-full row-span-1 flex gap-3 justify-end md:justify-normal",children:[e.demo&&b.jsx("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-100 hover:text-cyan-300 transition duration-300 ease-in-out",children:b.jsx(zu,{})}),e.github&&b.jsx("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"md:ml-auto text-cyan-100 hover:text-cyan-300 transition duration-300 ease-in-out",children:b.jsx(Co,{})})]})]},n+e.title))]})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="173",wy=0,np=1,Ty=2,yg=1,Ay=2,oi=3,Yi=0,sn=1,ci=2,Wi=0,ds=1,ip=2,rp=3,sp=4,Cy=5,dr=100,by=101,Ry=102,Py=103,Ly=104,Ny=200,Dy=201,Iy=202,Uy=203,Hu=204,Vu=205,Fy=206,Oy=207,ky=208,zy=209,By=210,Hy=211,Vy=212,Gy=213,Wy=214,Gu=0,Wu=1,ju=2,Ss=3,Xu=4,qu=5,Yu=6,$u=7,Sg=0,jy=1,Xy=2,ji=0,qy=1,Yy=2,$y=3,Ky=4,Zy=5,Qy=6,Jy=7,Mg=300,Ms=301,Es=302,Ku=303,Zu=304,Fl=306,Qu=1e3,gr=1001,Ju=1002,Vn=1003,e1=1004,ra=1005,Kn=1006,mc=1007,vr=1008,yi=1009,Eg=1010,wg=1011,bo=1012,Tf=1013,Tr=1014,fi=1015,Io=1016,Af=1017,Cf=1018,ws=1020,Tg=35902,Ag=1021,Cg=1022,zn=1023,bg=1024,Rg=1025,fs=1026,Ts=1027,Pg=1028,bf=1029,Lg=1030,Rf=1031,Pf=1033,Ba=33776,Ha=33777,Va=33778,Ga=33779,ed=35840,td=35841,nd=35842,id=35843,rd=36196,sd=37492,od=37496,ad=37808,ld=37809,cd=37810,ud=37811,dd=37812,fd=37813,hd=37814,pd=37815,md=37816,gd=37817,vd=37818,_d=37819,xd=37820,yd=37821,Wa=36492,Sd=36494,Md=36495,Ng=36283,Ed=36284,wd=36285,Td=36286,t1=3200,n1=3201,Dg=0,i1=1,Di="",Sn="srgb",As="srgb-linear",gl="linear",rt="srgb",Lr=7680,op=519,r1=512,s1=513,o1=514,Ig=515,a1=516,l1=517,c1=518,u1=519,ap=35044,lp="300 es",hi=2e3,vl=2001;class Ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=Math.PI/180,Ad=180/Math.PI;function Uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ve(t,e,n){return Math.max(e,Math.min(n,t))}function d1(t,e){return(t%e+e)%e}function vc(t,e,n){return(1-n)*t+n*e}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],_=i[8],y=r[0],m=r[3],u=r[6],g=r[1],v=r[4],x=r[7],P=r[2],C=r[5],A=r[8];return s[0]=o*y+a*g+l*P,s[3]=o*m+a*v+l*C,s[6]=o*u+a*x+l*A,s[1]=c*y+d*g+h*P,s[4]=c*m+d*v+h*C,s[7]=c*u+d*x+h*A,s[2]=f*y+p*g+_*P,s[5]=f*m+p*v+_*C,s[8]=f*u+p*x+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,p=c*s-o*l,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_c.makeScale(e,n)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,n){return this.premultiply(_c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new Oe;function Ug(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _l(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function f1(){const t=_l("canvas");return t.style.display="block",t}const cp={};function jr(t){t in cp||(cp[t]=!0,console.warn(t))}function h1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function p1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function m1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const up=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dp=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function g1(){const t={enabled:!0,workingColorSpace:As,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Di?gl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[As]:{primaries:e,whitePoint:i,transfer:gl,toXYZ:up,fromXYZ:dp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:up,fromXYZ:dp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),t}const Ze=g1();function mi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class v1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=_l("canvas")),Nr.width=e.width,Nr.height=e.height;const i=Nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Nr}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_l("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mi(n[i]/255)*255):n[i]=mi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _1=0;class Fg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xc(r[o].image)):s.push(xc(r[o]))}else s=xc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?v1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x1=0;class on extends Ls{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=gr,r=gr,s=Kn,o=vr,a=zn,l=yi,c=on.DEFAULT_ANISOTROPY,d=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Uo(),this.name="",this.source=new Fg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qu:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Ju:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qu:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Ju:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Mg;on.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(p+1)/2,P=(u+1)/2,C=(d+f)/4,A=(h+y)/4,T=(_+m)/4;return v>x&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=A/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=T/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=T/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(h-y)/g,this.z=(f-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this.z=Ve(this.z,e.z,n.z),this.w=Ve(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this.z=Ve(this.z,e,n),this.w=Ve(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y1 extends Ls{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Fg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends y1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Og extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class S1 extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==f||c!==p||d!==_){let m=1-a;const u=l*f+c*p+d*_+h*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,u*g);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const x=a*g;if(l=l*m+f*x,c=c*m+p*x,d=d*m+_*x,h=h*m+y*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=P,c*=P,d*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+d*h+l*p-c*f,e[n+1]=l*_+d*f+c*h-a*p,e[n+2]=c*_+d*p+a*f-l*h,e[n+3]=d*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"YZX":this._x=f*d*h+c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h-f*p*_;break;case"XZY":this._x=f*d*h-c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this.z=Ve(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this.z=Ve(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new k,fp=new Fo;class Oo{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sa.copy(i.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),oa.subVectors(this.max,Ws),Dr.subVectors(e.a,Ws),Ir.subVectors(e.b,Ws),Ur.subVectors(e.c,Ws),Ei.subVectors(Ir,Dr),wi.subVectors(Ur,Ir),tr.subVectors(Dr,Ur);let n=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-tr.z,tr.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,tr.z,0,-tr.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-tr.y,tr.x,0];return!Sc(n,Dr,Ir,Ur,oa)||(n=[1,0,0,0,1,0,0,0,1],!Sc(n,Dr,Ir,Ur,oa))?!1:(aa.crossVectors(Ei,wi),n=[aa.x,aa.y,aa.z],Sc(n,Dr,Ir,Ur,oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new k,new k,new k,new k,new k,new k,new k,new k],Nn=new k,sa=new Oo,Dr=new k,Ir=new k,Ur=new k,Ei=new k,wi=new k,tr=new k,Ws=new k,oa=new k,aa=new k,nr=new k;function Sc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){nr.fromArray(t,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=n.dot(nr),d=i.dot(nr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const M1=new Oo,js=new k,Mc=new k;class Ol{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):M1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const n=js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Mc)),this.expandByPoint(js.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new k,Ec=new k,la=new k,Ti=new k,wc=new k,ca=new k,Tc=new k;class kg{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ec.copy(e).add(n).multiplyScalar(.5),la.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Ec);const s=e.distanceTo(n)*.5,o=-this.direction.dot(la),a=Ti.dot(this.direction),l=-Ti.dot(la),c=Ti.lengthSq(),d=Math.abs(1-o*o);let h,f,p,_;if(d>0)if(h=o*l-a,f=o*a-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const y=1/d;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ec).addScaledVector(la,f),p}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){wc.subVectors(n,e),ca.subVectors(i,e),Tc.crossVectors(wc,ca);let o=this.direction.dot(Tc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(ca.crossVectors(Ti,ca));if(l<0)return null;const c=a*this.direction.dot(wc.cross(Ti));if(c<0||l+c>o)return null;const d=-a*Ti.dot(Tc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,p,_,y,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,p,_,y,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,p,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*h,_=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,_=c*d,y=c*h;n[0]=f+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-_,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,_=c*d,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*h,_=a*d,y=a*h;n[0]=l*d,n[4]=_*c-p,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=y-f*h,n[8]=_*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*h+_,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=o*d,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E1,e,w1)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ai.crossVectors(i,ln),Ai.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ai.crossVectors(i,ln)),Ai.normalize(),ua.crossVectors(ln,Ai),r[0]=Ai.x,r[4]=ua.x,r[8]=ln.x,r[1]=Ai.y,r[5]=ua.y,r[9]=ln.y,r[2]=Ai.z,r[6]=ua.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],_=i[2],y=i[6],m=i[10],u=i[14],g=i[3],v=i[7],x=i[11],P=i[15],C=r[0],A=r[4],T=r[8],w=r[12],S=r[1],L=r[5],I=r[9],z=r[13],H=r[2],Y=r[6],X=r[10],K=r[14],D=r[3],q=r[7],Z=r[11],oe=r[15];return s[0]=o*C+a*S+l*H+c*D,s[4]=o*A+a*L+l*Y+c*q,s[8]=o*T+a*I+l*X+c*Z,s[12]=o*w+a*z+l*K+c*oe,s[1]=d*C+h*S+f*H+p*D,s[5]=d*A+h*L+f*Y+p*q,s[9]=d*T+h*I+f*X+p*Z,s[13]=d*w+h*z+f*K+p*oe,s[2]=_*C+y*S+m*H+u*D,s[6]=_*A+y*L+m*Y+u*q,s[10]=_*T+y*I+m*X+u*Z,s[14]=_*w+y*z+m*K+u*oe,s[3]=g*C+v*S+x*H+P*D,s[7]=g*A+v*L+x*Y+P*q,s[11]=g*T+v*I+x*X+P*Z,s[15]=g*w+v*z+x*K+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*d-s*l*d)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],u=e[15],g=h*m*c-y*f*c+y*l*p-a*m*p-h*l*u+a*f*u,v=_*f*c-d*m*c-_*l*p+o*m*p+d*l*u-o*f*u,x=d*y*c-_*h*c+_*a*p-o*y*p-d*a*u+o*h*u,P=_*h*l-d*y*l-_*a*f+o*y*f+d*a*m-o*h*m,C=n*g+i*v+r*x+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=g*A,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*u-i*f*u)*A,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*A,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(d*m*s-_*f*s+_*r*p-n*m*p-d*r*u+n*f*u)*A,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*A,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*p+n*l*p)*A,e[8]=x*A,e[9]=(_*h*s-d*y*s-_*i*p+n*y*p+d*i*u-n*h*u)*A,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*A,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*p-n*a*p)*A,e[12]=P*A,e[13]=(d*y*r-_*h*r+_*i*f-n*y*f-d*i*m+n*h*m)*A,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,p=s*d,_=s*h,y=o*d,m=o*h,u=a*h,g=l*c,v=l*d,x=l*h,P=i.x,C=i.y,A=i.z;return r[0]=(1-(y+u))*P,r[1]=(p+x)*P,r[2]=(_-v)*P,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(f+u))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+v)*A,r[9]=(m-g)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const o=Fr.set(r[4],r[5],r[6]).length(),a=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/s,d=1/o,h=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=d,Dn.elements[5]*=d,Dn.elements[6]*=d,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,n.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===hi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===vl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,p=(i+r)*d;let _,y;if(a===hi)_=(o+s)*h,y=-2*h;else if(a===vl)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Fr=new k,Dn=new pt,E1=new k(0,0,0),w1=new k(1,1,1),Ai=new k,ua=new k,ln=new k,hp=new pt,pp=new Fo;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pp.setFromEuler(this),this.setFromQuaternion(pp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T1=0;const mp=new k,Or=new Fo,ii=new pt,da=new k,Xs=new k,A1=new k,C1=new Fo,gp=new k(1,0,0),vp=new k(0,1,0),_p=new k(0,0,1),xp={type:"added"},b1={type:"removed"},kr={type:"childadded",child:null},Ac={type:"childremoved",child:null};class Yt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new k,n=new Jn,i=new Fo,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Oe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(gp,e)}rotateY(e){return this.rotateOnAxis(vp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,n){return mp.copy(e).applyQuaternion(this.quaternion),this.position.add(mp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gp,e)}translateY(e){return this.translateOnAxis(vp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?da.copy(e):da.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Xs,da,this.up):ii.lookAt(da,Xs,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ii),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xp),kr.child=e,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(b1),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xp),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,A1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,C1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new k(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new k,ri=new k,Cc=new k,si=new k,zr=new k,Br=new k,yp=new k,bc=new k,Rc=new k,Pc=new k,Lc=new st,Nc=new st,Dc=new st;class kn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ri.subVectors(i,n),Cc.subVectors(e,n);const o=In.dot(In),a=In.dot(ri),l=In.dot(Cc),c=ri.dot(ri),d=ri.dot(Cc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Lc.setScalar(0),Nc.setScalar(0),Dc.setScalar(0),Lc.fromBufferAttribute(e,n),Nc.fromBufferAttribute(e,i),Dc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Lc,s.x),o.addScaledVector(Nc,s.y),o.addScaledVector(Dc,s.z),o}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ri.subVectors(e,n),In.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),In.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;zr.subVectors(r,i),Br.subVectors(s,i),bc.subVectors(e,i);const l=zr.dot(bc),c=Br.dot(bc);if(l<=0&&c<=0)return n.copy(i);Rc.subVectors(e,r);const d=zr.dot(Rc),h=Br.dot(Rc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(zr,o);Pc.subVectors(e,s);const p=zr.dot(Pc),_=Br.dot(Pc);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Br,a);const m=d*_-p*h;if(m<=0&&h-d>=0&&p-_>=0)return yp.subVectors(s,r),a=(h-d)/(h-d+(p-_)),n.copy(r).addScaledVector(yp,a);const u=1/(m+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(zr,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Ic(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=d1(e,1),n=Ve(n,0,1),i=Ve(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ic(o,s,e+1/3),this.g=Ic(o,s,e),this.b=Ic(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sn){const i=Bg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Ze.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Ve(Ht.r*255,0,255))*65536+Math.round(Ve(Ht.g*255,0,255))*256+Math.round(Ve(Ht.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Sn){Ze.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(fa);const i=vc(Ci.h,fa.h,n),r=vc(Ci.s,fa.s,n),s=vc(Ci.l,fa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new We;We.NAMES=Bg;let R1=0;class Ns extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=ds,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=Vu,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hu&&(i.blendSrc=this.blendSrc),this.blendDst!==Vu&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==op&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hg extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new k,ha=new Ge;let P1=0;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:P1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ap,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ha.fromBufferAttribute(this,n),ha.applyMatrix3(e),this.setXY(n,ha.x,ha.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ap&&(e.usage=this.usage),e}}class Vg extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gg extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pn extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let L1=0;const yn=new pt,Uc=new Yt,Hr=new k,cn=new Oo,qs=new Oo,Pt=new k;class jn extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ug(e)?Gg:Vg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(cn.min,qs.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,qs.max),cn.expandByPoint(Pt)):(cn.expandByPoint(qs.min),cn.expandByPoint(qs.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Pt.fromBufferAttribute(a,c),l&&(Hr.fromBufferAttribute(e,c),Pt.add(Hr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<i.count;T++)a[T]=new k,l[T]=new k;const c=new k,d=new k,h=new k,f=new Ge,p=new Ge,_=new Ge,y=new k,m=new k;function u(T,w,S){c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,S),d.sub(c),h.sub(c),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(L),a[T].add(y),a[w].add(y),a[S].add(y),l[T].add(m),l[w].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let T=0,w=g.length;T<w;++T){const S=g[T],L=S.start,I=S.count;for(let z=L,H=L+I;z<H;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new k,x=new k,P=new k,C=new k;function A(T){P.fromBufferAttribute(r,T),C.copy(P);const w=a[T];v.copy(w),v.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(C,w);const L=x.dot(l[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,L)}for(let T=0,w=g.length;T<w;++T){const S=g[T],L=S.start,I=S.count;for(let z=L,H=L+I;z<H;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,d=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let u=0;u<d;u++)f[_++]=c[p++]}return new Gn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sp=new pt,ir=new kg,pa=new Ol,Mp=new k,ma=new k,ga=new k,va=new k,Fc=new k,_a=new k,Ep=new k,xa=new k;class Tn extends Yt{constructor(e=new jn,n=new Hg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Fc.fromBufferAttribute(h,e),o?_a.addScaledVector(Fc,d):_a.addScaledVector(Fc.sub(n),d))}n.add(_a)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(pa.containsPoint(ir.origin)===!1&&(ir.intersectSphere(pa,Mp)===null||ir.origin.distanceToSquared(Mp)>(e.far-e.near)**2))&&(Sp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Sp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,P=v;x<P;x+=3){const C=a.getX(x),A=a.getX(x+1),T=a.getX(x+2);r=ya(this,u,e,i,c,d,h,C,A,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const g=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=ya(this,o,e,i,c,d,h,g,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,P=v;x<P;x+=3){const C=x,A=x+1,T=x+2;r=ya(this,u,e,i,c,d,h,C,A,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const g=m,v=m+1,x=m+2;r=ya(this,o,e,i,c,d,h,g,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function N1(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;xa.copy(a),xa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xa);return c<n.near||c>n.far?null:{distance:c,point:xa.clone(),object:t}}function ya(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ma),t.getVertexPosition(l,ga),t.getVertexPosition(c,va);const d=N1(t,e,n,i,ma,ga,va,Ep);if(d){const h=new k;kn.getBarycoord(Ep,ma,ga,va,h),r&&(d.uv=kn.getInterpolatedAttribute(r,a,l,c,h,new Ge)),s&&(d.uv1=kn.getInterpolatedAttribute(s,a,l,c,h,new Ge)),o&&(d.normal=kn.getInterpolatedAttribute(o,a,l,c,h,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};kn.getNormal(ma,ga,va,f.normal),d.face=f,d.barycoord=h}return d}class ko extends jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(h,2));function _(y,m,u,g,v,x,P,C,A,T,w){const S=x/A,L=P/T,I=x/2,z=P/2,H=C/2,Y=A+1,X=T+1;let K=0,D=0;const q=new k;for(let Z=0;Z<X;Z++){const oe=Z*L-z;for(let Se=0;Se<Y;Se++){const Ie=Se*S-I;q[y]=Ie*g,q[m]=oe*v,q[u]=H,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[u]=C>0?1:-1,d.push(q.x,q.y,q.z),h.push(Se/A),h.push(1-Z/T),K+=1}}for(let Z=0;Z<T;Z++)for(let oe=0;oe<A;oe++){const Se=f+oe+Y*Z,Ie=f+oe+Y*(Z+1),W=f+(oe+1)+Y*(Z+1),te=f+(oe+1)+Y*Z;l.push(Se,Ie,te),l.push(Ie,W,te),D+=6}a.addGroup(p,D,w),p+=D,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const r in i)e[r]=i[r]}return e}function D1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Wg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const I1={clone:Cs,merge:jt};var U1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U1,this.fragmentShader=F1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=D1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jg extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new k,wp=new Ge,Tp=new Ge;class dn extends jg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,n){return this.getViewBounds(e,wp,Tp),n.subVectors(Tp,wp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vr=-90,Gr=1;class O1 extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Vr,Gr,e,n);r.layers=this.layers,this.add(r);const s=new dn(Vr,Gr,e,n);s.layers=this.layers,this.add(s);const o=new dn(Vr,Gr,e,n);o.layers=this.layers,this.add(o);const a=new dn(Vr,Gr,e,n);a.layers=this.layers,this.add(a);const l=new dn(Vr,Gr,e,n);l.layers=this.layers,this.add(l);const c=new dn(Vr,Gr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Xg extends on{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ms,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class k1 extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ko(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Wi});s.uniforms.tEquirect.value=n;const o=new Tn(r,s),a=n.minFilter;return n.minFilter===vr&&(n.minFilter=Kn),new O1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Sa extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z1={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class B1 extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const kc=new k,H1=new k,V1=new Oe;class cr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=kc.subVectors(i,n).cross(H1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||V1.getNormalMatrix(e),r=this.coplanarPoint(kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Ol,Ma=new k;class Lf{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],p=r[8],_=r[9],y=r[10],m=r[11],u=r[12],g=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-u).normalize(),i[1].setComponents(l+s,f+c,m+p,x+u).normalize(),i[2].setComponents(l+o,f+d,m+_,x+g).normalize(),i[3].setComponents(l-o,f-d,m-_,x-g).normalize(),i[4].setComponents(l-a,f-h,m-y,x-v).normalize(),n===hi)i[5].setComponents(l+a,f+h,m+y,x+v).normalize();else if(n===vl)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ma.x=r.normal.x>0?e.max.x:e.min.x,Ma.y=r.normal.y>0?e.max.y:e.min.y,Ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qg extends Ns{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ap=new pt,Cd=new kg,Ea=new Ol,wa=new k;class G1 extends Yt{constructor(e=new jn,n=new qg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,e.ray.intersectsSphere(Ea)===!1)return;Ap.copy(r).invert(),Cd.copy(e.ray).applyMatrix4(Ap);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,y=p;_<y;_++){const m=c.getX(_);wa.fromBufferAttribute(h,m),Cp(wa,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,y=p;_<y;_++)wa.fromBufferAttribute(h,_),Cp(wa,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cp(t,e,n,i,r,s,o){const a=Cd.distanceSqToPoint(t);if(a<n){const l=new k;Cd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Yg extends on{constructor(e,n,i,r,s,o,a,l,c,d=fs){if(d!==fs&&d!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===fs&&(i=Tr),i===void 0&&d===Ts&&(i=ws),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class kl extends jn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new pn(s,3)),this.setAttribute("normal",new pn(s.slice(),3)),this.setAttribute("uv",new pn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new k,x=new k,P=new k;for(let C=0;C<n.length;C+=3)p(n[C+0],v),p(n[C+1],x),p(n[C+2],P),l(v,x,P,g)}function l(g,v,x,P){const C=P+1,A=[];for(let T=0;T<=C;T++){A[T]=[];const w=g.clone().lerp(x,T/C),S=v.clone().lerp(x,T/C),L=C-T;for(let I=0;I<=L;I++)I===0&&T===C?A[T][I]=w:A[T][I]=w.clone().lerp(S,I/L)}for(let T=0;T<C;T++)for(let w=0;w<2*(C-T)-1;w++){const S=Math.floor(w/2);w%2===0?(f(A[T][S+1]),f(A[T+1][S]),f(A[T][S])):(f(A[T][S+1]),f(A[T+1][S+1]),f(A[T+1][S]))}}function c(g){const v=new k;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(g),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function d(){const g=new k;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const x=m(g)/2/Math.PI+.5,P=u(g)/Math.PI+.5;o.push(x,1-P)}_(),h()}function h(){for(let g=0;g<o.length;g+=6){const v=o[g+0],x=o[g+2],P=o[g+4],C=Math.max(v,x,P),A=Math.min(v,x,P);C>.9&&A<.1&&(v<.2&&(o[g+0]+=1),x<.2&&(o[g+2]+=1),P<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,v){const x=g*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function _(){const g=new k,v=new k,x=new k,P=new k,C=new Ge,A=new Ge,T=new Ge;for(let w=0,S=0;w<s.length;w+=9,S+=6){g.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),C.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),T.set(o[S+4],o[S+5]),P.copy(g).add(v).add(x).divideScalar(3);const L=m(P);y(C,S+0,g,L),y(A,S+2,v,L),y(T,S+4,x,L)}}function y(g,v,x,P){P<0&&g.x===1&&(o[v]=g.x-1),x.x===0&&x.z===0&&(o[v]=P/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.vertices,e.indices,e.radius,e.details)}}class Nf extends kl{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Nf(e.radius,e.detail)}}class Df extends kl{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Df(e.radius,e.detail)}}class zl extends jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,p=[],_=[],y=[],m=[];for(let u=0;u<d;u++){const g=u*f-o;for(let v=0;v<c;v++){const x=v*h-s;_.push(x,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,x=g+c*(u+1),P=g+1+c*(u+1),C=g+1+c*u;p.push(v,x,C),p.push(x,P,C)}this.setIndex(p),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class If extends jn{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],d=[],h=new k,f=new k,p=new k,_=new k,y=new k,m=new k,u=new k;for(let v=0;v<=i;++v){const x=v/i*s*Math.PI*2;g(x,s,o,e,p),g(x+.01,s,o,e,_),m.subVectors(_,p),u.addVectors(_,p),y.crossVectors(m,u),u.crossVectors(y,m),y.normalize(),u.normalize();for(let P=0;P<=r;++P){const C=P/r*Math.PI*2,A=-n*Math.cos(C),T=n*Math.sin(C);h.x=p.x+(A*u.x+T*y.x),h.y=p.y+(A*u.y+T*y.y),h.z=p.z+(A*u.z+T*y.z),l.push(h.x,h.y,h.z),f.subVectors(h,p).normalize(),c.push(f.x,f.y,f.z),d.push(v/i),d.push(P/r)}}for(let v=1;v<=i;v++)for(let x=1;x<=r;x++){const P=(r+1)*(v-1)+(x-1),C=(r+1)*v+(x-1),A=(r+1)*v+x,T=(r+1)*(v-1)+x;a.push(P,C,T),a.push(C,A,T)}this.setIndex(a),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(c,3)),this.setAttribute("uv",new pn(d,2));function g(v,x,P,C,A){const T=Math.cos(v),w=Math.sin(v),S=P/x*v,L=Math.cos(S);A.x=C*(2+L)*.5*T,A.y=C*(2+L)*w*.5,A.z=C*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new If(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class $g extends Ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dg,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W1 extends $g{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class j1 extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X1 extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kg extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const zc=new pt,bp=new k,Rp=new k;class q1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lf,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;bp.setFromMatrixPosition(e.matrixWorld),n.position.copy(bp),Rp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rp),n.updateMatrixWorld(),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pp=new pt,Ys=new k,Bc=new k;class Y1 extends q1{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ys),Bc.copy(i.position),Bc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Bc),i.updateMatrixWorld(),r.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Pp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pp)}}class Lp extends Kg{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Y1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $1 extends jg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class K1 extends Kg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Z1 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Q1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Np(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Np();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Np(){return performance.now()}function Dp(t,e,n,i){const r=J1(i);switch(n){case Ag:return t*e;case bg:return t*e;case Rg:return t*e*2;case Pg:return t*e/r.components*r.byteLength;case bf:return t*e/r.components*r.byteLength;case Lg:return t*e*2/r.components*r.byteLength;case Rf:return t*e*2/r.components*r.byteLength;case Cg:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case Pf:return t*e*4/r.components*r.byteLength;case Ba:case Ha:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ga:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case td:case id:return Math.max(t,16)*Math.max(e,8)/4;case ed:case nd:return Math.max(t,8)*Math.max(e,8)/2;case rd:case sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ud:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wa:case Sd:case Md:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ng:case Ed:return Math.ceil(t/4)*Math.ceil(e/4)*8;case wd:case Td:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function J1(t){switch(t){case yi:case Eg:return{byteLength:1,components:1};case bo:case wg:case Io:return{byteLength:2,components:1};case Af:case Cf:return{byteLength:2,components:4};case Tr:case Tf:case fi:return{byteLength:4,components:1};case Tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function e2(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var t2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,u2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,v2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,w2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,C2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L2="gl_FragColor = linearToOutputTexel( gl_FragColor );",N2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,q2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Y2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ES=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,US=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$S=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:t2,alphahash_pars_fragment:n2,alphamap_fragment:i2,alphamap_pars_fragment:r2,alphatest_fragment:s2,alphatest_pars_fragment:o2,aomap_fragment:a2,aomap_pars_fragment:l2,batching_pars_vertex:c2,batching_vertex:u2,begin_vertex:d2,beginnormal_vertex:f2,bsdfs:h2,iridescence_fragment:p2,bumpmap_pars_fragment:m2,clipping_planes_fragment:g2,clipping_planes_pars_fragment:v2,clipping_planes_pars_vertex:_2,clipping_planes_vertex:x2,color_fragment:y2,color_pars_fragment:S2,color_pars_vertex:M2,color_vertex:E2,common:w2,cube_uv_reflection_fragment:T2,defaultnormal_vertex:A2,displacementmap_pars_vertex:C2,displacementmap_vertex:b2,emissivemap_fragment:R2,emissivemap_pars_fragment:P2,colorspace_fragment:L2,colorspace_pars_fragment:N2,envmap_fragment:D2,envmap_common_pars_fragment:I2,envmap_pars_fragment:U2,envmap_pars_vertex:F2,envmap_physical_pars_fragment:q2,envmap_vertex:O2,fog_vertex:k2,fog_pars_vertex:z2,fog_fragment:B2,fog_pars_fragment:H2,gradientmap_pars_fragment:V2,lightmap_pars_fragment:G2,lights_lambert_fragment:W2,lights_lambert_pars_fragment:j2,lights_pars_begin:X2,lights_toon_fragment:Y2,lights_toon_pars_fragment:$2,lights_phong_fragment:K2,lights_phong_pars_fragment:Z2,lights_physical_fragment:Q2,lights_physical_pars_fragment:J2,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:oS,map_fragment:aS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:uS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:fS,morphinstance_vertex:hS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:vS,normal_fragment_begin:_S,normal_fragment_maps:xS,normal_pars_fragment:yS,normal_pars_vertex:SS,normal_vertex:MS,normalmap_pars_fragment:ES,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:TS,clearcoat_pars_fragment:AS,iridescence_pars_fragment:CS,opaque_fragment:bS,packing:RS,premultiplied_alpha_fragment:PS,project_vertex:LS,dithering_fragment:NS,dithering_pars_fragment:DS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:US,shadowmap_pars_fragment:FS,shadowmap_pars_vertex:OS,shadowmap_vertex:kS,shadowmask_pars_fragment:zS,skinbase_vertex:BS,skinning_pars_vertex:HS,skinning_vertex:VS,skinnormal_vertex:GS,specularmap_fragment:WS,specularmap_pars_fragment:jS,tonemapping_fragment:XS,tonemapping_pars_fragment:qS,transmission_fragment:YS,transmission_pars_fragment:$S,uv_pars_fragment:KS,uv_pars_vertex:ZS,uv_vertex:QS,worldpos_vertex:JS,background_vert:eM,background_frag:tM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:rM,cube_frag:sM,depth_vert:oM,depth_frag:aM,distanceRGBA_vert:lM,distanceRGBA_frag:cM,equirect_vert:uM,equirect_frag:dM,linedashed_vert:fM,linedashed_frag:hM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:vM,meshmatcap_vert:_M,meshmatcap_frag:xM,meshnormal_vert:yM,meshnormal_frag:SM,meshphong_vert:MM,meshphong_frag:EM,meshphysical_vert:wM,meshphysical_frag:TM,meshtoon_vert:AM,meshtoon_frag:CM,points_vert:bM,points_frag:RM,shadow_vert:PM,shadow_frag:LM,sprite_vert:NM,sprite_frag:DM},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Yn={basic:{uniforms:jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:jt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:jt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:jt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:jt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:jt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:jt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:jt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:jt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:jt([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:jt([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Yn.physical={uniforms:jt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ta={r:0,b:0,g:0},sr=new Jn,IM=new pt;function UM(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,d,h=null,f=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function y(v){let x=!1;const P=_(v);P===null?u(a,l):P&&P.isColor&&(u(P,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,x){const P=_(x);P&&(P.isCubeTexture||P.mapping===Fl)?(d===void 0&&(d=new Tn(new ko(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Cs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),sr.copy(x.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(IM.makeRotationFromEuler(sr)),d.material.toneMapped=Ze.getTransfer(P.colorSpace)!==rt,(h!==P||f!==P.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=P,f=P.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Tn(new zl(2,2),new $i({name:"BackgroundMaterial",uniforms:Cs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(P.colorSpace)!==rt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=P,f=P.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(Ta,Wg(t)),i.buffers.color.setClear(Ta.r,Ta.g,Ta.b,x,o)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:y,addToRenderList:m,dispose:g}}function FM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,L,I,z,H){let Y=!1;const X=h(z,I,L);s!==X&&(s=X,c(s.object)),Y=p(S,z,I,H),Y&&_(S,z,I,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(S,L,I,z),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,L,I){const z=I.wireframe===!0;let H=i[S.id];H===void 0&&(H={},i[S.id]=H);let Y=H[L.id];Y===void 0&&(Y={},H[L.id]=Y);let X=Y[z];return X===void 0&&(X=f(l()),Y[z]=X),X}function f(S){const L=[],I=[],z=[];for(let H=0;H<n;H++)L[H]=0,I[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,L,I,z){const H=s.attributes,Y=L.attributes;let X=0;const K=I.getAttributes();for(const D in K)if(K[D].location>=0){const Z=H[D];let oe=Y[D];if(oe===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function _(S,L,I,z){const H={},Y=L.attributes;let X=0;const K=I.getAttributes();for(const D in K)if(K[D].location>=0){let Z=Y[D];Z===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),H[D]=oe,X++}s.attributes=H,s.attributesNum=X,s.index=z}function y(){const S=s.newAttributes;for(let L=0,I=S.length;L<I;L++)S[L]=0}function m(S){u(S,0)}function u(S,L){const I=s.newAttributes,z=s.enabledAttributes,H=s.attributeDivisors;I[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),H[S]!==L&&(t.vertexAttribDivisor(S,L),H[S]=L)}function g(){const S=s.newAttributes,L=s.enabledAttributes;for(let I=0,z=L.length;I<z;I++)L[I]!==S[I]&&(t.disableVertexAttribArray(I),L[I]=0)}function v(S,L,I,z,H,Y,X){X===!0?t.vertexAttribIPointer(S,L,I,H,Y):t.vertexAttribPointer(S,L,I,z,H,Y)}function x(S,L,I,z){y();const H=z.attributes,Y=I.getAttributes(),X=L.defaultAttributeValues;for(const K in Y){const D=Y[K];if(D.location>=0){let q=H[K];if(q===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const Z=q.normalized,oe=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const Ie=Se.buffer,W=Se.type,te=Se.bytesPerElement,ae=W===t.INT||W===t.UNSIGNED_INT||q.gpuType===Tf;if(q.isInterleavedBufferAttribute){const ne=q.data,pe=ne.stride,Pe=q.offset;if(ne.isInstancedInterleavedBuffer){for(let we=0;we<D.locationSize;we++)u(D.location+we,ne.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let we=0;we<D.locationSize;we++)m(D.location+we);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let we=0;we<D.locationSize;we++)v(D.location+we,oe/D.locationSize,W,Z,pe*te,(Pe+oe/D.locationSize*we)*te,ae)}else{if(q.isInstancedBufferAttribute){for(let ne=0;ne<D.locationSize;ne++)u(D.location+ne,q.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ne=0;ne<D.locationSize;ne++)m(D.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let ne=0;ne<D.locationSize;ne++)v(D.location+ne,oe/D.locationSize,W,Z,oe*te,oe/D.locationSize*ne*te,ae)}}else if(X!==void 0){const Z=X[K];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(D.location,Z);break;case 3:t.vertexAttrib3fv(D.location,Z);break;case 4:t.vertexAttrib4fv(D.location,Z);break;default:t.vertexAttrib1fv(D.location,Z)}}}}g()}function P(){T();for(const S in i){const L=i[S];for(const I in L){const z=L[I];for(const H in z)d(z[H].object),delete z[H];delete L[I]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const I in L){const z=L[I];for(const H in z)d(z[H].object),delete z[H];delete L[I]}delete i[S.id]}function A(S){for(const L in i){const I=i[L];if(I[S.id]===void 0)continue;const z=I[S.id];for(const H in z)d(z[H].object),delete z[H];delete I[S.id]}}function T(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function OM(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];n.update(p,i,1)}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y]*f[y];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!T)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:P,maxSamples:C}}function zM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new cr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,v=g*4;let x=u.clippingState||null;l.value=x,x=d(_,f,v,p);for(let P=0;P!==v;++P)x[P]=n[P];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=p+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function BM(t){let e=new WeakMap;function n(o,a){return a===Ku?o.mapping=Ms:a===Zu&&(o.mapping=Es),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ku||a===Zu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new k1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const rs=4,Ip=[.125,.215,.35,.446,.526,.582],fr=20,Hc=new $1,Up=new We;let Vc=null,Gc=0,Wc=0,jc=!1;const ur=(1+Math.sqrt(5))/2,Wr=1/ur,Fp=[new k(-ur,Wr,0),new k(ur,Wr,0),new k(-Wr,0,ur),new k(Wr,0,ur),new k(0,ur,-Wr),new k(0,ur,Wr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Op{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=jc,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ms||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Io,format:zn,colorSpace:As,depthBuffer:!1},r=kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HM(s)),this._blurMaterial=VM(s,e,n)}return r}_compileMaterial(e){const n=new Tn(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,i,r){const a=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Up),d.toneMapping=ji,d.autoClear=!1;const p=new Hg({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new Tn(new ko,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Up),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Aa(r,g*v,u>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ms||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Aa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Hc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fp[(r-s-1)%Fp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Tn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fr-1),y=s/_,m=isFinite(s)?1+Math.floor(d*y):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const u=[];let g=0;for(let A=0;A<fr;++A){const T=A/y,w=Math.exp(-T*T/2);u.push(w),A===0?g+=w:A<m&&(g+=2*w)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const x=this._sizeLods[r],P=3*x*(r>v-rs?r-v+rs:0),C=4*(this._cubeSize-x);Aa(n,P,C,3*x,2*x),l.setRenderTarget(n),l.render(h,Hc)}}function HM(t){const e=[],n=[],i=[];let r=t;const s=t-rs+1+Ip.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-rs?l=Ip[o-t+rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,y=3,m=2,u=1,g=new Float32Array(y*_*p),v=new Float32Array(m*_*p),x=new Float32Array(u*_*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,T=C>2?0:-1,w=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];g.set(w,y*_*C),v.set(f,m*_*C);const S=[C,C,C,C,C,C];x.set(S,u*_*C)}const P=new jn;P.setAttribute("position",new Gn(g,y)),P.setAttribute("uv",new Gn(v,m)),P.setAttribute("faceIndex",new Gn(x,u)),e.push(P),r>rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function kp(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=Fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function VM(t,e,n){const i=new Float32Array(fr),r=new k(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function zp(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Bp(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ku||l===Zu,d=l===Ms||l===Es;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Op(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Op(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function WM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&jr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jM(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,x=g.length;v<x;v+=3){const P=g[v+0],C=g[v+1],A=g[v+2];f.push(P,C,C,A,A,P)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,x=g.length/3-1;v<x;v+=3){const P=v+0,C=v+1,A=v+2;f.push(P,C,C,A,A,P)}}else return;const m=new(Ug(f)?Gg:Vg)(f,1);m.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function XM(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*o,_),n.update(p,i,_))}function d(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function h(f,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*y[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function qM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function YM(t,e,n){const i=new WeakMap,r=new st;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*C*4*h),T=new Og(A,P,C,h);T.type=fi,T.needsUpdate=!0;const w=x*4;for(let L=0;L<h;L++){const I=u[L],z=g[L],H=v[L],Y=P*C*4*L;for(let X=0;X<I.count;X++){const K=X*w;_===!0&&(r.fromBufferAttribute(I,X),A[Y+K+0]=r.x,A[Y+K+1]=r.y,A[Y+K+2]=r.z,A[Y+K+3]=0),y===!0&&(r.fromBufferAttribute(z,X),A[Y+K+4]=r.x,A[Y+K+5]=r.y,A[Y+K+6]=r.z,A[Y+K+7]=0),m===!0&&(r.fromBufferAttribute(H,X),A[Y+K+8]=r.x,A[Y+K+9]=r.y,A[Y+K+10]=r.z,A[Y+K+11]=H.itemSize===4?r.w:1)}}f={count:h,texture:T,size:new Ge(P,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function $M(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Qg=new on,Hp=new Yg(1,1),Jg=new Og,ev=new S1,tv=new Xg,Vp=[],Gp=[],Wp=new Float32Array(16),jp=new Float32Array(9),Xp=new Float32Array(4);function Ds(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vp[r];if(s===void 0&&(s=new Float32Array(r),Vp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bl(t,e){let n=Gp[e];n===void 0&&(n=new Int32Array(e),Gp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function KM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ZM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function QM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function JM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function eE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(bt(n,i))return;Xp.set(i),t.uniformMatrix2fv(this.addr,!1,Xp),Rt(n,i)}}function tE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(bt(n,i))return;jp.set(i),t.uniformMatrix3fv(this.addr,!1,jp),Rt(n,i)}}function nE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(bt(n,i))return;Wp.set(i),t.uniformMatrix4fv(this.addr,!1,Wp),Rt(n,i)}}function iE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function rE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function sE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function oE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function aE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function cE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function uE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function dE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Hp.compareFunction=Ig,s=Hp):s=Qg,n.setTexture2D(e||s,r)}function fE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ev,r)}function hE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tv,r)}function pE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Jg,r)}function mE(t){switch(t){case 5126:return KM;case 35664:return ZM;case 35665:return QM;case 35666:return JM;case 35674:return eE;case 35675:return tE;case 35676:return nE;case 5124:case 35670:return iE;case 35667:case 35671:return rE;case 35668:case 35672:return sE;case 35669:case 35673:return oE;case 5125:return aE;case 36294:return lE;case 36295:return cE;case 36296:return uE;case 35678:case 36198:case 36298:case 36306:case 35682:return dE;case 35679:case 36299:case 36307:return fE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return pE}}function gE(t,e){t.uniform1fv(this.addr,e)}function vE(t,e){const n=Ds(e,this.size,2);t.uniform2fv(this.addr,n)}function _E(t,e){const n=Ds(e,this.size,3);t.uniform3fv(this.addr,n)}function xE(t,e){const n=Ds(e,this.size,4);t.uniform4fv(this.addr,n)}function yE(t,e){const n=Ds(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function SE(t,e){const n=Ds(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ME(t,e){const n=Ds(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function EE(t,e){t.uniform1iv(this.addr,e)}function wE(t,e){t.uniform2iv(this.addr,e)}function TE(t,e){t.uniform3iv(this.addr,e)}function AE(t,e){t.uniform4iv(this.addr,e)}function CE(t,e){t.uniform1uiv(this.addr,e)}function bE(t,e){t.uniform2uiv(this.addr,e)}function RE(t,e){t.uniform3uiv(this.addr,e)}function PE(t,e){t.uniform4uiv(this.addr,e)}function LE(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Qg,s[o])}function NE(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ev,s[o])}function DE(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||tv,s[o])}function IE(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Jg,s[o])}function UE(t){switch(t){case 5126:return gE;case 35664:return vE;case 35665:return _E;case 35666:return xE;case 35674:return yE;case 35675:return SE;case 35676:return ME;case 5124:case 35670:return EE;case 35667:case 35671:return wE;case 35668:case 35672:return TE;case 35669:case 35673:return AE;case 5125:return CE;case 36294:return bE;case 36295:return RE;case 36296:return PE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return DE;case 36289:case 36303:case 36311:case 36292:return IE}}class FE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mE(n.type)}}class OE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UE(n.type)}}class kE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function qp(t,e){t.seq.push(e),t.map[e.id]=e}function zE(t,e,n){const i=t.name,r=i.length;for(Xc.lastIndex=0;;){const s=Xc.exec(i),o=Xc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qp(n,c===void 0?new FE(a,t,e):new OE(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new kE(a),qp(n,h)),n=h}}}class ja{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);zE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Yp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const BE=37297;let HE=0;function VE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const $p=new Oe;function GE(t){Ze._getMatrix($p,Ze.workingColorSpace,t);const e=`mat3( ${$p.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case gl:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+VE(t.getShaderSource(e),o)}else return r}function WE(t,e){const n=GE(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function jE(t,e){let n;switch(e){case qy:n="Linear";break;case Yy:n="Reinhard";break;case $y:n="Cineon";break;case Ky:n="ACESFilmic";break;case Qy:n="AgX";break;case Jy:n="Neutral";break;case Zy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ca=new k;function XE(){Ze.getLuminanceCoefficients(Ca);const t=Ca.x.toFixed(4),e=Ca.y.toFixed(4),n=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function YE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $E(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Js(t){return t!==""}function Zp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KE=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(t){return t.replace(KE,QE)}const ZE=new Map;function QE(t,e){let n=ze[e];if(n===void 0){const i=ZE.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bd(n)}const JE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jp(t){return t.replace(JE,ew)}function ew(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function em(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ay?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function nw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ms:case Es:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function rw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sg:e="ENVMAP_BLENDING_MULTIPLY";break;case jy:e="ENVMAP_BLENDING_MIX";break;case Xy:e="ENVMAP_BLENDING_ADD";break}return e}function sw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ow(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=tw(n),c=nw(n),d=iw(n),h=rw(n),f=sw(n),p=qE(n),_=YE(s),y=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),u.length>0&&(u+=`
`)):(m=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),u=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?ze.tonemapping_pars_fragment:"",n.toneMapping!==ji?jE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,WE("linearToOutputTexel",n.outputColorSpace),XE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),o=bd(o),o=Zp(o,n),o=Qp(o,n),a=bd(a),a=Zp(a,n),a=Qp(a,n),o=Jp(o),a=Jp(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+m+o,x=g+u+a,P=Yp(r,r.VERTEX_SHADER,v),C=Yp(r,r.FRAGMENT_SHADER,x);r.attachShader(y,P),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(L){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(P).trim(),H=r.getShaderInfoLog(C).trim();let Y=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,C);else{const K=Kp(r,P,"vertex"),D=Kp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+K+`
`+D)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||H==="")&&(X=!1);X&&(L.diagnostics={runnable:Y,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:u}})}r.deleteShader(P),r.deleteShader(C),T=new ja(r,y),w=$E(r,y)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,BE)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=C,this}let aw=0;class lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new cw(e),n.set(e,i)),i}}class cw{constructor(e){this.id=aw++,this.code=e,this.usedTimes=0}}function uw(t,e,n,i,r,s,o){const a=new zg,l=new lw,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,I,z){const H=I.fog,Y=z.geometry,X=w.isMeshStandardMaterial?I.environment:null,K=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),D=K&&K.mapping===Fl?K.image.height:null,q=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=Z!==void 0?Z.length:0;let Se=0;Y.morphAttributes.position!==void 0&&(Se=1),Y.morphAttributes.normal!==void 0&&(Se=2),Y.morphAttributes.color!==void 0&&(Se=3);let Ie,W,te,ae;if(q){const nt=Yn[q];Ie=nt.vertexShader,W=nt.fragmentShader}else Ie=w.vertexShader,W=w.fragmentShader,l.update(w),te=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);const ne=t.getRenderTarget(),pe=t.state.buffers.depth.getReversed(),Pe=z.isInstancedMesh===!0,we=z.isBatchedMesh===!0,Je=!!w.map,Xe=!!w.matcap,Me=!!K,N=!!w.aoMap,ot=!!w.lightMap,Ue=!!w.bumpMap,Be=!!w.normalMap,Ae=!!w.displacementMap,ct=!!w.emissiveMap,Te=!!w.metalnessMap,R=!!w.roughnessMap,M=w.anisotropy>0,B=w.clearcoat>0,Q=w.dispersion>0,ee=w.iridescence>0,$=w.sheen>0,Ee=w.transmission>0,de=M&&!!w.anisotropyMap,ve=B&&!!w.clearcoatMap,qe=B&&!!w.clearcoatNormalMap,se=B&&!!w.clearcoatRoughnessMap,_e=ee&&!!w.iridescenceMap,Re=ee&&!!w.iridescenceThicknessMap,Le=$&&!!w.sheenColorMap,xe=$&&!!w.sheenRoughnessMap,je=!!w.specularMap,ke=!!w.specularColorMap,at=!!w.specularIntensityMap,U=Ee&&!!w.transmissionMap,ce=Ee&&!!w.thicknessMap,j=!!w.gradientMap,J=!!w.alphaMap,he=w.alphaTest>0,fe=!!w.alphaHash,Fe=!!w.extensions;let xt=ji;w.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(xt=t.toneMapping);const Ot={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:Ie,fragmentShader:W,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:we,batchingColor:we&&z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,instancingMorph:Pe&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:As,alphaToCoverage:!!w.alphaToCoverage,map:Je,matcap:Xe,envMap:Me,envMapMode:Me&&K.mapping,envMapCubeUVHeight:D,aoMap:N,lightMap:ot,bumpMap:Ue,normalMap:Be,displacementMap:f&&Ae,emissiveMap:ct,normalMapObjectSpace:Be&&w.normalMapType===i1,normalMapTangentSpace:Be&&w.normalMapType===Dg,metalnessMap:Te,roughnessMap:R,anisotropy:M,anisotropyMap:de,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:qe,clearcoatRoughnessMap:se,dispersion:Q,iridescence:ee,iridescenceMap:_e,iridescenceThicknessMap:Re,sheen:$,sheenColorMap:Le,sheenRoughnessMap:xe,specularMap:je,specularColorMap:ke,specularIntensityMap:at,transmission:Ee,transmissionMap:U,thicknessMap:ce,gradientMap:j,opaque:w.transparent===!1&&w.blending===ds&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:fe,combine:w.combine,mapUv:Je&&y(w.map.channel),aoMapUv:N&&y(w.aoMap.channel),lightMapUv:ot&&y(w.lightMap.channel),bumpMapUv:Ue&&y(w.bumpMap.channel),normalMapUv:Be&&y(w.normalMap.channel),displacementMapUv:Ae&&y(w.displacementMap.channel),emissiveMapUv:ct&&y(w.emissiveMap.channel),metalnessMapUv:Te&&y(w.metalnessMap.channel),roughnessMapUv:R&&y(w.roughnessMap.channel),anisotropyMapUv:de&&y(w.anisotropyMap.channel),clearcoatMapUv:ve&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:qe&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:xe&&y(w.sheenRoughnessMap.channel),specularMapUv:je&&y(w.specularMap.channel),specularColorMapUv:ke&&y(w.specularColorMap.channel),specularIntensityMapUv:at&&y(w.specularIntensityMap.channel),transmissionMapUv:U&&y(w.transmissionMap.channel),thicknessMapUv:ce&&y(w.thicknessMap.channel),alphaMapUv:J&&y(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Be||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Je||J),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:pe,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:Je&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===rt,decodeVideoTextureEmissive:ct&&w.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(w.emissiveMap.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ci,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Fe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&w.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function u(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(g(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const S=_[w.type];let L;if(S){const I=Yn[S];L=I1.clone(I.uniforms)}else L=w.uniforms;return L}function P(w,S){let L;for(let I=0,z=d.length;I<z;I++){const H=d[I];if(H.cacheKey===S){L=H,++L.usedTimes;break}}return L===void 0&&(L=new ow(t,S,w,s),d.push(L)),L}function C(w){if(--w.usedTimes===0){const S=d.indexOf(w);d[S]=d[d.length-1],d.pop(),w.destroy()}}function A(w){l.remove(w)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:P,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:T}}function dw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function fw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,_,y,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=y,u.group=m),e++,u}function a(h,f,p,_,y,m){const u=o(h,f,p,_,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,f,p,_,y,m){const u=o(h,f,p,_,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||fw),i.length>1&&i.sort(f||tm),r.length>1&&r.sort(f||tm)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function hw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new nm,t.set(i,[o])):r>=s.length?(o=new nm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function pw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new We};break;case"SpotLight":n={position:new k,direction:new k,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function mw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gw=0;function vw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _w(t){const e=new pw,n=mw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new pt,o=new pt;function a(c){let d=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,y=0,m=0,u=0,g=0,v=0,x=0,P=0,C=0,A=0;c.sort(vw);for(let w=0,S=c.length;w<S;w++){const L=c[w],I=L.color,z=L.intensity,H=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=I.r*z,h+=I.g*z,f+=I.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);A++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,D=n.get(L);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(I).multiplyScalar(z),X.distance=H,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[y]=X;const K=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,K.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[y]=K.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=Y,x++}y++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(I).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const K=L.shadow,D=n.get(L);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=L.shadow.matrix,v++}i.point[_]=X,_++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[u]=X,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const T=i.hash;(T.directionalLength!==p||T.pointLength!==_||T.spotLength!==y||T.rectAreaLength!==m||T.hemiLength!==u||T.numDirectionalShadows!==g||T.numPointShadows!==v||T.numSpotShadows!==x||T.numSpotMaps!==P||T.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,T.directionalLength=p,T.pointLength=_,T.spotLength=y,T.rectAreaLength=m,T.hemiLength=u,T.numDirectionalShadows=g,T.numPointShadows=v,T.numSpotShadows=x,T.numSpotMaps=P,T.numLightProbes=A,i.version=gw++)}function l(c,d){let h=0,f=0,p=0,_=0,y=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function im(t){const e=new _w(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new im(t),e.set(r,[a])):s>=o.length?(a=new im(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mw(t,e,n){let i=new Lf;const r=new Ge,s=new Ge,o=new st,a=new j1({depthPacking:n1}),l=new X1,c={},d=n.maxTextureSize,h={[Yi]:sn,[sn]:Yi,[ci]:ci},f=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:yw,fragmentShader:Sw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new jn;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Tn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yg;let u=this.type;this.render=function(C,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Wi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=u!==oi&&this.type===oi,H=u===oi&&this.type!==oi;for(let Y=0,X=C.length;Y<X;Y++){const K=C[Y],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const q=D.getFrameExtents();if(r.multiply(q),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/q.x),r.x=s.x*q.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/q.y),r.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null||z===!0||H===!0){const oe=this.type!==oi?{minFilter:Vn,magFilter:Vn}:{};D.map!==null&&D.map.dispose(),D.map=new Ar(r.x,r.y,oe),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Z=D.getViewportCount();for(let oe=0;oe<Z;oe++){const Se=D.getViewport(oe);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),I.viewport(o),D.updateMatrices(K,oe),i=D.getFrustum(),x(A,T,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===oi&&g(D,T),D.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,L)};function g(C,A){const T=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ar(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,T,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,T,p,y,null)}function v(C,A,T,w){let S=null;const L=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=T.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=S.uuid,z=A.uuid;let H=c[I];H===void 0&&(H={},c[I]=H);let Y=H[z];Y===void 0&&(Y=S.clone(),H[z]=Y,A.addEventListener("dispose",P)),S=Y}if(S.visible=A.visible,S.wireframe=A.wireframe,w===oi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=t.properties.get(S);I.light=T}return S}function x(C,A,T,w,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===oi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);const z=e.update(C),H=C.material;if(Array.isArray(H)){const Y=z.groups;for(let X=0,K=Y.length;X<K;X++){const D=Y[X],q=H[D.materialIndex];if(q&&q.visible){const Z=v(C,q,w,S);C.onBeforeShadow(t,C,A,T,z,Z,D),t.renderBufferDirect(T,null,z,Z,C,D),C.onAfterShadow(t,C,A,T,z,Z,D)}}}else if(H.visible){const Y=v(C,H,w,S);C.onBeforeShadow(t,C,A,T,z,Y,null),t.renderBufferDirect(T,null,z,Y,C,null),C.onAfterShadow(t,C,A,T,z,Y,null)}}const I=C.children;for(let z=0,H=I.length;z<H;z++)x(I[z],A,T,w,S)}function P(C){C.target.removeEventListener("dispose",P);for(const T in c){const w=c[T],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const Ew={[Gu]:Wu,[ju]:Yu,[Xu]:$u,[Ss]:qu,[Wu]:Gu,[Yu]:ju,[$u]:Xu,[qu]:Ss};function ww(t,e){function n(){let U=!1;const ce=new st;let j=null;const J=new st(0,0,0,0);return{setMask:function(he){j!==he&&!U&&(t.colorMask(he,he,he,he),j=he)},setLocked:function(he){U=he},setClear:function(he,fe,Fe,xt,Ot){Ot===!0&&(he*=xt,fe*=xt,Fe*=xt),ce.set(he,fe,Fe,xt),J.equals(ce)===!1&&(t.clearColor(he,fe,Fe,xt),J.copy(ce))},reset:function(){U=!1,j=null,J.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,j=null,J=null,he=null;return{setReversed:function(fe){if(ce!==fe){const Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const xt=he;he=null,this.setClear(xt)}ce=fe},getReversed:function(){return ce},setTest:function(fe){fe?ne(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(fe){j!==fe&&!U&&(t.depthMask(fe),j=fe)},setFunc:function(fe){if(ce&&(fe=Ew[fe]),J!==fe){switch(fe){case Gu:t.depthFunc(t.NEVER);break;case Wu:t.depthFunc(t.ALWAYS);break;case ju:t.depthFunc(t.LESS);break;case Ss:t.depthFunc(t.LEQUAL);break;case Xu:t.depthFunc(t.EQUAL);break;case qu:t.depthFunc(t.GEQUAL);break;case Yu:t.depthFunc(t.GREATER);break;case $u:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=fe}},setLocked:function(fe){U=fe},setClear:function(fe){he!==fe&&(ce&&(fe=1-fe),t.clearDepth(fe),he=fe)},reset:function(){U=!1,j=null,J=null,he=null,ce=!1}}}function r(){let U=!1,ce=null,j=null,J=null,he=null,fe=null,Fe=null,xt=null,Ot=null;return{setTest:function(nt){U||(nt?ne(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!U&&(t.stencilMask(nt),ce=nt)},setFunc:function(nt,Rn,ei){(j!==nt||J!==Rn||he!==ei)&&(t.stencilFunc(nt,Rn,ei),j=nt,J=Rn,he=ei)},setOp:function(nt,Rn,ei){(fe!==nt||Fe!==Rn||xt!==ei)&&(t.stencilOp(nt,Rn,ei),fe=nt,Fe=Rn,xt=ei)},setLocked:function(nt){U=nt},setClear:function(nt){Ot!==nt&&(t.clearStencil(nt),Ot=nt)},reset:function(){U=!1,ce=null,j=null,J=null,he=null,fe=null,Fe=null,xt=null,Ot=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],_=null,y=!1,m=null,u=null,g=null,v=null,x=null,P=null,C=null,A=new We(0,0,0),T=0,w=!1,S=null,L=null,I=null,z=null,H=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),X=K>=1):D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),X=K>=2);let q=null,Z={};const oe=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Ie=new st().fromArray(oe),W=new st().fromArray(Se);function te(U,ce,j,J){const he=new Uint8Array(4),fe=t.createTexture();t.bindTexture(U,fe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<j;Fe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return fe}const ae={};ae[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(Ss),Ue(!1),Be(np),ne(t.CULL_FACE),N(Wi);function ne(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function pe(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Pe(U,ce){return h[U]!==ce?(t.bindFramebuffer(U,ce),h[U]=ce,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ce),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function we(U,ce){let j=p,J=!1;if(U){j=f.get(ce),j===void 0&&(j=[],f.set(ce,j));const he=U.textures;if(j.length!==he.length||j[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Fe=he.length;fe<Fe;fe++)j[fe]=t.COLOR_ATTACHMENT0+fe;j.length=he.length,J=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,J=!0);J&&t.drawBuffers(j)}function Je(U){return _!==U?(t.useProgram(U),_=U,!0):!1}const Xe={[dr]:t.FUNC_ADD,[by]:t.FUNC_SUBTRACT,[Ry]:t.FUNC_REVERSE_SUBTRACT};Xe[Py]=t.MIN,Xe[Ly]=t.MAX;const Me={[Ny]:t.ZERO,[Dy]:t.ONE,[Iy]:t.SRC_COLOR,[Hu]:t.SRC_ALPHA,[By]:t.SRC_ALPHA_SATURATE,[ky]:t.DST_COLOR,[Fy]:t.DST_ALPHA,[Uy]:t.ONE_MINUS_SRC_COLOR,[Vu]:t.ONE_MINUS_SRC_ALPHA,[zy]:t.ONE_MINUS_DST_COLOR,[Oy]:t.ONE_MINUS_DST_ALPHA,[Hy]:t.CONSTANT_COLOR,[Vy]:t.ONE_MINUS_CONSTANT_COLOR,[Gy]:t.CONSTANT_ALPHA,[Wy]:t.ONE_MINUS_CONSTANT_ALPHA};function N(U,ce,j,J,he,fe,Fe,xt,Ot,nt){if(U===Wi){y===!0&&(pe(t.BLEND),y=!1);return}if(y===!1&&(ne(t.BLEND),y=!0),U!==Cy){if(U!==m||nt!==w){if((u!==dr||x!==dr)&&(t.blendEquation(t.FUNC_ADD),u=dr,x=dr),nt)switch(U){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ip:t.blendFunc(t.ONE,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ip:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,v=null,P=null,C=null,A.set(0,0,0),T=0,m=U,w=nt}return}he=he||ce,fe=fe||j,Fe=Fe||J,(ce!==u||he!==x)&&(t.blendEquationSeparate(Xe[ce],Xe[he]),u=ce,x=he),(j!==g||J!==v||fe!==P||Fe!==C)&&(t.blendFuncSeparate(Me[j],Me[J],Me[fe],Me[Fe]),g=j,v=J,P=fe,C=Fe),(xt.equals(A)===!1||Ot!==T)&&(t.blendColor(xt.r,xt.g,xt.b,Ot),A.copy(xt),T=Ot),m=U,w=!1}function ot(U,ce){U.side===ci?pe(t.CULL_FACE):ne(t.CULL_FACE);let j=U.side===sn;ce&&(j=!j),Ue(j),U.blending===ds&&U.transparent===!1?N(Wi):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(U){S!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),S=U)}function Be(U){U!==wy?(ne(t.CULL_FACE),U!==L&&(U===np?t.cullFace(t.BACK):U===Ty?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),L=U}function Ae(U){U!==I&&(X&&t.lineWidth(U),I=U)}function ct(U,ce,j){U?(ne(t.POLYGON_OFFSET_FILL),(z!==ce||H!==j)&&(t.polygonOffset(ce,j),z=ce,H=j)):pe(t.POLYGON_OFFSET_FILL)}function Te(U){U?ne(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+Y-1),q!==U&&(t.activeTexture(U),q=U)}function M(U,ce,j){j===void 0&&(q===null?j=t.TEXTURE0+Y-1:j=q);let J=Z[j];J===void 0&&(J={type:void 0,texture:void 0},Z[j]=J),(J.type!==U||J.texture!==ce)&&(q!==j&&(t.activeTexture(j),q=j),t.bindTexture(U,ce||ae[U]),J.type=U,J.texture=ce)}function B(){const U=Z[q];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){Ie.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ie.copy(U))}function xe(U){W.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function je(U,ce){let j=c.get(ce);j===void 0&&(j=new WeakMap,c.set(ce,j));let J=j.get(U);J===void 0&&(J=t.getUniformBlockIndex(ce,U.name),j.set(U,J))}function ke(U,ce){const J=c.get(ce).get(U);l.get(ce)!==J&&(t.uniformBlockBinding(ce,J,U.__bindingPointIndex),l.set(ce,J))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},q=null,Z={},h={},f=new WeakMap,p=[],_=null,y=!1,m=null,u=null,g=null,v=null,x=null,P=null,C=null,A=new We(0,0,0),T=0,w=!1,S=null,L=null,I=null,z=null,H=null,Ie.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:pe,bindFramebuffer:Pe,drawBuffers:we,useProgram:Je,setBlending:N,setMaterial:ot,setFlipSided:Ue,setCullFace:Be,setLineWidth:Ae,setPolygonOffset:ct,setScissorTest:Te,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:_e,texImage3D:Re,updateUBOMapping:je,uniformBlockBinding:ke,texStorage2D:qe,texStorage3D:se,texSubImage2D:$,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Le,viewport:xe,reset:at}}function Tw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):_l("canvas")}function y(R,M,B){let Q=1;const ee=Te(R);if((ee.width>B||ee.height>B)&&(Q=B/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Q*ee.width),Ee=Math.floor(Q*ee.height);h===void 0&&(h=_($,Ee));const de=M?_($,Ee):h;return de.width=$,de.height=Ee,de.getContext("2d").drawImage(R,0,0,$,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Ee+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,M,B,Q,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=M;if(M===t.RED&&(B===t.FLOAT&&($=t.R32F),B===t.HALF_FLOAT&&($=t.R16F),B===t.UNSIGNED_BYTE&&($=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.R8UI),B===t.UNSIGNED_SHORT&&($=t.R16UI),B===t.UNSIGNED_INT&&($=t.R32UI),B===t.BYTE&&($=t.R8I),B===t.SHORT&&($=t.R16I),B===t.INT&&($=t.R32I)),M===t.RG&&(B===t.FLOAT&&($=t.RG32F),B===t.HALF_FLOAT&&($=t.RG16F),B===t.UNSIGNED_BYTE&&($=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RG8UI),B===t.UNSIGNED_SHORT&&($=t.RG16UI),B===t.UNSIGNED_INT&&($=t.RG32UI),B===t.BYTE&&($=t.RG8I),B===t.SHORT&&($=t.RG16I),B===t.INT&&($=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGB8UI),B===t.UNSIGNED_SHORT&&($=t.RGB16UI),B===t.UNSIGNED_INT&&($=t.RGB32UI),B===t.BYTE&&($=t.RGB8I),B===t.SHORT&&($=t.RGB16I),B===t.INT&&($=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGBA8UI),B===t.UNSIGNED_SHORT&&($=t.RGBA16UI),B===t.UNSIGNED_INT&&($=t.RGBA32UI),B===t.BYTE&&($=t.RGBA8I),B===t.SHORT&&($=t.RGBA16I),B===t.INT&&($=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),M===t.RGBA){const Ee=ee?gl:Ze.getTransfer(Q);B===t.FLOAT&&($=t.RGBA32F),B===t.HALF_FLOAT&&($=t.RGBA16F),B===t.UNSIGNED_BYTE&&($=Ee===rt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(R,M){let B;return R?M===null||M===Tr||M===ws?B=t.DEPTH24_STENCIL8:M===fi?B=t.DEPTH32F_STENCIL8:M===bo&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Tr||M===ws?B=t.DEPTH_COMPONENT24:M===fi?B=t.DEPTH_COMPONENT32F:M===bo&&(B=t.DEPTH_COMPONENT16),B}function P(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vn&&R.minFilter!==Kn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&d.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),S(M)}function T(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,Q=f.get(B);if(Q){const ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(R),Object.keys(Q).length===0&&f.delete(B)}i.remove(R)}function w(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,Q=f.get(B);delete Q[M.__cacheKey],o.memory.textures--}function S(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ee=0;ee<M.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let Q=0,ee=B.length;Q<ee;Q++){const $=i.get(B[Q]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(R)}let L=0;function I(){L=0}function z(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function H(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Y(R,M){const B=i.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(B,R,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function X(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){W(B,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function K(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){W(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function D(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){te(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const q={[Qu]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[Ju]:t.MIRRORED_REPEAT},Z={[Vn]:t.NEAREST,[e1]:t.NEAREST_MIPMAP_NEAREST,[ra]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[mc]:t.LINEAR_MIPMAP_NEAREST,[vr]:t.LINEAR_MIPMAP_LINEAR},oe={[r1]:t.NEVER,[u1]:t.ALWAYS,[s1]:t.LESS,[Ig]:t.LEQUAL,[o1]:t.EQUAL,[c1]:t.GEQUAL,[a1]:t.GREATER,[l1]:t.NOTEQUAL};function Se(R,M){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Kn||M.magFilter===mc||M.magFilter===ra||M.magFilter===vr||M.minFilter===Kn||M.minFilter===mc||M.minFilter===ra||M.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,q[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,q[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,q[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Vn||M.minFilter!==ra&&M.minFilter!==vr||M.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ie(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const Q=M.source;let ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));const $=H(M);if($!==R.__cacheKey){ee[$]===void 0&&(ee[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[$].usedTimes++;const Ee=ee[R.__cacheKey];Ee!==void 0&&(ee[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(M)),R.__cacheKey=$,R.__webglTexture=ee[$].texture}return B}function W(R,M,B){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=Ie(R,M),$=M.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+B);const Ee=i.get($);if($.version!==Ee.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const de=Ze.getPrimaries(Ze.workingColorSpace),ve=M.colorSpace===Di?null:Ze.getPrimaries(M.colorSpace),qe=M.colorSpace===Di||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let se=y(M.image,!1,r.maxTextureSize);se=ct(M,se);const _e=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let Le=v(M.internalFormat,_e,Re,M.colorSpace,M.isVideoTexture);Se(Q,M);let xe;const je=M.mipmaps,ke=M.isVideoTexture!==!0,at=Ee.__version===void 0||ee===!0,U=$.dataReady,ce=P(M,se);if(M.isDepthTexture)Le=x(M.format===Ts,M.type),at&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Le,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,_e,Re,null));else if(M.isDataTexture)if(je.length>0){ke&&at&&n.texStorage2D(t.TEXTURE_2D,ce,Le,je[0].width,je[0].height);for(let j=0,J=je.length;j<J;j++)xe=je[j],ke?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,_e,Re,xe.data):n.texImage2D(t.TEXTURE_2D,j,Le,xe.width,xe.height,0,_e,Re,xe.data);M.generateMipmaps=!1}else ke?(at&&n.texStorage2D(t.TEXTURE_2D,ce,Le,se.width,se.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,_e,Re,se.data)):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,_e,Re,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Le,je[0].width,je[0].height,se.depth);for(let j=0,J=je.length;j<J;j++)if(xe=je[j],M.format!==zn)if(_e!==null)if(ke){if(U)if(M.layerUpdates.size>0){const he=Dp(xe.width,xe.height,M.format,M.type);for(const fe of M.layerUpdates){const Fe=xe.data.subarray(fe*he/xe.data.BYTES_PER_ELEMENT,(fe+1)*he/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,fe,xe.width,xe.height,1,_e,Fe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,se.depth,_e,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Le,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,se.depth,_e,Re,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Le,xe.width,xe.height,se.depth,0,_e,Re,xe.data)}else{ke&&at&&n.texStorage2D(t.TEXTURE_2D,ce,Le,je[0].width,je[0].height);for(let j=0,J=je.length;j<J;j++)xe=je[j],M.format!==zn?_e!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,_e,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,_e,Re,xe.data):n.texImage2D(t.TEXTURE_2D,j,Le,xe.width,xe.height,0,_e,Re,xe.data)}else if(M.isDataArrayTexture)if(ke){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Le,se.width,se.height,se.depth),U)if(M.layerUpdates.size>0){const j=Dp(se.width,se.height,M.format,M.type);for(const J of M.layerUpdates){const he=se.data.subarray(J*j/se.data.BYTES_PER_ELEMENT,(J+1)*j/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,_e,Re,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Re,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,_e,Re,se.data);else if(M.isData3DTexture)ke?(at&&n.texStorage3D(t.TEXTURE_3D,ce,Le,se.width,se.height,se.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Re,se.data)):n.texImage3D(t.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,_e,Re,se.data);else if(M.isFramebufferTexture){if(at)if(ke)n.texStorage2D(t.TEXTURE_2D,ce,Le,se.width,se.height);else{let j=se.width,J=se.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,Le,j,J,0,_e,Re,null),j>>=1,J>>=1}}else if(je.length>0){if(ke&&at){const j=Te(je[0]);n.texStorage2D(t.TEXTURE_2D,ce,Le,j.width,j.height)}for(let j=0,J=je.length;j<J;j++)xe=je[j],ke?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e,Re,xe):n.texImage2D(t.TEXTURE_2D,j,Le,_e,Re,xe);M.generateMipmaps=!1}else if(ke){if(at){const j=Te(se);n.texStorage2D(t.TEXTURE_2D,ce,Le,j.width,j.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Re,se)}else n.texImage2D(t.TEXTURE_2D,0,Le,_e,Re,se);m(M)&&u(Q),Ee.__version=$.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function te(R,M,B){if(M.image.length!==6)return;const Q=Ie(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const $=i.get(ee);if(ee.version!==$.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const Ee=Ze.getPrimaries(Ze.workingColorSpace),de=M.colorSpace===Di?null:Ze.getPrimaries(M.colorSpace),ve=M.colorSpace===Di||Ee===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!qe&&!se?_e[J]=y(M.image[J],!0,r.maxCubemapSize):_e[J]=se?M.image[J].image:M.image[J],_e[J]=ct(M,_e[J]);const Re=_e[0],Le=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),je=v(M.internalFormat,Le,xe,M.colorSpace),ke=M.isVideoTexture!==!0,at=$.__version===void 0||Q===!0,U=ee.dataReady;let ce=P(M,Re);Se(t.TEXTURE_CUBE_MAP,M);let j;if(qe){ke&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,je,Re.width,Re.height);for(let J=0;J<6;J++){j=_e[J].mipmaps;for(let he=0;he<j.length;he++){const fe=j[he];M.format!==zn?Le!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,fe.width,fe.height,Le,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,je,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,fe.width,fe.height,Le,xe,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,je,fe.width,fe.height,0,Le,xe,fe.data)}}}else{if(j=M.mipmaps,ke&&at){j.length>0&&ce++;const J=Te(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,je,J.width,J.height)}for(let J=0;J<6;J++)if(se){ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Le,xe,_e[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,_e[J].width,_e[J].height,0,Le,xe,_e[J].data);for(let he=0;he<j.length;he++){const Fe=j[he].image[J].image;ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Fe.width,Fe.height,Le,xe,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,je,Fe.width,Fe.height,0,Le,xe,Fe.data)}}else{ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,xe,_e[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,Le,xe,_e[J]);for(let he=0;he<j.length;he++){const fe=j[he];ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Le,xe,fe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,je,Le,xe,fe.image[J])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),$.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ae(R,M,B,Q,ee,$){const Ee=s.convert(B.format,B.colorSpace),de=s.convert(B.type),ve=v(B.internalFormat,Ee,de,B.colorSpace),qe=i.get(M),se=i.get(B);if(se.__renderTarget=M,!qe.__hasExternalTextures){const _e=Math.max(1,M.width>>$),Re=Math.max(1,M.height>>$);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,$,ve,_e,Re,M.depth,0,Ee,de,null):n.texImage2D(ee,$,ve,_e,Re,0,Ee,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Be(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,se.__webglTexture,0,Ue(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,se.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,$=x(M.stencilBuffer,ee),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Ue(M);Be(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,$,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,$,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,$,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,R)}else{const Q=M.textures;for(let ee=0;ee<Q.length;ee++){const $=Q[ee],Ee=s.convert($.format,$.colorSpace),de=s.convert($.type),ve=v($.internalFormat,Ee,de,$.colorSpace),qe=Ue(M);B&&Be(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,ve,M.width,M.height):Be(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const ee=Q.__webglTexture,$=Ue(M);if(M.depthTexture.format===fs)Be(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Ts)Be(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pe(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=t.createRenderbuffer(),ne(M.__webglDepthbuffer[Q],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ne(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(R,M,B){const Q=i.get(R);M!==void 0&&ae(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Pe(R)}function Je(R){const M=R.texture,B=i.get(R),Q=i.get(M);R.addEventListener("dispose",A);const ee=R.textures,$=R.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let ve=0;ve<M.mipmaps.length;ve++)B.__webglFramebuffer[de][ve]=t.createFramebuffer()}else B.__webglFramebuffer[de]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)B.__webglFramebuffer[de]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let de=0,ve=ee.length;de<ve;de++){const qe=i.get(ee[de]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Be(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const ve=ee[de];B.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const qe=s.convert(ve.format,ve.colorSpace),se=s.convert(ve.type),_e=v(ve.internalFormat,qe,se,ve.colorSpace,R.isXRRenderTarget===!0),Re=Ue(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,B.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Se(t.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ae(B.__webglFramebuffer[de][ve],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else ae(B.__webglFramebuffer[de],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let de=0,ve=ee.length;de<ve;de++){const qe=ee[de],se=i.get(qe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Se(t.TEXTURE_2D,qe),ae(B.__webglFramebuffer,R,qe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(qe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Q.__webglTexture),Se(de,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ae(B.__webglFramebuffer[ve],R,M,t.COLOR_ATTACHMENT0,de,ve);else ae(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,de,0);m(M)&&u(de),n.unbindTexture()}R.depthBuffer&&Pe(R)}function Xe(R){const M=R.textures;for(let B=0,Q=M.length;B<Q;B++){const ee=M[B];if(m(ee)){const $=g(R),Ee=i.get(ee).__webglTexture;n.bindTexture($,Ee),u($),n.unbindTexture()}}}const Me=[],N=[];function ot(R){if(R.samples>0){if(Be(R)===!1){const M=R.textures,B=R.width,Q=R.height;let ee=t.COLOR_BUFFER_BIT;const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(R),de=M.length>1;if(de)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const qe=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,B,Q,0,0,B,Q,ee,t.NEAREST),l===!0&&(Me.length=0,N.length=0,Me.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Me.push($),N.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const qe=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ue(R){return Math.min(r.maxSamples,R.samples)}function Be(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function ct(R,M){const B=R.colorSpace,Q=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==As&&B!==Di&&(Ze.getTransfer(B)===rt?(Q!==zn||ee!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=D,this.rebindTextures=we,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Be}function Aw(t,e){function n(i,r=Di){let s;const o=Ze.getTransfer(r);if(i===yi)return t.UNSIGNED_BYTE;if(i===Af)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Tg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Eg)return t.BYTE;if(i===wg)return t.SHORT;if(i===bo)return t.UNSIGNED_SHORT;if(i===Tf)return t.INT;if(i===Tr)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===Io)return t.HALF_FLOAT;if(i===Ag)return t.ALPHA;if(i===Cg)return t.RGB;if(i===zn)return t.RGBA;if(i===bg)return t.LUMINANCE;if(i===Rg)return t.LUMINANCE_ALPHA;if(i===fs)return t.DEPTH_COMPONENT;if(i===Ts)return t.DEPTH_STENCIL;if(i===Pg)return t.RED;if(i===bf)return t.RED_INTEGER;if(i===Lg)return t.RG;if(i===Rf)return t.RG_INTEGER;if(i===Pf)return t.RGBA_INTEGER;if(i===Ba||i===Ha||i===Va||i===Ga)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ed||i===td||i===nd||i===id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ed)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rd||i===sd||i===od)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rd||i===sd)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===od)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ad||i===ld||i===cd||i===ud||i===dd||i===fd||i===hd||i===pd||i===md||i===gd||i===vd||i===_d||i===xd||i===yd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ad)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ld)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ud)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===md)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_d)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wa||i===Sd||i===Md)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wa)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Md)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ng||i===Ed||i===wd||i===Td)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ed)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Td)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:Cw,fragmentShader:bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tn(new zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pw extends Ls{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,_=null;const y=new Rw,m=n.getContextAttributes();let u=null,g=null;const v=[],x=[],P=new Ge;let C=null;const A=new dn;A.viewport=new st;const T=new dn;T.viewport=new st;const w=[A,T],S=new Z1;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=v[W];return te===void 0&&(te=new Oc,v[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=v[W];return te===void 0&&(te=new Oc,v[W]=te),te.getGripSpace()},this.getHand=function(W){let te=v[W];return te===void 0&&(te=new Oc,v[W]=te),te.getHandSpace()};function z(W){const te=x.indexOf(W.inputSource);if(te===-1)return;const ae=v[te];ae!==void 0&&(ae.update(W.inputSource,W.frame,c||o),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<v.length;W++){const te=x[W];te!==null&&(x[W]=null,v[W].disconnect(te))}L=null,I=null,y.reset(),e.setRenderTarget(u),p=null,f=null,h=null,r=null,g=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ne=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=m.stencil?Ts:fs,ne=m.stencil?ws:Tr);const Pe={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Ar(f.textureWidth,f.textureHeight,{format:zn,type:yi,depthTexture:new Yg(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Ar(p.framebufferWidth,p.framebufferHeight,{format:zn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(W){for(let te=0;te<W.removed.length;te++){const ae=W.removed[te],ne=x.indexOf(ae);ne>=0&&(x[ne]=null,v[ne].disconnect(ae))}for(let te=0;te<W.added.length;te++){const ae=W.added[te];let ne=x.indexOf(ae);if(ne===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=x.length){x.push(ae),ne=Pe;break}else if(x[Pe]===null){x[Pe]=ae,ne=Pe;break}if(ne===-1)break}const pe=v[ne];pe&&pe.connect(ae)}}const X=new k,K=new k;function D(W,te,ae){X.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const ne=X.distanceTo(K),pe=te.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,we=pe[14]/(pe[10]-1),Je=pe[14]/(pe[10]+1),Xe=(pe[9]+1)/pe[5],Me=(pe[9]-1)/pe[5],N=(pe[8]-1)/pe[0],ot=(Pe[8]+1)/Pe[0],Ue=we*N,Be=we*ot,Ae=ne/(-N+ot),ct=Ae*-N;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ct),W.translateZ(Ae),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),pe[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Te=we+Ae,R=Je+Ae,M=Ue-ct,B=Be+(ne-ct),Q=Xe*Je/R*Te,ee=Me*Je/R*Te;W.projectionMatrix.makePerspective(M,B,Q,ee,Te,R),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function q(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,ae=W.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ae=y.depthFar)),S.near=T.near=A.near=te,S.far=T.far=A.far=ae,(L!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,I=S.far),A.layers.mask=W.layers.mask|2,T.layers.mask=W.layers.mask|4,S.layers.mask=A.layers.mask|T.layers.mask;const ne=W.parent,pe=S.cameras;q(S,ne);for(let Pe=0;Pe<pe.length;Pe++)q(pe[Pe],ne);pe.length===2?D(S,A,T):S.projectionMatrix.copy(A.projectionMatrix),Z(W,S,ne)};function Z(W,te,ae){ae===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ad*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function Se(W,te){if(d=te.getViewerPose(c||o),_=te,d!==null){const ae=d.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ne=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,ne=!0);for(let we=0;we<ae.length;we++){const Je=ae[we];let Xe=null;if(p!==null)Xe=p.getViewport(Je);else{const N=h.getViewSubImage(f,Je);Xe=N.viewport,we===0&&(e.setRenderTargetTextures(g,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(g))}let Me=w[we];Me===void 0&&(Me=new dn,Me.layers.enable(we),Me.viewport=new st,w[we]=Me),Me.matrix.fromArray(Je.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Je.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),we===0&&(S.matrix.copy(Me.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ne===!0&&S.cameras.push(Me)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const we=h.getDepthInformation(ae[0]);we&&we.isValid&&we.texture&&y.init(e,we,r.renderState)}}for(let ae=0;ae<v.length;ae++){const ne=x[ae],pe=v[ae];ne!==null&&pe!==void 0&&pe.update(ne,te,c||o)}oe&&oe(W,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ie=new Zg;Ie.setAnimationLoop(Se),this.setAnimationLoop=function(W){oe=W},this.dispose=function(){}}}const or=new Jn,Lw=new pt;function Nw(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Wg(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,v,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,x=g.envMapRotation;v&&(m.envMap.value=v,or.copy(x),or.x*=-1,or.y*=-1,or.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(or)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Dw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const x=v.program;i.uniformBlockBinding(g,x)}function c(g,v){let x=r[g.id];x===void 0&&(_(g),x=d(g),r[g.id]=x,g.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(g,P);const C=e.render.frame;s[g.id]!==C&&(f(g),s[g.id]=C)}function d(g){const v=h();g.__bindingPointIndex=v;const x=t.createBuffer(),P=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],x=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,A=x.length;C<A;C++){const T=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,S=T.length;w<S;w++){const L=T[w];if(p(L,C,w,P)===!0){const I=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let Y=0;Y<z.length;Y++){const X=z[Y],K=y(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,I+H,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,x,P){const C=g.value,A=v+"_"+x;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const T=P[A];if(typeof C=="number"||typeof C=="boolean"){if(T!==C)return P[A]=C,!0}else if(T.equals(C)===!1)return T.copy(C),!0}return!1}function _(g){const v=g.uniforms;let x=0;const P=16;for(let A=0,T=v.length;A<T;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,L=w.length;S<L;S++){const I=w[S],z=Array.isArray(I.value)?I.value:[I.value];for(let H=0,Y=z.length;H<Y;H++){const X=z[H],K=y(X),D=x%P,q=D%K.boundary,Z=D+q;x+=q,Z!==0&&P-Z<K.storage&&(x+=P-Z),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=K.storage}}}const C=x%P;return C>0&&(x+=P-C),g.__size=x,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Iw{constructor(e={}){const{canvas:n=f1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),y=new Int32Array(4);let m=null,u=null;const g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=ji,this.toneMappingExposure=1;const x=this;let P=!1,C=0,A=0,T=null,w=-1,S=null;const L=new st,I=new st;let z=null;const H=new We(0);let Y=0,X=n.width,K=n.height,D=1,q=null,Z=null;const oe=new st(0,0,X,K),Se=new st(0,0,X,K);let Ie=!1;const W=new Lf;let te=!1,ae=!1;this.transmissionResolutionScale=1;const ne=new pt,pe=new pt,Pe=new k,we=new st,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Me(){return T===null?D:1}let N=i;function ot(E,F){return n.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wf}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",fe,!1),N===null){const F="webgl2";if(N=ot(F,E),N===null)throw ot(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ue,Be,Ae,ct,Te,R,M,B,Q,ee,$,Ee,de,ve,qe,se,_e,Re,Le,xe,je,ke,at,U;function ce(){Ue=new WM(N),Ue.init(),ke=new Aw(N,Ue),Be=new kM(N,Ue,e,ke),Ae=new ww(N,Ue),Be.reverseDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),ct=new qM(N),Te=new dw,R=new Tw(N,Ue,Ae,Te,Be,ke,ct),M=new BM(x),B=new GM(x),Q=new e2(N),at=new FM(N,Q),ee=new jM(N,Q,ct,at),$=new $M(N,ee,Q,ct),Le=new YM(N,Be,R),se=new zM(Te),Ee=new uw(x,M,B,Ue,Be,at,se),de=new Nw(x,Te),ve=new hw,qe=new xw(Ue),Re=new UM(x,M,B,Ae,$,p,l),_e=new Mw(x,$,Be),U=new Dw(N,ct,Be,Ae),xe=new OM(N,Ue,ct),je=new XM(N,Ue,ct),ct.programs=Ee.programs,x.capabilities=Be,x.extensions=Ue,x.properties=Te,x.renderLists=ve,x.shadowMap=_e,x.state=Ae,x.info=ct}ce();const j=new Pw(x,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(X,K,!1))},this.getSize=function(E){return E.set(X,K)},this.setSize=function(E,F,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,K=F,n.width=Math.floor(E*D),n.height=Math.floor(F*D),V===!0&&(n.style.width=E+"px",n.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(X*D,K*D).floor()},this.setDrawingBufferSize=function(E,F,V){X=E,K=F,D=V,n.width=Math.floor(E*V),n.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,F,V,G){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,F,V,G),Ae.viewport(L.copy(oe).multiplyScalar(D).round())},this.getScissor=function(E){return E.copy(Se)},this.setScissor=function(E,F,V,G){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,F,V,G),Ae.scissor(I.copy(Se).multiplyScalar(D).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(E){Ae.setScissorTest(Ie=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(E=!0,F=!0,V=!0){let G=0;if(E){let O=!1;if(T!==null){const re=T.texture.format;O=re===Pf||re===Rf||re===bf}if(O){const re=T.texture.type,ue=re===yi||re===Tr||re===bo||re===ws||re===Af||re===Cf,ge=Re.getClearColor(),ye=Re.getClearAlpha(),Ne=ge.r,De=ge.g,Ce=ge.b;ue?(_[0]=Ne,_[1]=De,_[2]=Ce,_[3]=ye,N.clearBufferuiv(N.COLOR,0,_)):(y[0]=Ne,y[1]=De,y[2]=Ce,y[3]=ye,N.clearBufferiv(N.COLOR,0,y))}else G|=N.COLOR_BUFFER_BIT}F&&(G|=N.DEPTH_BUFFER_BIT),V&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),Re.dispose(),ve.dispose(),qe.dispose(),Te.dispose(),M.dispose(),B.dispose(),$.dispose(),at.dispose(),U.dispose(),Ee.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ff),j.removeEventListener("sessionend",Of),Ji.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=ct.autoReset,F=_e.enabled,V=_e.autoUpdate,G=_e.needsUpdate,O=_e.type;ce(),ct.autoReset=E,_e.enabled=F,_e.autoUpdate=V,_e.needsUpdate=G,_e.type=O}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Fe(E){const F=E.target;F.removeEventListener("dispose",Fe),xt(F)}function xt(E){Ot(E),Te.remove(E)}function Ot(E){const F=Te.get(E).programs;F!==void 0&&(F.forEach(function(V){Ee.releaseProgram(V)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,G,O,re){F===null&&(F=Je);const ue=O.isMesh&&O.matrixWorld.determinant()<0,ge=nv(E,F,V,G,O);Ae.setMaterial(G,ue);let ye=V.index,Ne=1;if(G.wireframe===!0){if(ye=ee.getWireframeAttribute(V),ye===void 0)return;Ne=2}const De=V.drawRange,Ce=V.attributes.position;let Ye=De.start*Ne,et=(De.start+De.count)*Ne;re!==null&&(Ye=Math.max(Ye,re.start*Ne),et=Math.min(et,(re.start+re.count)*Ne)),ye!==null?(Ye=Math.max(Ye,0),et=Math.min(et,ye.count)):Ce!=null&&(Ye=Math.max(Ye,0),et=Math.min(et,Ce.count));const Et=et-Ye;if(Et<0||Et===1/0)return;at.setup(O,G,ge,V,ye);let yt,Ke=xe;if(ye!==null&&(yt=Q.get(ye),Ke=je,Ke.setIndex(yt)),O.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*Me()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(O.isLine){let be=G.linewidth;be===void 0&&(be=1),Ae.setLineWidth(be*Me()),O.isLineSegments?Ke.setMode(N.LINES):O.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else O.isPoints?Ke.setMode(N.POINTS):O.isSprite&&Ke.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ke.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Ke.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const be=O._multiDrawStarts,Dt=O._multiDrawCounts,tt=O._multiDrawCount,Pn=ye?Q.get(ye).bytesPerElement:1,Rr=Te.get(G).currentProgram.getUniforms();for(let an=0;an<tt;an++)Rr.setValue(N,"_gl_DrawID",an),Ke.render(be[an]/Pn,Dt[an])}else if(O.isInstancedMesh)Ke.renderInstances(Ye,Et,O.count);else if(V.isInstancedBufferGeometry){const be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Dt=Math.min(V.instanceCount,be);Ke.renderInstances(Ye,Et,Dt)}else Ke.render(Ye,Et)};function nt(E,F,V){E.transparent===!0&&E.side===ci&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Bo(E,F,V),E.side=Yi,E.needsUpdate=!0,Bo(E,F,V),E.side=ci):Bo(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),u=qe.get(V),u.init(F),v.push(u),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const G=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const re=O.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){const ge=re[ue];nt(ge,V,O),G.add(ge)}else nt(re,V,O),G.add(re)}),v.pop(),u=null,G},this.compileAsync=function(E,F,V=null){const G=this.compile(E,F,V);return new Promise(O=>{function re(){if(G.forEach(function(ue){Te.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){O(E);return}setTimeout(re,10)}Ue.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Rn=null;function ei(E){Rn&&Rn(E)}function Ff(){Ji.stop()}function Of(){Ji.start()}const Ji=new Zg;Ji.setAnimationLoop(ei),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(E){Rn=E,j.setAnimationLoop(E),E===null?Ji.stop():Ji.start()},j.addEventListener("sessionstart",Ff),j.addEventListener("sessionend",Of),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(F),F=j.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,T),u=qe.get(E,v.length),u.init(F),v.push(u),pe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W.setFromProjectionMatrix(pe),ae=this.localClippingEnabled,te=se.init(this.clippingPlanes,ae),m=ve.get(E,g.length),m.init(),g.push(m),j.enabled===!0&&j.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&Hl(re,F,-1/0,x.sortObjects)}Hl(E,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(q,Z),Xe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Xe&&Re.addToRenderList(m,E),this.info.render.frame++,te===!0&&se.beginShadows();const V=u.state.shadowsArray;_e.render(V,E,F),te===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(u.setupLights(),F.isArrayCamera){const re=F.cameras;if(O.length>0)for(let ue=0,ge=re.length;ue<ge;ue++){const ye=re[ue];zf(G,O,E,ye)}Xe&&Re.render(E);for(let ue=0,ge=re.length;ue<ge;ue++){const ye=re[ue];kf(m,E,ye,ye.viewport)}}else O.length>0&&zf(G,O,E,F),Xe&&Re.render(E),kf(m,E,F);T!==null&&A===0&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,F),at.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?(u=v[v.length-1],te===!0&&se.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Hl(E,F,V,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){G&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const ue=$.update(E),ge=E.material;ge.visible&&m.push(E,ue,ge,V,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const ue=$.update(E),ge=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),we.copy(ue.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(ge)){const ye=ue.groups;for(let Ne=0,De=ye.length;Ne<De;Ne++){const Ce=ye[Ne],Ye=ge[Ce.materialIndex];Ye&&Ye.visible&&m.push(E,ue,Ye,V,we.z,Ce)}}else ge.visible&&m.push(E,ue,ge,V,we.z,null)}}const re=E.children;for(let ue=0,ge=re.length;ue<ge;ue++)Hl(re[ue],F,V,G)}function kf(E,F,V,G){const O=E.opaque,re=E.transmissive,ue=E.transparent;u.setupLightsView(V),te===!0&&se.setGlobalState(x.clippingPlanes,V),G&&Ae.viewport(L.copy(G)),O.length>0&&zo(O,F,V),re.length>0&&zo(re,F,V),ue.length>0&&zo(ue,F,V),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function zf(E,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Ar(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Io:yi,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const re=u.state.transmissionRenderTarget[G.id],ue=G.viewport||L;re.setSize(ue.z*x.transmissionResolutionScale,ue.w*x.transmissionResolutionScale);const ge=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(H),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&Re.render(V);const ye=x.toneMapping;x.toneMapping=ji;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),te===!0&&se.setGlobalState(x.clippingPlanes,G),zo(E,V,G),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ce=0,Ye=F.length;Ce<Ye;Ce++){const et=F[Ce],Et=et.object,yt=et.geometry,Ke=et.material,be=et.group;if(Ke.side===ci&&Et.layers.test(G.layers)){const Dt=Ke.side;Ke.side=sn,Ke.needsUpdate=!0,Bf(Et,V,G,yt,Ke,be),Ke.side=Dt,Ke.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}x.setRenderTarget(ge),x.setClearColor(H,Y),Ne!==void 0&&(G.viewport=Ne),x.toneMapping=ye}function zo(E,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,re=E.length;O<re;O++){const ue=E[O],ge=ue.object,ye=ue.geometry,Ne=G===null?ue.material:G,De=ue.group;ge.layers.test(V.layers)&&Bf(ge,F,V,ye,Ne,De)}}function Bf(E,F,V,G,O,re){E.onBeforeRender(x,F,V,G,O,re),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,F,V,G,E,re),O.transparent===!0&&O.side===ci&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,x.renderBufferDirect(V,F,G,O,E,re),O.side=Yi,O.needsUpdate=!0,x.renderBufferDirect(V,F,G,O,E,re),O.side=ci):x.renderBufferDirect(V,F,G,O,E,re),E.onAfterRender(x,F,V,G,O,re)}function Bo(E,F,V){F.isScene!==!0&&(F=Je);const G=Te.get(E),O=u.state.lights,re=u.state.shadowsArray,ue=O.state.version,ge=Ee.getParameters(E,O.state,re,F,V),ye=Ee.getProgramCacheKey(ge);let Ne=G.programs;G.environment=E.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Fe),Ne=new Map,G.programs=Ne);let De=Ne.get(ye);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===ue)return Vf(E,ge),De}else ge.uniforms=Ee.getUniforms(E),E.onBeforeCompile(ge,x),De=Ee.acquireProgram(ge,ye),Ne.set(ye,De),G.uniforms=ge.uniforms;const Ce=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=se.uniform),Vf(E,ge),G.needsLights=rv(E),G.lightsStateVersion=ue,G.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function Hf(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=ja.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Vf(E,F){const V=Te.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function nv(E,F,V,G,O){F.isScene!==!0&&(F=Je),R.resetTextureUnits();const re=F.fog,ue=G.isMeshStandardMaterial?F.environment:null,ge=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:As,ye=(G.isMeshStandardMaterial?B:M).get(G.envMap||ue),Ne=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!V.morphAttributes.position,Ye=!!V.morphAttributes.normal,et=!!V.morphAttributes.color;let Et=ji;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Et=x.toneMapping);const yt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ke=yt!==void 0?yt.length:0,be=Te.get(G),Dt=u.state.lights;if(te===!0&&(ae===!0||E!==S)){const Wt=E===S&&G.id===w;se.setState(G,E,Wt)}let tt=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Dt.state.version||be.outputColorSpace!==ge||O.isBatchedMesh&&be.batching===!1||!O.isBatchedMesh&&be.batching===!0||O.isBatchedMesh&&be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&be.instancing===!1||!O.isInstancedMesh&&be.instancing===!0||O.isSkinnedMesh&&be.skinning===!1||!O.isSkinnedMesh&&be.skinning===!0||O.isInstancedMesh&&be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&be.instancingMorph===!1&&O.morphTexture!==null||be.envMap!==ye||G.fog===!0&&be.fog!==re||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==se.numPlanes||be.numIntersection!==se.numIntersection)||be.vertexAlphas!==Ne||be.vertexTangents!==De||be.morphTargets!==Ce||be.morphNormals!==Ye||be.morphColors!==et||be.toneMapping!==Et||be.morphTargetsCount!==Ke)&&(tt=!0):(tt=!0,be.__version=G.version);let Pn=be.currentProgram;tt===!0&&(Pn=Bo(G,F,O));let Rr=!1,an=!1,Is=!1;const ft=Pn.getUniforms(),_n=be.uniforms;if(Ae.useProgram(Pn.program)&&(Rr=!0,an=!0,Is=!0),G.id!==w&&(w=G.id,an=!0),Rr||S!==E){Ae.buffers.depth.getReversed()?(ne.copy(E.projectionMatrix),p1(ne),m1(ne),ft.setValue(N,"projectionMatrix",ne)):ft.setValue(N,"projectionMatrix",E.projectionMatrix),ft.setValue(N,"viewMatrix",E.matrixWorldInverse);const Zt=ft.map.cameraPosition;Zt!==void 0&&Zt.setValue(N,Pe.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,an=!0,Is=!0)}if(O.isSkinnedMesh){ft.setOptional(N,O,"bindMatrix"),ft.setOptional(N,O,"bindMatrixInverse");const Wt=O.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ft.setValue(N,"boneTexture",Wt.boneTexture,R))}O.isBatchedMesh&&(ft.setOptional(N,O,"batchingTexture"),ft.setValue(N,"batchingTexture",O._matricesTexture,R),ft.setOptional(N,O,"batchingIdTexture"),ft.setValue(N,"batchingIdTexture",O._indirectTexture,R),ft.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(N,"batchingColorTexture",O._colorsTexture,R));const xn=V.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Le.update(O,V,Pn),(an||be.receiveShadow!==O.receiveShadow)&&(be.receiveShadow=O.receiveShadow,ft.setValue(N,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(_n.envMap.value=ye,_n.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),an&&(ft.setValue(N,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&iv(_n,Is),re&&G.fog===!0&&de.refreshFogUniforms(_n,re),de.refreshMaterialUniforms(_n,G,D,K,u.state.transmissionRenderTarget[E.id]),ja.upload(N,Hf(be),_n,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ja.upload(N,Hf(be),_n,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(N,"center",O.center),ft.setValue(N,"modelViewMatrix",O.modelViewMatrix),ft.setValue(N,"normalMatrix",O.normalMatrix),ft.setValue(N,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wt=G.uniformsGroups;for(let Zt=0,Vl=Wt.length;Zt<Vl;Zt++){const er=Wt[Zt];U.update(er,Pn),U.bind(er,Pn)}}return Pn}function iv(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function rv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,F,V){Te.get(E.texture).__webglTexture=F,Te.get(E.depthTexture).__webglTexture=V;const G=Te.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const V=Te.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const sv=N.createFramebuffer();this.setRenderTarget=function(E,F=0,V=0){T=E,C=F,A=V;let G=!0,O=null,re=!1,ue=!1;if(E){const ye=Te.get(E);if(ye.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(ye.__hasExternalTextures)R.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ce=E.depthTexture;if(ye.__boundDepthTexture!==Ce){if(Ce!==null&&Te.has(Ce)&&(E.width!==Ce.image.width||E.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ue=!0);const De=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[F])?O=De[F][V]:O=De[F],re=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=Te.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?O=De[V]:O=De,L.copy(E.viewport),I.copy(E.scissor),z=E.scissorTest}else L.copy(oe).multiplyScalar(D).floor(),I.copy(Se).multiplyScalar(D).floor(),z=Ie;if(V!==0&&(O=sv),Ae.bindFramebuffer(N.FRAMEBUFFER,O)&&G&&Ae.drawBuffers(E,O),Ae.viewport(L),Ae.scissor(I),Ae.setScissorTest(z),re){const ye=Te.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,V)}else if(ue){const ye=Te.get(E.texture),Ne=F;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,V,Ne)}else if(E!==null&&V!==0){const ye=Te.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,V)}w=-1},this.readRenderTargetPixels=function(E,F,V,G,O,re,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){Ae.bindFramebuffer(N.FRAMEBUFFER,ge);try{const ye=E.texture,Ne=ye.format,De=ye.type;if(!Be.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&V>=0&&V<=E.height-O&&N.readPixels(F,V,G,O,ke.convert(Ne),ke.convert(De),re)}finally{const ye=T!==null?Te.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,G,O,re,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){const ye=E.texture,Ne=ye.format,De=ye.type;if(!Be.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-G&&V>=0&&V<=E.height-O){Ae.bindFramebuffer(N.FRAMEBUFFER,ge);const Ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(F,V,G,O,ke.convert(Ne),ke.convert(De),0);const Ye=T!==null?Te.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,Ye);const et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await h1(N,et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(Ce),N.deleteSync(et),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,V=0){E.isTexture!==!0&&(jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-V),O=Math.floor(E.image.width*G),re=Math.floor(E.image.height*G),ue=F!==null?F.x:0,ge=F!==null?F.y:0;R.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,ue,ge,O,re),Ae.unbindTexture()};const ov=N.createFramebuffer(),av=N.createFramebuffer();this.copyTextureToTexture=function(E,F,V=null,G=null,O=0,re=null){E.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],F=arguments[2],re=arguments[3]||0,V=null),re===null&&(O!==0?(jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let ue,ge,ye,Ne,De,Ce,Ye,et,Et;const yt=E.isCompressedTexture?E.mipmaps[re]:E.image;if(V!==null)ue=V.max.x-V.min.x,ge=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Ne=V.min.x,De=V.min.y,Ce=V.isBox3?V.min.z:0;else{const xn=Math.pow(2,-O);ue=Math.floor(yt.width*xn),ge=Math.floor(yt.height*xn),E.isDataArrayTexture?ye=yt.depth:E.isData3DTexture?ye=Math.floor(yt.depth*xn):ye=1,Ne=0,De=0,Ce=0}G!==null?(Ye=G.x,et=G.y,Et=G.z):(Ye=0,et=0,Et=0);const Ke=ke.convert(F.format),be=ke.convert(F.type);let Dt;F.isData3DTexture?(R.setTexture3D(F,0),Dt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Dt=N.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Dt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=N.getParameter(N.UNPACK_ROW_LENGTH),Pn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Rr=N.getParameter(N.UNPACK_SKIP_PIXELS),an=N.getParameter(N.UNPACK_SKIP_ROWS),Is=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,yt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),N.pixelStorei(N.UNPACK_SKIP_ROWS,De),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce);const ft=E.isDataArrayTexture||E.isData3DTexture,_n=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const xn=Te.get(E),Wt=Te.get(F),Zt=Te.get(xn.__renderTarget),Vl=Te.get(Wt.__renderTarget);Ae.bindFramebuffer(N.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,Vl.__webglFramebuffer);for(let er=0;er<ye;er++)ft&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.get(E).__webglTexture,O,Ce+er),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.get(F).__webglTexture,re,Et+er)),N.blitFramebuffer(Ne,De,ue,ge,Ye,et,ue,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);Ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||Te.has(E)){const xn=Te.get(E),Wt=Te.get(F);Ae.bindFramebuffer(N.READ_FRAMEBUFFER,ov),Ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,av);for(let Zt=0;Zt<ye;Zt++)ft?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xn.__webglTexture,O,Ce+Zt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xn.__webglTexture,O),_n?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Wt.__webglTexture,re,Et+Zt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Wt.__webglTexture,re),O!==0?N.blitFramebuffer(Ne,De,ue,ge,Ye,et,ue,ge,N.COLOR_BUFFER_BIT,N.NEAREST):_n?N.copyTexSubImage3D(Dt,re,Ye,et,Et+Zt,Ne,De,ue,ge):N.copyTexSubImage2D(Dt,re,Ye,et,Ne,De,ue,ge);Ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else _n?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Dt,re,Ye,et,Et,ue,ge,ye,Ke,be,yt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Dt,re,Ye,et,Et,ue,ge,ye,Ke,yt.data):N.texSubImage3D(Dt,re,Ye,et,Et,ue,ge,ye,Ke,be,yt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,re,Ye,et,ue,ge,Ke,be,yt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,re,Ye,et,yt.width,yt.height,Ke,yt.data):N.texSubImage2D(N.TEXTURE_2D,re,Ye,et,ue,ge,Ke,be,yt);N.pixelStorei(N.UNPACK_ROW_LENGTH,tt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Rr),N.pixelStorei(N.UNPACK_SKIP_ROWS,an),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Is),re===0&&F.generateMipmaps&&N.generateMipmap(Dt),Ae.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V=null,G=null,O=0){return E.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,V,G,O)},this.initRenderTarget=function(E){Te.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ae.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Ae.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const Uw=()=>{const t=Qe.useRef(null);return Qe.useEffect(()=>{const e=t.current;if(!e)return;const n=new B1,i=new dn(60,window.innerWidth/window.innerHeight,.1,100);i.position.set(0,0,9);const r=new Iw({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(0,0),e.appendChild(r.domElement);const s=new K1(9169405,.8);n.add(s);const o=new Lp(2282478,1.8,40);o.position.set(6,4,8),n.add(o);const a=new Lp(3462041,1.4,30);a.position.set(-7,-3,6),n.add(a);const l=new $g({color:8246268,emissive:805486,metalness:.8,roughness:.25,wireframe:!0}),c=new W1({color:2282478,emissive:725280,metalness:.3,roughness:.15,transmission:.6,transparent:!0,opacity:.5}),d=new Tn(new If(1.3,.32,180,24),l);d.position.set(2.8,1.6,-1),n.add(d);const h=new Tn(new Nf(1.2,1),c);h.position.set(-3,-1.3,-.6),n.add(h);const f=new Tn(new Df(.95,0),l.clone());f.position.set(.2,2.5,-2),n.add(f);const p=900,_=new jn,y=new Float32Array(p*3);for(let T=0;T<p*3;T+=3)y[T]=(Math.random()-.5)*24,y[T+1]=(Math.random()-.5)*20,y[T+2]=(Math.random()-.5)*16;_.setAttribute("position",new Gn(y,3));const m=new qg({color:9684477,size:.03,transparent:!0,opacity:.65}),u=new G1(_,m);n.add(u);const g=new Ge(0,0),v=T=>{g.x=T.clientX/window.innerWidth*2-1,g.y=-(T.clientY/window.innerHeight*2-1)},x=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2))};window.addEventListener("resize",x),window.addEventListener("mousemove",v,{passive:!0});let P=0;const C=new Q1,A=()=>{const T=C.getElapsedTime();d.rotation.x=T*.22,d.rotation.y=T*.28,h.rotation.x=-T*.18,h.rotation.z=T*.22,h.position.y=-1.3+Math.sin(T*.9)*.2,f.rotation.y=-T*.5,f.rotation.x=T*.24,f.position.x=.2+Math.cos(T*.7)*.2,u.rotation.y=T*.03,u.rotation.x=T*.02,i.position.x+=(g.x*.7-i.position.x)*.04,i.position.y+=(g.y*.4-i.position.y)*.04,i.lookAt(0,0,0),r.render(n,i),P=window.requestAnimationFrame(A)};return A(),()=>{window.cancelAnimationFrame(P),window.removeEventListener("resize",x),window.removeEventListener("mousemove",v),e.removeChild(r.domElement),d.geometry.dispose(),h.geometry.dispose(),f.geometry.dispose(),_.dispose(),l.dispose(),c.dispose(),m.dispose(),r.dispose()}},[]),b.jsx("div",{ref:t,className:"three-scene","aria-hidden":"true"})},Fw={projects:[],moreProjects:[],archive:[]},Ow=()=>{const[t,e]=Qe.useState(Fw),[n,i]=Qe.useState(!0),[r,s]=Qe.useState(null);return Qe.useEffect(()=>{let o=!0;return(async()=>{try{const c=await fetch("/moazzamgodil/data/projects.json",{cache:"no-store"});if(!c.ok)throw new Error(`Failed to load project database: ${c.status}`);const d=await c.json();o&&e(d)}catch(l){o&&s(l instanceof Error?l.message:"Unknown error")}finally{o&&i(!1)}})(),()=>{o=!1}},[]),{data:t,loading:n,error:r}},kw=({loading:t})=>{const[e,n]=Qe.useState(0);return Qe.useEffect(()=>{if(e==1)return;if(e==0){n(1);return}const i=setTimeout(()=>{t()},3e3);return()=>{clearTimeout(i),n(0)}},[e]),Qe.useEffect(()=>{const i=()=>{setTimeout(()=>{n(2)},3e3)};if(document.readyState==="complete")i();else return window.addEventListener("load",i),()=>window.removeEventListener("load",i)},[]),b.jsxs("div",{className:`flex justify-center items-center h-screen transition-opacity duration-[3000ms] ${e!=1?"opacity-0":"opacity-100"}`,children:[b.jsx("div",{className:"absolute w-52 h-52 border-4 border-light border-t-primary rounded-full animate-spin"}),b.jsxs("div",{className:"preLoader",children:[b.jsx("span",{"data-text":"M",children:"M"}),b.jsx("span",{"data-text":"G",children:"G"})]})]})};function zw(){const[t,e]=Qe.useState(!0),[n,i]=Qe.useState(!1),{data:r}=Ow();return Qe.useEffect(()=>{My.init({duration:1e3,easing:"ease-in-out",anchorPlacement:"bottom-bottom"})},[]),Qe.useEffect(()=>{const s=()=>{document.documentElement.style.setProperty("--scroll-y",`${window.scrollY}px`)};return s(),window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),Qe.useEffect(()=>{const s=o=>{const a=(o.clientX/window.innerWidth-.5)*2,l=(o.clientY/window.innerHeight-.5)*2;document.documentElement.style.setProperty("--pointer-x",a.toFixed(4)),document.documentElement.style.setProperty("--pointer-y",l.toFixed(4))};return window.addEventListener("mousemove",s,{passive:!0}),()=>window.removeEventListener("mousemove",s)},[]),Qe.useEffect(()=>{const s=()=>{window.location.hash=="#archive"?i(!0):i(!1)};return window.addEventListener("hashchange",s),s(),()=>{window.removeEventListener("hashchange",s)}},[]),b.jsxs("div",{className:"min-h-screen relative overflow-hidden app-theme",children:[b.jsx(Uw,{}),b.jsx("div",{className:"parallax-orb orb-a","aria-hidden":"true"}),b.jsx("div",{className:"parallax-orb orb-b","aria-hidden":"true"}),b.jsx("div",{className:"parallax-grid","aria-hidden":"true"}),t?b.jsx(kw,{loading:()=>e(!1)}):n?b.jsxs(b.Fragment,{children:[b.jsx(Qh,{}),b.jsx(Ey,{data:r.archive}),b.jsx(tp,{})]}):b.jsxs(b.Fragment,{children:[b.jsx(Qh,{}),b.jsx(sy,{}),b.jsx(oy,{}),b.jsx(ay,{}),b.jsx(ly,{}),b.jsx(_y,{}),b.jsx(xy,{projects:r.projects,moreProjects:r.moreProjects}),b.jsx(yy,{}),b.jsx(tp,{})]})]})}gg(document.getElementById("root")).render(b.jsx(Qe.StrictMode,{children:b.jsx(zw,{})}));
