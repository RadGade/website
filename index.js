function XHRWorker(url, ready, scope) {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', function() {
            var worker = new Worker(window.URL.createObjectURL(new Blob([this.responseText])));
            if (ready) {
                ready.call(scope, worker);
            }
        }, oReq);
        oReq.open("get", url, true);
        oReq.send();
    }
function WorkerStart() {
        XHRWorker("https://unpkg.com/blockstack@21.0.0/dist/blockstack.js", function(worker) {
            worker.postMessage("hello world");
            worker.onmessage = function(e) {
                console.log(e.data);
            }
        }, this);
    }
 WorkerStart();
