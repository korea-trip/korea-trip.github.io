(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},s=n(1063),i=n(4651),u=n(7426);var l={};function c(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=s.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?s.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,m=f.as,p=e.children,v=e.replace,h=e.shallow,y=e.scroll,b=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,w=u.useIntersection({rootMargin:"200px"}),j=r(w,2),x=j[0],O=j[1],_=a.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);a.default.useEffect((function(){var e=O&&n&&s.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+m+(t?"%"+t:"")];e&&!r&&c(o,d,m,{locale:t})}),[m,d,O,b,n,o]);var k={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}))}(e,o,d,m,v,h,y,b)},onMouseEnter:function(e){s.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c(o,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:o&&o.locale,N=o&&o.isLocaleDomain&&s.getDomainLocale(m,E,o&&o.locales,o&&o.domainLocales);k.href=N||s.addBasePath(s.addLocale(m,E,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,u=o.useRef(),l=o.useState(!1),c=r(l,2),f=c[0],d=c[1],m=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!s&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[m,f]};var o=n(7294),a=n(3447),s="undefined"!==typeof IntersectionObserver;var i=new Map},8771:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=s.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a(a({},r),e));var o=r=a(a({},r),t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return n(o);r.loadableGenerated&&delete(r=a(a({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};i(n(7294));var s=i(n(4860));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4860:function(e,t,n){"use strict";var r=n(2553),o=n(2012),a=n(1682);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,f=(c=n(7294))&&c.__esModule?c:{default:c},d=n(7161),m=n(1083);var p=[],v=[],h=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=f.default.lazy(n.loader));var r=null;function o(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h&&"function"===typeof n.webpack&&!n.suspense){var a=n.webpack();v.push((function(e){var t,n=u(a);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(s){n.e(s)}finally{n.f()}}))}var s=n.suspense?function(e,t){return f.default.createElement(n.lazy,i(i({},e),{},{ref:t}))}:function(e,t){o();var a=f.default.useContext(m.LoadableContext),s=d.useSubscription(r);return f.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),f.default.useMemo((function(){return s.loading||s.error?f.default.createElement(n.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:r.retry}):s.loaded?f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(s.loaded),e):null}),[e,s])};return s.preload=function(){return!n.suspense&&o()},s.displayName="LoadableComponent",f.default.forwardRef(s)}(y,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}g.preloadAll=function(){return new Promise((function(e,t){w(p).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};w(v,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var j=g;t.default=j},4032:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(2809),o=n(4298),a=n(7294),s=n(5893),i=function(){return(0,s.jsxs)("footer",{className:"w-full max-w-6xl text-center mt-10 text-slate-300 text-sm",children:[(0,s.jsx)("div",{className:"text-xs text-gray-400",children:"Korea Tourism Organization"}),(0,s.jsx)("div",{children:"\xa9 2022 KOREA TRIP \u2014 @dryadsoft"})]})},u=n(9120),l=n(1664),c=function(){return(0,s.jsxs)("header",{className:"w-full max-w-6xl m-2 flex flex-col sm:m-5 md:flex-row sm:justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center transition duration-100 transform hover:scale-105",children:[(0,s.jsx)(u.Zlt,{className:"h-36 sm:h-40"}),(0,s.jsx)("p",{className:"text-4xl font-extrabold text-center sm:text-left sm:text-5xl",children:"Korea Trip"})]}),(0,s.jsxs)("div",{className:"m-5 flex flex-row items-start justify-center",children:[(0,s.jsx)(l.default,{href:"/",children:(0,s.jsx)("a",{children:(0,s.jsx)(u.tvw,{className:"h-8 mx-2 cursor-pointer transition duration-100 transform hover:scale-105 hover:text-red-100  "})})}),(0,s.jsx)(l.default,{href:"/search",children:(0,s.jsx)("a",{children:(0,s.jsx)(u.W1M,{className:"h-8 mx-2 cursor-pointer transition duration-100 transform hover:scale-105 hover:text-red-100"})})})]})]})},f=(0,n(5152).default)((function(){return n.e(974).then(n.bind(n,6974))}),{ssr:!1,loadableGenerated:{webpack:function(){return[6974]},modules:["../components/navbar.tsx -> ./activeLink"]}}),d=function(e){var t=e.navList,n=(0,a.useState)([]),r=n[0],o=n[1];return(0,a.useEffect)((function(){var e=JSON.parse(String('[{"sort":1,"name":"Seoul","convertName":""},{"sort":2,"name":"Incheon","convertName":""},{"sort":3,"name":"Daejeon","convertName":""},{"sort":4,"name":"Daegu","convertName":""},{"sort":5,"name":"Gwangju","convertName":""},{"sort":6,"name":"Busan","convertName":""},{"sort":7,"name":"Ulsan","convertName":""},{"sort":8,"name":"Sejong","convertName":""},{"sort":9,"name":"Gyeonggi-do","convertName":""},{"sort":10,"name":"Gangwon-do","convertName":""},{"sort":11,"name":"Chungcheongbuk-do","convertName":""},{"sort":12,"name":"Chungcheongnam-do","convertName":""},{"sort":13,"name":"Gyeongsangbuk-do","convertName":""},{"sort":14,"name":"Gyeongsangnam-do","convertName":""},{"sort":15,"name":"Jeollabuk-do","convertName":""},{"sort":16,"name":"Jeollanam-do","convertName":""},{"sort":17,"name":"Jeju-do","convertName":""}]')).filter((function(e){return t.includes(e.name)}));o(e)}),[]),(0,s.jsx)(s.Fragment,{children:r&&r.length>1?(0,s.jsx)("nav",{className:"w-full max-w-5xl mb-6 bg-gray-500/20 z-50 sm:rounded-md sm:mb-10 sm:w-11/12 select-none",children:(0,s.jsx)("ul",{className:"list-none scrollbar-hide flex items-center justify-start text-base font-medium px-4 h-10 overflow-hidden overflow-x-auto sm:font-semibold",children:r.map((function(e,t){return(0,s.jsx)(f,{href:"/".concat(e.name),title:e.convertName?e.convertName.split("/")[e.convertName.split("/").length-1]:e.name.split("/")[e.name.split("/").length-1]},t)}))})}):null})},m=function(e){var t=e.children,n=e.navList;return(0,s.jsxs)("div",{className:"container flex flex-col mx-auto items-center text-gray-200 h-full w-screen ",children:[(0,s.jsx)(c,{}),(0,s.jsx)(d,{navList:n}),(0,s.jsx)("main",{className:"w-full sm:w-11/12",children:t}),(0,s.jsx)(i,{})]})};n(3146);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.Component,n=e.pageProps;return(0,s.jsxs)(m,{navList:n.navList,children:[(0,s.jsx)(o.default,{strategy:"lazyOnload",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=".concat("ca-pub-6129182328804743")}),(0,s.jsx)(t,v({},n))]})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4032)}])},3146:function(){},5152:function(e,t,n){e.exports=n(8771)},1664:function(e,t,n){e.exports=n(2167)},4298:function(e,t,n){e.exports=n(7926)},9120:function(e,t,n){"use strict";n.d(t,{M8z:function(){return o},tvw:function(){return a},Zlt:function(){return s},W1M:function(){return i},b0D:function(){return u}});var r=n(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"}))};var a=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}))};var s=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"}))};var i=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))};var u=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);