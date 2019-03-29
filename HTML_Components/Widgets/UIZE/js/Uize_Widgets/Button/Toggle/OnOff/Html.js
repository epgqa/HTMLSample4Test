/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Button.Toggle.OnOff.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Button.Toggle.OnOff.Html',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('<a id="',this.nodeId(),'">\n	<span id="',this.nodeId('text'),'"  class="',this.cssClass('text'),'">\n		',input.text,'\n	</span>\n	<span class="',this.cssClass('onIndicator'),'"></span>\n</a>\n\n');return output.join('');};_a.input={};return _a;}});