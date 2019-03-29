/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ColorSwatch.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ColorSwatch.Html',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('<div id="',input.idPrefix,'" class="',this.rootNodeCssClasses(),'"></div>\n\n');return output.join('');};_a.input={idPrefix:'string'};return _a;}});