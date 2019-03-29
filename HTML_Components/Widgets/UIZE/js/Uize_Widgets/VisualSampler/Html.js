/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.VisualSampler.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.VisualSampler.Html',required:['Uize.Widgets.BoxWithHeading.Html'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];var _b=this;output.push(Uize.Widgets.BoxWithHeading.Html.process.call(_b,Uize.copy(input,{heading:'WIDGET CLASS: '+_b.Class.widgetClass.moduleName,body:_b.childHtml({name:'samples'})})),'\n');return output.join('');};_a.input={};return _a;}});