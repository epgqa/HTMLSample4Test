/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.IndexPages.InMemoryHtmlFiles.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.IndexPages.InMemoryHtmlFiles',required:'UizeSite.Build.FileBuilders.IndexPages',builder:function(){return UizeSite.Build.FileBuilders.IndexPages.getInMemoryHtmlFilesIndexHandler('examples','examples',/\.html$/);}});