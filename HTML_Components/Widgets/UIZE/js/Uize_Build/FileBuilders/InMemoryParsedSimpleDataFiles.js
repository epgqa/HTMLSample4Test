/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.InMemoryParsedSimpleDataFiles.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.InMemoryParsedSimpleDataFiles',required:'Uize.Data.Simple',builder:function(){return{description:'In-memory parsed SimpleData files',urlMatcher:function(_a){return this.isMemoryUrl(_a.pathname)&&_a.fileType=='simpledata';},builderInputs:function(_a){return{source:this.sourceUrlFromMemoryUrl(_a.pathname)};},builder:function(_b){return Uize.Data.Simple.parse({simple:this.readFile({path:_b.source}),collapseChildren:true});}};}});