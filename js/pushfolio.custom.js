function setCookie(e, t, s) {
    var a = new Date;
    a.setTime(a.getTime() + 24 * s * 60 * 60 * 1e3);
    var i = "expires=" + a.toUTCString();
    document.cookie = e + "=" + t + ";" + i + ";path=/"
}

function readCookie(e) {
    for (var t = e + "=", s = document.cookie.split(";"), a = 0; a < s.length; a++) {
        for (var i = s[a];
            " " == i.charAt(0);) i = i.substring(1);
        if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
    }
    return ""
}

function closePopup(e, t) {
    var s;
    switch (e.frequency) {
        case "once":
            s = 99999;
            break;
        case "daily":
            s = 1;
            break;
        case "weekly":
            s = 7;
            break;
        case "monthly":
            s = 30;
            break;
        case "always":
            s = 0;
            break;
        default:
            s = 180
    }
    if ("remove" in Element.prototype || (Element.prototype.remove = function() {
            this.parentNode && this.parentNode.removeChild(this)
        }), setCookie(t, "true", s), document.getElementById(t)) {
        document.getElementById(t).remove();
        var a = document.getElementById(t);
        if (a)
            for (; a.hasChildNodes();) a.removeChild(a.firstChild)
    }
}

function checkIfExists(e) {
    return void 0 !== e
}

function whenClosePopup(e, t) {
    var s = document.querySelector("#" + t + " #pf_close_link");
    s && s.addEventListener("click", function() {
        closePopup(e, t)
    });
    var a = document.querySelector("#" + t + " #pf__element--btn-cta");
    a && a.addEventListener("click", function() {
        closePopup(e, t), sendGaData(t, "click")
    });
    var i = document.querySelector("#" + t + " #pf_close_cross_link");
    i && i.addEventListener("click", function() {
        closePopup(e, t)
    })
}

function renderFullBar(t, e) {
    var s = e + "-" + t.popupName.replace(" ", "-"),
        a = document.createElement("div");
    a.id = s, a.className = "pushFolio " + e, !1 === checkIfExists(t.delay) && (t.delay = 100), setTimeout(function() {
        ! function() {
            var e = "";
            document.body.appendChild(a), a.setAttribute("style", t.positionY + ":0px;"), e += '<div class="inner width-all-75 mx-auto my-4">', (checkIfExists(t.messageContentTitle) || checkIfExists(t.messageContent)) && (e += '<div class="content width-all-80 d-inline-block px-4 v-align-middle">'), checkIfExists(t.messageContentTitle) && (e += '<h3 class="fz-24 fw-700">' + t.messageContentTitle + "</h3>"), checkIfExists(t.messageContent) && (e += '<p class="fz-16">' + t.messageContent + "</p>"), (checkIfExists(t.messageContentTitle) || checkIfExists(t.messageContent)) && (e += "</div>"), checkIfExists(t.messageCtaText) && (e += '<div class="button width-all-20 d-inline-block v-align-middle"><a href="' + t.messageCtaURL + '" target="_blank" class="btn btn-primary fw-700 pf__element--btn-cta pf_close m-0 text-center px-0" id="pf__element--btn-cta"'), checkIfExists(t.messageCtaColor) && checkIfExists(t.messageCtaURL) && checkIfExists(t.messageCtaText) && (e += 'style="background-color:' + t.messageCtaColor + ';" '), checkIfExists(t.messageCtaText) && (e += ">" + t.messageCtaText + "</a></div>"), e += "</div>", a.innerHTML = e, whenClosePopup(t, s)
        }()
    }, t.delay)
}

function renderMessagePopup(t, e) {
    var s = e + "-" + t.popupName.replace(" ", "-"),
        a = document.createElement("div");
    a.id = s, a.className = "pushFolio " + e, !1 === checkIfExists(t.delay) && (t.delay = 100), setTimeout(function() {
        ! function() {
            var e = "";
            document.body.appendChild(a), a.setAttribute("style", t.positionX + ": 20px; " + t.positionY + ": 20px; "), checkIfExists(t.headerText) && (e += '<header class="p-3 bg-black-80">'), checkIfExists(t.headerAvatar) && checkIfExists(t.headerText) && (e += '<img class="avatar mr-3" src="' + t.headerAvatar + '" width="40" height="40"/>'), checkIfExists(t.headerText) && (e += '<h5 class="m-0 fw-400 fz-16">' + t.headerText + "</h5></header>"), checkIfExists(t.messageImageSrc) && (e += '<figure><img src="' + t.messageImageSrc + '"/></figure>'), e += '<div class="inner p-3 p-sm-4">', checkIfExists(t.messageContentTitle) && (e += '<h3 class="fz-24 mb-sm-3 mb-2 fw-700">' + t.messageContentTitle + "</h3>"), checkIfExists(t.messageContent) && (e += '<p class="fz-16">' + t.messageContent + "</p>"), checkIfExists(t.messageCtaURL) && checkIfExists(t.messageCtaText) && (e += '<a class="btn btn-primary fw-700 pf__element--btn-cta pf_close  mt-3 mb-0 text-center px-0" id="pf__element--btn-cta" href="' + t.messageCtaURL + '" '), checkIfExists(t.messageCtaColor) && checkIfExists(t.messageCtaURL) && checkIfExists(t.messageCtaText) && (e += 'style="background-color:' + t.messageCtaColor + ';" '), checkIfExists(t.messageCtaURL) && checkIfExists(t.messageCtaText) && (e += ' target="_blank">' + t.messageCtaText + "</a>"), e += '<div class="pf_close_cross" id="pf_close_cross_link"><svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> \x3c!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch --\x3e <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Artboard-5" transform="translate(-7.000000, -7.000000)"> <g id="Group" transform="translate(7.000000, 7.000000)"> <g id="Group-2"> <circle id="Oval" fill="#FFFFFF" fill-rule="nonzero" cx="10.5" cy="10.5" r="10.5"></circle> <path d="M14.5044643,13.1116071 C14.6294649,13.2366078 14.6919643,13.388392 14.6919643,13.5669643 C14.6919643,13.7455366 14.6294649,13.8973208 14.5044643,14.0223214 L13.59375,14.9330357 C13.4687494,15.0580363 13.3169652,15.1205357 13.1383929,15.1205357 C12.9598205,15.1205357 12.8080363,15.0580363 12.6830357,14.9330357 L10.7142857,12.9642857 L8.74553571,14.9330357 C8.62053509,15.0580363 8.46875089,15.1205357 8.29017857,15.1205357 C8.11160625,15.1205357 7.95982205,15.0580363 7.83482143,14.9330357 L6.92410714,14.0223214 C6.79910652,13.8973208 6.73660714,13.7455366 6.73660714,13.5669643 C6.73660714,13.388392 6.79910652,13.2366078 6.92410714,13.1116071 L8.89285714,11.1428571 L6.92410714,9.17410714 C6.79910652,9.04910652 6.73660714,8.89732232 6.73660714,8.71875 C6.73660714,8.54017768 6.79910652,8.38839348 6.92410714,8.26339286 L7.83482143,7.35267857 C7.95982205,7.22767795 8.11160625,7.16517857 8.29017857,7.16517857 C8.46875089,7.16517857 8.62053509,7.22767795 8.74553571,7.35267857 L10.7142857,9.32142857 L12.6830357,7.35267857 C12.8080363,7.22767795 12.9598205,7.16517857 13.1383929,7.16517857 C13.3169652,7.16517857 13.4687494,7.22767795 13.59375,7.35267857 L14.5044643,8.26339286 C14.6294649,8.38839348 14.6919643,8.54017768 14.6919643,8.71875 C14.6919643,8.89732232 14.6294649,9.04910652 14.5044643,9.17410714 L12.5357143,11.1428571 L14.5044643,13.1116071 Z" id="???" fill="#222222"></path> </g> </g> </g> </g> </svg></div></div>', a.innerHTML = e, whenClosePopup(t, s)
        }()
    }, t.delay)
}

function pushFolio() {
    var a = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    this.popupModal = function(e) {
        var t = "pf__message",
            s = readCookie(t + "-" + e.popupName);
        e.delay;
        "true" !== s && (!1 === e.mobile && !1 === a ? renderMessagePopup(e, t) : !0 === e.mobile ? renderMessagePopup(e, t) : !1 === checkIfExists(e.mobile) && renderMessagePopup(e, t))
    }, this.fullBar = function(e) {
        var t = "pf__bottom-bar",
            s = readCookie(t + "-" + e.popupName);
        e.delay;
        "true" !== s && (!1 === e.mobile && !1 === a ? renderFullBar(e, t) : !0 === e.mobile ? renderFullBar(e, t) : !1 === checkIfExists(e.mobile) && renderFullBar(e, t))
    }
}
var pushFolio = new pushFolio;