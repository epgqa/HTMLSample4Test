/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.Homepage.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.Homepage',builder:function(){return{description:'Homepage',urlMatcher:function(_a){return _a.pathname==this.builtUrl('index.html');},builderInputs:function(_a){return{template:this.memoryUrlFromBuiltUrl(_a.pathname)+'.jst',newsItems:this.memoryUrl('news.index')};},builder:function(_b){return this.readFile({path:_b.template})({latestNews:this.readFile({path:_b.newsItems}).slice(0,10)});}};}});