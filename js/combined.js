/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(b,a){"object"==typeof module&&"object"==typeof module.exports?module.exports=b.document?a(b,!0):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")}return a(c)}:a(b)}("undefined"!=typeof window?window:this,function(en,aJ){var dU=[],dJ=en.document,d0=Object.getPrototypeOf,dX=dU.slice,ar=dU.concat,dN=dU.push,eg=dU.indexOf,b2={},b1=b2.toString,dK=b2.hasOwnProperty,er=dK.toString,dV=er.call(Object),d7={},dL=function(a){return"function"==typeof a&&"number"!=typeof a.nodeType},aQ=function(a){return null!=a&&a===a.window},dP={type:!0,src:!0,nonce:!0,noModule:!0};function aa(f,d,b){var e,c,a=(b=b||dJ).createElement("script");if(a.text=f,d){for(e in dP){(c=d[e]||d.getAttribute&&d.getAttribute(e))&&a.setAttribute(e,c)}}b.head.appendChild(a).parentNode.removeChild(a)}function aW(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?b2[b1.call(a)]||"object":typeof a}var av="3.4.1",af=function(b,a){return new af.fn.init(b,a)},bb=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function eq(a){var c=!!a&&"length" in a&&a.length,b=aW(a);return !dL(a)&&!aQ(a)&&("array"===b||0===c||"number"==typeof c&&0<c&&c-1 in a)}af.fn=af.prototype={jquery:av,constructor:af,length:0,toArray:function(){return dX.call(this)},get:function(a){return null==a?dX.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(b){var a=af.merge(this.constructor(),b);return a.prevObject=this,a},each:function(a){return af.each(this,a)},map:function(a){return this.pushStack(af.map(this,function(c,b){return a.call(c,b,c)}))},slice:function(){return this.pushStack(dX.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var c=this.length,b=+a+(a<0?c:0);return this.pushStack(0<=b&&b<c?[this[b]]:[])},end:function(){return this.prevObject||this.constructor()},push:dN,sort:dU.sort,splice:dU.splice},af.extend=af.fn.extend=function(){var h,a,e,c,g,d,i=arguments[0]||{},b=1,j=arguments.length,f=!1;for("boolean"==typeof i&&(f=i,i=arguments[b]||{},b++),"object"==typeof i||dL(i)||(i={}),b===j&&(i=this,b--);b<j;b++){if(null!=(h=arguments[b])){for(a in h){c=h[a],"__proto__"!==a&&i!==c&&(f&&c&&(af.isPlainObject(c)||(g=Array.isArray(c)))?(e=i[a],d=g&&!Array.isArray(e)?[]:g||af.isPlainObject(e)?e:{},g=!1,i[a]=af.extend(f,d,c)):void 0!==c&&(i[a]=c))}}}return i},af.extend({expando:"jQuery"+(av+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var c,b;return !(!a||"[object Object]"!==b1.call(a))&&(!(c=d0(a))||"function"==typeof(b=dK.call(c,"constructor")&&c.constructor)&&er.call(b)===dV)},isEmptyObject:function(b){var a;for(a in b){return !1}return !0},globalEval:function(b,a){aa(b,{nonce:a&&a.nonce})},each:function(c,a){var d,b=0;if(eq(c)){for(d=c.length;b<d;b++){if(!1===a.call(c[b],b,c[b])){break}}}else{for(b in c){if(!1===a.call(c[b],b,c[b])){break}}}return c},trim:function(a){return null==a?"":(a+"").replace(bb,"")},makeArray:function(a,c){var b=c||[];return null!=a&&(eq(Object(a))?af.merge(b,"string"==typeof a?[a]:a):dN.call(b,a)),b},inArray:function(a,c,b){return null==c?-1:eg.call(c,a,b)},merge:function(e,c){for(var a=+c.length,d=0,b=e.length;d<a;d++){e[b++]=c[d]}return e.length=b,e},grep:function(b,g,d){for(var a=[],f=0,c=b.length,e=!d;f<c;f++){!g(b[f],f)!==e&&a.push(b[f])}return a},map:function(b,g,d){var a,f,c=0,e=[];if(eq(b)){for(a=b.length;c<a;c++){null!=(f=g(b[c],c,d))&&e.push(f)}}else{for(c in b){null!=(f=g(b[c],c,d))&&e.push(f)}}return ar.apply([],e)},guid:1,support:d7}),"function"==typeof Symbol&&(af.fn[Symbol.iterator]=dU[Symbol.iterator]),af.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(b,a){b2["[object "+a+"]"]=a.toLowerCase()});var cH=function(V){var J,N,L,R,u,x,E,A,l,o,k,at,bl,P,a7,n,G,O,bv,r="sizzle"+1*new Date,Z=V.document,a2=0,K=0,I=W(),by=W(),q=W(),bp=W(),a8=function(cb,ca){return cb===ca&&(k=!0),0},t={}.hasOwnProperty,C=[],T=C.pop,w=C.push,bz=C.push,M=C.slice,H=function(cc,ca){for(var cd=0,cb=cc.length;cd<cb;cd++){if(cc[cd]===ca){return cd}}return -1},p="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",v="[\\x20\\t\\r\\n\\f]",D="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",d="\\["+v+"*("+D+")(?:"+v+"*([*^$|!~]?=)"+v+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+D+"))|)"+v+"*\\]",e=":("+D+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+d+")*)|.*)\\)|)",a6=new RegExp(v+"+","g"),bn=new RegExp("^"+v+"+|((?:^|[^\\\\])(?:\\\\.)*)"+v+"+$","g"),U=new RegExp("^"+v+"*,"+v+"*"),bq=new RegExp("^"+v+"*([>+~]|"+v+")"+v+"*"),i=new RegExp(v+"|>"),b=new RegExp(e),g=new RegExp("^"+D+"$"),a5={ID:new RegExp("^#("+D+")"),CLASS:new RegExp("^\\.("+D+")"),TAG:new RegExp("^("+D+"|[*])"),ATTR:new RegExp("^"+d),PSEUDO:new RegExp("^"+e),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+v+"*(even|odd|(([+-]|)(\\d*)n|)"+v+"*(?:([+-]|)"+v+"*(\\d+)|))"+v+"*\\)|)","i"),bool:new RegExp("^(?:"+p+")$","i"),needsContext:new RegExp("^"+v+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+v+"*((?:-\\d)?\\d*)"+v+"*\\)|)(?=[^-]|$)","i")},a=/HTML$/i,m=/^(?:input|select|textarea|button)$/i,B=/^h\d$/i,y=/^[^{]+\{\s*\[native \w/,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Q=/[+~]/,be=new RegExp("\\\\([\\da-f]{1,6}"+v+"?|("+v+")|.)","ig"),F=function(cc,ca,cd){var cb="0x"+ca-65536;return cb!=cb||cd?ca:cb<0?String.fromCharCode(cb+65536):String.fromCharCode(cb>>10|55296,1023&cb|56320)},bo=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,c=function(cb,ca){return ca?"\0"===cb?"\ufffd":cb.slice(0,-1)+"\\"+cb.charCodeAt(cb.length-1).toString(16)+" ":"\\"+cb},z=function(){at()},br=a0(function(ca){return !0===ca.disabled&&"fieldset"===ca.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{bz.apply(C=M.call(Z.childNodes),Z.childNodes),C[Z.childNodes.length].nodeType}catch(J){bz={apply:C.length?function(cb,ca){w.apply(cb,M.call(ca))}:function(cc,ca){var cd=cc.length,cb=0;while(cc[cd++]=ca[cb++]){}cc.length=cd-1}}}function bx(ci,cd,cm,ch){var cb,cl,cf,cj,cg,ca,ce,cc=cd&&cd.ownerDocument,ck=cd?cd.nodeType:9;if(cm=cm||[],"string"!=typeof ci||!ci||1!==ck&&9!==ck&&11!==ck){return cm}if(!ch&&((cd?cd.ownerDocument||cd:Z)!==bl&&at(cd),cd=cd||bl,a7)){if(11!==ck&&(cg=X.exec(ci))){if(cb=cg[1]){if(9===ck){if(!(cf=cd.getElementById(cb))){return cm}if(cf.id===cb){return cm.push(cf),cm}}else{if(cc&&(cf=cc.getElementById(cb))&&bv(cd,cf)&&cf.id===cb){return cm.push(cf),cm}}}else{if(cg[2]){return bz.apply(cm,cd.getElementsByTagName(ci)),cm}if((cb=cg[3])&&N.getElementsByClassName&&cd.getElementsByClassName){return bz.apply(cm,cd.getElementsByClassName(cb)),cm}}}if(N.qsa&&!bp[ci+" "]&&(!n||!n.test(ci))&&(1!==ck||"object"!==cd.nodeName.toLowerCase())){if(ce=ci,cc=cd,1===ck&&i.test(ci)){(cj=cd.getAttribute("id"))?cj=cj.replace(bo,c):cd.setAttribute("id",cj=r),cl=(ca=x(ci)).length;while(cl--){ca[cl]="#"+cj+" "+bs(ca[cl])}ce=ca.join(","),cc=Q.test(ci)&&f(cd.parentNode)||cd}try{return bz.apply(cm,cc.querySelectorAll(ce)),cm}catch(cd){bp(ci,!0)}finally{cj===r&&cd.removeAttribute("id")}}}return A(ci.replace(bn,"$1"),cd,cm,ch)}function W(){var ca=[];return function cb(cc,cd){return ca.push(cc+" ")>L.cacheLength&&delete cb[ca.shift()],cb[cc+" "]=cd}}function a3(ca){return ca[r]=!0,ca}function S(cb){var ca=bl.createElement("fieldset");try{return !!cb(ca)}catch(cb){return !1}finally{ca.parentNode&&ca.parentNode.removeChild(ca),ca=null}}function j(cc,ca){var cd=cc.split("|"),cb=cd.length;while(cb--){L.attrHandle[cd[cb]]=ca}}function a1(cc,ca){var cd=ca&&cc,cb=cd&&1===cc.nodeType&&1===ca.nodeType&&cc.sourceIndex-ca.sourceIndex;if(cb){return cb}if(cd){while(cd=cd.nextSibling){if(cd===ca){return -1}}}return cc?1:-1}function bm(ca){return function(cb){return"input"===cb.nodeName.toLowerCase()&&cb.type===ca}}function Y(ca){return function(cc){var cb=cc.nodeName.toLowerCase();return("input"===cb||"button"===cb)&&cc.type===ca}}function bt(ca){return function(cb){return"form" in cb?cb.parentNode&&!1===cb.disabled?"label" in cb?"label" in cb.parentNode?cb.parentNode.disabled===ca:cb.disabled===ca:cb.isDisabled===ca||cb.isDisabled!==!ca&&br(cb)===ca:cb.disabled===ca:"label" in cb&&cb.disabled===ca}}function a4(ca){return a3(function(cb){return cb=+cb,a3(function(cf,cd){var cg,ce=ca([],cf.length,cb),cc=ce.length;while(cc--){cf[cg=ce[cc]]&&(cf[cg]=!(cd[cg]=cf[cg]))}})})}function f(ca){return ca&&"undefined"!=typeof ca.getElementsByTagName&&ca}for(J in N=bx.support={},u=bx.isXML=function(cb){var ca=cb.namespaceURI,cc=(cb.ownerDocument||cb).documentElement;return !a.test(ca||cc&&cc.nodeName||"HTML")},at=bx.setDocument=function(cc){var ca,cd,cb=cc?cc.ownerDocument||cc:Z;return cb!==bl&&9===cb.nodeType&&cb.documentElement&&(P=(bl=cb).documentElement,a7=!u(bl),Z!==bl&&(cd=bl.defaultView)&&cd.top!==cd&&(cd.addEventListener?cd.addEventListener("unload",z,!1):cd.attachEvent&&cd.attachEvent("onunload",z)),N.attributes=S(function(ce){return ce.className="i",!ce.getAttribute("className")}),N.getElementsByTagName=S(function(ce){return ce.appendChild(bl.createComment("")),!ce.getElementsByTagName("*").length}),N.getElementsByClassName=y.test(bl.getElementsByClassName),N.getById=S(function(ce){return P.appendChild(ce).id=r,!bl.getElementsByName||!bl.getElementsByName(r).length}),N.getById?(L.filter.ID=function(cf){var ce=cf.replace(be,F);return function(cg){return cg.getAttribute("id")===ce}},L.find.ID=function(cf,ce){if("undefined"!=typeof ce.getElementById&&a7){var cg=ce.getElementById(cf);return cg?[cg]:[]}}):(L.filter.ID=function(ce){var cf=ce.replace(be,F);return function(ch){var cg="undefined"!=typeof ch.getAttributeNode&&ch.getAttributeNode("id");return cg&&cg.value===cf}},L.find.ID=function(ch,cf){if("undefined"!=typeof cf.getElementById&&a7){var cj,cg,ce,ci=cf.getElementById(ch);if(ci){if((cj=ci.getAttributeNode("id"))&&cj.value===ch){return[ci]}ce=cf.getElementsByName(ch),cg=0;while(ci=ce[cg++]){if((cj=ci.getAttributeNode("id"))&&cj.value===ch){return[ci]}}}return[]}}),L.find.TAG=N.getElementsByTagName?function(cf,ce){return"undefined"!=typeof ce.getElementsByTagName?ce.getElementsByTagName(cf):N.qsa?ce.querySelectorAll(cf):void 0}:function(ch,cf){var cj,cg=[],ce=0,ci=cf.getElementsByTagName(ch);if("*"===ch){while(cj=ci[ce++]){1===cj.nodeType&&cg.push(cj)}return cg}return ci},L.find.CLASS=N.getElementsByClassName&&function(cf,ce){if("undefined"!=typeof ce.getElementsByClassName&&a7){return ce.getElementsByClassName(cf)}},G=[],n=[],(N.qsa=y.test(bl.querySelectorAll))&&(S(function(ce){P.appendChild(ce).innerHTML="<a id='"+r+"'></a><select id='"+r+"-\r\\' msallowcapture=''><option selected=''></option></select>",ce.querySelectorAll("[msallowcapture^='']").length&&n.push("[*^$]="+v+"*(?:''|\"\")"),ce.querySelectorAll("[selected]").length||n.push("\\["+v+"*(?:value|"+p+")"),ce.querySelectorAll("[id~="+r+"-]").length||n.push("~="),ce.querySelectorAll(":checked").length||n.push(":checked"),ce.querySelectorAll("a#"+r+"+*").length||n.push(".#.+[+~]")}),S(function(cf){cf.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var ce=bl.createElement("input");ce.setAttribute("type","hidden"),cf.appendChild(ce).setAttribute("name","D"),cf.querySelectorAll("[name=d]").length&&n.push("name"+v+"*[*^$|!~]?="),2!==cf.querySelectorAll(":enabled").length&&n.push(":enabled",":disabled"),P.appendChild(cf).disabled=!0,2!==cf.querySelectorAll(":disabled").length&&n.push(":enabled",":disabled"),cf.querySelectorAll("*,:x"),n.push(",.*:")})),(N.matchesSelector=y.test(O=P.matches||P.webkitMatchesSelector||P.mozMatchesSelector||P.oMatchesSelector||P.msMatchesSelector))&&S(function(ce){N.disconnectedMatch=O.call(ce,"*"),O.call(ce,"[s!='']:x"),G.push("!=",e)}),n=n.length&&new RegExp(n.join("|")),G=G.length&&new RegExp(G.join("|")),ca=y.test(P.compareDocumentPosition),bv=ca||y.test(P.contains)?function(cg,ce){var ch=9===cg.nodeType?cg.documentElement:cg,cf=ce&&ce.parentNode;return cg===cf||!(!cf||1!==cf.nodeType||!(ch.contains?ch.contains(cf):cg.compareDocumentPosition&&16&cg.compareDocumentPosition(cf)))}:function(cf,ce){if(ce){while(ce=ce.parentNode){if(ce===cf){return !0}}}return !1},a8=ca?function(cf,ce){if(cf===ce){return k=!0,0}var cg=!cf.compareDocumentPosition-!ce.compareDocumentPosition;return cg||(1&(cg=(cf.ownerDocument||cf)===(ce.ownerDocument||ce)?cf.compareDocumentPosition(ce):1)||!N.sortDetached&&ce.compareDocumentPosition(cf)===cg?cf===bl||cf.ownerDocument===Z&&bv(Z,cf)?-1:ce===bl||ce.ownerDocument===Z&&bv(Z,ce)?1:o?H(o,cf)-H(o,ce):0:4&cg?-1:1)}:function(ck,ch){if(ck===ch){return k=!0,0}var ce,cj=0,cg=ck.parentNode,cl=ch.parentNode,cf=[ck],ci=[ch];if(!cg||!cl){return ck===bl?-1:ch===bl?1:cg?-1:cl?1:o?H(o,ck)-H(o,ch):0}if(cg===cl){return a1(ck,ch)}ce=ck;while(ce=ce.parentNode){cf.unshift(ce)}ce=ch;while(ce=ce.parentNode){ci.unshift(ce)}while(cf[cj]===ci[cj]){cj++}return cj?a1(cf[cj],ci[cj]):cf[cj]===Z?-1:ci[cj]===Z?1:0}),bl},bx.matches=function(cb,ca){return bx(cb,null,null,ca)},bx.matchesSelector=function(cb,ca){if((cb.ownerDocument||cb)!==bl&&at(cb),N.matchesSelector&&a7&&!bp[ca+" "]&&(!G||!G.test(ca))&&(!n||!n.test(ca))){try{var cc=O.call(cb,ca);if(cc||N.disconnectedMatch||cb.document&&11!==cb.document.nodeType){return cc}}catch(cb){bp(ca,!0)}}return 0<bx(ca,bl,null,[cb]).length},bx.contains=function(cb,ca){return(cb.ownerDocument||cb)!==bl&&at(cb),bv(cb,ca)},bx.attr=function(cc,ca){(cc.ownerDocument||cc)!==bl&&at(cc);var cd=L.attrHandle[ca.toLowerCase()],cb=cd&&t.call(L.attrHandle,ca.toLowerCase())?cd(cc,ca,!a7):void 0;return void 0!==cb?cb:N.attributes||!a7?cc.getAttribute(ca):(cb=cc.getAttributeNode(ca))&&cb.specified?cb.value:null},bx.escape=function(ca){return(ca+"").replace(bo,c)},bx.error=function(ca){throw new Error("Syntax error, unrecognized expression: "+ca)},bx.uniqueSort=function(cd){var cb,ce=[],cc=0,ca=0;if(k=!N.detectDuplicates,o=!N.sortStable&&cd.slice(0),cd.sort(a8),k){while(cb=cd[ca++]){cb===cd[ca]&&(cc=ce.push(ca))}while(cc--){cd.splice(ce[cc],1)}}return o=null,cd},R=bx.getText=function(cd){var cb,ce="",cc=0,ca=cd.nodeType;if(ca){if(1===ca||9===ca||11===ca){if("string"==typeof cd.textContent){return cd.textContent}for(cd=cd.firstChild;cd;cd=cd.nextSibling){ce+=R(cd)}}else{if(3===ca||4===ca){return cd.nodeValue}}}else{while(cb=cd[cc++]){ce+=R(cb)}}return ce},(L=bx.selectors={cacheLength:50,createPseudo:a3,match:a5,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(ca){return ca[1]=ca[1].replace(be,F),ca[3]=(ca[3]||ca[4]||ca[5]||"").replace(be,F),"~="===ca[2]&&(ca[3]=" "+ca[3]+" "),ca.slice(0,4)},CHILD:function(ca){return ca[1]=ca[1].toLowerCase(),"nth"===ca[1].slice(0,3)?(ca[3]||bx.error(ca[0]),ca[4]=+(ca[4]?ca[5]+(ca[6]||1):2*("even"===ca[3]||"odd"===ca[3])),ca[5]=+(ca[7]+ca[8]||"odd"===ca[3])):ca[3]&&bx.error(ca[0]),ca},PSEUDO:function(cb){var ca,cc=!cb[6]&&cb[2];return a5.CHILD.test(cb[0])?null:(cb[3]?cb[2]=cb[4]||cb[5]||"":cc&&b.test(cc)&&(ca=x(cc,!0))&&(ca=cc.indexOf(")",cc.length-ca)-cc.length)&&(cb[0]=cb[0].slice(0,ca),cb[2]=cc.slice(0,ca)),cb.slice(0,3))}},filter:{TAG:function(cb){var ca=cb.replace(be,F).toLowerCase();return"*"===cb?function(){return !0}:function(cc){return cc.nodeName&&cc.nodeName.toLowerCase()===ca}},CLASS:function(cb){var ca=I[cb+" "];return ca||(ca=new RegExp("(^|"+v+")"+cb+"("+v+"|$)"))&&I(cb,function(cc){return ca.test("string"==typeof cc.className&&cc.className||"undefined"!=typeof cc.getAttribute&&cc.getAttribute("class")||"")})},ATTR:function(cc,cb,ca){return function(ce){var cd=bx.attr(ce,cc);return null==cd?"!="===cb:!cb||(cd+="","="===cb?cd===ca:"!="===cb?cd!==ca:"^="===cb?ca&&0===cd.indexOf(ca):"*="===cb?ca&&-1<cd.indexOf(ca):"$="===cb?ca&&cd.slice(-ca.length)===ca:"~="===cb?-1<(" "+cd.replace(a6," ")+" ").indexOf(ca):"|="===cb&&(cd===ca||cd.slice(0,ca.length+1)===ca+"-"))}},CHILD:function(ce,cg,cd,cf,cc){var ch="nth"!==ce.slice(0,3),cb="last"!==ce.slice(-4),ca="of-type"===cg;return 1===cf&&0===cc?function(ci){return !!ci.parentNode}:function(ct,cv,cq){var co,ck,cs,cm,cu,cr,cj=ch!==cb?"nextSibling":"previousSibling",ci=ct.parentNode,cn=ca&&ct.nodeName.toLowerCase(),cp=!cq&&!ca,cl=!1;if(ci){if(ch){while(cj){cm=ct;while(cm=cm[cj]){if(ca?cm.nodeName.toLowerCase()===cn:1===cm.nodeType){return !1}}cr=cj="only"===ce&&!cr&&"nextSibling"}return !0}if(cr=[cb?ci.firstChild:ci.lastChild],cb&&cp){cl=(cu=(co=(ck=(cs=(cm=ci)[r]||(cm[r]={}))[cm.uniqueID]||(cs[cm.uniqueID]={}))[ce]||[])[0]===a2&&co[1])&&co[2],cm=cu&&ci.childNodes[cu];while(cm=++cu&&cm&&cm[cj]||(cl=cu=0)||cr.pop()){if(1===cm.nodeType&&++cl&&cm===ct){ck[ce]=[a2,cu,cl];break}}}else{if(cp&&(cl=cu=(co=(ck=(cs=(cm=ct)[r]||(cm[r]={}))[cm.uniqueID]||(cs[cm.uniqueID]={}))[ce]||[])[0]===a2&&co[1]),!1===cl){while(cm=++cu&&cm&&cm[cj]||(cl=cu=0)||cr.pop()){if((ca?cm.nodeName.toLowerCase()===cn:1===cm.nodeType)&&++cl&&(cp&&((ck=(cs=cm[r]||(cm[r]={}))[cm.uniqueID]||(cs[cm.uniqueID]={}))[ce]=[a2,cl]),cm===ct)){break}}}}return(cl-=cc)===cf||cl%cf==0&&0<=cl/cf}}},PSEUDO:function(cd,ca){var cc,cb=L.pseudos[cd]||L.setFilters[cd.toLowerCase()]||bx.error("unsupported pseudo: "+cd);return cb[r]?cb(ca):1<cb.length?(cc=[cd,cd,"",ca],L.setFilters.hasOwnProperty(cd.toLowerCase())?a3(function(cg,ce){var ch,cf=cb(cg,ca),ci=cf.length;while(ci--){cg[ch=H(cg,cf[ci])]=!(ce[ch]=cf[ci])}}):function(ce){return cb(ce,0,cc)}):cb}},pseudos:{not:a3(function(cd){var cc=[],ca=[],cb=E(cd.replace(bn,"$1"));return cb[r]?a3(function(ci,cg,ck,ch){var cf,cj=cb(ci,null,ch,[]),ce=ci.length;while(ce--){(cf=cj[ce])&&(ci[ce]=!(cg[ce]=cf))}}):function(cf,ce,cg){return cc[0]=cf,cb(cc,null,cg,ca),cc[0]=null,!ca.pop()}}),has:a3(function(ca){return function(cb){return 0<bx(ca,cb).length}}),contains:a3(function(ca){return ca=ca.replace(be,F),function(cb){return -1<(cb.textContent||R(cb)).indexOf(ca)}}),lang:a3(function(ca){return g.test(ca||"")||bx.error("unsupported lang: "+ca),ca=ca.replace(be,F).toLowerCase(),function(cc){var cb;do{if(cb=a7?cc.lang:cc.getAttribute("xml:lang")||cc.getAttribute("lang")){return(cb=cb.toLowerCase())===ca||0===cb.indexOf(ca+"-")}}while((cc=cc.parentNode)&&1===cc.nodeType);return !1}}),target:function(cb){var ca=V.location&&V.location.hash;return ca&&ca.slice(1)===cb.id},root:function(ca){return ca===P},focus:function(ca){return ca===bl.activeElement&&(!bl.hasFocus||bl.hasFocus())&&!!(ca.type||ca.href||~ca.tabIndex)},enabled:bt(!1),disabled:bt(!0),checked:function(cb){var ca=cb.nodeName.toLowerCase();return"input"===ca&&!!cb.checked||"option"===ca&&!!cb.selected},selected:function(ca){return ca.parentNode&&ca.parentNode.selectedIndex,!0===ca.selected},empty:function(ca){for(ca=ca.firstChild;ca;ca=ca.nextSibling){if(ca.nodeType<6){return !1}}return !0},parent:function(ca){return !L.pseudos.empty(ca)},header:function(ca){return B.test(ca.nodeName)},input:function(ca){return m.test(ca.nodeName)},button:function(cb){var ca=cb.nodeName.toLowerCase();return"input"===ca&&"button"===cb.type||"button"===ca},text:function(cb){var ca;return"input"===cb.nodeName.toLowerCase()&&"text"===cb.type&&(null==(ca=cb.getAttribute("type"))||"text"===ca.toLowerCase())},first:a4(function(){return[0]}),last:a4(function(cb,ca){return[ca-1]}),eq:a4(function(cb,ca,cc){return[cc<0?cc+ca:cc]}),even:a4(function(cb,ca){for(var cc=0;cc<ca;cc+=2){cb.push(cc)}return cb}),odd:a4(function(cb,ca){for(var cc=1;cc<ca;cc+=2){cb.push(cc)}return cb}),lt:a4(function(cc,ca,cd){for(var cb=cd<0?cd+ca:ca<cd?ca:cd;0<=--cb;){cc.push(cb)}return cc}),gt:a4(function(cc,ca,cd){for(var cb=cd<0?cd+ca:cd;++cb<ca;){cc.push(cb)}return cc})}}).pseudos.nth=L.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){L.pseudos[J]=bm(J)}for(J in {submit:!0,reset:!0}){L.pseudos[J]=Y(J)}function bw(){}function bs(cc){for(var ca=0,cd=cc.length,cb="";ca<cd;ca++){cb+=cc[ca].value}return cb}function a0(cd,cg,cc){var cb=cg.dir,ca=cg.next,ch=ca||cb,ce=cc&&"parentNode"===ch,cf=K++;return cg.first?function(cj,ci,ck){while(cj=cj[cb]){if(1===cj.nodeType||ce){return cd(cj,ci,ck)}}return !1}:function(cm,cj,ci){var ck,cn,co,cl=[a2,cf];if(ci){while(cm=cm[cb]){if((1===cm.nodeType||ce)&&cd(cm,cj,ci)){return !0}}}else{while(cm=cm[cb]){if(1===cm.nodeType||ce){if(cn=(co=cm[r]||(cm[r]={}))[cm.uniqueID]||(co[cm.uniqueID]={}),ca&&ca===cm.nodeName.toLowerCase()){cm=cm[cb]||cm}else{if((ck=cn[ch])&&ck[0]===a2&&ck[1]===cf){return cl[2]=ck[2]}if((cn[ch]=cl)[2]=cd(cm,cj,ci)){return !0}}}}}return !1}}function bu(ca){return 1<ca.length?function(cd,cb,ce){var cc=ca.length;while(cc--){if(!ca[cc](cd,cb,ce)){return !1}}return !0}:ca[0]}function h(cj,cc,cg,ce,ci){for(var cf,ca=[],cd=0,cb=cj.length,ch=null!=cc;cd<cb;cd++){(cf=cj[cd])&&(cg&&!cg(cf,ce,ci)||(ca.push(cf),ch&&cc.push(cd)))}return ca}function s(ce,cb,cc,ca,cf,cd){return ca&&!ca[r]&&(ca=s(ca)),cf&&!cf[r]&&(cf=s(cf,cd)),a3(function(cl,cn,cj,cp){var cq,ch,cs,co=[],cm=[],ck=cn.length,cr=cl||function(cv,ct,cw){for(var cu=0,cx=ct.length;cu<cx;cu++){bx(cv,ct[cu],cw)}return cw}(cb||"*",cj.nodeType?[cj]:cj,[]),ci=!ce||!cl&&cb?cr:h(cr,co,ce,cj,cp),cg=cc?cf||(cl?ce:ck||ca)?[]:cn:ci;if(cc&&cc(ci,cg,cj,cp),ca){cq=h(cg,cm),ca(cq,[],cj,cp),ch=cq.length;while(ch--){(cs=cq[ch])&&(cg[cm[ch]]=!(ci[cm[ch]]=cs))}}if(cl){if(cf||ce){if(cf){cq=[],ch=cg.length;while(ch--){(cs=cg[ch])&&cq.push(ci[ch]=cs)}cf(null,cg=[],cq,cp)}ch=cg.length;while(ch--){(cs=cg[ch])&&-1<(cq=cf?H(cl,cs):co[ch])&&(cl[cq]=!(cn[cq]=cs))}}}else{cg=h(cg===cn?cg.splice(ck,cg.length):cg),cf?cf(null,cn,cg,cp):bz.apply(cn,cg)}})}function ae(ck){for(var cj,cd,ch,cf=ck.length,cg=L.relative[ck[0].type],cb=cg||L.relative[" "],ce=cg?1:0,cc=a0(function(cl){return cl===cj},cb,!0),ci=a0(function(cl){return -1<H(cj,cl)},cb,!0),ca=[function(cm,cn,co){var cl=!cg&&(co||cn!==l)||((cj=cn).nodeType?cc(cm,cn,co):ci(cm,cn,co));return cj=null,cl}];ce<cf;ce++){if(cd=L.relative[ck[ce].type]){ca=[a0(bu(ca),cd)]}else{if((cd=L.filter[ck[ce].type].apply(null,ck[ce].matches))[r]){for(ch=++ce;ch<cf;ch++){if(L.relative[ck[ch].type]){break}}return s(1<ce&&bu(ca),1<ce&&bs(ck.slice(0,ce-1).concat({value:" "===ck[ce-2].type?"*":""})).replace(bn,"$1"),cd,ce<ch&&ae(ck.slice(ce,ch)),ch<cf&&ae(ck=ck.slice(ch)),ch<cf&&bs(ck))}ca.push(cd)}}return bu(ca)}return bw.prototype=L.filters=L.pseudos,L.setFilters=new bw,x=bx.tokenize=function(cj,cc){var cg,ce,ci,cf,ca,cd,cb,ch=by[cj+" "];if(ch){return cc?0:ch.slice(0)}ca=cj,cd=[],cb=L.preFilter;while(ca){for(cf in cg&&!(ce=U.exec(ca))||(ce&&(ca=ca.slice(ce[0].length)||ca),cd.push(ci=[])),cg=!1,(ce=bq.exec(ca))&&(cg=ce.shift(),ci.push({value:cg,type:ce[0].replace(bn," ")}),ca=ca.slice(cg.length)),L.filter){!(ce=a5[cf].exec(ca))||cb[cf]&&!(ce=cb[cf](ce))||(cg=ce.shift(),ci.push({value:cg,type:cf,matches:ce}),ca=ca.slice(cg.length))}if(!cg){break}}return cc?ca.length:ca?bx.error(cj):by(cj,cd).slice(0)},E=bx.compile=function(cj,cd){var cg,cc,ck,ch,cb,ce,ci=[],cf=[],ca=q[cj+" "];if(!ca){cd||(cd=x(cj)),cg=cd.length;while(cg--){(ca=ae(cd[cg]))[r]?ci.push(ca):cf.push(ca)}(ca=q(cj,(cc=cf,ch=0<(ck=ci).length,cb=0<cc.length,ce=function(ct,cp,cs,cu,co){var cM,cq,cw,cr=0,cy="0",cm=ct&&[],cn=[],cx=l,cl=ct||cb&&L.find.TAG("*",co),cv=a2+=null==cx?1:Math.random()||0.1,cz=cl.length;for(co&&(l=cp===bl||cp||co);cy!==cz&&null!=(cM=cl[cy]);cy++){if(cb&&cM){cq=0,cp||cM.ownerDocument===bl||(at(cM),cs=!a7);while(cw=cc[cq++]){if(cw(cM,cp||bl,cs)){cu.push(cM);break}}co&&(a2=cv)}ch&&((cM=!cw&&cM)&&cr--,ct&&cm.push(cM))}if(cr+=cy,ch&&cy!==cr){cq=0;while(cw=ck[cq++]){cw(cm,cn,cp,cs)}if(ct){if(0<cr){while(cy--){cm[cy]||cn[cy]||(cn[cy]=T.call(cu))}}cn=h(cn)}bz.apply(cu,cn),co&&!ct&&0<cn.length&&1<cr+ck.length&&bx.uniqueSort(cu)}return co&&(a2=cv,l=cx),cm},ch?a3(ce):ce))).selector=cj}return ca},A=bx.select=function(ck,cd,ch,cf){var cj,cg,cb,ce,cc,ci="function"==typeof ck&&ck,ca=!cf&&x(ck=ci.selector||ck);if(ch=ch||[],1===ca.length){if(2<(cg=ca[0]=ca[0].slice(0)).length&&"ID"===(cb=cg[0]).type&&9===cd.nodeType&&a7&&L.relative[cg[1].type]){if(!(cd=(L.find.ID(cb.matches[0].replace(be,F),cd)||[])[0])){return ch}ci&&(cd=cd.parentNode),ck=ck.slice(cg.shift().value.length)}cj=a5.needsContext.test(ck)?0:cg.length;while(cj--){if(cb=cg[cj],L.relative[ce=cb.type]){break}if((cc=L.find[ce])&&(cf=cc(cb.matches[0].replace(be,F),Q.test(cg[0].type)&&f(cd.parentNode)||cd))){if(cg.splice(cj,1),!(ck=cf.length&&bs(cg))){return bz.apply(ch,cf),ch}break}}}return(ci||E(ck,ca))(cf,cd,!a7,ch,!cd||Q.test(ck)&&f(cd.parentNode)||cd),ch},N.sortStable=r.split("").sort(a8).join("")===r,N.detectDuplicates=!!k,at(),N.sortDetached=S(function(ca){return 1&ca.compareDocumentPosition(bl.createElement("fieldset"))}),S(function(ca){return ca.innerHTML="<a href='#'></a>","#"===ca.firstChild.getAttribute("href")})||j("type|href|height|width",function(cb,ca,cc){if(!cc){return cb.getAttribute(ca,"type"===ca.toLowerCase()?1:2)}}),N.attributes&&S(function(ca){return ca.innerHTML="<input/>",ca.firstChild.setAttribute("value",""),""===ca.firstChild.getAttribute("value")})||j("value",function(cb,ca,cc){if(!cc&&"input"===cb.nodeName.toLowerCase()){return cb.defaultValue}}),S(function(ca){return null==ca.getAttribute("disabled")})||j(p,function(cc,ca,cd){var cb;if(!cd){return !0===cc[ca]?ca.toLowerCase():(cb=cc.getAttributeNode(ca))&&cb.specified?cb.value:null}}),bx}(en);af.find=cH,af.expr=cH.selectors,af.expr[":"]=af.expr.pseudos,af.uniqueSort=af.unique=cH.uniqueSort,af.text=cH.getText,af.isXMLDoc=cH.isXML,af.contains=cH.contains,af.escapeSelector=cH.escape;var bV=function(e,c,a){var d=[],b=void 0!==a;while((e=e[c])&&9!==e.nodeType){if(1===e.nodeType){if(b&&af(e).is(a)){break}d.push(e)}}return d},al=function(a,c){for(var b=[];a;a=a.nextSibling){1===a.nodeType&&a!==c&&b.push(a)}return b},bi=af.expr.match.needsContext;function cI(b,a){return b.nodeName&&b.nodeName.toLowerCase()===a.toLowerCase()}var ad=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function d5(a,b,c){return dL(b)?af.grep(a,function(e,d){return !!b.call(e,d,e)!==c}):b.nodeType?af.grep(a,function(d){return d===b!==c}):"string"!=typeof b?af.grep(a,function(d){return -1<eg.call(b,d)!==c}):af.filter(b,a,c)}af.filter=function(c,a,d){var b=a[0];return d&&(c=":not("+c+")"),1===a.length&&1===b.nodeType?af.find.matchesSelector(b,c)?[b]:[]:af.find.matches(c,af.grep(a,function(e){return 1===e.nodeType}))},af.fn.extend({find:function(e){var c,a,d=this.length,b=this;if("string"!=typeof e){return this.pushStack(af(e).filter(function(){for(c=0;c<d;c++){if(af.contains(b[c],this)){return !0}}}))}for(a=this.pushStack([]),c=0;c<d;c++){af.find(e,b[c],a)}return 1<d?af.uniqueSort(a):a},filter:function(a){return this.pushStack(d5(this,a||[],!1))},not:function(a){return this.pushStack(d5(this,a||[],!0))},is:function(a){return !!d5(this,"string"==typeof a&&bi.test(a)?af(a):a||[],!1).length}});var aY,bB=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(af.fn.init=function(e,c,a){var d,b;if(!e){return this}if(a=a||aY,"string"==typeof e){if(!(d="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:bB.exec(e))||!d[1]&&c){return !c||c.jquery?(c||a).find(e):this.constructor(c).find(e)}if(d[1]){if(c=c instanceof af?c[0]:c,af.merge(this,af.parseHTML(d[1],c&&c.nodeType?c.ownerDocument||c:dJ,!0)),ad.test(d[1])&&af.isPlainObject(c)){for(d in c){dL(this[d])?this[d](c[d]):this.attr(d,c[d])}}return this}return(b=dJ.getElementById(d[2]))&&(this[0]=b,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):dL(e)?void 0!==a.ready?a.ready(e):e(af):af.makeArray(e,this)}).prototype=af.fn,aY=af(dJ);var aI=/^(?:parents|prev(?:Until|All))/,bd={children:!0,contents:!0,next:!0,prev:!0};function bR(b,a){while((b=b[a])&&1!==b.nodeType){}return b}af.fn.extend({has:function(a){var c=af(a,this),b=c.length;return this.filter(function(){for(var d=0;d<b;d++){if(af.contains(this,c[d])){return !0}}})},closest:function(b,g){var d,a=0,f=this.length,c=[],e="string"!=typeof b&&af(b);if(!bi.test(b)){for(;a<f;a++){for(d=this[a];d&&d!==g;d=d.parentNode){if(d.nodeType<11&&(e?-1<e.index(d):1===d.nodeType&&af.find.matchesSelector(d,b))){c.push(d);break}}}}return this.pushStack(1<c.length?af.uniqueSort(c):c)},index:function(a){return a?"string"==typeof a?eg.call(af(a),this[0]):eg.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(b,a){return this.pushStack(af.uniqueSort(af.merge(this.get(),af(b,a))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),af.each({parent:function(b){var a=b.parentNode;return a&&11!==a.nodeType?a:null},parents:function(a){return bV(a,"parentNode")},parentsUntil:function(a,c,b){return bV(a,"parentNode",b)},next:function(a){return bR(a,"nextSibling")},prev:function(a){return bR(a,"previousSibling")},nextAll:function(a){return bV(a,"nextSibling")},prevAll:function(a){return bV(a,"previousSibling")},nextUntil:function(a,c,b){return bV(a,"nextSibling",b)},prevUntil:function(a,c,b){return bV(a,"previousSibling",b)},siblings:function(a){return al((a.parentNode||{}).firstChild,a)},children:function(a){return al(a.firstChild)},contents:function(a){return"undefined"!=typeof a.contentDocument?a.contentDocument:(cI(a,"template")&&(a=a.content||a),af.merge([],a.childNodes))}},function(b,a){af.fn[b]=function(d,c){var e=af.map(this,a,d);return"Until"!==b.slice(-5)&&(c=d),c&&"string"==typeof c&&(e=af.filter(c,e)),1<this.length&&(bd[b]||af.uniqueSort(e),aI.test(b)&&e.reverse()),this.pushStack(e)}});var am=/[^\x20\t\r\n\f]+/g;function bk(a){return a}function aE(a){throw a}function dG(e,c,a,d){var b;try{e&&dL(b=e.promise)?b.call(e).done(c).fail(a):e&&dL(b=e.then)?b.call(e,c,a):c.apply(void 0,[e].slice(d))}catch(e){a.apply(void 0,[e])}}af.Callbacks=function(f){var l,h;f="string"==typeof f?(l=f,h={},af.each(l.match(am)||[],function(n,m){h[m]=!0}),h):af.extend({},f);var j,d,g,b,e=[],c=[],i=-1,a=function(){for(b=b||f.once,g=j=!0;c.length;i=-1){d=c.shift();while(++i<e.length){!1===e[i].apply(d[0],d[1])&&f.stopOnFalse&&(i=e.length,d=!1)}}f.memory||(d=!1),j=!1,b&&(e=d?[]:"")},k={add:function(){return e&&(d&&!j&&(i=e.length-1,c.push(d)),function m(n){af.each(n,function(p,o){dL(o)?f.unique&&k.has(o)||e.push(o):o&&o.length&&"string"!==aW(o)&&m(o)})}(arguments),d&&!j&&a()),this},remove:function(){return af.each(arguments,function(o,n){var m;while(-1<(m=af.inArray(n,e,m))){e.splice(m,1),m<=i&&i--}}),this},has:function(m){return m?-1<af.inArray(m,e):0<e.length},empty:function(){return e&&(e=[]),this},disable:function(){return b=c=[],e=d="",this},disabled:function(){return !e},lock:function(){return b=c=[],d||j||(e=d=""),this},locked:function(){return !!b},fireWith:function(n,m){return b||(m=[n,(m=m||[]).slice?m.slice():m],c.push(m),j||a()),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return !!g}};return k},af.extend({Deferred:function(a){var b=[["notify","progress",af.Callbacks("memory"),af.Callbacks("memory"),2],["resolve","done",af.Callbacks("once memory"),af.Callbacks("once memory"),0,"resolved"],["reject","fail",af.Callbacks("once memory"),af.Callbacks("once memory"),1,"rejected"]],d="pending",c={state:function(){return d},always:function(){return e.done(arguments).fail(arguments),this},"catch":function(f){return c.then(null,f)},pipe:function(){var f=arguments;return af.Deferred(function(g){af.each(b,function(h,j){var i=dL(f[j[4]])&&f[j[4]];e[j[1]](function(){var k=i&&i.apply(this,arguments);k&&dL(k.promise)?k.promise().progress(g.notify).done(g.resolve).fail(g.reject):g[j[0]+"With"](this,i?[k]:arguments)})}),f=null}).promise()},then:function(h,j,i){var g=0;function f(n,l,m,k){return function(){var p=this,r=arguments,o=function(){var t,s;if(!(n<g)){if((t=m.apply(p,r))===l.promise()){throw new TypeError("Thenable self-resolution")}s=t&&("object"==typeof t||"function"==typeof t)&&t.then,dL(s)?k?s.call(t,f(g,l,bk,k),f(g,l,aE,k)):(g++,s.call(t,f(g,l,bk,k),f(g,l,aE,k),f(g,l,bk,l.notifyWith))):(m!==bk&&(p=void 0,r=[t]),(k||l.resolveWith)(p,r))}},q=k?o:function(){try{s()}catch(s){af.Deferred.exceptionHook&&af.Deferred.exceptionHook(s,q.stackTrace),g<=n+1&&(m!==aE&&(p=void 0,r=[s]),l.rejectWith(p,r))}};n?q():(af.Deferred.getStackHook&&(q.stackTrace=af.Deferred.getStackHook()),en.setTimeout(q))}}return af.Deferred(function(k){b[0][3].add(f(0,k,dL(i)?i:bk,k.notifyWith)),b[1][3].add(f(0,k,dL(h)?h:bk)),b[2][3].add(f(0,k,dL(j)?j:aE))}).promise()},promise:function(f){return null!=f?af.extend(f,c):c}},e={};return af.each(b,function(i,g){var f=g[2],h=g[5];c[g[1]]=f.add,h&&f.add(function(){d=h},b[3-i][2].disable,b[3-i][3].disable,b[0][2].lock,b[0][3].lock),f.add(g[3].fire),e[g[0]]=function(){return e[g[0]+"With"](this===e?void 0:this,arguments),this},e[g[0]+"With"]=f.fireWith}),c.promise(e),a&&a.call(e,e),e},when:function(b){var d=arguments.length,g=d,a=Array(g),f=dX.call(arguments),c=af.Deferred(),e=function(h){return function(i){a[h]=this,f[h]=1<arguments.length?dX.call(arguments):i,--d||c.resolveWith(a,f)}};if(d<=1&&(dG(b,c.done(e(g)).resolve,c.reject,!d),"pending"===c.state()||dL(f[g]&&f[g].then))){return c.then()}while(g--){dG(f[g],e(g),c.reject)}return c.promise()}});var es=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;af.Deferred.exceptionHook=function(b,a){en.console&&en.console.warn&&b&&es.test(b.name)&&en.console.warn("jQuery.Deferred exception: "+b.message,b.stack,a)},af.readyException=function(a){en.setTimeout(function(){throw a})};var bN=af.Deferred();function et(){dJ.removeEventListener("DOMContentLoaded",et),en.removeEventListener("load",et),af.ready()}af.fn.ready=function(a){return bN.then(a)["catch"](function(b){af.readyException(b)}),this},af.extend({isReady:!1,readyWait:1,ready:function(a){(!0===a?--af.readyWait:af.isReady)||(af.isReady=!0)!==a&&0<--af.readyWait||bN.resolveWith(dJ,[af])}}),af.ready.then=bN.then,"complete"===dJ.readyState||"loading"!==dJ.readyState&&!dJ.documentElement.doScroll?en.setTimeout(af.ready):(dJ.addEventListener("DOMContentLoaded",et),en.addEventListener("load",et));var cL=function(h,a,e,c,g,d,i){var b=0,j=h.length,f=null==e;if("object"===aW(e)){for(b in g=!0,e){cL(h,a,b,e[b],!0,d,i)}}else{if(void 0!==c&&(g=!0,dL(c)||(i=!0),f&&(i?(a.call(h,c),a=null):(f=a,a=function(k,l,m){return f.call(af(k),m)})),a)){for(;b<j;b++){a(h[b],e,i?c:c.call(h[b],b,a(h[b],e)))}}}return g?h:f?a.call(h):j?a(h[0],e):d},ev=/^-ms-/,bP=/-([a-z])/g;function aK(b,a){return a.toUpperCase()}function bZ(a){return a.replace(ev,"ms-").replace(bP,aK)}var el=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function bS(){this.expando=af.expando+bS.uid++}bS.uid=1,bS.prototype={cache:function(b){var a=b[this.expando];return a||(a={},el(b)&&(b.nodeType?b[this.expando]=a:Object.defineProperty(b,this.expando,{value:a,configurable:!0}))),a},set:function(e,c,a){var d,b=this.cache(e);if("string"==typeof c){b[bZ(c)]=a}else{for(d in c){b[bZ(d)]=c[d]}}return b},get:function(b,a){return void 0===a?this.cache(b):b[this.expando]&&b[this.expando][bZ(a)]},access:function(a,c,b){return void 0===c||c&&"string"==typeof c&&void 0===b?this.get(a,c):(this.set(a,c,b),void 0!==b?b:c)},remove:function(c,a){var d,b=c[this.expando];if(void 0!==b){if(void 0!==a){d=(a=Array.isArray(a)?a.map(bZ):(a=bZ(a)) in b?[a]:a.match(am)||[]).length;while(d--){delete b[a[d]]}}(void 0===a||af.isEmptyObject(b))&&(c.nodeType?c[this.expando]=void 0:delete c[this.expando])}},hasData:function(b){var a=b[this.expando];return void 0!==a&&!af.isEmptyObject(a)}};var bJ=new bS,aC=new bS,bD=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,aV=/[A-Z]/g;function aR(e,c,a){var d,b;if(void 0===a&&1===e.nodeType){if(d="data-"+c.replace(aV,"-$&").toLowerCase(),"string"==typeof(a=e.getAttribute(d))){try{a="true"===(b=a)||"false"!==b&&("null"===b?null:b===+b+""?+b:bD.test(b)?JSON.parse(b):b)}catch(e){}aC.set(e,c,a)}else{a=void 0}}return a}af.extend({hasData:function(a){return aC.hasData(a)||bJ.hasData(a)},data:function(a,c,b){return aC.access(a,c,b)},removeData:function(b,a){aC.remove(b,a)},_data:function(a,c,b){return bJ.access(a,c,b)},_removeData:function(b,a){bJ.remove(b,a)}}),af.fn.extend({data:function(d,b){var g,a,f,c=this[0],e=c&&c.attributes;if(void 0===d){if(this.length&&(f=aC.get(c),1===c.nodeType&&!bJ.get(c,"hasDataAttrs"))){g=e.length;while(g--){e[g]&&0===(a=e[g].name).indexOf("data-")&&(a=bZ(a.slice(5)),aR(c,a,f[a]))}bJ.set(c,"hasDataAttrs",!0)}return f}return"object"==typeof d?this.each(function(){aC.set(this,d)}):cL(this,function(h){var i;if(c&&void 0===h){return void 0!==(i=aC.get(c,d))?i:void 0!==(i=aR(c,d))?i:void 0}this.each(function(){aC.set(this,d,h)})},null,b,1<arguments.length,null,!0)},removeData:function(a){return this.each(function(){aC.remove(this,a)})}}),af.extend({queue:function(c,a,d){var b;if(c){return a=(a||"fx")+"queue",b=bJ.get(c,a),d&&(!b||Array.isArray(d)?b=bJ.access(c,a,af.makeArray(d)):b.push(d)),b||[]}},dequeue:function(f,d){d=d||"fx";var b=af.queue(f,d),e=b.length,c=b.shift(),a=af._queueHooks(f,d);"inprogress"===c&&(c=b.shift(),e--),c&&("fx"===d&&b.unshift("inprogress"),delete a.stop,c.call(f,function(){af.dequeue(f,d)},a)),!e&&a&&a.empty.fire()},_queueHooks:function(a,c){var b=c+"queueHooks";return bJ.get(a,b)||bJ.access(a,b,{empty:af.Callbacks("once memory").add(function(){bJ.remove(a,[c+"queue",b])})})}}),af.fn.extend({queue:function(c,b){var a=2;return"string"!=typeof c&&(b=c,c="fx",a--),arguments.length<a?af.queue(this[0],c):void 0===b?this:this.each(function(){var d=af.queue(this,c,b);af._queueHooks(this,c),"fx"===c&&"inprogress"!==d[0]&&af.dequeue(this,c)})},dequeue:function(a){return this.each(function(){af.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(c,h){var e,b=1,g=af.Deferred(),d=this,f=this.length,a=function(){--b||g.resolveWith(d,[d])};"string"!=typeof c&&(h=c,c=void 0),c=c||"fx";while(f--){(e=bJ.get(d[f],c+"queueHooks"))&&e.empty&&(b++,e.empty.add(a))}return a(),g.promise(h)}});var bE=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,dO=new RegExp("^(?:([+-])=|)("+bE+")([a-z%]*)$","i"),aw=["Top","Right","Bottom","Left"],bK=dJ.documentElement,dS=function(a){return af.contains(a.ownerDocument,a)},ef={composed:!0};bK.getRootNode&&(dS=function(a){return af.contains(a.ownerDocument,a)||a.getRootNode(ef)===a.ownerDocument});var an=function(b,a){return"none"===(b=a||b).style.display||""===b.style.display&&dS(b)&&"none"===af.css(b,"display")},ay=function(b,g,d,a){var f,c,e={};for(c in g){e[c]=b.style[c],b.style[c]=g[c]}for(c in f=d.apply(b,a||[]),g){b.style[c]=e[c]}return f};function dH(i,b,f,d){var h,e,k=20,c=d?function(){return d.cur()}:function(){return af.css(i,b,"")},a=c(),g=f&&f[3]||(af.cssNumber[b]?"":"px"),j=i.nodeType&&(af.cssNumber[b]||"px"!==g&&+a)&&dO.exec(af.css(i,b));if(j&&j[3]!==g){a/=2,g=g||j[3],j=+a||1;while(k--){af.style(i,b,j+g),(1-e)*(1-(e=c()/a||0.5))<=0&&(k=0),j/=e}j*=2,af.style(i,b,j+g),f=f||[]}return f&&(j=+j||+a||0,h=f[1]?j+(f[1]+1)*f[2]:+f[2],d&&(d.unit=g,d.start=j,d.end=h)),h}var ec={};function bA(l,d){for(var h,f,j,g,b,e,c,i=[],a=0,k=l.length;a<k;a++){(f=l[a]).style&&(h=f.style.display,d?("none"===h&&(i[a]=bJ.get(f,"display")||null,i[a]||(f.style.display="")),""===f.style.display&&an(f)&&(i[a]=(c=b=g=void 0,b=(j=f).ownerDocument,e=j.nodeName,(c=ec[e])||(g=b.body.appendChild(b.createElement(e)),c=af.css(g,"display"),g.parentNode.removeChild(g),"none"===c&&(c="block"),ec[e]=c)))):"none"!==h&&(i[a]="none",bJ.set(f,"display",h)))}for(a=0;a<k;a++){null!=i[a]&&(l[a].style.display=i[a])}return l}af.fn.extend({show:function(){return bA(this,!0)},hide:function(){return bA(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){an(this)?af(this).show():af(this).hide()})}});var bO=/^(?:checkbox|radio)$/i,dI=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,bh=/^$|^module$|\/(?:java|ecma)script/i,bY={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function b7(a,c){var b;return b="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(c||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(c||"*"):[],void 0===c||c&&cI(a,c)?af.merge([a],b):b}function aM(c,a){for(var d=0,b=c.length;d<b;d++){bJ.set(c[d],"globalEval",!a||bJ.get(a[d],"globalEval"))}}bY.optgroup=bY.option,bY.tbody=bY.tfoot=bY.colgroup=bY.caption=bY.thead,bY.th=bY.td;var cF,eo,bF=/<|&#?\w+;/;function aG(e,a,k,f,o){for(var j,m,b,n,l,h,d=a.createDocumentFragment(),i=[],g=0,c=e.length;g<c;g++){if((j=e[g])||0===j){if("object"===aW(j)){af.merge(i,j.nodeType?[j]:j)}else{if(bF.test(j)){m=m||d.appendChild(a.createElement("div")),b=(dI.exec(j)||["",""])[1].toLowerCase(),n=bY[b]||bY._default,m.innerHTML=n[1]+af.htmlPrefilter(j)+n[2],h=n[0];while(h--){m=m.lastChild}af.merge(i,m.childNodes),(m=d.firstChild).textContent=""}else{i.push(a.createTextNode(j))}}}}d.textContent="",g=0;while(j=i[g++]){if(f&&-1<af.inArray(j,f)){o&&o.push(j)}else{if(l=dS(j),m=b7(d.appendChild(j),"script"),l&&aM(m),k){h=0;while(j=m[h++]){bh.test(j.type||"")&&k.push(j)}}}}return d}cF=dJ.createDocumentFragment().appendChild(dJ.createElement("div")),(eo=dJ.createElement("input")).setAttribute("type","radio"),eo.setAttribute("checked","checked"),eo.setAttribute("name","t"),cF.appendChild(eo),d7.checkClone=cF.cloneNode(!0).cloneNode(!0).lastChild.checked,cF.innerHTML="<textarea>x</textarea>",d7.noCloneChecked=!!cF.cloneNode(!0).lastChild.defaultValue;var dM=/^key/,bc=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,cD=/^([^.]*)(?:\.(.+)|)/;function au(){return !0}function ek(){return !1}function ak(b,a){return b===function(){try{return dJ.activeElement}catch(c){}}()==("focus"===a)}function aZ(c,h,e,b,g,d){var f,a;if("object"==typeof h){for(a in "string"!=typeof e&&(b=b||e,e=void 0),h){aZ(c,a,e,b,h[a],d)}return c}if(null==b&&null==g?(g=e,b=e=void 0):null==g&&("string"==typeof e?(g=b,b=void 0):(g=b,b=e,e=void 0)),!1===g){g=ek}else{if(!g){return c}}return 1===d&&(f=g,(g=function(i){return af().off(i),f.apply(this,arguments)}).guid=f.guid||(f.guid=af.guid++)),c.each(function(){af.event.add(this,h,g,b,e)})}function bC(a,c,b){b?(bJ.set(a,c,!1),af.event.add(a,c,{namespace:!1,handler:function(f){var d,g,e=bJ.get(this,c);if(1&f.isTrigger&&this[c]){if(e.length){(af.event.special[c]||{}).delegateType&&f.stopPropagation()}else{if(e=dX.call(arguments),bJ.set(this,c,e),d=b(this,c),this[c](),e!==(g=bJ.get(this,c))||d?bJ.set(this,c,!1):g={},e!==g){return f.stopImmediatePropagation(),f.preventDefault(),g.value}}}else{e.length&&(bJ.set(this,c,{value:af.event.trigger(af.extend(e[0],af.Event.prototype),e.slice(1),this)}),f.stopImmediatePropagation())}}})):void 0===bJ.get(a,c)&&af.event.add(a,c,au)}af.event={global:{},add:function(e,o,n,i,g){var m,b,f,d,q,a,k,l,p,h,j,c=bJ.get(e);if(c){n.handler&&(n=(m=n).handler,g=m.selector),g&&af.find.matchesSelector(bK,g),n.guid||(n.guid=af.guid++),(d=c.events)||(d=c.events={}),(b=c.handle)||(b=c.handle=function(r){return"undefined"!=typeof af&&af.event.triggered!==r.type?af.event.dispatch.apply(e,arguments):void 0}),q=(o=(o||"").match(am)||[""]).length;while(q--){p=j=(f=cD.exec(o[q])||[])[1],h=(f[2]||"").split(".").sort(),p&&(k=af.event.special[p]||{},p=(g?k.delegateType:k.bindType)||p,k=af.event.special[p]||{},a=af.extend({type:p,origType:j,data:i,handler:n,guid:n.guid,selector:g,needsContext:g&&af.expr.match.needsContext.test(g),namespace:h.join(".")},m),(l=d[p])||((l=d[p]=[]).delegateCount=0,k.setup&&!1!==k.setup.call(e,i,h,b)||e.addEventListener&&e.addEventListener(p,b)),k.add&&(k.add.call(e,a),a.handler.guid||(a.handler.guid=n.guid)),g?l.splice(l.delegateCount++,0,a):l.push(a),af.event.global[p]=!0)}}},remove:function(o,e,n,i,g){var m,b,f,d,q,a,k,l,p,h,j,c=bJ.hasData(o)&&bJ.get(o);if(c&&(d=c.events)){q=(e=(e||"").match(am)||[""]).length;while(q--){if(p=j=(f=cD.exec(e[q])||[])[1],h=(f[2]||"").split(".").sort(),p){k=af.event.special[p]||{},l=d[p=(i?k.delegateType:k.bindType)||p]||[],f=f[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),b=m=l.length;while(m--){a=l[m],!g&&j!==a.origType||n&&n.guid!==a.guid||f&&!f.test(a.namespace)||i&&i!==a.selector&&("**"!==i||!a.selector)||(l.splice(m,1),a.selector&&l.delegateCount--,k.remove&&k.remove.call(o,a))}b&&!l.length&&(k.teardown&&!1!==k.teardown.call(o,h,c.handle)||af.removeEvent(o,p,c.handle),delete d[p])}else{for(p in d){af.event.remove(o,p+e[q],n,i,!0)}}}af.isEmptyObject(d)&&bJ.remove(o,"handle events")}},dispatch:function(i){var b,f,d,h,e,k,c=af.event.fix(i),a=new Array(arguments.length),g=(bJ.get(this,"events")||{})[c.type]||[],j=af.event.special[c.type]||{};for(a[0]=c,b=1;b<arguments.length;b++){a[b]=arguments[b]}if(c.delegateTarget=this,!j.preDispatch||!1!==j.preDispatch.call(this,c)){k=af.event.handlers.call(this,c,g),b=0;while((h=k[b++])&&!c.isPropagationStopped()){c.currentTarget=h.elem,f=0;while((e=h.handlers[f++])&&!c.isImmediatePropagationStopped()){c.rnamespace&&!1!==e.namespace&&!c.rnamespace.test(e.namespace)||(c.handleObj=e,c.data=e.data,void 0!==(d=((af.event.special[e.origType]||{}).handle||e.handler).apply(h.elem,a))&&!1===(c.result=d)&&(c.preventDefault(),c.stopPropagation()))}}return j.postDispatch&&j.postDispatch.call(this,c),c.result}},handlers:function(h,a){var e,c,g,d,i,b=[],j=a.delegateCount,f=h.target;if(j&&f.nodeType&&!("click"===h.type&&1<=h.button)){for(;f!==this;f=f.parentNode||this){if(1===f.nodeType&&("click"!==h.type||!0!==f.disabled)){for(d=[],i={},e=0;e<j;e++){void 0===i[g=(c=a[e]).selector+" "]&&(i[g]=c.needsContext?-1<af(g,this).index(f):af.find(g,this,null,[f]).length),i[g]&&d.push(c)}d.length&&b.push({elem:f,handlers:d})}}}return f=this,j<a.length&&b.push({elem:f,handlers:a.slice(j)}),b},addProp:function(a,b){Object.defineProperty(af.Event.prototype,a,{enumerable:!0,configurable:!0,get:dL(b)?function(){if(this.originalEvent){return b(this.originalEvent)}}:function(){if(this.originalEvent){return this.originalEvent[a]}},set:function(c){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:c})}})},fix:function(a){return a[af.expando]?a:new af.Event(a)},special:{load:{noBubble:!0},click:{setup:function(b){var a=this||b;return bO.test(a.type)&&a.click&&cI(a,"input")&&bC(a,"click",au),!1},trigger:function(b){var a=this||b;return bO.test(a.type)&&a.click&&cI(a,"input")&&bC(a,"click"),!0},_default:function(b){var a=b.target;return bO.test(a.type)&&a.click&&cI(a,"input")&&bJ.get(a,"click")||cI(a,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},af.removeEvent=function(a,c,b){a.removeEventListener&&a.removeEventListener(c,b)},af.Event=function(b,a){if(!(this instanceof af.Event)){return new af.Event(b,a)}b&&b.type?(this.originalEvent=b,this.type=b.type,this.isDefaultPrevented=b.defaultPrevented||void 0===b.defaultPrevented&&!1===b.returnValue?au:ek,this.target=b.target&&3===b.target.nodeType?b.target.parentNode:b.target,this.currentTarget=b.currentTarget,this.relatedTarget=b.relatedTarget):this.type=b,a&&af.extend(this,a),this.timeStamp=b&&b.timeStamp||Date.now(),this[af.expando]=!0},af.Event.prototype={constructor:af.Event,isDefaultPrevented:ek,isPropagationStopped:ek,isImmediatePropagationStopped:ek,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=au,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=au,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=au,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},af.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(b){var a=b.button;return null==b.which&&dM.test(b.type)?null!=b.charCode?b.charCode:b.keyCode:!b.which&&void 0!==a&&bc.test(b.type)?1&a?1:2&a?3:4&a?2:0:b.which}},af.event.addProp),af.each({focus:"focusin",blur:"focusout"},function(b,a){af.event.special[b]={setup:function(){return bC(this,b,ak),!1},trigger:function(){return bC(this,b),!0},delegateType:a}}),af.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(b,a){af.event.special[b]={delegateType:a,bindType:a,handle:function(e){var c,f=e.relatedTarget,d=e.handleObj;return f&&(f===this||af.contains(this,f))||(e.type=d.origType,c=d.handler.apply(this,arguments),e.type=a),c}}}),af.fn.extend({on:function(c,a,d,b){return aZ(this,c,a,d,b)},one:function(c,a,d,b){return aZ(this,c,a,d,b,1)},off:function(e,c,a){var d,b;if(e&&e.preventDefault&&e.handleObj){return d=e.handleObj,af(e.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this}if("object"==typeof e){for(b in e){this.off(b,c,e[b])}return this}return !1!==c&&"function"!=typeof c||(a=c,c=void 0),!1===a&&(a=ek),this.each(function(){af.event.remove(this,e,a,c)})}});var aL=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ed=/<script|<style|<link/i,d8=/checked\s*(?:[^=]|=\s*.checked.)/i,cB=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function bj(b,a){return cI(b,"table")&&cI(11!==a.nodeType?a:a.firstChild,"tr")&&af(b).children("tbody")[0]||b}function cC(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ax(a){return"true/"===(a.type||"").slice(0,5)?a.type=a.type.slice(5):a.removeAttribute("type"),a}function bW(h,a){var e,c,g,d,i,b,j,f;if(1===a.nodeType){if(bJ.hasData(h)&&(d=bJ.access(h),i=bJ.set(a,d),f=d.events)){for(g in delete i.handle,i.events={},f){for(e=0,c=f[g].length;e<c;e++){af.event.add(a,g,f[g][e])}}}aC.hasData(h)&&(b=aC.access(h),j=af.extend({},b),aC.set(a,j))}}function b9(k,f,o,j){f=ar.apply([],f);var e,a,m,b,n,l,h=0,d=k.length,i=d-1,g=f[0],c=dL(g);if(c||1<d&&"string"==typeof g&&!d7.checkClone&&d8.test(g)){return k.each(function(p){var q=k.eq(p);c&&(f[0]=g.call(this,p,q.html())),b9(q,f,o,j)})}if(d&&(a=(e=aG(f,k[0].ownerDocument,!1,k,j)).firstChild,1===e.childNodes.length&&(e=a),a||j)){for(b=(m=af.map(b7(e,"script"),cC)).length;h<d;h++){n=e,h!==i&&(n=af.clone(n,!0,!0),b&&af.merge(m,b7(n,"script"))),o.call(k[h],n,h)}if(b){for(l=m[m.length-1].ownerDocument,af.map(m,ax),h=0;h<b;h++){n=m[h],bh.test(n.type||"")&&!bJ.access(n,"globalEval")&&af.contains(l,n)&&(n.src&&"module"!==(n.type||"").toLowerCase()?af._evalUrl&&!n.noModule&&af._evalUrl(n.src,{nonce:n.nonce||n.getAttribute("nonce")}):aa(n.textContent.replace(cB,""),n,l))}}}return k}function dR(f,d,b){for(var e,c=d?af.filter(d,f):f,a=0;null!=(e=c[a]);a++){b||1!==e.nodeType||af.cleanData(b7(e)),e.parentNode&&(b&&dS(e)&&aM(b7(e,"script")),e.parentNode.removeChild(e))}return f}af.extend({htmlPrefilter:function(a){return a.replace(aL,"<$1></$2>")},clone:function(l,d,h){var f,j,g,b,e,c,i,a=l.cloneNode(!0),k=dS(l);if(!(d7.noCloneChecked||1!==l.nodeType&&11!==l.nodeType||af.isXMLDoc(l))){for(b=b7(a),f=0,j=(g=b7(l)).length;f<j;f++){e=g[f],c=b[f],void 0,"input"===(i=c.nodeName.toLowerCase())&&bO.test(e.type)?c.checked=e.checked:"input"!==i&&"textarea"!==i||(c.defaultValue=e.defaultValue)}}if(d){if(h){for(g=g||b7(l),b=b||b7(a),f=0,j=g.length;f<j;f++){bW(g[f],b[f])}}else{bW(l,a)}}return 0<(b=b7(a,"script")).length&&aM(b,!k&&b7(l,"script")),a},cleanData:function(f){for(var d,b,e,c=af.event.special,a=0;void 0!==(b=f[a]);a++){if(el(b)){if(d=b[bJ.expando]){if(d.events){for(e in d.events){c[e]?af.event.remove(b,e):af.removeEvent(b,e,d.handle)}}b[bJ.expando]=void 0}b[aC.expando]&&(b[aC.expando]=void 0)}}}}),af.fn.extend({detach:function(a){return dR(this,a,!0)},remove:function(a){return dR(this,a)},text:function(a){return cL(this,function(b){return void 0===b?af.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=b)})},null,a,arguments.length)},append:function(){return b9(this,arguments,function(a){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||bj(this,a).appendChild(a)})},prepend:function(){return b9(this,arguments,function(b){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var a=bj(this,b);a.insertBefore(b,a.firstChild)}})},before:function(){return b9(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return b9(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var b,a=0;null!=(b=this[a]);a++){1===b.nodeType&&(af.cleanData(b7(b,!1)),b.textContent="")}return this},clone:function(b,a){return b=null!=b&&b,a=null==a?b:a,this.map(function(){return af.clone(this,b,a)})},html:function(a){return cL(this,function(b){var d=this[0]||{},c=0,e=this.length;if(void 0===b&&1===d.nodeType){return d.innerHTML}if("string"==typeof b&&!ed.test(b)&&!bY[(dI.exec(b)||["",""])[1].toLowerCase()]){b=af.htmlPrefilter(b);try{for(;c<e;c++){1===(d=this[c]||{}).nodeType&&(af.cleanData(b7(d,!1)),d.innerHTML=b)}d=0}catch(b){}}d&&this.empty().append(b)},null,a,arguments.length)},replaceWith:function(){var a=[];return b9(this,arguments,function(c){var b=this.parentNode;af.inArray(this,a)<0&&(af.cleanData(b7(this)),b&&b.replaceChild(c,this))},a)}}),af.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){af.fn[a]=function(e){for(var c,g=[],d=af(e),h=d.length-1,f=0;f<=h;f++){c=f===h?this:this.clone(!0),af(d[f])[b](c),dN.apply(g,c.get())}return this.pushStack(g)}});var ah=new RegExp("^("+bE+")(?!px)[a-z%]+$","i"),aq=function(b){var a=b.ownerDocument.defaultView;return a&&a.opener||(a=en),a.getComputedStyle(b)},bT=new RegExp(aw.join("|"),"i");function ea(c,h,e){var b,g,d,f,a=c.style;return(e=e||aq(c))&&(""!==(f=e.getPropertyValue(h)||e[h])||dS(c)||(f=af.style(c,h)),!d7.pixelBoxStyles()&&ah.test(f)&&bT.test(h)&&(b=a.width,g=a.minWidth,d=a.maxWidth,a.minWidth=a.maxWidth=a.width=f,f=e.width,a.width=b,a.minWidth=g,a.maxWidth=d)),void 0!==f?f+"":f}function d9(b,a){return{get:function(){if(!b()){return(this.get=a).apply(this,arguments)}delete this.get}}}!function(){function g(){if(i){b.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",i.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",bK.appendChild(b).appendChild(i);var j=en.getComputedStyle(i);e="1%"!==j.top,h=12===a(j.marginLeft),i.style.right="60%",d=36===a(j.right),c=36===a(j.width),i.style.position="absolute",f=12===a(i.offsetWidth/3),bK.removeChild(b),i=null}}function a(j){return Math.round(parseFloat(j))}var e,c,f,d,h,b=dJ.createElement("div"),i=dJ.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",d7.clearCloneStyle="content-box"===i.style.backgroundClip,af.extend(d7,{boxSizingReliable:function(){return g(),c},pixelBoxStyles:function(){return g(),d},pixelPosition:function(){return g(),e},reliableMarginLeft:function(){return g(),h},scrollboxSize:function(){return g(),f}}))}();var aO=["Webkit","Moz","ms"],d2=dJ.createElement("div").style,cA={};function ei(b){var a=af.cssProps[b]||cA[b];return a||(b in d2?b:cA[b]=function(d){var c=d[0].toUpperCase()+d.slice(1),e=aO.length;while(e--){if((d=aO[e]+c) in d2){return d}}}(b)||b)}var aB=/^(none|table(?!-c[ea]).+)/,bG=/^--/,b8={position:"absolute",visibility:"hidden",display:"block"},d1={letterSpacing:"0",fontWeight:"400"};function bM(c,a,d){var b=dO.exec(a);return b?Math.max(0,b[2]-(d||0))+(b[3]||"px"):a}function az(g,a,e,c,f,d){var h="width"===a?1:0,b=0,i=0;if(e===(c?"border":"content")){return 0}for(;h<4;h+=2){"margin"===e&&(i+=af.css(g,e+aw[h],!0,f)),c?("content"===e&&(i-=af.css(g,"padding"+aw[h],!0,f)),"margin"!==e&&(i-=af.css(g,"border"+aw[h]+"Width",!0,f))):(i+=af.css(g,"padding"+aw[h],!0,f),"padding"!==e?i+=af.css(g,"border"+aw[h]+"Width",!0,f):b+=af.css(g,"border"+aw[h]+"Width",!0,f))}return !c&&0<=d&&(i+=Math.max(0,Math.ceil(g["offset"+a[0].toUpperCase()+a.slice(1)]-d-i-b-0.5))||0),i}function aX(c,h,e){var b=aq(c),g=(!d7.boxSizingReliable()||e)&&"border-box"===af.css(c,"boxSizing",!1,b),d=g,f=ea(c,h,b),a="offset"+h[0].toUpperCase()+h.slice(1);if(ah.test(f)){if(!e){return f}f="auto"}return(!d7.boxSizingReliable()&&g||"auto"===f||!parseFloat(f)&&"inline"===af.css(c,"display",!1,b))&&c.getClientRects().length&&(g="border-box"===af.css(c,"boxSizing",!1,b),(d=a in c)&&(f=c[a])),(f=parseFloat(f)||0)+az(c,h,e||(g?"border":"content"),d,b,f)+"px"}function bg(e,c,a,d,b){return new bg.prototype.init(e,c,a,d,b)}af.extend({cssHooks:{opacity:{get:function(a,c){if(c){var b=ea(a,"opacity");return""===b?"1":b}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(h,a,e,c){if(h&&3!==h.nodeType&&8!==h.nodeType&&h.style){var g,d,i,b=bZ(a),j=bG.test(a),f=h.style;if(j||(a=ei(b)),i=af.cssHooks[a]||af.cssHooks[b],void 0===e){return i&&"get" in i&&void 0!==(g=i.get(h,!1,c))?g:f[a]}"string"===(d=typeof e)&&(g=dO.exec(e))&&g[1]&&(e=dH(h,a,g),d="number"),null!=e&&e==e&&("number"!==d||j||(e+=g&&g[3]||(af.cssNumber[b]?"":"px")),d7.clearCloneStyle||""!==e||0!==a.indexOf("background")||(f[a]="inherit"),i&&"set" in i&&void 0===(e=i.set(h,e,c))||(j?f.setProperty(a,e):f[a]=e))}},css:function(c,h,e,b){var g,d,f,a=bZ(h);return bG.test(h)||(h=ei(a)),(f=af.cssHooks[h]||af.cssHooks[a])&&"get" in f&&(g=f.get(c,!0,e)),void 0===g&&(g=ea(c,h,b)),"normal"===g&&h in d1&&(g=d1[h]),""===e||e?(d=parseFloat(g),!0===e||isFinite(d)?d||0:g):g}}),af.each(["height","width"],function(b,a){af.cssHooks[a]={get:function(d,c,e){if(c){return !aB.test(af.css(d,"display"))||d.getClientRects().length&&d.getBoundingClientRect().width?aX(d,a,e):ay(d,b8,function(){return aX(d,a,e)})}},set:function(d,i,f){var c,h=aq(d),e=!d7.scrollboxSize()&&"absolute"===h.position,g=(e||f)&&"border-box"===af.css(d,"boxSizing",!1,h),j=f?az(d,a,f,g,h):0;return g&&e&&(j-=Math.ceil(d["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(h[a])-az(d,a,"border",!1,h)-0.5)),j&&(c=dO.exec(i))&&"px"!==(c[3]||"px")&&(d.style[a]=i,i=af.css(d,a)),bM(0,i,j)}}}),af.cssHooks.marginLeft=d9(d7.reliableMarginLeft,function(b,a){if(a){return(parseFloat(ea(b,"marginLeft"))||b.getBoundingClientRect().left-ay(b,{marginLeft:0},function(){return b.getBoundingClientRect().left}))+"px"}}),af.each({margin:"",padding:"",border:"Width"},function(a,b){af.cssHooks[a+b]={expand:function(e){for(var c=0,f={},d="string"==typeof e?e.split(" "):[e];c<4;c++){f[a+aw[c]+b]=d[c]||d[c-2]||d[0]}return f}},"margin"!==a&&(af.cssHooks[a+b].set=bM)}),af.fn.extend({css:function(b,a){return cL(this,function(e,c,g){var d,i,f={},h=0;if(Array.isArray(c)){for(d=aq(e),i=c.length;h<i;h++){f[c[h]]=af.css(e,c[h],!1,d)}return f}return void 0!==g?af.style(e,c,g):af.css(e,c)},b,a,1<arguments.length)}}),((af.Tween=bg).prototype={constructor:bg,init:function(f,d,b,e,c,a){this.elem=f,this.prop=b,this.easing=c||af.easing._default,this.options=d,this.start=this.now=this.cur(),this.end=e,this.unit=a||(af.cssNumber[b]?"":"px")},cur:function(){var a=bg.propHooks[this.prop];return a&&a.get?a.get(this):bg.propHooks._default.get(this)},run:function(a){var c,b=bg.propHooks[this.prop];return this.options.duration?this.pos=c=af.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=c=a,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),b&&b.set?b.set(this):bg.propHooks._default.set(this),this}}).init.prototype=bg.prototype,(bg.propHooks={_default:{get:function(b){var a;return 1!==b.elem.nodeType||null!=b.elem[b.prop]&&null==b.elem.style[b.prop]?b.elem[b.prop]:(a=af.css(b.elem,b.prop,""))&&"auto"!==a?a:0},set:function(a){af.fx.step[a.prop]?af.fx.step[a.prop](a):1!==a.elem.nodeType||!af.cssHooks[a.prop]&&null==a.elem.style[ei(a.prop)]?a.elem[a.prop]=a.now:af.style(a.elem,a.prop,a.now+a.unit)}}}).scrollTop=bg.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},af.easing={linear:function(a){return a},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2},_default:"swing"},af.fx=bg.prototype.init,af.fx.step={};var bX,cG,b4,dY,cE=/^(?:toggle|show|hide)$/,ba=/queueHooks$/;function ab(){cG&&(!1===dJ.hidden&&en.requestAnimationFrame?en.requestAnimationFrame(ab):en.setTimeout(ab,af.fx.interval),af.fx.tick())}function ee(){return en.setTimeout(function(){bX=void 0}),bX=Date.now()}function bI(e,c){var a,d=0,b={height:e};for(c=c?1:0;d<4;d+=2-c){b["margin"+(a=aw[d])]=b["padding"+a]=e}return c&&(b.opacity=b.width=e),b}function eu(b,g,d){for(var a,f=(aS.tweeners[g]||[]).concat(aS.tweeners["*"]),c=0,e=f.length;c<e;c++){if(a=f[c].call(d,g,b)){return a}}}function aS(e,i,b){var f,k,d=0,h=aS.prefilters.length,c=af.Deferred().always(function(){delete a.elem}),a=function(){if(k){return !1}for(var p=bX||ee(),o=Math.max(0,g.startTime+g.duration-p),l=1-(o/g.duration||0),m=0,n=g.tweens.length;m<n;m++){g.tweens[m].run(l)}return c.notifyWith(e,[g,l,o]),l<1&&n?o:(n||c.notifyWith(e,[g,1,0]),c.resolveWith(e,[g]),!1)},g=c.promise({elem:e,props:af.extend({},i),opts:af.extend(!0,{specialEasing:{},easing:af.easing._default},b),originalProperties:i,originalOptions:b,startTime:bX||ee(),duration:b.duration,tweens:[],createTween:function(m,l){var n=af.Tween(e,g.opts,m,l,g.opts.specialEasing[m]||g.opts.easing);return g.tweens.push(n),n},stop:function(m){var l=0,n=m?g.tweens.length:0;if(k){return this}for(k=!0;l<n;l++){g.tweens[l].run(1)}return m?(c.notifyWith(e,[g,1,0]),c.resolveWith(e,[g,m])):c.rejectWith(e,[g,m]),this}}),j=g.props;for(!function(l,q){var o,r,m,n,p;for(o in l){if(m=q[r=bZ(o)],n=l[o],Array.isArray(n)&&(m=n[1],n=l[o]=n[0]),o!==r&&(l[r]=n,delete l[o]),(p=af.cssHooks[r])&&"expand" in p){for(o in n=p.expand(n),delete l[r],n){o in l||(l[o]=n[o],q[o]=m)}}else{q[r]=m}}}(j,g.opts.specialEasing);d<h;d++){if(f=aS.prefilters[d].call(g,e,j,g.opts)){return dL(f.stop)&&(af._queueHooks(g.elem,g.opts.queue).stop=f.stop.bind(f)),f}}return af.map(j,eu,g),dL(g.opts.start)&&g.opts.start.call(e,g),g.progress(g.opts.progress).done(g.opts.done,g.opts.complete).fail(g.opts.fail).always(g.opts.always),af.fx.timer(af.extend(a,{elem:e,anim:g,queue:g.opts.queue})),g}af.Animation=af.extend(aS,{tweeners:{"*":[function(a,c){var b=this.createTween(a,c);return dH(b.elem,a,dO.exec(c),b),b}]},tweener:function(e,c){dL(e)?(c=e,e=["*"]):e=e.match(am);for(var a,d=0,b=e.length;d<b;d++){a=e[d],aS.tweeners[a]=aS.tweeners[a]||[],aS.tweeners[a].unshift(c)}},prefilters:[function(o,e,n){var i,g,m,b,f,d,q,a,k="width" in e||"height" in e,l=this,p={},h=o.style,j=o.nodeType&&an(o),c=bJ.get(o,"fxshow");for(i in n.queue||(null==(b=af._queueHooks(o,"fx")).unqueued&&(b.unqueued=0,f=b.empty.fire,b.empty.fire=function(){b.unqueued||f()}),b.unqueued++,l.always(function(){l.always(function(){b.unqueued--,af.queue(o,"fx").length||b.empty.fire()})})),e){if(g=e[i],cE.test(g)){if(delete e[i],m=m||"toggle"===g,g===(j?"hide":"show")){if("show"!==g||!c||void 0===c[i]){continue}j=!0}p[i]=c&&c[i]||af.style(o,i)}}if((d=!af.isEmptyObject(e))||!af.isEmptyObject(p)){for(i in k&&1===o.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(q=c&&c.display)&&(q=bJ.get(o,"display")),"none"===(a=af.css(o,"display"))&&(q?a=q:(bA([o],!0),q=o.style.display||q,a=af.css(o,"display"),bA([o]))),("inline"===a||"inline-block"===a&&null!=q)&&"none"===af.css(o,"float")&&(d||(l.done(function(){h.display=q}),null==q&&(a=h.display,q="none"===a?"":a)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",l.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),d=!1,p){d||(c?"hidden" in c&&(j=c.hidden):c=bJ.access(o,"fxshow",{display:q}),m&&(c.hidden=!j),j&&bA([o],!0),l.done(function(){for(i in j||bA([o]),bJ.remove(o,"fxshow"),p){af.style(o,i,p[i])}})),d=eu(j?c[i]:0,i,l),i in c||(c[i]=d.start,j&&(d.end=d.start,d.start=0))}}}],prefilter:function(b,a){a?aS.prefilters.unshift(b):aS.prefilters.push(b)}}),af.speed=function(c,a,d){var b=c&&"object"==typeof c?af.extend({},c):{complete:d||!d&&a||dL(c)&&c,duration:c,easing:d&&a||a&&!dL(a)&&a};return af.fx.off?b.duration=0:"number"!=typeof b.duration&&(b.duration in af.fx.speeds?b.duration=af.fx.speeds[b.duration]:b.duration=af.fx.speeds._default),null!=b.queue&&!0!==b.queue||(b.queue="fx"),b.old=b.complete,b.complete=function(){dL(b.old)&&b.old.call(this),b.queue&&af.dequeue(this,b.queue)},b},af.fn.extend({fadeTo:function(c,a,d,b){return this.filter(an).css("opacity",0).show().end().animate({opacity:a},c,d,b)},animate:function(g,b,d,a){var f=af.isEmptyObject(g),c=af.speed(b,d,a),e=function(){var h=aS(this,af.extend({},g),c);(f||bJ.get(this,"finish"))&&h.stop(!0)};return e.finish=e,f||!1===c.queue?this.each(e):this.queue(c.queue,e)},stop:function(c,d,a){var b=function(e){var f=e.stop;delete e.stop,f(a)};return"string"!=typeof c&&(a=d,d=c,c=void 0),d&&!1!==c&&this.queue(c||"fx",[]),this.each(function(){var f=!0,h=null!=c&&c+"queueHooks",g=af.timers,e=bJ.get(this);if(h){e[h]&&e[h].stop&&b(e[h])}else{for(h in e){e[h]&&e[h].stop&&ba.test(h)&&b(e[h])}}for(h=g.length;h--;){g[h].elem!==this||null!=c&&g[h].queue!==c||(g[h].anim.stop(a),f=!1,g.splice(h,1))}!f&&a||af.dequeue(this,c)})},finish:function(a){return !1!==a&&(a=a||"fx"),this.each(function(){var c,g=bJ.get(this),e=g[a+"queue"],b=g[a+"queueHooks"],f=af.timers,d=e?e.length:0;for(g.finish=!0,af.queue(this,a,[]),b&&b.stop&&b.stop.call(this,!0),c=f.length;c--;){f[c].elem===this&&f[c].queue===a&&(f[c].anim.stop(!0),f.splice(c,1))}for(c=0;c<d;c++){e[c]&&e[c].finish&&e[c].finish.call(this)}delete g.finish})}}),af.each(["toggle","show","hide"],function(b,a){var c=af.fn[a];af.fn[a]=function(e,d,f){return null==e||"boolean"==typeof e?c.apply(this,arguments):this.animate(bI(a,!0),e,d,f)}}),af.each({slideDown:bI("show"),slideUp:bI("hide"),slideToggle:bI("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(b,a){af.fn[b]=function(d,c,e){return this.animate(a,d,c,e)}}),af.timers=[],af.fx.tick=function(){var a,c=0,b=af.timers;for(bX=Date.now();c<b.length;c++){(a=b[c])()||b[c]!==a||b.splice(c--,1)}b.length||af.fx.stop(),bX=void 0},af.fx.timer=function(a){af.timers.push(a),af.fx.start()},af.fx.interval=13,af.fx.start=function(){cG||(cG=!0,ab())},af.fx.stop=function(){cG=null},af.fx.speeds={slow:600,fast:200,_default:400},af.fn.delay=function(a,b){return a=af.fx&&af.fx.speeds[a]||a,b=b||"fx",this.queue(b,function(d,c){var e=en.setTimeout(d,a);c.stop=function(){en.clearTimeout(e)}})},b4=dJ.createElement("input"),dY=dJ.createElement("select").appendChild(dJ.createElement("option")),b4.type="checkbox",d7.checkOn=""!==b4.value,d7.optSelected=dY.selected,(b4=dJ.createElement("input")).value="t",b4.type="radio",d7.radioValue="t"===b4.value;var aP,bQ=af.expr.attrHandle;af.fn.extend({attr:function(b,a){return cL(this,af.attr,b,a,1<arguments.length)},removeAttr:function(a){return this.each(function(){af.removeAttr(this,a)})}}),af.extend({attr:function(f,d,b){var e,c,a=f.nodeType;if(3!==a&&8!==a&&2!==a){return"undefined"==typeof f.getAttribute?af.prop(f,d,b):(1===a&&af.isXMLDoc(f)||(c=af.attrHooks[d.toLowerCase()]||(af.expr.match.bool.test(d)?aP:void 0)),void 0!==b?null===b?void af.removeAttr(f,d):c&&"set" in c&&void 0!==(e=c.set(f,b,d))?e:(f.setAttribute(d,b+""),b):c&&"get" in c&&null!==(e=c.get(f,d))?e:null==(e=af.find.attr(f,d))?void 0:e)}},attrHooks:{type:{set:function(a,c){if(!d7.radioValue&&"radio"===c&&cI(a,"input")){var b=a.value;return a.setAttribute("type",c),b&&(a.value=b),c}}}},removeAttr:function(e,c){var a,d=0,b=c&&c.match(am);if(b&&1===e.nodeType){while(a=b[d++]){e.removeAttribute(a)}}}}),aP={set:function(a,c,b){return !1===c?af.removeAttr(a,b):a.setAttribute(b,b),b}},af.each(af.expr.match.bool.source.match(/\w+/g),function(c,b){var a=bQ[b]||af.find.attr;bQ[b]=function(d,h,f){var i,g,e=h.toLowerCase();return f||(g=bQ[e],bQ[e]=i,i=null!=a(d,h,f)?e:null,bQ[e]=g),i}});var ai=/^(?:input|select|textarea|button)$/i,cK=/^(?:a|area)$/i;function d6(a){return(a.match(am)||[]).join(" ")}function eb(a){return a.getAttribute&&a.getAttribute("class")||""}function bf(a){return Array.isArray(a)?a:"string"==typeof a&&a.match(am)||[]}af.fn.extend({prop:function(b,a){return cL(this,af.prop,b,a,1<arguments.length)},removeProp:function(a){return this.each(function(){delete this[af.propFix[a]||a]})}}),af.extend({prop:function(f,d,b){var e,c,a=f.nodeType;if(3!==a&&8!==a&&2!==a){return 1===a&&af.isXMLDoc(f)||(d=af.propFix[d]||d,c=af.propHooks[d]),void 0!==b?c&&"set" in c&&void 0!==(e=c.set(f,b,d))?e:f[d]=b:c&&"get" in c&&null!==(e=c.get(f,d))?e:f[d]}},propHooks:{tabIndex:{get:function(b){var a=af.find.attr(b,"tabindex");return a?parseInt(a,10):ai.test(b.nodeName)||cK.test(b.nodeName)&&b.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),d7.optSelected||(af.propHooks.selected={get:function(b){var a=b.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(b){var a=b.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),af.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){af.propFix[this.toLowerCase()]=this}),af.fn.extend({addClass:function(a){var g,e,c,f,d,h,b,i=0;if(dL(a)){return this.each(function(j){af(this).addClass(a.call(this,j,eb(this)))})}if((g=bf(a)).length){while(e=this[i++]){if(f=eb(e),c=1===e.nodeType&&" "+d6(f)+" "){h=0;while(d=g[h++]){c.indexOf(" "+d+" ")<0&&(c+=d+" ")}f!==(b=d6(c))&&e.setAttribute("class",b)}}}return this},removeClass:function(a){var g,e,c,f,d,h,b,i=0;if(dL(a)){return this.each(function(j){af(this).removeClass(a.call(this,j,eb(this)))})}if(!arguments.length){return this.attr("class","")}if((g=bf(a)).length){while(e=this[i++]){if(f=eb(e),c=1===e.nodeType&&" "+d6(f)+" "){h=0;while(d=g[h++]){while(-1<c.indexOf(" "+d+" ")){c=c.replace(" "+d+" "," ")}}f!==(b=d6(c))&&e.setAttribute("class",b)}}}return this},toggleClass:function(d,c){var a=typeof d,b="string"===a||Array.isArray(d);return"boolean"==typeof c&&b?c?this.addClass(d):this.removeClass(d):dL(d)?this.each(function(e){af(this).toggleClass(d.call(this,e,eb(this),c),c)}):this.each(function(){var f,h,g,e;if(b){h=0,g=af(this),e=bf(d);while(f=e[h++]){g.hasClass(f)?g.removeClass(f):g.addClass(f)}}else{void 0!==d&&"boolean"!==a||((f=eb(this))&&bJ.set(this,"__className__",f),this.setAttribute&&this.setAttribute("class",f||!1===d?"":bJ.get(this,"__className__")||""))}})},hasClass:function(c){var a,d,b=0;a=" "+c+" ";while(d=this[b++]){if(1===d.nodeType&&-1<(" "+d6(eb(d))+" ").indexOf(a)){return !0}}return !1}});var aU=/\r/g;af.fn.extend({val:function(a){var d,e,c,b=this[0];return arguments.length?(c=dL(a),this.each(function(g){var f;1===this.nodeType&&(null==(f=c?a.call(this,g,af(this).val()):a)?f="":"number"==typeof f?f+="":Array.isArray(f)&&(f=af.map(f,function(h){return null==h?"":h+""})),(d=af.valHooks[this.type]||af.valHooks[this.nodeName.toLowerCase()])&&"set" in d&&void 0!==d.set(this,f,"value")||(this.value=f))})):b?(d=af.valHooks[b.type]||af.valHooks[b.nodeName.toLowerCase()])&&"get" in d&&void 0!==(e=d.get(b,"value"))?e:"string"==typeof(e=b.value)?e.replace(aU,""):null==e?"":e:void 0}}),af.extend({valHooks:{option:{get:function(b){var a=af.find.attr(b,"value");return null!=a?a:d6(af.text(b))}},select:{get:function(g){var a,e,c,f=g.options,d=g.selectedIndex,h="select-one"===g.type,b=h?null:[],i=h?d+1:f.length;for(c=d<0?i:h?d:0;c<i;c++){if(((e=f[c]).selected||c===d)&&!e.disabled&&(!e.parentNode.disabled||!cI(e.parentNode,"optgroup"))){if(a=af(e).val(),h){return a}b.push(a)}}return b},set:function(b,g){var d,a,f=b.options,c=af.makeArray(g),e=f.length;while(e--){((a=f[e]).selected=-1<af.inArray(af.valHooks.option.get(a),c))&&(d=!0)}return d||(b.selectedIndex=-1),c}}}}),af.each(["radio","checkbox"],function(){af.valHooks[this]={set:function(b,a){if(Array.isArray(a)){return b.checked=-1<af.inArray(af(b).val(),a)}}},d7.checkOn||(af.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),d7.focusin="onfocusin" in en;var ej=/^(?:focusinfocus|focusoutblur)$/,aN=function(a){a.stopPropagation()};af.extend(af.event,{trigger:function(e,a,k,f){var o,j,m,b,n,l,h,d,i=[k||dJ],g=dK.call(e,"type")?e.type:e,c=dK.call(e,"namespace")?e.namespace.split("."):[];if(j=d=m=k=k||dJ,3!==k.nodeType&&8!==k.nodeType&&!ej.test(g+af.event.triggered)&&(-1<g.indexOf(".")&&(g=(c=g.split(".")).shift(),c.sort()),n=g.indexOf(":")<0&&"on"+g,(e=e[af.expando]?e:new af.Event(g,"object"==typeof e&&e)).isTrigger=f?2:3,e.namespace=c.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+c.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=k),a=null==a?[e]:af.makeArray(a,[e]),h=af.event.special[g]||{},f||!h.trigger||!1!==h.trigger.apply(k,a))){if(!f&&!h.noBubble&&!aQ(k)){for(b=h.delegateType||g,ej.test(b+g)||(j=j.parentNode);j;j=j.parentNode){i.push(j),m=j}m===(k.ownerDocument||dJ)&&i.push(m.defaultView||m.parentWindow||en)}o=0;while((j=i[o++])&&!e.isPropagationStopped()){d=j,e.type=1<o?b:h.bindType||g,(l=(bJ.get(j,"events")||{})[e.type]&&bJ.get(j,"handle"))&&l.apply(j,a),(l=n&&j[n])&&l.apply&&el(j)&&(e.result=l.apply(j,a),!1===e.result&&e.preventDefault())}return e.type=g,f||e.isDefaultPrevented()||h._default&&!1!==h._default.apply(i.pop(),a)||!el(k)||n&&dL(k[g])&&!aQ(k)&&((m=k[n])&&(k[n]=null),af.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,aN),k[g](),e.isPropagationStopped()&&d.removeEventListener(g,aN),af.event.triggered=void 0,m&&(k[n]=m)),e.result}},simulate:function(c,a,d){var b=af.extend(new af.Event,d,{type:c,isSimulated:!0});af.event.trigger(b,null,a)}}),af.fn.extend({trigger:function(b,a){return this.each(function(){af.event.trigger(b,a,this)})},triggerHandler:function(a,c){var b=this[0];if(b){return af.event.trigger(a,c,b,!0)}}}),d7.focusin||af.each({focus:"focusin",blur:"focusout"},function(b,a){var c=function(d){af.event.simulate(a,d.target,af.event.fix(d))};af.event.special[a]={setup:function(){var e=this.ownerDocument||this,d=bJ.access(e,a);d||e.addEventListener(b,c,!0),bJ.access(e,a,(d||0)+1)},teardown:function(){var e=this.ownerDocument||this,d=bJ.access(e,a)-1;d?bJ.access(e,a,d):(e.removeEventListener(b,c,!0),bJ.remove(e,a))}}});var em=en.location,d3=Date.now(),d4=/\?/;af.parseXML=function(b){var a;if(!b||"string"!=typeof b){return null}try{a=(new en.DOMParser).parseFromString(b,"text/xml")}catch(b){a=void 0}return a&&!a.getElementsByTagName("parsererror").length||af.error("Invalid XML: "+b),a};var b6=/\[\]$/,ao=/\r?\n/g,aH=/^(?:submit|button|image|reset|file)$/i,cJ=/^(?:input|select|textarea|keygen)/i;function aF(a,e,d,c){var b;if(Array.isArray(e)){af.each(e,function(g,f){d||b6.test(a)?c(a,f):aF(a+"["+("object"==typeof f&&null!=f?g:"")+"]",f,d,c)})}else{if(d||"object"!==aW(e)){c(a,e)}else{for(b in e){aF(a+"["+b+"]",e[b],d,c)}}}}af.param=function(e,c){var a,d=[],b=function(g,f){var h=dL(f)?f():f;d[d.length]=encodeURIComponent(g)+"="+encodeURIComponent(null==h?"":h)};if(null==e){return""}if(Array.isArray(e)||e.jquery&&!af.isPlainObject(e)){af.each(e,function(){b(this.name,this.value)})}else{for(a in e){aF(a,e[a],c,b)}}return d.join("&")},af.fn.extend({serialize:function(){return af.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=af.prop(this,"elements");return a?af.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!af(this).is(":disabled")&&cJ.test(this.nodeName)&&!aH.test(a)&&(this.checked||!bO.test(a))}).map(function(a,c){var b=af(this).val();return null==b?null:Array.isArray(b)?af.map(b,function(d){return{name:c.name,value:d.replace(ao,"\r\n")}}):{name:c.name,value:b.replace(ao,"\r\n")}}).get()}});var aD=/%20/g,ag=/#.*$/,aT=/([?&])_=[^&]*/,dQ=/^(.*?):[ \t]*([^\r\n]*)$/gm,eh=/^(?:GET|HEAD)$/,bU=/^\/\//,ap={},dT={},b0="*/".concat("*"),dZ=dJ.createElement("a");function bL(a){return function(c,f){"string"!=typeof c&&(f=c,c="*");var d,b=0,e=c.toLowerCase().match(am)||[];if(dL(f)){while(d=e[b++]){"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(f)):(a[d]=a[d]||[]).push(f)}}}}function b3(b,a,d,f){var c={},g=b===dT;function e(h){var i;return c[h]=!0,af.each(b[h]||[],function(k,j){var l=j(a,d,f);return"string"!=typeof l||g||c[l]?g?!(i=l):void 0:(a.dataTypes.unshift(l),e(l),!1)}),i}return e(a.dataTypes[0])||!c["*"]&&e("*")}function dW(e,c){var a,d,b=af.ajaxSettings.flatOptions||{};for(a in c){void 0!==c[a]&&((b[a]?e:d||(d={}))[a]=c[a])}return d&&af.extend(!0,e,d),e}dZ.href=em.href,af.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:em.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(em.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":b0,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":af.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(b,a){return a?dW(dW(b,af.ajaxSettings),a):dW(af.ajaxSettings,b)},ajaxPrefilter:bL(ap),ajaxTransport:bL(dT),ajax:function(s,f){"object"==typeof s&&(f=s,s=void 0),f=f||{};var u,r,i,k,t,h,p,q,n,j,c=af.ajaxSetup({},f),b=c.context||c,l=c.context&&(b.nodeType||b.jquery)?af(b):af.event,d=af.Deferred(),v=af.Callbacks("once memory"),o=c.statusCode||{},w={},g={},e="canceled",a={readyState:0,getResponseHeader:function(x){var y;if(p){if(!k){k={};while(y=dQ.exec(i)){k[y[1].toLowerCase()+" "]=(k[y[1].toLowerCase()+" "]||[]).concat(y[2])}}y=k[x.toLowerCase()+" "]}return null==y?null:y.join(", ")},getAllResponseHeaders:function(){return p?i:null},setRequestHeader:function(x,y){return null==p&&(x=g[x.toLowerCase()]=g[x.toLowerCase()]||x,w[x]=y),this},overrideMimeType:function(x){return null==p&&(c.mimeType=x),this},statusCode:function(x){var y;if(x){if(p){a.always(x[a.status])}else{for(y in x){o[y]=[o[y],x[y]]}}}return this},abort:function(x){var y=x||e;return u&&u.abort(y),m(0,y),this}};if(d.promise(a),c.url=((s||c.url||em.href)+"").replace(bU,em.protocol+"//"),c.type=f.method||f.type||c.method||c.type,c.dataTypes=(c.dataType||"*").toLowerCase().match(am)||[""],null==c.crossDomain){h=dJ.createElement("a");try{h.href=c.url,h.href=h.href,c.crossDomain=dZ.protocol+"//"+dZ.host!=h.protocol+"//"+h.host}catch(s){c.crossDomain=!0}}if(c.data&&c.processData&&"string"!=typeof c.data&&(c.data=af.param(c.data,c.traditional)),b3(ap,c,f,a),p){return a}for(n in (q=af.event&&c.global)&&0==af.active++&&af.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!eh.test(c.type),r=c.url.replace(ag,""),c.hasContent?c.data&&c.processData&&0===(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&(c.data=c.data.replace(aD,"+")):(j=c.url.slice(r.length),c.data&&(c.processData||"string"==typeof c.data)&&(r+=(d4.test(r)?"&":"?")+c.data,delete c.data),!1===c.cache&&(r=r.replace(aT,"$1"),j=(d4.test(r)?"&":"?")+"_="+d3+++j),c.url=r+j),c.ifModified&&(af.lastModified[r]&&a.setRequestHeader("If-Modified-Since",af.lastModified[r]),af.etag[r]&&a.setRequestHeader("If-None-Match",af.etag[r])),(c.data&&c.hasContent&&!1!==c.contentType||f.contentType)&&a.setRequestHeader("Content-Type",c.contentType),a.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+b0+"; q=0.01":""):c.accepts["*"]),c.headers){a.setRequestHeader(n,c.headers[n])}if(c.beforeSend&&(!1===c.beforeSend.call(b,a,c)||p)){return a.abort()}if(e="abort",v.add(c.complete),a.done(c.success),a.fail(c.error),u=b3(dT,c,f,a)){if(a.readyState=1,q&&l.trigger("ajaxSend",[a,c]),p){return a}c.async&&0<c.timeout&&(t=en.setTimeout(function(){a.abort("timeout")},c.timeout));try{p=!1,u.send(w,m)}catch(s){if(p){throw s}m(-1,s)}}else{m(-1,"No Transport")}function m(x,A,E,C){var G,D,y,B,z,F=A;p||(p=!0,t&&en.clearTimeout(t),u=void 0,i=C||"",a.readyState=0<x?4:0,G=200<=x&&x<300||304===x,E&&(B=function(L,O,I){var K,J,H,M,P=L.contents,N=L.dataTypes;while("*"===N[0]){N.shift(),void 0===K&&(K=L.mimeType||O.getResponseHeader("Content-Type"))}if(K){for(J in P){if(P[J]&&P[J].test(K)){N.unshift(J);break}}}if(N[0] in I){H=N[0]}else{for(J in I){if(!N[0]||L.converters[J+" "+N[0]]){H=J;break}M||(M=J)}H=H||M}if(H){return H!==N[0]&&N.unshift(H),I[H]}}(c,a,E)),B=function(O,H,K,I){var M,J,Q,N,R,L={},P=O.dataTypes.slice();if(P[1]){for(Q in O.converters){L[Q.toLowerCase()]=O.converters[Q]}}J=P.shift();while(J){if(O.responseFields[J]&&(K[O.responseFields[J]]=H),!R&&I&&O.dataFilter&&(H=O.dataFilter(H,O.dataType)),R=J,J=P.shift()){if("*"===J){J=R}else{if("*"!==R&&R!==J){if(!(Q=L[R+" "+J]||L["* "+J])){for(M in L){if((N=M.split(" "))[1]===J&&(Q=L[R+" "+N[0]]||L["* "+N[0]])){!0===Q?Q=L[M]:!0!==L[M]&&(J=N[0],P.unshift(N[1]));break}}}if(!0!==Q){if(Q&&O["throws"]){H=Q(H)}else{try{H=Q(H)}catch(O){return{state:"parsererror",error:Q?O:"No conversion from "+R+" to "+J}}}}}}}}return{state:"success",data:H}}(c,B,a,G),G?(c.ifModified&&((z=a.getResponseHeader("Last-Modified"))&&(af.lastModified[r]=z),(z=a.getResponseHeader("etag"))&&(af.etag[r]=z)),204===x||"HEAD"===c.type?F="nocontent":304===x?F="notmodified":(F=B.state,D=B.data,G=!(y=B.error))):(y=F,!x&&F||(F="error",x<0&&(x=0))),a.status=x,a.statusText=(A||F)+"",G?d.resolveWith(b,[D,F,a]):d.rejectWith(b,[a,F,y]),a.statusCode(o),o=void 0,q&&l.trigger(G?"ajaxSuccess":"ajaxError",[a,c,G?D:y]),v.fireWith(b,[a,F]),q&&(l.trigger("ajaxComplete",[a,c]),--af.active||af.event.trigger("ajaxStop")))}return a},getJSON:function(a,c,b){return af.get(a,c,b,"json")},getScript:function(b,a){return af.get(b,void 0,a,"script")}}),af.each(["get","post"],function(b,a){af[a]=function(e,c,f,d){return dL(c)&&(d=d||f,f=c,c=void 0),af.ajax(af.extend({url:e,type:a,dataType:d,data:c,success:f},af.isPlainObject(e)&&e))}}),af._evalUrl=function(b,a){return af.ajax({url:b,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(c){af.globalEval(c,a)}})},af.fn.extend({wrapAll:function(b){var a;return this[0]&&(dL(b)&&(b=b.call(this[0])),a=af(b,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){var c=this;while(c.firstElementChild){c=c.firstElementChild}return c}).append(this)),this},wrapInner:function(a){return dL(a)?this.each(function(b){af(this).wrapInner(a.call(this,b))}):this.each(function(){var c=af(this),b=c.contents();b.length?b.wrapAll(a):c.append(a)})},wrap:function(a){var b=dL(a);return this.each(function(c){af(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){af(this).replaceWith(this.childNodes)}),this}}),af.expr.pseudos.hidden=function(a){return !af.expr.pseudos.visible(a)},af.expr.pseudos.visible=function(a){return !!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},af.ajaxSettings.xhr=function(){try{return new en.XMLHttpRequest}catch(a){}};var ep={0:200,1223:204},aj=af.ajaxSettings.xhr();d7.cors=!!aj&&"withCredentials" in aj,d7.ajax=aj=!!aj,af.ajaxTransport(function(b){var c,a;if(d7.cors||aj&&!b.crossDomain){return{send:function(e,g){var f,d=b.xhr();if(d.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields){for(f in b.xhrFields){d[f]=b.xhrFields[f]}}for(f in b.mimeType&&d.overrideMimeType&&d.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e){d.setRequestHeader(f,e[f])}c=function(h){return function(){c&&(c=a=d.onload=d.onerror=d.onabort=d.ontimeout=d.onreadystatechange=null,"abort"===h?d.abort():"error"===h?"number"!=typeof d.status?g(0,"error"):g(d.status,d.statusText):g(ep[d.status]||d.status,d.statusText,"text"!==(d.responseType||"text")||"string"!=typeof d.responseText?{binary:d.response}:{text:d.responseText},d.getAllResponseHeaders()))}},d.onload=c(),a=d.onerror=d.ontimeout=c("error"),void 0!==d.onabort?d.onabort=a:d.onreadystatechange=function(){4===d.readyState&&en.setTimeout(function(){c&&a()})},c=c("abort");try{d.send(b.hasContent&&b.data||null)}catch(e){if(c){throw e}}},abort:function(){c&&c()}}}}),af.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),af.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return af.globalEval(a),a}}}),af.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),af.ajaxTransport("script",function(b){var a,c;if(b.crossDomain||b.scriptAttrs){return{send:function(e,d){a=af("<script>").attr(b.scriptAttrs||{}).prop({charset:b.scriptCharset,src:b.url}).on("load error",c=function(f){a.remove(),c=null,f&&d("error"===f.type?404:200,f.type)}),dJ.head.appendChild(a[0])},abort:function(){c&&c()}}}});var aA,b5=[],bH=/(=)\?(?=&|$)|\?\?/;af.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=b5.pop()||af.expando+"_"+d3++;return this[a]=!0,a}}),af.ajaxPrefilter("json jsonp",function(b,g,d){var a,f,c,e=!1!==b.jsonp&&(bH.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bH.test(b.data)&&"data");if(e||"jsonp"===b.dataTypes[0]){return a=b.jsonpCallback=dL(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,e?b[e]=b[e].replace(bH,"$1"+a):!1!==b.jsonp&&(b.url+=(d4.test(b.url)?"&":"?")+b.jsonp+"="+a),b.converters["script json"]=function(){return c||af.error(a+" was not called"),c[0]},b.dataTypes[0]="json",f=en[a],en[a]=function(){c=arguments},d.always(function(){void 0===f?af(en).removeProp(a):en[a]=f,b[a]&&(b.jsonpCallback=g.jsonpCallback,b5.push(a)),c&&dL(f)&&f(c[0]),c=f=void 0}),"script"}}),d7.createHTMLDocument=((aA=dJ.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===aA.childNodes.length),af.parseHTML=function(f,d,b){return"string"!=typeof f?[]:("boolean"==typeof d&&(b=d,d=!1),d||(d7.createHTMLDocument?((e=(d=dJ.implementation.createHTMLDocument("")).createElement("base")).href=dJ.location.href,d.head.appendChild(e)):d=dJ),a=!b&&[],(c=ad.exec(f))?[d.createElement(c[1])]:(c=aG([f],d,a),a&&a.length&&af(a).remove(),af.merge([],c.childNodes)));var e,c,a},af.fn.load=function(c,h,e){var b,g,d,f=this,a=c.indexOf(" ");return -1<a&&(b=d6(c.slice(a)),c=c.slice(0,a)),dL(h)?(e=h,h=void 0):h&&"object"==typeof h&&(g="POST"),0<f.length&&af.ajax({url:c,type:g||"GET",dataType:"html",data:h}).done(function(i){d=arguments,f.html(b?af("<div>").append(af.parseHTML(i)).find(b):i)}).always(e&&function(i,j){f.each(function(){e.apply(this,d||[i.responseText,j,i])})}),this},af.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(b,a){af.fn[a]=function(c){return this.on(a,c)}}),af.expr.pseudos.animated=function(a){return af.grep(af.timers,function(b){return a===b.elem}).length},af.offset={setOffset:function(l,d,h){var f,j,g,b,e,c,i=af.css(l,"position"),a=af(l),k={};"static"===i&&(l.style.position="relative"),e=a.offset(),g=af.css(l,"top"),c=af.css(l,"left"),("absolute"===i||"fixed"===i)&&-1<(g+c).indexOf("auto")?(b=(f=a.position()).top,j=f.left):(b=parseFloat(g)||0,j=parseFloat(c)||0),dL(d)&&(d=d.call(l,h,af.extend({},e))),null!=d.top&&(k.top=d.top-e.top+b),null!=d.left&&(k.left=d.left-e.left+j),"using" in d?d.using.call(l,k):a.css(k)}},af.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(e){af.offset.setOffset(this,a,e)})}var c,d,b=this[0];return b?b.getClientRects().length?(c=b.getBoundingClientRect(),d=b.ownerDocument.defaultView,{top:c.top+d.pageYOffset,left:c.left+d.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,c,a,d=this[0],b={top:0,left:0};if("fixed"===af.css(d,"position")){c=d.getBoundingClientRect()}else{c=this.offset(),a=d.ownerDocument,e=d.offsetParent||a.documentElement;while(e&&(e===a.body||e===a.documentElement)&&"static"===af.css(e,"position")){e=e.parentNode}e&&e!==d&&1===e.nodeType&&((b=af(e).offset()).top+=af.css(e,"borderTopWidth",!0),b.left+=af.css(e,"borderLeftWidth",!0))}return{top:c.top-b.top-af.css(d,"marginTop",!0),left:c.left-b.left-af.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===af.css(a,"position")){a=a.offsetParent}return a||bK})}}),af.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var b="pageYOffset"===c;af.fn[a]=function(d){return cL(this,function(g,e,h){var f;if(aQ(g)?f=g:9===g.nodeType&&(f=g.defaultView),void 0===h){return f?f[c]:g[e]}f?f.scrollTo(b?f.pageXOffset:h,b?h:f.pageYOffset):g[e]=h},a,d,arguments.length)}}),af.each(["top","left"],function(a,b){af.cssHooks[b]=d9(d7.pixelPosition,function(d,c){if(c){return c=ea(d,b),ah.test(c)?af(d).position()[b]+"px":c}})}),af.each({Height:"height",Width:"width"},function(b,a){af.each({padding:"inner"+b,content:a,"":"outer"+b},function(d,c){af.fn[c]=function(g,f){var h=arguments.length&&(d||"boolean"!=typeof g),e=d||(!0===g||!0===f?"margin":"border");return cL(this,function(k,i,l){var j;return aQ(k)?0===c.indexOf("outer")?k["inner"+b]:k.document.documentElement["client"+b]:9===k.nodeType?(j=k.documentElement,Math.max(k.body["scroll"+b],j["scroll"+b],k.body["offset"+b],j["offset"+b],j["client"+b])):void 0===l?af.css(k,i,e):af.style(k,i,l,e)},a,h?g:void 0,h)}})}),af.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){af.fn[b]=function(d,c){return 0<arguments.length?this.on(b,null,d,c):this.trigger(b)}}),af.fn.extend({hover:function(b,a){return this.mouseenter(b).mouseleave(a||b)}}),af.fn.extend({bind:function(a,c,b){return this.on(a,null,c,b)},unbind:function(b,a){return this.off(b,null,a)},delegate:function(c,a,d,b){return this.on(a,c,d,b)},undelegate:function(a,c,b){return 1===arguments.length?this.off(a,"**"):this.off(c,a||"**",b)}}),af.proxy=function(e,c){var a,d,b;if("string"==typeof c&&(a=e[c],c=e,e=a),dL(e)){return d=dX.call(arguments,2),(b=function(){return e.apply(c||this,d.concat(dX.call(arguments)))}).guid=e.guid=e.guid||af.guid++,b}},af.holdReady=function(a){a?af.readyWait++:af.ready(!0)},af.isArray=Array.isArray,af.parseJSON=JSON.parse,af.nodeName=cI,af.isFunction=dL,af.isWindow=aQ,af.camelCase=bZ,af.type=aW,af.now=Date.now,af.isNumeric=function(b){var a=af.type(b);return("number"===a||"string"===a)&&!isNaN(b-parseFloat(b))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return af});var ac=en.jQuery,a9=en.$;return af.noConflict=function(a){return en.$===af&&(en.$=a9),a&&en.jQuery===af&&(en.jQuery=ac),af},aJ||(en.jQuery=en.$=af),af});
function humanized_time_span(t,p,r,n){r=r||{past:[{ceiling:60,text:"$seconds seconds ago"},{ceiling:3600,text:"$minutes minutes ago"},{ceiling:86400,text:"$hours hours ago"},{ceiling:2629744,text:"$days days ago"},{ceiling:31556926,text:"$months months ago"},{ceiling:null,text:"$years years ago"}],future:[{ceiling:60,text:"in $seconds seconds"},{ceiling:3600,text:"in $minutes minutes"},{ceiling:86400,text:"in $hours hours"},{ceiling:2629744,text:"in $days days"},{ceiling:31556926,text:"in $months months"},{ceiling:null,text:"in $years years"}]};n=n||[[31556926,"years"],[2629744,"months"],[86400,"days"],[3600,"hours"],[60,"minutes"],[1,"seconds"]];t=new Date(t);p=p?new Date(p):new Date();var o=(p-t)/1000;var m="past";if(o<0){m="future";o=0-o}function q(){for(var a=0;a<r[m].length;a++){if(r[m][a].ceiling==null||o<=r[m][a].ceiling){return r[m][a]}}return null}function s(){var b=o;var c={};for(var a=0;a<n.length;a++){var d=Math.floor(b/n[a][0]);b=b-(n[a][0]*d);c[n[a][1]]=d}return c}function l(c){var a=s();var b=c.text.replace(/\$(\w+)/g,function(){return a[arguments[1]]});return k(b,a)}function k(b,c){for(var a in c){if(c[a]==1){var d=new RegExp("\\b"+a+"\\b");b=b.replace(d,function(){return arguments[0].replace(/s\b/g,"")})}}return b}return l(q())};
;(function(){

  /* UNBUILD */
  function USE(arg, req){
    return req? require(arg) : arg.slice? USE[R(arg)] : function(mod, path){
      arg(mod = {exports: {}});
      USE[R(path)] = mod.exports;
    }
    function R(p){
      return p.split('/').slice(-1).toString().replace('.js','');
    }
  }
  if(typeof module !== "undefined"){ var MODULE = module }
  /* UNBUILD */

  ;USE(function(module){
    // Security, Encryption, and Authorization: SEA.js
    // MANDATORY READING: https://gun.eco/explainers/data/security.html
    // IT IS IMPLEMENTED IN A POLYFILL/SHIM APPROACH.
    // THIS IS AN EARLY ALPHA!

    if(typeof window !== "undefined"){ module.window = window }

    var tmp = module.window || module;
    var SEA = tmp.SEA || {};

    if(SEA.window = module.window){ SEA.window.SEA = SEA }

    try{ if(typeof MODULE !== "undefined"){ MODULE.exports = SEA } }catch(e){}
    module.exports = SEA;
  })(USE, './root');

  ;USE(function(module){
    var SEA = USE('./root');
    try{ if(SEA.window){
      if(location.protocol.indexOf('s') < 0
      && location.host.indexOf('localhost') < 0
      && location.protocol.indexOf('file:') < 0){
        location.protocol = 'https:'; // WebCrypto does NOT work without HTTPS!
      }
    } }catch(e){}
  })(USE, './https');

  ;USE(function(module){
    if(typeof btoa === "undefined"){
      if(typeof Buffer === "undefined") {
        global.Buffer = require("buffer").Buffer
      }
      global.btoa = function (data) { return Buffer.from(data, "binary").toString("base64"); };
      global.atob = function (data) { return Buffer.from(data, "base64").toString("binary"); };
    }
  })(USE, './base64');

  ;USE(function(module){
    USE('./base64');
    // This is Array extended to have .toString(['utf8'|'hex'|'base64'])
    function SeaArray() {}
    Object.assign(SeaArray, { from: Array.from })
    SeaArray.prototype = Object.create(Array.prototype)
    SeaArray.prototype.toString = function(enc, start, end) { enc = enc || 'utf8'; start = start || 0;
      const length = this.length
      if (enc === 'hex') {
        const buf = new Uint8Array(this)
        return [ ...Array(((end && (end + 1)) || length) - start).keys()]
        .map((i) => buf[ i + start ].toString(16).padStart(2, '0')).join('')
      }
      if (enc === 'utf8') {
        return Array.from(
          { length: (end || length) - start },
          (_, i) => String.fromCharCode(this[ i + start])
        ).join('')
      }
      if (enc === 'base64') {
        return btoa(this)
      }
    }
    module.exports = SeaArray;
  })(USE, './array');

  ;USE(function(module){
    USE('./base64');
    // This is Buffer implementation used in SEA. Functionality is mostly
    // compatible with NodeJS 'safe-buffer' and is used for encoding conversions
    // between binary and 'hex' | 'utf8' | 'base64'
    // See documentation and validation for safe implementation in:
    // https://github.com/feross/safe-buffer#update
    var SeaArray = USE('./array');
    function SafeBuffer(...props) {
      console.warn('new SafeBuffer() is depreciated, please use SafeBuffer.from()')
      return SafeBuffer.from(...props)
    }
    SafeBuffer.prototype = Object.create(Array.prototype)
    Object.assign(SafeBuffer, {
      // (data, enc) where typeof data === 'string' then enc === 'utf8'|'hex'|'base64'
      from() {
        if (!Object.keys(arguments).length || arguments[0]==null) {
          throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
        }
        const input = arguments[0]
        let buf
        if (typeof input === 'string') {
          const enc = arguments[1] || 'utf8'
          if (enc === 'hex') {
            const bytes = input.match(/([\da-fA-F]{2})/g)
            .map((byte) => parseInt(byte, 16))
            if (!bytes || !bytes.length) {
              throw new TypeError('Invalid first argument for type \'hex\'.')
            }
            buf = SeaArray.from(bytes)
          } else if (enc === 'utf8') {
            const length = input.length
            const words = new Uint16Array(length)
            Array.from({ length: length }, (_, i) => words[i] = input.charCodeAt(i))
            buf = SeaArray.from(words)
          } else if (enc === 'base64') {
            const dec = atob(input)
            const length = dec.length
            const bytes = new Uint8Array(length)
            Array.from({ length: length }, (_, i) => bytes[i] = dec.charCodeAt(i))
            buf = SeaArray.from(bytes)
          } else if (enc === 'binary') {
            buf = SeaArray.from(input)
          } else {
            console.info('SafeBuffer.from unknown encoding: '+enc)
          }
          return buf
        }
        const byteLength = input.byteLength // what is going on here? FOR MARTTI
        const length = input.byteLength ? input.byteLength : input.length
        if (length) {
          let buf
          if (input instanceof ArrayBuffer) {
            buf = new Uint8Array(input)
          }
          return SeaArray.from(buf || input)
        }
      },
      // This is 'safe-buffer.alloc' sans encoding support
      alloc(length, fill = 0 /*, enc*/ ) {
        return SeaArray.from(new Uint8Array(Array.from({ length: length }, () => fill)))
      },
      // This is normal UNSAFE 'buffer.alloc' or 'new Buffer(length)' - don't use!
      allocUnsafe(length) {
        return SeaArray.from(new Uint8Array(Array.from({ length : length })))
      },
      // This puts together array of array like members
      concat(arr) { // octet array
        if (!Array.isArray(arr)) {
          throw new TypeError('First argument must be Array containing ArrayBuffer or Uint8Array instances.')
        }
        return SeaArray.from(arr.reduce((ret, item) => ret.concat(Array.from(item)), []))
      }
    })
    SafeBuffer.prototype.from = SafeBuffer.from
    SafeBuffer.prototype.toString = SeaArray.prototype.toString

    module.exports = SafeBuffer;
  })(USE, './buffer');

  ;USE(function(module){
    const SEA = USE('./root')
    const Buffer = USE('./buffer')
    const api = {Buffer: Buffer}
    var o = {};

    if(SEA.window){
      api.crypto = navigator && navigator.product === 'ReactNative' ? require('isomorphic-webcrypto') : window.crypto || window.msCrypto || require('isomorphic-webcrypto');
      api.subtle = (api.crypto||o).subtle || (api.crypto||o).webkitSubtle;
      api.TextEncoder = window.TextEncoder;
      api.TextDecoder = window.TextDecoder;
      api.random = (len) => Buffer.from(api.crypto.getRandomValues(new Uint8Array(Buffer.alloc(len))));
    }
    if(!api.TextDecoder)
    {
      const { TextEncoder, TextDecoder } = require('text-encoding');
      api.TextDecoder = TextDecoder;
      api.TextEncoder = TextEncoder;
    }
    if(!api.crypto){try{
      var crypto = USE('crypto', 1);
      Object.assign(api, {
        crypto,
        random: (len) => Buffer.from(crypto.randomBytes(len))
      });      
      const isocrypto = require('isomorphic-webcrypto');
      api.ossl = api.subtle = isocrypto.subtle;
    }catch(e){
      console.log("text-encoding and @peculiar/webcrypto may not be included by default, please add it to your package.json!");
      TEXT_ENCODING_OR_PECULIAR_WEBCRYPTO_NOT_INSTALLED;
    }}

    module.exports = api
  })(USE, './shim');

  ;USE(function(module){
    var SEA = USE('./root');
    var Buffer = USE('./buffer');
    var s = {};
    s.pbkdf2 = {hash: {name : 'SHA-256'}, iter: 100000, ks: 64};
    s.ecdsa = {
      pair: {name: 'ECDSA', namedCurve: 'P-256'},
      sign: {name: 'ECDSA', hash: {name: 'SHA-256'}}
    };
    s.ecdh = {name: 'ECDH', namedCurve: 'P-256'};

    // This creates Web Cryptography API compliant JWK for sign/verify purposes
    s.jwk = function(pub, d){  // d === priv
      pub = pub.split('.');
      var x = pub[0], y = pub[1];
      var jwk = {kty: "EC", crv: "P-256", x: x, y: y, ext: true};
      jwk.key_ops = d ? ['sign'] : ['verify'];
      if(d){ jwk.d = d }
      return jwk;
    };
    
    s.keyToJwk = function(keyBytes) {
      const keyB64 = keyBytes.toString('base64');
      const k = keyB64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
      return { kty: 'oct', k: k, ext: false, alg: 'A256GCM' };
    }

    s.recall = {
      validity: 12 * 60 * 60, // internally in seconds : 12 hours
      hook: function(props){ return props } // { iat, exp, alias, remember } // or return new Promise((resolve, reject) => resolve(props)
    };

    s.check = function(t){ return (typeof t == 'string') && ('SEA{' === t.slice(0,4)) }
    s.parse = function p(t){ try {
      var yes = (typeof t == 'string');
      if(yes && 'SEA{' === t.slice(0,4)){ t = t.slice(3) }
      return yes ? JSON.parse(t) : t;
      } catch (e) {}
      return t;
    }

    SEA.opt = s;
    module.exports = s
  })(USE, './settings');

  ;USE(function(module){
    var shim = USE('./shim');
    module.exports = async function(d, o){
      var t = (typeof d == 'string')? d : JSON.stringify(d);
      var hash = await shim.subtle.digest({name: o||'SHA-256'}, new shim.TextEncoder().encode(t));
      return shim.Buffer.from(hash);
    }
  })(USE, './sha256');

  ;USE(function(module){
    // This internal func returns SHA-1 hashed data for KeyID generation
    const __shim = USE('./shim')
    const subtle = __shim.subtle
    const ossl = __shim.ossl ? __shim.ossl : subtle
    const sha1hash = (b) => ossl.digest({name: 'SHA-1'}, new ArrayBuffer(b))
    module.exports = sha1hash
  })(USE, './sha1');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    var sha = USE('./sha256');
    var u;

    SEA.work = SEA.work || (async (data, pair, cb, opt) => { try { // used to be named `proof`
      var salt = (pair||{}).epub || pair; // epub not recommended, salt should be random!
      var opt = opt || {};
      if(salt instanceof Function){
        cb = salt;
        salt = u;
      }
      data = (typeof data == 'string')? data : JSON.stringify(data);
      if('sha' === (opt.name||'').toLowerCase().slice(0,3)){
        var rsha = shim.Buffer.from(await sha(data, opt.name), 'binary').toString(opt.encode || 'base64')
        if(cb){ try{ cb(rsha) }catch(e){console.log(e)} }
        return rsha;
      }
      salt = salt || shim.random(9);
      var key = await (shim.ossl || shim.subtle).importKey('raw', new shim.TextEncoder().encode(data), {name: opt.name || 'PBKDF2'}, false, ['deriveBits']);
      var work = await (shim.ossl || shim.subtle).deriveBits({
        name: opt.name || 'PBKDF2',
        iterations: opt.iterations || S.pbkdf2.iter,
        salt: new shim.TextEncoder().encode(opt.salt || salt),
        hash: opt.hash || S.pbkdf2.hash,
      }, key, opt.length || (S.pbkdf2.ks * 8))
      data = shim.random(data.length)  // Erase data in case of passphrase
      var r = shim.Buffer.from(work, 'binary').toString(opt.encode || 'base64')
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) { 
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.work;
  })(USE, './work');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');

    SEA.name = SEA.name || (async (cb, opt) => { try {
      if(cb){ try{ cb() }catch(e){console.log(e)} }
      return;
    } catch(e) {
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    //SEA.pair = async (data, proof, cb) => { try {
    SEA.pair = SEA.pair || (async (cb, opt) => { try {

      var ecdhSubtle = shim.ossl || shim.subtle;
      // First: ECDSA keys for signing/verifying...
      var sa = await shim.subtle.generateKey({name: 'ECDSA', namedCurve: 'P-256'}, true, [ 'sign', 'verify' ])
      .then(async (keys) => {
        // privateKey scope doesn't leak out from here!
        //const { d: priv } = await shim.subtle.exportKey('jwk', keys.privateKey)
        var key = {};
        key.priv = (await shim.subtle.exportKey('jwk', keys.privateKey)).d;
        var pub = await shim.subtle.exportKey('jwk', keys.publicKey);
        //const pub = Buff.from([ x, y ].join(':')).toString('base64') // old
        key.pub = pub.x+'.'+pub.y; // new
        // x and y are already base64
        // pub is UTF8 but filename/URL safe (https://www.ietf.org/rfc/rfc3986.txt)
        // but split on a non-base64 letter.
        return key;
      })
      
      // To include PGPv4 kind of keyId:
      // const pubId = await SEA.keyid(keys.pub)
      // Next: ECDH keys for encryption/decryption...

      try{
      var dh = await ecdhSubtle.generateKey({name: 'ECDH', namedCurve: 'P-256'}, true, ['deriveKey'])
      .then(async (keys) => {
        // privateKey scope doesn't leak out from here!
        var key = {};
        key.epriv = (await ecdhSubtle.exportKey('jwk', keys.privateKey)).d;
        var pub = await ecdhSubtle.exportKey('jwk', keys.publicKey);
        //const epub = Buff.from([ ex, ey ].join(':')).toString('base64') // old
        key.epub = pub.x+'.'+pub.y; // new
        // ex and ey are already base64
        // epub is UTF8 but filename/URL safe (https://www.ietf.org/rfc/rfc3986.txt)
        // but split on a non-base64 letter.
        return key;
      })
      }catch(e){
        if(SEA.window){ throw e }
        if(e == 'Error: ECDH is not a supported algorithm'){ console.log('Ignoring ECDH...') }
        else { throw e }
      } dh = dh || {};

      var r = { pub: sa.pub, priv: sa.priv, /* pubId, */ epub: dh.epub, epriv: dh.epriv }
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) {
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.pair;
  })(USE, './pair');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    var sha = USE('./sha256');
    var u;

    SEA.sign = SEA.sign || (async (data, pair, cb, opt) => { try {
      opt = opt || {};
      if(!(pair||opt).priv){
        pair = await SEA.I(null, {what: data, how: 'sign', why: opt.why});
      }
      if(u === data){ throw '`undefined` not allowed.' }
      var json = S.parse(data);
      var check = opt.check = opt.check || json;
      if(SEA.verify && (SEA.opt.check(check) || (check && check.s && check.m))
      && u !== await SEA.verify(check, pair)){ // don't sign if we already signed it.
        var r = S.parse(check);
        if(!opt.raw){ r = 'SEA'+JSON.stringify(r) }
        if(cb){ try{ cb(r) }catch(e){console.log(e)} }
        return r;
      }
      var pub = pair.pub;
      var priv = pair.priv;
      var jwk = S.jwk(pub, priv);
      var hash = await sha(json);
      var sig = await (shim.ossl || shim.subtle).importKey('jwk', jwk, {name: 'ECDSA', namedCurve: 'P-256'}, false, ['sign'])
      .then((key) => (shim.ossl || shim.subtle).sign({name: 'ECDSA', hash: {name: 'SHA-256'}}, key, new Uint8Array(hash))) // privateKey scope doesn't leak out from here!
      var r = {m: json, s: shim.Buffer.from(sig, 'binary').toString(opt.encode || 'base64')}
      if(!opt.raw){ r = 'SEA'+JSON.stringify(r) }

      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) {
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.sign;
  })(USE, './sign');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    var sha = USE('./sha256');
    var u;

    SEA.verify = SEA.verify || (async (data, pair, cb, opt) => { try {
      var json = S.parse(data);
      if(false === pair){ // don't verify!
        var raw = S.parse(json.m);
        if(cb){ try{ cb(raw) }catch(e){console.log(e)} }
        return raw;
      }
      opt = opt || {};
      // SEA.I // verify is free! Requires no user permission.
      var pub = pair.pub || pair;
      var key = SEA.opt.slow_leak? await SEA.opt.slow_leak(pub) : await (shim.ossl || shim.subtle).importKey('jwk', S.jwk(pub), {name: 'ECDSA', namedCurve: 'P-256'}, false, ['verify']);
      var hash = await sha(json.m);
      var buf, sig, check, tmp; try{
        buf = shim.Buffer.from(json.s, opt.encode || 'base64'); // NEW DEFAULT!
        sig = new Uint8Array(buf);
        check = await (shim.ossl || shim.subtle).verify({name: 'ECDSA', hash: {name: 'SHA-256'}}, key, sig, new Uint8Array(hash));
        if(!check){ throw "Signature did not match." }
      }catch(e){
        if(SEA.opt.fallback){
          return await SEA.opt.fall_verify(data, pair, cb, opt);
        }
      }
      var r = check? S.parse(json.m) : u;

      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) {
      console.log(e); // mismatched owner FOR MARTTI
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.verify;
    // legacy & ossl leak mitigation:

    var knownKeys = {};
    var keyForPair = SEA.opt.slow_leak = pair => {
      if (knownKeys[pair]) return knownKeys[pair];
      var jwk = S.jwk(pair);
      knownKeys[pair] = (shim.ossl || shim.subtle).importKey("jwk", jwk, {name: 'ECDSA', namedCurve: 'P-256'}, false, ["verify"]);
      return knownKeys[pair];
    };

    var O = SEA.opt;
    SEA.opt.fall_verify = async function(data, pair, cb, opt, f){
      if(f === SEA.opt.fallback){ throw "Signature did not match" } f = f || 1;
      var tmp = data||'';
      data = SEA.opt.unpack(data) || data;
      var json = S.parse(data), pub = pair.pub || pair, key = await SEA.opt.slow_leak(pub);
      var hash = (f <= SEA.opt.fallback)? shim.Buffer.from(await shim.subtle.digest({name: 'SHA-256'}, new shim.TextEncoder().encode(S.parse(json.m)))) : await sha(json.m); // this line is old bad buggy code but necessary for old compatibility.
      var buf; var sig; var check; try{
        buf = shim.Buffer.from(json.s, opt.encode || 'base64') // NEW DEFAULT!
        sig = new Uint8Array(buf)
        check = await (shim.ossl || shim.subtle).verify({name: 'ECDSA', hash: {name: 'SHA-256'}}, key, sig, new Uint8Array(hash))
        if(!check){ throw "Signature did not match." }
      }catch(e){
        buf = shim.Buffer.from(json.s, 'utf8') // AUTO BACKWARD OLD UTF8 DATA!
        sig = new Uint8Array(buf)
        check = await (shim.ossl || shim.subtle).verify({name: 'ECDSA', hash: {name: 'SHA-256'}}, key, sig, new Uint8Array(hash))
        if(!check){ throw "Signature did not match." }
      }
      var r = check? S.parse(json.m) : u;
      O.fall_soul = tmp['#']; O.fall_key = tmp['.']; O.fall_val = data; O.fall_state = tmp['>'];
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    }
    SEA.opt.fallback = 2;

  })(USE, './verify');

  ;USE(function(module){
    var shim = USE('./shim');
    var S = USE('./settings');
    var sha256hash = USE('./sha256');

    const importGen = async (key, salt, opt) => {
      //const combo = shim.Buffer.concat([shim.Buffer.from(key, 'utf8'), salt || shim.random(8)]).toString('utf8') // old
      var opt = opt || {};
      const combo = key + (salt || shim.random(8)).toString('utf8'); // new
      const hash = shim.Buffer.from(await sha256hash(combo), 'binary')
      
      const jwkKey = S.keyToJwk(hash)      
      return await shim.subtle.importKey('jwk', jwkKey, {name:'AES-GCM'}, false, ['encrypt', 'decrypt'])
    }
    module.exports = importGen;
  })(USE, './aeskey');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    var aeskey = USE('./aeskey');
    var u;

    SEA.encrypt = SEA.encrypt || (async (data, pair, cb, opt) => { try {
      opt = opt || {};
      var key = (pair||opt).epriv || pair;
      if(u === data){ throw '`undefined` not allowed.' }
      if(!key){
        pair = await SEA.I(null, {what: data, how: 'encrypt', why: opt.why});
        key = pair.epriv || pair;
      }
      var msg = (typeof data == 'string')? data : JSON.stringify(data);
      var rand = {s: shim.random(9), iv: shim.random(15)}; // consider making this 9 and 15 or 18 or 12 to reduce == padding.
      var ct = await aeskey(key, rand.s, opt).then((aes) => (/*shim.ossl ||*/ shim.subtle).encrypt({ // Keeping the AES key scope as private as possible...
        name: opt.name || 'AES-GCM', iv: new Uint8Array(rand.iv)
      }, aes, new shim.TextEncoder().encode(msg)));
      var r = {
        ct: shim.Buffer.from(ct, 'binary').toString(opt.encode || 'base64'),
        iv: rand.iv.toString(opt.encode || 'base64'),
        s: rand.s.toString(opt.encode || 'base64')
      }
      if(!opt.raw){ r = 'SEA'+JSON.stringify(r) }

      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) { 
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.encrypt;
  })(USE, './encrypt');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    var aeskey = USE('./aeskey');

    SEA.decrypt = SEA.decrypt || (async (data, pair, cb, opt) => { try {
      opt = opt || {};
      var key = (pair||opt).epriv || pair;
      if(!key){
        pair = await SEA.I(null, {what: data, how: 'decrypt', why: opt.why});
        key = pair.epriv || pair;
      }
      var json = S.parse(data);
      var buf, bufiv, bufct; try{
        buf = shim.Buffer.from(json.s, opt.encode || 'base64');
        bufiv = shim.Buffer.from(json.iv, opt.encode || 'base64');
        bufct = shim.Buffer.from(json.ct, opt.encode || 'base64');
        var ct = await aeskey(key, buf, opt).then((aes) => (/*shim.ossl ||*/ shim.subtle).decrypt({  // Keeping aesKey scope as private as possible...
          name: opt.name || 'AES-GCM', iv: new Uint8Array(bufiv), tagLength: 128
        }, aes, new Uint8Array(bufct)));
      }catch(e){
        if('utf8' === opt.encode){ throw "Could not decrypt" }
        if(SEA.opt.fallback){
          opt.encode = 'utf8';
          return await SEA.decrypt(data, pair, cb, opt);
        }
      }
      var r = S.parse(new shim.TextDecoder('utf8').decode(ct));
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) { 
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.decrypt;
  })(USE, './decrypt');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    // Derive shared secret from other's pub and my epub/epriv 
    SEA.secret = SEA.secret || (async (key, pair, cb, opt) => { try {
      opt = opt || {};
      if(!pair || !pair.epriv || !pair.epub){
        pair = await SEA.I(null, {what: key, how: 'secret', why: opt.why});
      }
      var pub = key.epub || key;
      var epub = pair.epub;
      var epriv = pair.epriv;
      var ecdhSubtle = shim.ossl || shim.subtle;
      var pubKeyData = keysToEcdhJwk(pub);
      var props = Object.assign({ public: await ecdhSubtle.importKey(...pubKeyData, true, []) },{name: 'ECDH', namedCurve: 'P-256'}); // Thanks to @sirpy !
      var privKeyData = keysToEcdhJwk(epub, epriv);
      var derived = await ecdhSubtle.importKey(...privKeyData, false, ['deriveBits']).then(async (privKey) => {
        // privateKey scope doesn't leak out from here!
        var derivedBits = await ecdhSubtle.deriveBits(props, privKey, 256);
        var rawBits = new Uint8Array(derivedBits);
        var derivedKey = await ecdhSubtle.importKey('raw', rawBits,{ name: 'AES-GCM', length: 256 }, true, [ 'encrypt', 'decrypt' ]);
        return ecdhSubtle.exportKey('jwk', derivedKey).then(({ k }) => k);
      })
      var r = derived;
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) {
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    // can this be replaced with settings.jwk?
    var keysToEcdhJwk = (pub, d) => { // d === priv
      //var [ x, y ] = Buffer.from(pub, 'base64').toString('utf8').split(':') // old
      var [ x, y ] = pub.split('.') // new
      var jwk = d ? { d: d } : {}
      return [  // Use with spread returned value...
        'jwk',
        Object.assign(
          jwk,
          { x: x, y: y, kty: 'EC', crv: 'P-256', ext: true }
        ), // ??? refactor
        {name: 'ECDH', namedCurve: 'P-256'}
      ]
    }

    module.exports = SEA.secret;
  })(USE, './secret');

  ;USE(function(module){
    var shim = USE('./shim');
    // Practical examples about usage found in tests.
    var SEA = USE('./root');
    SEA.work = USE('./work');
    SEA.sign = USE('./sign');
    SEA.verify = USE('./verify');
    SEA.encrypt = USE('./encrypt');
    SEA.decrypt = USE('./decrypt');
    SEA.opt.aeskey = USE('./aeskey'); // not official!

    SEA.random = SEA.random || shim.random;

    // This is Buffer used in SEA and usable from Gun/SEA application also.
    // For documentation see https://nodejs.org/api/buffer.html
    SEA.Buffer = SEA.Buffer || USE('./buffer');

    // These SEA functions support now ony Promises or
    // async/await (compatible) code, use those like Promises.
    //
    // Creates a wrapper library around Web Crypto API
    // for various AES, ECDSA, PBKDF2 functions we called above.
    // Calculate public key KeyID aka PGPv4 (result: 8 bytes as hex string)
    SEA.keyid = SEA.keyid || (async (pub) => {
      try {
        // base64('base64(x):base64(y)') => Buffer(xy)
        const pb = Buffer.concat(
          pub.replace(/-/g, '+').replace(/_/g, '/').split('.')
          .map((t) => Buffer.from(t, 'base64'))
        )
        // id is PGPv4 compliant raw key
        const id = Buffer.concat([
          Buffer.from([0x99, pb.length / 0x100, pb.length % 0x100]), pb
        ])
        const sha1 = await sha1hash(id)
        const hash = Buffer.from(sha1, 'binary')
        return hash.toString('hex', hash.length - 8)  // 16-bit ID as hex
      } catch (e) {
        console.log(e)
        throw e
      }
    });
    // all done!
    // Obviously it is missing MANY necessary features. This is only an alpha release.
    // Please experiment with it, audit what I've done so far, and complain about what needs to be added.
    // SEA should be a full suite that is easy and seamless to use.
    // Again, scroll naer the top, where I provide an EXAMPLE of how to create a user and sign in.
    // Once logged in, the rest of the code you just read handled automatically signing/validating data.
    // But all other behavior needs to be equally easy, like opinionated ways of
    // Adding friends (trusted public keys), sending private messages, etc.
    // Cheers! Tell me what you think.
    var Gun = (SEA.window||{}).Gun || USE((typeof MODULE == "undefined"?'.':'')+'./gun', 1);
    Gun.SEA = SEA;
    SEA.GUN = SEA.Gun = Gun;

    module.exports = SEA
  })(USE, './sea');

  ;USE(function(module){
    var Gun = USE('./sea').Gun;
    Gun.chain.then = function(cb){
      var gun = this, p = (new Promise(function(res, rej){
        gun.once(res);
      }));
      return cb? p.then(cb) : p;
    }
  })(USE, './then');

  ;USE(function(module){
    var SEA = USE('./sea');
    var Gun = SEA.Gun;
    var then = USE('./then');

    function User(root){ 
      this._ = {$: this};
    }
    User.prototype = (function(){ function F(){}; F.prototype = Gun.chain; return new F() }()) // Object.create polyfill
    User.prototype.constructor = User;

    // let's extend the gun chain with a `user` function.
    // only one user can be logged in at a time, per gun instance.
    Gun.chain.user = function(pub){
      var gun = this, root = gun.back(-1), user;
      if(pub){ return root.get('~'+pub) }
      if(user = root.back('user')){ return user }
      var root = (root._), at = root, uuid = at.opt.uuid || Gun.state.lex;
      (at = (user = at.user = gun.chain(new User))._).opt = {};
      at.opt.uuid = function(cb){
        var id = uuid(), pub = root.user;
        if(!pub || !(pub = pub.is) || !(pub = pub.pub)){ return id }
        id = id + '~' + pub + '.';
        if(cb && cb.call){ cb(null, id) }
        return id;
      }
      return user;
    }
    Gun.User = User;
    module.exports = User;
  })(USE, './user');

  ;USE(function(module){
    // TODO: This needs to be split into all separate functions.
    // Not just everything thrown into 'create'.

    var SEA = USE('./sea');
    var User = USE('./user');
    var authsettings = USE('./settings');
    var Gun = SEA.Gun;

    var noop = function(){};

    // Well first we have to actually create a user. That is what this function does.
    User.prototype.create = function(alias, pass, cb, opt){
      var gun = this, cat = (gun._), root = gun.back(-1);
      cb = cb || noop;
      if(cat.ing){
        cb({err: Gun.log("User is already being created or authenticated!"), wait: true});
        return gun;
      }
      cat.ing = true;
      opt = opt || {};
      var act = {}, u;
      act.a = function(pubs){
        act.pubs = pubs;
        if(pubs && !opt.already){
          // If we can enforce that a user name is already taken, it might be nice to try, but this is not guaranteed.
          var ack = {err: Gun.log('User already created!')};
          cat.ing = false;
          cb(ack);
          gun.leave();
          return;
        }
        act.salt = Gun.text.random(64); // pseudo-randomly create a salt, then use PBKDF2 function to extend the password with it.
        SEA.work(pass, act.salt, act.b); // this will take some short amount of time to produce a proof, which slows brute force attacks.
      }
      act.b = function(proof){
        act.proof = proof;
        SEA.pair(act.c); // now we have generated a brand new ECDSA key pair for the user account.
      }
      act.c = function(pair){ var tmp;
        act.pair = pair || {};
        if(tmp = cat.root.user){
          tmp._.sea = pair;
          tmp.is = {pub: pair.pub, epub: pair.epub, alias: alias};
        }
        // the user's public key doesn't need to be signed. But everything else needs to be signed with it! // we have now automated it! clean up these extra steps now!
        act.data = {pub: pair.pub};
        act.d();
      }
      act.d = function(){
        act.data.alias = alias;
        act.e();
      }
      act.e = function(){
        act.data.epub = act.pair.epub; 
        SEA.encrypt({priv: act.pair.priv, epriv: act.pair.epriv}, act.proof, act.f, {raw:1}); // to keep the private key safe, we AES encrypt it with the proof of work!
      }
      act.f = function(auth){
        act.data.auth = JSON.stringify({ek: auth, s: act.salt}); 
        act.g(act.data.auth);
      }
      act.g = function(auth){ var tmp;
        act.data.auth = act.data.auth || auth;
        root.get(tmp = '~'+act.pair.pub).put(act.data); // awesome, now we can actually save the user with their public key as their ID.
        root.get('~@'+alias).put(Gun.obj.put({}, tmp, Gun.val.link.ify(tmp))); // next up, we want to associate the alias with the public key. So we add it to the alias list.
        setTimeout(function(){ // we should be able to delete this now, right?
        cat.ing = false;
        cb({ok: 0, pub: act.pair.pub}); // callback that the user has been created. (Note: ok = 0 because we didn't wait for disk to ack)
        if(noop === cb){ gun.auth(alias, pass) } // if no callback is passed, auto-login after signing up.
        },10);
      }
      root.get('~@'+alias).once(act.a);
      return gun;
    }
    // now that we have created a user, we want to authenticate them!
    User.prototype.auth = function(alias, pass, cb, opt){
      var gun = this, cat = (gun._), root = gun.back(-1);
      cb = cb || function(){};
      if(cat.ing){
        cb({err: Gun.log("User is already being created or authenticated!"), wait: true});
        return gun;
      }
      cat.ing = true;
      opt = opt || {};
      var pair = (alias && (alias.pub || alias.epub))? alias : (pass && (pass.pub || pass.epub))? pass : null;
      var act = {}, u;
      act.a = function(data){
        if(!data){ return act.b() }
        if(!data.pub){
          var tmp = [];
          Gun.node.is(data, function(v){ tmp.push(v) })
          return act.b(tmp);
        }
        if(act.name){ return act.f(data) }
        act.c((act.data = data).auth);
      }
      act.b = function(list){
        var get = (act.list = (act.list||[]).concat(list||[])).shift();
        if(u === get){
          if(act.name){ return act.err('Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.') }
          return act.err('Wrong user or password.') 
        }
        root.get(get).once(act.a);
      }
      act.c = function(auth){
        if(u === auth){ return act.b() }
        if(Gun.text.is(auth)){ return act.c(Gun.obj.ify(auth)) } // in case of legacy
        SEA.work(pass, (act.auth = auth).s, act.d, act.enc); // the proof of work is evidence that we've spent some time/effort trying to log in, this slows brute force.
      }
      act.d = function(proof){
        SEA.decrypt(act.auth.ek, proof, act.e, act.enc);
      }
      act.e = function(half){
        if(u === half){
          if(!act.enc){ // try old format
            act.enc = {encode: 'utf8'};
            return act.c(act.auth);
          } act.enc = null; // end backwards
          return act.b();
        }
        act.half = half;
        act.f(act.data);
      }
      act.f = function(data){
        if(!data || !data.pub){ return act.b() }
        var tmp = act.half || {};
        act.g({pub: data.pub, epub: data.epub, priv: tmp.priv, epriv: tmp.epriv});
      }
      act.g = function(pair){
        act.pair = pair;
        var user = (root._).user, at = (user._);
        var tmp = at.tag;
        var upt = at.opt;
        at = user._ = root.get('~'+pair.pub)._;
        at.opt = upt;
        // add our credentials in-memory only to our root user instance
        user.is = {pub: pair.pub, epub: pair.epub, alias: alias};
        at.sea = act.pair;
        cat.ing = false;
        try{if(pass && !Gun.obj.has(Gun.obj.ify(cat.root.graph['~'+pair.pub].auth), ':')){ opt.shuffle = opt.change = pass; } }catch(e){} // migrate UTF8 & Shuffle!
        opt.change? act.z() : cb(at);
        if(SEA.window && ((gun.back('user')._).opt||opt).remember){
          // TODO: this needs to be modular.
          try{var sS = {};
          sS = window.sessionStorage;
          sS.recall = true;
          sS.alias = alias;
          sS.tmp = pass;
          }catch(e){}
        }
        try{
          (root._).on('auth', at) // TODO: Deprecate this, emit on user instead! Update docs when you do.
          //at.on('auth', at) // Arrgh, this doesn't work without event "merge" code, but "merge" code causes stack overflow and crashes after logging in & trying to write data.
        }catch(e){
          Gun.log("Your 'auth' callback crashed with:", e);
        }
      }
      act.z = function(){
        // password update so encrypt private key using new pwd + salt
        act.salt = Gun.text.random(64); // pseudo-random
        SEA.work(opt.change, act.salt, act.y);
      }
      act.y = function(proof){
        SEA.encrypt({priv: act.pair.priv, epriv: act.pair.epriv}, proof, act.x, {raw:1});
      }
      act.x = function(auth){
        act.w(JSON.stringify({ek: auth, s: act.salt}));
      }
      act.w = function(auth){
        if(opt.shuffle){ // delete in future!
          console.log('migrate core account from UTF8 & shuffle');
          var tmp = Gun.obj.to(act.data);
          Gun.obj.del(tmp, '_');
          tmp.auth = auth;
          root.get('~'+act.pair.pub).put(tmp);
        } // end delete
        root.get('~'+act.pair.pub).get('auth').put(auth, cb);
      }
      act.err = function(e){
        var ack = {err: Gun.log(e || 'User cannot be found!')};
        cat.ing = false;
        cb(ack);
      }
      act.plugin = function(name){
        if(!(act.name = name)){ return act.err() }
        var tmp = [name];
        if('~' !== name[0]){
          tmp[1] = '~'+name;
          tmp[2] = '~@'+name;
        }
        act.b(tmp);
      }
      if(pair){
        act.g(pair);
      } else
      if(alias){
        root.get('~@'+alias).once(act.a);
      } else
      if(!alias && !pass){
        SEA.name(act.plugin);
      }
      return gun;
    }
    User.prototype.pair = function(){
      console.log("user.pair() IS DEPRECATED AND WILL BE DELETED!!!");
      var user = this;
      if(!user.is){ return false }
      return user._.sea;
    }
    User.prototype.leave = function(opt, cb){
      var gun = this, user = (gun.back(-1)._).user;
      if(user){
        delete user.is;
        delete user._.is;
        delete user._.sea;
      }
      if(SEA.window){
        try{var sS = {};
        sS = window.sessionStorage;
        delete sS.alias;
        delete sS.tmp;
        delete sS.recall;
        }catch(e){};
      }
      return gun;
    }
    // If authenticated user wants to delete his/her account, let's support it!
    User.prototype.delete = async function(alias, pass, cb){
      console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");
      var gun = this, root = gun.back(-1), user = gun.back('user');
      try {
        user.auth(alias, pass, function(ack){
          var pub = (user.is||{}).pub;
          // Delete user data
          user.map().once(function(){ this.put(null) });
          // Wipe user data from memory
          user.leave();
          (cb || noop)({ok: 0});
        });
      } catch (e) {
        Gun.log('User.delete failed! Error:', e);
      }
      return gun;
    }
    User.prototype.recall = function(opt, cb){
      var gun = this, root = gun.back(-1), tmp;
      opt = opt || {};
      if(opt && opt.sessionStorage){
        if(SEA.window){
          try{var sS = {};
          sS = window.sessionStorage;
          if(sS){
            (root._).opt.remember = true;
            ((gun.back('user')._).opt||opt).remember = true;
            if(sS.recall || (sS.alias && sS.tmp)){
              root.user().auth(sS.alias, sS.tmp, cb);
            }
          }
          }catch(e){}
        }
        return gun;
      }
      /*
        TODO: copy mhelander's expiry code back in.
        Although, we should check with community,
        should expiry be core or a plugin?
      */
      return gun;
    }
    User.prototype.alive = async function(){
      console.log("user.alive() IS DEPRECATED!!!");
      const gunRoot = this.back(-1)
      try {
        // All is good. Should we do something more with actual recalled data?
        await authRecall(gunRoot)
        return gunRoot._.user._
      } catch (e) {
        const err = 'No session!'
        Gun.log(err)
        throw { err }
      }
    }
    User.prototype.trust = async function(user){
      // TODO: BUG!!! SEA `node` read listener needs to be async, which means core needs to be async too.
      //gun.get('alice').get('age').trust(bob);
      if (Gun.is(user)) {
        user.get('pub').get((ctx, ev) => {
          console.log(ctx, ev)
        })
      }
      user.get('trust').get(path).put(theirPubkey);

      // do a lookup on this gun chain directly (that gets bob's copy of the data)
      // do a lookup on the metadata trust table for this path (that gets all the pubkeys allowed to write on this path)
      // do a lookup on each of those pubKeys ON the path (to get the collab data "layers")
      // THEN you perform Jachen's mix operation
      // and return the result of that to...
    }
    User.prototype.grant = function(to, cb){
      console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
      var gun = this, user = gun.back(-1).user(), pair = user._.sea, path = '';
      gun.back(function(at){ if(at.is){ return } path += (at.get||'') });
      (async function(){
      var enc, sec = await user.get('grant').get(pair.pub).get(path).then();
      sec = await SEA.decrypt(sec, pair);
      if(!sec){
        sec = SEA.random(16).toString();
        enc = await SEA.encrypt(sec, pair);
        user.get('grant').get(pair.pub).get(path).put(enc);
      }
      var pub = to.get('pub').then();
      var epub = to.get('epub').then();
      pub = await pub; epub = await epub;
      var dh = await SEA.secret(epub, pair);
      enc = await SEA.encrypt(sec, dh);
      user.get('grant').get(pub).get(path).put(enc, cb);
      }());
      return gun;
    }
    User.prototype.secret = function(data, cb){
      console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
      var gun = this, user = gun.back(-1).user(), pair = user.pair(), path = '';
      gun.back(function(at){ if(at.is){ return } path += (at.get||'') });
      (async function(){
      var enc, sec = await user.get('trust').get(pair.pub).get(path).then();
      sec = await SEA.decrypt(sec, pair);
      if(!sec){
        sec = SEA.random(16).toString();
        enc = await SEA.encrypt(sec, pair);
        user.get('trust').get(pair.pub).get(path).put(enc);
      }
      enc = await SEA.encrypt(data, sec);
      gun.put(enc, cb);
      }());
      return gun;
    }
    module.exports = User
  })(USE, './create');

  ;USE(function(module){
    var SEA = USE('./sea')
    var Gun = SEA.Gun;
    // After we have a GUN extension to make user registration/login easy, we then need to handle everything else.

    // We do this with a GUN adapter, we first listen to when a gun instance is created (and when its options change)
    Gun.on('opt', function(at){
      if(!at.sea){ // only add SEA once per instance, on the "at" context.
        at.sea = {own: {}};
        //at.on('in', security, at); // now listen to all input data, acting as a firewall.
        //at.on('out', signature, at); // and output listeners, to encrypt outgoing data.
        at.on('put', check, at);
      }
      this.to.next(at); // make sure to call the "next" middleware adapter.
    });

    // Alright, this next adapter gets run at the per node level in the graph database.
    // This will let us verify that every property on a node has a value signed by a public key we trust.
    // If the signature does not match, the data is just `undefined` so it doesn't get passed on.
    // If it does match, then we transform the in-memory "view" of the data into its plain value (without the signature).
    // Now NOTE! Some data is "system" data, not user data. Example: List of public keys, aliases, etc.
    // This data is self-enforced (the value can only match its ID), but that is handled in the `security` function.
    // From the self-enforced data, we can see all the edges in the graph that belong to a public key.
    // Example: ~ASDF is the ID of a node with ASDF as its public key, signed alias and salt, and
    // its encrypted private key, but it might also have other signed values on it like `profile = <ID>` edge.
    // Using that directed edge's ID, we can then track (in memory) which IDs belong to which keys.
    // Here is a problem: Multiple public keys can "claim" any node's ID, so this is dangerous!
    // This means we should ONLY trust our "friends" (our key ring) public keys, not any ones.
    // I have not yet added that to SEA yet in this alpha release. That is coming soon, but beware in the meanwhile!
    function each(msg){ // TODO: Warning: Need to switch to `gun.on('node')`! Do not use `Gun.on('node'` in your apps!
      // NOTE: THE SECURITY FUNCTION HAS ALREADY VERIFIED THE DATA!!!
      // WE DO NOT NEED TO RE-VERIFY AGAIN, JUST TRANSFORM IT TO PLAINTEXT.
      var to = this.to, vertex = (msg.$._).put, c = 0, d;
      Gun.node.is(msg.put, function(val, key, node){
        // only process if SEA formatted?
        var tmp = Gun.obj.ify(val) || noop;
        if(u !== tmp[':']){
          node[key] = SEA.opt.unpack(tmp);
          return;
        }
        if(!SEA.opt.check(val)){ return }
        c++; // for each property on the node
        SEA.verify(val, false, function(data){ c--; // false just extracts the plain data.
          node[key] = SEA.opt.unpack(data, key, node);; // transform to plain value.
          if(d && !c && (c = -1)){ to.next(msg) }
        });
      });
      if((d = true) && !c){ to.next(msg) }
    }

    // signature handles data output, it is a proxy to the security function.
    function signature(msg){
      if((msg._||noop).user){
        return this.to.next(msg);
      }
      var ctx = this.as;
      (msg._||(msg._=function(){})).user = ctx.user;
      security.call(this, msg);
    }

    var u;
    function check(msg){ // REVISE / IMPROVE, NO NEED TO PASS MSG/EVE EACH SUB?
      var eve = this, at = eve.as, put = msg.put, soul = put['#'], key = put['.'], val = put[':'], state = put['>'], id = msg['#'], tmp;
      if((msg._||'').faith && (at.opt||'').faith && 'function' == typeof msg._){
        SEA.verify(SEA.opt.pack(put), false, function(data){ // this is synchronous if false
          put['='] = SEA.opt.unpack(data);
          eve.to.next(msg);
        });
        return 
      }
      var no = function(why){ at.on('in', {'@': id, err: why}) };
      //var no = function(why){ msg.ack(why) };
      (msg._||'').DBG && ((msg._||'').DBG.c = +new Date);
      if('#' === soul[0]){ // special case for content addressing immutable hashed data.
        check.hash(eve, msg, val, key, soul, at, no); return;
      } 
      if('~@' === soul){  // special case for shared system data, the list of aliases.
        check.alias(eve, msg, val, key, soul, at, no); return;
      }
      if('~@' === soul.slice(0,2)){ // special case for shared system data, the list of public keys for an alias.
        check.pubs(eve, msg, val, key, soul, at, no); return;
      }
      //if('~' === soul.slice(0,1) && 2 === (tmp = soul.slice(1)).split('.').length){ // special case, account data for a public key.
      if(tmp = SEA.opt.pub(soul)){ // special case, account data for a public key.
        check.pub(eve, msg, val, key, soul, at, no, at.user||'', tmp); return;
      }
      check.any(eve, msg, val, key, soul, at, no, at.user||''); return;
      eve.to.next(msg); // not handled
    }
    check.hash = function(eve, msg, val, key, soul, at, no){
      SEA.work(val, null, function(data){
        if(data && data === key.split('#').slice(-1)[0]){ return eve.to.next(msg) }
        no("Data hash not same as hash!");
      }, {name: 'SHA-256'});
    }
    check.alias = function(eve, msg, val, key, soul, at, no){ // Example: {_:#~@, ~@alice: {#~@alice}}
      if(!val){ return no("Data must exist!") } // data MUST exist
      if('~@'+key === link_is(val)){ return eve.to.next(msg) } // in fact, it must be EXACTLY equal to itself
      no("Alias not same!"); // if it isn't, reject.
    };
    check.pubs = function(eve, msg, val, key, soul, at, no){ // Example: {_:#~@alice, ~asdf: {#~asdf}}
      if(!val){ return no("Alias must exist!") } // data MUST exist
      if(key === link_is(val)){ return eve.to.next(msg) } // and the ID must be EXACTLY equal to its property
      no("Alias not same!"); // that way nobody can tamper with the list of public keys.
    };
    check.pub = function(eve, msg, val, key, soul, at, no, user, pub){ var tmp; // Example: {_:#~asdf, hello:'world'~fdsa}}
      if('pub' === key && '~'+pub === soul){
        if(val === pub){ return eve.to.next(msg) } // the account MUST match `pub` property that equals the ID of the public key.
        return no("Account not same!");
      }
      if((tmp = user.is) && pub === tmp.pub){
        SEA.sign(SEA.opt.pack(msg.put), (user._).sea, function(data){
          if(u === data){ return no(SEA.err || 'Signature fail.') }
          if(tmp = link_is(val)){ (at.sea.own[tmp] = at.sea.own[tmp] || {})[pub] = 1 }
          msg.put[':'] = JSON.stringify({':': tmp = SEA.opt.unpack(data.m), '~': data.s});
          msg.put['='] = tmp;
          eve.to.next(msg);
        }, {raw: 1});
        return;
      }
      SEA.verify(SEA.opt.pack(msg.put), pub, function(data){ var tmp;
        data = SEA.opt.unpack(data);
        if(u === data){ return no("Unverified data.") } // make sure the signature matches the account it claims to be on. // reject any updates that are signed with a mismatched account.
        if((tmp = link_is(data)) && pub === SEA.opt.pub(tmp)){ (at.sea.own[tmp] = at.sea.own[tmp] || {})[pub] = 1 }
        msg.put['='] = data;
        eve.to.next(msg);
      });
    };
    check.any = function(eve, msg, val, key, soul, at, no, user){ var tmp, pub;
      if(at.opt.secure){ return no("Soul missing public key at '" + key + "'.") }
      // TODO: Ask community if should auto-sign non user-graph data.
      at.on('secure', function(msg){ this.off();
        if(!at.opt.secure){ return eve.to.next(msg) }
        no("Data cannot be changed.");
      }).on.on('secure', msg);
      return;
    }
    var link_is = Gun.val.link.is, state_ify = Gun.state.ify;

    // okay! The security function handles all the heavy lifting.
    // It needs to deal read and write of input and output of system data, account/public key data, and regular data.
    // This is broken down into some pretty clear edge cases, let's go over them:
    function security(msg){
      var at = this.as, sea = at.sea, to = this.to;
      if(at.opt.faith && (msg._||noop).faith){ // you probably shouldn't have faith in this!
        this.to.next(msg); // why do we allow skipping security? I'm very scared about it actually.
        return; // but so that way storage adapters that already verified something can get performance boost. This was a community requested feature. If anybody finds an exploit with it, please report immediately. It should only be exploitable if you have XSS control anyways, which if you do, you can bypass security regardless of this.
      }
      if(msg.get){
        // if there is a request to read data from us, then...
        var soul = msg.get['#'];
        if(soul){ // for now, only allow direct IDs to be read.
          if(typeof soul !== 'string'){ return to.next(msg) } // do not handle lexical cursors.
          if('alias' === soul){ // Allow reading the list of usernames/aliases in the system?
            return to.next(msg); // yes.
          } else
          if('~@' === soul.slice(0,2)){ // Allow reading the list of public keys associated with an alias?
            return to.next(msg); // yes.
          } else { // Allow reading everything?
            return to.next(msg); // yes // TODO: No! Make this a callback/event that people can filter on.
          }
        }
      }
      if(msg.put){
        /*
          NOTICE: THIS IS OLD AND GETTING DEPRECATED.
          ANY SECURITY CHANGES SHOULD HAPPEN ABOVE FIRST
          THEN PORTED TO HERE.
        */
        // potentially parallel async operations!!!
        var check = {}, each = {}, u;
        each.node = function(node, soul){
          if(Gun.obj.empty(node, '_')){ return check['node'+soul] = 0 } // ignore empty updates, don't reject them.
          Gun.obj.map(node, each.way, {soul: soul, node: node});
        };
        each.way = function(val, key){
          var soul = this.soul, node = this.node, tmp;
          if('_' === key){ return } // ignore meta data
          if('~@' === soul){  // special case for shared system data, the list of aliases.
            each.alias(val, key, node, soul); return;
          }
          if('~@' === soul.slice(0,2)){ // special case for shared system data, the list of public keys for an alias.
            each.pubs(val, key, node, soul); return;
          }
          if('~' === soul.slice(0,1) && 2 === (tmp = soul.slice(1)).split('.').length){ // special case, account data for a public key.
            each.pub(val, key, node, soul, tmp, (msg._||noop).user); return;
          }
          each.any(val, key, node, soul, (msg._||noop).user); return;
          return each.end({err: "No other data allowed!"});
        };
        each.alias = function(val, key, node, soul){ // Example: {_:#~@, ~@alice: {#~@alice}}
          if(!val){ return each.end({err: "Data must exist!"}) } // data MUST exist
          if('~@'+key === Gun.val.link.is(val)){ return check['alias'+key] = 0 } // in fact, it must be EXACTLY equal to itself
          each.end({err: "Mismatching alias."}); // if it isn't, reject.
        };
        each.pubs = function(val, key, node, soul){ // Example: {_:#~@alice, ~asdf: {#~asdf}}
          if(!val){ return each.end({err: "Alias must exist!"}) } // data MUST exist
          if(key === Gun.val.link.is(val)){ return check['pubs'+soul+key] = 0 } // and the ID must be EXACTLY equal to its property
          each.end({err: "Alias must match!"}); // that way nobody can tamper with the list of public keys.
        };
        each.pub = function(val, key, node, soul, pub, user){ var tmp; // Example: {_:#~asdf, hello:'world'~fdsa}}
          if('pub' === key){
            if(val === pub){ return (check['pub'+soul+key] = 0) } // the account MUST match `pub` property that equals the ID of the public key.
            return each.end({err: "Account must match!"});
          }
          check['user'+soul+key] = 1;
          if(Gun.is(msg.$) && user && user.is && pub === user.is.pub){
            SEA.sign(SEA.opt.prep(tmp = SEA.opt.parse(val), key, node, soul), (user._).sea, function(data){ var rel;
              if(u === data){ return each.end({err: SEA.err || 'Pub signature fail.'}) }
              if(rel = Gun.val.link.is(val)){
                (at.sea.own[rel] = at.sea.own[rel] || {})[pub] = true;
              }
              node[key] = JSON.stringify({':': SEA.opt.unpack(data.m), '~': data.s});
              check['user'+soul+key] = 0;
              each.end({ok: 1});
            }, {check: SEA.opt.pack(tmp, key, node, soul), raw: 1});
            return;
          }
          SEA.verify(SEA.opt.pack(val,key,node,soul), pub, function(data){ var rel, tmp;
            data = SEA.opt.unpack(data, key, node);
            if(u === data){ // make sure the signature matches the account it claims to be on.
              return each.end({err: "Unverified data."}); // reject any updates that are signed with a mismatched account.
            }
            if((rel = Gun.val.link.is(data)) && pub === SEA.opt.pub(rel)){
              (at.sea.own[rel] = at.sea.own[rel] || {})[pub] = true;
            }
            check['user'+soul+key] = 0;
            each.end({ok: 1});
          });
        };
        each.any = function(val, key, node, soul, user){ var tmp, pub;
          if(!(pub = SEA.opt.pub(soul))){
            if(at.opt.secure){
              each.end({err: "Soul is missing public key at '" + key + "'."});
              return;
            }
            // TODO: Ask community if should auto-sign non user-graph data.
            check['any'+soul+key] = 1;
            at.on('secure', function(msg){ this.off();
              check['any'+soul+key] = 0;
              if(at.opt.secure){ msg = null }
              each.end(msg || {err: "Data cannot be modified."});
            }).on.on('secure', msg);
            //each.end({err: "Data cannot be modified."});
            return;
          }
          if(Gun.is(msg.$) && user && user.is && pub === user.is.pub){
            /*var other = Gun.obj.map(at.sea.own[soul], function(v, p){
              if((user.is||{}).pub !== p){ return p }
            });
            if(other){
              each.any(val, key, node, soul);
              return;
            }*/
            check['any'+soul+key] = 1;
            SEA.sign(SEA.opt.prep(tmp = SEA.opt.parse(val), key, node, soul), (user._).sea, function(data){
              if(u === data){ return each.end({err: 'My signature fail.'}) }
              node[key] = JSON.stringify({':': SEA.opt.unpack(data.m), '~': data.s});
              check['any'+soul+key] = 0;
              each.end({ok: 1});
            }, {check: SEA.opt.pack(tmp, key, node, soul), raw: 1});
            return;
          }
          check['any'+soul+key] = 1;
          SEA.verify(SEA.opt.pack(val,key,node,soul), pub, function(data){ var rel;
            data = SEA.opt.unpack(data, key, node);
            if(u === data){ return each.end({err: "Mismatched owner on '" + key + "'."}) } // thanks @rogowski !
            if((rel = Gun.val.link.is(data)) && pub === SEA.opt.pub(rel)){
              (at.sea.own[rel] = at.sea.own[rel] || {})[pub] = true;
            }
            check['any'+soul+key] = 0;
            each.end({ok: 1});
          });
        }
        each.end = function(ctx){ // TODO: Can't you just switch this to each.end = cb?
          if(each.err){ return }
          if((each.err = ctx.err) || ctx.no){
            console.log('NO!', each.err, msg.put); // 451 mistmached data FOR MARTTI
            return;
          }
          if(!each.end.ed){ return }
          if(Gun.obj.map(check, function(no){
            if(no){ return true }
          })){ return }
          (msg._||{}).user = at.user || security; // already been through firewall, does not need to again on out.
          to.next(msg);
        };
        Gun.obj.map(msg.put, each.node);
        each.end({end: each.end.ed = true});
        return; // need to manually call next after async.
      }
      to.next(msg); // pass forward any data we do not know how to handle or process (this allows custom security protocols).
    }
    SEA.opt.pub = function(s){
      if(!s){ return }
      s = s.split('~');
      if(!s || !(s = s[1])){ return }
      s = s.split('.');
      if(!s || 2 > s.length){ return }
      if('@' === (s[0]||'')[0]){ return } // TODO: Should check ~X.Y. are alphanumeric, not just not @.
      s = s.slice(0,2).join('.');
      return s;
    }
    SEA.opt.prep = function(d,k, n,s){ // prep for signing
      return {'#':s,'.':k,':':SEA.opt.parse(d),'>':Gun.state.is(n, k)};
    }
    SEA.opt.pack = function(d,k, n,s){ // pack for verifying
      if(SEA.opt.check(d)){ return d }
      var meta = (Gun.obj.ify((d && d[':'])||d)||''), sig = meta['~'];
      return sig? {m: {'#':s||d['#'],'.':k||d['.'],':':meta[':'],'>':d['>']||Gun.state.is(n, k)}, s: sig} : d;
    }
    var O = SEA.opt;
    SEA.opt.unpack = function(d, k, n){ var tmp;
      if(u === d){ return }
      if(d && (u !== (tmp = d[':']))){ return tmp }
      k = k || O.fall_key; if(!n && O.fall_val){ n = {}; n[k] = O.fall_val }
      if(!k || !n){ return }
      if(d === n[k]){ return d }
      if(!SEA.opt.check(n[k])){ return d }
      var soul = Gun.node.soul(n) || O.fall_soul, s = Gun.state.is(n, k) || O.fall_state;
      if(d && 4 === d.length && soul === d[0] && k === d[1] && fl(s) === fl(d[3])){
        return d[2];
      }
      if(s < SEA.opt.shuffle_attack){
        return d;
      }
    }
    SEA.opt.shuffle_attack = 1546329600000; // Jan 1, 2019
    var noop = function(){}, u;
    var fl = Math.floor; // TODO: Still need to fix inconsistent state issue.
    var rel_is = Gun.val.rel.is;
    var obj_ify = Gun.obj.ify;
    // TODO: Potential bug? If pub/priv key starts with `-`? IDK how possible.

  })(USE, './index');
}());

;(function(){

  /* UNBUILD */
  function USE(arg, req){
    return req? require(arg) : arg.slice? USE[R(arg)] : function(mod, path){
      arg(mod = {exports: {}});
      USE[R(path)] = mod.exports;
    }
    function R(p){
      return p.split('/').slice(-1).toString().replace('.js','');
    }
  }
  if(typeof module !== "undefined"){ var MODULE = module }
  /* UNBUILD */

	;USE(function(module){
		// Generic javascript utilities.
		var Type = {};
		//Type.fns = Type.fn = {is: function(fn){ return (!!fn && fn instanceof Function) }}
		Type.fn = {is: function(fn){ return (!!fn && 'function' == typeof fn) }}
		Type.bi = {is: function(b){ return (b instanceof Boolean || typeof b == 'boolean') }}
		Type.num = {is: function(n){ return !list_is(n) && ((n - parseFloat(n) + 1) >= 0 || Infinity === n || -Infinity === n) }}
		Type.text = {is: function(t){ return (typeof t == 'string') }}
		Type.text.ify = function(t){
			if(Type.text.is(t)){ return t }
			if(typeof JSON !== "undefined"){ return JSON.stringify(t) }
			return (t && t.toString)? t.toString() : t;
		}
		Type.text.random = function(l, c){
			var s = '';
			l = l || 24; // you are not going to make a 0 length random number, so no need to check type
			c = c || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz';
			while(l > 0){ s += c.charAt(Math.floor(Math.random() * c.length)); l-- }
			return s;
		}
		Type.text.match = function(t, o){ var tmp, u;
			if('string' !== typeof t){ return false }
			if('string' == typeof o){ o = {'=': o} }
			o = o || {};
			tmp = (o['='] || o['*'] || o['>'] || o['<']);
			if(t === tmp){ return true }
			if(u !== o['=']){ return false }
			tmp = (o['*'] || o['>'] || o['<']);
			if(t.slice(0, (tmp||'').length) === tmp){ return true }
			if(u !== o['*']){ return false }
			if(u !== o['>'] && u !== o['<']){
				return (t >= o['>'] && t <= o['<'])? true : false;
			}
			if(u !== o['>'] && t >= o['>']){ return true }
			if(u !== o['<'] && t <= o['<']){ return true }
			return false;
		}
		Type.list = {is: function(l){ return (l instanceof Array) }}
		Type.list.slit = Array.prototype.slice;
		Type.list.sort = function(k){ // creates a new sort function based off some key
			return function(A,B){
				if(!A || !B){ return 0 } A = A[k]; B = B[k];
				if(A < B){ return -1 }else if(A > B){ return 1 }
				else { return 0 }
			}
		}
		Type.list.map = function(l, c, _){ return obj_map(l, c, _) }
		Type.list.index = 1; // change this to 0 if you want non-logical, non-mathematical, non-matrix, non-convenient array notation
		Type.obj = {is: function(o){ return o? (o instanceof Object && o.constructor === Object) || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === 'Object' : false }}
		Type.obj.put = function(o, k, v){ return (o||{})[k] = v, o }
		Type.obj.has = function(o, k){ return o && Object.prototype.hasOwnProperty.call(o, k) }
		Type.obj.del = function(o, k){
			if(!o){ return }
			o[k] = null;
			delete o[k];
			return o;
		}
		Type.obj.as = function(o, k, v, u){ return o[k] = o[k] || (u === v? {} : v) }
		Type.obj.ify = function(o){
			if(obj_is(o)){ return o }
			try{o = JSON.parse(o);
			}catch(e){o={}};
			return o;
		}
		;(function(){ var u;
			function map(v,k){
				if(obj_has(this,k) && u !== this[k]){ return }
				this[k] = v;
			}
			Type.obj.to = function(from, to){
				to = to || {};
				obj_map(from, map, to);
				return to;
			}
		}());
		Type.obj.copy = function(o){ // because http://web.archive.org/web/20140328224025/http://jsperf.com/cloning-an-object/2
			return !o? o : JSON.parse(JSON.stringify(o)); // is shockingly faster than anything else, and our data has to be a subset of JSON anyways!
		}
		;(function(){
			function empty(v,i){ var n = this.n, u;
				if(n && (i === n || (obj_is(n) && obj_has(n, i)))){ return }
				if(u !== i){ return true }
			}
			Type.obj.empty = function(o, n){
				if(!o){ return true }
				return obj_map(o,empty,{n:n})? false : true;
			}
		}());
		;(function(){
			function t(k,v){
				if(2 === arguments.length){
					t.r = t.r || {};
					t.r[k] = v;
					return;
				} t.r = t.r || [];
				t.r.push(k);
			};
			var keys = Object.keys, map, u;
			Object.keys = Object.keys || function(o){ return map(o, function(v,k,t){t(k)}) }
			Type.obj.map = map = function(l, c, _){
				var u, i = 0, x, r, ll, lle, f = 'function' == typeof c;
				t.r = u;
				if(keys && obj_is(l)){
					ll = keys(l); lle = true;
				}
				_ = _ || {};
				if(list_is(l) || ll){
					x = (ll || l).length;
					for(;i < x; i++){
						var ii = (i + Type.list.index);
						if(f){
							r = lle? c.call(_, l[ll[i]], ll[i], t) : c.call(_, l[i], ii, t);
							if(r !== u){ return r }
						} else {
							//if(Type.test.is(c,l[i])){ return ii } // should implement deep equality testing!
							if(c === l[lle? ll[i] : i]){ return ll? ll[i] : ii } // use this for now
						}
					}
				} else {
					for(i in l){
						if(f){
							if(obj_has(l,i)){
								r = _? c.call(_, l[i], i, t) : c(l[i], i, t);
								if(r !== u){ return r }
							}
						} else {
							//if(a.test.is(c,l[i])){ return i } // should implement deep equality testing!
							if(c === l[i]){ return i } // use this for now
						}
					}
				}
				return f? t.r : Type.list.index? 0 : -1;
			}
		}());
		Type.time = {};
		Type.time.is = function(t){ return t? t instanceof Date : (+new Date().getTime()) }

		var fn_is = Type.fn.is;
		var list_is = Type.list.is;
		var obj = Type.obj, obj_is = obj.is, obj_has = obj.has, obj_map = obj.map;
		module.exports = Type;
	})(USE, './type');

	;USE(function(module){
		// On event emitter generic javascript utility.
		module.exports = function onto(tag, arg, as){
			if(!tag){ return {to: onto} }
			var u, tag = (this.tag || (this.tag = {}))[tag] ||
			(this.tag[tag] = {tag: tag, to: onto._ = {
				next: function(arg){ var tmp;
					if((tmp = this.to)){
						tmp.next(arg);
				}}
			}});
			if('function' == typeof arg){
				var be = {
					off: onto.off ||
					(onto.off = function(){
						if(this.next === onto._.next){ return !0 }
						if(this === this.the.last){
							this.the.last = this.back;
						}
						this.to.back = this.back;
						this.next = onto._.next;
						this.back.to = this.to;
						if(this.the.last === this.the){
							delete this.on.tag[this.the.tag];
						}
					}),
					to: onto._,
					next: arg,
					the: tag,
					on: this,
					as: as,
				};
				(be.back = tag.last || tag).to = be;
				return tag.last = be;
			}
			if((tag = tag.to) && u !== arg){ tag.next(arg) }
			return tag;
		};
	})(USE, './onto');

	;USE(function(module){
		var to = (typeof setImmediate !== "undefined")? setImmediate : setTimeout, puff = function(cb){
			if(Q.length){ Q.push(cb); return } Q = [cb];
			to(function go(S){ S = S || +new Date;
				var i = 0, cb; while(i < 9 && (cb = Q[i++])){ cb() }
				console.STAT && console.STAT(S, +new Date - S, 'puff');
				if(cb && !(+new Date - S)){ return go(S) }
				if(!(Q = Q.slice(i)).length){ return }
				to(go, 0);
			}, 0);
		}, Q = [];
		module.exports = setTimeout.puff = puff;
	})(USE, './puff');

	;USE(function(module){
		/* Based on the Hypothetical Amnesia Machine thought experiment */
		function HAM(machineState, incomingState, currentState, incomingValue, currentValue){
			if(machineState < incomingState){
				return {defer: true}; // the incoming value is outside the boundary of the machine's state, it must be reprocessed in another state.
			}
			if(incomingState < currentState){
				return {historical: true}; // the incoming value is within the boundary of the machine's state, but not within the range.

			}
			if(currentState < incomingState){
				return {converge: true, incoming: true}; // the incoming value is within both the boundary and the range of the machine's state.

			}
			if(incomingState === currentState){
				incomingValue = Lexical(incomingValue) || "";
				currentValue = Lexical(currentValue) || "";
				if(incomingValue === currentValue){ // Note: while these are practically the same, the deltas could be technically different
					return {state: true};
				}
				/*
					The following is a naive implementation, but will always work.
					Never change it unless you have specific needs that absolutely require it.
					If changed, your data will diverge unless you guarantee every peer's algorithm has also been changed to be the same.
					As a result, it is highly discouraged to modify despite the fact that it is naive,
					because convergence (data integrity) is generally more important.
					Any difference in this algorithm must be given a new and different name.
				*/
				if(incomingValue < currentValue){ // Lexical only works on simple value types!
					return {converge: true, current: true};
				}
				if(currentValue < incomingValue){ // Lexical only works on simple value types!
					return {converge: true, incoming: true};
				}
			}
			return {err: "Invalid CRDT Data: "+ incomingValue +" to "+ currentValue +" at "+ incomingState +" to "+ currentState +"!"};
		}
		if(typeof JSON === 'undefined'){
			throw new Error(
				'JSON is not included in this browser. Please load it first: ' +
				'ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js'
			);
		}
		var Lexical = JSON.stringify, undefined;
		module.exports = HAM;
	})(USE, './HAM');

	;USE(function(module){
		var Type = USE('./type');
		var Val = {};
		Val.is = function(v){ // Valid values are a subset of JSON: null, binary, number (!Infinity), text, or a soul relation. Arrays need special algorithms to handle concurrency, so they are not supported directly. Use an extension that supports them if needed but research their problems first.
			if(v === u){ return false }
			if(v === null){ return true } // "deletes", nulling out keys.
			if(v === Infinity){ return false } // we want this to be, but JSON does not support it, sad face.
			if(text_is(v) // by "text" we mean strings.
			|| bi_is(v) // by "binary" we mean boolean.
			|| num_is(v)){ // by "number" we mean integers or decimals.
				return true; // simple values are valid.
			}
			return Val.link.is(v) || false; // is the value a soul relation? Then it is valid and return it. If not, everything else remaining is an invalid data type. Custom extensions can be built on top of these primitives to support other types.
		}
		Val.link = Val.rel = {_: '#'};
		;(function(){
			Val.link.is = function(v){ // this defines whether an object is a soul relation or not, they look like this: {'#': 'UUID'}
				if(v && v[rel_] && !v._ && obj_is(v)){ // must be an object.
					var o = {};
					obj_map(v, map, o);
					if(o.id){ // a valid id was found.
						return o.id; // yay! Return it.
					}
				}
				return false; // the value was not a valid soul relation.
			}
			function map(s, k){ var o = this; // map over the object...
				if(o.id){ return o.id = false } // if ID is already defined AND we're still looping through the object, it is considered invalid.
				if(k == rel_ && text_is(s)){ // the key should be '#' and have a text value.
					o.id = s; // we found the soul!
				} else {
					return o.id = false; // if there exists anything else on the object that isn't the soul, then it is considered invalid.
				}
			}
		}());
		Val.link.ify = function(t){ return obj_put({}, rel_, t) } // convert a soul into a relation and return it.
		Type.obj.has._ = '.';
		var rel_ = Val.link._, u;
		var bi_is = Type.bi.is;
		var num_is = Type.num.is;
		var text_is = Type.text.is;
		var obj = Type.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
		module.exports = Val;
	})(USE, './val');

	;USE(function(module){
		var Type = USE('./type');
		var Val = USE('./val');
		var Node = {_: '_'};
		Node.soul = function(n, o){ return (n && n._ && n._[o || soul_]) } // convenience function to check to see if there is a soul on a node and return it.
		Node.soul.ify = function(n, o){ // put a soul on an object.
			o = (typeof o === 'string')? {soul: o} : o || {};
			n = n || {}; // make sure it exists.
			n._ = n._ || {}; // make sure meta exists.
			n._[soul_] = o.soul || n._[soul_] || text_random(); // put the soul on it.
			return n;
		}
		Node.soul._ = Val.link._;
		;(function(){
			Node.is = function(n, cb, as){ var s; // checks to see if an object is a valid node.
				if(!obj_is(n)){ return false } // must be an object.
				if(s = Node.soul(n)){ // must have a soul on it.
					return !obj_map(n, map, {as:as,cb:cb,s:s,n:n});
				}
				return false; // nope! This was not a valid node.
			}
			function map(v, k){ // we invert this because the way we check for this is via a negation.
				if(k === Node._){ return } // skip over the metadata.
				if(!Val.is(v)){ return true } // it is true that this is an invalid node.
				if(this.cb){ this.cb.call(this.as, v, k, this.n, this.s) } // optionally callback each key/value.
			}
		}());
		;(function(){
			Node.ify = function(obj, o, as){ // returns a node from a shallow object.
				if(!o){ o = {} }
				else if(typeof o === 'string'){ o = {soul: o} }
				else if('function' == typeof o){ o = {map: o} }
				if(o.map){ o.node = o.map.call(as, obj, u, o.node || {}) }
				if(o.node = Node.soul.ify(o.node || {}, o)){
					obj_map(obj, map, {o:o,as:as});
				}
				return o.node; // This will only be a valid node if the object wasn't already deep!
			}
			function map(v, k){ var o = this.o, tmp, u; // iterate over each key/value.
				if(o.map){
					tmp = o.map.call(this.as, v, ''+k, o.node);
					if(u === tmp){
						obj_del(o.node, k);
					} else
					if(o.node){ o.node[k] = tmp }
					return;
				}
				if(Val.is(v)){
					o.node[k] = v;
				}
			}
		}());
		var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_map = obj.map;
		var text = Type.text, text_random = text.random;
		var soul_ = Node.soul._;
		var u;
		module.exports = Node;
	})(USE, './node');

	;USE(function(module){
		var Type = USE('./type');
		var Node = USE('./node');
		function State(){
			var t;
			/*if(perf){
				t = start + perf.now(); // Danger: Accuracy decays significantly over time, even if precise.
			} else {*/
				t = +new Date;
			//}
			if(last < t){
				return N = 0, last = t + State.drift;
			}
			return last = t + ((N += 1) / D) + State.drift;
		}
		var time = Type.time.is, last = -Infinity, N = 0, D = 1000; // WARNING! In the future, on machines that are D times faster than 2016AD machines, you will want to increase D by another several orders of magnitude so the processing speed never out paces the decimal resolution (increasing an integer effects the state accuracy).
		var perf = (typeof performance !== 'undefined')? (performance.timing && performance) : false, start = (perf && perf.timing && perf.timing.navigationStart) || (perf = false);
		var S_ = State._ = '>';
		State.drift = 0;
		State.is = function(n, k, o){ // convenience function to get the state on a key on a node and return it.
			var tmp = (k && n && n[N_] && n[N_][S_]) || o;
			if(!tmp){ return }
			return num_is(tmp = tmp[k])? tmp : -Infinity;
		}
		State.lex = function(){ return State().toString(36).replace('.','') }
		State.ify = function(n, k, s, v, soul){ // put a key's state on a node.
			if(!n || !n[N_]){ // reject if it is not node-like.
				if(!soul){ // unless they passed a soul
					return;
				}
				n = Node.soul.ify(n, soul); // then make it so!
			}
			var tmp = obj_as(n[N_], S_); // grab the states data.
			if(u !== k && k !== N_){
				if(num_is(s)){
					tmp[k] = s; // add the valid state.
				}
				if(u !== v){ // Note: Not its job to check for valid values!
					n[k] = v;
				}
			}
			return n;
		}
		State.to = function(from, k, to){
			var val = (from||{})[k];
			if(obj_is(val)){
				val = obj_copy(val);
			}
			return State.ify(to, k, State.is(from, k), val, Node.soul(from));
		}
		;(function(){
			State.map = function(cb, s, as){ var u; // for use with Node.ify
				var o = obj_is(o = cb || s)? o : null;
				cb = fn_is(cb = cb || s)? cb : null;
				if(o && !cb){
					s = num_is(s)? s : State();
					o[N_] = o[N_] || {};
					obj_map(o, map, {o:o,s:s});
					return o;
				}
				as = as || obj_is(s)? s : u;
				s = num_is(s)? s : State();
				return function(v, k, o, opt){
					if(!cb){
						map.call({o: o, s: s}, v,k);
						return v;
					}
					cb.call(as || this || {}, v, k, o, opt);
					if(obj_has(o,k) && u === o[k]){ return }
					map.call({o: o, s: s}, v,k);
				}
			}
			function map(v,k){
				if(N_ === k){ return }
				State.ify(this.o, k, this.s) ;
			}
		}());
		var obj = Type.obj, obj_as = obj.as, obj_has = obj.has, obj_is = obj.is, obj_map = obj.map, obj_copy = obj.copy;
		var num = Type.num, num_is = num.is;
		var fn = Type.fn, fn_is = fn.is;
		var N_ = Node._, u;
		module.exports = State;
	})(USE, './state');

	;USE(function(module){
		var Type = USE('./type');
		var Val = USE('./val');
		var Node = USE('./node');
		var Graph = {};
		;(function(){
			Graph.is = function(g, cb, fn, as){ // checks to see if an object is a valid graph.
				if(!g || !obj_is(g) || obj_empty(g)){ return false } // must be an object.
				return !obj_map(g, map, {cb:cb,fn:fn,as:as}); // makes sure it wasn't an empty object.
			}
			function map(n, s){ // we invert this because the way'? we check for this is via a negation.
				if(!n || s !== Node.soul(n) || !Node.is(n, this.fn, this.as)){ return true } // it is true that this is an invalid graph.
				if(!this.cb){ return }
				nf.n = n; nf.as = this.as; // sequential race conditions aren't races.
				this.cb.call(nf.as, n, s, nf);
			}
			function nf(fn){ // optional callback for each node.
				if(fn){ Node.is(nf.n, fn, nf.as) } // where we then have an optional callback for each key/value.
			}
		}());
		;(function(){
			Graph.ify = function(obj, env, as){
				var at = {path: [], obj: obj};
				if(!env){
					env = {};
				} else
				if(typeof env === 'string'){
					env = {soul: env};
				} else
				if('function' == typeof env){
					env.map = env;
				}
				if(typeof as === 'string'){
					env.soul = env.soul || as;
					as = u;
				}
				if(env.soul){
					at.link = Val.link.ify(env.soul);
				}
				env.shell = (as||{}).shell;
				env.graph = env.graph || {};
				env.seen = env.seen || [];
				env.as = env.as || as;
				node(env, at);
				env.root = at.node;
				return env.graph;
			}
			function node(env, at){ var tmp;
				if(tmp = seen(env, at)){ return tmp }
				at.env = env;
				at.soul = soul;
				if(Node.ify(at.obj, map, at)){
					at.link = at.link || Val.link.ify(Node.soul(at.node));
					if(at.obj !== env.shell){
						env.graph[Val.link.is(at.link)] = at.node;
					}
				}
				return at;
			}
			function map(v,k,n){
				var at = this, env = at.env, is, tmp;
				if(Node._ === k && obj_has(v,Val.link._)){
					return n._; // TODO: Bug?
				}
				if(!(is = valid(v,k,n, at,env))){ return }
				if(!k){
					at.node = at.node || n || {};
					if(obj_has(v, Node._) && Node.soul(v)){ // ? for safety ?
						at.node._ = obj_copy(v._);
					}
					at.node = Node.soul.ify(at.node, Val.link.is(at.link));
					at.link = at.link || Val.link.ify(Node.soul(at.node));
				}
				if(tmp = env.map){
					tmp.call(env.as || {}, v,k,n, at);
					if(obj_has(n,k)){
						v = n[k];
						if(u === v){
							obj_del(n, k);
							return;
						}
						if(!(is = valid(v,k,n, at,env))){ return }
					}
				}
				if(!k){ return at.node }
				if(true === is){
					return v;
				}
				tmp = node(env, {obj: v, path: at.path.concat(k)});
				if(!tmp.node){ return }
				return tmp.link; //{'#': Node.soul(tmp.node)};
			}
			function soul(id){ var at = this;
				var prev = Val.link.is(at.link), graph = at.env.graph;
				at.link = at.link || Val.link.ify(id);
				at.link[Val.link._] = id;
				if(at.node && at.node[Node._]){
					at.node[Node._][Val.link._] = id;
				}
				if(obj_has(graph, prev)){
					graph[id] = graph[prev];
					obj_del(graph, prev);
				}
			}
			function valid(v,k,n, at,env){ var tmp;
				if(Val.is(v)){ return true }
				if(obj_is(v)){ return 1 }
				if(tmp = env.invalid){
					v = tmp.call(env.as || {}, v,k,n);
					return valid(v,k,n, at,env);
				}
				env.err = "Invalid value at '" + at.path.concat(k).join('.') + "'!";
				if(Type.list.is(v)){ env.err += " Use `.set(item)` instead of an Array." }
			}
			function seen(env, at){
				var arr = env.seen, i = arr.length, has;
				while(i--){ has = arr[i];
					if(at.obj === has.obj){ return has }
				}
				arr.push(at);
			}
		}());
		Graph.node = function(node){
			var soul = Node.soul(node);
			if(!soul){ return }
			return obj_put({}, soul, node);
		}
		;(function(){
			Graph.to = function(graph, root, opt){
				if(!graph){ return }
				var obj = {};
				opt = opt || {seen: {}};
				obj_map(graph[root], map, {obj:obj, graph: graph, opt: opt});
				return obj;
			}
			function map(v,k){ var tmp, obj;
				if(Node._ === k){
					if(obj_empty(v, Val.link._)){
						return;
					}
					this.obj[k] = obj_copy(v);
					return;
				}
				if(!(tmp = Val.link.is(v))){
					this.obj[k] = v;
					return;
				}
				if(obj = this.opt.seen[tmp]){
					this.obj[k] = obj;
					return;
				}
				this.obj[k] = this.opt.seen[tmp] = Graph.to(this.graph, tmp, this.opt);
			}
		}());
		var fn_is = Type.fn.is;
		var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_has = obj.has, obj_empty = obj.empty, obj_put = obj.put, obj_map = obj.map, obj_copy = obj.copy;
		var u;
		module.exports = Graph;
	})(USE, './graph');

	;USE(function(module){
		// request / response module, for asking and acking messages.
		USE('./onto'); // depends upon onto!
		module.exports = function ask(cb, as){
			if(!this.on){ return }
			if(!('function' == typeof cb)){
				if(!cb || !as){ return }
				var id = cb['#'] || cb, tmp = (this.tag||'')[id];
				if(!tmp){ return }
				tmp = this.on(id, as);
				clearTimeout(tmp.err);
				return true;
			}
			var id = (as && as['#']) || Math.random().toString(36).slice(2);
			if(!cb){ return id }
			var to = this.on(id, cb, as);
			to.err = to.err || setTimeout(function(){
				to.next({err: "Error: No ACK yet.", lack: true});
				to.off();
			}, (this.opt||{}).lack || 9000);
			return id;
		}
	})(USE, './ask');

	;USE(function(module){
		var Type = USE('./type');
		function Dup(opt){
			var dup = {s:{}}, s = dup.s;
			opt = opt || {max: 1000, age: /*1000 * 9};//*/ 1000 * 9 * 3};
			dup.check = function(id){
				if(!s[id]){ return false }
				return dt(id);
			}
			var dt = dup.track = function(id){
				var it = s[id] || (s[id] = {});
				it.was = +new Date;
				if(!dup.to){ dup.to = setTimeout(dup.drop, opt.age + 9) }
				return it;
			}
			dup.drop = function(age){
				var now = +new Date;
				Type.obj.map(s, function(it, id){
					if(it && (age || opt.age) > (now - it.was)){ return }
					delete s[id];
				});
				dup.to = null;
				console.STAT && (age = +new Date - now) > 9 && console.STAT(now, age, 'dup drop');
			}
			return dup;
		}
		module.exports = Dup;
	})(USE, './dup');

	;USE(function(module){

		function Gun(o){
			if(o instanceof Gun){ return (this._ = {$: this}).$ }
			if(!(this instanceof Gun)){ return new Gun(o) }
			return Gun.create(this._ = {$: this, opt: o});
		}

		Gun.is = function($){ return ($ instanceof Gun) || ($ && $._ && ($ === $._.$)) || false }

		Gun.version = 0.2020;

		Gun.chain = Gun.prototype;
		Gun.chain.toJSON = function(){};

		var Type = USE('./type');
		Type.obj.to(Type, Gun);
		Gun.HAM = USE('./HAM');
		Gun.val = USE('./val');
		Gun.node = USE('./node');
		Gun.state = USE('./state');
		Gun.graph = USE('./graph');
		Gun.on = USE('./onto');
		Gun.ask = USE('./ask');
		Gun.dup = USE('./dup');
		Gun.puff = USE('./puff');

		;(function(){
			Gun.create = function(at){
				at.root = at.root || at;
				at.graph = at.graph || {};
				at.on = at.on || Gun.on;
				at.ask = at.ask || Gun.ask;
				at.dup = at.dup || Gun.dup();
				var gun = at.$.opt(at.opt);
				if(!at.once){
					at.on('in', universe, at);
					at.on('out', universe, at);
					at.on('put', map, at);
					Gun.on('create', at);
					at.on('create', at);
				}
				at.once = 1;
				return gun;
			}
			function universe(msg){
				if(!msg){ return }
				if(msg.out === universe){ this.to.next(msg); return }
				var eve = this, as = eve.as, at = as.at || as, gun = at.$, dup = at.dup, tmp, DBG = msg.DBG;
				(tmp = msg['#']) || (tmp = msg['#'] = text_rand(9));
				if(dup.check(tmp)){ return } dup.track(tmp);
				tmp = msg._; msg._ = ('function' == typeof tmp)? tmp : function(){};
				(msg.$ && (msg.$ === (msg.$._||'').$)) || (msg.$ = gun);
				if(!at.ask(msg['@'], msg)){ // is this machine listening for an ack?
					DBG && (DBG.u = +new Date);
					if(msg.get){ Gun.on._get(msg, gun) }
					if(msg.put){ put(msg); return }
				}
				DBG && (DBG.uc = +new Date);
				eve.to.next(msg);
				DBG && (DBG.ua = +new Date);
				msg.out = universe; at.on('out', msg);
				DBG && (DBG.ue = +new Date);
			}
			function put(msg){
				if(!msg){ return }
				var ctx = msg._||'', root = ctx.root = ((msg.$||'')._||'').root;
				var put = msg.put, id = msg['#'], err, tmp;
				var DBG = ctx.DBG = msg.DBG;
				if(put['#']){ root.on('put', msg); return }
				/*root.on(id, function(m){
					console.log('ack:', m);
				});*/
				ctx.out = msg;
				ctx.lot = {s: 0, more: 1};
				var S = +new Date;
				DBG && (DBG.p = S);
				for(var soul in put){ // Gun.obj.native() makes this safe.
					var node = put[soul], states;
					if(!node){ err = ERR+cut(soul)+"no node."; break }
					if(!(tmp = node._)){ err = ERR+cut(soul)+"no meta."; break }
					if(soul !== tmp[_soul]){ err = ERR+cut(soul)+"soul not same."; break }
					if(!(states = tmp[state_])){ err = ERR+cut(soul)+"no state."; break }
					for(var key in node){ // double loop uncool, but have to support old format.
						if(node_ === key){ continue }
						var val = node[key], state = states[key];
						if(u === state){ err = ERR+cut(key)+"on"+cut(soul)+"no state."; break }
						if(!val_is(val)){ err = ERR+cut(key)+"on"+cut(soul)+"bad "+(typeof val)+cut(val); break }
						ham(val, key, soul, state, msg);
					}
					if(err){ break }
				}
				DBG && (DBG.pe = +new Date);
				if(console.STAT){ console.STAT(S, +new Date - S, 'mix');console.STAT(S, ctx.lot.s, 'mix #') }
				if(ctx.err = err){ root.on('in', {'@': id, err: Gun.log(err)}); return }
				if(!(--ctx.lot.more)){ fire(ctx) } // if synchronous.
				if(!ctx.stun && !msg['@']){ root.on('in', {'@': id, ok: -1}) } // in case no diff sent to storage, etc., still ack.
			} Gun.on.put = put;
			function ham(val, key, soul, state, msg){
				var ctx = msg._||'', root = ctx.root, graph = root.graph, lot;
				var vertex = graph[soul] || empty, was = state_is(vertex, key, 1), known = vertex[key];
				var machine = State(), is = HAM(machine, state, was, val, known), u;
				if(!is.incoming){
					if(is.defer){
						var to = state - machine;
						setTimeout(function(){
							ham(val, key, soul, state, msg);
						}, to > MD? MD : to); // setTimeout Max Defer 32bit :(
						if(!ctx.to){ root.on('in', {'@': msg['#'], err: to}) } ctx.to = 1;
						return to;
					}
					return;
				}
				(lot = ctx.lot||'').s++; lot.more++;
				(ctx.stun || (ctx.stun = {}))[soul+key] = 1;
				var DBG = ctx.DBG; DBG && (DBG.ph = DBG.ph || +new Date);
				root.on('put', {'#': msg['#'], '@': msg['@'], put: {'#': soul, '.': key, ':': val, '>': state}, _: ctx});
			}
			function map(msg){
				var DBG; if(DBG = (msg._||'').DBG){ DBG.pa = +new Date; DBG.pm = DBG.pm || +new Date}
      	var eve = this, root = eve.as, graph = root.graph, ctx = msg._, put = msg.put, soul = put['#'], key = put['.'], val = put[':'], state = put['>'], id = msg['#'], tmp;
				graph[soul] = state_ify(graph[soul], key, state, val, soul); // TODO: Only put in graph if subscribed? Relays vs Browsers?
				chain(ctx, soul, key, (u !== (tmp = put['=']))? tmp : val, state); // TODO: This should NOT be how the API works, this should be done at an extension layer, but hacky solution to migrate with old code for now.
				if((tmp = ctx.out) && (tmp = tmp.put)){
					tmp[soul] = state_ify(tmp[soul], key, state, val, soul); // TODO: Hacky, fix & come back later, for actual pushing messages.
				}
				if(!(--ctx.lot.more)){ fire(ctx) }
				eve.to.next(msg);
			}
			function chain(ctx, soul, key,val, state){
				var root = ctx.root, put, tmp;
				(root.opt||'').super && root.$.get(soul); // I think we need super for now, but since we are rewriting, should consider getting rid of it.
				if(!root || !(tmp = root.next) || !(tmp = tmp[soul]) || !tmp.$){ return }
				(put = ctx.put || (ctx.put = {}))[soul] = state_ify(put[soul], key, state, val, soul);
				tmp.put = state_ify(tmp.put, key, state, val, soul);
			}
			function fire(ctx){
				if(ctx.err){ return }
				var stop = {};
				var root = ctx.root, next = root.next||'', put = ctx.put, tmp;
				var S = +new Date;
				//Gun.graph.is(put, function(node, soul){
				for(var soul in put){ var node = put[soul]; // Gun.obj.native() makes this safe.
					if(!(tmp = next[soul]) || !tmp.$){ continue }
					root.stop = stop; // temporary fix till a better solution?
					tmp.on('in', {$: tmp.$, get: soul, put: node});
					root.stop = null; // temporary fix till a better solution?
				}
				console.STAT && console.STAT(S, +new Date - S, 'fire');
				ctx.DBG && (ctx.DBG.f = +new Date);
				if(!(tmp = ctx.out)){ return }
				tmp.out = universe;
				root.on('out', tmp);
			}
			var ERR = "Error: Invalid graph!";
			var cut = function(s){ return " '"+(''+s).slice(0,9)+"...' " }
			var HAM = Gun.HAM, MD = 2147483647, State = Gun.state;
		}());

		;(function(){
			Gun.on._put = function(msg, gun){
				var at = gun._, ctx = {$: gun, graph: at.graph, put: {}, map: {}, souls: {}, machine: Gun.state(), ack: msg['@'], cat: at, stop: {}};
				if(!Gun.obj.map(msg.put, perf, ctx)){ return } // HNPERF: performance test, not core code, do not port.
				if(!Gun.graph.is(msg.put, null, verify, ctx)){ ctx.err = "Error: Invalid graph!" }
				if(ctx.err){ return at.on('in', {'@': msg['#'], err: Gun.log(ctx.err) }) }
				obj_map(ctx.put, merge, ctx);
				if(!ctx.async){ obj_map(ctx.map, map, ctx) }
				if(u !== ctx.defer){
					var to = ctx.defer - ctx.machine;
					setTimeout(function(){
						Gun.on._put(msg, gun);
					}, to > MD? MD : to ); // setTimeout Max Defer 32bit :(
				}
				if(!ctx.diff){ return }
				at.on('put', obj_to(msg, {put: ctx.diff}));
			};
			function verify(val, key, node, soul){ var ctx = this;
				var state = Gun.state.is(node, key), tmp;
				if(!state){ return ctx.err = "Error: No state on '"+key+"' in node '"+soul+"'!" }
				var vertex = ctx.graph[soul] || empty, was = Gun.state.is(vertex, key, true), known = vertex[key];
				var HAM = Gun.HAM(ctx.machine, state, was, val, known);
				if(!HAM.incoming){
					if(HAM.defer){ // pick the lowest
						ctx.defer = (state < (ctx.defer || Infinity))? state : ctx.defer;
					}
					return;
				}
				ctx.put[soul] = Gun.state.to(node, key, ctx.put[soul]);
				(ctx.diff || (ctx.diff = {}))[soul] = Gun.state.to(node, key, ctx.diff[soul]);
				ctx.souls[soul] = true;
			}
			function merge(node, soul){
				var ctx = this, cat = ctx.$._, at = (cat.next || empty)[soul];
				if(!at){
					if(!(cat.opt||empty).super){
						ctx.souls[soul] = false;
						return;
					}
					at = (ctx.$.get(soul)._);
				}
				var msg = ctx.map[soul] = {
					put: node,
					get: soul,
					$: at.$
				}, as = {ctx: ctx, msg: msg};
				ctx.async = !!cat.tag.node;
				if(ctx.ack){ msg['@'] = ctx.ack }
				obj_map(node, each, as);
				if(!ctx.async){ return }
				if(!ctx.and){
					// If it is async, we only need to setup one listener per context (ctx)
					cat.on('node', function(m){
						this.to.next(m); // make sure to call other context's listeners.
						if(m !== ctx.map[m.get]){ return } // filter out events not from this context!
						ctx.souls[m.get] = false; // set our many-async flag
						obj_map(m.put, patch, m); // merge into view
						if(obj_map(ctx.souls, function(v){ if(v){ return v } })){ return } // if flag still outstanding, keep waiting.
						if(ctx.c){ return } ctx.c = 1; // failsafe for only being called once per context.
						this.off();
						obj_map(ctx.map, map, ctx); // all done, trigger chains.
					});
				}
				ctx.and = true;
				cat.on('node', msg); // each node on the current context's graph needs to be emitted though.
			}
			function each(val, key){
				var ctx = this.ctx, graph = ctx.graph, msg = this.msg, soul = msg.get, node = msg.put, at = (msg.$._), tmp;
				graph[soul] = Gun.state.to(node, key, graph[soul]);
				if(ctx.async){ return }
				at.put = Gun.state.to(node, key, at.put);
			}
			function patch(val, key){
				var msg = this, node = msg.put, at = (msg.$._);
				at.put = Gun.state.to(node, key, at.put);
			}
			function map(msg, soul){
				if(!msg.$){ return }
				this.cat.stop = this.stop; // temporary fix till a better solution?
				(msg.$._).on('in', msg);
				this.cat.stop = null; // temporary fix till a better solution?
			}
			function perf(node, soul){ if(node !== this.graph[soul]){ return true } } // HNPERF: do not port!

			Gun.on._get = function(msg, gun){
				var root = gun._, get = msg.get, soul = get[_soul], node = root.graph[soul], has = get[_has], tmp;
				var next = root.next || (root.next = {}), at = next[soul];
				// queue concurrent GETs?
				var ctx = msg._||'', DBG = ctx.DBG = msg.DBG;
				DBG && (DBG.g = +new Date);
				if(!node){ return root.on('get', msg) }
				if(has){
					if('string' != typeof has || !obj_has(node, has)){ return root.on('get', msg) }
					node = Gun.state.to(node, has);
					// If we have a key in-memory, do we really need to fetch?
					// Maybe... in case the in-memory key we have is a local write
					// we still need to trigger a pull/merge from peers.
				} else {
					node = Gun.window? Gun.obj.copy(node) : node; // HNPERF: If !browser bump Performance? Is this too dangerous to reference root graph? Copy / shallow copy too expensive for big nodes. Gun.obj.to(node); // 1 layer deep copy // Gun.obj.copy(node); // too slow on big nodes
				}
				node = Gun.graph.node(node);
				tmp = (at||empty).ack;
				var faith = function(){}; faith.ram = faith.faith = true; // HNPERF: We're testing performance improvement by skipping going through security again, but this should be audited.
				DBG && (DBG.ga = +new Date);
				root.on('in', {
					'@': msg['#'],
					put: node,
					ram: 1,
					$: gun,
					_: faith
				});
				DBG && (DBG.gm = +new Date);
				//if(0 < tmp){ return }
				root.on('get', msg);
				DBG && (DBG.gd = +new Date);
			}
		}());

		;(function(){
			Gun.chain.opt = function(opt){
				opt = opt || {};
				var gun = this, at = gun._, tmp = opt.peers || opt;
				if(!obj_is(opt)){ opt = {} }
				if(!obj_is(at.opt)){ at.opt = opt }
				if(text_is(tmp)){ tmp = [tmp] }
				if(list_is(tmp)){
					tmp = obj_map(tmp, function(url, i, map){
						i = {}; i.id = i.url = url; map(url, i);
					});
					if(!obj_is(at.opt.peers)){ at.opt.peers = {}}
					at.opt.peers = obj_to(tmp, at.opt.peers);
				}
				at.opt.peers = at.opt.peers || {};
				obj_map(opt, function each(v,k){
					if(!obj_has(this, k) || text.is(v) || obj.empty(v)){ this[k] = v ; return }
					if(v && v.constructor !== Object && !list_is(v)){ return }
					obj_map(v, each, this[k]);
				}, at.opt);
				Gun.on('opt', at);
				at.opt.uuid = at.opt.uuid || function(){ return state_lex() + text_rand(12) }
				Gun.obj.native();
				return gun;
			}
		}());
		Gun.obj.native = function(){ var p = Object.prototype; for(var i in p){ console.log("Native Object.prototype polluted, reverting", i); delete p[i]; } };

		var list_is = Gun.list.is;
		var text = Gun.text, text_is = text.is, text_rand = text.random;
		var obj = Gun.obj, obj_empty = obj.empty, obj_is = obj.is, obj_has = obj.has, obj_to = obj.to, obj_map = obj.map, obj_copy = obj.copy;
		var state_lex = Gun.state.lex, state_ify = Gun.state.ify, state_is = Gun.state.is, _soul = Gun.val.link._, _has = '.', node_ = Gun.node._, val_is = Gun.val.is, rel_is = Gun.val.link.is, state_ = Gun.state._;
		var empty = {}, u;
		var C;

		Gun.log = function(){ return (!Gun.log.off && C.log.apply(C, arguments)), [].slice.call(arguments).join(' ') };
		Gun.log.once = function(w,s,o){ return (o = Gun.log.once)[w] = o[w] || 0, o[w]++ || Gun.log(s) };

		if(typeof window !== "undefined"){ (window.GUN = window.Gun = Gun).window = window }
		try{ if(typeof MODULE !== "undefined"){ MODULE.exports = Gun } }catch(e){}
		module.exports = Gun;
		
		(Gun.window||'').console = (Gun.window||'').console || {log: function(){}};
		(C = console).only = function(i, s){ return (C.only.i && i === C.only.i && C.only.i++) && (C.log.apply(C, arguments) || s) };

		;"Please do not remove welcome log unless you are paying for a monthly sponsorship, thanks!";
		Gun.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
	})(USE, './root');

	;USE(function(module){
		var Gun = USE('./root');
		Gun.chain.back = function(n, opt){ var tmp;
			n = n || 1;
			if(-1 === n || Infinity === n){
				return this._.root.$;
			} else
			if(1 === n){
				return (this._.back || this._).$;
			}
			var gun = this, at = gun._;
			if(typeof n === 'string'){
				n = n.split('.');
			}
			if(n instanceof Array){
				var i = 0, l = n.length, tmp = at;
				for(i; i < l; i++){
					tmp = (tmp||empty)[n[i]];
				}
				if(u !== tmp){
					return opt? gun : tmp;
				} else
				if((tmp = at.back)){
					return tmp.$.back(n, opt);
				}
				return;
			}
			if('function' == typeof n){
				var yes, tmp = {back: at};
				while((tmp = tmp.back)
				&& u === (yes = n(tmp, opt))){}
				return yes;
			}
			if(Gun.num.is(n)){
				return (at.back || at).$.back(n - 1);
			}
			return this;
		}
		var empty = {}, u;
	})(USE, './back');

	;USE(function(module){
		// WARNING: GUN is very simple, but the JavaScript chaining API around GUN
		// is complicated and was extremely hard to build. If you port GUN to another
		// language, consider implementing an easier API to build.
		var Gun = USE('./root');
		Gun.chain.chain = function(sub){
			var gun = this, at = gun._, chain = new (sub || gun).constructor(gun), cat = chain._, root;
			cat.root = root = at.root;
			cat.id = ++root.once;
			cat.back = gun._;
			cat.on = Gun.on;
			cat.on('in', input, cat); // For 'in' if I add my own listeners to each then I MUST do it before in gets called. If I listen globally for all incoming data instead though, regardless of individual listeners, I can transform the data there and then as well.
			cat.on('out', output, cat); // However for output, there isn't really the global option. I must listen by adding my own listener individually BEFORE this one is ever called.
			return chain;
		}

		function output(msg){
			var put, get, at = this.as, back = at.back, root = at.root, tmp;
			if(!msg.$){ msg.$ = at.$ }
			this.to.next(msg);
			if(get = msg.get){
				/*if(u !== at.put){
					at.on('in', at);
					return;
				}*/
				if(at.lex){ msg.get = obj_to(at.lex, msg.get) }
				if(get['#'] || at.soul){
					get['#'] = get['#'] || at.soul;
					msg['#'] || (msg['#'] = text_rand(9));
					back = (root.$.get(get['#'])._);
					if(!(get = get['.'])){
						tmp = back.ack;
						if(!tmp){ back.ack = -1 }
						if(obj_has(back, 'put')){
							back.on('in', back);
						}
						if(tmp && u !== back.put){ return } //if(tmp){ return }
						msg.$ = back.$;
					} else
					if(obj_has(back.put, get)){ // TODO: support #LEX !
						put = (back.$.get(get)._);
						if(!(tmp = put.ack)){ put.ack = -1 }
						back.on('in', {
							$: back.$,
							put: Gun.state.to(back.put, get),
							get: back.get
						});
						if(tmp){ return }
					} else
					if('string' != typeof get){
						var put = {}, meta = (back.put||{})._;
						Gun.obj.map(back.put, function(v,k){
							if(!Gun.text.match(k, get)){ return }
							put[k] = v;
						})
						if(!Gun.obj.empty(put)){
							put._ = meta;
							back.on('in', {$: back.$, put: put, get: back.get})
						}
						if(tmp = at.lex){
							tmp = (tmp._) || (tmp._ = function(){});
							if(back.ack < tmp.ask){ tmp.ask = back.ack }
							if(tmp.ask){ return }
							tmp.ask = 1;
						}
					}
					root.ask(ack, msg);
					return root.on('in', msg);
				}
				if(root.now){ root.now[at.id] = root.now[at.id] || true; at.pass = {} }
				if(get['.']){
					if(at.get){
						msg = {get: {'.': at.get}, $: at.$};
						//if(back.ask || (back.ask = {})[at.get]){ return }
						(back.ask || (back.ask = {}));
						back.ask[at.get] = msg.$._; // TODO: PERFORMANCE? More elegant way?
						return back.on('out', msg);
					}
					msg = {get: {}, $: at.$};
					return back.on('out', msg);
				}
				at.ack = at.ack || -1;
				if(at.get){
					msg.$ = at.$;
					get['.'] = at.get;
					(back.ask || (back.ask = {}))[at.get] = msg.$._; // TODO: PERFORMANCE? More elegant way?
					return back.on('out', msg);
				}
			}
			return back.on('out', msg);
		}

		function input(msg){
			var eve = this, cat = eve.as, root = cat.root, gun = msg.$, at = (gun||empty)._ || empty, change = msg.put, rel, tmp;
			if(cat.get && msg.get !== cat.get){
				msg = obj_to(msg, {get: cat.get});
			}
			if(cat.has && at !== cat){
				msg = obj_to(msg, {$: cat.$});
				if(at.ack){
					cat.ack = at.ack;
					//cat.ack = cat.ack || at.ack;
				}
			}
			if(u === change){
				tmp = at.put;
				eve.to.next(msg);
				if(cat.soul){ return } // TODO: BUG, I believee the fresh input refactor caught an edge case that a `gun.get('soul').get('key')` that points to a soul that doesn't exist will not trigger val/get etc.
				if(u === tmp && u !== at.put){ return }
				echo(cat, msg, eve);
				if(cat.has){
					not(cat, msg);
				}
				obj_del(at.echo, cat.id);
				obj_del(cat.map, at.id);
				return;
			}
			if(cat.soul){
				eve.to.next(msg);
				echo(cat, msg, eve);
				if(cat.next){ obj_map(change, map, {msg: msg, cat: cat}) }
				return;
			}
			if(!(rel = Gun.val.link.is(change))){
				if(Gun.val.is(change)){
					if(cat.has || cat.soul){
						not(cat, msg);
					} else
					if(at.has || at.soul){
						(at.echo || (at.echo = {}))[cat.id] = at.echo[at.id] || cat;
						(cat.map || (cat.map = {}))[at.id] = cat.map[at.id] || {at: at};
						//if(u === at.put){ return } // Not necessary but improves performance. If we have it but at does not, that means we got things out of order and at will get it. Once at gets it, it will tell us again.
					}
					eve.to.next(msg);
					echo(cat, msg, eve);
					return;
				}
				if(cat.has && at !== cat && obj_has(at, 'put')){
					cat.put = at.put;
				};
				if((rel = Gun.node.soul(change)) && at.has){
					at.put = (cat.root.$.get(rel)._).put;
				}
				tmp = (root.stop || {})[at.id];
				//if(tmp && tmp[cat.id]){ } else {
					eve.to.next(msg);
				//}
				relate(cat, msg, at, rel);
				echo(cat, msg, eve);
				if(cat.next){ obj_map(change, map, {msg: msg, cat: cat}) }
				return;
			}
			var was = root.stop;
			tmp = root.stop || {};
			tmp = tmp[at.id] || (tmp[at.id] = {});
			//if(tmp[cat.id]){ return }
			tmp.is = tmp.is || at.put;
			tmp[cat.id] = at.put || true;
			//if(root.stop){
				eve.to.next(msg)
			//}
			relate(cat, msg, at, rel);
			echo(cat, msg, eve);
		}

		function relate(at, msg, from, rel){
			if(!rel || node_ === at.get){ return }
			var tmp = (at.root.$.get(rel)._);
			if(at.has){
				from = tmp;
			} else
			if(from.has){
				relate(from, msg, from, rel);
			}
			if(from === at){ return }
			if(!from.$){ from = {} }
			(from.echo || (from.echo = {}))[at.id] = from.echo[at.id] || at;
			if(at.has && !(at.map||empty)[from.id]){ // if we haven't seen this before.
				not(at, msg);
			}
			tmp = from.id? ((at.map || (at.map = {}))[from.id] = at.map[from.id] || {at: from}) : {};
			if(rel === tmp.link){
				if(!(tmp.pass || at.pass)){
					return;
				}
			}
			if(at.pass){
				Gun.obj.map(at.map, function(tmp){ tmp.pass = true })
				obj_del(at, 'pass');
			}
			if(tmp.pass){ obj_del(tmp, 'pass') }
			if(at.has){ at.link = rel }
			ask(at, tmp.link = rel);
		}
		function echo(at, msg, ev){
			if(!at.echo){ return } // || node_ === at.get ?
			//if(at.has){ msg = obj_to(msg, {event: ev}) }
			obj_map(at.echo, reverb, msg);
		}
		function reverb(to){
			if(!to || !to.on){ return }
			to.on('in', this);
		}
		function map(data, key){ // Map over only the changes on every update.
			var cat = this.cat, next = cat.next || empty, via = this.msg, chain, at, tmp;
			if(node_ === key && !next[key]){ return }
			if(!(at = next[key])){
				return;
			}
			//if(data && data[_soul] && (tmp = Gun.val.link.is(data)) && (tmp = (cat.root.$.get(tmp)._)) && obj_has(tmp, 'put')){
			//	data = tmp.put;
			//}
			if(at.has){
				//if(!(data && data[_soul] && Gun.val.link.is(data) === Gun.node.soul(at.put))){
				if(u === at.put || !Gun.val.link.is(data)){
					at.put = data;
				}
				chain = at.$;
			} else
			if(tmp = via.$){
				tmp = (chain = via.$.get(key))._;
				if(u === tmp.put || !Gun.val.link.is(data)){
					tmp.put = data;
				}
			}
			at.on('in', {
				put: data,
				get: key,
				$: chain,
				via: via
			});
		}
		function not(at, msg){
			if(!(at.has || at.soul)){ return }
			var tmp = at.map, root = at.root;
			at.map = null;
			if(at.has){
				if(at.dub && at.root.stop){ at.dub = null }
				at.link = null;
			}
			//if(!root.now || !root.now[at.id]){
			if(!at.pass){
				if((!msg['@']) && null === tmp){ return }
				//obj_del(at, 'pass');
			}
			if(u === tmp && Gun.val.link.is(at.put)){ return } // This prevents the very first call of a thing from triggering a "clean up" call. // TODO: link.is(at.put) || !val.is(at.put) ?
			obj_map(tmp, function(proxy){
				if(!(proxy = proxy.at)){ return }
				obj_del(proxy.echo, at.id);
			});
			tmp = at.put;
			obj_map(at.next, function(neat, key){
				if(u === tmp && u !== at.put){ return true }
				neat.put = u;
				if(neat.ack){
					neat.ack = -1; // Shouldn't this be reset to 0? If we do that, SEA test `set user ref should be found` fails, odd.
				}
				neat.on('in', {
					get: key,
					$: neat.$,
					put: u
				});
			});
		}
		function ask(at, soul){
			var tmp = (at.root.$.get(soul)._), lex = at.lex;
			if(at.ack || lex){
				(lex = lex||{})['#'] = soul;
				tmp.on('out', {get: lex});
				if(!at.ask){ return } // TODO: PERFORMANCE? More elegant way?
			}
			tmp = at.ask; Gun.obj.del(at, 'ask');
			obj_map(tmp || at.next, function(neat, key){
				var lex = neat.lex || {}; lex['#'] = soul; lex['.'] = lex['.'] || key;
				neat.on('out', {get: lex});
			});
			Gun.obj.del(at, 'ask'); // TODO: PERFORMANCE? More elegant way?
		}
		function ack(msg, ev){
			var as = this.as, get = as.get||'', at = as.$._, tmp = (msg.put||'')[get['#']];
			if(at.ack){ at.ack = (at.ack + 1) || 1; }
			if(!msg.put || ('string' == typeof get['.'] && !obj_has(tmp, at.get))){
				if(at.put !== u){ return }
				at.on('in', {
					get: at.get,
					put: at.put = u,
					$: at.$,
					'@': msg['@']
				});
				return;
			}
			if(node_ == get['.']){ // is this a security concern?
				at.on('in', {get: at.get, put: Gun.val.link.ify(get['#']), $: at.$, '@': msg['@']});
				return;
			}
			Gun.on.put(msg);
		}
		var empty = {}, u;
		var obj = Gun.obj, obj_has = obj.has, obj_put = obj.put, obj_del = obj.del, obj_to = obj.to, obj_map = obj.map;
		var text_rand = Gun.text.random;
		var _soul = Gun.val.link._, node_ = Gun.node._;
	})(USE, './chain');

	;USE(function(module){
		var Gun = USE('./root');
		Gun.chain.get = function(key, cb, as){
			var gun, tmp;
			if(typeof key === 'string'){
				var back = this, cat = back._;
				var next = cat.next || empty;
				if(!(gun = next[key])){
					gun = cache(key, back);
				}
				gun = gun.$;
			} else
			if('function' == typeof key){
				if(true === cb){ return soul(this, key, cb, as), this }
				gun = this;
				var at = gun._, root = at.root, tmp = root.now, ev;
				as = cb || {};
				as.at = at;
				as.use = key;
				as.out = as.out || {};
				as.out.get = as.out.get || {};
				(ev = at.on('in', use, as)).rid = rid;
				(root.now = {$:1})[as.now = at.id] = ev;
				var mum = root.mum; root.mum = {};
				at.on('out', as.out);
				root.mum = mum;
				root.now = tmp;
				return gun;
			} else
			if(num_is(key)){
				return this.get(''+key, cb, as);
			} else
			if(tmp = rel.is(key)){
				return this.get(tmp, cb, as);
			} else
			if(obj.is(key)){
				gun = this;
				if(tmp = ((tmp = key['#'])||empty)['='] || tmp){ gun = gun.get(tmp) }
				gun._.lex = key;
				return gun;
			} else {
				(as = this.chain())._.err = {err: Gun.log('Invalid get request!', key)}; // CLEAN UP
				if(cb){ cb.call(as, as._.err) }
				return as;
			}
			if(tmp = this._.stun){ // TODO: Refactor?
				gun._.stun = gun._.stun || tmp;
			}
			if(cb && 'function' == typeof cb){
				gun.get(cb, as);
			}
			return gun;
		}
		function cache(key, back){
			var cat = back._, next = cat.next, gun = back.chain(), at = gun._;
			if(!next){ next = cat.next = {} }
			next[at.get = key] = at;
			if(back === cat.root.$){
				at.soul = key;
			} else
			if(cat.soul || cat.has){
				at.has = key;
				//if(obj_has(cat.put, key)){
					//at.put = cat.put[key];
				//}
			}
			return at;
		}
		function soul(gun, cb, opt, as){
			var cat = gun._, acks = 0, tmp;
			if(tmp = cat.soul || cat.link || cat.dub){ return cb(tmp, as, cat) }
			if(cat.jam){ return cat.jam.push([cb, as]) }
			cat.jam = [[cb,as]];
			gun.get(function go(msg, eve){
				if(u === msg.put && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks < tmp){
					return;
				}
				eve.rid(msg);
				var at = ((at = msg.$) && at._) || {}, i = 0, as;
				tmp = cat.jam; delete cat.jam; // tmp = cat.jam.splice(0, 100);
				//if(tmp.length){ process.nextTick(function(){ go(msg, eve) }) }
				while(as = tmp[i++]){ //Gun.obj.map(tmp, function(as, cb){
					var cb = as[0], id; as = as[1];
					cb && cb(id = at.link || at.soul || rel.is(msg.put) || node_soul(msg.put) || at.dub, as, msg, eve);
				} //);
			}, {out: {get: {'.':true}}});
			return gun;
		}
		function use(msg){
			var eve = this, as = eve.as, cat = as.at, root = cat.root, gun = msg.$, at = (gun||{})._ || {}, data = msg.put || at.put, tmp;
			if((tmp = root.now) && eve !== tmp[as.now]){ return eve.to.next(msg) }
			//if(at.async && msg.root){ return }
			//if(at.async === 1 && cat.async !== true){ return }
			//if(root.stop && root.stop[at.id]){ return } root.stop && (root.stop[at.id] = true);
			//if(!at.async && !cat.async && at.put && msg.put === at.put){ return }
			//else if(!cat.async && msg.put !== at.put && root.stop && root.stop[at.id]){ return } root.stop && (root.stop[at.id] = true);


			//root.stop && (root.stop.id = root.stop.id || Gun.text.random(2));
			//if((tmp = root.stop) && (tmp = tmp[at.id] || (tmp[at.id] = {})) && tmp[cat.id]){ return } tmp && (tmp[cat.id] = true);
			if(eve.seen && at.id && eve.seen[at.id]){ return eve.to.next(msg) }
			//if((tmp = root.stop)){ if(tmp[at.id]){ return } tmp[at.id] = msg.root; } // temporary fix till a better solution?
			if((tmp = data) && tmp[rel._] && (tmp = rel.is(tmp))){
				tmp = ((msg.$$ = at.root.$.get(tmp))._);
				if(u !== tmp.put){
					msg = obj_to(msg, {put: data = tmp.put});
				}
			}
			if((tmp = root.mum) && at.id){ // TODO: can we delete mum entirely now?
				var id = at.id + (eve.id || (eve.id = Gun.text.random(9)));
				if(tmp[id]){ return }
				if(u !== data && !rel.is(data)){ tmp[id] = true; }
			}
			as.use(msg, eve);
			if(eve.stun){
				eve.stun = null;
				return;
			}
			eve.to.next(msg);
		}
		function rid(at){
			var cat = this.on;
			if(!at || cat.soul || cat.has){ return this.off() }
			if(!(at = (at = (at = at.$ || at)._ || at).id)){ return }
			var map = cat.map, tmp, seen;
			//if(!map || !(tmp = map[at]) || !(tmp = tmp.at)){ return }
			if(tmp = (seen = this.seen || (this.seen = {}))[at]){ return true }
			seen[at] = true;
			return;
			//tmp.echo[cat.id] = {}; // TODO: Warning: This unsubscribes ALL of this chain's listeners from this link, not just the one callback event.
			//obj.del(map, at); // TODO: Warning: This unsubscribes ALL of this chain's listeners from this link, not just the one callback event.
			return;
		}
		var obj = Gun.obj, obj_map = obj.map, obj_has = obj.has, obj_to = Gun.obj.to;
		var num_is = Gun.num.is;
		var rel = Gun.val.link, node_soul = Gun.node.soul, node_ = Gun.node._;
		var empty = {}, u;
	})(USE, './get');

	;USE(function(module){
		var Gun = USE('./root');
		Gun.chain.put = function(data, cb, as){
			var gun = this, at = (gun._), root = at.root.$, ctx = root._, M = 100, tmp;
			as = as || {};
			as.data = data;
			as.via = as.$ = as.via || as.$ || gun;
			if(typeof cb === 'string'){
				as.soul = cb;
			} else {
				as.ack = as.ack || cb;
			}
			if(at.soul){
				as.soul = at.soul;
			}
			if(as.soul || root === gun){
				if(!obj_is(as.data)){
					(as.ack||noop).call(as, as.out = {err: Gun.log("Data saved to the root level of the graph must be a node (an object), not a", (typeof as.data), 'of "' + as.data + '"!')});
					if(as.res){ as.res() }
					return gun;
				}
				as.soul = as.soul || (as.not = Gun.node.soul(as.data) || (as.via.back('opt.uuid') || Gun.text.random)());
				if(!as.soul){ // polyfill async uuid for SEA
					as.via.back('opt.uuid')(function(err, soul){ // TODO: improve perf without anonymous callback
						if(err){ return Gun.log(err) } // TODO: Handle error!
						(as.ref||as.$).put(as.data, as.soul = soul, as);
					});
					return gun;
				}
				as.$ = root.get(as.soul);
				as.ref = as.$;
				ify(as);
				return gun;
			}
			if(Gun.is(data)){
				data.get(function(soul, o, msg){
					if(!soul){
						return Gun.log("The reference you are saving is a", typeof msg.put, '"'+ msg.put +'", not a node (object)!');
					}
					gun.put(Gun.val.link.ify(soul), cb, as);
				}, true);
				return gun;
			}
			if(at.has && (tmp = Gun.val.link.is(data))){ at.dub = tmp }
			as.ref = as.ref || (root._ === (tmp = at.back))? gun : tmp.$;
			if(as.ref._.soul && Gun.val.is(as.data) && at.get){
				as.data = obj_put({}, at.get, as.data);
				as.ref.put(as.data, as.soul, as);
				return gun;
			}
			as.ref.get(any, true, {as: as});
			if(!as.out){
				// TODO: Perf idea! Make a global lock, that blocks everything while it is on, but if it is on the lock it does the expensive lookup to see if it is a dependent write or not and if not then it proceeds full speed. Meh? For write heavy async apps that would be terrible.
				as.res = as.res || stun; // Gun.on.stun(as.ref); // TODO: BUG! Deal with locking?
				as.$._.stun = as.ref._.stun;
			}
			return gun;
		};
		/*Gun.chain.put = function(data, cb, as){ // don't rewrite! :(
			var gun = this, at = gun._;
			as = as || {};
			as.soul || (as.soul = at.soul || ('string' == typeof cb && cb));
			if(!as.soul){ return get(data, cb, as) }

			return gun;
		}*/

		function ify(as){
			as.batch = batch;
			var opt = as.opt||{}, env = as.env = Gun.state.map(map, opt.state);
			env.soul = as.soul;
			as.graph = Gun.graph.ify(as.data, env, as);
			if(env.err){
				(as.ack||noop).call(as, as.out = {err: Gun.log(env.err)});
				if(as.res){ as.res() }
				return;
			}
			as.batch();
		}

		function stun(cb){
			if(cb){ cb() }
			return;
			var as = this;
			if(!as.ref){ return }
			if(cb){
				as.after = as.ref._.tag;
				as.now = as.ref._.tag = {};
				cb();
				return;
			}
			if(as.after){
				as.ref._.tag = as.after;
			}
		}

		function batch(){ var as = this;
			if(!as.graph || !obj_empty(as.stun)){ return }
			as.res = as.res || function(cb){ if(cb){ cb() } };
			as.res(function(){
				var cat = (as.$.back(-1)._), ask = cat.ask(function(ack){
					cat.root.on('ack', ack);
					if(ack.err){ Gun.log(ack) }
					if(++acks > (as.acks || 0)){ this.off() } // Adjustable ACKs! Only 1 by default.
					if(!as.ack){ return }
					as.ack(ack, this);
					//--C;
				}, as.opt), acks = 0;
				//C++;
				// NOW is a hack to get synchronous replies to correctly call.
				// and STOP is a hack to get async behavior to correctly call.
				// neither of these are ideal, need to be fixed without hacks,
				// but for now, this works for current tests. :/
				var tmp = cat.root.now; obj.del(cat.root, 'now');
				var mum = cat.root.mum; cat.root.mum = {};
				(as.ref._).on('out', {
					$: as.ref, put: as.out = as.env.graph, opt: as.opt, '#': ask
				});
				cat.root.mum = mum? obj.to(mum, cat.root.mum) : mum;
				cat.root.now = tmp;
			}, as);
			if(as.res){ as.res() }
		} function no(v,k){ if(v){ return true } }

		function map(v,k,n, at){ var as = this;
			var is = Gun.is(v);
			if(k || !at.path.length){ return }
			(as.res||iife)(function(){
				var path = at.path, ref = as.ref, opt = as.opt;
				var i = 0, l = path.length;
				for(i; i < l; i++){
					ref = ref.get(path[i]);
				}
				if(is){ ref = v }
				//if(as.not){ (ref._).dub = Gun.text.random() } // This might optimize stuff? Maybe not needed anymore. Make sure it doesn't introduce bugs.
				var id = (ref._).dub;
				if(id || (id = Gun.node.soul(at.obj))){
					ref.back(-1).get(id);
					at.soul(id);
					return;
				}
				(as.stun = as.stun || {})[path] = 1;
				ref.get(soul, true, {as: {at: at, as: as, p:path}});
			}, {as: as, at: at});
			//if(is){ return {} }
		}

		function soul(id, as, msg, eve){
			var as = as.as, cat = as.at; as = as.as;
			var at = ((msg || {}).$ || {})._ || {};
			id = at.dub = at.dub || id || Gun.node.soul(cat.obj) || Gun.node.soul(msg.put || at.put) || Gun.val.link.is(msg.put || at.put) || (as.via.back('opt.uuid') || Gun.text.random)(); // TODO: BUG!? Do we really want the soul of the object given to us? Could that be dangerous?
			if(eve){ eve.stun = true }
			if(!id){ // polyfill async uuid for SEA
				as.via.back('opt.uuid')(function(err, id){ // TODO: improve perf without anonymous callback
					if(err){ return Gun.log(err) } // TODO: Handle error.
					solve(at, at.dub = at.dub || id, cat, as);
				});
				return;
			}
			solve(at, at.dub = id, cat, as);
		}

		function solve(at, id, cat, as){
			at.$.back(-1).get(id);
			cat.soul(id);
			delete as.stun[cat.path];
			as.batch();
		}

		function any(soul, as, msg, eve){
			as = as.as;
			if(!msg.$ || !msg.$._){ return } // TODO: Handle
			if(msg.err){ // TODO: Handle
				Gun.log("Please report this as an issue! Put.any.err");
				return;
			}
			var at = (msg.$._), data = at.put, opt = as.opt||{}, root, tmp;
			if((tmp = as.ref) && tmp._.now){ return }
			if(eve){ eve.stun = true }
			if(as.ref !== as.$){
				tmp = (as.$._).get || at.get;
				if(!tmp){ // TODO: Handle
					Gun.log("Please report this as an issue! Put.no.get"); // TODO: BUG!??
					return;
				}
				as.data = obj_put({}, tmp, as.data);
				tmp = null;
			}
			if(u === data){
				if(!at.get){ return } // TODO: Handle
				if(!soul){
					tmp = at.$.back(function(at){
						if(at.link || at.soul){ return at.link || at.soul }
						as.data = obj_put({}, at.get, as.data);
					});
					as.not = true; // maybe consider this?
				}
				tmp = tmp || at.soul || at.link || at.dub;// || at.get;
				at = tmp? (at.root.$.get(tmp)._) : at;
				as.soul = tmp;
				data = as.data;
			}
			if(!as.not && !(as.soul = as.soul || soul)){
				if(as.path && obj_is(as.data)){
					as.soul = (opt.uuid || as.via.back('opt.uuid') || Gun.text.random)();
				} else {
					//as.data = obj_put({}, as.$._.get, as.data);
					if(node_ == at.get){
						as.soul = (at.put||empty)['#'] || at.dub;
					}
					as.soul = as.soul || at.soul || at.link || (opt.uuid || as.via.back('opt.uuid') || Gun.text.random)();
				}
				if(!as.soul){ // polyfill async uuid for SEA
					as.via.back('opt.uuid')(function(err, soul){ // TODO: improve perf without anonymous callback
						if(err){ return Gun.log(err) } // Handle error.
						as.ref.put(as.data, as.soul = soul, as);
					});
					return;
				}
			}
			as.ref.put(as.data, as.soul, as);
		}
		var obj = Gun.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map, obj_empty = obj.empty;
		var u, empty = {}, noop = function(){}, iife = function(fn,as){fn.call(as||empty)};
		var node_ = Gun.node._;
	})(USE, './put');

	;USE(function(module){
		var Gun = USE('./root');
		USE('./chain');
		USE('./back');
		USE('./put');
		USE('./get');
		module.exports = Gun;
	})(USE, './index');

	;USE(function(module){
		var Gun = USE('./index');
		Gun.chain.on = function(tag, arg, eas, as){
			var gun = this, at = gun._, tmp, act, off;
			if(typeof tag === 'string'){
				if(!arg){ return at.on(tag) }
				act = at.on(tag, arg, eas || at, as);
				if(eas && eas.$){
					(eas.subs || (eas.subs = [])).push(act);
				}
				return gun;
			}
			var opt = arg;
			opt = (true === opt)? {change: true} : opt || {};
			opt.at = at;
			opt.ok = tag;
			//opt.last = {};
			gun.get(ok, opt); // TODO: PERF! Event listener leak!!!?
			return gun;
		}

		function ok(msg, ev){ var opt = this;
			var gun = msg.$, at = (gun||{})._ || {}, data = at.put || msg.put, cat = opt.at, tmp;
			if(u === data){
				return;
			}
			if(tmp = msg.$$){
				tmp = (msg.$$._);
				if(u === tmp.put){
					return;
				}
				data = tmp.put;
			}
			if(opt.change){ // TODO: BUG? Move above the undef checks?
				data = msg.put;
			}
			// DEDUPLICATE // TODO: NEEDS WORK! BAD PROTOTYPE
			//if(tmp.put === data && tmp.get === id && !Gun.node.soul(data)){ return }
			//tmp.put = data;
			//tmp.get = id;
			// DEDUPLICATE // TODO: NEEDS WORK! BAD PROTOTYPE
			//at.last = data;
			if(opt.as){
				opt.ok.call(opt.as, msg, ev);
			} else {
				opt.ok.call(gun, data, msg.get, msg, ev);
			}
		}

		Gun.chain.val = function(cb, opt){
			Gun.log.once("onceval", "Future Breaking API Change: .val -> .once, apologies unexpected.");
			return this.once(cb, opt);
		}
		Gun.chain.once = function(cb, opt){
			var gun = this, at = gun._, data = at.put;
			if(0 < at.ack && u !== data){
				(cb || noop).call(gun, data, at.get);
				return gun;
			}
			if(cb){
				(opt = opt || {}).ok = cb;
				opt.at = at;
				opt.out = {'#': Gun.text.random(9)};
				gun.get(val, {as: opt});
				opt.async = true; //opt.async = at.stun? 1 : true;
			} else {
				Gun.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
				var chain = gun.chain();
				chain._.nix = gun.once(function(){
					chain._.on('in', gun._);
				});
				return chain;
			}
			return gun;
		}

		function val(msg, eve, to){
			if(!msg.$){ eve.off(); return }
			var opt = this.as, cat = opt.at, gun = msg.$, at = gun._, data = at.put || msg.put, link, tmp;
			if(tmp = msg.$$){
				link = tmp = (msg.$$._);
				if(u !== link.put){
					data = link.put;
				}
			}
			if((tmp = eve.wait) && (tmp = tmp[at.id])){ clearTimeout(tmp) }
			eve.ack = (eve.ack||0)+1;
			if(!to && u === data && eve.ack <= (opt.acks || Object.keys(at.root.opt.peers).length)){ return }
			if((!to && (u === data || at.soul || at.link || (link && !(0 < link.ack))))
			|| (u === data && (tmp = Object.keys(at.root.opt.peers).length) && (!to && (link||at).ack < tmp))){
				tmp = (eve.wait = {})[at.id] = setTimeout(function(){
					val.call({as:opt}, msg, eve, tmp || 1);
				}, opt.wait || 99);
				return;
			}
			if(link && u === link.put && (tmp = rel.is(data))){ data = Gun.node.ify({}, tmp) }
			eve.rid? eve.rid(msg) : eve.off();
			opt.ok.call(gun || opt.$, data, msg.get);
		}

		Gun.chain.off = function(){
			// make off more aggressive. Warning, it might backfire!
			var gun = this, at = gun._, tmp;
			var cat = at.back;
			if(!cat){ return }
			at.ack = 0; // so can resubscribe.
			if(tmp = cat.next){
				if(tmp[at.get]){
					obj_del(tmp, at.get);
				} else {

				}
			}
			if(tmp = cat.ask){
				obj_del(tmp, at.get);
			}
			if(tmp = cat.put){
				obj_del(tmp, at.get);
			}
			if(tmp = at.soul){
				obj_del(cat.root.graph, tmp);
			}
			if(tmp = at.map){
				obj_map(tmp, function(at){
					if(at.link){
						cat.root.$.get(at.link).off();
					}
				});
			}
			if(tmp = at.next){
				obj_map(tmp, function(neat){
					neat.$.off();
				});
			}
			at.on('off', {});
			return gun;
		}
		var obj = Gun.obj, obj_map = obj.map, obj_has = obj.has, obj_del = obj.del, obj_to = obj.to;
		var rel = Gun.val.link;
		var empty = {}, noop = function(){}, u;
	})(USE, './on');

	;USE(function(module){
		var Gun = USE('./index');
		Gun.chain.map = function(cb, opt, t){
			var gun = this, cat = gun._, chain;
			if(!cb){
				if(chain = cat.each){ return chain }
				cat.each = chain = gun.chain();
				chain._.nix = gun.back('nix');
				gun.on('in', map, chain._);
				return chain;
			}
			Gun.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
			chain = gun.chain();
			gun.map().on(function(data, key, at, ev){
				var next = (cb||noop).call(this, data, key, at, ev);
				if(u === next){ return }
				if(data === next){ return chain._.on('in', at) }
				if(Gun.is(next)){ return chain._.on('in', next._) }
				chain._.on('in', {get: key, put: next});
			});
			return chain;
		}
		function map(msg){
			if(!msg.put || Gun.val.is(msg.put)){ return this.to.next(msg) }
			if(this.as.nix){ this.off() } // TODO: Ugly hack!
			obj_map(msg.put, each, {at: this.as, msg: msg});
			this.to.next(msg);
		}
		function each(v,k){
			if(n_ === k){ return }
			var msg = this.msg, gun = msg.$, at = gun._, cat = this.at, tmp = at.lex;
			if(tmp && !Gun.text.match(k, tmp['.'] || tmp['#'] || tmp)){ return } // review?
			((tmp = gun.get(k)._).echo || (tmp.echo = {}))[cat.id] = tmp.echo[cat.id] || cat;
		}
		var obj_map = Gun.obj.map, noop = function(){}, event = {stun: noop, off: noop}, n_ = Gun.node._, u;
	})(USE, './map');

	;USE(function(module){
		var Gun = USE('./index');
		Gun.chain.set = function(item, cb, opt){
			var gun = this, soul;
			cb = cb || function(){};
			opt = opt || {}; opt.item = opt.item || item;
			if(soul = Gun.node.soul(item)){ item = Gun.obj.put({}, soul, Gun.val.link.ify(soul)) }
			if(!Gun.is(item)){
				if(Gun.obj.is(item)){;
					item = gun.back(-1).get(soul = soul || Gun.node.soul(item) || gun.back('opt.uuid')()).put(item);
				}
				return gun.get(soul || (Gun.state.lex() + Gun.text.random(7))).put(item, cb, opt);
			}
			item.get(function(soul, o, msg){
				if(!soul){ return cb.call(gun, {err: Gun.log('Only a node can be linked! Not "' + msg.put + '"!')}) }
				gun.put(Gun.obj.put({}, soul, Gun.val.link.ify(soul)), cb, opt);
			},true);
			return item;
		}
	})(USE, './set');

	;USE(function(module){
		if(typeof Gun === 'undefined'){ return } // TODO: localStorage is Browser only. But it would be nice if it could somehow plugin into NodeJS compatible localStorage APIs?

		var root, noop = function(){}, store, u;
		try{store = (Gun.window||noop).localStorage}catch(e){}
		if(!store){
			Gun.log("Warning: No localStorage exists to persist data to!");
			store = {setItem: function(k,v){this[k]=v}, removeItem: function(k){delete this[k]}, getItem: function(k){return this[k]}};
		}
		/*
			NOTE: Both `lib/file.js` and `lib/memdisk.js` are based on this design!
			If you update anything here, consider updating the other adapters as well.
		*/

		Gun.on('create', function(root){
			// This code is used to queue offline writes for resync.
			// See the next 'opt' code below for actual saving of data.
			var ev = this.to, opt = root.opt;
			if(root.once){ return ev.next(root) }
			if(false === opt.localStorage){ return ev.next(root) } // we want offline resynce queue regardless! // actually, this doesn't help, per @go1dfish 's observation. Disabling for now, will need better solution later.
			opt.prefix = opt.file || 'gun/';
			var gap = Gun.obj.ify(store.getItem('gap/'+opt.prefix)) || {};
			var empty = Gun.obj.empty, id, to, go;
			// add re-sync command.
			if(!empty(gap)){
				var disk = Gun.obj.ify(store.getItem(opt.prefix)) || {}, send = {};
				Gun.obj.map(gap, function(node, soul){
					Gun.obj.map(node, function(val, key){
						send[soul] = Gun.state.to(disk[soul], key, send[soul]);
					});
				});
				setTimeout(function(){
					// TODO: Holy Grail dangling by this thread! If gap / offline resync doesn't trigger, it doesn't work. Ouch, and this is a localStorage specific adapter. :(
					root.on('out', {put: send, '#': root.ask(ack)});
				},1);
			}

			root.on('out', function(msg){
				if(msg.lS){ return } // TODO: for IndexedDB and others, shouldn't send to peers ACKs to our own GETs. // THIS IS BLOCKING BROWSERS REPLYING TO REQUESTS, NO??? CHANGE THIS SOON!! UNDER CONTROLLED CIRCUMSTANCES!! Or maybe in-memory already doe sit?
				if(Gun.is(msg.$) && msg.put && !msg['@']){
					id = msg['#'];
					Gun.graph.is(msg.put, null, map);
					if(!to){ to = setTimeout(flush, opt.wait || 1) }
				}
				this.to.next(msg);
			});
			root.on('ack', ack);

			function ack(ack){ // TODO: This is experimental, not sure if we should keep this type of event hook.
				if(ack.err || !ack.ok){ return }
				var id = ack['@'];
				setTimeout(function(){
					Gun.obj.map(gap, function(node, soul){
						Gun.obj.map(node, function(val, key){
							if(id !== val){ return }
							delete node[key];
						});
						if(empty(node)){
							delete gap[soul];
						}
					});
					flush();
				}, opt.wait || 1);
			};
			ev.next(root);

			var map = function(val, key, node, soul){
				(gap[soul] || (gap[soul] = {}))[key] = id;
			}
			var flush = function(){
				clearTimeout(to);
				to = false;
				try{store.setItem('gap/'+opt.prefix, JSON.stringify(gap));
				}catch(e){ Gun.log(err = e || "localStorage failure") }
			}
		});

		Gun.on('create', function(root){
			this.to.next(root);
			var opt = root.opt;
			if(root.once){ return }
			if(false === opt.localStorage){ return }
			opt.prefix = opt.file || 'gun/';
			var graph = root.graph, acks = {}, count = 0, to;
			var disk = Gun.obj.ify(store.getItem(opt.prefix)) || {};
			var lS = function(){}, u;
			root.on('localStorage', disk); // NON-STANDARD EVENT!

			root.on('put', function(msg){
				this.to.next(msg);
				var put = msg.put, soul = put['#'], key = put['.'], val = put[':'], state = put['>'], tmp;
				disk[soul] = Gun.state.ify(disk[soul], key, state, val, soul);
				if(!msg['@']){ (acks[msg['#']] = (tmp = (msg._||'').lot || {})).lS = (tmp.lS||0)+1; } // only ack non-acks.
				count += 1;
				if(count >= (opt.batch || 1000)){
					return flush();
				}
				if(to){ return }
				to = setTimeout(flush, opt.wait || 1);
			});

			root.on('get', function(msg){
				this.to.next(msg);
				var lex = msg.get, soul, data, u;
				function to(){
				if(!lex || !(soul = lex['#'])){ return }
				//if(0 >= msg.cap){ return }
				var has = lex['.'];
				data = disk[soul] || u;
				if(data && has){
					data = Gun.state.to(data, has);
				}
				//if(!data && !Gun.obj.empty(opt.peers)){ return } // if data not found, don't ack if there are peers. // Hmm, what if we have peers but we are disconnected?
				root.on('in', {'@': msg['#'], put: Gun.graph.node(data), lS:1});// || root.$});
				};
				Gun.debug? setTimeout(to,1) : to();
			});

			var map = function(val, key, node, soul){
				disk[soul] = Gun.state.to(node, key, disk[soul]);
			}

			var flush = function(data){
				var err;
				count = 0;
				clearTimeout(to);
				to = false;
				var ack = acks;
				acks = {};
				if(data){ disk = data }
				try{store.setItem(opt.prefix, JSON.stringify(disk));
				}catch(e){
					Gun.log(err = (e || "localStorage failure") + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install");
					root.on('localStorage:error', {err: err, file: opt.prefix, flush: disk, retry: flush});
				}
				if(!err && !Gun.obj.empty(opt.peers)){ return } // only ack if there are no peers.
				Gun.obj.map(ack, function(yes, id){
					if(yes){
						if(yes.more){ acks[id] = yes; return }
						if(yes.s !== yes.lS){ err = "localStorage batch not same." }
					}
					root.on('in', {
						'@': id,
						err: err,
						ok: 0 // localStorage isn't reliable, so make its `ok` code be a low number.
					});
				});
			}
		});
	})(USE, './adapters/localStorage');

	;USE(function(module){
		var Type = USE('../type');

		function Mesh(root){
			var mesh = function(){};
			var opt = root.opt || {};
			opt.log = opt.log || console.log;
			opt.gap = opt.gap || opt.wait || 0;
			opt.pack = opt.pack || (opt.memory? (opt.memory * 1000 * 1000) : 1399000000) * 0.3; // max_old_space_size defaults to 1400 MB.
			opt.puff = opt.puff || 9; // IDEA: do a start/end benchmark, divide ops/result.
			var puff = setTimeout.puff || setTimeout;

			var dup = root.dup, dup_check = dup.check, dup_track = dup.track;

			var hear = mesh.hear = function(raw, peer){
				if(!raw){ return }
				if(opt.pack <= raw.length){ return mesh.say({dam: '!', err: "Message too big!"}, peer) }
				var msg, id, hash, tmp = raw[0], DBG;
				if(mesh === this){ hear.d += raw.length||0 ; ++hear.c } // STATS!
				if('[' === tmp){
					try{msg = JSON.parse(raw)}catch(e){opt.log('DAM JSON parse error', e)}
					raw = '';
					if(!msg){ return }
					console.STAT && console.STAT(+new Date, msg.length, '# on hear batch');
					var P = opt.puff;
					(function go(){
						var S = +new Date;
						//var P = peer.puff || opt.puff, s = +new Date; // TODO: For future, but in mix?
						var i = 0, m; while(i < P && (m = msg[i++])){ hear(m, peer) }
						//peer.puff = Math.ceil((+new Date - s)? P * 1.1 : P * 0.9);
						msg = msg.slice(i); // slicing after is faster than shifting during.
						console.STAT && console.STAT(S, +new Date - S, 'hear loop');
						flush(peer); // force send all synchronously batched acks.
						if(!msg.length){ return }
						puff(go, 0);
					}());
					return;
				}
				if('{' === tmp || ((raw['#'] || obj_is(raw)) && (msg = raw))){
					try{msg = msg || JSON.parse(raw);
					}catch(e){return opt.log('DAM JSON parse error', e)}
					if(!msg){ return }
					if(msg.DBG){ msg.DBG = DBG = {DBG: msg.DBG} }
					DBG && (DBG.hp = +new Date);
					if(!(id = msg['#'])){ id = msg['#'] = Type.text.random(9) }
					if(tmp = dup_check(id)){ return }
					/*if(!(hash = msg['##']) && u !== msg.put){ hash = msg['##'] = Type.obj.hash(msg.put) }
					if(hash && (tmp = msg['@'] || (msg.get && id))){ // Reduces backward daisy in case varying hashes at different daisy depths are the same.
						if(dup.check(tmp+hash)){ return }
						dup.track(tmp+hash, true).it = it(msg); // GUN core also dedups, so `true` is needed. // Does GUN core need to dedup anymore?
					}
					if(tmp = msg['><']){ (msg._).to = Type.obj.map(tmp.split(','), tomap) }
					*/ // TOOD: COME BACK TO THIS LATER!!! IMPORTANT MESH STUFF!!
					(msg._ = function(){}).via = mesh.leap = peer;
					if(tmp = msg.dam){
						if(tmp = mesh.hear[tmp]){
							tmp(msg, peer, root);
						}
						dup_track(id);
						return;
					}
					var S = +new Date, ST;
					DBG && (DBG.is = S);
					root.on('in', msg);
					//ECHO = msg.put || ECHO; !(msg.ok !== -3740) && mesh.say({ok: -3740, put: ECHO, '@': msg['#']}, peer);
					DBG && (DBG.hd = +new Date);
					console.STAT && (ST = +new Date - S) > 9 && console.STAT(S, ST, 'msg'); // TODO: PERF: caught one > 1.5s on tgif
					dup_track(id).via = peer;
					mesh.leap = null; // warning! mesh.leap could be buggy.
				}
			}
			var tomap = function(k,i,m){m(k,true)};
			var noop = function(){};
			hear.c = hear.d = 0;

			;(function(){
				var SMIA = 0;
				var message, loop;
				function each(peer){ mesh.say(message, peer) }
				var say = mesh.say = function(msg, peer){
					if(this.to){ this.to.next(msg) } // compatible with middleware adapters.
					if(!msg){ return false }
					var id, hash, tmp, raw;
					var DBG = msg.DBG, S; if(!peer){ S = +new Date ; DBG && (DBG.y = S) }
					var meta = msg._||(msg._=function(){});
					if(!(id = msg['#'])){ id = msg['#'] = Type.text.random(9) }
					//if(!(hash = msg['##']) && u !== msg.put){ hash = msg['##'] = Type.obj.hash(msg.put) }
					if(!(raw = meta.raw)){
						raw = mesh.raw(msg);
						/*if(hash && (tmp = msg['@'])){
							dup.track(tmp+hash).it = it(msg);
							if(tmp = (dup.s[tmp]||ok).it){
								if(hash === tmp['##']){ return false }
								tmp['##'] = hash;
							}
						}*/
					}
					S && console.STAT && console.STAT(S, +new Date - S, 'say prep');
					!loop && dup_track(id);//.it = it(msg); // track for 9 seconds, default. Earth<->Mars would need more! // always track, maybe move this to the 'after' logic if we split function.
					//console.log("SEND!", JSON.parse(JSON.stringify(msg)));
					if(!peer && (tmp = msg['@'])){ peer = ((tmp = dup.s[tmp]) && (tmp.via || ((tmp = tmp.it) && (tmp = tmp._) && tmp.via))) || mesh.leap } // warning! mesh.leap could be buggy!
					if(!peer && msg['@']){
						console.STAT && console.STAT(+new Date, ++SMIA, 'total no peer to ack to');
						return false;
					} // TODO: Temporary? If ack via trace has been lost, acks will go to all peers, which trashes browser bandwidth. Not relaying the ack will force sender to ask for ack again. Note, this is technically wrong for mesh behavior.
					if(!peer && mesh.way){ return mesh.way(msg) }
					if(!peer || !peer.id){ message = msg;
						if(!Type.obj.is(peer || opt.peers)){ return false }
						var P = opt.puff, ps = opt.peers, pl = Object.keys(peer || opt.peers || {}); // TODO: BETTER PERF? No object.keys? It is polyfilled by Type.js tho.
						;(function go(){
							var S = +new Date;
							//Type.obj.map(peer || opt.peers, each); // in case peer is a peer list.
							loop = 1; var wr = meta.raw; meta.raw = raw; // quick perf hack
							var i = 0, p; while(i < 9 && (p = (pl||'')[i++])){
								if(!(p = ps[p])){ continue }
								say(msg, p);
							}
							meta.raw = wr; loop = 0;
							pl = pl.slice(i); // slicing after is faster than shifting during.
							console.STAT && console.STAT(S, +new Date - S, 'say loop');
							if(!pl.length){ return }
							puff(go, 0);
							dup_track(msg['@']); // keep for later
						}());
						return;
					}
					// TODO: PERF: consider splitting function here, so say loops do less work.
					if(!peer.wire && mesh.wire){ mesh.wire(peer) }
					if(id === peer.last){ return } peer.last = id;  // was it just sent?
					if(peer === meta.via){ return false } // don't send back to self.
					if((tmp = meta.to) && (tmp[peer.url] || tmp[peer.pid] || tmp[peer.id]) /*&& !o*/){ return false }
					if(peer.batch){
						peer.tail = (tmp = peer.tail || 0) + raw.length;
						if(peer.tail <= opt.pack){
							//peer.batch.push(raw);
							peer.batch += (tmp?',':'')+raw; // TODO: Prevent double JSON! // FOR v1.0 !?
							return;
						}
						flush(peer);
					}
					//peer.batch = [];
					peer.batch = '['; // TODO: Prevent double JSON!
					var S = +new Date, ST;
					setTimeout(function(){
						console.STAT && (ST = +new Date - S) > 9 && console.STAT(S, ST, '0ms TO', id, peer.id);
						flush(peer);
					}, opt.gap);
					send(raw, peer);
				}
				mesh.say.c = mesh.say.d = 0;
			}());

			function flush(peer){
				var tmp = peer.batch, t = 'string' == typeof tmp, l;
				if(t){ tmp += ']' }// TODO: Prevent double JSON!
				peer.batch = peer.tail = null;
				if(!tmp){ return }
				if(t? 3 > tmp.length : !tmp.length){ return } // TODO: ^
				if(!t){try{tmp = (1 === tmp.length? tmp[0] : JSON.stringify(tmp));
				}catch(e){return opt.log('DAM JSON stringify error', e)}}
				if(!tmp){ return }
				send(tmp, peer);
			}
			// for now - find better place later.
			function send(raw, peer){ try{
				var wire = peer.wire;
				if(peer.say){
					peer.say(raw);
				} else
				if(wire.send){
					wire.send(raw);
				}
				mesh.say.d += raw.length||0; ++mesh.say.c; // STATS!
			}catch(e){
				(peer.queue = peer.queue || []).push(raw);
			}}

			;(function(){
				// TODO: this caused a out-of-memory crash!
				mesh.raw = function(msg){ // TODO: Clean this up / delete it / move logic out!
					if(!msg){ return '' }
					var meta = (msg._) || {}, put, hash, tmp;
					if(tmp = meta.raw){ return tmp }
					if('string' == typeof msg){ return msg }
					/*if(!msg.dam){ // TOOD: COME BACK TO THIS LATER!!! IMPORTANT MESH STUFF!!
						var i = 0, to = []; Type.obj.map(opt.peers, function(p){
							to.push(p.url || p.pid || p.id); if(++i > 3){ return true } // limit server, fast fix, improve later! // For "tower" peer, MUST include 6 surrounding ids. // REDUCED THIS TO 3 for temporary relay peer performance, towers still should list neighbors.
						}); if(i > 1){ msg['><'] = to.join() }
					}*/  // TOOD: COME BACK TO THIS LATER!!! IMPORTANT MESH STUFF!!
					var raw = $(msg); // optimize by reusing put = the JSON.stringify from .hash?
					/*if(u !== put){
						tmp = raw.indexOf(_, raw.indexOf('put'));
						raw = raw.slice(0, tmp-1) + put + raw.slice(tmp + _.length + 1);
						//raw = raw.replace('"'+ _ +'"', put); // NEVER USE THIS! ALSO NEVER DELETE IT TO NOT MAKE SAME MISTAKE! https://github.com/amark/gun/wiki/@$$ Heisenbug
					}*/
					// TODO: PERF: tgif, CPU way too much on re-JSONifying ^ it.
					/*
						// NOTE TO SELF: Switch NTS to DAM now.
					*/
					if(meta && (raw||'').length < (1000 * 100)){ meta.raw = raw } // HNPERF: If string too big, don't keep in memory.
					return raw;
				}
				var $ = JSON.stringify, _ = ':])([:';

			}());

			mesh.hi = function(peer){
				var tmp = peer.wire || {};
				if(peer.id){
					opt.peers[peer.url || peer.id] = peer;
				} else {
					tmp = peer.id = peer.id || Type.text.random(9);
					mesh.say({dam: '?', pid: root.opt.pid}, opt.peers[tmp] = peer);
					delete dup.s[peer.last]; // IMPORTANT: see https://gun.eco/docs/DAM#self
				}
				peer.met = peer.met || +(new Date);
				if(!tmp.hied){ root.on(tmp.hied = 'hi', peer) }
				// @rogowski I need this here by default for now to fix go1dfish's bug
				tmp = peer.queue; peer.queue = [];
				Type.obj.map(tmp, function(msg){
					send(msg, peer);
				});
				Type.obj.native && Type.obj.native(); // dirty place to check if other JS polluted.
			}
			mesh.bye = function(peer){
				root.on('bye', peer);
				var tmp = +(new Date); tmp = (tmp - (peer.met||tmp));
				mesh.bye.time = ((mesh.bye.time || tmp) + tmp) / 2;
			}
			mesh.hear['!'] = function(msg, peer){ opt.log('Error:', msg.err) }
			mesh.hear['?'] = function(msg, peer){
				if(msg.pid){
					if(!peer.pid){ peer.pid = msg.pid }
					if(msg['@']){ return }
				}
				mesh.say({dam: '?', pid: opt.pid, '@': msg['#']}, peer);
				delete dup.s[peer.last]; // IMPORTANT: see https://gun.eco/docs/DAM#self
			}

			root.on('create', function(root){
				root.opt.pid = root.opt.pid || Type.text.random(9);
				this.to.next(root);
				root.on('out', mesh.say);
			});

			root.on('bye', function(peer, tmp){
				peer = opt.peers[peer.id || peer] || peer; 
				this.to.next(peer);
				peer.bye? peer.bye() : (tmp = peer.wire) && tmp.close && tmp.close();
				Type.obj.del(opt.peers, peer.id);
				peer.wire = null;
			});

			var gets = {};
			root.on('bye', function(peer, tmp){ this.to.next(peer);
				if(!(tmp = peer.url)){ return } gets[tmp] = true;
				setTimeout(function(){ delete gets[tmp] },opt.lack || 9000);
			});
			root.on('hi', function(peer, tmp){ this.to.next(peer);
				if(!(tmp = peer.url) || !gets[tmp]){ return } delete gets[tmp];
				if(opt.super){ return } // temporary (?) until we have better fix/solution?
				Type.obj.map(root.next, function(node, soul){
					tmp = {}; tmp[soul] = root.graph[soul];
					mesh.say({'##': Type.obj.hash(tmp), get: {'#': soul}}, peer);
				})
			});

			return mesh;
		}

		;(function(){
			Type.text.hash = function(s){ // via SO
				if(typeof s !== 'string'){ return {err: 1} }
		    var c = 0;
		    if(!s.length){ return c }
		    for(var i=0,l=s.length,n; i<l; ++i){
		      n = s.charCodeAt(i);
		      c = ((c<<5)-c)+n;
		      c |= 0;
		    }
		    return c; // Math.abs(c);
		  }
			
			var $ = JSON.stringify, u;

			Type.obj.hash = function(obj, hash){
				if(!hash && u === (obj = $(obj, sort))){ return }
				return Type.text.hash(hash || obj || '');
			}

			function sort(k, v){ var tmp;
				if(!(v instanceof Object)){ return v }
				var S = +new Date;
				Type.obj.map(Object.keys(v).sort(), map, {to: tmp = {}, on: v});
				console.STAT && console.STAT(S, +new Date - S, 'sort');
				return tmp;
			}
			Type.obj.hash.sort = sort;

			function map(k){
				this.to[k] = this.on[k];
			}
		}());

		function it(msg){ return msg || {_: msg._, '##': msg['##']} } // HNPERF: Only need some meta data, not full reference (took up too much memory). // HNPERF: Garrrgh! We add meta data to msg over time, copying the object happens to early.

	  var empty = {}, ok = true, u;
		var obj_is = Type.obj.is, obj_map = Type.obj.map;

	  try{ module.exports = Mesh }catch(e){}

	})(USE, './adapters/mesh');

	;USE(function(module){
		var Gun = USE('../index');
		Gun.Mesh = USE('./mesh');

		Gun.on('opt', function(root){
			this.to.next(root);
			var opt = root.opt;
			if(root.once){ return }
			if(false === opt.WebSocket){ return }

			var env;
			if(typeof window !== "undefined"){ env = window }
			if(typeof global !== "undefined"){ env = global }
			env = env || {};

			var websocket = opt.WebSocket || env.WebSocket || env.webkitWebSocket || env.mozWebSocket;
			if(!websocket){ return }
			opt.WebSocket = websocket;

			var mesh = opt.mesh = opt.mesh || Gun.Mesh(root);

			var wire = mesh.wire || opt.wire;
			mesh.wire = opt.wire = open;
			function open(peer){ try{
				if(!peer || !peer.url){ return wire && wire(peer) }
				var url = peer.url.replace('http', 'ws');
				var wire = peer.wire = new opt.WebSocket(url);
				wire.onclose = function(){
					opt.mesh.bye(peer);
					reconnect(peer);
				};
				wire.onerror = function(error){
					reconnect(peer);
				};
				wire.onopen = function(){
					opt.mesh.hi(peer);
				}
				wire.onmessage = function(msg){
					if(!msg){ return }
					opt.mesh.hear(msg.data || msg, peer);
				};
				return wire;
			}catch(e){}}

			setTimeout(function(){ root.on('out', {dam:'hi'}) },1); // it can take a while to open a socket, so maybe no longer lazy load for perf reasons?

			var wait = 2 * 1000;
			function reconnect(peer){
				clearTimeout(peer.defer);
				if(doc && peer.retry <= 0){ return } peer.retry = (peer.retry || opt.retry || 60) - 1;
				peer.defer = setTimeout(function to(){
					if(doc && doc.hidden){ return setTimeout(to,wait) }
					open(peer);
				}, wait);
			}
			var doc = 'undefined' !== typeof document && document;
		});
		var noop = function(){};
	})(USE, './adapters/websocket');

}());
(function(){var d=(typeof window!=="undefined")?window.Gun:require("../gun");d.on("opt",function(l){this.to.next(l);var b=l.opt;if(l.once){return}if(!d.Mesh){return}if(false===b.RTCPeerConnection){return}var o;if(typeof window!=="undefined"){o=window}if(typeof global!=="undefined"){o=global}o=o||{};var k=b.RTCPeerConnection||o.RTCPeerConnection||o.webkitRTCPeerConnection||o.mozRTCPeerConnection;var m=b.RTCSessionDescription||o.RTCSessionDescription||o.webkitRTCSessionDescription||o.mozRTCSessionDescription;var n=b.RTCIceCandidate||o.RTCIceCandidate||o.webkitRTCIceCandidate||o.mozRTCIceCandidate;if(!k||!m||!n){return}b.RTCPeerConnection=k;b.RTCSessionDescription=m;b.RTCIceCandidate=n;b.rtc=b.rtc||{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.sipgate.net:3478"}]};b.rtc.dataChannel=b.rtc.dataChannel||{ordered:false,maxRetransmits:2};b.rtc.sdp=b.rtc.sdp||{mandatory:{OfferToReceiveAudio:false,OfferToReceiveVideo:false}};b.announce=function(e){l.on("out",{rtc:{id:b.pid,to:e}})};var a=b.mesh=b.mesh||d.Mesh(l);l.on("create",function(e){this.to.next(e);setTimeout(b.announce,1)});l.on("in",function(e){if(e.rtc){p(e)}this.to.next(e)});function p(i){var g=i.rtc,f,h;if(!g||!g.id){return}delete b.announce[g.id];if(h=g.answer){if(!(f=b.peers[g.id]||p[g.id])||f.remoteSet){return}return f.setRemoteDescription(f.remoteSet=new b.RTCSessionDescription(h))}if(h=g.candidate){f=b.peers[g.id]||p[g.id]||p({rtc:{id:g.id}});return f.addIceCandidate(new b.RTCIceCandidate(h))}if(p[g.id]){return}(f=new b.RTCPeerConnection(b.rtc)).id=g.id;var e=f.wire=f.createDataChannel("dc",b.rtc.dataChannel);p[g.id]=f;e.onclose=function(){delete p[g.id];a.bye(f)};e.onerror=function(j){};e.onopen=function(j){a.hi(f)};e.onmessage=function(j){if(!j){return}a.hear(j.data||j,f)};f.onicecandidate=function(j){if(!j.candidate){return}l.on("out",{"@":i["#"],rtc:{candidate:j.candidate,id:b.pid}})};f.ondatachannel=function(j){var r=j.channel;r.onmessage=e.onmessage;r.onopen=e.onopen;r.onclose=e.onclose};if(h=g.offer){f.setRemoteDescription(new b.RTCSessionDescription(h));f.createAnswer(function(j){f.setLocalDescription(j);l.on("out",{"@":i["#"],rtc:{answer:j,id:b.pid}})},function(){},b.rtc.sdp);return}f.createOffer(function(j){f.setLocalDescription(j);l.on("out",{"@":i["#"],rtc:{offer:j,id:b.pid}})},function(){},b.rtc.sdp);return f}});var c=function(){}}());
