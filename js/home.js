//reducing number of requests for speed purposes
const appConfig = new blockstack.AppConfig(['store_write', 'publish_data']);const appDomain = "https://genderev.com";var userSession = new blockstack.UserSession({appConfig,}); 
function signOut() {blockstack.signUserOut('index.html');}
!function (o) { o.fn.prognroll = function (r) { var t = o.extend({ height: 5, color: "#50bcb6", custom: !1 }, r), i = o("<span>", { class: "prognroll-bar" }); return this.each(function (r, n) { if (o(this).data("prognroll")) return !1; o(this).data("prognroll", !0), o("body").prepend(i).end().find(".prognroll-bar").not(":first").remove(), o(".prognroll-bar").css({ position: "fixed", top: 0, left: 0, width: 0, height: t.height, backgroundColor: t.color, zIndex: 2147483647 }); var e = { windowScrollTop: o(window).scrollTop(), windowOuterHeight: o(window).outerHeight(), bodyHeight: o(document).height() }; function l() { o(window).scroll(function (r) { r.preventDefault(), e.windowScrollTop = o(window).scrollTop(), e.windowOuterHeight = o(window).outerHeight(), e.bodyHeight = o(document).height(); var t = e.windowScrollTop / (e.bodyHeight - e.windowOuterHeight) * 100; o(".prognroll-bar").css("width", t + "%") }) } !1 === t.custom ? l() : "none" == o(this).css("max-height") ? l() : o(this).scroll(function (r) { r.preventDefault(); var t = o(this).scrollTop(), i = o(this).outerHeight(), n = t / (o(this).prop("scrollHeight") - i) * 100; o(".prognroll-bar").css("width", n + "%") }); var h = e.windowScrollTop / (e.bodyHeight - e.windowOuterHeight) * 100; o(".prognroll-bar").css("width", h + "%") }) } }(jQuery);
"use strict";var __extends=(this&&this.__extends)||(function(){var a=function(b,c){a=Object.setPrototypeOf||({__proto__:[]} instanceof Array&&function(f,d){f.__proto__=d})||function(g,d){for(var f in d){if(d.hasOwnProperty(f)){g[f]=d[f]}}};return a(b,c)};return function(b,c){a(b,c);function e(){this.constructor=b}b.prototype=c===null?Object.create(c):(e.prototype=c.prototype,new e())}})();var __assign=(this&&this.__assign)||function(){__assign=Object.assign||function(e){for(var a,d=1,c=arguments.length;d<c;d++){a=arguments[d];for(var b in a){if(Object.prototype.hasOwnProperty.call(a,b)){e[b]=a[b]}}}return e};return __assign.apply(this,arguments)};var typewriterSettings={writeDelay:1,deleteDelay:10,holdOnceWritten:500,holdOnceDeleted:150,stopAfterOnce:true};var TypewriterProps=(function(){function a(b,c,d){var e=this;this.phrasesLength=0;this.currentPhrase=0;this.updateCurrentPhrase=function(){e.currentPhrase===e.phrasesLength-1?e.resetPhrases():e.nextPhrase()};this.resetPhrases=function(){e.currentPhrase=0};this.nextPhrase=function(){e.currentPhrase++};this.settings=__assign({},typewriterSettings,(d||{}));this.element=document.querySelector(b);this.phrases=c;this.phrasesLength=c.length}return a}());var TypeWriter=(function(b){__extends(a,b);function a(e,f,c){if(c===void 0){c={}}var d=b.call(this,e,f,c)||this;d.write=function(){d.element.setAttribute("placeholder","");d.phrases[d.currentPhrase].split("").forEach(function(h,g){setTimeout(function(){d.element.setAttribute("placeholder",d.element.getAttribute("placeholder")+h);if(g===d.phrases[d.currentPhrase].length-1){setTimeout(function(){d.remove()},d.settings.holdOnceWritten)}},d.settings.writeDelay*g)})};d.remove=function(){var h=d.phrases[d.currentPhrase];var g=function(j){setTimeout(function(){d.element.setAttribute("placeholder",d.element.getAttribute("placeholder").slice(0,-1));if(j===h.length-1){setTimeout(function(){d.newPhrase()},d.settings.holdOnceDeleted)}},d.settings.deleteDelay*j)};for(var i=0;i<h.length;i++){g(i)}};d.newPhrase=function(){d.currentPhrase++;if(d.currentPhrase===d.phrases.length){d.currentPhrase=0;if(d.settings.stopAfterOnce){d.element.setAttribute("placeholder",d.phrases[0]);return}}d.write()};d.write();return d}return a}(TypewriterProps));
window.addEventListener('load', (event) => {if (!userSession.isUserSignedIn()) {alert('Error: You are not signed in.');}});