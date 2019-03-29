/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.InMemoryCompiledJstTemplates.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.InMemoryCompiledJstTemplates',required:'Uize.Template',builder:function(){return{description:'In-memory compiled JST templates',urlMatcher:function(_a){return this.isMemoryUrl(_a.pathname)&&_a.fileType=='jst';},builderInputs:function(_a){return{source:this.sourceUrlFromMemoryUrl(_a.pathname)};},builder:function(_b){var _c=Uize.Template.compile(this.readFile({path:_b.source}),{result:'full'});Uize.require(_c.required);return _c.templateFunction;}};}});