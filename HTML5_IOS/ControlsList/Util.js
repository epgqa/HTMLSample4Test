// JScript source code

function getUrlParm(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);

    if (results == null)
        return "";
    else
        return results[1];
}


function ValidValue(checkStr, minval, maxval) {
    var checkOK = "0123456789";
    var bValid = false;

    for (i = 0; i < checkStr.length; i++) {
        ch = checkStr.charAt(i);
        bValid = false;
        for (j = 0; j < checkOK.length; j++) {
            if (ch == checkOK.charAt(j)) {
                bValid = true;
                break;
            }
        }
        if (!bValid)
            return (false);
    }

    var prsVal = parseInt(checkStr);
    if (prsVal >= minval && prsVal <= maxval)
        return (true);
    else
        return (false);
}

function GetCurrentFile(pathFile) {
    
    var path = window.location.href;
    var temp = new Array();
    temp = path.split('controls.html');
    if (temp.length > 1) {
        var arr = new Array();
        arr = pathFile.split(temp[0]);
        if (arr.length > 1)
            return (arr[1]);
    }
    return pathFile;

}
function GetShortFileName(pathFile) {
   
    var temp = new Array();
    temp = pathFile.split('/');
    if (temp.length > 0)
        return temp[temp.length - 1];
    return pathFile;
}

function stripHTML(oldString) {
    var newString = "";
    var inTag = false;
    for (var i = 0; i < oldString.length; i++) {

        if (oldString.charAt(i) == '<') inTag = true;
        if (oldString.charAt(i) == '>') {
            if (oldString.charAt(i + 1) == "<") {
                //dont do anything
            }
            else {
                inTag = false;
                i++;
            }
        }

        if (!inTag) newString += oldString.charAt(i);

    }
    return newString;
}

function createEvent() {
    var oEvent = document.getElementById(IDControl);
    oEvent.setAttribute('onclick', 'DisplayComment(\'Single click control test\');');
    oEvent.setAttribute('ondblclick', 'DisplayComment(\'Double click control test\');');
    oEvent.setAttribute('oncontextmenu', 'DisplayComment(\'Right click control test\');');
}

function __getIEVersion() {
    var rv = -1; // Return value assumes failure.  
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

function __getOperaVersion() {
    var rv = 0; // Default value  
    if (window.opera) {
        var sver = window.opera.version();
        rv = parseFloat(sver);
    }
    return rv;
}

var __userAgent = navigator.userAgent;
var __isIE = navigator.appVersion.match(/MSIE/) != null;
var __IEVersion = __getIEVersion();
var __isIENew = __isIE && __IEVersion >= 8;
var __isIEOld = __isIE && !__isIENew;

var __isFireFox = __userAgent.match(/firefox/i) != null;
var __isFireFoxOld = __isFireFox && ((__userAgent.match(/firefox\/2./i) != null) || (__userAgent.match(/firefox\/1./i) != null));
var __isFireFoxNew = __isFireFox && !__isFireFoxOld;

var __isWebKit = navigator.appVersion.match(/WebKit/) != null;
var __isChrome = navigator.appVersion.match(/Chrome/) != null;
var __isOpera = window.opera != null;
var __operaVersion = __getOperaVersion();
var __isOperaOld = __isOpera && (__operaVersion < 10);

function __parseBorderWidth(width) {
    var res = 0;
    if (typeof (width) == "string" && width != null && width != "") {
        var p = width.indexOf("px");
        if (p >= 0) {
            res = parseInt(width.substring(0, p));
        }
        else {
            //do not know how to calculate other values (such as 0.5em or 0.1cm) correctly now  
            //so just set the width to 1 pixel  
            res = 1;
        }
    }
    return res;
}


//returns border width for some element  
function __getBorderWidth(element) {
    var res = new Object();
    res.left = 0; res.top = 0; res.right = 0; res.bottom = 0;
    if (window.getComputedStyle) {
        //for Firefox  
        var elStyle = window.getComputedStyle(element, null);
        res.left = parseInt(elStyle.borderLeftWidth.slice(0, -2));
        res.top = parseInt(elStyle.borderTopWidth.slice(0, -2));
        res.right = parseInt(elStyle.borderRightWidth.slice(0, -2));
        res.bottom = parseInt(elStyle.borderBottomWidth.slice(0, -2));
    }
    else {
        //for other browsers  
        res.left = __parseBorderWidth(element.style.borderLeftWidth);
        res.top = __parseBorderWidth(element.style.borderTopWidth);
        res.right = __parseBorderWidth(element.style.borderRightWidth);
        res.bottom = __parseBorderWidth(element.style.borderBottomWidth);
    }

    return res;
}

//returns the absolute position of some element within document  
function getElementAbsolutePos(elemID) {
    var element;
    if (typeof (elemID) == "string") {
        element = document.getElementById(elemID);
    }
    else {
        element = elemID;
    }

    var res = new Object();
    res.x = 0; res.y = 0;
    if (element !== null) {
        res.x = element.offsetLeft;

        var offsetParent = element.offsetParent;
        var offsetParentTagName = offsetParent != null ? offsetParent.tagName.toLowerCase() : "";

        if (__isIENew && offsetParentTagName == 'td') {
            res.y = element.scrollTop;
        }
        else {
            res.y = element.offsetTop;
        }

        var parentNode = element.parentNode;
        var borderWidth = null;

        while (offsetParent != null) {
            res.x += offsetParent.offsetLeft;
            res.y += offsetParent.offsetTop;

            var parentTagName = offsetParent.tagName.toLowerCase();

            if ((__isIEOld && parentTagName != "table") || (__isFireFoxNew && parentTagName == "td") || __isChrome) {
                borderWidth = __getBorderWidth(offsetParent);
                res.x += borderWidth.left;
                res.y += borderWidth.top;
            }

            if (offsetParent != document.body && offsetParent != document.documentElement) {
                res.x -= offsetParent.scrollLeft;
                res.y -= offsetParent.scrollTop;
            }


            //next lines are necessary to fix the problem with offsetParent  
            if (!__isIE && !__isOperaOld || __isIENew) {
                while (offsetParent != parentNode && parentNode !== null) {
                    res.x -= parentNode.scrollLeft;
                    res.y -= parentNode.scrollTop;
                    if (__isFireFoxOld || __isWebKit) {
                        borderWidth = __getBorderWidth(parentNode);
                        res.x += borderWidth.left;
                        res.y += borderWidth.top;
                    }
                    parentNode = parentNode.parentNode;
                }
            }

            parentNode = offsetParent.parentNode;
            offsetParent = offsetParent.offsetParent;
        }
    }
    return res;
}

function _getPositionViewport() {
    var res = new Object();
    res.x = 0;
    res.y = 0;

    if (__isIE) {
        res.x = window.screenLeft;
        res.y = window.screenTop;
    }
    else if (__isFireFox) {
        res.x = window.mozInnerScreenX;
        res.y = window.mozInnerScreenY;
    }
    else {
        var boder = (window.outerWidth - window.innerWidth) / 2;
        res.x = window.screenX + boder;
        res.y = window.screenY + (window.outerHeight - (window.innerHeight + boder));
    }
    return res;
}

function checkITemExistinArray(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == obj) {
            return true;
        }
    }
}