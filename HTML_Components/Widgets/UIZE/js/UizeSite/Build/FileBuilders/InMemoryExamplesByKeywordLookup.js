/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.InMemoryExamplesByKeywordLookup.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.InMemoryExamplesByKeywordLookup',builder:function(){return{description:'Examples-by-keyword lookup',urlMatcher:function(_a){return _a.pathname==this.memoryUrl('examples-by-keyword');},builderInputs:function(_a){return{filesIndex:this.memoryUrl('examples.index')};},builder:function(_b){var _c=this.readFile({path:_b.filesIndex}),_d={'':_c};for(var _e= -1,_f=_c.length,_g,_h,_i;++_e<_f;){if(_i=(_g=_c[_e]).keywords){for(var _j= -1,_h=_i.split(' '),_k=_h.length,_l;++_j<_k;)(_d[_l=_h[_j]]||(_d[_l]=[])).push(_g);}}return _d;}};}});