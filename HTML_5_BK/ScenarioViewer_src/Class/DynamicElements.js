
// Create template of elements
//=================================================================================
var ATTRIBUTE_MASK = "%ATTRIBUTES%";
var EVENT_MASK = "%ATTRIBUTES%";
var INNERHTML_MASK = "%INNERHTML%"

//=================================================================================

function createButtonTemplate() {
    return "<input type=\"button\" " + ATTRIBUTE_MASK + " " + EVENT_MASK + "></input>";
}

function createCheckBoxTemplate() {
    
    var checkbox = "<span style=\"font-weight: bold;\">Checkbox Test" +
                "<input type=\"checkbox\" " + ATTRIBUTE_MASK + " " +EVENT_MASK + "/></span>";
    return checkbox;
}

function createLinkTemplate() {

    return "<a " + ATTRIBUTE_MASK + " " + EVENT_MASK + " >"+INNERHTML_MASK+"</a>";
}

function createTextAreaTemplate() {

    return "<textarea " + ATTRIBUTE_MASK + " " + EVENT_MASK + " cols=\"40\" rows=\"4\" >"+INNERHTML_MASK+"</textarea>";
}

function createImageTemplate() {
    return "<img " + ATTRIBUTE_MASK + " " + EVENT_MASK + "></img>";
}

function createDivTemplate() {

    return "<div " + ATTRIBUTE_MASK + " " + EVENT_MASK + ">"+INNERHTML_MASK+"</div>";
}

function createRadioTemplate() {
    var radio = "<span style=\"font-weight: bold;\">Radio Test" +
                "<input type=\"Radio\" " + ATTRIBUTE_MASK + " " + EVENT_MASK + " /></span>";

    return radio;
}

function createTextTemplate() {
    
    return "<input type=\"text\" " + ATTRIBUTE_MASK + " " + EVENT_MASK + " />";
}

function createDateTimeTemplate() {
    return "<input type=\"datetime-local\" " + ATTRIBUTE_MASK + " " + EVENT_MASK + " />";
}

function createSingleSelectTemplate() {
    var select = "<select size=\"1\" style=\"width:200px\" " + ATTRIBUTE_MASK + " " + EVENT_MASK + " >" +
                        "<option value=\"Item_0\">Item_0</option>" +
                        "<option value=\"Item_1\">Item_1</option>" +
                        "<option value=\"Item_2\">Item_2</option>" +
                    "</select>";
    return select;
}

function createMultipleSelectTemplate() {

    var select = "<select size=\"5\" multiple style=\"width:200px\" " + ATTRIBUTE_MASK + " " + EVENT_MASK + " >" +
                        "<option value=\"Item_0\">Item_0</option>" +
                        "<option value=\"Item_1\">Item_1</option>" +
                        "<option value=\"Item_2\">Item_2</option>" +
                    "</select>";
    return select;
}

function createTableTemplate() {

    var table = "<TABLE " + ATTRIBUTE_MASK + EVENT_MASK + " border=\"1\" RULES=GROUPS FRAME=BOX style=\"width:400px;text-align:center; margin:auto\">" +
                   INNERHTML_MASK +
                    "<thead>" +
                        "<tr>" +
                        "<td width=\"20%\" >String</td>" +
                        "<td width=\"20%\" >Chuỗi</td>" +
                        "<td width=\"20%\" >文本</td>" +
                        "<td width=\"20%\" >Boolean</td>" +
                        "<td width=\"20%\" >long</td>" +
                        "</tr>" +
                    "</thead> " +

                   "<tfoot>" +
                        "<th align=\"center\" colspan=\"5\" id=\"footerID\">Footer of Element </th>" +
                    "</tfoot>" +
                 "</TABLE>";
    return table;
}

function createLabelTemplate() {

    return "<label " + ATTRIBUTE_MASK + " " + EVENT_MASK + " />";
}

function createVideoTemplate() {

    var video = "<video width=\"320\" height=\"240\" controls=\"controls\" " + ATTRIBUTE_MASK + " " + EVENT_MASK + " preload=\"auto\">" +
               "<source src=\"http://www.w3schools.com/html/movie.mp4\" type=\"video/mp4\">" +
               "<source src=\"http://www.w3schools.com/html/movie.ogg\" type=\"video/ogg\">" +
		"not supported" +
               "</video>";

    return video;
}