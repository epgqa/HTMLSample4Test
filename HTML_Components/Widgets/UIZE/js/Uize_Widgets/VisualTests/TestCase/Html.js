/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.VisualTests.TestCase.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.VisualTests.TestCase.Html',required:['Uize.Widgets.BoxWithHeading.Html'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push(Uize.Widgets.BoxWithHeading.Html.process.call(this,Uize.copy(input,{body:this.childHtml({name:'widget'})})),'\n');return output.join('');};_a.input={};return _a;}});