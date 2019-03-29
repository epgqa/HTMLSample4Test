/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.IndexPages.Appendixes.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.IndexPages.Appendixes',required:'UizeSite.Build.FileBuilders.IndexPages',builder:function(){return UizeSite.Build.FileBuilders.IndexPages.getIndexPageUrlHandler('Appendixes index page','appendixes','appendixes','appendixes',/(\.simple|\.html\.jst)$/);}});