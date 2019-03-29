/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.LatestNewsRssFeed.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.LatestNewsRssFeed',builder:function(){return{description:'Latest news RSS feed',urlMatcher:function(_a){return _a.pathname==this.builtUrl('latest-news.rss');},builderInputs:function(_a){return{newsItems:this.memoryUrl('news.index'),template:this.memoryUrlFromBuiltUrl(_a.pathname)+'.jst'};},builder:function(_b){return this.readFile({path:_b.template})({items:Uize.map(this.readFile({path:_b.newsItems}).slice(0,50),function(_c){return{title:_c.title.replace(/^\d{4}-\d{2}-\d{2}\s*-\s*/,''),date:_c.title.slice(0,10),link:'http://www.uize.com/'+_c.path,description:_c.description}})});}};}});