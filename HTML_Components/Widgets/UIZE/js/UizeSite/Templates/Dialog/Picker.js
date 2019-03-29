/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.Dialog.Picker.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.Dialog.Picker',required:['UizeSite.Templates.Dialog','Uize.Templates.Calendar'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('\n',UizeSite.Templates.Dialog.process({idPrefix:input.idPrefix,title:input.title,contents:input.contents,topLeftButtons:'<a id="'+input.idPrefix+'_keepOpen" class="dialogKeepOpenButton" title="Toggle Keep Open"></a>',dialogClass:'dialogPalette'}),'\n');return output.join('');};_a.input={idPrefix:'string',title:'string',contents:'string'};return _a;}});