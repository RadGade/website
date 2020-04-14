var ajax = new XMLHttpRequest();
ajax.open("GET", "user.html", false);
ajax.send();
document.body.innerHTML += ajax.responseText;
