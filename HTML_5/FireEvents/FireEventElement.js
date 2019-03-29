function createFireEventElement(sElement, sEvents, sPro) {
    createElement(sElement);
    createEvents(sEvents);
    createProprty(sPro);
    
}
function createEvents(Events) {

    if (IDControl == "") return;
    if (Events == "") return;
    var oEle = document.getElementById(IDControl);
    if (oEle == null) return;
    var arrEvt = listToArray(Events, ',');
    var func;
    for (var i in arrEvt) {
        
        func = "DisplayComment('" + IDControl + "','" + arrEvt[i] + "');";
        oEle.setAttribute(arrEvt[i], func);
    }
}
function createProprty(sPro) {
    
    var oEle = document.getElementById(IDControl);
    if (oEle == null) return;    
    if (IDControl == "") return;
    if (sPro == undefined || sPro.trim() == "") return;
    
    var arrPro = sPro.split(",");
    
    var sProName = null;
    var oVal = null;
    var oPro = null;

    for(var i=0; i < arrPro.length; i++)
    {
        if(arrPro[i].indexOf("=") >=0)
        {
            oPro = arrPro[i].split("=");
            if(oPro.length == 2)
            {
                sProName = oPro[0];
                oVal = oPro[1];
                oEle.setAttribute(sProName, oVal);
            }
        }         
    }
}


function listToArray(fullString, separator) {
    var fullArray = [];

    if (fullString !== undefined) {
        if (fullString.indexOf(separator) == -1) {
            fullArray.push(fullString);
        } else {
            fullArray = fullString.split(separator);
        }
    }

    return fullArray;
}


function createElement(sID) {

    if (sID.substring(0, 5) == "Input" && sID != "InputImage") {
        var splitStr = sID.split('Input');
        sID = splitStr[1];
    }
    ID = sID.toLowerCase();
    IDControl = ID + "_" + IDControl;
    if (ID == "button") {
        createButton();
    }
    else if (ID == "checkbox") {
        createCheckbox();
    }
    else if (ID == "radio") {
        createRadio();
    }
    else if (ID == "submit") {
        createSubmit();
    }
    else if (ID == "reset") {
        createReset();
    }
    else if (ID == "file") {
        createFile();
    }
    else if (ID == "password") {
        createPassword();
    }
    else if (ID == "inputimage") {
        createImageBtn();
    }
    else if (ID == "image") {
        createImage();
    }
    else if (ID == "label") {
        createLabel();
    }
    else if (ID == "text") {
        createText();
    }
    else if (ID == "textarea") {
        createTextArea();
    }
    else if (ID == "select") {
        createSelect();
    }
    else if (ID == "table") {
        createTable();
    } 
    else if (ID == "map") {
        createMap();
    }
    else if (ID == "area") {
        createArea();
    }
    else if (ID == "address") {
        createAddress();
    }
    else if (ID == "navigate") {
        createNavigate();
    }
    else if (ID == "td") {
        createTd();
    }
    else if (ID == "th") {
        createTH();
    }
    else if (ID == "video") {
        createVideo();
    }
    else if (ID == "audio") {
        createAudio();
    }
    else if (ID == "command") {
        createCommand();
    }
    else if (ID == "details") {
        createDetail();
    }
    else if (ID == "summary") {
        createSummary();
    }
    else if (ID == "figure") {
        createFigure();
    }
    else if (ID == "figcaption") {
        createFigCaption();
    }
    else if (ID == "hgroup") {
        createHgroup();
    }
    else if (ID == "meter") {
        createMeter();
    }
    else if (ID == "nav") {
        createNav();
    }
    else if (ID == "progress") {
        createProgress();
    }
    else if (ID == "canvas") {
        createCanvas();
    }
    else if (ID == "datalist") {
        createDataList();
    }
    else if (ID == "keygen") {
        createKeygen();
    }
    else if (ID == "output") {
        createOutput();
    }
    else if (ID == "source") {
        createSource();
    }
    else if (ID == "embed") {
        createEmbed();
    }
    else if (ID == "ruby") {
        createRuby();
    }
    else if (ID == "rt") {
        createRt();
    }
    else if (ID == "rp") {
        createRp();
    }
    else if (ID == "timetag") {
        createTime();
    }
    else if (ID == "svg") {
        createSvg();
    }
    else if (ID == "email") {
        createInputEmail();
    }
    else if (ID == "url") {
        createInputUrl();
    }
    else if (ID == "search") {
        createInputSearch();
    }
    else if (ID == "color") {
        createInputColor();
    }
    else if (ID == "number") {
        createNumeric();
    }
    else if (ID == "range") {
        createRange();
    }
    else if (checkITemExistinArray(ctrlHTMLInput, ID)) {
        createHTML5Input();
    }
    else {        
        createParagraph(ID);
    }
  
 
}