/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.Files.IndexPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.Files.IndexPages',builder:function(d_a){'use strict';return d_a.subclass({staticMethods:{determineFilesToBuild:function(d_b){var d_c=this;d_c.addFiles('index.html','directory.html','sitemap-code.xml','appendixes/sotu.html');d_c.addFiles('appendixes.html','javascript-explainers.html','javascript-examples.html','javascript-examples-by-module.html','javascript-modules-index.html','javascript-reference.html','javascript-widgets.html','todo/modules.html');d_c.addFiles('latest-news.html','latest-news.rss');var d_d={};d_c.fileSystem.getFiles({path:d_b.sourcePath+'/news',pathMatcher:function(d_e){var d_f=d_e.match(/^(\d{4})-\d{2}-\d{2}-.+\.simple$/);if(d_f)d_d[d_f[1]]=true;}});d_c.addFiles(Uize.map(Uize.keys(d_d),'\'news-\' + value + \'.html\''));var d_g=d_b.memoryPath+'/examples-by-keyword';d_c.fileBuilder.buildFile(Uize.copyInto({url:d_g,pathPrefix:''},d_b));d_c.addFiles(Uize.map(Uize.keys(d_c.fileBuilder.get('adapter').readFile({path:d_g})),
'"javascript-" + value + "-examples.html"'));}}});}});