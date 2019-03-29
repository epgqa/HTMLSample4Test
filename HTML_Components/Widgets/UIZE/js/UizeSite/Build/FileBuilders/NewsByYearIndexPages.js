/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.NewsByYearIndexPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.NewsByYearIndexPages',builder:function(){var _a=/^(news-(\d{4})|latest-news)$/;return{description:'News-by-year index page',urlMatcher:function(_b){return(_b.fileType=='html'&&this.isBuiltUrl(_b.pathname)&&_a.test(_b.fileName));},builderInputs:function(_b){return{template:this.memoryUrl('news.html.jst'),newsByYear:this.memoryUrl('news-by-year')};},builder:function(_c,_b){var _d=_b.fileName.match(_a)[2]||'',_e=this.readFile({path:_c.newsByYear})[_d]||[];return this.readFile({path:_c.template})({year:_d,files:_d?_e:_e.slice(0,50)});}};}});