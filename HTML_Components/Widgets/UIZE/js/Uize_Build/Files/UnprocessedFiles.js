/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.Files.UnprocessedFiles.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.Files.UnprocessedFiles',builder:function(c_a){'use strict';return c_a.subclass({staticMethods:{determineFilesToBuild:function(c_b){var c_c=c_b.sourcePath,c_d=c_b.uizePath,c_e=c_b.staticFilePathMatcher;this.addFiles(this.fileSystem.getFiles({path:c_b.sourcePath,recursive:true,pathMatcher:c_e}));if(c_c!=c_d)this.addFiles(this.fileSystem.getFiles({path:c_d+'/js',recursive:true,pathMatcher:c_e,pathTransformer:'"'+c_b.modulesFolder+'/" + value'}));}}});}});