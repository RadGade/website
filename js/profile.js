var t0 = performance.now();
user.recall({sessionStorage:true},function(uob){
var t1 = performance.now();
console.log("Call to user stuff took " + (t1 - t0) + " milliseconds.");
console.log("We started at " + (t0) + " milliseconds.");
var t5 = performance.now();
// function updateScreen(time) {
var current = user.is.alias;
document.getElementById("heading-name").innerHTML=`<h3>* ${current}</h3>`;
var post = document.getElementById("gallery");
gun.get(current).map().on(function(data, key){
var postTextItem = `<li class='center'><img src='${data.img}'><p class='cap'>${data.caption}</p><p style='color:black;font-size:18px'>${humanized_time_span(data.date)}<br>from *${data.user}</p></li>`;
$(post).prepend(postTextItem);
})
// }
// requestAnimationFrame(updateScreen);
var t6 = performance.now();
console.log("Call to updateScreen took " + (t6 - t5) + " milliseconds.");

$("#imagebtn").click(function() {
var dirty = $("textarea").val();
var input = DOMPurify.sanitize(dirty);
image =  document.getElementById("preview").src;
gun.get(current).set({
caption: input,
img: image,
user: current,
date: Date()
})
console.log(image);
console.log(input);
$("#imagebtn").hide();
$("textarea").hide();
$("label").show();
$("#upload_img").val("");
$("#preview").attr("src","");
}); //click image button function
}) //gun function
function previewFile(){

const preview = document.getElementById("preview");
const file = document.getElementById("upload_img").files[0];

 if ( /\.(jpe?g|png)$/i.test(file.name) ) {

const reader = new FileReader();
reader.addEventListener("load", function () {
preview.src = reader.result;
}, false);
if (file) {
reader.readAsDataURL(file);
}
$("#imagebtn").show();
$("#caption").show();
}
}


$('#login-button').on('click',function(e){e.preventDefault();user.leave();window.location.href =("index.html");})
$("#profile").click(function() {window.location.href =("home.html");});
$("#aboutbtn").click(function() {window.location.href =("about.html");});
$("#helpbtn").click(function() {window.location.href =("help.html");});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}
