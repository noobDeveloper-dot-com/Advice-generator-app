(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var c=r.getElementsByTagName("script");if(c.length)for(var n=c.length-1;n>-1&&!t;)t=c[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"ed9685263f6b47d21c88.svg",r=e.p+"08691e4c24c11b5ba564.svg",c=document.querySelector("#pattern-divider"),n=document.querySelector("#adviceGeneratorBtn");function i(e,t){const r=new Image;return r.src=e,r.alt=t,r}c.append(i(t,"Pattern Divider")),n.append(i(r,"Dice Icon"))})();