
// Create dynamic elements

function DisplayComment(txt) {
    document.getElementById(IDComment).value = txt;
}

//=================================================================================

function createControls() {
    ID = getUrlParm('id').toLowerCase();
    IDControl = ID + "_"+ IDControl;
    if (ID == "button") {
        createButton();
        createEvent();
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
    }
    else if (ID == "selectitemwait") {
        window.location = "SelectItemWait.html";
    }
    else if (ID=="table"){
        createTable();
    }
    else if (ID == "tablecustomize") {
        window.location = "TableCustomize.html";
    }
    else if (ID == "tableitemwait") {
        window.location = "TableItemWait.html";
    } else if (ID == "cookie") {
        window.location = "SetCookiePage.html";
    } else if (ID == "tableajax") {
        window.location = "TableAjax.html";
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
    else if (ID == "windowwait") {
        window.location = "WaitForWindow.html";
    }
    else if (ID == "objectwait") {
        window.location = "ObjectWait.html";
    }
    else {
        var tagName = getUrlParm('id').toLowerCase();
        createParagraph(tagName);
    }
}
//=================================================================================

function createButton() {

    var buttonnode = document.createElement('input');
    buttonnode.setAttribute('id', IDControl);
    buttonnode.setAttribute('type', 'button');
    buttonnode.setAttribute('name', IDControl);
    buttonnode.setAttribute('value', 'ButtonTest');
    buttonnode.setAttribute('title', IDControl);
    buttonnode.onclick = function() {
         ss = $("#" + IDControl).val();
         DisplayComment(ss);
    };

    var td1 = document.getElementById(IDDspControl);

    td1.appendChild(buttonnode);

}
//=================================================================================
function createNavigate() {

    inputStr = inputStr = "<a href=\"http://www.logigear.vn/\" id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " style=\"font-size:30px\">Visit logigear.vn!</a>";
    document.write(inputStr);
}

//=================================================================================

function createCheckbox() {

    inputStr = "<table cellspacing=0 cellpadding=0>" +
				            "<tr><td><input type=\"CheckBox\" id=\"CheckBox1\" name=\"CheckBox1\" value=\"CheckBox1\" Checked=\"True\" onclick=\"DisplayComment('CheckBox1')\"/> CheckBox1</td></tr>" +
				            "<tr><td><input type=\"CheckBox\" id=\"CheckBox2\" name =\"CheckBox2\" value=\"CheckBox2\" onclick=\"DisplayComment('CheckBox2')\"/> CheckBox2</td></tr>" +
				            "<tr><td><input type=\"CheckBox\" id=\"CheckBox3\" name =\"CheckBox3\" value=\"CheckBox3\" onclick=\"DisplayComment('CheckBox3')\"/> CheckBox3</td></tr>" +
                             "</table>" +
				            "<p><span style=\"font-weight: bold;color: #F09\"> CheckBox Test " +
                            "<input type=\"CheckBox\" id=" + IDControl + " title=" + IDControl + " name =" + IDControl + " value=\"CheckBoxTest\" onclick=\"InputClick()\"/>" +
                            "</p>";
                            
                        
    document.write(inputStr);
}

function InputClick() {
    ss = Element_value("", 0);
    DisplayComment(ss);
    ret = Element_Check("", 0);
   updUISpecProperty ("checked", ret );
}

//=================================================================================

function createRadio() {
    inputStr = "<table  >" +
				            "<tr><td align=\"left\"><input type=\"Radio\" id=\"Radio1\" name=\"Radio1\" value=\"C# Corner\" onclick=\"DisplayComment('C# Corner')\" CHECKED=\"true\" /> C# Corner" +
				            "<br><input type=\"Radio\" id=\"Radio2\" name=\"Radio1\" value=\"VB.NET Heaven\" onclick=\"DisplayComment('VB.NET Heaven')\" /> VB.NET Heaven" +
				            "<br><input type=\"Radio\" id=\"Radio3\" name=\"Radio1\" value=\"Longhorn Corner\" onclick=\"DisplayComment('Longhorn Corner')\" /> Longhorn Corner" +
				            "<br><input type=\"Radio\" id=\"Radio4\" name=\"Radio1\" value=\"Mindcracker\" onclick=\"DisplayComment('Mindcracker')\" /> Mindcracker</td></tr>" +
				            "</table>" +
				            "<p>" +
                            "<span style=\"font-weight: bold;color: #F09\">Radio			" +
                            "<input type=\"Radio\" id=\"Radiox\" value=\"Radio\" name=" + IDControl + " onclick=\"radioClick('Radio')\"  CHECKED=\"true\" />&nbsp;&nbsp;&nbsp;" +
                            "</span>" +
                            "<span style=\"font-weight: bold;color: #F09\">Radio Test" +
                            "<input type=\"Radio\" id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " value=\"RadioButtonTest\" onclick=\"InputClick()\"/> " +
                             "</span></p>";
    document.write(inputStr);
}

function radioClick(txt) {
    
    DisplayComment(txt);
    ret = Element_Check("", 0);
    updUISpecProperty("checked", ret);
}

//=================================================================================

function createSubmit() {


    inputStr = "<form name=\"input\" method=\"get\" action=\"http://www.w3schools.com/html/html_form_action.asp\" >" +
               "<input type=\"text\" name=\"user\" />" +
               "<input type=\"submit\" id=" + IDControl + " name=" + IDControl + " title=" + IDControl + " value=\"Submit Button\" />" +
               "</form> ";

  
    document.write(inputStr);

}

//=================================================================================

function createReset() {

    inputStr = "<form name=\"myform\" action=\"#\" method=\"POST\">" +
                "<div align=\"center\" >" +
                "<input type=\"text\" id=\"idName\" size=\"25\"/> " +
                "<input type=\"reset\" id=" + IDControl + " name=" + IDControl + " title=" + IDControl + " value=\"Reset Button\" />" +
                "</div>" +
                "</form>";

    document.write(inputStr);

}
//=================================================================================

function createFile() {
    //inputStr = "<INPUT TYPE=FILE  id=" + IDControl + " name=" + IDControl + " maxLength=\"30\" style=\"width:400px\" onchange=\"UpdValueField()\"></input>"
    inputStr = "<INPUT TYPE=FILE  id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " style=\"-webkit-appearance:textfield;position:relative;-webkit-box-sizing:border-box\" onchange=\"UpdValueField()\"></input>"
    document.write(inputStr);
}

function UpdValueField() {
    val = Element_value("", 0);
    updUISpecProperty('value', val);
    
}
//=================================================================================
function createPassword() {
    inputStr = "<INPUT TYPE=PASSWORD id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " maxLength=\"8\" value=\"abc123\"  onchange=\"UpdValueField()\" />"
                
    document.write(inputStr);

}

//================================================================================

function createImageBtn() {
    inputStr = "<input type=\"image\" src=\"../images/test.gif\" id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " width=\"100\" height=\"100\" onclick=\"DisplayComment('Image button')\" />";
    document.write(inputStr);
}

function createImage() {
    
    inputStr = "<img src=\"http://www.tizag.com/pics/htmlT/sunset.gif\" title=" + IDControl + " alt=\"Beautiful Sunset\" id=" + IDControl + " name=" + IDControl + " title=\"image element\" />";
    document.write(inputStr);
}
//================================================================================

function createLabel ()
{
    inputStr = "<LABEL id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " style=\"color:Red; font-size:larger\"> This is a label element </LABEL>";
           
  document.write(inputStr);
}
//================================================================================       

function createText() {
    inputStr = "<div align=\"center\" >" +
                "<input type=\"text\"  id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " maxlength=\"20\"  onchange=\"UpdValueField()\"  textContent=\"abc\"/>" +
                "</div>";
    document.write(inputStr);
}
//================================================================================    

function createTextArea() {
    inputStr = "<textarea id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " cols=\"40\" rows=\"4\" onchange=\"UpdValueField()\" >" +
                "At W3Schools you will find all the Web-building tutorials you need, from basic HTML to advanced XML, SQL, ASP, and PHP." +
                "</textarea>"; 

    document.write(inputStr);
}
//================================================================================          

function createSelect() {
    inputStr = "<select id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " size=\"1\" style=\"width:200px\"  onchange=\"UpdSelectValue()\" >" +
                        "<option value=\"Item_0\">Item_0</option>" +
                        "<option value=\"Item_1\">Item_1</option>" +
                        "<option value=\"Item_2\">Item_2</option>" +
                    "</select>";
               
    document.write(inputStr);   
}


function UpdSelectValue() {
    //selected = new Array();

    selItems=""
    ob = document.getElementById(IDControl);

    for (var i = 0; i < ob.options.length; i++) {
        if (ob.options[i].selected) {
            if (selItems == "") selItems = ob.options[i].value;
            else selItems = selItems + ";" + ob.options[i].value ;
        }
        //selected.push(ob.options[i].value);
    }
    updUISpecProperty('value', selItems);

}

function AddItem_Select() {
    if (_varItemCount <= 0) return;

    selectbox = document.getElementById(IDControl);

    var bUnique = !(document.getElementById(IDNonUnique).checked);
    if (bUnique != _bUnique) {
        //Clear Select
        selectbox.options = null;
        selectbox.options.length = 0;
        _bUnique = bUnique;
    }

    //add new items
    var newOpt;
    var sItemName;
    var count = selectbox.length;

    for (i = 0; i < _varItemCount ; i++) {

        if (bUnique) sItemName = _varItemName + "_" + (i + count);
        else sItemName = _varItemName;

        newOpt = new Option(sItemName, sItemName);
        selectbox.options[i + count] = newOpt;
    }
}


//================================================================================

function createTable() {


    inputStr = "<TABLE id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " border=\"1\" RULES=GROUPS FRAME=BOX style=\"width:400px\">" +
                    "<caption><b> Table Element</b> </caption>" +
                    "<thead>" +
                        "<tr>"+
                        "<td width=\"20%\" onclick =\"DisplayComment('Header String')\">String</td>" +
                        "<td width=\"20%\" onclick =\"DisplayComment('Header Chuỗi')\">Chuỗi</td>" +
                        "<td width=\"20%\" onclick =\"DisplayComment('Header 文本')\">文本</td>" +
                        "<td width=\"20%\" onclick =\"DisplayComment('Header Boolean')\">Boolean</td>" +
                        "<td width=\"20%\" onclick =\"DisplayComment('Header long')\">long</td>" +
                        "</tr>" +
                    "</thead> " +
                   
                   "<tfoot onclick =\"DisplayComment('Footer of Element')\">" +
                        "<th align=\"center\" colspan=\"5\" id=\"footerID\">Footer of Element </th>" +
                    "</tfoot>"+
                 "</TABLE>";

    document.write(inputStr);
}

function Clear_table() {
    $("#" + IDControl + " tbody").remove();
}

function AddItem_Table() {
    if (_varItemCount <= 0) return;

    Clear_table();
    iGroup = 3;
    for (i = 0; i < _varItemCount; i++) {
        if (i % iGroup == 0) {    //add body
            $("#" + IDControl).append("<tbody></tbody>");
        }
        //addRow(i);
        sRow = "<tr>"+
                "<td width=\"20%\" onclick =\"DisplayComment('String_"+i+"')\">String_" + i + "</td>" +
                "<td width=\"20%\" onclick =\"DisplayComment('Chuỗi_" + i + "');\">Chuỗi_" + i + "</td>" +
                "<td width=\"20%\" onclick =\"DisplayComment('文本_" + i + "');\">文本_" + i + "</td>" +
                "<td width=\"20%\"><input type=\"checkbox\"/></td>" +
                "<td width=\"20%\" onclick =\"DisplayComment('long_" + i + "');\">long_" + i + "</td>" +
                "</tr>";
        $("#" + IDControl + "> tbody:last").append(sRow);

    }
updDefaultLocation();
}

//==== Create Map Control==============================================//

function createMap() {
    
    inputStr = "<p>Click on the sun or on one of the planets to watch it closer:</p>"+
"<img src=\"http://www.w3schools.com/tags/planets.gif\" width=\"145\" height=\"126\" alt=\"Planets\" usemap=\"#" + IDControl + "\">" +
"<map name=" + IDControl + " id=" + IDControl + " title=" + IDControl + " style=\"color:red\">" +
  "<area shape=\"rect\" coords=\"0,0,82,126\" alt=\"Sun\" href=\"http://www.w3schools.com/tags/sun.htm\">" +
  "<area shape=\"circle\" coords=\"90,58,3\" alt=\"Mercury\" href=\"http://www.w3schools.com/tags/mercur.htm\">" +
  "<area shape=\"circle\" coords=\"124,58,8\" alt=\"Venus\" href=\"http://www.w3schools.com/tags/venus.htm\">" +
"</map>";

    document.write(inputStr);
}


//==== Create Area Control==============================================//

function createArea() {

    inputStr = "<p>Click on the sun or on one of the planets to watch it closer:</p>" +
"<img src=\"http://www.w3schools.com/tags/planets.gif\" width=\"145\" height=\"126\" alt=\"Planets\" usemap=\"#map\">" +
"<map name=\"map\" id=\" MapControl\" style=\"color:red\">" +
  "<area id=" + IDControl + " shape=\"rect\" coords=\"0,0,82,126\" alt=\"Sun\" href=\"http://www.w3schools.com/tags/sun.htm\" >" +
"</map>";
    document.write(inputStr);
}


//=== Create Address ==================================================//

function createAddress() {

    inputStr =
    "<address id=" + IDControl + " title=" + IDControl + " style=\"text-align:left;background:url(../images/address.jpg) no-repeat; width:500px;height:150px;padding-left:30px;padding-top:30px\">" +
    "<font color=\"black\">"+
    "Written by:<a href=\"mailto:tester@logigear.com\">Jon Doe</a>"+
    "Visit us at:<br/>"+
    "http://logigear.vn<br/>"+
    "1A Phan Xich Long, Ward 2, Phu Nhuan District, HCMC, Vietnam" +
    "</font>"+
    "</address>";

    document.write(inputStr);
}

//====== Create paragraph tag ================================// 

function createParagraph(tagName) {

    txtComment = document.getElementById('txtComment');
    //IDControl = tagName+"_ControlTest";

            if (tagName == "abbr") {
                inputStr = "The <abbr title=\"World Health Organization\" id=" + IDControl + " name=" + IDControl + ">WHO</abbr> was founded in 1948.";

            }
            else if (tagName == "acronym") {

                inputStr = "Can I get this <acronym title=\"as soon as possible\" id=" + IDControl + " name=" + IDControl + ">ASAP</acronym>?";

            }
            else if (tagName == "span") {

                inputStr = "<p>This is a text <span title=" + IDControl + " style=\"color:blue\" id=" + IDControl + " name=" + IDControl + ">span</span></p>";

            }
            else if (tagName == "sub") {

                inputStr = "<p>This text contains <sub title=" + IDControl + " id=" + IDControl + " name=" + IDControl + ">subscript</sub> text.</p>";

            }
            else if (tagName == "sup") {

                inputStr = "<p>This text contains <sup title=" + IDControl + " id=" + IDControl + " name=" + IDControl + ">superscript</sup> text.</p>";

            }
            else if (tagName == "dl" || tagName == "dt" || tagName == "dd") {

                if (tagName == "dl") {
                    createDL();
                } else if (tagName == "dt") {
                    createDT();
                } else {
                    createDD();
                }
            }
            else if (tagName == "ul" || tagName == "li" || tagName == "ol") {

                if (tagName == "ul") {
                    createul();
                } else if (tagName == "li") {
                    Createli();;
                } else {
                    createol();
                }
            }
            else if (tagName == "embed" || tagName == "object")
            {
                inputStr = "<" + tagName + " title=" + IDControl + " src=\"http://www.logigear.vn/logi_media_dir/images/banners/flash1.swf\" name=" + IDControl + " id=" + IDControl + ">" + "</" + tagName + ">";
            }
            else if (tagName == "frame") {
                window.location = "FrameControl.html";
            }
            else if (tagName == "fieldset") {

                inputStr = "<fieldset id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">" +
                           "<legend>Personalia:</legend>"+
                           "Name: <input type=\"text\"><br>"+
                           "Email: <input type=\"text\"><br>"+
                           "Date of birth: <input type=\"text\">"+
                  "</fieldset>";
            }
            else if (tagName == "legend") {

                inputStr = "<fieldset>" +
                           "<legend id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">Personalia:</legend>" +
                           "Name: <input type=\"text\"><br>" +
                           "Email: <input type=\"text\"><br>" +
                           "Date of birth: <input type=\"text\">" +
                  "</fieldset>";
            }
            else if (tagName == "a") {
                inputStr = "<a href=\"http://www.logigear.vn/\" title=" + IDControl + " id=" + IDControl + " name=" + IDControl + " style=\"font-size:30px\">Visit logigear.vn!</a>";
            }
            else {
                inputStr = "<" + tagName + " title=" + IDControl + " id=" + IDControl + " name=" + IDControl + " style=\"text-align:center; margin:auto\">" + "This is a text in " + tagName + " tag" + "</" + tagName + ">";
            }
            document.write(inputStr);
}
// ========== Create TH =======================

function createTH() {


    inputStr = "<TABLE id=\"table1\" name=\"tableTD\" style=\"width:400px;text-align:center; margin:auto\">" +
                        "<tr>" +
                        "<th id=" + IDControl + ">This is th in a table</th>" +
                        "</tr>" +
                 "</TABLE>";

    document.write(inputStr);
}
// ========== Create TD =======================

function createTd() {


    inputStr = "<TABLE id=\"table1\" name=\"tableTD\" style=\"width:400px;text-align:center; margin:auto\">" +
                        "<tr>" +
                        "<td id=" + IDControl + ">This is td in a table</td>" +
                        "</tr>" +
                 "</TABLE>";

    document.write(inputStr);
}
//====== Create OL ===============================

function createol()
{
    inputStr = "<p>OL group</p>" +
           "<ol id=" + IDControl + " title=" + IDControl + " name=" + IDControl + ">" +
           "<li>Text li 1</li>" +
           "<li>Text li 2</li>" +
           "<li>Text li 3</li>" +
           "</ol>" +
           "<p>UL group</p>" +
           "<ul>" +
           "<li>Text li 1</li>" +
           "<li>Text li 2</li>" +
           "<li>Text li 3</li>" +
           "</ul>";
}

// ============ Create LI ===============

function Createli()
{
    inputStr = "<p>OL group</p>" +
           "<ol>" +
           "<li id=" + IDControl + " title=" + IDControl + " name=" + IDControl + ">Text li 1</li>" +
           "<li>Text li 2</li>" +
           "<li>Text li 3</li>" +
           "</ol>" +
           "<p>UL group</p>" +
           "<ul>" +
           "<li>Text li 1</li>" +
           "<li>Text li 2</li>" +
           "<li>Text li 3</li>" +
           "</ul>";
}

//================ Create UL ======================

function createul()
{
    inputStr = "<p>OL group</p>" +
           "<ol>" +
           "<li>Text li 1</li>" +
           "<li>Text li 2</li>" +
           "<li>Text li 3</li>" +
           "</ol>" +
           "<p>UL group</p>" +
           "<ul id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">" +
           "<li>Text li 1</li>" +
           "<li>Text li 2</li>" +
           "<li>Text li 3</li>" +
           "</ul>";
}

//============== Create DL =========
function createDL() {
    inputStr = "<dl id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">" +
           "<dt>Text in DT 1</dt>" +
           "<dd>Text in DD 1</dd>" +
           "<dt >Text in DT 2</dt>" +
           "<dd>Text in DD 2</dd>" +
           "</dl>";
}

//============ Create DT ===========
function createDT() {
    inputStr = "<dl>" +
           "<dt id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">Text in DT 1</dt>" +
           "<dd>Text in DD 1</dd>" +
           "<dt >Text in DT 2</dt>" +
           "<dd>Text in DD 2</dd>" +
           "</dl>";
}

// =============== Vreate DD ===========

function createDD() {
    inputStr = "<dl>" +
           "<dt>Text in DT 1</dt>" +
           "<dd id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">Text in DD 1</dd>" +
           "<dt >Text in DT 2</dt>" +
           "<dd>Text in DD 2</dd>" +
           "</dl>";
}

function createEvent() {
    var oEvent = document.getElementById(IDControl);
    oEvent.setAttribute('onclick', 'DisplayComment(\'Single click control test\');');
    oEvent.setAttribute('ondblclick', 'DisplayComment(\'Double click control test\');');
    oEvent.setAttribute('oncontextmenu', 'DisplayComment(\'Right click control test\');');
}