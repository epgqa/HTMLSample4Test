/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.Files.JstDerivedPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.Files.JstDerivedPages',builder:function(c_a){'use strict';return c_a.subclass({staticMethods:{determineFilesToBuild:function(c_b){var c_c=c_b.sourcePath,c_d=/\.([\w\d\-]+)\.jst$/;this.addFiles(this.fileSystem.getFiles({path:c_b.sourcePath,recursive:true,pathMatcher:function(c_e){var c_f=c_e.match(c_d);return!!c_f&&c_f[1]!='js';},pathTransformer:function(c_e){return c_e.replace(c_d,'.$1');}}));}}});}});