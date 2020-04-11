(function(){function USE(arg,req){return req?require(arg):arg.slice?USE[R(arg)]:function(mod,path){arg(mod={exports:{}});USE[R(path)]=mod.exports}
function R(p){return p.split('/').slice(-1).toString().replace('.js','')}}
if(typeof module!=="undefined"){var MODULE=module};USE(function(module){if(typeof window!=="undefined"){module.window=window}
var tmp=module.window||module;var SEA=tmp.SEA||{};if(SEA.window=module.window){SEA.window.SEA=SEA}
try{if(typeof MODULE!=="undefined"){MODULE.exports=SEA}}catch(e){}
module.exports=SEA})(USE,'./root');USE(function(module){var SEA=USE('./root');try{if(SEA.window){if(location.protocol.indexOf('s')<0&&location.host.indexOf('localhost')<0&&location.protocol.indexOf('file:')<0){location.protocol='https:'}}}catch(e){}})(USE,'./https');USE(function(module){if(typeof btoa==="undefined"){if(typeof Buffer==="undefined"){global.Buffer=require("buffer").Buffer}
global.btoa=function(data){return Buffer.from(data,"binary").toString("base64")};global.atob=function(data){return Buffer.from(data,"base64").toString("binary")}}})(USE,'./base64');USE(function(module){USE('./base64');function SeaArray(){}
Object.assign(SeaArray,{from:Array.from})
SeaArray.prototype=Object.create(Array.prototype)
SeaArray.prototype.toString=function(enc,start,end){enc=enc||'utf8';start=start||0;const length=this.length
if(enc==='hex'){const buf=new Uint8Array(this)
return[...Array(((end&&(end+1))||length)-start).keys()].map((i)=>buf[i+start].toString(16).padStart(2,'0')).join('')}
if(enc==='utf8'){return Array.from({length:(end||length)-start},(_,i)=>String.fromCharCode(this[i+start])).join('')}
if(enc==='base64'){return btoa(this)}}
module.exports=SeaArray})(USE,'./array');USE(function(module){USE('./base64');var SeaArray=USE('./array');function SafeBuffer(...props){console.warn('new SafeBuffer() is depreciated, please use SafeBuffer.from()')
return SafeBuffer.from(...props)}
SafeBuffer.prototype=Object.create(Array.prototype)
Object.assign(SafeBuffer,{from(){if(!Object.keys(arguments).length||arguments[0]==null){throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')}
const input=arguments[0]
let buf
if(typeof input==='string'){const enc=arguments[1]||'utf8'
if(enc==='hex'){const bytes=input.match(/([\da-fA-F]{2})/g).map((byte)=>parseInt(byte,16))
if(!bytes||!bytes.length){throw new TypeError('Invalid first argument for type \'hex\'.')}
buf=SeaArray.from(bytes)}else if(enc==='utf8'){const length=input.length
const words=new Uint16Array(length)
Array.from({length:length},(_,i)=>words[i]=input.charCodeAt(i))
buf=SeaArray.from(words)}else if(enc==='base64'){const dec=atob(input)
const length=dec.length
const bytes=new Uint8Array(length)
Array.from({length:length},(_,i)=>bytes[i]=dec.charCodeAt(i))
buf=SeaArray.from(bytes)}else if(enc==='binary'){buf=SeaArray.from(input)}else{console.info('SafeBuffer.from unknown encoding: '+enc)}
return buf}
const byteLength=input.byteLength
const length=input.byteLength?input.byteLength:input.length
if(length){let buf
if(input instanceof ArrayBuffer){buf=new Uint8Array(input)}
return SeaArray.from(buf||input)}},alloc(length,fill=0){return SeaArray.from(new Uint8Array(Array.from({length:length},()=>fill)))},allocUnsafe(length){return SeaArray.from(new Uint8Array(Array.from({length:length})))},concat(arr){if(!Array.isArray(arr)){throw new TypeError('First argument must be Array containing ArrayBuffer or Uint8Array instances.')}
return SeaArray.from(arr.reduce((ret,item)=>ret.concat(Array.from(item)),[]))}})
SafeBuffer.prototype.from=SafeBuffer.from
SafeBuffer.prototype.toString=SeaArray.prototype.toString
module.exports=SafeBuffer})(USE,'./buffer');USE(function(module){const SEA=USE('./root')
const Buffer=USE('./buffer')
const api={Buffer:Buffer}
var o={};if(SEA.window){api.crypto=navigator&&navigator.product==='ReactNative'?require('isomorphic-webcrypto'):window.crypto||window.msCrypto||require('isomorphic-webcrypto');api.subtle=(api.crypto||o).subtle||(api.crypto||o).webkitSubtle;api.TextEncoder=window.TextEncoder;api.TextDecoder=window.TextDecoder;api.random=(len)=>Buffer.from(api.crypto.getRandomValues(new Uint8Array(Buffer.alloc(len))))}
if(!api.TextDecoder)
{const{TextEncoder,TextDecoder}=require('text-encoding');api.TextDecoder=TextDecoder;api.TextEncoder=TextEncoder}
if(!api.crypto){try{var crypto=USE('crypto',1);Object.assign(api,{crypto,random:(len)=>Buffer.from(crypto.randomBytes(len))});const isocrypto=require('isomorphic-webcrypto');api.ossl=api.subtle=isocrypto.subtle}catch(e){console.log("text-encoding and @peculiar/webcrypto may not be included by default, please add it to your package.json!");TEXT_ENCODING_OR_PECULIAR_WEBCRYPTO_NOT_INSTALLED}}
module.exports=api})(USE,'./shim');USE(function(module){var SEA=USE('./root');var Buffer=USE('./buffer');var s={};s.pbkdf2={hash:{name:'SHA-256'},iter:100000,ks:64};s.ecdsa={pair:{name:'ECDSA',namedCurve:'P-256'},sign:{name:'ECDSA',hash:{name:'SHA-256'}}};s.ecdh={name:'ECDH',namedCurve:'P-256'};s.jwk=function(pub,d){pub=pub.split('.');var x=pub[0],y=pub[1];var jwk={kty:"EC",crv:"P-256",x:x,y:y,ext:!0};jwk.key_ops=d?['sign']:['verify'];if(d){jwk.d=d}
return jwk};s.keyToJwk=function(keyBytes){const keyB64=keyBytes.toString('base64');const k=keyB64.replace(/\+/g,'-').replace(/\//g,'_').replace(/\=/g,'');return{kty:'oct',k:k,ext:!1,alg:'A256GCM'}}
s.recall={validity:12*60*60,hook:function(props){return props}};s.check=function(t){return(typeof t=='string')&&('SEA{'===t.slice(0,4))}
s.parse=function p(t){try{var yes=(typeof t=='string');if(yes&&'SEA{'===t.slice(0,4)){t=t.slice(3)}
return yes?JSON.parse(t):t}catch(e){}
return t}
SEA.opt=s;module.exports=s})(USE,'./settings');USE(function(module){var shim=USE('./shim');module.exports=async function(d,o){var t=(typeof d=='string')?d:JSON.stringify(d);var hash=await shim.subtle.digest({name:o||'SHA-256'},new shim.TextEncoder().encode(t));return shim.Buffer.from(hash)}})(USE,'./sha256');USE(function(module){const __shim=USE('./shim')
const subtle=__shim.subtle
const ossl=__shim.ossl?__shim.ossl:subtle
const sha1hash=(b)=>ossl.digest({name:'SHA-1'},new ArrayBuffer(b))
module.exports=sha1hash})(USE,'./sha1');USE(function(module){var SEA=USE('./root');var shim=USE('./shim');var S=USE('./settings');var sha=USE('./sha256');var u;SEA.work=SEA.work||(async(data,pair,cb,opt)=>{try{var salt=(pair||{}).epub||pair;var opt=opt||{};if(salt instanceof Function){cb=salt;salt=u}
data=(typeof data=='string')?data:JSON.stringify(data);if('sha'===(opt.name||'').toLowerCase().slice(0,3)){var rsha=shim.Buffer.from(await sha(data,opt.name),'binary').toString(opt.encode||'base64')
if(cb){try{cb(rsha)}catch(e){console.log(e)}}
return rsha}
salt=salt||shim.random(9);var key=await(shim.ossl||shim.subtle).importKey('raw',new shim.TextEncoder().encode(data),{name:opt.name||'PBKDF2'},!1,['deriveBits']);var work=await(shim.ossl||shim.subtle).deriveBits({name:opt.name||'PBKDF2',iterations:opt.iterations||S.pbkdf2.iter,salt:new shim.TextEncoder().encode(opt.salt||salt),hash:opt.hash||S.pbkdf2.hash,},key,opt.length||(S.pbkdf2.ks*8))
data=shim.random(data.length)
var r=shim.Buffer.from(work,'binary').toString(opt.encode||'base64')
if(cb){try{cb(r)}catch(e){console.log(e)}}
return r}catch(e){console.log(e);SEA.err=e;if(SEA.throw){throw e}
if(cb){cb()}
return}});module.exports=SEA.work})(USE,'./work');USE(function(module){var SEA=USE('./root');var shim=USE('./shim');var S=USE('./settings');SEA.name=SEA.name||(async(cb,opt)=>{try{if(cb){try{cb()}catch(e){console.log(e)}}
return}catch(e){console.log(e);SEA.err=e;if(SEA.throw){throw e}
if(cb){cb()}
return}});SEA.pair=SEA.pair||(async(cb,opt)=>{try{var ecdhSubtle=shim.ossl||shim.subtle;var sa=await shim.subtle.generateKey({name:'ECDSA',namedCurve:'P-256'},!0,['sign','verify']).then(async(keys)=>{var key={};key.priv=(await shim.subtle.exportKey('jwk',keys.privateKey)).d;var pub=await shim.subtle.exportKey('jwk',keys.publicKey);key.pub=pub.x+'.'+pub.y;return key})
try{var dh=await ecdhSubtle.generateKey({name:'ECDH',namedCurve:'P-256'},!0,['deriveKey']).then(async(keys)=>{var key={};key.epriv=(await ecdhSubtle.exportKey('jwk',keys.privateKey)).d;var pub=await ecdhSubtle.exportKey('jwk',keys.publicKey);key.epub=pub.x+'.'+pub.y;return key})}catch(e){if(SEA.window){throw e}
if(e=='Error: ECDH is not a supported algorithm'){console.log('Ignoring ECDH...')}
else{throw e}}dh=dh||{};var r={pub:sa.pub,priv:sa.priv,epub:dh.epub,epriv:dh.epriv}
if(cb){try{cb(r)}catch(e){console.log(e)}}
return r}catch(e){console.log(e);SEA.err=e;if(SEA.throw){throw e}
if(cb){cb()}
return}});module.exports=SEA.pair})(USE,'./pair');USE(function(module){var SEA=USE('./root');var shim=USE('./shim');var S=USE('./settings');var sha=USE('./sha256');var u;SEA.sign=SEA.sign||(async(data,pair,cb,opt)=>{try{opt=opt||{};if(!(pair||opt).priv){pair=await SEA.I(null,{what:data,how:'sign',why:opt.why})}
if(u===data){throw '`undefined` not allowed.'}
var json=S.parse(data);var check=opt.check=opt.check||json;if(SEA.verify&&(SEA.opt.check(check)||(check&&check.s&&check.m))&&u!==await SEA.verify(check,pair)){var r=S.parse(check);if(!opt.raw){r='SEA'+JSON.stringify(r)}
if(cb){try{cb(r)}catch(e){console.log(e)}}
return r}
var pub=pair.pub;var priv=pair.priv;var jwk=S.jwk(pub,priv);var hash=await sha(json);var sig=await(shim.ossl||shim.subtle).importKey('jwk',jwk,{name:'ECDSA',namedCurve:'P-256'},!1,['sign']).then((key)=>(shim.ossl||shim.subtle).sign({name:'ECDSA',hash:{name:'SHA-256'}},key,new Uint8Array(hash)))
var r={m:json,s:shim.Buffer.from(sig,'binary').toString(opt.encode||'base64')}
if(!opt.raw){r='SEA'+JSON.stringify(r)}
if(cb){try{cb(r)}catch(e){console.log(e)}}
return r}catch(e){console.log(e);SEA.err=e;if(SEA.throw){throw e}
if(cb){cb()}
return}});module.exports=SEA.sign})(USE,'./sign');USE(function(module){var SEA=USE('./root');var shim=USE('./shim');var S=USE('./settings');var sha=USE('./sha256');var u;SEA.verify=SEA.verify||(async(data,pair,cb,opt)=>{try{var json=S.parse(data);if(!1===pair){var raw=S.parse(json.m);if(cb){try{cb(raw)}catch(e){console.log(e)}}
return raw}
opt=opt||{};var pub=pair.pub||pair;var key=SEA.opt.slow_leak?await SEA.opt.slow_leak(pub):await(shim.ossl||shim.subtle).importKey('jwk',S.jwk(pub),{name:'ECDSA',namedCurve:'P-256'},!1,['verify']);var hash=await sha(json.m);var buf,sig,check,tmp;try{buf=shim.Buffer.from(json.s,opt.encode||'base64');sig=new Uint8Array(buf);check=await(shim.ossl||shim.subtle).verify({name:'ECDSA',hash:{name:'SHA-256'}},key,sig,new Uint8Array(hash));if(!check){throw "Signature did not match."}}catch(e){if(SEA.opt.fallback){return await SEA.opt.fall_verify(data,pair,cb,opt)}}
var r=check?S.parse(json.m):u;if(cb){try{cb(r)}catch(e){console.log(e)}}
return r}catch(e){console.log(e);SEA.err=e;if(SEA.throw){throw e}
if(cb){cb()}
return}});module.exports=SEA.verify;var knownKeys={};var keyForPair=SEA.opt.slow_leak=pair=>{if(knownKeys[pair])return knownKeys[pair];var jwk=S.jwk(pair);knownKeys[pair]=(shim.ossl||shim.subtle).importKey("jwk",jwk,{name:'ECDSA',namedCurve:'P-256'},!1,["verify"]);return knownKeys[pair]};var O=SEA.opt;SEA.opt.fall_verify=async function(data,pair,cb,opt,f){if(f===SEA.opt.fallback){throw "Signature did not match"}f=f||1;var tmp=data||'';data=SEA.opt.unpack(data)||data;var json=S.parse(data),pub=pair.pub||pair,key=await SEA.opt.slow_leak(pub);var hash=(f<=SEA.opt.fallback)?shim.Buffer.from(await shim.subtle.digest({name:'SHA-256'},new shim.TextEncoder().encode(S.parse(json.m)))):await sha(json.m);var buf;var sig;var check;try{buf=shim.Buffer.from(json.s,opt.encode||'base64')
sig=new Uint8Array(buf)
check=await(shim.ossl||shim.subtle).verify({name:'ECDSA',hash:{name:'SHA-256'}},key,sig,new Uint8Array(hash))
if(!check){throw "Signature did not match."}}catch(e){buf=shim.Buffer.from(json.s,'utf8')
sig=new Uint8Array(buf)
check=await(shim.ossl||shim.subtle).verify({name:'ECDSA',hash:{name:'SHA-256'}},key,sig,new Uint8Array(hash))
if(!check){throw "Signature did not match."}}
var r=check?S.parse(json.m):u;O.fall_soul=tmp['#'];O.fall_key=tmp['.'];O.fall_val=data;O.fall_state=tmp['>'];if(cb){try{cb(r)}catch(e){console.log(e)}}
return r}
SEA.opt.fallback=2})(USE,'./verify');USE(function(module){var shim=USE('./shim');var S=USE('./settings');var sha256hash=USE('./sha256');const importGen=async(key,salt,opt)=>{var opt=opt||{};const combo=key+(salt||shim.random(8)).toString('utf8');const hash=shim.Buffer.from(await sha256hash(combo),'binary')
const jwkKey=S.keyToJwk(hash)
return await shim.subtle.importKey('jwk',jwkKey,{name:'AES-GCM'},!1,['encrypt','decrypt'])}
module.exports=importGen})(USE,'./aeskey');USE(function(module){var SEA=USE('./root');var shim=USE('./shim');var S=USE('./settings');var aeskey=USE('./aeskey');var u;SEA.encrypt=SEA.encrypt||(async(data,pair,cb,opt)=>{try{opt=opt||{};var key=(pair||opt).epriv||pair;if(u===data){throw '`undefined` not allowed.'}
if(!key){pair=await SEA.I(null,{what:data,how:'encrypt',why:opt.why});key=pair.epriv||pair}
var msg=(typeof data=='string')?data:JSON.stringify(data);var rand={s:shim.random(9),iv:shim.random(15)};var ct=await aeskey(key,rand.s,opt).then((aes)=>(shim.subtle).encrypt({name:opt.name||'AES-GCM',iv:new Uint8Array(rand.iv)},aes,new shim.TextEncoder().encode(msg)));var r={ct:shim.Buffer.from(ct,'binary').toString(opt.encode||'base64'),iv:rand.iv.toString(opt.encode||'base64'),s:rand.s.toString(opt.encode||'base64')}
if(!opt.raw){r='SEA'+JSON.stringify(r)}
if(cb){try{cb(r)}catch(e){console.log(e)}}
return r}catch(e){console.log(e);SEA.err=e;if(SEA.throw){throw e}
if(cb){cb()}
return}});module.exports=SEA.encrypt})(USE,'./encrypt');USE(function(module){var SEA=USE('./root');var shim=USE('./shim');var S=USE('./settings');var aeskey=USE('./aeskey');SEA.decrypt=SEA.decrypt||(async(data,pair,cb,opt)=>{try{opt=opt||{};var key=(pair||opt).epriv||pair;if(!key){pair=await SEA.I(null,{what:data,how:'decrypt',why:opt.why});key=pair.epriv||pair}
var json=S.parse(data);var buf,bufiv,bufct;try{buf=shim.Buffer.from(json.s,opt.encode||'base64');bufiv=shim.Buffer.from(json.iv,opt.encode||'base64');bufct=shim.Buffer.from(json.ct,opt.encode||'base64');var ct=await aeskey(key,buf,opt).then((aes)=>(shim.subtle).decrypt({name:opt.name||'AES-GCM',iv:new Uint8Array(bufiv),tagLength:128},aes,new Uint8Array(bufct)))}catch(e){if('utf8'===opt.encode){throw "Could not decrypt"}
if(SEA.opt.fallback){opt.encode='utf8';return await SEA.decrypt(data,pair,cb,opt)}}
var r=S.parse(new shim.TextDecoder('utf8').decode(ct));if(cb){try{cb(r)}catch(e){console.log(e)}}
return r}catch(e){console.log(e);SEA.err=e;if(SEA.throw){throw e}
if(cb){cb()}
return}});module.exports=SEA.decrypt})(USE,'./decrypt');USE(function(module){var SEA=USE('./root');var shim=USE('./shim');var S=USE('./settings');SEA.secret=SEA.secret||(async(key,pair,cb,opt)=>{try{opt=opt||{};if(!pair||!pair.epriv||!pair.epub){pair=await SEA.I(null,{what:key,how:'secret',why:opt.why})}
var pub=key.epub||key;var epub=pair.epub;var epriv=pair.epriv;var ecdhSubtle=shim.ossl||shim.subtle;var pubKeyData=keysToEcdhJwk(pub);var props=Object.assign({public:await ecdhSubtle.importKey(...pubKeyData,!0,[])},{name:'ECDH',namedCurve:'P-256'});var privKeyData=keysToEcdhJwk(epub,epriv);var derived=await ecdhSubtle.importKey(...privKeyData,!1,['deriveBits']).then(async(privKey)=>{var derivedBits=await ecdhSubtle.deriveBits(props,privKey,256);var rawBits=new Uint8Array(derivedBits);var derivedKey=await ecdhSubtle.importKey('raw',rawBits,{name:'AES-GCM',length:256},!0,['encrypt','decrypt']);return ecdhSubtle.exportKey('jwk',derivedKey).then(({k})=>k)})
var r=derived;if(cb){try{cb(r)}catch(e){console.log(e)}}
return r}catch(e){console.log(e);SEA.err=e;if(SEA.throw){throw e}
if(cb){cb()}
return}});var keysToEcdhJwk=(pub,d)=>{var[x,y]=pub.split('.')
var jwk=d?{d:d}:{}
return['jwk',Object.assign(jwk,{x:x,y:y,kty:'EC',crv:'P-256',ext:!0}),{name:'ECDH',namedCurve:'P-256'}]}
module.exports=SEA.secret})(USE,'./secret');USE(function(module){var shim=USE('./shim');var SEA=USE('./root');SEA.work=USE('./work');SEA.sign=USE('./sign');SEA.verify=USE('./verify');SEA.encrypt=USE('./encrypt');SEA.decrypt=USE('./decrypt');SEA.opt.aeskey=USE('./aeskey');SEA.random=SEA.random||shim.random;SEA.Buffer=SEA.Buffer||USE('./buffer');SEA.keyid=SEA.keyid||(async(pub)=>{try{const pb=Buffer.concat(pub.replace(/-/g,'+').replace(/_/g,'/').split('.').map((t)=>Buffer.from(t,'base64')))
const id=Buffer.concat([Buffer.from([0x99,pb.length/0x100,pb.length%0x100]),pb])
const sha1=await sha1hash(id)
const hash=Buffer.from(sha1,'binary')
return hash.toString('hex',hash.length-8)}catch(e){console.log(e)
throw e}});var Gun=(SEA.window||{}).Gun||USE((typeof MODULE=="undefined"?'.':'')+'./gun',1);Gun.SEA=SEA;SEA.GUN=SEA.Gun=Gun;module.exports=SEA})(USE,'./sea');USE(function(module){var Gun=USE('./sea').Gun;Gun.chain.then=function(cb){var gun=this,p=(new Promise(function(res,rej){gun.once(res)}));return cb?p.then(cb):p}})(USE,'./then');USE(function(module){var SEA=USE('./sea');var Gun=SEA.Gun;var then=USE('./then');function User(root){this._={$:this}}
User.prototype=(function(){function F(){};F.prototype=Gun.chain;return new F()}())
User.prototype.constructor=User;Gun.chain.user=function(pub){var gun=this,root=gun.back(-1),user;if(pub){return root.get('~'+pub)}
if(user=root.back('user')){return user}
var root=(root._),at=root,uuid=at.opt.uuid||Gun.state.lex;(at=(user=at.user=gun.chain(new User))._).opt={};at.opt.uuid=function(cb){var id=uuid(),pub=root.user;if(!pub||!(pub=pub.is)||!(pub=pub.pub)){return id}
id=id+'~'+pub+'.';if(cb&&cb.call){cb(null,id)}
return id}
return user}
Gun.User=User;module.exports=User})(USE,'./user');USE(function(module){var SEA=USE('./sea');var User=USE('./user');var authsettings=USE('./settings');var Gun=SEA.Gun;var noop=function(){};User.prototype.create=function(alias,pass,cb,opt){var gun=this,cat=(gun._),root=gun.back(-1);cb=cb||noop;if(cat.ing){cb({err:Gun.log("User is already being created or authenticated!"),wait:!0});return gun}
cat.ing=!0;opt=opt||{};var act={},u;act.a=function(pubs){act.pubs=pubs;if(pubs&&!opt.already){var ack={err:Gun.log('User already created!')};cat.ing=!1;cb(ack);gun.leave();return}
act.salt=Gun.text.random(64);SEA.work(pass,act.salt,act.b)}
act.b=function(proof){act.proof=proof;SEA.pair(act.c)}
act.c=function(pair){var tmp;act.pair=pair||{};if(tmp=cat.root.user){tmp._.sea=pair;tmp.is={pub:pair.pub,epub:pair.epub,alias:alias}}
act.data={pub:pair.pub};act.d()}
act.d=function(){act.data.alias=alias;act.e()}
act.e=function(){act.data.epub=act.pair.epub;SEA.encrypt({priv:act.pair.priv,epriv:act.pair.epriv},act.proof,act.f,{raw:1})}
act.f=function(auth){act.data.auth=JSON.stringify({ek:auth,s:act.salt});act.g(act.data.auth)}
act.g=function(auth){var tmp;act.data.auth=act.data.auth||auth;root.get(tmp='~'+act.pair.pub).put(act.data);root.get('~@'+alias).put(Gun.obj.put({},tmp,Gun.val.link.ify(tmp)));setTimeout(function(){cat.ing=!1;cb({ok:0,pub:act.pair.pub});if(noop===cb){gun.auth(alias,pass)}},10)}
root.get('~@'+alias).once(act.a);return gun}
User.prototype.auth=function(alias,pass,cb,opt){var gun=this,cat=(gun._),root=gun.back(-1);cb=cb||function(){};if(cat.ing){cb({err:Gun.log("User is already being created or authenticated!"),wait:!0});return gun}
cat.ing=!0;opt=opt||{};var pair=(alias&&(alias.pub||alias.epub))?alias:(pass&&(pass.pub||pass.epub))?pass:null;var act={},u;act.a=function(data){if(!data){return act.b()}
if(!data.pub){var tmp=[];Gun.node.is(data,function(v){tmp.push(v)})
return act.b(tmp)}
if(act.name){return act.f(data)}
act.c((act.data=data).auth)}
act.b=function(list){var get=(act.list=(act.list||[]).concat(list||[])).shift();if(u===get){if(act.name){return act.err('Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.')}
return act.err('Wrong user or password.')}
root.get(get).once(act.a)}
act.c=function(auth){if(u===auth){return act.b()}
if(Gun.text.is(auth)){return act.c(Gun.obj.ify(auth))}
SEA.work(pass,(act.auth=auth).s,act.d,act.enc)}
act.d=function(proof){SEA.decrypt(act.auth.ek,proof,act.e,act.enc)}
act.e=function(half){if(u===half){if(!act.enc){act.enc={encode:'utf8'};return act.c(act.auth)}act.enc=null;return act.b()}
act.half=half;act.f(act.data)}
act.f=function(data){if(!data||!data.pub){return act.b()}
var tmp=act.half||{};act.g({pub:data.pub,epub:data.epub,priv:tmp.priv,epriv:tmp.epriv})}
act.g=function(pair){act.pair=pair;var user=(root._).user,at=(user._);var tmp=at.tag;var upt=at.opt;at=user._=root.get('~'+pair.pub)._;at.opt=upt;user.is={pub:pair.pub,epub:pair.epub,alias:alias};at.sea=act.pair;cat.ing=!1;try{if(pass&&!Gun.obj.has(Gun.obj.ify(cat.root.graph['~'+pair.pub].auth),':')){opt.shuffle=opt.change=pass}}catch(e){}
opt.change?act.z():cb(at);if(SEA.window&&((gun.back('user')._).opt||opt).remember){try{var sS={};sS=window.sessionStorage;sS.recall=!0;sS.alias=alias;sS.tmp=pass}catch(e){}}
try{(root._).on('auth',at)}catch(e){Gun.log("Your 'auth' callback crashed with:",e)}}
act.z=function(){act.salt=Gun.text.random(64);SEA.work(opt.change,act.salt,act.y)}
act.y=function(proof){SEA.encrypt({priv:act.pair.priv,epriv:act.pair.epriv},proof,act.x,{raw:1})}
act.x=function(auth){act.w(JSON.stringify({ek:auth,s:act.salt}))}
act.w=function(auth){if(opt.shuffle){console.log('migrate core account from UTF8 & shuffle');var tmp=Gun.obj.to(act.data);Gun.obj.del(tmp,'_');tmp.auth=auth;root.get('~'+act.pair.pub).put(tmp)}
root.get('~'+act.pair.pub).get('auth').put(auth,cb)}
act.err=function(e){var ack={err:Gun.log(e||'User cannot be found!')};cat.ing=!1;cb(ack)}
act.plugin=function(name){if(!(act.name=name)){return act.err()}
var tmp=[name];if('~'!==name[0]){tmp[1]='~'+name;tmp[2]='~@'+name}
act.b(tmp)}
if(pair){act.g(pair)}else if(alias){root.get('~@'+alias).once(act.a)}else if(!alias&&!pass){SEA.name(act.plugin)}
return gun}
User.prototype.pair=function(){console.log("user.pair() IS DEPRECATED AND WILL BE DELETED!!!");var user=this;if(!user.is){return!1}
return user._.sea}
User.prototype.leave=function(opt,cb){var gun=this,user=(gun.back(-1)._).user;if(user){delete user.is;delete user._.is;delete user._.sea}
if(SEA.window){try{var sS={};sS=window.sessionStorage;delete sS.alias;delete sS.tmp;delete sS.recall}catch(e){}}
return gun}
User.prototype.delete=async function(alias,pass,cb){console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");var gun=this,root=gun.back(-1),user=gun.back('user');try{user.auth(alias,pass,function(ack){var pub=(user.is||{}).pub;user.map().once(function(){this.put(null)});user.leave();(cb||noop)({ok:0})})}catch(e){Gun.log('User.delete failed! Error:',e)}
return gun}
User.prototype.recall=function(opt,cb){var gun=this,root=gun.back(-1),tmp;opt=opt||{};if(opt&&opt.sessionStorage){if(SEA.window){try{var sS={};sS=window.sessionStorage;if(sS){(root._).opt.remember=!0;((gun.back('user')._).opt||opt).remember=!0;if(sS.recall||(sS.alias&&sS.tmp)){root.user().auth(sS.alias,sS.tmp,cb)}}}catch(e){}}
return gun}
return gun}
User.prototype.alive=async function(){console.log("user.alive() IS DEPRECATED!!!");const gunRoot=this.back(-1)
try{await authRecall(gunRoot)
return gunRoot._.user._}catch(e){const err='No session!'
Gun.log(err)
throw{err}}}
User.prototype.trust=async function(user){if(Gun.is(user)){user.get('pub').get((ctx,ev)=>{console.log(ctx,ev)})}
user.get('trust').get(path).put(theirPubkey)}
User.prototype.grant=function(to,cb){console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var gun=this,user=gun.back(-1).user(),pair=user._.sea,path='';gun.back(function(at){if(at.is){return}path+=(at.get||'')});(async function(){var enc,sec=await user.get('grant').get(pair.pub).get(path).then();sec=await SEA.decrypt(sec,pair);if(!sec){sec=SEA.random(16).toString();enc=await SEA.encrypt(sec,pair);user.get('grant').get(pair.pub).get(path).put(enc)}
var pub=to.get('pub').then();var epub=to.get('epub').then();pub=await pub;epub=await epub;var dh=await SEA.secret(epub,pair);enc=await SEA.encrypt(sec,dh);user.get('grant').get(pub).get(path).put(enc,cb)}());return gun}
User.prototype.secret=function(data,cb){console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var gun=this,user=gun.back(-1).user(),pair=user.pair(),path='';gun.back(function(at){if(at.is){return}path+=(at.get||'')});(async function(){var enc,sec=await user.get('trust').get(pair.pub).get(path).then();sec=await SEA.decrypt(sec,pair);if(!sec){sec=SEA.random(16).toString();enc=await SEA.encrypt(sec,pair);user.get('trust').get(pair.pub).get(path).put(enc)}
enc=await SEA.encrypt(data,sec);gun.put(enc,cb)}());return gun}
module.exports=User})(USE,'./create');USE(function(module){var SEA=USE('./sea')
var Gun=SEA.Gun;Gun.on('opt',function(at){if(!at.sea){at.sea={own:{}};at.on('put',check,at)}
this.to.next(at)});function each(msg){var to=this.to,vertex=(msg.$._).put,c=0,d;Gun.node.is(msg.put,function(val,key,node){var tmp=Gun.obj.ify(val)||noop;if(u!==tmp[':']){node[key]=SEA.opt.unpack(tmp);return}
if(!SEA.opt.check(val)){return}
c++;SEA.verify(val,!1,function(data){c--;node[key]=SEA.opt.unpack(data,key,node);if(d&&!c&&(c=-1)){to.next(msg)}})});if((d=!0)&&!c){to.next(msg)}}
function signature(msg){if((msg._||noop).user){return this.to.next(msg)}
var ctx=this.as;(msg._||(msg._=function(){})).user=ctx.user;security.call(this,msg)}
var u;function check(msg){var eve=this,at=eve.as,put=msg.put,soul=put['#'],key=put['.'],val=put[':'],state=put['>'],id=msg['#'],tmp;if((msg._||'').faith&&(at.opt||'').faith&&'function'==typeof msg._){SEA.verify(SEA.opt.pack(put),!1,function(data){put['=']=SEA.opt.unpack(data);eve.to.next(msg)});return}
var no=function(why){at.on('in',{'@':id,err:why})};(msg._||'').DBG&&((msg._||'').DBG.c=+new Date);if('#'===soul[0]){check.hash(eve,msg,val,key,soul,at,no);return}
if('~@'===soul){check.alias(eve,msg,val,key,soul,at,no);return}
if('~@'===soul.slice(0,2)){check.pubs(eve,msg,val,key,soul,at,no);return}
if(tmp=SEA.opt.pub(soul)){check.pub(eve,msg,val,key,soul,at,no,at.user||'',tmp);return}
check.any(eve,msg,val,key,soul,at,no,at.user||'');return;eve.to.next(msg)}
check.hash=function(eve,msg,val,key,soul,at,no){SEA.work(val,null,function(data){if(data&&data===key.split('#').slice(-1)[0]){return eve.to.next(msg)}
no("Data hash not same as hash!")},{name:'SHA-256'})}
check.alias=function(eve,msg,val,key,soul,at,no){if(!val){return no("Data must exist!")}
if('~@'+key===link_is(val)){return eve.to.next(msg)}
no("Alias not same!")};check.pubs=function(eve,msg,val,key,soul,at,no){if(!val){return no("Alias must exist!")}
if(key===link_is(val)){return eve.to.next(msg)}
no("Alias not same!")};check.pub=function(eve,msg,val,key,soul,at,no,user,pub){var tmp;if('pub'===key&&'~'+pub===soul){if(val===pub){return eve.to.next(msg)}
return no("Account not same!")}
if((tmp=user.is)&&pub===tmp.pub){SEA.sign(SEA.opt.pack(msg.put),(user._).sea,function(data){if(u===data){return no(SEA.err||'Signature fail.')}
if(tmp=link_is(val)){(at.sea.own[tmp]=at.sea.own[tmp]||{})[pub]=1}
msg.put[':']=JSON.stringify({':':tmp=SEA.opt.unpack(data.m),'~':data.s});msg.put['=']=tmp;eve.to.next(msg)},{raw:1});return}
SEA.verify(SEA.opt.pack(msg.put),pub,function(data){var tmp;data=SEA.opt.unpack(data);if(u===data){return no("Unverified data.")}
if((tmp=link_is(data))&&pub===SEA.opt.pub(tmp)){(at.sea.own[tmp]=at.sea.own[tmp]||{})[pub]=1}
msg.put['=']=data;eve.to.next(msg)})};check.any=function(eve,msg,val,key,soul,at,no,user){var tmp,pub;if(at.opt.secure){return no("Soul missing public key at '"+key+"'.")}
at.on('secure',function(msg){this.off();if(!at.opt.secure){return eve.to.next(msg)}
no("Data cannot be changed.")}).on.on('secure',msg);return}
var link_is=Gun.val.link.is,state_ify=Gun.state.ify;function security(msg){var at=this.as,sea=at.sea,to=this.to;if(at.opt.faith&&(msg._||noop).faith){this.to.next(msg);return}
if(msg.get){var soul=msg.get['#'];if(soul){if(typeof soul!=='string'){return to.next(msg)}
if('alias'===soul){return to.next(msg)}else if('~@'===soul.slice(0,2)){return to.next(msg)}else{return to.next(msg)}}}
if(msg.put){var check={},each={},u;each.node=function(node,soul){if(Gun.obj.empty(node,'_')){return check['node'+soul]=0}
Gun.obj.map(node,each.way,{soul:soul,node:node})};each.way=function(val,key){var soul=this.soul,node=this.node,tmp;if('_'===key){return}
if('~@'===soul){each.alias(val,key,node,soul);return}
if('~@'===soul.slice(0,2)){each.pubs(val,key,node,soul);return}
if('~'===soul.slice(0,1)&&2===(tmp=soul.slice(1)).split('.').length){each.pub(val,key,node,soul,tmp,(msg._||noop).user);return}
each.any(val,key,node,soul,(msg._||noop).user);return;return each.end({err:"No other data allowed!"})};each.alias=function(val,key,node,soul){if(!val){return each.end({err:"Data must exist!"})}
if('~@'+key===Gun.val.link.is(val)){return check['alias'+key]=0}
each.end({err:"Mismatching alias."})};each.pubs=function(val,key,node,soul){if(!val){return each.end({err:"Alias must exist!"})}
if(key===Gun.val.link.is(val)){return check['pubs'+soul+key]=0}
each.end({err:"Alias must match!"})};each.pub=function(val,key,node,soul,pub,user){var tmp;if('pub'===key){if(val===pub){return(check['pub'+soul+key]=0)}
return each.end({err:"Account must match!"})}
check['user'+soul+key]=1;if(Gun.is(msg.$)&&user&&user.is&&pub===user.is.pub){SEA.sign(SEA.opt.prep(tmp=SEA.opt.parse(val),key,node,soul),(user._).sea,function(data){var rel;if(u===data){return each.end({err:SEA.err||'Pub signature fail.'})}
if(rel=Gun.val.link.is(val)){(at.sea.own[rel]=at.sea.own[rel]||{})[pub]=!0}
node[key]=JSON.stringify({':':SEA.opt.unpack(data.m),'~':data.s});check['user'+soul+key]=0;each.end({ok:1})},{check:SEA.opt.pack(tmp,key,node,soul),raw:1});return}
SEA.verify(SEA.opt.pack(val,key,node,soul),pub,function(data){var rel,tmp;data=SEA.opt.unpack(data,key,node);if(u===data){return each.end({err:"Unverified data."})}
if((rel=Gun.val.link.is(data))&&pub===SEA.opt.pub(rel)){(at.sea.own[rel]=at.sea.own[rel]||{})[pub]=!0}
check['user'+soul+key]=0;each.end({ok:1})})};each.any=function(val,key,node,soul,user){var tmp,pub;if(!(pub=SEA.opt.pub(soul))){if(at.opt.secure){each.end({err:"Soul is missing public key at '"+key+"'."});return}
check['any'+soul+key]=1;at.on('secure',function(msg){this.off();check['any'+soul+key]=0;if(at.opt.secure){msg=null}
each.end(msg||{err:"Data cannot be modified."})}).on.on('secure',msg);return}
if(Gun.is(msg.$)&&user&&user.is&&pub===user.is.pub){check['any'+soul+key]=1;SEA.sign(SEA.opt.prep(tmp=SEA.opt.parse(val),key,node,soul),(user._).sea,function(data){if(u===data){return each.end({err:'My signature fail.'})}
node[key]=JSON.stringify({':':SEA.opt.unpack(data.m),'~':data.s});check['any'+soul+key]=0;each.end({ok:1})},{check:SEA.opt.pack(tmp,key,node,soul),raw:1});return}
check['any'+soul+key]=1;SEA.verify(SEA.opt.pack(val,key,node,soul),pub,function(data){var rel;data=SEA.opt.unpack(data,key,node);if(u===data){return each.end({err:"Mismatched owner on '"+key+"'."})}
if((rel=Gun.val.link.is(data))&&pub===SEA.opt.pub(rel)){(at.sea.own[rel]=at.sea.own[rel]||{})[pub]=!0}
check['any'+soul+key]=0;each.end({ok:1})})}
each.end=function(ctx){if(each.err){return}
if((each.err=ctx.err)||ctx.no){console.log('NO!',each.err,msg.put);return}
if(!each.end.ed){return}
if(Gun.obj.map(check,function(no){if(no){return!0}})){return}(msg._||{}).user=at.user||security;to.next(msg)};Gun.obj.map(msg.put,each.node);each.end({end:each.end.ed=!0});return}
to.next(msg)}
SEA.opt.pub=function(s){if(!s){return}
s=s.split('~');if(!s||!(s=s[1])){return}
s=s.split('.');if(!s||2>s.length){return}
if('@'===(s[0]||'')[0]){return}
s=s.slice(0,2).join('.');return s}
SEA.opt.prep=function(d,k,n,s){return{'#':s,'.':k,':':SEA.opt.parse(d),'>':Gun.state.is(n,k)}}
SEA.opt.pack=function(d,k,n,s){if(SEA.opt.check(d)){return d}
var meta=(Gun.obj.ify((d&&d[':'])||d)||''),sig=meta['~'];return sig?{m:{'#':s||d['#'],'.':k||d['.'],':':meta[':'],'>':d['>']||Gun.state.is(n,k)},s:sig}:d}
var O=SEA.opt;SEA.opt.unpack=function(d,k,n){var tmp;if(u===d){return}
if(d&&(u!==(tmp=d[':']))){return tmp}
k=k||O.fall_key;if(!n&&O.fall_val){n={};n[k]=O.fall_val}
if(!k||!n){return}
if(d===n[k]){return d}
if(!SEA.opt.check(n[k])){return d}
var soul=Gun.node.soul(n)||O.fall_soul,s=Gun.state.is(n,k)||O.fall_state;if(d&&4===d.length&&soul===d[0]&&k===d[1]&&fl(s)===fl(d[3])){return d[2]}
if(s<SEA.opt.shuffle_attack){return d}}
SEA.opt.shuffle_attack=1546329600000;var noop=function(){},u;var fl=Math.floor;var rel_is=Gun.val.rel.is;var obj_ify=Gun.obj.ify})(USE,'./index')}())