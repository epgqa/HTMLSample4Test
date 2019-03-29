/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.Files.SimpleDocPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.Files.SimpleDocPages',required:'Uize.Build.Util',builder:function(d_a){'use strict';return d_a.subclass({staticMethods:{determineFilesToBuild:function(d_b){var d_c=this,d_d=d_b.sourcePath;var d_e=/\.simple$/;d_c.addFiles(d_c.fileSystem.getFiles({path:d_d,recursive:true,pathMatcher:d_e,pathTransformer:function(d_f){return d_f.replace(d_e,'.html')}}));d_c.addFiles(Uize.map(Uize.Build.Util.getJsModules(d_b).sort(),'"reference/" + value + ".html"'));}}});}});