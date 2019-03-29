/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.GoogleCodeSitemap.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.GoogleCodeSitemap',required:'Uize.Build.Util',builder:function(){return{description:'Google Code sitemap',urlMatcher:function(_a){return _a.pathname==this.builtUrl('sitemap-code.xml');},builderInputs:function(_a){return{template:this.memoryUrlFromBuiltUrl(_a.pathname)+'.jst'};},builder:function(_b){return this.readFile({path:_b.template})({modules:Uize.Build.Util.getJsModules(this.params)});}};}});