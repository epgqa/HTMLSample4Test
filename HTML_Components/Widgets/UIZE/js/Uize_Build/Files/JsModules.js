/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.Files.JsModules.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.Files.JsModules',required:['Uize.Build.Util','Uize.String','Uize.Url'],builder:function(c_a){'use strict';return c_a.subclass({staticMethods:{determineFilesToBuild:function(c_b){var c_c=this.fileSystem,c_d=c_b.modulesFolder,c_e=c_b.sourcePath,c_f=c_b.uizePath,c_g=c_e+'/'+c_d,c_h=c_f+'/js',c_i=c_h==c_g,c_j=Uize.Build.Util.jsModuleExtensionRegExp;this.addFiles(c_c.getFiles({path:c_e,recursive:true,pathMatcher:c_j,pathTransformer:function(c_k){return c_k.replace(c_j,'.js')}}));c_i||this.addFiles(c_c.getFiles({path:c_h,recursive:true,pathMatcher:function(c_k){return c_j.test(c_k)&&Uize.String.startsWith(c_k,'Uize.');},pathTransformer:function(c_k){return c_d+'/'+c_k.replace(c_j,'.js');}}));function c_l(c_d,c_m){var c_n=Uize.Build.Util.moduleNameFromModulePath;return function(c_m){return(c_d+'/'+Uize.modulePathResolver(c_n(c_m))+'.js');}}this.addFiles(c_c.getFolders({path:c_g,recursive:true,pathMatcher:function(c_k){return true;},pathTransformer:c_l(c_d)}));c_i||this.addFiles(
c_c.getFolders({path:c_h,recursive:true,pathMatcher:function(c_k){return true;},pathTransformer:c_l('js')}));}}});}});