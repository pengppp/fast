(function(){var h={},mt={},c={id:"e187b8361983ae857a524f4a5de888fd",dm:["youyue2.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:[],nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,oc:0,aet:'',hca:'70C0802051910B57',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,u=!0,v=null,w=!1;mt.cookie={};mt.cookie.set=function(a,b,g){var d;g.Q&&(d=new Date,d.setTime(d.getTime()+g.Q));document.cookie=a+"="+b+(g.domain?"; domain="+g.domain:"")+(g.path?"; path="+g.path:"")+(d?"; expires="+d.toGMTString():"")+(g.Jc?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:v};
mt.cookie.ic=function(a,b){try{var g="Hm_ck_"+ +new Date;mt.cookie.set(g,"is-cookie-enabled",{domain:a,path:b,Q:q});var d="is-cookie-enabled"===mt.cookie.get(g)?"1":"0";mt.cookie.set(g,"",{domain:a,path:b,Q:-1});return d}catch(e){return"0"}};mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ya=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.I=function(a){return mt.lang.d(a,"String")};mt.lang.isArray=function(a){return mt.lang.d(a,"Array")};
mt.lang.h=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.H=function(a,b){var g=w;if(a==v||!mt.lang.d(a,"Array")||b===q)return g;if(Array.prototype.indexOf)g=-1!==a.indexOf(b);else for(var d=0;d<a.length;d++)if(a[d]===b){g=u;break}return g};mt.url={};mt.url.m=function(a,b){var g=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return g?g[3]:v};
mt.url.Ec=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:v};mt.url.Mb=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):v};mt.url.O=function(a){return(a=mt.url.Mb(a))?a.replace(/:\d+$/,""):a};mt.url.ua=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):v};
(function(){var a=mt.lang,b=mt.url;mt.g={};mt.g.Sa=function(a){return document.getElementById(a)};mt.g.sa=function(a){if(!a)return v;try{a=String(a);if(0===a.indexOf("!HMCQ!"))return a;if(0===a.indexOf("!HMCC!"))return document.querySelector(a.substring(6,a.length));for(var d=a.split(">"),e=document.body,b=d.length-1;0<=b;b--)if(-1<d[b].indexOf("#")){var f=d[b].split("#")[1];(e=document.getElementById(f))||(e=document.getElementById(decodeURIComponent(f)));d=d.splice(b+1,d.length-(b+1));break}for(a=
0;e&&a<d.length;){var l=String(d[a]).toLowerCase();if(!("html"===l||"body"===l)){var b=0,m=d[a].match(/\[(\d+)\]/i),f=[];if(m)b=m[1]-1,l=l.split("[")[0];else if(1!==e.childNodes.length){for(var r=0,s=0,n=e.childNodes.length;s<n;s++){var x=e.childNodes[s];1===x.nodeType&&x.nodeName.toLowerCase()===l&&r++;if(1<r)return v}if(1!==r)return v}for(r=0;r<e.childNodes.length;r++)1===e.childNodes[r].nodeType&&e.childNodes[r].nodeName.toLowerCase()===l&&f.push(e.childNodes[r]);if(!f[b])return v;e=f[b]}a++}return e}catch(k){return v}};
mt.g.ua=function(a,d){var e=[],b=[];if(!a)return b;for(;a.parentNode!=v;){for(var f=0,l=0,m=a.parentNode.childNodes.length,r=0;r<m;r++){var s=a.parentNode.childNodes[r];if(s.nodeName===a.nodeName&&(f++,s===a&&(l=f),0<l&&1<f))break}if((m=""!==a.id)&&d){e.unshift("#"+encodeURIComponent(a.id));break}else m&&(m="#"+encodeURIComponent(a.id),m=0<e.length?m+">"+e.join(">"):m,b.push(m)),e.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<f?"["+l+"]":""));a=a.parentNode}b.push(e.join(">"));return b};
mt.g.va=function(a){return(a=mt.g.ua(a,u))&&a.length?String(a[0]):""};mt.g.Qb=function(a){return mt.g.ua(a,w)};mt.g.Fb=function(a){var d;for(d="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return v};mt.g.Ib=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.g.Ob=function(a){var d={top:0,left:0};if(!a)return d;var e=mt.g.Ib(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect());return{top:d.top+(window.pageYOffset||e.scrollTop)-
(e.clientTop||0),left:d.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};mt.g.getAttribute=function(a,d){var e=a.getAttribute&&a.getAttribute(d)||v;if(!e&&a.attributes&&a.attributes.length)for(var b=a.attributes,f=b.length,l=0;l<f;l++)b[l].nodeName===d&&(e=b[l].nodeValue);return e};mt.g.T=function(a){var d="document";a.tagName!==q&&(d=a.tagName);return d.toLowerCase()};mt.g.Ub=function(b){var d="";b.textContent?d=a.trim(b.textContent):b.innerText&&(d=a.trim(b.innerText));d&&(d=d.replace(/\s+/g,
" ").substring(0,255));return d};mt.g.S=function(g,d){var e;a.I(g)&&0===String(g).indexOf("!HMCQ!")?(e=String(g),e=b.m(document.location.href,e.substring(6,e.length))):a.I(g)||(e=mt.g.T(g),"input"===e&&d&&("button"===g.type||"submit"===g.type)?e=a.trim(g.value)||"":"input"===e&&!d&&"password"!==g.type?e=a.trim(g.value)||"":"img"===e?(e=mt.g.getAttribute,e=e(g,"alt")||e(g,"title")||e(g,"src")):e="body"===e||"html"===e?["(hm-default-content-for-",e,")"].join(""):mt.g.Ub(g));return String(e||"").substring(0,
255)};(function(){(mt.g.fb=function(){function a(){if(!a.ea){a.ea=u;for(var d=0,b=t.length;d<b;d++)t[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var b=w,t=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,w);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!b)if(b=u,"complete"===document.readyState)a.ea=u;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",f,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var l=w;try{l=window.frameElement==v}catch(m){}document.documentElement.doScroll&&l&&d()}})();return function(d){a.ea?d():t.push(d)}}()).ea=w})();return mt.g})();mt.event={};
mt.event.e=function(a,b,g){a.attachEvent?a.attachEvent("on"+b,function(d){g.call(a,d)}):a.addEventListener&&a.addEventListener(b,g,w)};mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};
(function(){var a=mt.event;mt.f={};mt.f.Aa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.f.Nb=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.f.Gc=function(){try{return!!navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&"undefined"!==typeof document.body.style.webkitFilter&&!window.chrome}catch(a){return w}};mt.f.cookieEnabled=navigator.cookieEnabled;mt.f.javaEnabled=navigator.javaEnabled();
mt.f.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.f.lc=(window.screen.width||0)+"x"+(window.screen.height||0);mt.f.colorDepth=window.screen.colorDepth||0;mt.f.Sb=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.f.Va=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.f.G=
function(){return mt.f.Sb()+mt.f.Va()};mt.f.ob=0;mt.f.Wb=function(){var a=document;return parseInt(window.innerWidth||a.documentElement.clientWidth||a.body.offsetWidth||0,10)};mt.f.orientation=0;(function(){function b(){var a=0;window.orientation!==q&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==q)&&(a=screen.orientation.angle);mt.f.orientation=a;mt.f.ob=mt.f.Wb()}b();a.e(window,"orientationchange",b)})();return mt.f})();mt.s={};
mt.s.parse=function(a){return(new Function("return ("+a+")"))()};
mt.s.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=g[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===v)return"null";if(d instanceof Array){var e=["["],g=d.length,f,l,m;for(l=0;l<g;l++)switch(m=d[l],typeof m){case "undefined":case "function":case "unknown":break;default:f&&e.push(","),e.push(mt.s.stringify(m)),f=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';f=["{"];l=mt.s.stringify;for(g in d)if(Object.prototype.hasOwnProperty.call(d,g))switch(m=
d[g],typeof m){case "undefined":case "unknown":case "function":break;default:e&&f.push(","),e=1,f.push(l(g)+":"+l(m))}f.push("}");return f.join("")}}}();mt.localStorage={};mt.localStorage.la=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(a){return w}return u};
mt.localStorage.set=function(a,b,g){var d=new Date;d.setTime(d.getTime()+g||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.la()&&(mt.localStorage.l.expires=d.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(a,b),mt.localStorage.l.save(document.location.hostname))}catch(e){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),g=a.substring(0,b)-0;if(g&&g>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.la())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(a)}catch(d){}return v};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.la())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(a),mt.localStorage.l.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){try{window.sessionStorage&&window.sessionStorage.setItem(a,b)}catch(g){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):v}catch(b){return v}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(b){}};mt.jb={};mt.jb.log=function(a,b){var g=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=g;g.onload=function(){g.onload=v;g=window[d]=v;b&&b(a)};g.src=a};mt.lb={};
mt.lb.Vb=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(g){}return a};
h.D={Fc:"http://tongji.baidu.com/hm-web/welcome/ico",eb:"hm.baidu.com/hm.gif",vb:/^(tongji|hmcdn).baidu.com$/,nb:"tongji.baidu.com",$b:"hmmd",ac:"hmpl",yc:"utm_medium",Zb:"hmkw",Ac:"utm_term",Xb:"hmci",xc:"utm_content",bc:"hmsr",zc:"utm_source",Yb:"hmcu",wc:"utm_campaign",P:0,L:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",Ca:"https:",Hc:0,Cc:6E5,Ic:6E5,mc:5E3,Dc:5,Ra:1024,Bc:1,Ea:2147483647,mb:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
U:u,Oa:["a","input","button"],La:{id:"data-hm-id",$:"data-hm-class",Z:"data-hm-xpath",content:"data-hm-content",ha:"data-hm-tag",link:"data-hm-link"},Na:"data-hm-enabled",Ma:"data-hm-disabled",jc:"https://hmcdn.baidu.com/static/tongji/plugins/",cb:["UrlChangeTracker","OcpcCbHm"]};(function(){var a={F:{},e:function(a,g){this.F[a]=this.F[a]||[];this.F[a].push(g)},M:function(a,g){this.F[a]=this.F[a]||[];for(var d=this.F[a].length,e=0;e<d;e++)this.F[a][e](g)}};return h.A=a})();
(function(){var a=mt.lang,b=/^https?:\/\//,g={Hb:function(a){var e;try{e=JSON.parse(decodeURIComponent(a[0]))}catch(b){}return e},Za:function(a,e){var g=h.c&&h.c.b&&h.c.b.u||document.location.href;b.test(a)||(g=g.replace(b,""));a=a.replace(/\/$/,"");g=g.replace(/\/$/,"");e&&(g=g.replace(/^(https?:\/\/)?www\./,"$1"));return RegExp("^"+a.replace(/[?.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*")+"$").test(g)},ba:function(d,e){var b=g.Hb(d);if(!a.d(b,"Undefined")){if(a.d(b,"Array")){for(var f=0;f<b.length;f++)if(g.Za(b[f],
e))return u;return w}if(a.d(b,"Object")){var f=[],l;for(l in b)b.hasOwnProperty(l)&&g.Za(l,e)&&(f=f.concat(b[l]));return f}}}};return h.pa=g})();
(function(){function a(a,d){var e=document.createElement("script");e.charset="utf-8";b.d(d,"Function")&&(e.readyState?e.onreadystatechange=function(){if("loaded"===e.readyState||"complete"===e.readyState)e.onreadystatechange=v,d()}:e.onload=function(){d()});e.src=a;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}var b=mt.lang;return h.load=a})();
(function(){var a=mt.cookie,b=mt.localStorage,g=mt.sessionStorage,d={getData:function(d){try{return a.get(d)||g.get(d)||b.get(d)}catch(t){}},setData:function(e,t,f){try{a.set(e,t,{domain:d.R(),path:d.ca(),Q:f}),f?b.set(e,t,f):g.set(e,t)}catch(l){}},removeData:function(e){try{a.set(e,"",{domain:d.R(),path:d.ca(),Q:-1}),g.remove(e),b.remove(e)}catch(t){}},V:function(a,d){a="."+a.replace(/:\d+/,"");d="."+d.replace(/:\d+/,"");var b=a.indexOf(d);return-1<b&&b+d.length===a.length},fa:function(a,d){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(d)},R:function(){for(var a=document.location.hostname,b=0,f=c.dm.length;b<f;b++)if(d.V(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ca:function(){for(var a=0,b=c.dm.length;a<b;a++){var f=c.dm[a];if(-1<f.indexOf("/")&&d.fa(document.location.href,f))return f.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.oa=d})();
(function(){var a=mt.lang,b=mt.s,g=h.oa,d={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},e={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},t=["session","user"],f="Hm_up_"+c.id,l={init:function(){l.fc()},fc:function(){try{var e=b.parse(decodeURIComponent(g.getData(f)));a.d(e,"Object")&&(d.user=e)}catch(r){}},z:function(a){var b={};d[a]!==q&&(b=d[a]);a=this.wa();for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},wa:function(){for(var a={},b,e=t.length-
1;0<=e;e--){b=d[t[e]];for(var n in b)b.hasOwnProperty(n)&&(a[n]=b[n])}return a},setProperty:function(e,f,g){var n=d[e];if(a.d(n,"Object")&&a.d(f,"Object")){for(var x in f)if(f.hasOwnProperty(x)){var k=a.h(String(x));if(g||!/^_/.test(k)&&!/_$/.test(k)||/^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)){var p=f[x];if(p==v)delete n[k];else{if(a.d(p,"Object")||a.d(p,"Array"))p=b.stringify(p);p=a.h(String(p));l.hc(e,k,p)&&(n[k]={value:p,scope:l.Ua(e)})}}}"user"===e&&l.Ga()}},o:function(b){b!==q&&("userId"===
b&&a.d(d.user,"Object")?(delete d.user.uid_,l.Ga()):"user"===b&&a.d(d.user,"Object")?(b=d.user.uid_,d.user=b===q?{}:{uid_:b},l.Ga()):d[b]!==q&&(d[b]={}))},Ga:function(){try{g.setData(f,encodeURIComponent(b.stringify(d.user)),c.age)}catch(a){}},hc:function(a,b,e){var n=u,f=d[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(e)).length)n=w;else{var k=f[b];f[b]={value:e,scope:l.Ua(a)};a=l.K(l.z(a));2048<encodeURIComponent(a).length&&(k!==q?f[b]=k:delete f[b],n=w)}return n},
K:function(a){var b=[],d,e;for(e in a)a.hasOwnProperty(e)&&(d=[e,a[e].value],(1===a[e].scope||2===a[e].scope)&&d.push(a[e].scope),b.push(d.join("*")));return b.join("!")},Ua:function(a){a=e[a];return a!==q?a:e.others}};return h.N=l})();
(function(){var a=mt.g,b=mt.lang,g=h.A,d=h.pa,e=h.N,t=e.K;if(b.isArray(c.cptrk)&&0<c.cptrk.length){var f={bb:{},ia:{},init:function(){for(var a,e=d.ba(c.cptrk)||[],g=0;g<e.length;g++)if(a=e[g],a.a!==q&&b.d(a.a,"Object")){a=a.a;for(var s in a)a.hasOwnProperty(s)&&(f.ia[s]=String(a[s]))}},ab:function(){var b,d,e;for(e in f.ia)if(f.ia.hasOwnProperty(e)&&f.bb[e]===q&&(b=f.ia[e],b=a.sa(b)))d=d===q?{}:d,d[e]=a.S(b,w),f.bb[e]=u;return d},ya:function(){var a=f.ab();a&&f.pc(a)},ec:function(){"MutationObserver"in
window&&document.body?(new MutationObserver(f.ya)).observe(document.body,{childList:u,subtree:u}):window.setInterval(f.ya,15E3)},pc:function(a){if(b.d(a,"Object")){e.setProperty("pageview",a);a=h.c.b.p;var d=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=t(e.z("pageview"));h.c.i();h.c.b.p=a;h.c.b.ep=d;e.o("pageview")}}};f.init();g.e("pv-b",function(){var a=f.ab();a&&e.setProperty("pageview",a)});f.ec();a.fb(f.ya)}})();
(function(){var a=mt.lang,b=mt.g,g=h.pa,d={aa:function(a,t){return function(f){var l=f.target||f.srcElement;if(l){var m=g.ba(t)||[],r=l.getAttribute(a.ka);f=f.clientX+":"+f.clientY;if(r&&r===f)l.removeAttribute(a.ka);else if(0<m.length&&(l=b.Qb(l))&&l.length)if(m=l.length,r=l[l.length-1],1E4>m*r.split(">").length)for(r=0;r<m;r++)d.ib(a,l[r]);else d.ib(a,r)}}},ib:function(b,d){for(var f={},g=String(d).split(">").length,m=0;m<g;m++)f[d]="",d=d.substring(0,d.lastIndexOf(">"));b&&(a.d(b,"Object")&&b.Pa)&&
b.Pa(f)},kc:function(a,b){return function(d){(d.target||d.srcElement).setAttribute(a.ka,d.clientX+":"+d.clientY);a&&a.w&&(b?a.w(b):a.w("#"+encodeURIComponent(this.id),d.type))}}};return h.ra=d})();
(function(){var a=mt.g,b=mt.event,g=mt.lang,d=h.D,e=h.pa,t=h.ra,f=h.N,l=f.K,m={ka:"HM_ce",pb:function(){if(c.cetrk&&0<c.cetrk.length){b.e(document,"click",t.aa(m,c.cetrk));for(var d=e.ba(c.cetrk)||[],f=0,n=d.length;f<n;f++){var g=d[f],k=g.p||"";-1===k.indexOf(">")&&(0===k.indexOf("#")&&(k=k.substring(1)),(k=a.Sa(k))&&b.e(k,"click",t.kc(m,g)))}}},Pa:function(a){for(var b=e.ba(c.cetrk)||[],d=0;d<b.length;d++){var f=b[d],k=m.Kb(f.p,a);k&&m.w(f,k)}},Kb:function(a,d){a=String(a);if(0<a.indexOf("*")){var b=
RegExp("^"+a.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\*/,"\\d+")+"$"),e;for(e in d)if(d.hasOwnProperty(e)&&b.test(e))return e;return v}return d.hasOwnProperty(a)?a:v},w:function(d,b){h.c.b.et=7;var e=d&&d.k||"",e=g.h(e),x={};if(d&&d.a&&g.d(d.a,"Object")){var k=d.a,p;for(p in k)if(k.hasOwnProperty(p)){var y=m.Rb(k[p]||"",b),y=y?a.S(y,w):"";x[p]=y}}x=m.Gb(x,b||d&&d.p);x._iden=e;f.setProperty("customEvent",x);h.c.b.ep="";h.c.b.p=l(f.z("customEvent"));h.c.i();h.c.b.p="";f.o("customEvent")},
Gb:function(b,e){var f=a.sa(e),g=d.La;f&&(c.aet&&c.aet.length?(b.ei_=a.getAttribute(f,g.id)||a.getAttribute(f,"id")||"",b.ec_=a.getAttribute(f,g.$)||a.getAttribute(f,"class")||"",b.ex_=a.getAttribute(f,g.Z)||a.va(f),b.en_=a.getAttribute(f,g.content)||a.S(f,u),b.et_=a.getAttribute(f,g.ha)||a.T(f),b.el_=a.getAttribute(f,g.link)||a.getAttribute(f,"href")||""):(b.ex_=a.getAttribute(f,g.Z)||a.va(f),b.en_=a.getAttribute(f,g.content)||a.S(f,u)));return b},Rb:function(b,d){b=String(b);d=String(d);if(0<b.indexOf("*")){var e=
/.*\[(\d+)\]$/.exec(d);b=b.replace("*",e?e[1]:"1")}return a.sa(b)}};h.A.e("pv-b",m.pb);return m})();
(function(){var a=mt.lang,b=mt.g,g=mt.event,d=mt.f,e=h.D,t=h.A,f=h.N,l=f.K,m=+new Date,r=[],s={aa:function(){return function(d){if(h.c&&h.c.U&&c.aet&&c.aet.length){var f=d.target||d.srcElement;if(f){var k=h.c.Oa,p=b.getAttribute(f,e.Na)!=v?u:w;if(b.getAttribute(f,e.Ma)==v)if(p)s.ma(s.ta(f,d));else{var y=b.T(f);if(a.H(k,"*")||a.H(k,y))s.ma(s.ta(f,d));else for(;f.parentNode!=v;){var p=f.parentNode,y=b.T(p),z="a"===y&&a.H(k,"a")?u:w,y="button"===y&&a.H(k,"button")?u:w,A=b.getAttribute(p,e.Na)!=v?u:w;
if(b.getAttribute(p,e.Ma)==v&&(z||y||A)){s.ma(s.ta(p,d));break}f=f.parentNode}}}}}},ta:function(f,g){var k={},p=e.La;k.id=b.getAttribute(f,p.id)||b.getAttribute(f,"id")||"";k.$=b.getAttribute(f,p.$)||b.getAttribute(f,"class")||"";k.Z=b.getAttribute(f,p.Z)||b.va(f);k.content=b.getAttribute(f,p.content)||b.S(f,u);k.ha=b.getAttribute(f,p.ha)||b.T(f);k.link=b.getAttribute(f,p.link)||b.getAttribute(f,"href")||"";k.type=g.type||"click";p=a.Ya(f.offsetTop)?f.offsetTop:0;"click"===g.type?p=d.Aa?g.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):g.pageY:"touchend"===g.type&&(g.$a&&g.$a.changedTouches)&&(p=g.$a.changedTouches[0].pageY);k.vc=p;p=this.Jb(g);k.Da=p.Da||0;k.Fa=p.Fa||0;k.Ka=p.Ka||0;k.xa=p.xa||0;k.Ia=p.Ia||"b";return k},Jb:function(e){var f=e.target||e.srcElement,g;if(d.Aa){var p=Math.max(document.documentElement.scrollTop,document.body.scrollTop);g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);g=e.clientX+g;e=e.clientY+p}else g=e.pageX,
e=e.pageY;var y=p=0,z=0,A=0;if(f&&(p=f.offsetWidth||f.clientWidth,y=f.offsetHeight||f.clientHeight,A=b.Ob(f),z=A.left,A=A.top,a.d(f.getBBox,"Function")&&(y=f.getBBox(),p=y.width,y=y.height),"html"===(f.tagName||"").toLowerCase()))p=Math.max(p,f.clientWidth),y=Math.max(y,f.clientHeight);return{Da:Math.round(100*((g-z)/p)),Fa:Math.round(100*((e-A)/y)),Ka:p,xa:y,Ia:("a"===(f.tagName||"").toLowerCase()?f:b.Fb(f))?"a":"b"}},ma:function(d){var b=a.h;d=[+new Date-(h.c.W!==q?h.c.W:m),b(d.id),b(d.$),b(d.ha),
b(d.Z),b(d.link),b(d.content),d.type,d.vc,d.Da,d.Fa,d.Ka,d.xa,d.Ia].join("*");s.na(d);a.d(this.Y(),"Function")&&this.Y()()},na:function(a){var d=e.Ra;a.length>d||(encodeURIComponent(r.join("!")+a).length>d&&0<r.length&&(s.w(r.join("!")),r=[]),r.push(a))},w:function(a){h.c.b.et=5;h.c.b.ep=a;f.setProperty("autoEventTracking",{view_h_:d.G()},u);h.c.b.p=l(f.z("autoEventTracking"));h.c.i();h.c.b.p="";f.setProperty("autoEventTracking",{view_h_:v},u)},Y:function(){return function(){r&&r.length&&(s.w(r.join("!")),
r=[])}}};a.I(c.aet)&&""!==c.aet&&t.e("pv-b",function(){g.e(document,"click",s.aa());"ontouchend"in document&&g.e(window,"touchend",s.aa());g.e(window,"unload",s.Y())});return s})();
(function(){var a=mt.lang,b=mt.event,g=mt.f,d=h.D,e=h.A,t=h.N,f=t.K,l=+new Date,m=[],r=v,s={tb:function(){a.I(c.aet)&&""!==c.aet&&setInterval(s.hb,d.mc)},hb:function(){var a=g.G();0<a-h.c.b.vl&&(h.c.b.vl=a)}},n={Bb:function(){return function(){h.c&&(h.c.U&&c.aet&&c.aet.length)&&(window.clearTimeout(r),r=window.setTimeout(function(){n.rb(g.G())},150))}},rb:function(a){n.na([+new Date-(h.c.W!==q?h.c.W:l),a].join("*"))},na:function(a){if(encodeURIComponent(m.join("!")+a).length>d.Ra||3<m.length)n.w(m.join("!")),
m=[];m.push(a)},w:function(a){s.hb();h.c.b.et=6;h.c.b.vh=g.Va();h.c.b.ep=a;t.setProperty("autoEventTracking",{view_h_:g.G()},u);h.c.b.p=f(t.z("autoEventTracking"));h.c.i();h.c.b.p="";t.setProperty("autoEventTracking",{view_h_:v},u)},Y:function(){return function(){m&&m.length&&(n.w(m.join("!")),m=[])}}};a.I(c.aet)&&""!==c.aet&&e.e("pv-b",function(){b.e(window,"scroll",n.Bb());b.e(window,"unload",n.Y());s.tb()});return n})();
(function(){function a(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.qa.Pb()+","+h.qa.Lb();h.c.b.hca=c.hca;h.c.i()}}function b(){clearTimeout(z);var a;p&&(a="visible"==document[p]);y&&(a=!document[y]);l="undefined"==typeof a?u:a;if((!f||!m)&&l&&r)k=u,n=+new Date;else if(f&&m&&(!l||!r))k=w,x+=+new Date-n;f=l;m=r;z=setTimeout(b,100)}function g(a){var p=document,d="";if(a in p)d=a;else for(var b=["webkit","ms","moz","o"],f=0;f<b.length;f++){var e=b[f]+a.charAt(0).toUpperCase()+a.slice(1);
if(e in p){d=e;break}}return d}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))r="focus"==a.type||"focusin"==a.type?u:w,b()}var e=mt.event,t=h.A,f=u,l=u,m=u,r=u,s=+new Date,n=s,x=0,k=u,p=g("visibilityState"),y=g("hidden"),z;b();(function(){var a=p.replace(/[vV]isibilityState/,"visibilitychange");e.e(document,a,b);e.e(window,"pageshow",b);e.e(window,"pagehide",b);"object"==typeof document.onfocusin?(e.e(document,"focusin",d),e.e(document,"focusout",d)):(e.e(window,
"focus",d),e.e(window,"blur",d))})();h.qa={Pb:function(){return+new Date-s},Lb:function(){return k?+new Date-n+x:x}};t.e("pv-b",function(){e.e(window,"unload",a())});t.e("duration-send",a());t.e("duration-done",function(){n=s=+new Date;x=0});return h.qa})();
(function(){var a=mt.lang,b=h.D,g=h.load,d={dc:function(d){if((window._dxt===q||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.c){var t=h.c.R();g([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(t)].join(""),d)}},uc:function(d){if(a.d(d,"String")||a.d(d,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",d])}};return h.zb=d})();
(function(){function a(a,d,b,f){if(!(a===q||d===q||f===q)){if(""===a)return[d,b,f].join("*");a=String(a).split("!");for(var e,g=w,k=0;k<a.length;k++)if(e=a[k].split("*"),String(d)===e[0]){e[1]=b;e[2]=f;a[k]=e.join("*");g=u;break}g||a.push([d,b,f].join("*"));return a.join("!")}}function b(a){for(var f in a)if({}.hasOwnProperty.call(a,f)){var e=a[f];d.d(e,"Object")||d.d(e,"Array")?b(e):a[f]=String(e)}}var g=mt.url,d=mt.lang,e=mt.s,t=mt.f,f=h.D,l=h.A,m=h.zb,r=h.load,s=h.oa,n=h.N,x=n.K,k={X:[],ga:0,Ba:w,
C:{Ja:"",page:""},init:function(){k.j=0;n.init();l.e("pv-b",function(){k.Ab();k.Cb()});l.e("pv-d",function(){k.Db();k.C.page=""});l.e("stag-b",function(){h.c.b.api=k.j||k.ga?k.j+"_"+k.ga:"";h.c.b.ct=[decodeURIComponent(s.getData("Hm_ct_"+c.id)||""),k.C.Ja,k.C.page].join("!")});l.e("stag-d",function(){h.c.b.api=0;k.j=0;k.ga=0})},Ab:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,p=0;p<arguments.length;p++){var b=arguments[p];
d.d(b,"Array")&&(a.cmd[a.id].push(b),"_setAccount"===b[0]&&(1<b.length&&/^[0-9a-f]{31,32}$/.test(b[1]))&&(b=b[1],a.id=b,a.cmd[b]=a.cmd[b]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},Cb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var d=a.cmd[c.id],b=/^_track(Event|MobConv|Order)$/,f=0,e=d.length;f<e;f++){var g=d[f];b.test(g[0])?k.X.push(g):k.Ha(g)}a.cmd[c.id]={push:k.Ha}},Db:function(){if(0<k.X.length)for(var a=0,d=k.X.length;a<d;a++)k.Ha(k.X[a]);k.X=v},Ha:function(a){var b=
a[0];if(k.hasOwnProperty(b)&&d.d(k[b],"Function"))k[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{31,32}$/.test(a[1])&&(k.j|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||u===a))k.j|=2,h.c.Wa=a},_trackPageview:function(a){1<a.length&&(a[1].charAt&&"/"===a[1].charAt(0))&&(k.j|=4,h.c.b.sn=h.c.Ta(),h.c.b.et=0,h.c.b.ep="",h.c.b.vl=t.G(),h.c.b.kb=0,h.c.za?(h.c.b.nv=0,h.c.b.st=4):h.c.za=u,k.Ba||(h.c.b.su=h.c.b.u||document.location.href),h.c.b.u=f.protocol+"//"+document.location.host+
a[1],h.c.b.p=x(n.z("pageview")),h.c.i(),h.c.b.p="",h.c.W=+new Date,n.o("pageview"))},_trackEvent:function(a){2<a.length&&(k.j|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=d.h(a[1])+"*"+d.h(a[2])+(a[3]?"*"+d.h(a[3]):"")+(a[4]?"*"+d.h(a[4]):""),h.c.b.p=x(n.wa()),h.c.i(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],f=a[4]||3;if(0<b&&6>b&&0<f&&4>f){k.ga++;for(var e=(h.c.b.cv||"*").split("!"),g=e.length;g<b-1;g++)e.push("*");e[b-1]=f+"*"+d.h(a[2])+"*"+d.h(a[3]);h.c.b.cv=e.join("!");
a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?s.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):s.removeData("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==q&&b!==q){var e=decodeURIComponent(s.getData("Hm_ct_"+c.id)||""),e=a(e,f,1,b);s.setData("Hm_ct_"+c.id,encodeURIComponent(e),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==q&&b!==q){var e=k.C.Ja,e=a(e,f,2,b);k.C.Ja=e}}},_setPageTag:function(b){if(!(3>
b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==q&&b!==q){var e=k.C.page,e=a(e,f,3,b);k.C.page=e}}},_setReferrerOverride:function(a){1<a.length&&(a=a[1],d.d(a,"String")?(h.c.b.su="/"===a.charAt(0)?f.protocol+"//"+window.location.host+a:a,k.Ba=u):k.Ba=w)},_trackOrder:function(a){a=a[1];d.d(a,"Object")&&(b(a),k.j|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=e.stringify(a),h.c.b.p=x(n.wa()),h.c.i(),h.c.b.p="")},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])k.j|=
32,h.c.b.et=93,h.c.b.ep=a,h.c.i()},_setDataxId:function(a){a=a[1];m.dc();m.uc(a)},_setUserId:function(a){a=a[1];if(a!==q&&(d.I(a)||d.Ya(a))){var b=n.z("user").uid_;if(!(b&&b.value===d.h(String(a)))){var b=h.c.b.p,f=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+d.h(String(a));h.c.i();var e={};e.uid_=a;n.setProperty("user",e,u);h.c.b.p=b;h.c.b.ep=f}}},_clearUserId:function(a){1<a.length&&u===a[1]&&n.o("userId")},_setUserProperty:function(a){a=a[1];d.d(a,"Object")&&n.setProperty("user",a)},_clearUserProperty:function(a){1<
a.length&&u===a[1]&&n.o("user")},_setSessionProperty:function(a){a=a[1];d.d(a,"Object")&&n.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&u===a[1]&&n.o("session")},_setPageviewProperty:function(a){a=a[1];d.d(a,"Object")&&n.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&u===a[1]&&n.o("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];d.d(a,"Object")&&n.setProperty("autoEventTracking",a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&
u===a[1]&&n.o("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.Xa=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.U=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.i())):l.M("duration-send");l.M("duration-done")},_require:function(a){1<a.length&&(a=a[1],f.vb.test(g.O(a))&&r(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1];a=a[2];if(d.H(f.cb,
e)&&d.d(a,"Function")&&(b.plugins=b.plugins||{},b.J=b.J||{},b.plugins[e]=a,b.B=b.B||[],a=b.B.slice(),e&&a.length&&a[0][1]===e))for(var g=0,k=a.length;g<k;g++){var l=a[g][2]||{};if(b.plugins[e]&&!b.J[e])b.J[e]=new b.plugins[e](l),b.B.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],g=a[2]||{};if(d.H(f.cb,e))if(b.plugins=b.plugins||{},b.J=b.J||{},b.plugins[e]&&!b.J[e])b.J[e]=new b.plugins[e](g);else{b.B=b.B||[];for(var g=0,l=b.B.length;g<l;g++)if(b.B[g][1]===
e)return;b.B.push(a);k._require([v,f.jc+e+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];d.d(a,"Object")||(a={});a._iden=b;n.setProperty("customEvent",a);h.c.b.et=7;h.c.b.ep="";h.c.b.p=x(n.z("customEvent"));h.c.i();h.c.b.p="";n.o("customEvent")}}};k.init();h.wb=k;return h.wb})();
(function(){var a=h.A;c.spa!==q&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),a.e("pv-b",function(){""!==window.location.hash&&(h.c.b.u=window.location.href)}))})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=u,this.b={},this.Xa=this.Wa=u,this.U=k.U,this.Oa=e.I(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.za=w,this.init())}var b=mt.url,g=mt.jb,d=mt.lb,e=mt.lang,t=mt.cookie,f=mt.f,l=mt.sessionStorage,m=mt.s,r=mt.event,s=h.oa,n=h.N,x=n.K,k=h.D,p=h.load,y=h.A;a.prototype={V:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},fa:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},da:function(a){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.fa(a,c.dm[d]))return u}else{var e=b.O(a);if(e&&this.V(e,c.dm[d]))return u}return w},R:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.V(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ca:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.fa(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},Tb:function(){if(!document.referrer)return k.L-k.P>c.vdur?1:4;var a=w;this.da(document.referrer)&&this.da(document.location.href)?a=u:(a=b.O(document.referrer),a=this.V(a||"",document.location.hostname));return a?k.L-k.P>c.vdur?1:4:3},sc:function(){var a,b,d,e,f,g;k.P=s.getData("Hm_lpvt_"+c.id)||0;13===k.P.length&&(k.P=Math.round(k.P/1E3));b=this.Tb();a=4!==b?1:0;if(g=s.getData("Hm_lvt_"+c.id)){e=g.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/
1E3));for(;2592E3<k.L-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(k.L);4<e.length;)e.shift();g=e.join(",");e=e[e.length-1]}else g=k.L,e="",f=1;this.gc()?(s.setData("Hm_lvt_"+c.id,g,c.age),s.setData("Hm_lpvt_"+c.id,k.L),d=t.ic(this.R(),this.ca())):this.Eb();if(0===c.nv&&this.da(document.location.href)&&(""===document.referrer||this.da(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=e;this.b.lv=f},gc:function(){var a=b.O(document.location.href);return!e.H("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
a)},Eb:function(){for(var a=document.cookie.split(";"),b=0;b<a.length;b++){var d=a[b].split("=");d.length&&/Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0]))&&s.removeData(d[0]);d.length&&/Hm_ck_[0-9]{13}/.test(String(d[0]))&&s.removeData(d[0])}},rc:function(){for(var a=[],b=this.b.et,d=0,e=k.mb.length;d<e;d++){var f=k.mb[d],g=this.b[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}return a.join("&")},tc:function(){this.sc();
this.b.si=c.id;this.b.sn=this.Ta();this.b.su=document.referrer;this.b.ds=f.lc;this.b.cl=f.colorDepth+"-bit";this.b.ln=String(f.language).toLowerCase();this.b.ja=f.javaEnabled?1:0;this.b.ck=f.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=d.Vb();this.b.v="1.2.85";this.b.cv=decodeURIComponent(s.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=f.G();var a=document.location.href;this.b.cm=b.m(a,k.$b)||"";this.b.cp=b.m(a,k.ac)||b.m(a,k.yc)||"";this.b.cw=b.m(a,k.Zb)||
b.m(a,k.Ac)||"";this.b.ci=b.m(a,k.Xb)||b.m(a,k.xc)||"";this.b.cf=b.m(a,k.bc)||b.m(a,k.zc)||"";this.b.cu=b.m(a,k.Yb)||b.m(a,k.wc)||"";/https?:/.test(document.location.protocol)&&(this.b.u=a)},init:function(){try{this.tc(),0===this.b.nv?this.qc():this.Qa(),h.c=this,this.yb(),this.xb(),y.M("pv-b"),this.nc()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));g.log(k.Ca+"//"+k.eb+"?"+
b.join("&"))}},nc:function(){function a(){y.M("pv-d")}this.Wa?(this.za=u,this.b.et=0,this.b.ep="",this.b.p=x(n.z("pageview")),this.b.vl=f.G(),this.i(a),this.b.p=""):a();this.W=+new Date;n.o("pageview")},i:function(a){if(this.Xa){var b=this;b.b.rnd=Math.round(Math.random()*k.Ea);b.b.r=f.orientation;b.b.ww=f.ob;y.M("stag-b");var d=k.Ca+"//"+k.eb+"?"+b.rc();y.M("stag-d");b.ub(d);g.log(d,function(d){b.gb(d);e.d(a,"Function")&&a.call(b)})}},yb:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),
e=b.O(document.referrer)===k.nb?1:0,f=b.m(a,"jn"),g=/^select$/.test(f);a&&(d.test(a)&&e&&g)&&(this.b.rnd=Math.round(Math.random()*k.Ea),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},xb:function(){try{if(window.postMessage&&window.self!==window.parent){var a=this;r.e(window,"message",function(d){if(b.O(d.origin)===
k.nb){d=d.data||{};var e=d.jn||"",f=/^customevent$|^heatmap$|^pageclick$/.test(e);if(RegExp(c.id).test(d.sd||"")&&f)a.b.rnd=Math.round(Math.random()*k.Ea),p(k.protocol+"//"+c.js+e+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}}catch(d){}},ub:function(a){var b;try{b=m.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);l.set("Hm_unsent_"+
c.id,m.stringify(b))},gb:function(a){var b;try{b=m.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?l.set("Hm_unsent_"+c.id,m.stringify(b)):this.Qa()}},Qa:function(){l.remove("Hm_unsent_"+c.id)},qc:function(){var a=this,b;try{b=m.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){g.log(k.Ca+"//"+b,function(b){a.gb(b)})},
f=0;f<b.length;f++)e(b[f])},Ta:function(){return Math.round(+new Date/1E3)%65535}};return new a})();var B=h.D,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var a=mt.f,b=mt.lang,g=mt.event,d=mt.s;if("undefined"!==typeof h.c&&(c.med||(!a.Aa||7<a.Nb())&&c.cvcc)){var e,t,f,l,m=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},r=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},s=function(a,g){var k={};k.n=e;k.t="clk";k.v=a;if(g){var l=g.getAttribute("href"),m=g.getAttribute("onclick")?""+g.getAttribute("onclick"):v,n=g.getAttribute("id")||"";f.test(l)?(k.sn=
"mediate",k.snv=l):b.d(m,"String")&&f.test(m)&&(k.sn="wrap",k.snv=m);k.id=n}h.c.b.et=86;h.c.b.ep=d.stringify(k);h.c.i();for(k=+new Date;400>=+new Date-k;);};if(c.med)t="/zoosnet",e="swt",f=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,l={click:function(){for(var a=[],b=m(document.getElementsByTagName("a")),b=[].concat.apply(b,m(document.getElementsByTagName("area"))),b=[].concat.apply(b,m(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=
d.getAttribute("onclick"),d=d.getAttribute("href"),(f.test(e)||f.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){t="/other-comm";e="other";f=c.cvcc.q||q;var n=c.cvcc.id||q;l={click:function(){for(var a=[],b=m(document.getElementsByTagName("a")),b=[].concat.apply(b,m(document.getElementsByTagName("area"))),b=[].concat.apply(b,m(document.getElementsByTagName("img"))),d,e,g,k=0,l=b.length;k<l;k++)d=b[k],f!==q?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),n?(d=d.getAttribute("id"),(f.test(e)||
f.test(g)||n.test(d))&&a.push(b[k])):(f.test(e)||f.test(g))&&a.push(b[k])):n!==q&&(d=d.getAttribute("id"),n.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof l&&"undefined"!==typeof f){var x;t+=/\/$/.test(t)?"":"/";var k=function(a,d){if(x===d)return s(t+a,d),w;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(x===d[e])return s(t+a+"/"+(e+1),d[e]),w};g.e(document,"mousedown",function(a){a=a||window.event;x=a.target||a.srcElement;var d={};for(r(l,function(a,e){d[a]=b.d(e,
"Function")?e():document.getElementById(e)});x&&x!==document&&r(d,k)!==w;)x=x.parentNode})}}})();(function(){var a=mt.g,b=mt.lang,g=mt.event,d=mt.s;if("undefined"!==typeof h.c&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var e={qb:function(){for(var b=c.cvcf.length,d,l=0;l<b;l++)(d=a.Sa(decodeURIComponent(c.cvcf[l])))&&g.e(d,"click",e.ra())},ra:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=d.stringify(a);h.c.i()}}};a.fb(function(){e.qb()})}})();
(function(){var a=mt.event,b=mt.s;if(c.med&&"undefined"!==typeof h.c){var g={n:"anti",sb:0,kb:0,clk:0},d=function(){h.c.b.et=86;h.c.b.ep=b.stringify(g);h.c.i()};a.e(document,"click",function(){g.clk++});a.e(document,"keyup",function(){g.kb=1});a.e(window,"scroll",function(){g.sb++});a.e(window,"load",function(){setTimeout(d,5E3)})}})();c.oc!==q&&"1"===String(c.oc)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","OcpcCbHm"]));})();
