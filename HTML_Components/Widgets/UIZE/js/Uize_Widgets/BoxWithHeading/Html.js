/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.BoxWithHeading.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.BoxWithHeading.Html',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('<div id="',this.nodeId(),'" class="',this.rootNodeCssClasses(),'">\n	<div class="',this.cssClass('heading'),'">',input.heading,'</div>\n	<div class="',this.cssClass('body'),'">\n		',input.body,'\n	</div>\n</div>\n\n');return output.join('');};_a.input={heading:'string',body:'string'};return _a;}});