/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.Dialog.Picker.Date.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.Dialog.Picker.Date',required:['UizeSite.Templates.Dialog.Picker','Uize.Templates.Calendar'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('\n',UizeSite.Templates.Dialog.Picker.process({idPrefix:input.idPrefix,title:input.title,contents:Uize.Templates.Calendar.process({idPrefix:input.idPrefix+'_value'})}),'\n');return output.join('');};_a.input={idPrefix:'string',title:'string'};return _a;}});