/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Buttons.Directional.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Buttons.Directional.Html',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('<a id="',this.nodeId(),'"><span class="',this.cssClass('arrowCenterPin'),'"><span class="',this.cssClass('arrow'),'"></span></span></a>\n');return output.join('');};_a.input={};return _a;}});