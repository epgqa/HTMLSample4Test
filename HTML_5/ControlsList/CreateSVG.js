
//=================================================================================

function createCircle() {
    $("#DisplayCell").empty();
    inputStr = "<svg id=\"SVGTest\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"190\" width=\"190\">"
               + "<circle cx=\"100\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"2\" fill=\"red\" />"
               + "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

//=================================================================================

function createRectangle() {
    $("#DisplayCell").empty();
    inputStr = "<svg id=\"SVGTest\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"190\" width=\"190\">"
               + "<rect width=\"300\" height=\"100\" style=\"fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)\" />"
               + "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
//=================================================================================
function createRectangleWithOpacity() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"190\" width=\"190\">"+
               "<rect x=\"50\" y=\"20\" width=\"100\" height=\"100\" style=\"fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9\" />"+
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

//=================================================================================

function createRectangleWithRoundedCorners() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"190\" width=\"190\">"+
               "<rect x=\"70\" y=\"20\" rx=\"20\" ry=\"20\" width=\"100\" height=\"100\" style=\"fill:red;stroke:black;stroke-width:5;opacity:0.5\" />"+
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
//=================================================================================

function createEllipse() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"290\">" +
               "<ellipse cx=\"150\" cy=\"80\" rx=\"100\" ry=\"50\" style=\"fill:yellow;stroke:purple;stroke-width:2\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
//=================================================================================

function createThreeEllipsesOnTopOfEachOther() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"500\">" +
               "<ellipse cx=\"240\" cy=\"100\" rx=\"220\" ry=\"30\" style=\"fill:purple\" />"+
               "<ellipse cx=\"220\" cy=\"70\" rx=\"190\" ry=\"20\" style=\"fill:lime\" />"+
               "<ellipse cx=\"210\" cy=\"45\" rx=\"170\" ry=\"15\" style=\"fill:yellow\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;

}

//=================================================================================

function createLine() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"500\">" +
               "<line x1=\"150\" y1=\"0\" x2=\"300\" y2=\"200\" style=\"stroke:rgb(255,0,0);stroke-width:2\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;

}
//=================================================================================

function createPolygon() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"500\">" +
               "<polygon points=\"200,10 250,190 160,210\" style=\"fill:lime;stroke:purple;stroke-width:1\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

//=================================================================================
function createStar() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"300\">" +
               "<polygon points=\"100,10 40,180 190,60 10,60 160,180\" style=\"fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;\"/>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

//================================================================================

function createPolyline() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<polyline points=\"0,40 40,40 40,80 80,80 80,120 120,120 120,160\" style=\"fill:white;stroke:red;stroke-width:4\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

function createPath() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"300\">" +
               "<path d=\"M150 0 L75 200 L225 200 Z\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
//================================================================================

function createQuadratic()
{
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"500\">" +
               "<path id=\"lineAB\" d=\"M 100 350 l 150 -300\" stroke=\"red\" stroke-width=\"3\" fill=\"none\" />"+
               "<path id=\"lineBC\" d=\"M 250 50 l 150 300\" stroke=\"red\" stroke-width=\"3\" fill=\"none\" />"+
               "<path id=\"lineBC\" d=\"M 175 200 l 150 0\" stroke=\"red\" stroke-width=\"3\" fill=\"none\" />"+
               "<path id=\"quadcurveABC\" d=\"M 100 350 q 150 -300 300 0\" stroke=\"blue\" stroke-width=\"5\" fill=\"none\" />"+
               "<g stroke=\"black\" stroke-width=\"3\" fill=\"black\">"+
               "<circle id=\"pointA\" cx=\"100\" cy=\"350\" r=\"3\" />"+
               "<circle id=\"pointB\" cx=\"250\" cy=\"50\" r=\"3\" />"+
               "<circle id=\"pointC\" cx=\"400\" cy=\"350\" r=\"3\" />"+
               "</g>"+
               "<g font-size=\"30\" font=\"sans-serif\" fill=\"black\" stroke=\"none\" text-anchor=\"middle\">"+
               "<text x=\"100\" y=\"350\" dx=\"-30\">A</text>"+
               "<text x=\"250\" y=\"50\" dy=\"-10\">B</text>"+
               "<text x=\"400\" y=\"350\" dx=\"30\">C</text>"+
               "</g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
//================================================================================       

function createText() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<text x=\"0\" y=\"15\" fill=\"red\">Lưỡng Toàn Rạng Công</text>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
//================================================================================    

function createRotateText() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<text x=\"0\" y=\"15\" fill=\"red\" transform=\"rotate(40 20,30)\">Lưỡng Toàn Rạng Công</text>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
//================================================================================          

function createPathText() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">" +
               "<defs>"+
               "<path id=\"path1\" d=\"M75,20 a1,1 0 0,0 100,0\" />"+
               "</defs>"+
               "<text x=\"10\" y=\"100\" style=\"fill:red;\">"+
               "<textPath xlink:href=\"#path1\">Lưỡng Toàn Rạng Công</textPath>"+
               "</text>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

//================================================================================

function createSeveralLineText() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<text x=\"10\" y=\"20\" style=\"fill:red;\">Several lines:"+ 
               "<tspan x=\"10\" y=\"45\">First line</tspan> "+
               "<tspan x=\"10\" y=\"70\">Second line</tspan>"+ 
               "</text>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}


function createLinkText() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<a xlink:href=\"http://www.logigear.com/\" target=\"_blank\">" +
               "<text x=\"0\" y=\"15\" fill=\"red\">Lưỡng Toàn Rạng Công</text>"+
               "</a>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

function createDefinesTheColor() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<g fill=\"none\">"+
               "<path stroke=\"red\" d=\"M5 20 l215 0\" />"+
               "<path stroke=\"black\" d=\"M5 40 l215 0\" />"+
               "<path stroke=\"blue\" d=\"M5 60 l215 0\" />"+
               "</g>"+
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}


//=== Create Address ==================================================//

function createDefinesTheColorStroke_Width() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<g fill=\"none\" stroke=\"black\">"+
               "<path stroke-width=\"2\" d=\"M5 20 l215 0\" />"+
               "<path stroke-width=\"4\" d=\"M5 40 l215 0\" />"+
               "<path stroke-width=\"6\" d=\"M5 60 l215 0\" />"+
               "</g>"+
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

function createDefinesTheColorStroke_LineCap() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<g fill=\"none\" stroke=\"black\" stroke-width=\"6\">"+
               "<path stroke-linecap=\"butt\" d=\"M5 20 l215 0\" />"+
               "<path stroke-linecap=\"round\" d=\"M5 40 l215 0\" />"+
               "<path stroke-linecap=\"square\" d=\"M5 60 l215 0\" />"+
               "</g>"+
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

function createDefinesTheColorStroke_Dasharray() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<g fill=\"none\" stroke=\"black\" stroke-width=\"4\">"+
               "<path stroke-dasharray=\"5,5\" d=\"M5 20 l215 0\" />"+
               "<path stroke-dasharray=\"10,10\" d=\"M5 40 l215 0\" />"+
               "<path stroke-dasharray=\"20,10,5,5,5,10\" d=\"M5 60 l215 0\" />"+
               "</g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
function createfeGaussianBlur_Blur() {
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note: </b>Internet Explorer and Safari do not support SVG filters yet!</p>" +
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"f1\" x=\"0\" y=\"0\">"+
               "<feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"15\" />"+
               "</filter>"+
               "</defs>"+
               "<rect width=\"90\" height=\"90\" stroke=\"green\" stroke-width=\"3\" fill=\"yellow\" filter=\"url(#f1)\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
//====== Create OL ===============================

function createfeOffset_offserarectangle()
{
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note: </b>Internet Explorer and Safari do not support SVG filters yet!</p>" +
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"filter\" x=\"0\" y=\"0\">"+
               "<feGaussianBlur stdDeviation=\"5\" />"+
               "<feOffset dx=\"5\" dy=\"5\" />"+
               "</filter>"+
               "</defs>"+
               "<rect width=\"90\" height=\"90\" fill=\"grey\" filter=\"url(#filter)\" />"+
               "<rect width=\"90\" height=\"90\" fill=\"yellow\" stroke=\"black\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// ============ Create LI ===============

function createfeOffset_offsetimage()
{
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note: </b>Internet Explorer and Safari do not support SVG filters yet!</p>" +
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"f1\" x=\"0\" y=\"0\" width=\"200%\" height=\"200%\">"+
               "<feOffset result=\"offOut\" in=\"SourceGraphic\" dx=\"20\" dy=\"20\" />"+
               "<feGaussianBlur result=\"blurOut\" in=\"offOut\" stdDeviation=\"10\" />"+
               "<feBlend in=\"SourceGraphic\" in2=\"blurOut\" mode=\"normal\" />"+
               "</filter>"+
               "</defs>"+
               "<rect width=\"90\" height=\"90\" stroke=\"green\" stroke-width=\"3\" fill=\"yellow\" filter=\"url(#f1)\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}


function createfeOffset_shadowblack()
{
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note: </b>Internet Explorer and Safari do not support SVG filters yet!</p>"+
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"f1\" x=\"0\" y=\"0\" width=\"200%\" height=\"200%\">"+
               "<feOffset result=\"offOut\" in=\"SourceAlpha\" dx=\"20\" dy=\"20\" />"+
               "<feGaussianBlur result=\"blurOut\" in=\"offOut\" stdDeviation=\"10\" />"+
               "<feBlend in=\"SourceGraphic\" in2=\"blurOut\" mode=\"normal\" />"+
               "</filter>"+
               "</defs>"+
               "<rect width=\"90\" height=\"90\" stroke=\"green\" stroke-width=\"3\" fill=\"yellow\" filter=\"url(#f1)\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}


function createfeOffset_shadowcolor() {
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note: </b>Internet Explorer and Safari do not support SVG filters yet!</p>" +
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"f1\" x=\"0\" y=\"0\" width=\"200%\" height=\"200%\">"+
               "<feOffset result=\"offOut\" in=\"SourceGraphic\" dx=\"20\" dy=\"20\" />"+
               "<feColorMatrix result = \"matrixOut\" in = \"offOut\" type = \"matrix\" values = \"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0\"/>"+
               "<feGaussianBlur result=\"blurOut\" in=\"matrixOut\" stdDeviation=\"10\" />"+
               "<feBlend in=\"SourceGraphic\" in2=\"blurOut\" mode=\"normal\" />"+
               "</filter>"+
               "</defs>"+
               "<rect width=\"90\" height=\"90\" stroke=\"green\" stroke-width=\"3\" fill=\"yellow\" filter=\"url(#f1)\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

//============ Create DT ===========
function createBlendFilter() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"290\" width=\"200\">" +
               "<defs> <linearGradient id=\"MyGradient\" gradientUnits=\"userSpaceOnUse\" x1=\"100\" y1=\"0\" x2=\"300\" y2=\"0\">"+
               "<stop offset=\"0\" style=\"stop-color:#000000\" /> "+
               "<stop offset=\".33\" style=\"stop-color:#ffffff\" />"+       
               "<stop offset=\".67\" style=\"stop-color:#ffff00\" />"+ 
               "<stop offset=\"1\" style=\"stop-color:#808080\" />"+ 
               "</linearGradient> "+
               "<filter id=\"normal\"><feBlend mode=\"normal\" in2=\"BackgroundImage\" in=\"SourceGraphic\" /></filter>"+ 
               "<filter id=\"multiply\"><feBlend mode=\"multiply\" in2=\"BackgroundImage\" in=\"SourceGraphic\" /></filter>"+ 
               "<filter id=\"screen\"><feBlend mode=\"screen\" in2=\"BackgroundImage\" in=\"SourceGraphic\" /></filter>"+ 
               "<filter id=\"darken\"><feBlend mode=\"darken\" in2=\"BackgroundImage\" in=\"SourceGraphic\" /></filter> "+
               "<filter id=\"lighten\"><feBlend mode=\"lighten\" in2=\"BackgroundImage\" in=\"SourceGraphic\" /></filter> "+
               "</defs>"+ 
               "<g style=\"enable-background:new\">"+ 
               "<rect x=\"40\" y=\"20\" width=\"300\" height=\"450\" style=\"fill:url(#MyGradient)\" />"+ 
               "<g style=\"font-size:75;fill:#888888;fill-opacity:.6\">"+ 
               "<text x=\"50\" y=\"90\" filter=\"url(#normal)\">Normal</text>"+ 
               "<text x=\"50\" y=\"180\" filter=\"url(#multiply)\">Multiply</text>"+ 
               "<text x=\"50\" y=\"270\" filter=\"url(#screen)\">Screen</text>"+ 
               "<text x=\"50\" y=\"360\" filter=\"url(#darken)\">Darken</text>"+ 
               "<text x=\"50\" y=\"450\" filter=\"url(#lighten)\">Lighten</text>"+ 
               "</g>"+ 
               "</g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// =============== Vreate DD ===========

function createColorMatrixFilter() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"300\" width=\"300\">" +
               "<defs>"+
               "<linearGradient id=\"MyGrad\" gradientUnits=\"userSpaceOnUse\" x1=\"100\" y1=\"0\" x2=\"500\" y2=\"0\">"+ 
               "<stop offset=\"0\" style=\"stop-color:#ff00ff\" /><stop offset=\".33\" style=\"stop-color:#88ff88\" />"+
               "<stop offset=\".67\" style=\"stop-color:#2020ff\" /><stop offset=\"1\" style=\"stop-color:#d00000\" />"+ 
               "</linearGradient>"+ 
               "<filter id=\"Matrix\"><feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0\" /></filter>"+
               "<filter id=\"Saturate\"><feColorMatrix type=\"saturate\" values=\"0.4\" /></filter>"+ 
               "<filter id=\"HueRotate\"><feColorMatrix type=\"hueRotate\" values=\"90\" /></filter>"+ 
               "<filter id=\"Luminance\"><feColorMatrix type=\"luminanceToAlpha\" result=\"a\" /><feComposite in=\"SourceGraphic\" in2=\"a\" operator=\"in\" /></filter>"+ 
               "</defs>"+ 
               "<g style=\"font-size:50;fill:url(#MyGrad)\">"+
               "<text x=\"50\" y=\"60\">Unfiltered</text><text x=\"50\" y=\"120\" filter=\"url(#Matrix)\">Matrix</text>"+ 
               "<text x=\"50\" y=\"180\" filter=\"url(#Saturate)\">Saturate</text><text x=\"50\" y=\"240\" filter=\"url(#HueRotate)\">HueRotate</text>"+ 
               "<text x=\"50\" y=\"300\" filter=\"url(#Luminance)\">Luminance</text>"+ 
               "</g> " +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// ============= Create Video ==============


function createfeComponentTransferFilter() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"300\" width=\"350\">" +
               "<defs>"+
               "<linearGradient id=\"MyGrad\" gradientUnits=\"userSpaceOnUse\" x1=\"50\" y1=\"0\" x2=\"600\" y2=\"0\">"+
               "<stop offset=\"0\" stop-color=\"#ff0000\" /><stop offset=\".33\" stop-color=\"#00ff00\" /><stop offset=\".67\" stop-color=\"#0000ff\" />"+
               "<stop offset=\"1\" stop-color=\"#000000\" /></linearGradient>"+
               "<filter id=\"Identity\">"+
               "<feComponentTransfer><feFuncR type=\"identity\" /><feFuncG type=\"identity\" /><feFuncB type=\"identity\" /><feFuncA type=\"identity\" /></feComponentTransfer>"+
               "</filter>"+
               "<filter id=\"Table\">"+
	           "<feComponentTransfer><feFuncR type=\"table\" tableValues=\"0 0 1 1\" /><feFuncG type=\"table\" tableValues=\"1 1 0 0\" /><feFuncB type=\"table\" tableValues=\"0 1 1 0\" /></feComponentTransfer>"+
               "</filter>"+
               "<filter id=\"Linear\">"+
               "<feComponentTransfer><feFuncR type=\"linear\" slope=\".5\" intercept=\".25\" /><feFuncG type=\"linear\" slope=\".5\" intercept=\"0\" /><feFuncB type=\"linear\" slope=\".5\" intercept=\".5\" /></feComponentTransfer>"+
               "</filter>"+
               "<filter id=\"Gamma\">"+
               "<feComponentTransfer><feFuncR type=\"gamma\" amplitude=\"2\" exponent=\"5\" offset=\"0\" /><feFuncG type=\"gamma\" amplitude=\"2\" exponent=\"3\" offset=\"0\" /><feFuncB type=\"gamma\" amplitude=\"2\" exponent=\"1\" offset=\"0\" /></feComponentTransfer>"+
               "</filter>"+
               "</defs>"+
               "<g font-size=\"50\" font-weight=\"bold\" fill=\"url(#MyGrad)\">"+
               "<text x=\"50\" y=\"60\" filter=\"url(#Identity)\">Identity</text><text x=\"50\" y=\"120\" filter=\"url(#Table)\">TableLookup</text>"+
               "<text x=\"50\" y=\"180\" filter=\"url(#Linear)\">LinearFunc</text>"+
               "<text x=\"50\" y=\"240\" filter=\"url(#Gamma)\">GammaFunc</text>"+
               "</g>"+
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// ============= Create Source ==============


function createfeFloodfeCompositefeMerge() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"300\" width=\"350\">" +
               "<defs>"+
               "<filter id=\"test\" filterUnits=\"objectBoundingBox\" x=\"0\" y=\"0\" width=\"1.5\" height=\"4\">"+
               "<feOffset result=\"Off1\" dx=\"15\" dy=\"20\" />"+
               "<feFlood style=\"flood-color:#ff0000;flood-opacity:0.8\" />"+
               "<feComposite in2=\"Off1\" operator=\"in\" result=\"C1\" />"+
               "<feOffset in=\"SourceGraphic\" result=\"Off2\" dx=\"30\" dy=\"40\" />"+
               "<feFlood style=\"flood-color:#ff0000;flood-opacity:0.4\" />"+
               "<feComposite in2=\"Off2\" operator=\"in\" result=\"C2\" />"+
               "<feMerge><feMergeNode in=\"C2\" /><feMergeNode in=\"C1\" /><feMergeNode in=\"SourceGraphic\" /></feMerge>"+
               "</filter>"+
               "</defs>"+
               "<text x=\"30\" y=\"100\" style=\"font:36px verdana bold;fill:blue;filter:url(#test)\">This is some text!</text>"+
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// ============= Create Audio ==============

function createfeMorphology() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"500\" width=\"350\">" +
               "<defs>"+
               "<filter id=\"Erode1\"><feMorphology operator=\"erode\" in=\"SourceGraphic\" radius=\"1\" /></filter>"+
               "<filter id=\"Erode3\"><feMorphology operator=\"erode\" in=\"SourceGraphic\" radius=\"3\" /></filter>"+
               "<filter id=\"Erode4\"><feMorphology operator=\"erode\" in=\"SourceGraphic\" radius=\"4\" /></filter>"+
               "<filter id=\"Dilate1\"><feMorphology operator=\"dilate\" in=\"SourceGraphic\" radius=\"1\" /></filter>"+
               "<filter id=\"Dilate3\"><feMorphology operator=\"dilate\" in=\"SourceGraphic\" radius=\"3\" /></filter>"+
               "<filter id=\"Dilate4\"><feMorphology operator=\"dilate\" in=\"SourceGraphic\" radius=\"4\" /></filter>"+
               "</defs>"+
               "<g enable-background=\"new\">"+
               "<g font-family=\"Verdana\" font-size=\"50\" stroke=\"red\" stroke-width=\"4\">"+
               "<text x=\"50\" y=\"60\">Unfiltered</text><text x=\"50\" y=\"120\" filter=\"url(#Erode1)\">Erode 1</text>"+
               "<text x=\"50\" y=\"180\" filter=\"url(#Erode3)\">Erode 3</text><text x=\"50\" y=\"240\" filter=\"url(#Erode4)\">Erode 4</text>"+
               "<text x=\"50\" y=\"300\" filter=\"url(#Dilate1)\">Dilate 1</text><text x=\"50\" y=\"360\" filter=\"url(#Dilate3)\">Dilate 3</text>"+
               "<text x=\"50\" y=\"420\" filter=\"url(#Dilate4)\">Dilate 4</text>"+
               "</g></g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
 
// ============= Create Embed ==============

function createFilter1() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"MyFilter\" filterUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"200\" height=\"120\">"+
               "<feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"4\" result=\"blur\"/>"+
               "</filter>"+
               "</defs>"+
               "<rect x=\"1\" y=\"1\" width=\"198\" height=\"118\" fill=\"#cccccc\" />"+
               "<g filter=\"url(#MyFilter)\">"+
               "<path fill=\"none\" stroke=\"#D90000\" stroke-width=\"10\" d=\"M50,90 C0,90 0,30 50,30 L150,30 C200,30 200,90 150,90 z\" />"+
               "<text fill=\"#FFFFFF\" stroke=\"black\" font-size=\"45\" font-family=\"Verdana\" x=\"52\" y=\"76\">LGVN</text></g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

function createFilter2() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"MyFilter\" filterUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"200\" height=\"120\">"+
               "<feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"4\" result=\"blur\" />"+
               "<feOffset in=\"blur\" dx=\"4\" dy=\"4\" result=\"offsetBlur\" />"+
               "</filter>"+
               "</defs>"+
               "<rect x=\"1\" y=\"1\" width=\"198\" height=\"118\" fill=\"#cccccc\" />"+
               "<g filter=\"url(#MyFilter)\">"+
               "<path fill=\"none\" stroke=\"#D90000\" stroke-width=\"10\" d=\"M50,90 C0,90 0,30 50,30 L150,30 C200,30 200,90 150,90 z\" />"+
               "<text fill=\"#FFFFFF\" stroke=\"black\" font-size=\"45\" font-family=\"Verdana\" x=\"52\" y=\"76\">LGVN</text></g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
function createFilter3() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"MyFilter\" filterUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"200\" height=\"120\">"+
               "<feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"4\" result=\"blur\" />"+
               "<feOffset in=\"blur\" dx=\"4\" dy=\"4\" result=\"offsetBlur\" />"+
               "<feSpecularLighting in=\"blur\" surfaceScale=\"5\" specularConstant=\".75\" specularExponent=\"20\" lighting-color=\"#bbbbbb\" result=\"specOut\">"+
               "<fePointLight x=\"-5000\" y=\"-10000\" z=\"20000\" />"+
               "</feSpecularLighting>"+
               "</filter>"+
               "</defs>"+
               "<rect x=\"1\" y=\"1\" width=\"198\" height=\"118\" fill=\"#cccccc\" />"+
               "<g filter=\"url(#MyFilter)\">"+
               "<path fill=\"none\" stroke=\"#D90000\" stroke-width=\"10\" d=\"M50,90 C0,90 0,30 50,30 L150,30 C200,30 200,90 150,90 z\" />"+
               "<text fill=\"#FFFFFF\" stroke=\"black\" font-size=\"45\" font-family=\"Verdana\" x=\"52\" y=\"76\">LGVN</text></g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
function createFilter4() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"MyFilter\" filterUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"200\" height=\"120\">"+
               "<feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"4\" result=\"blur\" />"+
               "<feOffset in=\"blur\" dx=\"4\" dy=\"4\" result=\"offsetBlur\"/>"+
               "<feSpecularLighting in=\"blur\" surfaceScale=\"5\" specularConstant=\".75\" specularExponent=\"20\" lighting-color=\"#bbbbbb\" result=\"specOut\">"+
               "<fePointLight x=\"-5000\" y=\"-10000\" z=\"20000\" />"+
               "</feSpecularLighting>"+
               "<feComposite in=\"specOut\" in2=\"SourceAlpha\" operator=\"in\" result=\"specOut\" />"+
               "</filter>"+
               "</defs>"+
               "<rect x=\"1\" y=\"1\" width=\"198\" height=\"118\" fill=\"#cccccc\" />"+
               "<g filter=\"url(#MyFilter)\">"+
               "<path fill=\"none\" stroke=\"#D90000\" stroke-width=\"10\" d=\"M50,90 C0,90 0,30 50,30 L150,30 C200,30 200,90 150,90 z\" />"+
               "<text fill=\"#FFFFFF\" stroke=\"black\" font-size=\"45\" font-family=\"Verdana\" x=\"52\" y=\"76\">LGVN</text></g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
function createFilter5() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"MyFilter\" filterUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"200\" height=\"120\">"+
               "<feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"4\" result=\"blur\" /><feOffset in=\"blur\" dx=\"4\" dy=\"4\" result=\"offsetBlur\" />"+
               "<feSpecularLighting in=\"blur\" surfaceScale=\"5\" specularConstant=\".75\" specularExponent=\"20\" lighting-color=\"#bbbbbb\" result=\"specOut\">"+
               "<fePointLight x=\"-5000\" y=\"-10000\" z=\"20000\" /></feSpecularLighting>"+
               "<feComposite in=\"specOut\" in2=\"SourceAlpha\" operator=\"in\" result=\"specOut\" />"+
               "<feComposite in=\"SourceGraphic\" in2=\"specOut\" operator=\"arithmetic\" k1=\"0\" k2=\"1\" k3=\"1\" k4=\"0\" result=\"litPaint\" />"+
               "</filter>"+
               "</defs>"+
               "<rect x=\"1\" y=\"1\" width=\"198\" height=\"118\" fill=\"#cccccc\" />"+
               "<g filter=\"url(#MyFilter)\">"+
               "<path fill=\"none\" stroke=\"#D90000\" stroke-width=\"10\" d=\"M50,90 C0,90 0,30 50,30 L150,30 C200,30 200,90 150,90 z\" />"+
               "<text fill=\"#FFFFFF\" stroke=\"black\" font-size=\"45\" font-family=\"Verdana\" x=\"52\" y=\"76\">LGVN</text></g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
function createFilter6() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"200\">" +
               "<defs>"+
               "<filter id=\"MyFilter\" filterUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"200\" height=\"120\">"+
               "<feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"4\" result=\"blur\" />"+
               "<feOffset in=\"blur\" dx=\"4\" dy=\"4\" result=\"offsetBlur\" />"+
               "<feSpecularLighting in=\"blur\" surfaceScale=\"5\" specularConstant=\".75\" specularExponent=\"20\" lighting-color=\"#bbbbbb\" result=\"specOut\">"+
               "<fePointLight x=\"-5000\" y=\"-10000\" z=\"20000\" /></feSpecularLighting>"+
               "<feComposite in=\"specOut\" in2=\"SourceAlpha\" operator=\"in\" result=\"specOut\" />"+
               "<feComposite in=\"SourceGraphic\" in2=\"specOut\" operator=\"arithmetic\" k1=\"0\" k2=\"1\" k3=\"1\" k4=\"0\" result=\"litPaint\" /><feMerge>"+
               "<feMergeNode in=\"offsetBlur\" />"+
               "<feMergeNode in=\"litPaint\" /></feMerge>"+
               "</filter>"+
               "</defs>"+
               "<rect x=\"1\" y=\"1\" width=\"198\" height=\"118\" fill=\"#cccccc\" />"+
               "<g filter=\"url(#MyFilter)\">"+
               "<path fill=\"none\" stroke=\"#D90000\" stroke-width=\"10\" d=\"M50,90 C0,90 0,30 50,30 L150,30 C200,30 200,90 150,90 z\" />"+
               "<text fill=\"#FFFFFF\" stroke=\"black\" font-size=\"45\" font-family=\"Verdana\" x=\"52\" y=\"76\">LGVN</text></g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}
// ============== Create Command ===============

function createEllipseWithHorizontalLinearGradient() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"350\">" +
               "<defs>"+
               "<linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">"+
               "<stop offset=\"0%\" style=\"stop-color:rgb(255,255,0);stop-opacity:1\" />"+
               "<stop offset=\"100%\" style=\"stop-color:rgb(255,0,0);stop-opacity:1\" />"+
               "</linearGradient>"+
               "</defs>"+
               "<ellipse cx=\"200\" cy=\"70\" rx=\"85\" ry=\"55\" fill=\"url(#grad1)\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// =========== Create Detail =================

function createEllipseWithVerticalLinearGradient() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"350\">" +
               "<defs>"+
               "<linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">"+
               "<stop offset=\"0%\" style=\"stop-color:rgb(255,0,0);stop-opacity:1\" />"+
               "<stop offset=\"100%\" style=\"stop-color:rgb(255,255,0);stop-opacity:1\" />"+
               "</linearGradient>"+
               "</defs>"+
               "<ellipse cx=\"200\" cy=\"70\" rx=\"85\" ry=\"55\" fill=\"url(#grad1)\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// ============ Create Summary =======================

function createEllipseWithHorizontalLinearGradientText() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"350\">" +
               "<defs>"+
               "<linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">"+
               "<stop offset=\"0%\" style=\"stop-color:rgb(255,255,0);stop-opacity:1\" />"+
               "<stop offset=\"100%\" style=\"stop-color:rgb(255,0,0);stop-opacity:1\" />"+
               "</linearGradient>"+
               "</defs>"+
               "<ellipse cx=\"200\" cy=\"70\" rx=\"85\" ry=\"55\" fill=\"url(#grad1)\" />"+
               "<text fill=\"#ffffff\" font-size=\"45\" font-family=\"Verdana\" x=\"150\" y=\"86\">LGVN</text>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// ============ Create Figure ================

function createEllipseWithRadialGradientWhiletoBlue() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"350\">" +
               "<defs>"+
               "<radialGradient id=\"grad1\" cx=\"50%\" cy=\"50%\" r=\"50%\" fx=\"50%\" fy=\"50%\">"+
               "<stop offset=\"0%\" style=\"stop-color:rgb(255,255,255);stop-opacity:0\" />"+
               "<stop offset=\"100%\" style=\"stop-color:rgb(0,0,255);stop-opacity:1\" />"+
               "</radialGradient>"+
               "</defs>"+
               "<ellipse cx=\"200\" cy=\"70\" rx=\"85\" ry=\"55\" fill=\"url(#grad1)\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// ============ Create Figure Caption ================

function createAnotherEllipseWithRadialGradientWhiletoBlue() {
    $("#DisplayCell").empty();
    inputStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"350\">" +
               "<defs>"+
               "<radialGradient id=\"grad1\" cx=\"20%\" cy=\"30%\" r=\"30%\" fx=\"50%\" fy=\"50%\">"+
               "<stop offset=\"0%\" style=\"stop-color:rgb(255,255,255);stop-opacity:0\" />"+
               "<stop offset=\"100%\" style=\"stop-color:rgb(0,0,255);stop-opacity:1\" />"+
               "</radialGradient>"+
               "</defs>"+
               "<ellipse cx=\"200\" cy=\"70\" rx=\"85\" ry=\"55\" fill=\"url(#grad1)\" />" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// =============== Create HGROUP ===================
function createRecRepeatlyover5s() {
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note:</b> This example only works in Firefox and Google Chrome.</p>"+
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"200\" width=\"350\">" +
               "<rect x=\"20\" y=\"20\" width=\"250\" height=\"250\" style=\"fill:blue\">"+
               "<animate attributeType=\"CSS\" attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"5s\" repeatCount=\"indefinite\" /></rect>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// =============== Create METER ===================
function createGrowingRecandChangeColor() {
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note:</b> This example only works in Firefox and Google Chrome.</p>" +
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"300\" width=\"600\">" +
               "<rect id=\"rec\" x=\"300\" y=\"100\" width=\"300\" height=\"100\" style=\"fill:lime\">"+ 
               "<animate attributeName=\"x\" attributeType=\"XML\" begin=\"0s\" dur=\"6s\" fill=\"freeze\" from=\"300\" to=\"0\" />"+ 
               "<animate attributeName=\"y\" attributeType=\"XML\" begin=\"0s\" dur=\"6s\" fill=\"freeze\" from=\"100\" to=\"0\" />"+ 
               "<animate attributeName=\"width\" attributeType=\"XML\" begin=\"0s\" dur=\"6s\" fill=\"freeze\" from=\"300\" to=\"800\" />"+ 
               "<animate attributeName=\"height\" attributeType=\"XML\" begin=\"0s\" dur=\"6s\" fill=\"freeze\" from=\"100\" to=\"300\" />"+ 
               "<animateColor attributeName=\"fill\" attributeType=\"CSS\" from=\"lime\" to=\"red\" begin=\"2s\" dur=\"4s\" fill=\"freeze\" /></rect>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// ============== Create NAV =======================

function createThreeGrowingRecandChangeColor() {
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note:</b> This example only works in Google Chrome.</p>" +
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"300\" width=\"150\">" +
               "<rect x=\"10\" y=\"20\" width=\"90\" height=\"60\">"+
               "<animateColor id=\"a1\" attributeName=\"fill\" from=\"red\" to=\"FFFF00\" dur=\"5s\" />"+
               "</rect>"+
               "<rect x=\"10\" y=\"120\" width=\"90\" height=\"60\">"+
               "<animateColor id=\"a2\" attributeName=\"fill\" from=\"FFFF00\" to=\"66FF00\" begin=\"a1.end\" dur=\"5s\" />"+
               "</rect>"+
               "<rect x=\"10\" y=\"220\" width=\"90\" height=\"60\">"+
               "<animateColor id=\"a3\" attributeName=\"fill\" from=\"66FF00\" to=\"red\" begin=\"a2.end\" dur=\"5s\" /></rect>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}


// ========================== Create Progress ==============

function createMovetext() {
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note:</b> This example only works in Firefox and Google Chrome.</p>" +
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"300\" width=\"600\">" +
               "<g transform=\"translate(100,100)\">"+
               "<text id=\"TextElement\" x=\"0\" y=\"0\" style=\"font-family:Verdana;font-size:24\"> Lưỡng Toàn Rạng Công!"+
               "<animateMotion path=\"M 0 0 L 100 100\" dur=\"5s\" fill=\"freeze\" />"+
               "</text></g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// ============================ Create Canvas ==========================
function createMovetext2() {
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note:</b> This example only works in Firefox and Google Chrome.</p>" +
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"300\" width=\"600\">" +
               "<g transform=\"translate(100,100)\">"+ 
               "<text id=\"TextElement\" x=\"0\" y=\"0\" style=\"font-family:Verdana;font-size:10; visibility:hidden\"> Lưỡng Toàn Rạng Công!"+
               "<set attributeName=\"visibility\" attributeType=\"CSS\" to=\"visible\" begin=\"1s\" dur=\"5s\" fill=\"freeze\" />"+
               "<animateMotion path=\"M 0 0 L 100 100\" begin=\"1s\" dur=\"5s\" fill=\"freeze\" />"+
               "<animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" from=\"-30\" to=\"0\" begin=\"1s\" dur=\"5s\" fill=\"freeze\" />"+ 
               "<animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"scale\" from=\"1\" to=\"3\" additive=\"sum\" begin=\"1s\" dur=\"5s\" fill=\"freeze\" />"+ 
               "</text> </g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

// ======================= Create DataList ===========================

function createMovetext3() {
    $("#DisplayCell").empty();
    inputStr = "<p><b>Note:</b> This example only works in Firefox and Google Chrome.</p>" +
               "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"300\" width=\"600\">" +
               "<rect id=\"rec\" x=\"300\" y=\"100\" width=\"300\" height=\"100\" style=\"fill:lime\">"+ 
               "<animate attributeName=\"x\" attributeType=\"XML\" begin=\"0s\" dur=\"6s\" fill=\"freeze\" from=\"300\" to=\"0\" />"+ 
               "<animate attributeName=\"y\" attributeType=\"XML\" begin=\"0s\" dur=\"6s\" fill=\"freeze\" from=\"100\" to=\"0\" />"+ 
               "<animate attributeName=\"width\" attributeType=\"XML\" begin=\"0s\" dur=\"6s\" fill=\"freeze\" from=\"300\" to=\"800\" />"+ 
               "<animate attributeName=\"height\" attributeType=\"XML\" begin=\"0s\" dur=\"6s\" fill=\"freeze\" from=\"100\" to=\"300\" />"+ 
               "<animateColor attributeName=\"fill\" attributeType=\"CSS\" from=\"lime\" to=\"red\" begin=\"2s\" dur=\"4s\" fill=\"freeze\" />"+
               "</rect>"+
               "<g transform=\"translate(100,100)\">"+ 
               "<text id=\"TextElement\" x=\"0\" y=\"0\" style=\"font-family:Verdana;font-size:10; visibility:hidden\"> Lưỡng Toàn Rạng Công!"+
               "<set attributeName=\"visibility\" attributeType=\"CSS\" to=\"visible\" begin=\"1s\" dur=\"5s\" fill=\"freeze\" />"+
               "<animateMotion path=\"M 0 0 L 100 100\" begin=\"1s\" dur=\"5s\" fill=\"freeze\" />"+
               "<animateColor attributeName=\"fill\" attributeType=\"CSS\" from=\"red\" to=\"blue\" begin=\"1s\" dur=\"5s\" fill=\"freeze\" />"+ 
               "<animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" from=\"-30\" to=\"0\" begin=\"1s\" dur=\"5s\" fill=\"freeze\" />"+ 
               "<animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"scale\" from=\"1\" to=\"3\" additive=\"sum\" begin=\"1s\" dur=\"5s\" fill=\"freeze\" /></text>"+ 
               "</g>" +
               "</svg>";
    document.getElementById("DisplayCell").innerHTML = inputStr;
}

