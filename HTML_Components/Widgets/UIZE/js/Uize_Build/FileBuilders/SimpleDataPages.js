/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.SimpleDataPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.SimpleDataPages',required:'Uize.Data.Simple',builder:function(){return{description:'SimpleData pages',urlMatcher:function(_a){var _b=_a.pathname;return(this.isBuiltUrl(_b)&&this.fileExists({path:this.sourceUrlFromBuiltUrl(_b)+'.jst'})&&this.fileExists({path:this.sourceUrlFromBuiltUrl(_b)+'.simpledata'}));},builderInputs:function(_a){var _b=_a.pathname;return{jstTemplate:this.memoryUrlFromBuiltUrl(_b)+'.jst',simpleData:this.sourceUrlFromBuiltUrl(_b)+'.simpledata'};},builder:function(_c){return this.readFile({path:_c.jstTemplate})(Uize.Data.Simple.parse({simple:this.readFile({path:_c.simpleData}),collapseChildren:true}));}};}});