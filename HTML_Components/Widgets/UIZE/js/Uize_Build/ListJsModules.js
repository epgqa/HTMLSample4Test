/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.ListJsModules.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.ListJsModules',required:['Uize.Services.FileSystem','Uize.Build.Util'],builder:function(){'use strict';return{perform:function(_a){var _b=Uize.Services.FileSystem.singleton(),_c=Uize.Build.Util.jsModuleExtensionRegExp;_b.writeFile({path:'logs/all-js-modules.log',contents:_b.getFiles({path:_a.sourcePath,recursive:true,pathMatcher:_c,pathTransformer:function(_d){return _d.replace(_c,'.js')}}).join('\n')});}};}});