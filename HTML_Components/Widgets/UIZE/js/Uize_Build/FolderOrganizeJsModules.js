/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FolderOrganizeJsModules.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FolderOrganizeJsModules',required:['Uize.Services.FileSystem','Uize.Build.Util','Uize.String'],builder:function(){'use strict';return{perform:function(_a){var _b=_a.sourcePath+'/'+_a.modulesFolder,_c=Uize.Services.FileSystem.singleton(),_d=Uize.Build.Util.jsModuleExtensionRegExp,_e=_a.namespace+'.';_c.getFiles({path:_b,pathMatcher:function(_f){return _d.test(_f)&&Uize.String.startsWith(_f,_e);},pathTransformer:function(_f){_c.copyFile({path:_b+'/'+_f,targetPath:_b+'/'+_f.replace(_d,'').replace(/\./g,'/')+_f.match(_d)[1]});_c.deleteFile({path:_b+'/'+_f});}});}};}});