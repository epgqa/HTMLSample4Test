/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.Files.SourceCodePages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.Files.SourceCodePages',required:['Uize.Build.Util','UizeSite.Build.Util'],builder:function(d_a){'use strict';return d_a.subclass({staticMethods:{determineFilesToBuild:function(d_b){var d_c=this,d_d=d_b.sourcePath;d_c.addFiles(Uize.map(Uize.Build.Util.getJsModules(d_b).sort(),'"reference/source-code/" + value + ".html"'));d_c.addFiles(Uize.map(UizeSite.Build.Util.getIndexableFiles(d_d,'examples',/\.html$/),'"examples/source-code/" + value'));}}});}});