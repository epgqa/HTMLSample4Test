/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.Files.SimpleDataPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.Files.SimpleDataPages',builder:function(d_a){'use strict';return d_a.subclass({staticMethods:{determineFilesToBuild:function(d_b){var d_c=this.fileSystem,d_d=/\.simpledata$/,d_e=d_b.sourcePath;this.addFiles(d_c.getFiles({path:d_e,recursive:true,pathMatcher:function(d_f){return(d_d.test(d_f)&&/\.[^\.\\\/]+$/.test(d_f.replace(d_d,''))&&d_c.fileExists({path:d_e+'/'+d_f.replace(d_d,'.jst')}));},pathTransformer:function(d_f){return d_f.replace(d_d,'')}}));}}});}});