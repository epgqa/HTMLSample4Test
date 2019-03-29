/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.DirectoryPage.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.DirectoryPage',required:'UizeSite.SiteMap',builder:function(){return{description:'Directory page',urlMatcher:function(_a){return _a.pathname==this.builtUrl('directory.html');},builderInputs:function(_a){return{modulesTree:this.memoryUrl('modules-tree'),examplesInfoForSiteMap:this.memoryUrl('examples-info-for-sitemap'),template:this.memoryUrlFromBuiltUrl(_a.pathname)+'.jst'};},builder:function(_b){return this.readFile({path:_b.template})({siteMap:UizeSite.SiteMap({modulesTree:this.readFile({path:_b.modulesTree}),examplesInfo:this.readFile({path:_b.examplesInfoForSiteMap})})});}};}});