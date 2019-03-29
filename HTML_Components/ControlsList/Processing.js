

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
                      { name: 'name', index: 'name asc', width: 150 },
                      { name: 'value', index: 'value', width: 150,formatter: 'htmlContent'},
                      { name: 'type', index: 'type', width: 150 },
                      { name: 'status', index: 'status', hidden:true }
                      ],
        multiselect: false,
        width: 600,
        height: "124",
        sortorder: "asc",
        //scrollrows: true,
        rowNum: 10,
        rowList: [10, 20, 30],
        sortname: 'id', 
        onSelectRow: function (id) {
            _DspSelectedItem(id);
        },
        loadComplete: function () {
            $("#" + IDPropertyList).setSelection($("#" + IDPropertyList).getDataIDs()[0], true);
        }
    });

    //======= Event keypress =====================================

    loadPropertyList(PropertyData);
    return;

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

    document.getElementById(IDPropertyName).innerHTML = SelectedData[1];
    document.getElementById(IDtxtProValue).value = SelectedData[2];
    //Enable or Disable updValue or updButton
    document.getElementById(IDtxtProValue).disabled = (SelectedData[4] == '0');
    document.getElementById(IDbtnUpd).disabled = (SelectedData[4] == '0');
   
}

function updPropertyControl() {

    SelectedData[2] = document.getElementById(IDtxtProValue).value; //set ProValue
    SelectedData[2] = updProperty(SelectedData[1], SelectedData[2]);
    $("#" + IDPropertyList).jqGrid('setCell', SelectedData[0], 'value', (""+SelectedData[2])); //update value to GRD
    updEffectPro();
}

function updUISpecProperty(proName, val) {
      iNum = $("#" + IDPropertyList).getDataIDs().length;
     
      for (iR = 1; iR <= iNum; iR++) {
            name = $("#" + IDPropertyList).jqGrid('getCell', iR, 0);
            if (name == proName)
            {
                $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', val);
                return;
            }
      }
}
function updEffectPro() {
    if ((SelectedData[1] == "value")) {

        var ctrlWidth = getElement_Width(IDControl);
        updUISpecProperty("width", ctrlWidth);
        updDefaultLocation('width');

    }
    else if ((SelectedData[1] == "height")) {
        var ctrlTop = getElement_Top(IDControl);
        updUISpecProperty("top", ctrlTop);
        updDefaultLocation('top');

    }
    else if ((SelectedData[1] == "left")) {

        updDefaultLocation('left');

    }
    else if ((SelectedData[1] == "top")) {

        updDefaultLocation('top');

    }
    else if ((SelectedData[1] == "innerHTML")) {
        var ctrlText = document.getElementById(IDControl).innerText;
        updUISpecProperty("innerText", ctrlText);

    }
    else if ((SelectedData[1] == "innerText")) {
        var ctrlHTML = document.getElementById(IDControl).innerHTML;
        updUISpecProperty("innerHTML", ctrlHTML);

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
            else if (name == "left_screen")  {

                $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_ScreenLeft(IDControl)); //upd left 
                ic++;

            }
            else if (name == "top") {
                $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_Top(IDControl)); //upd left 
                ic++;

            }
            else if (name == "top_screen") {
                $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_ScreenTop(IDControl)); //upd left 
                ic++;

            }
            
            if (ic == 4) return;
        }
        
  
}

// Work-around for IE
function getBoundCtr() {
    rec = document.getElementById(IDControl).getBoundingClientRect();
    updProperty("top", rec.top);
    iNum = $("#" + IDPropertyList).getDataIDs().length;
    for (iR = 1; iR <= iNum; iR++) {

        name = $("#" + IDPropertyList).jqGrid('getCell', iR, 0);

        if (name == "top") {
            $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_Top(IDControl)); //upd left 
        }
        else if (name == "top_screen") {
            $("#" + IDPropertyList).jqGrid('setCell', iR, 'value', getElement_ScreenTop(IDControl)); //upd left 
        }
    }
}