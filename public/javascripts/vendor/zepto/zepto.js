var Zepto=function(){function e(e){return null==e?String(e):W[z.call(e)]||"object"}function t(t){return"function"==e(t)}function n(e){return null!=e&&e==e.window}function r(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE}function o(t){return"object"==e(t)}function i(e){return o(e)&&!n(e)&&Object.getPrototypeOf(e)==Object.prototype}function a(e){return"number"==typeof e.length}function s(e){return R.call(e,function(e){return null!=e})}function u(e){return e.length>0?w.fn.concat.apply([],e):e}function c(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(e){return e in k?k[e]:k[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function p(e,t){return"number"!=typeof t||A[c(e)]?t:t+"px"}function f(e){var t,n;return D[e]||(t=T.createElement(e),T.body.appendChild(t),n=getComputedStyle(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),"none"==n&&(n="block"),D[e]=n),D[e]}function d(e){return"children"in e?O.call(e.children):w.map(e.childNodes,function(e){return 1==e.nodeType?e:void 0})}function h(e,t,n){for(x in t)n&&(i(t[x])||Y(t[x]))?(i(t[x])&&!i(e[x])&&(e[x]={}),Y(t[x])&&!Y(e[x])&&(e[x]=[]),h(e[x],t[x],n)):t[x]!==E&&(e[x]=t[x])}function m(e,t){return null==t?w(e):w(e).filter(t)}function g(e,n,r,o){return t(n)?n.call(e,r,o):n}function v(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function y(e,t){var n=e.className,r=n&&n.baseVal!==E;return t===E?r?n.baseVal:n:void(r?n.baseVal=t:e.className=t)}function b(e){var t;try{return e?"true"==e||("false"==e?!1:"null"==e?null:/^0/.test(e)||isNaN(t=Number(e))?/^[\[\{]/.test(e)?w.parseJSON(e):e:t):e}catch(n){return e}}function C(e,t){t(e);for(var n in e.childNodes)C(e.childNodes[n],t)}var E,x,w,S,M,I,_=[],O=_.slice,R=_.filter,T=window.document,D={},k={},A={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},P=/^\s*<(\w+|!)[^>]*>/,N=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,L=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,j=/^(?:body|html)$/i,U=/([A-Z])/g,B=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],q=T.createElement("table"),V=T.createElement("tr"),X={tr:T.createElement("tbody"),tbody:q,thead:q,tfoot:q,td:V,th:V,"*":T.createElement("div")},J=/complete|loaded|interactive/,H=/^[\w-]*$/,W={},z=W.toString,G={},K=T.createElement("div"),$={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(e){return e instanceof Array};return G.matches=function(e,t){if(!t||!e||1!==e.nodeType)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,o=e.parentNode,i=!o;return i&&(o=K).appendChild(e),r=~G.qsa(o,t).indexOf(e),i&&K.removeChild(e),r},M=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},I=function(e){return R.call(e,function(t,n){return e.indexOf(t)==n})},G.fragment=function(e,t,n){var r,o,a;return N.test(e)&&(r=w(T.createElement(RegExp.$1))),r||(e.replace&&(e=e.replace(L,"<$1></$2>")),t===E&&(t=P.test(e)&&RegExp.$1),t in X||(t="*"),a=X[t],a.innerHTML=""+e,r=w.each(O.call(a.childNodes),function(){a.removeChild(this)})),i(n)&&(o=w(r),w.each(n,function(e,t){B.indexOf(e)>-1?o[e](t):o.attr(e,t)})),r},G.Z=function(e,t){return e=e||[],e.__proto__=w.fn,e.selector=t||"",e},G.isZ=function(e){return e instanceof G.Z},G.init=function(e,n){var r;if(!e)return G.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&P.test(e))r=G.fragment(e,RegExp.$1,n),e=null;else{if(n!==E)return w(n).find(e);r=G.qsa(T,e)}else{if(t(e))return w(T).ready(e);if(G.isZ(e))return e;if(Y(e))r=s(e);else if(o(e))r=[e],e=null;else if(P.test(e))r=G.fragment(e.trim(),RegExp.$1,n),e=null;else{if(n!==E)return w(n).find(e);r=G.qsa(T,e)}}return G.Z(r,e)},w=function(e,t){return G.init(e,t)},w.extend=function(e){var t,n=O.call(arguments,1);return"boolean"==typeof e&&(t=e,e=n.shift()),n.forEach(function(n){h(e,n,t)}),e},G.qsa=function(e,t){var n,o="#"==t[0],i=!o&&"."==t[0],a=o||i?t.slice(1):t,s=H.test(a);return r(e)&&s&&o?(n=e.getElementById(a))?[n]:[]:1!==e.nodeType&&9!==e.nodeType?[]:O.call(s&&!o?i?e.getElementsByClassName(a):e.getElementsByTagName(t):e.querySelectorAll(t))},w.contains=function(e,t){return e!==t&&e.contains(t)},w.type=e,w.isFunction=t,w.isWindow=n,w.isArray=Y,w.isPlainObject=i,w.isEmptyObject=function(e){var t;for(t in e)return!1;return!0},w.inArray=function(e,t,n){return _.indexOf.call(t,e,n)},w.camelCase=M,w.trim=function(e){return null==e?"":String.prototype.trim.call(e)},w.uuid=0,w.support={},w.expr={},w.map=function(e,t){var n,r,o,i=[];if(a(e))for(r=0;r<e.length;r++)n=t(e[r],r),null!=n&&i.push(n);else for(o in e)n=t(e[o],o),null!=n&&i.push(n);return u(i)},w.each=function(e,t){var n,r;if(a(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},w.grep=function(e,t){return R.call(e,t)},window.JSON&&(w.parseJSON=JSON.parse),w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){W["[object "+t+"]"]=t.toLowerCase()}),w.fn={forEach:_.forEach,reduce:_.reduce,push:_.push,sort:_.sort,indexOf:_.indexOf,concat:_.concat,map:function(e){return w(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return w(O.apply(this,arguments))},ready:function(e){return J.test(T.readyState)&&T.body?e(w):T.addEventListener("DOMContentLoaded",function(){e(w)},!1),this},get:function(e){return e===E?O.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(e){return _.every.call(this,function(t,n){return e.call(t,n,t)!==!1}),this},filter:function(e){return t(e)?this.not(this.not(e)):w(R.call(this,function(t){return G.matches(t,e)}))},add:function(e,t){return w(I(this.concat(w(e,t))))},is:function(e){return this.length>0&&G.matches(this[0],e)},not:function(e){var n=[];if(t(e)&&e.call!==E)this.each(function(t){e.call(this,t)||n.push(this)});else{var r="string"==typeof e?this.filter(e):a(e)&&t(e.item)?O.call(e):w(e);this.forEach(function(e){r.indexOf(e)<0&&n.push(e)})}return w(n)},has:function(e){return this.filter(function(){return o(e)?w.contains(this,e):w(this).find(e).size()})},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!o(e)?e:w(e)},last:function(){var e=this[this.length-1];return e&&!o(e)?e:w(e)},find:function(e){var t,n=this;return t="object"==typeof e?w(e).filter(function(){var e=this;return _.some.call(n,function(t){return w.contains(t,e)})}):1==this.length?w(G.qsa(this[0],e)):this.map(function(){return G.qsa(this,e)})},closest:function(e,t){var n=this[0],o=!1;for("object"==typeof e&&(o=w(e));n&&!(o?o.indexOf(n)>=0:G.matches(n,e));)n=n!==t&&!r(n)&&n.parentNode;return w(n)},parents:function(e){for(var t=[],n=this;n.length>0;)n=w.map(n,function(e){return(e=e.parentNode)&&!r(e)&&t.indexOf(e)<0?(t.push(e),e):void 0});return m(t,e)},parent:function(e){return m(I(this.pluck("parentNode")),e)},children:function(e){return m(this.map(function(){return d(this)}),e)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(e){return m(this.map(function(e,t){return R.call(d(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return w.map(this,function(t){return t[e]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=f(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var n=t(e);if(this[0]&&!n)var r=w(e).get(0),o=r.parentNode||this.length>1;return this.each(function(t){w(this).wrapAll(n?e.call(this,t):o?r.cloneNode(!0):r)})},wrapAll:function(e){if(this[0]){w(this[0]).before(e=w(e));for(var t;(t=e.children()).length;)e=t.first();w(e).append(this)}return this},wrapInner:function(e){var n=t(e);return this.each(function(t){var r=w(this),o=r.contents(),i=n?e.call(this,t):e;o.length?o.wrapAll(i):r.append(i)})},unwrap:function(){return this.parent().each(function(){w(this).replaceWith(w(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=w(this);(e===E?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(e){return w(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return w(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(t){var n=this.innerHTML;w(this).empty().append(g(this,e,t,n))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===E?"":""+e})},attr:function(e,t){var n;return"string"==typeof e&&t===E?0==this.length||1!==this[0].nodeType?E:"value"==e&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(e))&&e in this[0]?this[0][e]:n:this.each(function(n){if(1===this.nodeType)if(o(e))for(x in e)v(this,x,e[x]);else v(this,e,g(this,t,n,this.getAttribute(e)))})},removeAttr:function(e){return this.each(function(){1===this.nodeType&&v(this,e)})},prop:function(e,t){return e=$[e]||e,t===E?this[0]&&this[0][e]:this.each(function(n){this[e]=g(this,t,n,this[e])})},data:function(e,t){var n=this.attr("data-"+e.replace(U,"-$1").toLowerCase(),t);return null!==n?b(n):E},val:function(e){return 0===arguments.length?this[0]&&(this[0].multiple?w(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(t){this.value=g(this,e,t,this.value)})},offset:function(e){if(e)return this.each(function(t){var n=w(this),r=g(this,e,t,n.offset()),o=n.offsetParent().offset(),i={top:r.top-o.top,left:r.left-o.left};"static"==n.css("position")&&(i.position="relative"),n.css(i)});if(0==this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,n){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[M(t)]||o.getPropertyValue(t);if(Y(t)){var i={};return w.each(Y(t)?t:[t],function(e,t){i[t]=r.style[M(t)]||o.getPropertyValue(t)}),i}}var a="";if("string"==e(t))n||0===n?a=c(t)+":"+p(t,n):this.each(function(){this.style.removeProperty(c(t))});else for(x in t)t[x]||0===t[x]?a+=c(x)+":"+p(x,t[x])+";":this.each(function(){this.style.removeProperty(c(x))});return this.each(function(){this.style.cssText+=";"+a})},index:function(e){return e?this.indexOf(w(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return e?_.some.call(this,function(e){return this.test(y(e))},l(e)):!1},addClass:function(e){return e?this.each(function(t){S=[];var n=y(this),r=g(this,e,t,n);r.split(/\s+/g).forEach(function(e){w(this).hasClass(e)||S.push(e)},this),S.length&&y(this,n+(n?" ":"")+S.join(" "))}):this},removeClass:function(e){return this.each(function(t){return e===E?y(this,""):(S=y(this),g(this,e,t,S).split(/\s+/g).forEach(function(e){S=S.replace(l(e)," ")}),void y(this,S.trim()))})},toggleClass:function(e,t){return e?this.each(function(n){var r=w(this),o=g(this,e,n,y(this));o.split(/\s+/g).forEach(function(e){(t===E?!r.hasClass(e):t)?r.addClass(e):r.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var t="scrollTop"in this[0];return e===E?t?this[0].scrollTop:this[0].pageYOffset:this.each(t?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var t="scrollLeft"in this[0];return e===E?t?this[0].scrollLeft:this[0].pageXOffset:this.each(t?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var e=this[0],t=this.offsetParent(),n=this.offset(),r=j.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(w(e).css("margin-top"))||0,n.left-=parseFloat(w(e).css("margin-left"))||0,r.top+=parseFloat(w(t[0]).css("border-top-width"))||0,r.left+=parseFloat(w(t[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||T.body;e&&!j.test(e.nodeName)&&"static"==w(e).css("position");)e=e.offsetParent;return e})}},w.fn.detach=w.fn.remove,["width","height"].forEach(function(e){var t=e.replace(/./,function(e){return e[0].toUpperCase()});w.fn[e]=function(o){var i,a=this[0];return o===E?n(a)?a["inner"+t]:r(a)?a.documentElement["scroll"+t]:(i=this.offset())&&i[e]:this.each(function(t){a=w(this),a.css(e,g(this,o,t,a[e]()))})}}),F.forEach(function(t,n){var r=n%2;w.fn[t]=function(){var t,o,i=w.map(arguments,function(n){return t=e(n),"object"==t||"array"==t||null==n?n:G.fragment(n)}),a=this.length>1;return i.length<1?this:this.each(function(e,t){o=r?t:t.parentNode,t=0==n?t.nextSibling:1==n?t.firstChild:2==n?t:null,i.forEach(function(e){if(a)e=e.cloneNode(!0);else if(!o)return w(e).remove();C(o.insertBefore(e,t),function(e){null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src||window.eval.call(window,e.innerHTML)})})})},w.fn[r?t+"To":"insert"+(n?"Before":"After")]=function(e){return w(e)[t](this),this}}),G.Z.prototype=w.fn,G.uniq=I,G.deserializeValue=b,w.zepto=G,w}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(e){function t(e){return e._zid||(e._zid=f++)}function n(e,n,i,a){if(n=r(n),n.ns)var s=o(n.ns);return(g[t(e)]||[]).filter(function(e){return!(!e||n.e&&e.e!=n.e||n.ns&&!s.test(e.ns)||i&&t(e.fn)!==t(i)||a&&e.sel!=a)})}function r(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function o(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function i(e,t){return e.del&&!y&&e.e in b||!!t}function a(e){return C[e]||y&&b[e]||e}function s(n,o,s,u,l,f,d){var h=t(n),m=g[h]||(g[h]=[]);o.split(/\s/).forEach(function(t){if("ready"==t)return e(document).ready(s);var o=r(t);o.fn=s,o.sel=l,o.e in C&&(s=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=f;var h=f||s;o.proxy=function(e){if(e=c(e),!e.isImmediatePropagationStopped()){e.data=u;var t=h.apply(n,e._args==p?[e]:[e].concat(e._args));return t===!1&&(e.preventDefault(),e.stopPropagation()),t}},o.i=m.length,m.push(o),"addEventListener"in n&&n.addEventListener(a(o.e),o.proxy,i(o,d))})}function u(e,r,o,s,u){var c=t(e);(r||"").split(/\s/).forEach(function(t){n(e,t,o,s).forEach(function(t){delete g[c][t.i],"removeEventListener"in e&&e.removeEventListener(a(t.e),t.proxy,i(t,u))})})}function c(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(S,function(e,r){var o=n[e];t[e]=function(){return this[r]=E,o&&o.apply(n,arguments)},t[r]=x}),(n.defaultPrevented!==p?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=E)),t}function l(e){var t,n={originalEvent:e};for(t in e)w.test(t)||e[t]===p||(n[t]=e[t]);return c(n,e)}var p,f=1,d=Array.prototype.slice,h=e.isFunction,m=function(e){return"string"==typeof e},g={},v={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},C={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",e.event={add:s,remove:u},e.proxy=function(n,r){if(h(n)){var o=function(){return n.apply(r,arguments)};return o._zid=t(n),o}if(m(r))return e.proxy(n[r],n);throw new TypeError("expected function")},e.fn.bind=function(e,t,n){return this.on(e,t,n)},e.fn.unbind=function(e,t){return this.off(e,t)},e.fn.one=function(e,t,n,r){return this.on(e,t,n,r,1)};var E=function(){return!0},x=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(e,t,n){return this.on(t,e,n)},e.fn.undelegate=function(e,t,n){return this.off(t,e,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r,o,i){var a,c,f=this;return t&&!m(t)?(e.each(t,function(e,t){f.on(e,n,r,t,i)}),f):(m(n)||h(o)||o===!1||(o=r,r=n,n=p),(h(r)||r===!1)&&(o=r,r=p),o===!1&&(o=x),f.each(function(p,f){i&&(a=function(e){return u(f,e.type,o),o.apply(this,arguments)}),n&&(c=function(t){var r,i=e(t.target).closest(n,f).get(0);return i&&i!==f?(r=e.extend(l(t),{currentTarget:i,liveFired:f}),(a||o).apply(i,[r].concat(d.call(arguments,1)))):void 0}),s(f,t,o,r,n,c||a)}))},e.fn.off=function(t,n,r){var o=this;return t&&!m(t)?(e.each(t,function(e,t){o.off(e,n,t)}),o):(m(n)||h(r)||r===!1||(r=n,n=p),r===!1&&(r=x),o.each(function(){u(this,t,r,n)}))},e.fn.trigger=function(t,n){return t=m(t)||e.isPlainObject(t)?e.Event(t):c(t),t._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,r){var o,i;return this.each(function(a,s){o=l(m(t)?e.Event(t):t),o._args=r,o.target=s,e.each(n(s,t.type||t),function(e,t){return i=t.proxy(o),o.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.each(function(){try{this[t]()}catch(e){}}),this}}),e.Event=function(e,t){m(e)||(t=e,e=t.type);var n=document.createEvent(v[e]||"Events"),r=!0;if(t)for(var o in t)"bubbles"==o?r=!!t[o]:n[o]=t[o];return n.initEvent(e,r,!0),c(n)}}(Zepto),function(e){function t(t,n,r){var o=e.Event(n);return e(t).trigger(o,r),!o.isDefaultPrevented()}function n(e,n,r,o){return e.global?t(n||y,r,o):void 0}function r(t){t.global&&0===e.active++&&n(t,null,"ajaxStart")}function o(t){t.global&&!--e.active&&n(t,null,"ajaxStop")}function i(e,t){var r=t.context;return t.beforeSend.call(r,e,t)===!1||n(t,r,"ajaxBeforeSend",[e,t])===!1?!1:void n(t,r,"ajaxSend",[e,t])}function a(e,t,r,o){var i=r.context,a="success";r.success.call(i,e,a,t),o&&o.resolveWith(i,[e,a,t]),n(r,i,"ajaxSuccess",[t,r,e]),u(a,t,r)}function s(e,t,r,o,i){var a=o.context;o.error.call(a,r,t,e),i&&i.rejectWith(a,[r,t,e]),n(o,a,"ajaxError",[r,o,e||t]),u(t,r,o)}function u(e,t,r){var i=r.context;r.complete.call(i,t,e),n(r,i,"ajaxComplete",[t,r]),o(r)}function c(){}function l(e){return e&&(e=e.split(";",2)[0]),e&&(e==w?"html":e==x?"json":C.test(e)?"script":E.test(e)&&"xml")||"text"}function p(e,t){return""==t?e:(e+"&"+t).replace(/[&?]{1,2}/,"?")}function f(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()||(t.url=p(t.url,t.data),t.data=void 0)}function d(t,n,r,o){return e.isFunction(n)&&(o=r,r=n,n=void 0),e.isFunction(r)||(o=r,r=void 0),{url:t,data:n,success:r,dataType:o}}function h(t,n,r,o){var i,a=e.isArray(n),s=e.isPlainObject(n);e.each(n,function(n,u){i=e.type(u),o&&(n=r?o:o+"["+(s||"object"==i||"array"==i?n:"")+"]"),!o&&a?t.add(u.name,u.value):"array"==i||!r&&"object"==i?h(t,u,r,n):t.add(n,u)})}var m,g,v=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,C=/^(?:text|application)\/javascript/i,E=/^(?:text|application)\/xml/i,x="application/json",w="text/html",S=/^\s*$/;e.active=0,e.ajaxJSONP=function(t,n){if(!("type"in t))return e.ajax(t);var r,o,u=t.jsonpCallback,c=(e.isFunction(u)?u():u)||"jsonp"+ ++v,l=y.createElement("script"),p=window[c],f=function(t){e(l).triggerHandler("error",t||"abort")},d={abort:f};return n&&n.promise(d),e(l).on("load error",function(i,u){clearTimeout(o),e(l).off().remove(),"error"!=i.type&&r?a(r[0],d,t,n):s(null,u||"error",d,t,n),window[c]=p,r&&e.isFunction(p)&&p(r[0]),p=r=void 0}),i(d,t)===!1?(f("abort"),d):(window[c]=function(){r=arguments},l.src=t.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),t.timeout>0&&(o=setTimeout(function(){f("timeout")},t.timeout)),d)},e.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:x,xml:"application/xml, text/xml",html:w,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},e.ajax=function(t){var n=e.extend({},t||{}),o=e.Deferred&&e.Deferred();for(m in e.ajaxSettings)void 0===n[m]&&(n[m]=e.ajaxSettings[m]);r(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),f(n),n.cache===!1&&(n.url=p(n.url,"_="+Date.now()));var u=n.dataType,d=/\?.+=\?/.test(n.url);if("jsonp"==u||d)return d||(n.url=p(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),e.ajaxJSONP(n,o);var h,v=n.accepts[u],y={},b=function(e,t){y[e.toLowerCase()]=[e,t]},C=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,E=n.xhr(),x=E.setRequestHeader;if(o&&o.promise(E),n.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",v||"*/*"),(v=n.mimeType||v)&&(v.indexOf(",")>-1&&(v=v.split(",",2)[0]),E.overrideMimeType&&E.overrideMimeType(v)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&b("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(g in n.headers)b(g,n.headers[g]);if(E.setRequestHeader=b,E.onreadystatechange=function(){if(4==E.readyState){E.onreadystatechange=c,clearTimeout(h);var t,r=!1;if(E.status>=200&&E.status<300||304==E.status||0==E.status&&"file:"==C){u=u||l(n.mimeType||E.getResponseHeader("content-type")),t=E.responseText;try{"script"==u?(1,eval)(t):"xml"==u?t=E.responseXML:"json"==u&&(t=S.test(t)?null:e.parseJSON(t))}catch(i){r=i}r?s(r,"parsererror",E,n,o):a(t,E,n,o)}else s(E.statusText||null,E.status?"error":"abort",E,n,o)}},i(E,n)===!1)return E.abort(),s(null,"abort",E,n,o),E;if(n.xhrFields)for(g in n.xhrFields)E[g]=n.xhrFields[g];var w="async"in n?n.async:!0;E.open(n.type,n.url,w,n.username,n.password);for(g in y)x.apply(E,y[g]);return n.timeout>0&&(h=setTimeout(function(){E.onreadystatechange=c,E.abort(),s(null,"timeout",E,n,o)},n.timeout)),E.send(n.data?n.data:null),E},e.get=function(){return e.ajax(d.apply(null,arguments))},e.post=function(){var t=d.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=d.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var o,i=this,a=t.split(/\s/),s=d(t,n,r),u=s.success;return a.length>1&&(s.url=a[0],o=a[1]),s.success=function(t){i.html(o?e("<div>").html(t.replace(b,"")).find(o):t),u&&u.apply(i,arguments)},e.ajax(s),this};var M=encodeURIComponent;e.param=function(e,t){var n=[];return n.add=function(e,t){this.push(M(e)+"="+M(t))},h(n,e,t),n.join("&").replace(/%20/g,"+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t,n=[];return e([].slice.call(this.get(0).elements)).each(function(){t=e(this);var r=t.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&("radio"!=r&&"checkbox"!=r||this.checked)&&n.push({name:t.attr("name"),value:t.val()})}),n},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(e){"__proto__"in{}||e.extend(e.zepto,{Z:function(t,n){return t=t||[],e.extend(t,e.fn),t.selector=n||"",t.__Z=!0,t},isZ:function(t){return"array"===e.type(t)&&"__Z"in t}});try{getComputedStyle(void 0)}catch(t){var n=getComputedStyle;window.getComputedStyle=function(e){try{return n(e)}catch(t){return null}}}}(Zepto);
/*
//@ sourceMappingURL=zepto.js.map
*/