/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.InMemoryUrlDictionary.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.InMemoryUrlDictionary',required:['Uize.Url','Uize.Build.Util'],builder:function(){return{description:'In-memory URL dictionary for SimpleDoc pages',urlMatcher:function(_a){return _a.pathname==this.memoryUrl('url-dictionary');},builderInputs:function(_a){return{credits:this.memoryUrl('appendixes/credits.html.simpledata'),endorsements:this.memoryUrl('endorsements.html.simpledata')};},builder:function(_b){var _c=this,_d={};function _e(_f){for(var _g= -1,_h=_c.readFile({path:_b[_f]}).listings,_i=_h.length,_j;++_g<_i;){if((_j=_h[_g]).link)_d[_j.fullName]=_j.link;}}_e('credits');_e('endorsements');Uize.forEach(Uize.Build.Util.getJsModules(_c.params),function(_k){_d[_k]='/reference/'+_k+'.html';});var _l=/\.simple$/,_m='javascript-reference';_c.fileSystem.getFiles({path:_c.sourceUrl(_m),pathMatcher:_l,pathTransformer:function(_n){var _o=Uize.Url.from(_n).file.replace(_l,'');_d[_o]='/'+_m+'/'+_o+'.html';}});return _d;}};}});