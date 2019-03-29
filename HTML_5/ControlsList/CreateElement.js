
// Create dynamic elements

function DisplayComment(txt) {
    if (_willElementFireEvent) {
        if (_sEvents == "") _sEvents = txt;
        else _sEvents += "," + txt;
        document.getElementById(IDComment).value = _sEvents;
    } else {        
        document.getElementById(IDComment).value = txt;
        _sEvents = "";
    }
    
}

function DisplayHeader(txt) {
	if(!document.getElementById(IDComment)) return;
    if (_willElementFireEvent) {
        if (_sEvents == "") _sEvents = txt;
        else _sEvents += "," + txt;
        document.getElementById(IDComment).value = _sEvents;
    } else {        
        document.getElementById(IDComment).value = txt;
        _sEvents = "";
    }
}
//=================================================================================

function createButton() {
    inputButton = "<input type=\"button\" id=" + IDControl + " title=" + IDControl + " name =" + IDControl + " value=\"ButtonTest\"></input>";
    document.write(inputButton);
}

//================================================================================
function createNavigate() {

    inputStr = inputStr = "<a href=\"http://www.logigear.vn/\" id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " style=\"font-size:30px\">Visit logigear.vn!</a>";
    document.write(inputStr);
}

//=================================================================================

function createCheckbox() {

    inputStr = "<table cellspacing=0 cellpadding=0 style=\"text-align:center; margin:auto\">" +
				            "<tr><td><input type=\"CheckBox\" id=\"CheckBox1\" name=\"CheckBox1\" value=\"CheckBox1\" Checked=\"True\" onclick=\"DisplayComment('CheckBox1')\"/> CheckBox1</td></tr>" +
				            "<tr><td><input type=\"CheckBox\" id=\"CheckBox2\" name =\"CheckBox2\" value=\"CheckBox2\" onclick=\"DisplayComment('CheckBox2')\"/> CheckBox2</td></tr>" +
				            "<tr><td><input type=\"CheckBox\" id=\"CheckBox3\" name =\"CheckBox3\" value=\"CheckBox3\" onclick=\"DisplayComment('CheckBox3')\"/> CheckBox3</td></tr>" +
                             "</table>" +
				            "<p><span style=\"font-weight: bold;color: #F09\"> CheckBox Test " +
                            "<input type=\"CheckBox\" id=" + IDControl + " title=" + IDControl + " name =" + IDControl + " value=\"CheckBoxTest\" onchange=\"InputClick()\"/>" +
                            "</p>";
    document.write(inputStr);
}

function InputClick() {
    
    ss = Element_value("", 0);    
    DisplayComment(ss);
    ret = Element_Check("", 0);    
    updUISpecProperty("checked", ret);
}

//=================================================================================

function createRadio() {
    inputStr = "<table style=\"text-align:center; margin:auto\">" +
				            "<tr><td align=\"left\"><input type=\"Radio\" id=\"Radio1\" name=\"Radio1\" value=\"C# Corner\" onclick=\"DisplayComment('C# Corner')\" CHECKED=\"true\" /> C# Corner" +
				            "<br><input type=\"Radio\" id=\"Radio2\" name=\"Radio1\" value=\"VB.NET Heaven\" onclick=\"DisplayComment('VB.NET Heaven')\" /> VB.NET Heaven" +
				            "<br><input type=\"Radio\" id=\"Radio3\" name=\"Radio1\" value=\"Longhorn Corner\" onclick=\"DisplayComment('Longhorn Corner')\" /> Longhorn Corner" +
				            "<br><input type=\"Radio\" id=\"Radio4\" name=\"Radio1\" value=\"Mindcracker\" onclick=\"DisplayComment('Mindcracker')\" /> Mindcracker</td></tr>" +
				            "</table>" +
				            "<p>" +
                            "<span style=\"font-weight: bold;color: #F09\">Radio" +
                            "<input type=\"Radio\" id=\"Radiox\" value=\"Radio\" name=" + IDControl + " onclick=\"DisplayComment('Radio');\"  CHECKED=\"true\" />&nbsp;&nbsp;&nbsp;" +
                            "</span>" +
                            "<span style=\"font-weight: bold;color: #F09\">Radio Test" +
                            "<input type=\"Radio\" id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " value=\"RadioButtonTest\" onchange=\"InputClick();\" /> " +
                             "</span></p>";
    document.write(inputStr);
}
/*
function radioClick(txt) {    
    DisplayComment(txt);
    ret = Element_Check("", 0);
    updUISpecProperty("checked", ret);
}
*/
//=================================================================================

function createSubmit() {


    inputStr = "<form name=\"input\" method=\"get\" action=\"http://www.w3schools.com/tags/demo_form.asp\" >" +
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
    inputStr = "<form action=\"http://www.w3schools.com/tags/demo_form.asp\">" +
                "<INPUT TYPE=\"file\"  id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " style=\"-webkit-appearance:textfield;position:relative;-webkit-box-sizing:border-box\" onchange=\"UpdValueField()\">" +
                "<input type=\"submit\">" +
                "</form>";
    document.write(inputStr);
}

function UpdValueField() {
    val = Element_value("", 0);    
    updUISpecProperty('value', val);
    
}
//=================================================================================
function createPassword() {
    inputStr =
    "<form action=\"http://www.w3schools.com/tags/demo_form.asp\">" +
    "<INPUT TYPE=PASSWORD id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " maxLength=\"8\" autocomplete=on placeholder=" + IDControl + "  required  onchange=\"UpdValueField()\" />" +
    "<input type=\"submit\">" +
    "</form>";
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
    
    var buttonnode = document.createElement('input');
    buttonnode.setAttribute('type', "text");
    buttonnode.setAttribute('id', IDControl);
    buttonnode.setAttribute('title', IDControl);
    buttonnode.setAttribute('name', IDControl);
    buttonnode.setAttribute('maxlength', 20);
    buttonnode.setAttribute('autocomplete', 'on');
    buttonnode.setAttribute('placeholder', IDControl);
    buttonnode.setAttribute('required', "true");
    buttonnode.setAttribute('textContent', "abc");
    buttonnode.setAttribute('onchange','UpdValueField()');

    //Create a datalist
    var oDataList = document.createElement('datalist');
    oDataList.id = "datalist_test";
    buttonnode.setAttribute('list', "datalist_test");
    var options = '';
    for (var i = 0; i < 15; i++)
        options += '<option value="' + "Item_" + i + '" />';
    oDataList.innerHTML = options;

    var formNode = document.createElement('form');
    formNode.setAttribute('action', 'http://www.w3schools.com/tags/demo_form.asp');

    var submitNode = document.createElement('input');
    submitNode.setAttribute('type', 'submit');

    formNode.appendChild(buttonnode);
    formNode.appendChild(submitNode);
    formNode.appendChild(oDataList);

    var spaceControl = document.getElementById(IDDspControl);

    if (spaceControl) {
        spaceControl.appendChild(formNode);
    }
    else {
        document.write(formNode.outerHTML);
    }
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
    inputStr = "<select id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " size=\"1\" style=\"width:200px\" onchange=\"UpdSelectValue()\" >" +
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

    inputStr = "<TABLE id=" + IDControl + " title=" + IDControl + " name=" + IDControl + " border=\"1\" RULES=GROUPS FRAME=BOX style=\"width:400px;text-align:center; margin:auto\">" +
                    "<caption><b> Table Element</b> </caption>" +
                    "<thead>" +
                        "<tr>"+
                        "<td width=\"20%\" onclick =\"DisplayHeader('Header String')\">String</td>" +
                        "<td width=\"20%\" onclick =\"DisplayHeader('Header Chuỗi')\">Chuỗi</td>" +
                        "<td width=\"20%\" onclick =\"DisplayHeader('Header 文本')\">文本</td>" +
                        "<td width=\"20%\" onclick =\"DisplayHeader('Header Boolean')\">Boolean</td>" +
                        "<td width=\"20%\" onclick =\"DisplayHeader('Header long')\">long</td>" +
                        "</tr>" +
                    "</thead> " +
                   
                   "<tfoot onclick =\"DisplayHeader('Footer of Element')\">" +
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
"<img src=\"http://www.w3schools.com/tags/planets.gif\" width=\"145\" height=\"126\" alt=\"Planets\" usemap=\"#"+ IDControl +"\">" +
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
  "<area shape=\"rect\" coords=\"0,0,82,126\" alt=\"Sun\" href=\"http://www.w3schools.com/tags/sun.htm\"  id=" + IDControl + " >" +
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
            else if (tagName == "embed" || tagName == "object") {
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
                inputStr = "<" + tagName + " title=" + IDControl + " id=" + IDControl + " name=" + IDControl + " style=\"text-align:center; margin:auto\">" + "This is a text in " + tagName +" tag" + "</" + tagName + ">";
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

// ============= Create Video ==============


function createVideo() {
    inputStr = "<video width=\"320\" height=\"240\" controls=\"controls\" id=" + IDControl + " name=" + IDControl + " title=" + IDControl + " preload=\"auto\">" +
               "<source src=\"../Video/movie.mp4\" type=\"video/mp4\">" +
               "<source src=\"../Video/movie.ogg\" type=\"video/ogg\">"+
               "</video>";
    document.write(inputStr);
}

// ============= Create Source ==============


function createSource() {
    inputStr = "<video width=\"320\" height=\"240\" controls=\"controls\">" +
               "<source id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">" +
               "<source src=\"http://www.w3schools.com/html/movie.mp4\" type=\"video/mp4\">" +
               "<source src=\"http://www.w3schools.com/html/movie.ogg\" type=\"video/ogg\">" +
               "not supported"+
               "</video>";
    document.write(inputStr);

    var control = document.getElementById(IDControl);    

}

// ============= Create Audio ==============

function createAudio() {
    inputStr = "<audio controls=\"controls\" id=" + IDControl + " name=" + IDControl + " title=" + IDControl + " preload=\"auto\">" +
               "<source src=\"../Video/Loving_you.ogg\" type=\"audio/ogg\">" +
               "<source src=\"../Video/Loving_you.mp3\" type=\"audio/mp3\">" +
		"not supported" +
               "</audio>";
    document.write(inputStr);
}
 
// ============= Create Embed ==============

function createEmbed() {
    inputStr = "<embed id=" + IDControl + " name=" + IDControl + " title=" + IDControl + " type=\"application/x-shockwave-flash\" src=\"http://www.w3schools.com/tags/helloworld.swf\" width=\"200\" height=\"100\" style=\"border:1px solid\">";
    document.write(inputStr);
}

// ============== Create Command ===============

function createCommand() {
    inputStr = "<menu>" +
               "<command type=\"command\" id=" + IDControl + " name=" + IDControl + " title=" + IDControl + " type=\"command\" label=\"Save\" onclick=\"save()\">Save</command>" +
                "</menu>";
               document.write(inputStr);
}

// =========== Create Detail =================

function createDetail() {
    inputStr = "<details id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">" +
               "<summary>LogiGear</summary>"+
               "<p>Founded in 1994 by top thought leaders in the software testing industry, LogiGear has completed over 3,000 projects </p>" +
               "for hundreds of companies across a broad range of industries and technologies.</p>"+
               "</details>";
    document.write(inputStr);
}

// ============ Create Summary =======================
//setInterval(function () { clearInterval(varInterval); updDefaultLocation('');}, 10);
function createSummary() {
    inputStr = "<details>" +
               "<summary onclick=\"setInterval(function () { clearInterval(varInterval); updDefaultLocation('');}, 10);\" id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">LogiGear</summary>" +
               "<p>Founded in 1994 by top thought leaders in the software testing industry, LogiGear has completed over 3,000 projects </p>" +
               "for hundreds of companies across a broad range of industries and technologies.</p>" +
               "</details>";
    document.write(inputStr);
}

// ============ Create Figure ================

function createFigure() {
    inputStr = "<figure id=" + IDControl + " name=" + IDControl + " title=" + IDControl + " style=\"background-color:aliceblue\">" +
               "<img src=\"../images/img_pulpit.jpg\" alt=\"The Pulpit Rock\" width=\"304\" height=\"228\">"+
               "</figure>";
    document.write(inputStr);
}

// ============ Create Figure Caption ================

function createFigCaption() {
    inputStr = "<figure>" +
               "<img src=\"../images/img_pulpit.jpg\" alt=\"The Pulpit Rock\" width=\"304\" height=\"228\">" +
               "<figcaption style=\"background-color:cornflowerblue\" id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">Fig1. - A view of the pulpit rock in Norway.</figcaption>" +
               "</figure>";
    document.write(inputStr);
}

// =============== Create HGROUP ===================
function createHgroup() {
    inputStr = "<hgroup id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">" +
               "<h1>LogiGear Software Testing</h1>" +
               "<h2>LogiGear Software Testing</h2>" +
               "<h3>LogiGear Software Testing</h3>" +
               "<h4>LogiGear Software Testing</h4>" +
               "<h5>LogiGear Software Testing</h5>" +
               "<h6>LogiGear Software Testing</h6>" +
               "</hgroup>";
    document.write(inputStr);
}

// =============== Create METER ===================
function createMeter() {
    inputStr = "Disk Usage: <meter low=\"10\" high=\"90\" style=\"high:90px; width:200px;\" min=\"0\" max=\"100\" optimum = \"0\" value=\"91\" title=\"Space free: 9GB\nTotal: 100GB\"></meter>";
    inputStr = inputStr + "<br>Batery Usage: <meter min=\"0\" low=\"0\" high=\"90\" style=\"high:90px; width:200px;\" max=\"100\" optimum = \"91\" value=\"25\" title=\"Remain: 25%\"></meter>";
    inputStr = inputStr + "<br>Meter Test: <meter min=\"0\" max=\"100\" low=\"20\" high=\"90\" style=\"high:90px; width:200px;\" optimum=\"30\" value=\"65\" id=" + IDControl + " name=" + IDControl + " title=" + IDControl + "></meter>";
    document.write(inputStr);
}

// ============== Create NAV =======================

function createNav() {
    inputStr = "<nav id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">" +
               "<a href=\"http://www.w3schools.com/html/\">HTML</a> |" +
               "<a href=\"http://www.w3schools.com/css/\">CSS</a> |" +
               "<a href=\"http://www.w3schools.com/js/\">JavaScript</a> |" +
               "<a href=\"http://www.w3schools.com/jquery/\">jQuery</a>" +
               "</nav>";
    document.write(inputStr);
}


// ========================== Create Progress ==============

function createProgress() {
    inputStr = "Downloading progress:<progress value=\"50\" max=\"100\" id=" + IDControl + " name=" + IDControl + " title=" + IDControl + "></progress>";
    document.write(inputStr);
}

// ============================ Create Canvas ==========================
function createCanvas() {
    inputStr = "<canvas id=" + IDControl + " title=" + IDControl + " width=\"200\" height=\"100\" style=\"border:1px solid #d3d3d3;\">" +
               "Your browser does not support the HTML5 canvas tag.</canvas>";
    document.write(inputStr);
        var c = document.getElementById(IDControl);
        var ctx=c.getContext("2d");
        ctx.font="30px Arial";
        ctx.strokeText("Hello World",10,50);
}

// ======================= Create DataList ===========================

function createDataList() {
    inputStr = "<input list=" + IDControl + ">" +
               "<datalist id=" + IDControl + " name=" + IDControl + " title=" + IDControl + ">" +
               "<option value=\"Internet Explorer\">"+
               "<option value=\"Firefox\">"+
               "<option value=\"Chrome\">"+
               "<option value=\"Opera\">"+
               "<option value=\"Safari\">"+
               "</datalist>";
    document.write(inputStr);
}

// ================= Create Keygen ==================

function createKeygen() {
    inputStr = "<form action=\"http://www.w3schools.com/tags/demo_keygen.asp\" method=\"get\">"+
               "Username: <input type=\"text\" name=\"usr_name\">"+
               "Key Gen: <keygen name=\"security\" id=" + IDControl + " title=" + IDControl + " style=\"-webkit-keygen-select:0\">" +
               "<input type=\"submit\">"+
               "</form>";
    document.write(inputStr);
}

// ====================== Create Output ====================

function createOutput() {
    inputStr = "<form oninput=\"x.value=parseInt(a.value)+parseInt(b.value)\">0" +
               "<input type=\"range\" name=\"a\" value=\"50\">100"+
               "+<input type=\"number\" name=\"b\" value=\"50\">"+
                "Output :<output id=" + IDControl + " name=\"x\" title=" + IDControl + " for=\"a b\"></output>" +
               "</form>";
                document.write(inputStr);
}
function createRuby() {
    inputStr = "<ruby id=" + IDControl + " title=" + IDControl + ">漢 <rt> ㄏㄢˋ </rt></ruby>";
    document.write(inputStr);
}
function createRt() {
    inputStr = "<ruby>漢 <rt id=" + IDControl + " title=" + IDControl + "> ㄏㄢˋ </rt></ruby>";
    document.write(inputStr);
}
function createRp() {
    inputStr = "<ruby>漢 <rt><rp id=" + IDControl + " title=" + IDControl + ">(</rp>ㄏㄢˋ<rp>)</rp></rt></ruby>";
    document.write(inputStr);
}

function createTime() {
    inputStr = "We open at <time id=" + IDControl + " title=" + IDControl + " datetime=\"2012-10-24\" >10:00</time> every morning.";
    document.write(inputStr);    
}

function createSvg() {
    inputStr = "<svg id=" + IDControl + " title=" + IDControl + " xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"200\" height=\"200\">" +
               "<polygon points=\"100,10 40,180 190,60 10,60 160,180\" style=\"fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;\">"+
               "</svg>";
    document.write(inputStr);
}

function createInputEmail() {
    inputStr = "<form action=\"http://www.w3schools.com/tags/demo_form.asp\">" +
               "E-mail: <input type=\"email\" id=" + IDControl + " maxlength=\"20\" autocomplete=on placeholder=" + IDControl + "  required name=" + IDControl + " title=" + IDControl + "><br>" +
               "<input type=\"submit\">" +
               "</form>";
    document.write(inputStr);

    document.getElementById(IDControl).onchange = function () {
        var ValDate = document.getElementById(IDControl);
        updUISpecProperty("value", ValDate.value);
    };
}
function createInputUrl() {
    inputStr = "<form action=\"http://www.w3schools.com/tags/demo_form.asp\">" +
               "Add your homepage: <input type=\"url\" id=" + IDControl + " maxlength=\"20\" autocomplete=on placeholder=" + IDControl + "  required name=" + IDControl + " title=" + IDControl + ">" +
               "<input type=\"submit\">" +
               "</form>";
    document.write(inputStr);

    document.getElementById(IDControl).onchange = function () {
        var ValDate = document.getElementById(IDControl);
        updUISpecProperty("value", ValDate.value);
    };
}

function createInputColor() {
    inputStr = "<form action=\"http://www.w3schools.com/tags/demo_form.asp\">" +
               "Select your favorite color: <input type=\"color\" id=" + IDControl + " autocomplete=on" + "  required name=" + IDControl + " title=" + IDControl + ">" +
               "<input type=\"submit\">" +
               "</form>";
    document.write(inputStr);
    document.getElementById(IDControl).onchange = function () {
        var ValDate = document.getElementById(IDControl);
        updUISpecProperty("value", ValDate.value);
    };
}

function createInputSearch() {
    inputStr = "<form action=\"http://www.w3schools.com/tags/demo_form.asp\">" +
               "<input type=\"search\" id=" + IDControl + " maxlength=20 autocomplete=on" + " placeholder=" + IDControl + "  required name=" + IDControl + " title=" + IDControl + ">" +
               "<input type=\"submit\">" +
               "</form>";
    document.write(inputStr);
    document.getElementById(IDControl).onchange = function () {
        var ValDate = document.getElementById(IDControl);
        updUISpecProperty("value", ValDate.value);
    };
}
function createInputTel() {
    inputStr = "<form action=\"http://www.w3schools.com/tags/demo_form.asp\">" +
               "<input type=\"tel\" id=" + IDControl + " maxlength=20 autocomplete=on" + " placeholder=" + IDControl + "  required name=" + IDControl + " title=" + IDControl + ">" +
               "<input type=\"submit\">" +
               "</form>";
    document.write(inputStr);
    document.getElementById(IDControl).onchange = function () {
        var ValDate = document.getElementById(IDControl);
        updUISpecProperty("value", ValDate.value);
    };
}

function createHTML5Input() {    
    var buttonnode = document.createElement('input');
    buttonnode.setAttribute('id', IDControl);
    buttonnode.setAttribute('type', ID);
    buttonnode.setAttribute('name', IDControl);
    buttonnode.setAttribute('title', IDControl);

    buttonnode.setAttribute('autocomplete', 'on');
    buttonnode.setAttribute('required', '');

    buttonnode.autofocus = true;
    buttonnode.list = "";
    buttonnode.min = "";
    buttonnode.max = "";
    buttonnode.readOnly = false;
    buttonnode.step = "";
    
    buttonnode.onchange = function () {
        var ValDate = document.getElementById(IDControl);
        updUISpecProperty("value", ValDate.value);
    };

    //Create aForm for submit
    var formNode = document.createElement('form');
    formNode.setAttribute('action', 'http://www.w3schools.com/tags/demo_form.asp');
    var submitNode = document.createElement('input');
    submitNode.setAttribute('type', 'submit');
    formNode.appendChild(buttonnode);
    formNode.appendChild(submitNode);

    var td1 = document.getElementById(IDDspControl);
    if (td1) td1.appendChild(formNode);
    else document.write(formNode.outerHTML);
}

function createNumeric() {
    var buttonnode = document.createElement('input');
    buttonnode.setAttribute('id', IDControl);
    buttonnode.setAttribute('type', ID);
    buttonnode.setAttribute('name', IDControl);
    buttonnode.setAttribute('value', 3);
    //buttonnode.setAttribute('max', 5);
    //buttonnode.setAttribute('min', 1);
    //buttonnode.setAttribute('step', 2);
    buttonnode.setAttribute('style', "width:200px");
    buttonnode.setAttribute('required', '');
    buttonnode.setAttribute('title', IDControl);
    buttonnode.onchange = function () {
        var ValDate = document.getElementById(IDControl);
        updUISpecProperty("value", ValDate.value);
    };

    //Create a datalist for test 'list' property
    var oDataList = document.createElement('datalist');
    oDataList.id = "datalist_test";
    buttonnode.setAttribute('list', "datalist_test");
    var options = '';

    for (var i = 0; i < 15; i++)
        options += '<option value="' + i + '" />';
    oDataList.innerHTML = options;


    var formNode = document.createElement('form');
    formNode.setAttribute('action', 'http://www.w3schools.com/tags/demo_form.asp');

    var submitNode = document.createElement('input');
    submitNode.setAttribute('type', 'submit');

    formNode.appendChild(buttonnode);
    formNode.appendChild(submitNode);
    formNode.appendChild(oDataList);

    var td1 = document.getElementById(IDDspControl);
    if (td1) td1.appendChild(formNode);
    else document.write(formNode.outerHTML);
}

function createRange() {

    var buttonnode = document.createElement('input');
    buttonnode.setAttribute('id', IDControl);
    buttonnode.setAttribute('type', ID);
    buttonnode.setAttribute('name', IDControl);
    buttonnode.setAttribute('value', 3);
    //buttonnode.setAttribute('max', 5);
    //buttonnode.setAttribute('min', 1);
    //buttonnode.setAttribute('step', 2);
    buttonnode.setAttribute('autocomplete', 'on');
    buttonnode.setAttribute('title', IDControl);
    buttonnode.onchange = function () {
        var ValDate = document.getElementById(IDControl);
        updUISpecProperty("value", ValDate.value);
    };

    //Create a datalist
    var oDataList = document.createElement('datalist');
    oDataList.id = "datalist_test";
    buttonnode.setAttribute('list', "datalist_test");
    var options = '';
    for (var i = 0; i < 100; i++)
        options += '<option value="' + i + '" />';
    oDataList.innerHTML = options;

    var formNode = document.createElement('form');
    formNode.setAttribute('action', 'http://www.w3schools.com/tags/demo_form.asp');

    var submitNode = document.createElement('input');
    submitNode.setAttribute('type', 'submit');

    formNode.appendChild(buttonnode);
    formNode.appendChild(submitNode);
    formNode.appendChild(oDataList);

    var td1 = document.getElementById(IDDspControl);

    if (td1) {
        td1.appendChild(formNode);        
    }
    else {     
        document.write(formNode.outerHTML);
    }
}
