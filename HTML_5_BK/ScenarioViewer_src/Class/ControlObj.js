
var ControlObj = function () {
    this._sName = "";
    this._idxScenario = 0;
    this._oElement = "";
    this._lstProperty = [];
    this._isMainControl = false;
};

ControlObj.prototype.createElement = function () {

    var sElement= "";
    var sName = this._sName.toLowerCase();

    if (sName == "link")
        sElement = createLinkTemplate();
    else if(sName == "textarea")
        sElement = createTextAreaTemplate();
    else if(sName == "image")
        sElement = createImageTemplate();
    else if(sName == "div")
        sElement = createDivTemplate();
    else if (sName == "input-button")
        sElement = createButtonTemplate();
    else if(sName == "input-checkbox")
        sElement = createCheckBoxTemplate();
    else if(sName == "input-radio")
        sElement = createRadioTemplate();
    else if(sName == "input-text")
        sElement = createTextTemplate();
    else if (sName == "input-datetime-local")
        sElement = createDateTimeTemplate();
    else if(sName == "select-one")
        sElement = createSingleSelectTemplate();
    else if(sName == "select-multiple")
        sElement = createMultipleSelectTemplate();
    else if (sName == "table")
        sElement = createTableTemplate();
    else if(sName == "label")
        sElement = createLabelTemplate();
    else if(sName == "video")
        sElement = createVideoTemplate();
    
    //set attributes, event, innerHTML
    var sAttributes = this.buildAttributes();
    var sEvent = this.buildEvents();
    var sInnerHtml = this.buildInnerHTML();

    sElement = sElement.replace(ATTRIBUTE_MASK, sAttributes);
    sElement = sElement.replace(EVENT_MASK, sEvent);
    if (sElement.indexOf(INNERHTML_MASK) > 0) sElement = sElement.replace(INNERHTML_MASK, sInnerHtml);

    this._oElement = sElement;    
};



ControlObj.prototype.buildAttributes = function () {

    var sPros = "";
    for (var i = 0; i < this._lstProperty.length; i++) {
        
        sPros += this.AssignAtrribute(this._lstProperty[i]._sName, this._lstProperty[i]._Value) + " ";
    }

    return sPros;
};

ControlObj.prototype.AssignAtrribute = function(name,value)
{
    var sFormatAttribute = "%attName%=\"%attValue%\"";

    var sVal = this.validAttributeValue(name, value);
    if (sVal == null) return "";

    return sFormatAttribute.replace("%attName%",name).replace("%attValue%",sVal);
}


ControlObj.prototype.validAttributeValue = function (name, value) {
    
    if (!name) return null;
    if (["image alt", "caption", "text"].indexOf(name) >= 0)
        return null;
    return value;
}

ControlObj.prototype.buildInnerHTML = function () {

    var sHTML = "";
    var oPro;
    for (var i = 0; i < this._lstProperty.length; i++) {
        oPro = this._lstProperty[i];
        if (oPro._sName == "image alt")
            sHTML += "<img width=25px; src=\"http://www.tizag.com/pics/htmlT/sunset.gif\" alt=\"" + oPro._Value + "\" />";
        if (oPro._sName == "caption")
            sHTML += "<caption>"+ oPro._Value +"</caption>";
        if(oPro._sName == "text")
            sHTML += oPro._Value;
    }

    return sHTML;
};

ControlObj.prototype.buildEvents = function () {

    var sEvent = "";

    sEvent = this._isMainControl ? "onmousedown=\"DisplayDetectProperties('" + this._idxScenario + "')\"" : "";   

    return sEvent;
};