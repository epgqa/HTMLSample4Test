
var IO = function () {

};

IO.prototype.getListTestCase = function (sContent) {

    if (!sContent) return null;
    //Get List TestCases
    var lstTestCase = [];
    var oTestCase = new TestCase();
    var sLine = "";
    var bValidPF = false;
    var bTC = false;
    var lines = sContent.split('\n');

    for (var line = 0; line < lines.length; line++) {
        sLine = lines[line].trim();
        if (sLine != "") {

            if (!bValidPF) {
                if (sLine.indexOf("Platform:") >= 0) {
                    sLine = sLine.toUpperCase().trim() + "_";

                    var sPF = "HTML_";
                    if (sLine.indexOf(sPF) > 0)
                        bValidPF = true;
                    else {
                        alert("The opened file is invalid Platform", "Warning");
                        return null;
                    }
                }
            }
            else {

                if (sLine.indexOf("[TestCase") >= 0) {
                    bTC = !bTC;
                    oTestCase = new TestCase();

                }
                else if (sLine.indexOf("[End]") >= 0) {
                    bTC = false;                    
                    lstTestCase.push(oTestCase);
                }
                else if (bTC) {
                    if (sLine.indexOf("Control:") >= 0) oTestCase._ControlName = getKeyValue(sLine, ":");
                    if (sLine.indexOf("SuggestProperties:") >= 0) {                        
                        if (getKeyValue(sLine, ":") != null) oTestCase._lstSuggestPro = getKeyValue(sLine, ":").split(';');
                    }
                    if (sLine.indexOf("NDetect:") >= 0) oTestCase.nDetect = parseInt(getKeyValue(sLine, ":"));
                    if (sLine.indexOf("NScenario:") >= 0) oTestCase.nScenario = parseInt(getKeyValue(sLine, ":"));
                    if (sLine.indexOf("Address:") >= 0) oTestCase.iAddress = parseInt(getKeyValue(sLine, ":"));
                }
            }
        }
    }
    return lstTestCase;
};

function getKeyValue(sLine, sKeyName) {
    
    if (sLine === null || sKeyName === null) return null;
    sKeyName = sKeyName.trim();

    var ip = sLine.indexOf(sKeyName);
    if (ip >= 0) {
        return sLine.substring(ip + sKeyName.length).trim();
    }
    return "";
}


IO.prototype.getScenarioBlock = function (lines, starLine, numLines) {
    if (lines === null) return null;
    if (lines.length == 0) return null;

    var scenarioBlock = [];
    for (var i = 0; i < lines.length; i++) {
        if (i == starLine) //begin scenario
        {
            for (var j = 0; j < numLines; j++) //get numLines line
            {
                scenarioBlock.push(lines[starLine + j]);
            }
            break;
        }
    }
    return scenarioBlock;
};

IO.prototype.createScenario = function (idx, lines, testCase) {
    
    if (lines === null) return null;
    if (testCase === null) return null;

    var oScenario = new Scenario();
    oScenario._sName = testCase._ControlName;
    oScenario._idx = idx;
    oScenario._IDTestCase = testCase._ID;

    var line;

    for (var i = 0; i < lines.length; i++) {
        line = lines[i];
        if (line.indexOf("[DetectProperties]") >= 0) oScenario._sComment = lines[i + 1].trim();
        if (line.indexOf("[MainControl]") >= 0) {
            oScenario._MainControl = this.getControl(lines[i + 1].trim().split(';'), testCase);
            if (oScenario._MainControl != null) {
                oScenario._MainControl._isMainControl = true;
                oScenario._MainControl._idxScenario = oScenario._idx;
            }
        }
        if (line.indexOf("[SatelliteControl]") >= 0) {
            var oCon = this.getControl(lines[i + 1].trim().split(';'), testCase);
            if (oScenario._lstTempControl === null) oScenario._lstTempControl = [];
            if (oCon != null) oScenario._lstTempControl.push(oCon);
        }
    }
    return oScenario;
};

IO.prototype.getControl = function (arrProVal, testCase) {
    if (testCase === null) return null;
    if (arrProVal === null || testCase._lstSuggestPro === null) return null;
    if (arrProVal.length != testCase._lstSuggestPro.length) return null;
    
    var oCon = new ControlObj();
    oCon._sName = testCase._ControlName;
    
    oCon._lstProperty = [];
    var oPro = null;

    for (var i = 0; i < testCase._lstSuggestPro.length; i++) {
        oPro = new Property();
        oPro._sName = testCase._lstSuggestPro[i];
        oPro._Value = arrProVal[i];
        oCon._lstProperty.push(oPro);
    }
    return oCon;
};