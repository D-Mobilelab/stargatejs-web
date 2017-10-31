!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Stargate=t():e.Stargate=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var i=n(1);e.exports=new function(){this.device=function(){},this.conf={getWebappStartUrl:function(){},getWebappOrigin:function(){},getManifestValue:function(){}},this.initialize=function(e,t){return"function"==typeof t&&t(!1),i.resolve(!1)},this.isInitialized=function(){return!0},this.isOpen=function(){return!1},this.isHybrid=function(){return!1},this.openUrl=function(){return!1},this.googleLogin=function(){},this.addListener=function(){},this.checkConnection=function(){},this.getDeviceID=function(){},this.goToLocalIndex=function(){},this.goToWebIndex=function(){},this.getVersion=function(){return"1.0-web"},this.getAppInformation=function(){},this.getAvailableFeatures=function(){},this.setAnalyticsCallback=function(){},this.setConversionDataCallback=function(){},this.iaplight={initialize:function(){return i.reject("Not implemented")},restore:function(){return i.reject("Not implemented")},getProductInfo:function(){return i.reject("Not implemented")},subscribe:function(){return i.reject("Not implemented")},isSubscribed:function(){return i.reject("Not implemented")},getActiveSubscriptionsInfo:function(){return i.reject("Not implemented")}},this.inAppPurchaseSubscription=function(){},this.inAppRestore=function(){},this.inAppProductInfo=function(){},this.push={initialize:function(){return i.reject("Not implemented")},setScheduledNotify:function(){return i.reject("Not implemented")}},this.socialShare=function(){},this.socialShareAvailable=function(){},this.setStatusbarVisibility=function(){}}},function(e,t,n){(function(t){!function(n){function i(){}function o(e,t){return function(){e.apply(t,arguments)}}function r(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function c(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,r._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var i;try{i=n(e._value)}catch(e){return void s(t.promise,e)}u(t.promise,i)}else(1===e._state?u:s)(t.promise,e._value)})):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void a(e);if("function"==typeof n)return void l(o(n,t),e)}e._state=1,e._value=t,a(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,a(e)}function a(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)c(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}var d=setTimeout;r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var n=new this.constructor(i);return c(this,new f(e,t,n)),n},r.all=function(e){var t=Array.prototype.slice.call(e);return new r(function(e,n){function i(r,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var u=c.then;if("function"==typeof u)return void u.call(c,function(e){i(r,e)},n)}t[r]=c,0==--o&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var o=t.length,r=0;r<t.length;r++)i(r,t[r])})},r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,n){for(var i=0,o=e.length;i<o;i++)e[i].then(t,n)})},r._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){d(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},r._setImmediateFn=function(e){r._immediateFn=e},r._setUnhandledRejectionFn=function(e){r._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=r:n.Promise||(n.Promise=r)}(this)}).call(t,n(2).setImmediate)},function(e,t,n){function i(e,t){this._id=e,this._clearFn=t}var o=Function.prototype.apply;t.setTimeout=function(){return new i(o.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(3),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){(function(e,t){!function(e,n){"use strict";function i(e){delete s[e]}function o(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i)}}function r(e){if(a)setTimeout(r,0,e);else{var t=s[e];if(t){a=!0;try{o(t)}finally{i(e),a=!1}}}}if(!e.setImmediate){var c,u=1,s={},a=!1,f=e.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(e);l=l&&l.setTimeout?l:e,"[object process]"==={}.toString.call(e.process)?c=function(e){t.nextTick(function(){r(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&r(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),c=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){r(e.data)},c=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;c=function(t){var n=f.createElement("script");n.onreadystatechange=function(){r(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():c=function(e){setTimeout(r,0,e)},l.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return s[u]=i,c(u),u++},l.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,function(){return this}(),n(4))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function r(e){if(l===clearTimeout)return clearTimeout(e);if((l===i||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function c(){m&&h&&(m=!1,h.length?p=h.concat(p):v=-1,p.length&&u())}function u(){if(!m){var e=o(c);m=!0;for(var t=p.length;t;){for(h=p,p=[];++v<t;)h&&h[v].run();v=-1,t=p.length}h=null,m=!1,r(e)}}function s(e,t){this.fun=e,this.array=t}function a(){}var f,l,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:i}catch(e){l=i}}();var h,p=[],m=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new s(e,t)),1!==p.length||m||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=a,d.addListener=a,d.once=a,d.off=a,d.removeListener=a,d.removeAllListeners=a,d.emit=a,d.prependListener=a,d.prependOnceListener=a,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}}])});
//# sourceMappingURL=stargate-web.js.map

/* stargatejs-web 1.0.0 */