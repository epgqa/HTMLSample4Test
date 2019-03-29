/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.TempExamplesModule.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.TempExamplesModule',required:'Uize.Build.Util',builder:function(){var _a='UizeSite.Examples';return{description:'Generated UizeSite.Examples module under temp',urlMatcher:function(_b){return _b.pathname==this.tempUrl(this.getModuleUrl(_a));},builderInputs:function(){return{filesIndex:this.memoryUrl('examples.index')};},builder:function(_c){return Uize.Build.Util.dataAsModule(_a,this.readFile({path:_c.filesIndex}));}};}});