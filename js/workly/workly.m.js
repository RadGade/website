function t(t){let e,o;if("function"==typeof t){const a=Function.prototype.toString;e=o=URL.createObjectURL(new Blob([`${a.call(n)}\n(${a.call(s)})(${a.call(t)})`]))}else"string"==typeof t&&(e=t,0===t.indexOf("blob:")&&(o=e));if(e){let t=new Worker(e);return o&&(t.oURL=o),a(new r(t))}throw"Workly only supports functions, classes, urls"}function e(t){return a(new r(t))}function a(t,e){return e=e||[],new Proxy((function(){}),{get(r,n,s){if("then"===n){if(0===e.length)return{then:()=>s};const a=t.remote({type:"GET",path:e});return a.then.bind(a)}return a(t,e.concat(n))},set:(a,r,n)=>t.remote({type:"SET",path:e.concat(r),value:n}),apply:(a,r,n)=>t.remote({type:"APPLY",path:e,args:n}),construct:(e,a)=>t.remote({type:"CONSTRUCT",args:a})})}class r{constructor(t,e){this.w=t,this.uid=e||`${Date.now()}-${n()}`,this.c=0,this.cbs={},t.addEventListener("message",e=>{if(this.w.oURL)try{URL.revokeObjectURL(this.w.oURL)}catch(t){}finally{delete this.w.oURL}let n=e.data&&e.data.id,s=n&&this.cbs[n];s&&(delete this.cbs[n],e.data.error?s[1](new Error(e.data.error)):s[0](e.data.targetId?a(new r(t,e.data.targetId)):e.data.value))})}remote(t){const e=t.args||[],a=`${this.uid}-${++this.c}`;return new Promise((r,n)=>{this.cbs[a]=[r,n],this.w.postMessage(Object.assign({},t,{id:a,args:e,target:this.uid}))})}}function n(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)}function s(t){const e=t,a={};self.addEventListener("message",async t=>{let r=t.data||{};r.path=r.path||[];let s=r.target&&a[r.target]||e;const o=t=>t.reduce((t,e)=>t?t[e]:t,s),c=r&&r.id;if(c&&r.type){const t={id:c},e=o(r.path),s=o(r.path.slice(0,-1));switch(r.type){case"GET":t.value=e;break;case"SET":let o=r.path.length&&r.path[r.path.length-1];o&&(s[o]=r.value),t.value=!!o;break;case"APPLY":try{t.value=await e.apply(s,r.args||[])}catch(e){t.error=e.toString()}break;case"CONSTRUCT":try{t.value=new e(...r.args),t.targetId=(t=>{const e=`${Date.now()}-${n()}`;return a[e]=t,e})(t.value)}catch(e){t.error=e.toString()}}self.postMessage(t)}})}export{s as expose,e as link,t as proxy};
