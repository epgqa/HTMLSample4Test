/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.Files.WidgetPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.Files.WidgetPages',required:'Uize.Build.Util',builder:function(d_a){'use strict';return d_a.subclass({staticMethods:{determineFilesToBuild:function(d_b){var d_c=this,d_d='widgets';Uize.forEach(Uize.Build.Util.readSimpleDataFile(d_b.sourcePath+'/'+d_d+'/widgets.simpledata').widgets,function(d_e){var d_f=d_d+'/'+d_e.title.toLowerCase();d_c.addFiles(d_f+'.html',d_f+'/gadget.xml',d_f+'/web.html',d_f+'/mobile.html');});}}});}});