/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.SlideShow.Basic.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.SlideShow.Basic',required:['UizeSite.Templates.SlideShow'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];function viewHtml(){var output=[];output.push('\n<img id="',input.idPrefix,'-slide_image" width="',input.width,'" height="',input.height,'" src="../images/blank.gif" alt=""/>');return output.join('');}output.push('\n',UizeSite.Templates.SlideShow.process({idPrefix:input.idPrefix,viewHtml:viewHtml()}),'\n');return output.join('');};_a.input={idPrefix:'string',width:'number',height:'number'};return _a;}});