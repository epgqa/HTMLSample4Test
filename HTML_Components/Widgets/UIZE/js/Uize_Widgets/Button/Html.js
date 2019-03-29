/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Button.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Button.Html',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('<a id="',this.nodeId(),'">',input.text,'</a>\n');return output.join('');};_a.input={};return _a;}});