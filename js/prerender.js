(function(w,d,undefined)
{var degradeEnabled=1;var useIframe=1;var replaceLinks=1;var scrollBuffer=20;var scripts=d.getElementsByTagName('script'),a=d.getElementsByTagName('a'),link=d.getElementsByTagName('link'),meta=d.getElementsByTagName('meta');var smartTags=function()
{for(var i=0,l=scripts.length;i<l;i++)
{var script=scripts[i];var degrade=script.getAttribute('data-degrade');if(script.src&&!script.jExecuted&&((degradeEnabled&&!fals(degrade))||(!degradeEnabled&&tru(degrade))))
{script.jExecuted=!0;if(script.innerHTML)
eval(script.innerHTML)}}};var timers={};w.checkInterval=w.checkTimeout=function(timer){return timers[timer]};w.firedTimeouts=w.firedIntervals=function()
{var fired=[];for(var timer in timers)
if(timers[timer].substr(0,5)==='fired')
fired.push(timer);return fired};w.clearedTimeouts=w.clearedIntervals=function()
{var cleared=[];for(var timer in timers)
if(timers[timer]==='cleared'||timers[timer]==='firedCleared')
cleared.push(timer);return cleared};w.activeTimeouts=w.activeIntervals=function()
{var active=[];for(var timer in timers)
if(timers[timer]==='active'||timers[timer]==='firedActive')
active.push(timer);return active};w._setTimeout=w.setTimeout;w._setInterval=w.setInterval;w._clearTimeout=w.clearTimeout;w._clearInterval=w.clearInterval;w.clearInterval=w.clearTimeout=function(timer)
{if(timers[timer]==='active'||timers[timer]==='firedActive')
{w._clearInterval(timer);timers[timer]=timers[timer]==='active'?'cleared':'firedCleared';return!0}
else if(timers[timer])
return!1;return undefined};w.setTimeout=function(){return newSetTimeout(!0,Array.prototype.slice.call(arguments))};w.setInterval=function(){return newSetTimeout(!1,Array.prototype.slice.call(arguments))};var newSetTimeout=function(timeout,args)
{var origFn=typeof(args[0])==='function'?args[0]:new Function(args[0]);var temp=function(ms){return origFn(ms)};args[0]=function(ms){return temp(ms)};var fn=timeout?w._setTimeout:w._setInterval;var timer=fn.apply?fn.apply(this,args):fn(args[0],args[1],args[2]);temp=function(ms)
{timers[timer]=timeout?'fired':'firedActive';return origFn(ms)};timers[timer]='active';return timer};var visibleFrame,origDocSettings;var prefetchObjs=[];var checkHash=function(href)
{if(w.location.hash!=='#'+href)
{if(origDocSettings)
{d.body.style.height=origDocSettings.height;d.body.style.maxHeight=origDocSettings.maxHeight;d.body.style.overflow=origDocSettings.overflow;d.body.style.padding=origDocSettings.padding;d.body.style.margin=origDocSettings.margin;d.body.style.border=origDocSettings.border}
visibleFrame.style.visibility='hidden';visibleFrame.style.height='';visibleFrame.style.width='';return!0}
return!1};var rendered={};var replaceLink=function(href)
{for(var i=0;i<a.length;i++)
{if(a[i].href===href||a[i].href===href+'/')
{var oldOnclick=a[i].onclick;a[i].onclick=(function(href,oldOnclick){return function(){if(oldOnclick)oldOnclick();w.location.href='#'+href;(function()
{if(!checkHash(href))
w.setTimeout(arguments.callee,100)})();visibleFrame=d.getElementById(href);var height=d.documentElement.clientHeight;height-=pageY(visibleFrame)+scrollBuffer;height=(height<0)?0:height;visibleFrame.style.zIndex="1337";d.body.style.height="100%";d.body.style.maxHeight="100%";d.body.style.overflow="hidden";d.body.style.padding="0";d.body.style.margin="0";d.body.style.border="0";visibleFrame.style.backgroundColor="#FFFFFF";visibleFrame.style.height=height+'px';visibleFrame.style.border="0";visibleFrame.style.width='100%';visibleFrame.style.visibility='visible';visibleFrame.contentWindow.focus();w.onresize=arguments.callee;return!1}})(href,oldOnclick)}}};var pageY=function(elem)
{return elem.offsetParent?(elem.offsetTop+pageY(elem.offsetParent)):elem.offsetTop};var prerender=function(href,i)
{if(rendered[href])
return findprerender(i+1);rendered[href]=1;var iframe=d.createElement(useIframe?'iframe':'img');iframe.style.visibility='hidden';iframe.style.position='absolute';iframe.onload=iframe.onerror=function()
{if(useIframe&&replaceLinks)
replaceLink(href);findprerender(i+1)};iframe.src=href;iframe.id=href;d.body.insertBefore(iframe,d.body.firstChild)};var findprerender=function(i)
{for(;i<prefetchObjs.length;i++)
if(prefetchObjs[i].nodeName==="LINK"&&prefetchObjs[i].rel&&prefetchObjs[i].rel.match(/\b(?:pre(?:render|fetch)|next)\b/))
return prerender(prefetchObjs[i].href,i);else if(prefetchObjs[i].nodeName==="META"&&prefetchObjs[i].httpEquiv==="Link"&&prefetchObjs[i].content&&prefetchObjs[i].content.match(/\brel=(?:pre(?:render|fetch)|next)\b/))
if(url=prefetchObjs[i].content.match(/^<(.*)>; /))
return prerender(url[1],i)};var startPrerendering=function()
{var llen=link.length,mlen=meta.length;for(var x=0;x<llen;x++)
prefetchObjs[x]=link[x];for(;x-llen<mlen;x++)
prefetchObjs[x]=meta[x-llen];if(prefetchObjs.length>0)
{if(replaceLinks&&!origDocSettings)
origDocSettings={'height':d.body.style.height,'maxHeight':d.body.style.maxHeight,'overflow':d.body.style.overflow,'padding':d.body.style.padding,'margin':d.body.style.margin,'border':d.body.style.border};findprerender(0)}};d._currentScript=d.currentScript;var getScriptFromURL=function(url)
{for(var i=0;i<scripts.length;i++)
if(scripts[i].src===url)
return scripts[i];return undefined}
var actualScript=d.actualScript=function()
{if(d._currentScript)
return d._currentScript;var stack;try
{omgwtf}catch(e){stack=e.stack};if(!stack)
return undefined;var e=stack.indexOf(' at ')!==-1?' at ':'@';while(stack.indexOf(e)!==-1)
stack=stack.substring(stack.indexOf(e)+e.length);stack=stack.substring(0,stack.indexOf(':',stack.indexOf(':')+1));return getScriptFromURL(stack)};if(d.__defineGetter__)
d.__defineGetter__('currentScript',actualScript);addEvent(function(){startPrerendering();smartTags()});function addEvent(cb,evt,obj)
{if(!evt)
evt='load';if(!obj)
obj=w;if(d.readyState==='complete')
cb();else if(obj.addEventListener)
obj.addEventListener(evt,cb,!1);else if(obj.attachEvent)
obj.attachEvent('on'+evt,cb)}
function tru(test)
{return test==='true'||test===!0||test==='1'||test===1}
function fals(test)
{return test==='false'||test===!1||test==='0'||test===0}})(this,this.document);let t,e;const n=new Set,o=document.createElement("link"),s=o.relList&&o.relList.supports&&o.relList.supports("stylesheet")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,i="instantAllowQueryString"in document.body.dataset,r="instantAllowExternalLinks"in document.body.dataset,a="instantWhitelist"in document.body.dataset;let c=65,d=!1,l=!1,u=!1;if("instantIntensity"in document.body.dataset){const t=document.body.dataset.instantIntensity;if("mousedown"==t.substr(0,"mousedown".length))d=!0,"mousedown-only"==t&&(l=!0);else if("viewport"==t.substr(0,"viewport".length))navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType.includes("2g"))||("viewport"==t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(u=!0):"viewport-all"==t&&(u=!0));else{const e=parseInt(t);isNaN(e)||(c=e)}}if(s){const n={capture:!0,passive:!0};if(l||document.addEventListener("touchstart",function(t){e=performance.now();const n=t.target.closest("a");if(!f(n))return;h(n.href)},n),d?document.addEventListener("mousedown",function(t){const e=t.target.closest("a");if(!f(e))return;h(e.href)},n):document.addEventListener("mouseover",function(n){if(performance.now()-e<1100)return;const o=n.target.closest("a");if(!f(o))return;o.addEventListener("mouseout",m,{passive:!0}),t=setTimeout(()=>{h(o.href),t=void 0},c)},n),u){let t;(t=window.requestIdleCallback?t=>{requestIdleCallback(t,{timeout:1500})}:t=>{t()})(()=>{const t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const n=e.target;t.unobserve(n),h(n.href)}})});document.querySelectorAll("a").forEach(e=>{f(e)&&t.observe(e)})})}}function m(e){e.relatedTarget&&e.target.closest("a")==e.relatedTarget.closest("a")||t&&(clearTimeout(t),t=void 0)}function f(t){if(t&&t.href&&(!a||"instant"in t.dataset)&&(r||t.origin==location.origin||"instant"in t.dataset)&&["http:","https:"].includes(t.protocol)&&("http:"!=t.protocol||"https:"!=location.protocol)&&(i||!t.search||"instant"in t.dataset)&&!(t.hash&&t.pathname+t.search==location.pathname+location.search||"noInstant"in t.dataset))return!0}function h(t){if(n.has(t))return;const e=document.createElement("link");e.rel="prerender",e.href=t,document.head.appendChild(e),n.add(t)}