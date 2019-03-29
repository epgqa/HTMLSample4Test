/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ColorInfo.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ColorInfo.Html',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];
output.push('<div id="',input.idPrefix,'" class="',this.rootNodeCssClasses(),'">\n	<div id="',input.idPrefix,'-value" class="',this.cssClass('title'),'"></div>\n	<div id="',input.idPrefix,'-swatch" class="',this.cssClass('swatch'),'"></div>\n	<div class="',this.cssClass('subheader'),'">As a background</div>\n	<div id="',input.idPrefix,'-asBackground" class="',this.cssClass('asBg'),'">\n		<span class="',this.cssClass('whiteText'),'">white text</span>&nbsp;&nbsp;\n		<span class="',this.cssClass('blackText'),'">black text</span>\n	</div>\n	<div class="',this.cssClass('subheader'),'">As a text color</div>\n	<div id="',input.idPrefix,'-asForeground" class="',this.cssClass('asColor'),'">\n		<div class="',this.cssClass('onWhite'),'"></div>\n		<div class="',this.cssClass('onBlack'),'"></div>\n		<div style="position:relative; width:100%;">on white&nbsp;&nbsp;&nbsp;&nbsp;on black</div>\n	</div>\n</div>\n\n');return output.join('');};_a.input={idPrefix:'string'};return _a;}});