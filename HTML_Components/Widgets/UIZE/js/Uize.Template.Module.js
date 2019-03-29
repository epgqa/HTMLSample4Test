/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Template.Module.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Template.Module',required:['Uize.Template','Uize.String.Lines','Uize.Json','Uize.Build.Util'],builder:function(){'use strict';var _a=function(){};_a.defineTemplateModule=function(_b,_c){var _d=Uize.Template.compile(_c,{result:'full'});Uize.module({name:_b,required:_d.required,builder:function(){var _a=function(){};_a.process=Function('input',_d.code);_a.input=_d.input;return _a;}});};_a.buildTemplateModuleText=function(_b,_c){var _d=Uize.Template.compile(_c,{result:'full'});return Uize.Build.Util.moduleAsText({name:_b,required:_d.required,builder:['function () {','	\'use strict\';','','	var _package = function () {};','','	/*** Public Static Methods ***/','		_package.process = function (input) {','			'+Uize.String.Lines.indent(Uize.String.Lines.trimRight(_d.code),4,'\t',false),'		};','','	/*** Public Static Properties ***/','		_package.input = '+Uize.String.Lines.indent(Uize.Json.to(_d.input),3,'\t',false)+';','','	return _package;','}'].join('\n')});};return _a;}});