/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.DelvePageWriter.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.DelvePageWriter',required:['Uize.Node','UizeSite.Templates.DelvePageHtml'],builder:function(){'use strict';var _a=function(){};_a.initialize=function(){Uize.Node.setStyle(document.body,{margin:0});var _b=UizeSite.Templates.DelvePageHtml.process({pathToResources:Uize.pathToResources}),_c='javascript:\''+encodeURIComponent(_b.replace(/'/g,'\\\'').replace(/\r|\n|\r\n/g,''))+'\'';Uize.Node.injectHtml(document.body,'<iframe src="'+_c+'" frameborder="0" style="width:100%; height:100%; border:0;"></iframe>');};return _a;}});