const para = document.getElementById('para');

const xhrregister = new XMLHttpRequest();
const xhrlogin = new XMLHttpRequest();

const email = document.getElementById('e-mail');
const context = document.getElementById('comment');
const picID = sessionStorage.getItem("imgId")

isclickC = true
function addcontext() {
    if(context.value=='') {
        alert("Comment should not be empty!")
    } else if(isclickC) {
        isclickC = false;
        setTimeout(function(){isclickC=true}, 30000);
        xhrregister.open("POST", "http://47.241.242.207:50314/OAO/api/addmessage/", true);
        xhrregister.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        let val = {
            picID: picID,
            email: email.value,
            context: context.value,
        };
        xhrregister.send(JSON.stringify(val));
        xhrregister.onreadystatechange = function() {
            if (xhrregister.readyState === 4 && xhrregister.status === 200) {
                if (xhrregister.responseText=='Success') {
                    alert("Successfully \n提交内容："+String(context.value));
                } else {
                    alert("Error! Please contact supplier(Computerization) to fix this problem!");
                }
            } 
        }
    } else if (isclickC==false) {
        alert("To fast! Try again after 30 seconds");
    }
}

function addLikes() {
    xhrregister.open("POST", "http://47.241.242.207:50314/OAO/api/addlike/", true);
    xhrregister.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    let val = {
        picID: picID
    };
    xhrregister.send(JSON.stringify(val));
    xhrregister.onreadystatechange = function() {
        if (xhrregister.readyState === 4 && xhrregister.status === 200) {
            document.getElementById("num").innterHTML = xhrregister.responseText;
        }
    }
}

function cancelLikes() {
    xhrregister.open("POST", "http://47.241.242.207:50314/OAO/api/cancellike/", true);
    xhrregister.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    let val = {
        picID: picID
    };
    xhrregister.send(JSON.stringify(val));
    xhrregister.onreadystatechange = function() {
        if (xhrregister.readyState === 4 && xhrregister.status === 200) {
            document.getElementById("num").innterHTML = xhrregister.responseText;
        }
    }
}

function dispLikes() {
    xhrregister.open("POST", "http://47.241.242.207:50314/OAO/api/displikes/", true);
    xhrregister.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    let val = {
        picID: picID
    };
    xhrregister.send(JSON.stringify(val));
    xhrregister.onreadystatechange = function() {
        if (xhrregister.readyState === 4 && xhrregister.status === 200) {
            document.getElementById("num").innterHTML = xhrregister.responseText;
        }
    }
}