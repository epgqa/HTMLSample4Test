/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.SlideShow.Wipes.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.SlideShow.Wipes',required:['UizeSite.Templates.SlideShow'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];function viewHtml(){var output=[];output.push('\n<div id="',input.idPrefix,'_slideImage" style="position:relative; left:0px; top:0px; width:',input.width,'px; height:',input.height,'px; background:#000;">');return output.join('');}output.push('\n',UizeSite.Templates.SlideShow.process({idPrefix:input.idPrefix,viewHtml:viewHtml()}),'\n');return output.join('');};_a.input={idPrefix:'string',width:'number',height:'number'};return _a;}});