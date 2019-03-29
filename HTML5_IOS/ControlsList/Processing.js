

function loadTitlePage() {
    var title = getUrlParm('id') + " Control";
    $("#" + IDTitle).html(title);
}

function createPropertyList() {

    $.extend($.fn.fmatter, {
        htmlContent: function (cellval, options, rowdata) {
            return $.jgrid.htmlEncode(cellval);
        }
    });

    $.extend($.fn.fmatter.htmlContent, {
        unformat: function (cellval, options) {
            return $.jgrid.htmlDecode(cellval);
        }
    });

    jQuery("#" + IDPropertyList).jqGrid({
        datatype: "local", //json
        height: 250,
        width: 400,
        colNames: ['Properties name', 'Value', 'Type', 'Edit'],
        colModel: [
                      { name: 'name', index: 'name', width: 150 },
                      { name: 'value', index: 'value', width: 150, formatter: 'htmlContent' },
                      { name: 'type', index: 'type', width: 150 },
                      { name: 'status', index: 'status', hidden: true }
        ],
        multiselect: false,
        width: 600,
        height: "124",
        sortorder: "asc",
        scrollrows: true,
        loadonce: true,
        sortable: true,
        rowNum: 50,
        rowList: [10, 20, 30],
        sortname: 'id',
        onSelectRow: function (id) {
            _DspSelectedItem(id);
        },

        loadComplete: function () {
            $("#" + IDPropertyList).setSelection($("#" + IDPropertyList).getDataIDs()[0], true);
        }
    });


}

function loadPropertyList(data) {


    $("#" + IDPropertyList).jqGrid('clearGridData');
    for (var i = 0; i < data.length; i++) {
        jQuery("#" + IDPropertyList).jqGrid('addRowData', i + 1, data[i]);

    }


}

function _DspSelectedItem(idRow) {
    // SelectedData[0],[1],[2],[3],[4] <==> [id selected row], [proName], [proValue], [type], [status]

    SelectedData[0] = idRow;
    for (i = 0; i < 4; i++) {
        SelectedData[i + 1] = jQuery("#" + IDPropertyList).jqGrid('getCell', idRow, i);
    }

    document.getElementById(IDPropertyName).value = SelectedData[1];
    document.getElementById(IDtxtProValue).value = SelectedData[2];
    //Enable or Disable updValue or updButton
    document.getElementById(IDtxtProValue).disabled = (SelectedData[4] == '0');
    document.getElementById(IDbtnUpd).disabled = (SelectedData[4] == '0');

}

function updPropertyControl() {

    SelectedData[2] = document.getElementById(IDtxtProValue).value; //set ProValue
    SelectedData[2] = updProperty(SelectedData[1], SelectedData[2]);
    $("#" + IDPropertyList).jqGrid('setCell', SelectedData[0], 'value', ("" + SelectedData[2])); //update value to GRD
    updEffectPro();
}

function updUISpecProperty(proName, val) {
    iNum = $("#" + IDPropertyList).getDataIDs().length;

    for (iR = 1; iR <= iNum; iR++) {
        name = $("#" + IDPropertyList).jqGrid('getCell', iR, 0);
        if (name == proName) {
            if(val == false)
                $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', 'false');
            else
                $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', val);
            return;
        }
    }
}

function updEffectPro() {

    //when open attribute of <details> tag is switch(open or close), the position of this tag is changed. So we must update position
    if (SelectedData[1] == "open" || (SelectedData[1] == "value" || SelectedData[1] == "left" || SelectedData[1] == "top" || SelectedData[1] == "width" || SelectedData[1] == "height" || SelectedData[1] == "size" || SelectedData[1] == "Footer" || SelectedData[1] == "Caption" || SelectedData[1] == "tableRows" || SelectedData[1] == "Cols" || SelectedData[1] == "data")) {
        updDefaultLocation('');
    }
    else if ((SelectedData[1] == "innerHTML")) {
        var ctrlText = document.getElementById(IDControl).textContent;
        updUISpecProperty("textContent", ctrlText);
        updDefaultLocation('');
    }
    else if ((SelectedData[1] == "textContent")) {
        var ctrlHTML = document.getElementById(IDControl).innerHTML;
        updUISpecProperty("innerHTML", ctrlHTML);
        updDefaultLocation('');
    }
    else if ((SelectedData[1] == "multiple")) {        
        var selectionMode = document.getElementById(IDControl).type;        
        updUISpecProperty("type", selectionMode);
        updDefaultLocation('');
    }
}


function updDefaultLocation(proName) {    
    // bCon = ((proName == "width") || (proName == "height") || (proName == "left") || (proName == "top"));

    //if (!bCon) return;
    ic = 0;
    iNum = $("#" + IDPropertyList).getDataIDs().length;
    for (iR = 1; iR <= iNum; iR++) {


        name = $("#" + IDPropertyList).jqGrid('getCell', iR, 0); // get proName each row
        
        if (name == "left") {

            $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_Left(IDControl)); //upd left
            ic++;

        }
        else if (name == "left_screen") {
            $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_ScreenLeft(IDControl)); //upd ScreenLeft 
            ic++;

        }
        else if (name == "top") {
            $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_Top(IDControl)); //upd Top 
            ic++;

        }
        else if (name == "top_screen") {
            
            $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_ScreenTop(IDControl)); //upd ScreenTop 
            ic++;

        }
        else if (name == "width") {

            $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_Width(IDControl)); //upd width 
            ic++;

        }
        else if (name == "height") {

            $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_Height(IDControl)); //upd height 
            ic++;

        }

        if (ic == 6) return;
    }


}

// Work-around for IE
function getBoundCtr() {
    if (IDControl != "svg_ControlTest") {
        rec = document.getElementById(IDControl).getBoundingClientRect();
        updProperty("top", rec.top);
        iNum = $("#" + IDPropertyList).getDataIDs().length;
        for (iR = 1; iR <= iNum; iR++) {

            name = $("#" + IDPropertyList).jqGrid('getCell', iR, 0);

            if (name == "top") {
                //$("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_Top(IDControl)); //upd left 
                $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_Top(IDControl));
            }
            else if (name == "top_screen") {
                $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_ScreenTop(IDControl)); //upd left 
            }
        }
    }
}

// Create Element 

function createControls() {
    ID = getUrlParm('id').toLowerCase();
    IDControl = ID + "_" + IDControl;
    if (ID == "button") {
        createButton();
        createEvent();
    }
    else if (ID == "windowwait") {
        window.location = "WaitForWindow.html";
    }
    else if (ID == "objectwait") {
        window.location = "ObjectWait.html";
    }
    else if (ID == "dynamicbutton") {
        window.location = "DynamicButton.html";
    }
    else if (ID == "scrollbar") {
        window.location = "ScrollBarSample.html";
    }
    else if (ID == "checkbox") {
        createCheckbox();
        createEvent();
    }
    else if (ID == "radio") {
        createRadio();
        createEvent();
    }
    else if (ID == "submit") {
        createSubmit();
        createEvent();
    }
    else if (ID == "reset") {
        createReset();
        createEvent();
    }
    else if (ID == "file") {
        createFile();
        createEvent();
    }
    else if (ID == "password") {
        createPassword();
        createEvent();
    }
    else if (ID == "imagebtn") {
        createImageBtn();
        createEvent();
    }
    else if (ID == "image") {
        createImage();
        createEvent();
    }
    else if (ID == "label") {
        createLabel();
        createEvent();
    }
    else if (ID == "messagebox") {
        window.location = "MessageBox.html";
    }
    else if (ID == "text") {
        createText();
        createEvent();
    }
    else if (ID == "textarea") {
        createTextArea();
        createEvent();
    }
    else if (ID == "select") {
        createSelect();
        createEvent();
    }

    else if (ID == "selectitemwait") {
        window.location = "SelectItemWait.html";
    }
    else if (ID == "table") {
        createTable();
    }
    else if (ID == "tablecustomize") {
        window.location = "TableCustomize.html";
    }
    else if (ID == "tableitemwait") {
        window.location = "TableItemWait.html";
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
        //update location of details
        var oEvent = document.getElementById(IDControl);
        oEvent.setAttribute('onclick', 'setInterval(function () { clearInterval(varInterval); updDefaultLocation("");}, 10);');
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
    else if (ID == "customizevideo") {
        window.location = "CustumizeVideo.html";
    }
    else if (ID == "cookie") {
        window.location = "SetCookiePage.html";
    }
    else if (ID == "svgexpand") {
        window.location = "SVGControl.html";
    }
    else if (ID == "iframe") {
        window.location = "Iframe.html";
    }
    else {
        var tagName = getUrlParm('id').toLowerCase();
        createParagraph(tagName);
    }
}