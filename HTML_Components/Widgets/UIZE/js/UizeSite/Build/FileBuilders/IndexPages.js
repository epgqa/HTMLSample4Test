/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.IndexPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.IndexPages',required:['UizeSite.Build.Util','Uize.Array.Sort'],builder:function(){function _a(_b,_c,_d,_e){return{description:'In-memory HTML files index for the '+_c+' folder',urlMatcher:function(_f){return _f.pathname==this.memoryUrl(_c+'.index');},builderInputs:function(_f){var _g=this;return Uize.map(Uize.isFunction(_b)?_b.call(_g):UizeSite.Build.Util.getIndexableFiles(_g.params.sourcePath,_b,_d),function(_h){return _g.memoryUrl(_c+'/'+(_d?_h.replace(_d,''):_h)+'.html.info');});},builder:function(_i){var _g=this;return Uize.Array.Sort.sortBy(Uize.map(_i,function(_j){return _g.readFile({path:_j})}),'value.title',_e);}};};return{getInMemoryHtmlFilesIndexHandler:_a,getIndexPageUrlHandler:function(_k,_l,_b,_c,_d){return[_a(_b,_c,_d),{description:_k,urlMatcher:function(_f){return _f.pathname==this.builtUrl(_l+'.html');},builderInputs:function(_f){return{template:this.memoryUrlFromBuiltUrl(_f.pathname)+'.jst',filesIndex:this.memoryUrl(_c+'.index')};},
builder:function(_i){return this.readFile({path:_i.template})({files:this.readFile({path:_i.filesIndex})});}}];}};}});