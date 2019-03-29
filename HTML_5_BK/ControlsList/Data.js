/// Assign Data///////////////
var strParagraph = "A,Abbr,Article,Aside,Bdi,Footer,Header,Hgroup,Mark,Wbr,Blockquote,Cite,Code,Dl,Dt,Dd,Del,Dfn,Div,Em,Embed,Fieldset,Frame," +
    "H1,H2,H3,H4,H5,H6,Ins,kbd,Label,Legend,Object,Ol,Ul,Li,P,Pre,Rp,Rt,Ruby,Q,Samp,Section,Small,span,Strong,sub,sup,Td,Th,Var";
componentsArr = new Array("Common controls", "Layout", "Navigate", "Media","Util","Scenarios");
controlsArr = [
    { name: "Common controls", value: "Canvas,Command,DataList,Details,Figure,FigCaption,Iframe,InputButton,InputSubmit,InputReset,InputCheckBox,InputFile,InputText,InputPassword,InputRadio,InputColor,InputDate,InputDatetime,InputDatetime-local,InputEmail,InputMonth,InputNumber,InputRange,InputSearch,InputTel,InputTime,InputUrl,InputWeek,InputImage,Image,Keygen,Label,MessageBox,Meter,Map,Nav,Output,Progress,Area,Address,Select,Summary,Svg,Table,TextArea,TimeTag,ScrollBar"},
    { name: "Layout", value: strParagraph },
    { name: "Navigate", value: "Navigate" },
    { name: "Media", value: "Video,Audio,Embed,Source,CustomizeVideo" },
    { name: "Util", value: "Cookie,WindowWait,ObjectWait" },
    { name: "Scenarios", value: "ScenarioControls,ScenarioEvents,ScenarioViewer" }
];
sampleArr = [
    { name: "Canvas", value: "Canvas" },
    { name: "Command", value: "Command" },
    { name: "DataList", value: "DataList" },
    { name: "Details", value: "Details" },
    { name: "Figure", value: "Figure" },
    { name: "FigCaption", value: "FigCaption" },
    { name: "Iframe", value: "Iframe" },    
    { name: "Image", value: "Image" },
    { name: "Keygen", value: "Keygen" },
    { name: "Label", value: "Label" },
    { name: "MessageBox", value: "MessageBox" },
    { name: "Meter", value: "Meter" },
    { name: "Map", value: "Map" },
    { name: "InputButton", value: "InputButton,DynamicButton" },
    { name: "InputSubmit", value: "InputSubmit" },
    { name: "InputReset", value: "InputReset" },
    { name: "InputCheckBox", value: "InputCheckBox" },
    { name: "InputFile", value: "InputFile" },
    { name: "InputImage", value: "InputImage" },
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
    { name: "InputTel", value: "InputTel" },
    { name: "InputUrl", value: "InputUrl" },
    { name: "InputWeek", value: "InputWeek" },
    { name: "InputPassword", value: "InputPassword" },
    { name: "InputRadio", value: "InputRadio" },
    { name: "InputText", value: "InputText" },
    { name: "Nav", value: "Nav" },
    { name: "Output", value: "Output" },
    { name: "Progress", value: "Progress" },
    { name: "Area", value: "Area" },
    { name: "Address", value: "Address" },
    { name: "Select", value: "Select,SelectItemWait" },
    { name: "Summary", value: "Summary" },
    { name: "Table", value: "Table,TableCustomize,TableItemWait" },    
    { name: "TextArea", value: "TextArea" },
    { name: "Layout", value: "Layout" },
    { name: "Navigate", value: "Navigate" },
    { name: "WindowWait", value: "WindowWait" },
    { name: "ObjectWait", value: "ObjectWait" },
    { name: "Video", value: "Video" },
    { name: "Audio", value: "Audio" },
    { name: "Source", value: "Source" },
    { name: "Embed", value: "Embed" },
    { name: "TimeTag", value: "TimeTag" },
    { name: "Svg", value: "Svg,SvgExpand" },
    { name: "Cookie", value: "Cookie" },
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
        DisplayComment("'autocomplete': (on/off) affect after submitting to server.\n"+
            "'placeholder' specifies a short hint that describes the expected value of an <input> element.\n"+
            "'required' specifies that an input field must be filled out before submitting the form.\n" +            
            "'inputmode': The inputmode content attribute is an enumerated attribute that specifies what kind of input mechanism would be most helpful for users entering content into the form control. See link for more details: https://developers.whatwg.org/association-of-controls-and-forms.html#attr-fe-inputmode \n" +
            "The <password> is not one of the disable elements.\nUser can edit such as: maxlength, size,...\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "imagebtn") {
        getData_ImageBtn();
        DisplayComment("User can edit such as: src,...\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "image") {
        getData_Image();
        DisplayComment("The <image> is not one of the disable elements.\nThe content of 'title' attribute is displayed in the tooltip control.\n'alt' attribute is only displayed when the image src has problem.");
    }
    else if (ID == "textarea") {
        getData_TextArea();
        DisplayComment("User can edit such as: Rows, Cols,...\nThe resize attribute is not supported in both Android Browser and iOS Safari.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "select") {
        getData_Select();
        DisplayComment("Change the value of size > 1 or multiple = true for displaying <select> tag as a list box.\nSize, height attribute does not affect on Android Browser. Size attribute does not affect on Chrome for Android and iOS Safari.\nThe content of 'title' attribute is displayed in the tooltip control.");
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
        DisplayComment("The <meter> is useful for displaying a value within a given range and applying a style to the display to indicate how close the current value is to the optimum range.\n\nUser can edit such as: value, min, max, high, low, optinum (optinum indicate which section of the range is desirable).\nThe disable attribute is not affect.\nExample: Disk Usage (the low range is optimal), Battery Usage (the high range is optimal)...\n\nIt is currently supported only in Chrome(8.+), FireFox(6.0+), Safari(6.0+), Opera(11.0+), Android Browser(4.4+), Chrome for Android, not supported in iOS Safari.");
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
        DisplayComment("The <keygen> is currently supported in Chrome(1.0+), FireFox(1.0+), Safari(1.2+), Opera(3.0+), Chrome for Android, not supported in IE");
    }
    else if (ID == "command") {
        getData_Command();
        DisplayComment("The <command> tag is currently not supported in any of the major browsers.");
    }
    else if (ID == "progress") {
        getData_Progress();
        DisplayComment("User can edit such as: value, max,...\nThe <progress> is not one of the disable elements.\nIt is currently supported in Chrome(8.0+), IE(10.0+), FireFox(16.0+), Safari(6.0+), Opera(11.0+), Android(4.4+), Chrome for Android (38+), iOS Safari(7.0+)");
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
        DisplayComment("The <embed> is not one of the disable elements.\nThe content of 'title' attribute is displayed in the tooltip control.\nChrome for Android does not support Flash.");
    }
    else if (ID == "output") {
        getData_OutPut();        
        DisplayComment("The content of <output> is generated dynamically.\nWidth, height attribute does not affect for <output>.\nIt is not one of the disable elements.\nIt is currently supported in Chrome(10.0+), Opera(15.0+), FireFox(4.0+), Safari, Chrome for Android, not supported in IE.");
    }
    else if (ID == "timetag") {
        getData_Time();
        DisplayComment("The <time> element does not render as anything special in any of the major browsers.\nAttributes: disable, width, height don't affect.\nThe content of datetime attribute is for machine-readable.");
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
        loadProperty_Paragraph();
        DisplayComment("Use <object> to embed multimedia (like audio, video, Java applets, ActiveX, PDF, and Flash) in web pages.");
    }
    else if (ID == "fieldset") {
        loadProperty_Paragraph();
        DisplayComment("The <fieldset> tag is used to group related elements in a form.\nThe content of 'title' attribute is displayed in the tooltip control");
    }
    else if (ID == "datalist") {
        loadProperty_Paragraph();
        DisplayComment("The <datalist> is used to provide an 'autocomplete' feature on <input> elements.\nIt does not have GUI so attributes Left, top, width, height, visible, disable don't affect.\nIt is currently only supported in Chrome (20.0+), IE (10.0+), Firefox (4.0+), Opera (9.0+), not supported in Safari, Android Browser, Chrome for Android and iOS Safari.");
    }
    else if (ID == "svg") {
        loadProperty_Paragraph();
        DisplayComment("The <svg> is used to define vector-based graphics for the Web.\nIt is not one of the disable elements.\nIt is currently supported in IE (9.0+), Firefox, Opera, Chrome, Chrome for Android and Safari support basic SVG.");
    }
    else if (ID == "color") {
        getData_Color();
        DisplayComment("\n'autocomplete': (on/off) affect after submitting to server.\n" +
            "'list' attribute is used to identify an element that lists predefined options suggested to the user. Its value must be the ID of a datalist element in the same document.\n" +
            "The <color> is currently only supported in Chrome(31.0+), FireFox(29.0+), Opera(20+), Safari(8+), Android Browser (4.4+), Chrome for Android(38+). Not supported in IE, iOS Safari");
    }
    else if (checkITemExistinArray(ctrlHTMLInput, ID))
    {
        getData_DatePickers();
        DisplayComment("'autocomplete': (on/off) affect after submitting to server.\n" +
            "'autofocus': This Boolean attribute lets you specify that a form control should have input focus when the page loads\n" +
            "'required': specifies that an input field must be filled out before submitting the form.\n" +
            "'min' and 'max' attributes indicate the allowed range of values for the element.\n" +
            "'list' attribute is used to identify an element that lists predefined options suggested to the user. Its value must be the ID of a datalist element in the same document.\n" +
            "'step': Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number\n" +
            "This tag is currently only supported in Chrome, Opera, iOS Safari(5.0+), Android Browser(4.4+) and Chrome for Android");
    }
    else if (ID == "text") {
        getData_CommonForInput();
        PropertyData[PropertyData.length] = { name: "inputmode", value: "value17", type: "string", status: 1 };
        DisplayComment("'autocomplete': (on/off) affect after submitting to server.\n" +
            "'placeholder' specifies a short hint that describes the expected value of an <input> element.\n" +
            "'inputmode': The inputmode content attribute is an enumerated attribute that specifies what kind of input mechanism would be most helpful for users entering content into the form control. See link for more details: https://developers.whatwg.org/association-of-controls-and-forms.html#attr-fe-inputmode \n" +
            "'required' specifies that an input field must be filled out before submitting the form.\n" +
            "'list' attribute is used to identify an element that lists predefined options suggested to the user. Its value must be the ID of a datalist element in the same document.\n" +
            "'pattern' attribute specifies a regular expression against which the control's value, or, when the multiple attribute applies and is set, the control's values, are to be checked.\n"
            );
    }
    else if (ID == "email") {
        getData_CommonForInput();
        PropertyData[PropertyData.length] = { name: "multiple", value: "value17", type: "boolean", status: 1 };
        DisplayComment("\n'autocomplete': (on/off) affect after submitting to server.\n" +
            "'placeholder' specifies a short hint that describes the expected value of an <input> element\n" +
            "'required': specifies that an input field must be filled out before submitting the form.\n" +
            "'multiple': this boolean attribute indicates whether the user is to be allowed to specify more than one value.\n" +
            "'list' attribute is used to identify an element that lists predefined options suggested to the user. Its value must be the ID of a datalist element in the same document.\n" +
            "'pattern' attribute specifies a regular expression against which the control's value, or, when the multiple attribute applies and is set, the control's values, are to be checked.\n"+
            "This tag is currently only supported in IE, FireFox, Chrome, Chrome for Android, and Opera."
            
            );
    }
    else if (ID == "url") {
        getData_CommonForInput();
        DisplayComment("\n'autocomplete': (on/off) affect after submitting to server.\n" +
            "'placeholder' specifies a short hint that describes the expected value of an <input> element\n" +
            "'required': specifies that an input field must be filled out before submitting the form.\n" +
            "'list' attribute is used to identify an element that lists predefined options suggested to the user. Its value must be the ID of a datalist element in the same document.\n" +
            "'pattern' attribute specifies a regular expression against which the control's value, or, when the multiple attribute applies and is set, the control's values, are to be checked.\n"+
            "This tag is currently only supported in IE, FireFox, Chrome, Chrome for Android, and Opera."
            
            );
    }
    else if (ID == "tel") {
        getData_CommonForInput();
        DisplayComment("\n'autocomplete': (on/off) affect after submitting to server.\n"+
            "'placeholder' specifies a short hint that describes the expected value of an <input> element\n"+
            "'pattern' attribute specifies a regular expression against which the control's value, or, when the multiple attribute applies and is set, the control's values, are to be checked.\n"+
            "'required': specifies that an input field must be filled out before submitting the form.\n" +
            "'list' attribute is used to identify an element that lists predefined options suggested to the user. Its value must be the ID of a datalist element in the same document.\n" +
            "'pattern' attribute specifies a regular expression against which the control's value, or, when the multiple attribute applies and is set, the control's values, are to be checked.\n"+
            "This tag is currently only supported in Safari 8"
            );
    }
    else if (ID == "search") {
        getData_CommonForInput();
        DisplayComment("'autocomplete': (on/off) affect after submitting to server.\n"+
            "'placeholder' specifies a short hint that describes the expected value of an <input> element\n" +
        "'pattern' attribute specifies a regular expression against which the control's value, or, when the multiple attribute applies and is set, the control's values, are to be checked.\n" +
        "'inputmode': The inputmode content attribute is an enumerated attribute that specifies what kind of input mechanism would be most helpful for users entering content into the form control. See link for more details: https://developers.whatwg.org/association-of-controls-and-forms.html#attr-fe-inputmode \n" +
        "'list' attribute is used to identify an element that lists predefined options suggested to the user. Its value must be the ID of a datalist element in the same document.\n" +
        "'required': specifies that an input field must be filled out before submitting the form.\n"+
        "This tag is currently only supported in chrome, and safari."
        );
    }
    else if (ID == "number") {
        getData_numeric();
        DisplayComment("User can edit such as: min, max, step, value...\n"+
            "'list' attribute is used to identify an element that lists predefined options suggested to the user. Its value must be the ID of a datalist element in the same document.\n" +
            "iOS Safari, Android 4 and Chrome for Android show number input, but do not use 'step', 'min' or 'max' attributes or show increment/decrement buttons.");
    }
    else if (ID == "range") {
        getData_range();
        DisplayComment("User can edit such as: min, max, step, value...\n" +
            "'multiple': this boolean attribute indicates whether the user is to be allowed to specify more than one value.\n" +
            "'list' attribute is used to identify an element that lists predefined options suggested to the user. Its value must be the ID of a datalist element in the same document.\n" +
            "This tag is currently supported in Android Browser(2.1+), iOS Safari(5.0+), Chrome for Android.");
    }
    else if (ID == "abbr") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "bdi") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "cite") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "code") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "dd") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "del") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "dfn") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "em") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "ins") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "mark") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't ateffect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "q") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "rp") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height, left, top don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "ruby") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height, left, top don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "Samp") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height, left, top don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "small") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height, left, top don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "var") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height, left, top don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "kbd") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height, left, top don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "span") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height, left, top don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "sub") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height, left, top don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
    }
    else if (ID == "sup") {
        loadProperty_Paragraph();
        DisplayComment("Attributes: disable, width, height, left, top don't affect.\nThe content of 'title' attribute is displayed in the tooltip control.");
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
                 { name: "textContent", value: "value15", type: "string", status: 1 },
                 { name: "detectMouseOver", value: "value16", type: "boolean", status: 1 },
                 { name: "contentEditable", value: "value19", type: "boolean", status: 1 },
                 { name: "isEnableTabOrder", value: "value19", type: "boolean", status: 1 }
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
                 { name: "textContent", value: "value15", type: "string", status: 1 },
                 { name: "detectMouseOver", value: "value16", type: "boolean", status: 1 },
                 { name: "contentEditable", value: "value19", type: "boolean", status: 1 },
                 { name: "isEnableTabOrder", value: "value19", type: "boolean", status: 1 }

    ];
}

function getData_DatePickers() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "autocomplete", value: "value15", type: "string", status: 1 };
    PropertyData[ii +1] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
    PropertyData[ii + 2] = { name: "list", value: "value17", type: "string", status: 1 };
    PropertyData[ii + 3] = { name: "min", value: "value17", type: "string", status: 1 };
    PropertyData[ii + 4] = { name: "max", value: "value17", type: "string", status: 1 };
    PropertyData[ii + 5] = { name: "readonly", value: "value17", type: "boolean", status: 1 };
    PropertyData[ii + 6] = { name: "required", value: "value17", type: "boolean", status: 1 };
    PropertyData[ii + 7] = { name: "step", value: "value17", type: "string", status: 1 };

}
function getData_CommonForInput() {
    loadProperty_Common();
    ii = PropertyData.length;    
    PropertyData[ii] = { name: "maxLength", value: "value14", type: "int", status: 1 };    
    PropertyData[ii + 1] = { name: "autocomplete", value: "value15", type: "string", status: 1 };
    PropertyData[ii + 2] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
    PropertyData[ii + 3] = { name: "list", value: "value17", type: "string", status: 1 };
    PropertyData[ii + 4] = { name: "placeholder", value: "value16", type: "string", status: 1 };
    PropertyData[ii + 5] = { name: "required", value: "value17", type: "boolean", status: 1 };
    PropertyData[ii + 6] = { name: "pattern", value: "value17", type: "string", status: 1 };
    PropertyData[ii + 7] = { name: "readonly", value: "value17", type: "boolean", status: 1 };
    PropertyData[ii + 8] = { name: "size", value: "value17", type: "boolean", status: 1 };

}
function getData_Color() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "autocomplete", value: "value15", type: "string", status: 1 };
    PropertyData[ii + 1] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
    PropertyData[ii + 2] = { name: "list", value: "value17", type: "string", status: 1 };
}

function getData_Button() {
    loadProperty_Common();
    PropertyData[PropertyData.length] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
}

function getData_CheckBox() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "checked", value: "value14", type: "boolean", status: 1 };
    PropertyData[ii + 1] = { name: "required", value: "value17", type: "boolean", status: 1 };
    PropertyData[ii + 2] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };

}

function getData_Radio() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "checked", value: "value14", type: "boolean", status: 1 };
    PropertyData[ii + 1] = { name: "required", value: "value17", type: "boolean", status: 1 };
    PropertyData[ii + 2] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
}

function getData_Submit() {
    loadProperty_Common();
    PropertyData[PropertyData.length] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
}

function getData_Reset() {
    loadProperty_Common();
    PropertyData[PropertyData.length] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
}

function getData_File() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
    PropertyData[ii + 1] = { name: "size", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 2] = { name: "required", value: "value14", type: "boolean", status: 1 };
    PropertyData[ii + 3] = { name: "multiple", value: "value15", type: "boolean", status: 1 };

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
    PropertyData[ii + 5] = { name: "inputmode", value: "value17", type: "string", status: 1 };
    PropertyData[ii + 6] = { name: "readonly", value: "value17", type: "boolean", status: 1 };
    PropertyData[ii + 7] = { name: "pattern", value: "value17", type: "string", status: 1 };
}

function getData_ImageBtn() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
    PropertyData[ii + 1] = { name: "src", value: "value14", type: "string", status: 1 };    
}

function getData_numeric() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "max", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "min", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 2] = { name: "step", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 3] = { name: "required", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 4] = { name: "autocomplete", value: "value16", type: "string", status: 1 };
    PropertyData[ii + 5] = { name: "list", value: "value17", type: "string", status: 1 };
    PropertyData[ii + 6] = { name: "placeholder", value: "value17", type: "string", status: 1 };
    PropertyData[ii + 7] = { name: "readonly", value: "value17", type: "boolean", status: 1 };
    PropertyData[ii + 8] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
    
}

function getData_range() {
    loadProperty_Common();
    ii = PropertyData.length;
    PropertyData[ii] = { name: "max", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 1] = { name: "min", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 2] = { name: "step", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 3] = { name: "autocomplete", value: "value14", type: "int", status: 1 };
    PropertyData[ii + 4] = { name: "multiple", value: "value15", type: "boolean", status: 1 };
    PropertyData[ii + 5] = { name: "list", value: "value17", type: "string", status: 1 };
    PropertyData[ii + 6] = { name: "autofocus", value: "value15", type: "boolean", status: 1 };
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