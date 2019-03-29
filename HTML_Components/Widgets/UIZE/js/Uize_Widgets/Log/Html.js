/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Log.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Log.Html',required:['Uize.Widgets.BoxWithHeading.Html'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];var _b=this;function heading(){var output=[];output.push('<span>',input.title,'</span>\n',_b.childHtml({name:'clear',size:'tiny',text:'clear',extraClasses:_b.cssClass('clearButton')}),'\n');return output.join('');}function body(){var output=[];output.push('<div id="',_b.nodeId('messages'),'" class="',_b.cssClass('messages'),'"></div>');return output.join('');}output.push(Uize.Widgets.BoxWithHeading.Html.process.call(_b,Uize.copy(input,{heading:heading(),body:body()})),'\n');return output.join('');};_a.input={title:'string'};return _a;}});