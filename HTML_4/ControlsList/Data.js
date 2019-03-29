/// Assign Data///////////////
var strParagraph = "A,Abbr,Acronym,Big,Blockquote,Cite,Code,Dl,Dt,Dd,Del,Dfn,Div,Em,Embed,Fieldset,Frame," +
    "H1,H2,H3,H4,H5,H6,Ins,kbd,Label,Legend,Object,Ol,Ul,Li,P,Pre,Q,Samp,Small,span,Strong,sub,sup,Td,Th,Tt,Var";
componentsArr = new Array("Common controls", "Layout", "Navigate", "Util", "Scenarios");
controlsArr = [
    { name: "Common controls", value: "InputButton,InputSubmit,InputReset,InputCheckBox,InputFile,InputText,InputPassword,InputRadio,InputImage,Image,Label,MessageBox,Map,Area,Address,Select,Table,TextArea,ScrollBar" },
    { name: "Layout", value: strParagraph },
    { name: "Navigate", value: "Navigate" },
    { name: "Util", value: "Cookie,WindowWait,ObjectWait" },
    { name: "Scenarios", value: "ScenarioControls" }
];
sampleArr = [
    { name: "InputButton", value: "InputButton,DynamicButton" },
    { name: "InputSubmit", value: "InputSubmit" },
    { name: "InputReset", value: "InputReset" },
    { name: "InputCheckBox", value: "InputCheckBox" },
    { name: "InputFile", value: "InputFile" },
    { name: "InputImage", value: "InputImage" },
    { name: "Image", value: "Image" },
    { name: "Label", value: "Label" },
    { name: "MessageBox", value: "MessageBox" },
    { name: "Map", value: "Map" },
    { name: "Area", value: "Area" },
    { name: "Address", value: "Address" },
    { name: "InputPassword", value: "InputPassword" },
    { name: "InputRadio", value: "InputRadio" },
    { name: "Select", value: "Select,SelectItemWait" },
    { name: "Table", value: "Table,TableCustomize,TableItemWait" },
    { name: "InputText", value: "InputText" },
    { name: "TextArea", value: "TextArea" },
    { name: "Layout", value: "Layout" },
    { name: "Cookie", value: "Cookie" },
    { name: "Navigate", value: "Navigate" },
    { name: "WindowWait", value: "WindowWait" },
    { name: "ObjectWait", value: "ObjectWait" },
	{ name: "ScrollBar", value: "ScrollBar" }
];
////////////////////////////////////////////////

function InitData() {

    DisplayComment("the content of 'title' attribute is displayed in the tooltip control");
    ID = getUrlParm('id').toLowerCase();

    if (ID == "button") {
        getData_Button();
    }
    else if (ID == "checkbox") {
        getData_CheckBox();
    }
    else if (ID == "radio") {
        getData_Radio();
    }
    else if (ID == "submit") {
        getData_Submit();
    }
    else if (ID == "reset") {
        getData_Submit();
    }
    else if (ID == "file") {
        getData_File();
    }
    else if (ID == "password") {
        getData_Password();
    }
    else if (ID == "imagebtn") {
        getData_ImageBtn();
    }
    else if (ID == "image") {
        getData_Image();
        DisplayComment("'alt' attribute is only displayed when the image src has problem ");
    }
    else if (ID == "label") {
        getData_Label();
    }
    else if (ID == "text") {
        getData_Text();
    }
    else if (ID == "textarea") {
        getData_TextArea();
    }
    else if (ID == "select") {
        getData_Select();
    }
    else if (ID == "table") {
        getData_Table();
    }
    else if (ID == "tableunicode") {
        getData_Table();
    }
    else if (ID == "map") {
        getData_Map();
    }
    else if (ID == "address") {
        getData_Address();
    }
    else if (ID == "area") {
        getData_Area();
    }
    else {
        getData_Others();
    }
}

function loadProperty_Common() {

    PropertyData = [
                 { name: "id", value: "value1", type: "int", status: 0 },
                 { name: "name", value: "value2", type: "string", status: 1 },
                 { name: "value", value: "value5", type: "string", status: 1 },
                 { name: "type", value: "value3", type: "string", status: 0 },
                 { name: "tagName", value: "value4", type: "string", status: 0 },
                 { name: "disabled", value: "value6", type: "boolean", status: 0 },
                 { name: "visible", value: "value7", type: "boolean", status: 1 },
                 //{ name: "index", value: "", type: "int", status: 1 },
                 { name: "title", value: "value8", type: "int", status: 1 },
                 { name: "height", value: "value12", type: "int", status: 1 },
                 { name: "width", value: "value11", type: "int", status: 1 },
                 { name: "left", value: "value9", type: "int", status: 1 },
                 { name: "left_screen", value: "value14", type: "int", status: 0 },
                 { name: "top", value: "value10", type: "int", status: 1 },
                 { name: "top_screen", value: "value13", type: "int", status: 0 },
                 { name: "innerHTML", value: "value14", type: "string", status: 0 },
                 { name: "textContent", value: "value15", type: "string", status: 1 }

               ];
}

function loadProperty_Paragraph() {

    PropertyData = [
                 { name: "id", value: "value1", type: "int", status: 0 },
                 //{ name: "name", value: "value2", type: "string", status: 1 },
                 { name: "tagName", value: "value4", type: "string", status: 0 },
                 { name: "disabled", value: "value6", type: "boolean", status: 0 },
                 { name: "visible", value: "value7", type: "boolean", status: 1 },
                 //{ name: "index", value: "", type: "int", status: 1 },
                 { name: "title", value: "value8", type: "int", status: 1 },
                 { name: "height", value: "value12", type: "int", status: 1 },
                 { name: "width", value: "value11", type: "int", status: 1 },
                 { name: "left", value: "value9", type: "int", status: 1 },
                 { name: "left_screen", value: "value14", type: "int", status: 0 },
                 { name: "top", value: "value10", type: "int", status: 1 },
                 { name: "top_screen", value: "value13", type: "int", status: 0 },
                 { name: "innerHTML", value: "value14", type: "string", status: 1 },
                 { name: "textContent", value: "value15", type: "string", status: 1 }

    ];
}
function getData_Button() {
    loadProperty_Common();
    UpdSpecField_PropertyData('disabled', 'status', 1);    
}

function getData_CheckBox() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "checked", value: "value14", type: "boolean", status: 1 };
    UpdSpecField_PropertyData('disabled', 'status', 1);
    UpdSpecField_PropertyData('value', 'status', 0);
}

function getData_Radio() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "checked", value: "value14", type: "boolean", status: 1 };
    UpdSpecField_PropertyData('disabled', 'status', 1);
    UpdSpecField_PropertyData('value', 'status', 0);
    UpdSpecField_PropertyData('textContent', 'status', 0);
}

function getData_Submit() {
    loadProperty_Common();
    UpdSpecField_PropertyData('disabled', 'status', 1);
}

function getData_Reset() {
    loadProperty_Common();
    UpdSpecField_PropertyData('disabled', 'status', 1);
}

function getData_File() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "size", value: "value14", type: "int", status: 1 };
    UpdSpecField_PropertyData('value', 'status', 0);
    UpdSpecField_PropertyData('disabled', 'status', 1);
}

function getData_Password() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "size", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "maxLength", value: "value15", type: "int", status: 1 };
    UpdSpecField_PropertyData('disabled', 'status', 1);
}

function getData_ImageBtn() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "src", value: "value14", type: "string", status: 1 };
    UpdSpecField_PropertyData('value', 'status', 0);
    UpdSpecField_PropertyData('textContent', 'status', 0);
}
function getData_Image() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "src", value: "value14", type: "string", status: 1 };
    ii = ii+1;
    PropertyData[ii] = { name: "alt", value: "value15", type: "string", status: 0 };
    ii = ii + 1;
    PropertyData[ii] = { name: "longHrf", value: "value16", type: "string", status: 0 };
    ii = ii + 1;
    PropertyData[ii] = { name: "shortHrf", value: "value17", type: "string", status: 0 };
    ii = ii + 1;
    PropertyData[ii] = { name: "title", value: "value18", type: "string", status: 1 };
    UpdSpecField_PropertyData('value', 'status', 0);
    UpdSpecField_PropertyData('textContent', 'status', 0);
}

function getData_Label() {
    loadProperty_Common();
    UpdSpecField_PropertyData('innerHTML', 'status', 1);
    UpdSpecField_PropertyData('disabled', 'status', 1);
}

function getData_Text() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "maxLength", value: "value14", type: "int", status: 1 };
    UpdSpecField_PropertyData('disabled', 'status', 1);
}
function getData_TextArea() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "Rows", value: "value14", type: "int", status: 0 };
    PropertyData[ii + 1] = { name: "Cols", value: "value14", type: "int", status: 1 };
    UpdSpecField_PropertyData('disabled', 'status', 1);
}

function getData_Select() {

    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "size", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "multiple", value: "value15", type: "boolean", status: 1 };
    PropertyData[ii + 2] = { name: "Item_length", value: "value16", type: "int", status: 1 };
    PropertyData[ii + 3] = { name: "Item_name", value: "value17", type: "string", status: 1 };
    UpdSpecField_PropertyData('disabled', 'status', 1);
    UpdSpecField_PropertyData('textContent', 'status', 0);
}

function getData_Table() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "Caption", value: "value14", type: "int", status: 1 };
    PropertyData[ii+1] = { name: "Bodies", value: "value15", type: "int", status: 0 };
    PropertyData[ii + 2] = { name: "Cells", value: "value16", type: "int", status: 0 };
    PropertyData[ii + 3] = { name: "tableRows", value: "value17", type: "int", status: 1 };
    PropertyData[ii + 4] = { name: "Footer", value: "value18", type: "string", status: 1 };
    //UpdSpecField_PropertyData('innerHTML','status', 1);
    UpdSpecField_PropertyData('value', 'status', 0);
    UpdSpecField_PropertyData('textContent', 'status', 0);
}

function getData_Map() {  
    loadProperty_Paragraph();
    UpdSpecField_PropertyData('visible', 'status', 0);
    UpdSpecField_PropertyData('height', 'status', 0);
    UpdSpecField_PropertyData('width', 'status', 0);
    UpdSpecField_PropertyData('left', 'status', 0);
    UpdSpecField_PropertyData('top', 'status', 0);
    UpdSpecField_PropertyData('innerHTML', 'status', 0);
    UpdSpecField_PropertyData('textContent', 'status', 0);
}

function getData_Address() {
    loadProperty_Paragraph();
}

function getData_Area() {
    loadProperty_Paragraph();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "alt", value: "value14", type: "string", status: 0 };
    PropertyData[ii + 1] = { name: "coords", value: "value15", type: "string", status: 0 };
    PropertyData[ii + 2] = { name: "shape", value: "value16", type: "string", status: 0 };
    UpdSpecField_PropertyData('visible', 'status', 0);
    UpdSpecField_PropertyData('height', 'status', 0);
    UpdSpecField_PropertyData('width', 'status', 0);
    UpdSpecField_PropertyData('left', 'status', 0);
    UpdSpecField_PropertyData('top', 'status', 0);
}

function getData_Others() {
    loadProperty_Paragraph();
    
    if (ID == "dl" || ID == "fieldset" || ID == "ol" || ID == "ul")
        UpdSpecField_PropertyData('textContent', 'status', 0);

    if (ID == "embed")
    {
        UpdSpecField_PropertyData('innerHTML', 'status', 0);
        UpdSpecField_PropertyData('textContent', 'status', 0);
    }

    if (ID == "abbr" || ID == "acronym" || ID == "big" || ID == "cite" || ID == "code" || 
        ID == "del" || ID == "dfn" || ID == "em" || ID == "ins" || ID == "object" ||
        ID == "q" || ID == "samp" || ID == "small" || ID == "strong" || ID == "td" ||
        ID == "th" || ID == "tt" || ID == "var" || ID == "kbd" || ID == "span" ||
        ID == "sub" || ID == "sup")
    {
        UpdSpecField_PropertyData('height', 'status', 0);
        UpdSpecField_PropertyData('width', 'status', 0);
    }

}

function UpdSpecField_PropertyData(ProName,Field, value) {

    for (i = 0; i < PropertyData.length; i++) {
        oAttributes = PropertyData[i];
        if (oAttributes.name == ProName) {
            if (Field.toLowerCase() == "name") {
                oAttributes.name = value;
            } else if (Field.toLowerCase() == "value") {
                oAttributes.value = value;
            } else if (Field.toLowerCase() == "type") {
                oAttributes.type = value;
            } else if (Field.toLowerCase() == "status") {
                oAttributes.status = value;
            }
            PropertyData[i] = oAttributes;
            return;
        }

    }

}