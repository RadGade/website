(function(){var d=(typeof window!=="undefined")?window.Gun:require("../gun");d.on("opt",function(l){this.to.next(l);var b=l.opt;if(l.once){return}if(!d.Mesh){return}if(false===b.RTCPeerConnection){return}var o;if(typeof window!=="undefined"){o=window}if(typeof global!=="undefined"){o=global}o=o||{};var k=b.RTCPeerConnection||o.RTCPeerConnection||o.webkitRTCPeerConnection||o.mozRTCPeerConnection;var m=b.RTCSessionDescription||o.RTCSessionDescription||o.webkitRTCSessionDescription||o.mozRTCSessionDescription;var n=b.RTCIceCandidate||o.RTCIceCandidate||o.webkitRTCIceCandidate||o.mozRTCIceCandidate;if(!k||!m||!n){return}b.RTCPeerConnection=k;b.RTCSessionDescription=m;b.RTCIceCandidate=n;b.rtc=b.rtc||{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.sipgate.net:3478"}]};b.rtc.dataChannel=b.rtc.dataChannel||{ordered:false,maxRetransmits:2};b.rtc.sdp=b.rtc.sdp||{mandatory:{OfferToReceiveAudio:false,OfferToReceiveVideo:false}};b.announce=function(e){l.on("out",{rtc:{id:b.pid,to:e}})};var a=b.mesh=b.mesh||d.Mesh(l);l.on("create",function(e){this.to.next(e);setTimeout(b.announce,1)});l.on("in",function(e){if(e.rtc){p(e)}this.to.next(e)});function p(i){var g=i.rtc,f,h;if(!g||!g.id){return}delete b.announce[g.id];if(h=g.answer){if(!(f=b.peers[g.id]||p[g.id])||f.remoteSet){return}return f.setRemoteDescription(f.remoteSet=new b.RTCSessionDescription(h))}if(h=g.candidate){f=b.peers[g.id]||p[g.id]||p({rtc:{id:g.id}});return f.addIceCandidate(new b.RTCIceCandidate(h))}if(p[g.id]){return}(f=new b.RTCPeerConnection(b.rtc)).id=g.id;var e=f.wire=f.createDataChannel("dc",b.rtc.dataChannel);p[g.id]=f;e.onclose=function(){delete p[g.id];a.bye(f)};e.onerror=function(j){};e.onopen=function(j){a.hi(f)};e.onmessage=function(j){if(!j){return}a.hear(j.data||j,f)};f.onicecandidate=function(j){if(!j.candidate){return}l.on("out",{"@":i["#"],rtc:{candidate:j.candidate,id:b.pid}})};f.ondatachannel=function(j){var r=j.channel;r.onmessage=e.onmessage;r.onopen=e.onopen;r.onclose=e.onclose};if(h=g.offer){f.setRemoteDescription(new b.RTCSessionDescription(h));f.createAnswer(function(j){f.setLocalDescription(j);l.on("out",{"@":i["#"],rtc:{answer:j,id:b.pid}})},function(){},b.rtc.sdp);return}f.createOffer(function(j){f.setLocalDescription(j);l.on("out",{"@":i["#"],rtc:{offer:j,id:b.pid}})},function(){},b.rtc.sdp);return f}});var c=function(){}}());