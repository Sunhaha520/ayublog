if(document.getElementById("post-cover-img")){let e=[];for(let t=0;t<=5;t++)for(let o=0;o<=5;o++)for(let n=0;n<=5;n++)e.push(`rgb(${t},${o},${n})`),e.push(`rgb(${255-t},${255-o},${255-n})`);RGBaster.colors(document.getElementById("post-cover-img").getAttribute("src"),{paletteSize:30,exclude:e,success:function(e){const t=e.dominant.match(/\d+/g),o=.299*t[0]+.587*t[1]+.114*t[2];document.styleSheets[0].addRule(":root","--main: "+e.dominant),document.styleSheets[0].addRule(":root","--second: "+(o>=192?"#000":"#fff")),document.styleSheets[0].addRule(":root",`--main-light: rgba(${t[0]}, ${t[1]}, ${t[2]}, .4)`),document.styleSheets[0].addRule(":root",`--main-shadow: 0 8px 12px -3px rgba(${t[0]}, ${t[1]}, ${t[2]}, .2)`),document.styleSheets[0].addRule(":root","--cover-text: "+(o>=192?"#4c4948":"#eee")),document.styleSheets[0].addRule(":root",`--cover-bg: rgba(${t[0]}, ${t[1]}, ${t[2]})`)}})}else document.styleSheets[0].addRule(":root","--main: #49B1F5"),document.styleSheets[0].addRule(":root","--second: #fff"),document.styleSheets[0].addRule(":root","--main-light: rgba(73, 177, 245, .4)"),document.styleSheets[0].addRule(":root","--main-shadow: 0 8px 12px -3px rgba(73, 177, 245, .2)");function catalogActive(e){let t=window.location.pathname;if(t=decodeURIComponent(t),("tags"==e?/\/tags\/.*?\//:/\/categories\/.*?\//).test(t)&&document.querySelector("#catalog-list")){document.getElementById(t.split("/")[2]).classList.add("selected");let e=document.getElementById("catalog-list");e.addEventListener("mousewheel",(function(t){let o=-t.wheelDelta/2;e.scrollLeft+=o,t.preventDefault()}),!1)}}function copyContentFn(e){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const t=e.previousElementSibling;t.innerText=GLOBAL_CONFIG.copy.success,t.style.opacity=1,setTimeout((()=>{t.style.opacity=0}),700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport}function copyClickFn(e,t){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const e=t.previousElementSibling;e.innerText=GLOBAL_CONFIG.copy.success,e.style.opacity=1,setTimeout((()=>{e.style.opacity=0}),700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport}function postUrlCopyFn(e){const t=e.parentNode;t.classList.add("copy-true");const o=window.getSelection(),n=document.createRange();n.selectNodeContents(t.querySelectorAll("#post-url")[0]),o.removeAllRanges(),o.addRange(n);copyClickFn(o.toString(),e.prevEle),o.removeAllRanges(),t.classList.remove("copy-true")}function switchReadMode(){const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="fas fa-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function o(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",o)}))}function switchDarkMode(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)}function showOrHideBtn(){document.getElementById("rightside-config-hide").classList.toggle("show")}function scrollToTop(){btf.scrollToDest(0,500)}function hideAsideBtn(){const e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")}function adjustFontSize(e){const t=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size"));let o="";if(e){if(t>=20)return;o=t+1,document.documentElement.style.setProperty("--global-font-size",o+"px"),!document.getElementById("nav").classList.contains("hide-menu")&&adjustMenu(!0)}else{if(t<=10)return;o=t-1,document.documentElement.style.setProperty("--global-font-size",o+"px"),document.getElementById("nav").classList.contains("hide-menu")&&adjustMenu(!0)}saveToLocal.set("global-font-size",o,2)}function switchPostChart(){let e="light"===document.documentElement.getAttribute("data-theme")?"#4c4948":"rgba(255,255,255,0.7)";if(document.getElementById("posts-chart")&&postsOption)try{let t=postsOption;t.textStyle.color=e,t.title.textStyle.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,postsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("tags-chart")&&tagsOption)try{let t=tagsOption;t.textStyle.color=e,t.title.textStyle.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,tagsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("categories-chart")&&categoriesOption)try{let t=categoriesOption;t.textStyle.color=e,t.title.textStyle.color=e,t.legend.textStyle.color=e,categoriesChart.setOption(t)}catch(e){console.log(e)}}function switchVisitChart(){let e="light"===document.documentElement.getAttribute("data-theme")?"#4c4948":"rgba(255,255,255,0.7)";if(document.getElementById("map-chart"))try{let t=mapOption;t.title.textStyle.color=e,t.visualMap.textStyle.color=e,mapChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("trends-chart"))try{let t=trendsOption;t.title.textStyle.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.textStyle.color=e,trendsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("sources-chart"))try{let t=sourcesOption;t.title.textStyle.color=e,t.legend.textStyle.color=e,t.textStyle.color=e,sourcesChart.setOption(t)}catch(e){console.log(e)}}document.styleSheets[0].addRule('[data-theme="dark"]',"--main: #5c5c5c !important"),document.styleSheets[0].addRule('[data-theme="dark"]',"--second: #eee !important"),document.styleSheets[0].addRule('[data-theme="dark"]',"--main-light: rgba(92, 92, 92, .4) !important"),document.styleSheets[0].addRule('[data-theme="dark"]',"--main-shadow: 0 8px 12px -3px rgba(92, 92, 92, .2) !important"),catalogActive("categories"),catalogActive("tags"),document.getElementById("mode-button").addEventListener("click",(function(){setTimeout(switchPostChart,100)})),document.getElementById("darkmode").addEventListener("click",(function(){setTimeout(switchPostChart,100)})),document.getElementById("mode-button").addEventListener("click",(function(){setTimeout(switchVisitChart,100)})),document.getElementById("darkmode").addEventListener("click",(function(){setTimeout(switchVisitChart,100)})),document.addEventListener("copy",(function(){copyContentFn(this)})),document.getElementById("mode-button").addEventListener("click",(function(){switchDarkMode()})),document.getElementById("top-button").addEventListener("click",(function(){scrollToTop()})),document.getElementById("page-name-text").addEventListener("click",(function(){scrollToTop()})),document.getElementById("post-url-copy")&&document.getEle;