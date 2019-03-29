/// Assign Data///////////////
var strParagraph = "A,Abbr,Article,Aside,Bdi,Footer,Header,Hgroup,Mark,Wbr,Blockquote,Cite,Code,Dl,Dt,Dd,Del,Dfn,Div,Em,Embed,Fieldset,Frame," +
    "H1,H2,H3,H4,H5,H6,Ins,kdb,Label,Legend,Object,Ol,Ul,Li,P,Pre,Rp,Rt,Ruby,Q,Samp,Section,Small,span,Strong,sub,sup,Td,Th,Var";
componentsArr = new Array("Common controls", "Layout", "Navigate", "Media", "Util", "Scenarios");
controlsArr = [
    { name: "Common controls", value: "Canvas,Command,DataList,Details,Figure,FigCaption,Iframe,InputButton,InputSubmit,InputReset,InputCheckBox,InputFile,InputText,InputPassword,InputRadio,InputColor,InputDate,InputDatetime,InputDatetime-local,InputEmail,InputMonth,InputNumber,InputRange,InputSearch,InputTime,InputUrl,InputWeek,InputImage,Image,Keygen,Label,MessageBox,Meter,Map,Nav,Output,Progress,Area,Address,Select,Summary,Svg,Table,TextArea,TimeTag,ScrollBar" },
    { name: "Layout", value: strParagraph },
    { name: "Navigate", value: "Navigate" },
    { name: "Media", value: "Video,Audio,Embed,Source,CustomizeVideo" },
    { name: "Util", value: "Cookie,WindowWait,ObjectWait" },
    { name: "Scenarios", value: "ScenarioControls" }
];
sampleArr = [
    { name: "Canvas", value: "Canvas" },
    { name: "Command", value: "Command" },
    { name: "DataList", value: "DataList" },
    { name: "Details", value: "Details" },
    { name: "Figure", value: "Figure" },
    { name: "FigCaption", value: "FigCaption"},
    { name: "Iframe", value: "Iframe" },
    { name: "InputButton", value: "InputButton,DynamicButton" },
    { name: "InputSubmit", value: "InputSubmit" },
    { name: "InputReset", value: "InputReset" },
    { name: "InputCheckBox", value: "InputCheckBox" },
    { name: "InputFile", value: "InputFile" },
    { name: "InputImage", value: "InputImage" },
    { name: "Image", value: "Image" },
    { name: "Keygen", value: "Keygen" },
    { name: "Label", value: "Label" },
    { name: "MessageBox", value: "MessageBox" },
    { name: "Meter", value: "Meter" },
    { name: "Map", value: "Map" },
    { name: "InputColor", value: "InputColor" },
    { name: "InputDate", value: "InputDate" },
    { name: "InputDatetime", value: "InputDatetime" },
    { name: "InputDatetime-local", value: "InputDatetime-local" },
    { name: "InputEmail", value: "InputEmail" },
    { name: "InputMonth", value: "InputMonth" },
    { name: "InputNumber", value: "InputNumber" },
    { name: "InputRange", value: "InputRange" },
    { name: "InputSearch", value: "InputSearch" },
    { name: "InputTime", value: "InputTime" },
    { name: "InputUrl", value: "InputUrl" },
    { name: "InputWeek", value: "InputWeek" },
    { name: "Nav", value: "Nav" },
    { name: "Output", value: "Output" },
    { name: "Progress", value: "Progress" },
    { name: "Area", value: "Area" },
    { name: "Address", value: "Address" },
    { name: "InputPassword", value: "InputPassword" },
    { name: "InputRadio", value: "InputRadio" },
    { name: "Select", value: "Select,SelectItemWait" },
    { name: "Summary", value: "Summary" },
    { name: "Table", value: "Table,TableCustomize,TableItemWait" },
    { name: "InputText", value: "InputText" },
    { name: "TextArea", value: "TextArea" },
    { name: "Layout", value: "Layout" },
    { name: "Navigate", value: "Navigate" },
    { name: "WindowWait", value: "WindowWait" },
    { name: "Video", value: "Video" },
    { name: "Audio", value: "Audio" },
    { name: "Source", value: "Source" },
    { name: "Embed", value: "Embed" },
    { name: "TimeTag", value: "TimeTag" },
    { name: "Svg", value: "Svg,SvgExpand" },
    { name: "Cookie", value: "Cookie" },
    { name: "ObjectWait", value: "ObjectWait" },
    { name: "CustomizeVideo", value: "CustomizeVideo" },
	{ name: "ScrollBar", value: "ScrollBar" }
];
////////////////////////////////////////////////

function InitData() {

    DisplayComment("The content of 'title' attribute is displayed in the tooltip control");
    ID = getUrlParm('id').toLowerCase();    
    if (ID == "button") {
        getData_Button();
    }    
    /*else if (ID == "figcaption" || ID == "figure" || ID == "nav" || ID == "navigate" || ID == "canvas") {
        loadProperty_Paragraph();        
    }*/
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
        DisplayComment("'autocomplete': (on/off) affect after submitting to server.\n'placeholder' specifies a short hint that describes the expected value of an <input> element.\n'required' specifies that an input field must be filled out before submitting the form.\nAutocomplete, required attribute is not supported on Android Browser and iOS Safari.\nThe <password> is not one of the disable elements.\nUser can edit such as: maxlength, size,...\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "imagebtn") {
        getData_ImageBtn();
        DisplayComment("User can edit such as: src,...\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "image") {
        getData_Image();
        DisplayComment("The <image> is not one of the disable elements.\nThe content of 'title' attribute is displayed in the tooltip control.\n'alt' attribute is only displayed when the image src has problem.");
    }    
    else if (ID == "text") {
        getData_CommonForInput();
        DisplayComment("'autocomplete': (on/off) affect after submitting to server.\n'placeholder' specifies a short hint that describes the expected value of an <input> element.\n'required' specifies that an input field must be filled out before submitting the form.\nAutocomplete, required attribute is not supported on Android Browser and iOS Safari.");
    }
    else if (ID == "textarea") {
        getData_TextArea();
        DisplayComment("User can edit such as: Rows, Cols,...\nThe resize attribute is not supported in both Android Browser and iOS Safari.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "select") {
        getData_Select();
        DisplayComment("Change the value of size > 1 or multiple = true for displaying <select> tag as a list box.\nSize, height attribute does not affect on Android Browser. Size attribute does not affect on iOS Safari.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "table") {
        getData_Table();
        DisplayComment("User can edit such as: Caption, Footer, TableRows...\nThe <table> is not one of the disable elements.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "tableunicode") {
        getData_Table();
    }
    else if (ID == "map") {
        loadProperty_Paragraph();
        DisplayComment("The <map> tag is used to define a client-side image-map. It does not have GUI so atrributes Left, top, width, height, visible, disable don't affect.");
    }
    else if (ID == "area") {
        getData_Area();
        DisplayComment("The <area> tag must be inside (always depend on) a <map> tag, it doesn't have GUI so atrributes Left, top, width, height, visible, disable don't affect.");
    }
    else if (ID == "video") {
        getData_Video();
        DisplayComment("Content attribute:\n   controls — Show user agent controls\n   loop — Whether to loop the media resource\nAutoplay attribute can not be auto played in iOS Safari\nThe <video> is not one of the disable elements.\nPlease change source with format of video is WebM and Ogg in FireFox and MP4 in IE.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "audio") {
        getData_Video();
        DisplayComment("Content attribute:\n   controls — Show user agent controls\n   loop — Whether to loop the media resource\nAutoplay attribute can not be auto played in iOS Safari\nThe <audio> is not one of the disable elements.\nPlease change mediasrc with format of audio is Wav or Ogg in FireFox and MP3 in IE.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "meter") {
        getData_Meter();
        DisplayComment("The <meter> is useful for displaying a value within a given range and applying a style to the display to indicate how close the current value is to the optimum range.\n\nUser can edit such as: value, min, max, high, low, optinum (optinum indicate which section of the range is desirable).\nThe disable attribute is not affect.\nExample: Disk Usage (the low range is optimal), Battery Usage (the high range is optimal)...\n\nIt is currently supported only in Chrome(8.+), FireFox(6.0+), Safari(6.0+), Opera(11.0+), Android Browser(4.4+), not supported in iOS Safari, Chrome for iOS.");
    }
    else if (ID == "summary") {
        loadProperty_Paragraph();
        DisplayComment("The <summary> is not one of the disable elements.\nIt is currently supported in Chrome(12.0+), Opera(15.0+), Safari(6.0+), Android Browser(4.0+), iOS Safari (6.0+). Not supported in IE, FireFox.");
    }
    else if (ID == "bdi") {
        loadProperty_Paragraph();
        DisplayComment("The <bdi> tag not one of the disable elements.\nIt is currently supported in Chrome(16.0+), FireFox(10.0+), not supported in IE, Safari and Opera.");
    }
    else if (ID == "keygen") {
        loadProperty_Paragraph();
        DisplayComment("The <keygen> is currently supported in Chrome(1.0+), FireFox(1.0+), Safari(1.2+), Opera(3.0+), not supported in IE.\niOS Safari claim to support it but actually creates totally empty dropdown.");
    }
    else if (ID == "command") {
        getData_Command();
        DisplayComment("The <command> tag is currently not supported in any of the major browsers.");
    }
    else if (ID == "progress") {
        getData_Progress();
        DisplayComment("User can edit such as: value, max,...\nThe <progress> is not one of the disable elements.\nIt is currently supported in Chrome(8.0+), IE(10.0+), FireFox(16.0+), Safari(6.0+), Opera(11.0+), Android(4.4+), iOS Safari(7.0+). Not support in Chrome for iOS");
    }
    else if (ID == "details") {
        getData_Detail();
        DisplayComment("The <details> is not one of the disable elements.\nIt is currently supported in Chrome(12.0+), Opera(15.0+), Safari(6.0+), Android Browser(4.0+)\niOS Safari(6.0+), not supported in IE, FireFox.");
    }
    else if (ID == "source") {
        getData_Source();
        DisplayComment("The <source> tag is used to specify multiple media resources for media elements, such as <video> and <audio>. It doesn't have GUI so attributes Left, top, width, height, visible, disable don't affect");
    }
    else if (ID == "embed") {
        getData_Embed();
        DisplayComment("The <embed> is not one of the disable elements.\nThe content of 'title' attribute is displayed in the tooltip control.");

    }
    else if (ID == "output") {
        getData_OutPut();        
        DisplayComment("The content of <output> is generated dynamically.\n   for: Specifies the relationship between the result of the calculation, and the elements used in the calculation\nWidth, height attribute does not affect for <output>.\nIt is not one of the disable elements.\nIt is currently supported in Chrome(10.0+), Opera(15.0+), FireFox(4.0+), not supported in IE, Safari.");
    }
    else if (ID == "timetag") {
        getData_Time();
        DisplayComment("The <time> element represents its contents so attributes width, height don't affect.\nThe content of datetime attribute is for machine-readable.\nIt isn't one of disable elements.");
    }
    else if (ID == "wbr") {
        loadProperty_Paragraph();
        DisplayComment("The <wbr> is currently supported in Chrome(1.0+), FireFox(3.0+), Safari(4.0+), Opera(11.70+), not supported in IE");
    }
    else if (ID == "legend") {
        loadProperty_Paragraph();
        DisplayComment("The <legend> tag defines a caption for the <fieldset> element.\nThe content of 'title' attribute is displayed in the tooltip control");
    }
    else if (ID == "object") {        
        getData_Object();
        DisplayComment("Use <object> to embed multimedia (like audio, video, Java applets, ActiveX, PDF, and Flash) in web pages.");
    }
    else if (ID == "fieldset") {
        loadProperty_Paragraph();
        DisplayComment("The <fieldset> tag is used to group related elements in a form.\nThe content of 'title' attribute is displayed in the tooltip control");
    }
    else if (ID == "datalist") {
        loadProperty_Paragraph();
        DisplayComment("The <datalist> is used to provide an 'autocomplete' feature on <input> elements.\nIt does not have GUI so attributes Left, top, width, height, visible, disable don't affect.\nIt is currently only supported in Chrome (20.0+), IE (10.0+), Firefox (4.0+), Opera (9.0+), not supported in Safari, Android Browser and iOS Safari.");
    }
    else if (ID == "svg") {
        loadProperty_Paragraph();
        DisplayComment("The <svg> is used to define vector-based graphics for the Web.\nIt is not one of the disable elements.\nIt is currently supported in IE (9.0+), Firefox, Opera, Chrome, and Safari support basic SVG.");
    }
    else if (ID == "color") {
        getData_Color();
        DisplayComment("\n'autocomplete': (on/off) affect after submitting to server. The <color> is currently only supported in Chrome(31.0+), FireFox(29.0+), Opera(+20),Android Browser (4.4+). Not supported in IE, iOS Safari");
    }
	//compatible with iOS from version 5.0 to 6.1
    else if (ID == "date" || ID == "datetime-local" || ID == "month" || ID == "time") {
        getData_DatePickers();
        DisplayComment("'autocomplete': (on/off) affect after submitting to server.\n'required': specifies that an input field must be filled out before submitting the form.\nAutocomplete, required attribute are not supported on Android Browser and iOS Safari.\nThis tag is currently only supported in Chrome, safari, and opera, Android Browser(4.4+), iOS Safari((5.0+)");
    }//The week input type is still not available, but now instead of falling back to a text input type, it’s rendered a non-interactive control
	else if(ID == "datetime"){
		getData_DatePickers();
		DisplayComment("'autocomplete': (on/off) affect after submitting to server.\n'required': specifies that an input field must be filled out before submitting the form.\nAutocomplete, required attribute are not supported on Android Browser and iOS Safari.\nThis tag is currently only supported in Chrome, safari, and opera, Android Browser(4.4+), iOS Safari(5.0 to 6.1)");
	}
	else if (ID == "week") {
	    getData_DatePickers();
	    DisplayComment("'autocomplete': (on/off) affect after submitting to server.\n'required': specifies that an input field must be filled out before submitting the form.\nAutocomplete, required attribute are not supported on Android Browser and iOS Safari.\nThis tag is currently only supported in Chrome, safari, and opera, Android Browser(4.4+), not supported in iOS Safari");
	}
    else if (ID == "url") {
        getData_CommonForInput();
        DisplayComment("\n'autocomplete': (on/off) affect after submitting to server.\n'placeholder' specifies a short hint that describes the expected value of an <input> element\n'required': specifies that an input field must be filled out before submitting the form.\nAutocomplete, required attribute and URL validation are not supported on Android Browser and iOS Safari.\nThe iOS device will display the '.com' button on the primary keyboard screen when user focus on <input> element above.\nThis tag is currently only supported in IE, FireFox, Chrome, and Opera.");
    }
	else if (ID == "email") {
        getData_CommonForInput();
        DisplayComment("\n'autocomplete': (on/off) affect after submitting to server.\n'placeholder' specifies a short hint that describes the expected value of an <input> element\n'required': specifies that an input field must be filled out before submitting the form.\nAutocomplete, required attribute and EMAIL validation are not supported on Android Browser and iOS Safari.\nThe iOS device will display a keyboard with the '@' symbol provided on the primary keyboard screen when user focus on <input> element above.\nThis tag is currently only supported in IE, FireFox, Chrome, and Opera.");
    }
    else if (ID == "search") {
        getData_CommonForInput();
        DisplayComment("'autocomplete': (on/off) affect after submitting to server.\n'placeholder' specifies a short hint that describes the expected value of an <input> element\n'required': specifies that an input field must be filled out before submitting the form.\nThis tag is currently only supported in chrome, and safari.");
    }
    else if (ID == "number") {
        getData_numeric();
        DisplayComment("User can edit such as: min, max, step, value...\nThe iOS device will display a number pad when user focus <input> element above.\nRequired attribute and NUMBER validation are not supported on Android Browser and iOS Safari.\niOS Safari, Android 4 and Chrome for Android show number input, but do not use 'step', 'min' or 'max' attributes or show increment/decrement buttons.");
    }
    else if (ID == "range") {
        getData_range();
        DisplayComment("User can edit such as: min, max, step, value...\nThis tag is currently supported in Android Browser(2.1+), iOS Safari(5.0+).");
    }
    else {
        loadProperty_Paragraph();
        DisplayComment("The <" + ID + "> is not one of the disable elements.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
}

function loadProperty_Common() {

    PropertyData = [
                 { name: "id", value: "value1", type: "int", status: 0 },
                 { name: "name", value: "value2", type: "string", status: 1 },
                 { name: "value", value: "value5", type: "string", status: 1 },
                 { name: "type", value: "value3", type: "string", status: 0 },
                 { name: "tagName", value: "value4", type: "string", status: 0 },
                 { name: "disabled", value: "value6", type: "boolean", status: 1 },
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
                 { name: "disabled", value: "value6", type: "boolean", status: 1 },
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
function getData_Object() {
    loadProperty_Paragraph();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "data", value: "value15", type: "string", status: 1 };
}
function getData_DatePickers() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "autocomplete", value: "value15", type: "string", status: 1 };
    PropertyData[ii + 1] = { name: "required", value: "value17", type: "boolean", status: 1 };
}
function getData_CommonForInput() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "maxLength", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "autocomplete", value: "value15", type: "string", status: 1 };
    PropertyData[ii + 2] = { name: "placeholder", value: "value16", type: "string", status: 1 };
    PropertyData[ii + 3] = { name: "required", value: "value17", type: "boolean", status: 1 };

}
function getData_Color() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "autocomplete", value: "value15", type: "string", status: 1 };
}

function getData_Button() {
    loadProperty_Common();
}

function getData_CheckBox() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "checked", value: "value14", type: "boolean", status: 1 };

}

function getData_Radio() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "checked", value: "value14", type: "boolean", status: 1 };
}

function getData_Submit() {
    loadProperty_Common();
}

function getData_Reset() {
    loadProperty_Common();
}

function getData_File() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "size", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "required", value: "value14", type: "boolean", status: 1 };
    UpdSpecField_PropertyData('value', 'status', 0);
}

function getData_Password() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "size", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "maxLength", value: "value15", type: "int", status: 1 };
    PropertyData[ii + 2] = { name: "autocomplete", value: "value16", type: "string", status: 1 };
    PropertyData[ii + 3] = { name: "placeholder", value: "value17", type: "string", status: 1 };
    PropertyData[ii + 4] = { name: "required", value: "value18", type: "boolean", status: 1 };
}

function getData_ImageBtn() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "src", value: "value14", type: "string", status: 1 };
}
function getData_Image() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "src", value: "value14", type: "string", status: 1 };
    ii = ii+1;
    PropertyData[ii] = { name: "alt", value: "value15", type: "string", status: 1 };
    ii = ii + 1;
    PropertyData[ii] = { name: "longHrf", value: "value16", type: "string", status: 0 };
    ii = ii + 1;
    PropertyData[ii] = { name: "shortHrf", value: "value17", type: "string", status: 0 };
    ii = ii + 1;
    PropertyData[ii] = { name: "title", value: "value18", type: "string", status: 1 };

}

function getData_Text() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "maxLength", value: "value14", type: "int", status: 1 };
}
function getData_TextArea() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "Rows", value: "value14", type: "int", status: 0 };
    PropertyData[ii+1] = { name: "Cols", value: "value14", type: "int", status: 1 };
}

function getData_Select() {

    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "size", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "multiple", value: "value15", type: "boolean", status: 1 };
    PropertyData[ii + 2] = { name: "Item_length", value: "value16", type: "int", status: 1 };
    PropertyData[ii + 3] = { name: "Item_name", value: "value17", type: "string", status: 1 };
}

function getData_Table() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "Caption", value: "value14", type: "int", status: 1 };    
    PropertyData[ii + 1] = { name: "Cells", value: "value16", type: "int", status: 0 };
    PropertyData[ii + 2] = { name: "tableRows", value: "value17", type: "int", status: 1 };
    PropertyData[ii + 3] = { name: "Footer", value: "value18", type: "string", status: 1 };
}

function getData_Area() {
    loadProperty_Paragraph();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "alt", value: "value14", type: "string", status: 1 };
    PropertyData[ii + 1] = { name: "coords", value: "value15", type: "string", status: 1 };
    PropertyData[ii + 2] = { name: "shape", value: "value16", type: "string", status: 1 };

}

function getData_Video() {    
    loadProperty_Paragraph();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "mediasrc", value: "value14", type: "string", status: 1 };
    PropertyData[ii + 1] = { name: "autoplay", value: "value15", type: "boolean", status: 1 };
    PropertyData[ii + 2] = { name: "controls", value: "value16", type: "boolean", status: 1 };
    PropertyData[ii + 3] = { name: "loop", value: "value17", type: "boolean", status: 1 };
    PropertyData[ii + 4] = { name: "preload", value: "value17", type: "string", status: 1 };

}

function getData_Meter() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "high", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "low", value: "value15", type: "int", status: 1 };
    PropertyData[ii + 2] = { name: "max", value: "value16", type: "int", status: 1 };
    PropertyData[ii + 3] = { name: "min", value: "value17", type: "int", status: 1 };
    PropertyData[ii + 4] = { name: "optimum", value: "value17", type: "int", status: 1 };

}

function getData_Progress() {
    loadProperty_Paragraph();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "max", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "value", value: "value15", type: "string", status: 1 };

}

function getData_Source() {
    loadProperty_Paragraph();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "src", value: "value14", type: "string", status: 1 };
    PropertyData[ii + 1] = { name: "type", value: "value15", type: "string", status: 0 };

}

function getData_Embed() {
    loadProperty_Paragraph();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "src", value: "value14", type: "string", status: 1 };
    PropertyData[ii + 1] = { name: "type", value: "value15", type: "string", status: 0 };

}

function getData_Command() {
    loadProperty_Paragraph();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "type", value: "value14", type: "string", status: 1 };
}

function getData_Detail() {
    loadProperty_Paragraph();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "open", value: "value14", type: "boolean", status: 1 };
}

function getData_OutPut() {
    loadProperty_Paragraph();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "name", value: "value14", type: "string", status: 1 };
    PropertyData[ii + 1] = { name: "for", value: "value14", type: "string", status: 0 };
}

function getData_Time() {
    loadProperty_Paragraph();    
    ii = PropertyData.length;
    PropertyData[ii] = { name: "datetime", value: "value14", type: "string", status: 1 };    
}

function getData_numeric() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "max", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "min", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 2] = { name: "step", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 3] = { name: "required", value: "value14", type: "int", status: 1 };
}

function getData_range() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "max", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "min", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 2] = { name: "step", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 3] = { name: "autocomplete", value: "value14", type: "int", status: 1 };
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