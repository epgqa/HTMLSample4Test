/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.InMemoryExamplesInfoForSiteMap.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.InMemoryExamplesInfoForSiteMap',required:'Uize.Data.Matches',builder:function(){return{description:'In-memory examples-info-for-sitemap object',urlMatcher:function(_a){return _a.pathname==this.memoryUrl('examples-info-for-sitemap');},builderInputs:function(){return{examplesByKeyword:this.memoryUrl('examples-by-keyword')};},builder:function(_b){var _c=this.readFile({path:_b.examplesByKeyword});return{keywords:Uize.Data.Matches.values(Uize.keys(_c),'value && value.slice (0,4) != "Uize"').sort(),tools:Uize.map(_c.tool,'{title:value.title,path:value.path}')};}};}});