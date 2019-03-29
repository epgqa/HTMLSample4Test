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
