"use strict";function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}var titleTime,navFn={switchDarkMode:function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((function(){return window.disqusReset()}),200)}},OriginTitile=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="(゜-゜)つロ realwds's blog",clearTimeout(titleTime)):document.title=OriginTitile}));var getTimeState=function(){var t=(new Date).getHours(),e="";return 0<=t&&t<=5?e="夜深了":5<t&&t<=10?e="早上好":10<t&&t<=13?e="中午好":13<t&&t<=18?e="下午好":18<t&&t<=24&&(e="晚上好"),e};function sayhi(){document.querySelector("#author-info__sayhi")&&(document.getElementById("author-info__sayhi").innerHTML="👋 "+getTimeState()+"！这里是")}