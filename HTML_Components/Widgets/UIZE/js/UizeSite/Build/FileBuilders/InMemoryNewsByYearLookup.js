/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.InMemoryNewsByYearLookup.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.InMemoryNewsByYearLookup',builder:function(){return{description:'News-by-year lookup',urlMatcher:function(_a){return _a.pathname==this.memoryUrl('news-by-year');},builderInputs:function(_a){return{filesIndex:this.memoryUrl('news.index')};},builder:function(_b){var _c=this.readFile({path:_b.filesIndex}),_d={'':_c};for(var _e= -1,_f=_c.length,_g;++_e<_f;){var _h=Uize.Url.from((_g=_c[_e]).path).file.slice(0,4);(_d[_h]||(_d[_h]=[])).push(_g);}return _d;}};}});