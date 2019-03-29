/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.IndexPages.JavaScriptModules.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.IndexPages.JavaScriptModules',required:['UizeSite.Build.FileBuilders.IndexPages','Uize.Build.Util'],builder:function(){return UizeSite.Build.FileBuilders.IndexPages.getIndexPageUrlHandler('JavaScript modules index page','javascript-modules-index',function(){return Uize.Build.Util.getJsModules(this.params)},'reference');}});