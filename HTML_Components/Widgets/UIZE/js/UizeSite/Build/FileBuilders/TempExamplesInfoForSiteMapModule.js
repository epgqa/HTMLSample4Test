/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.TempExamplesInfoForSiteMapModule.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.TempExamplesInfoForSiteMapModule',required:'Uize.Build.Util',builder:function(){var _a='UizeSite.ExamplesInfoForSiteMap';return{description:'Generated UizeSite.ExamplesInfoForSiteMap module under temp',urlMatcher:function(_b){return _b.pathname==this.tempUrl(this.getModuleUrl(_a));},builderInputs:function(){return{examplesInfoForSiteMap:this.memoryUrl('examples-info-for-sitemap')};},builder:function(_c){return Uize.Build.Util.dataAsModule(_a,this.readFile({path:_c.examplesInfoForSiteMap}));}};}});