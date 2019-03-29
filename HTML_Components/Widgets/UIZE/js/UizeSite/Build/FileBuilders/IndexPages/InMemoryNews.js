/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.IndexPages.InMemoryNews.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.IndexPages.InMemoryNews',required:'UizeSite.Build.FileBuilders.IndexPages',builder:function(){return UizeSite.Build.FileBuilders.IndexPages.getInMemoryHtmlFilesIndexHandler('news','news',/\.simple$/,-1);}});