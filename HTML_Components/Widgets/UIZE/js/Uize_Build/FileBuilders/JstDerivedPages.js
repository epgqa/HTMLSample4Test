/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.JstDerivedPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.JstDerivedPages',builder:function(){return{description:'Pages derived from JST template files',urlMatcher:function(_a){var _b=_a.pathname;return(this.isBuiltUrl(_b)&&this.fileExists({path:this.sourceUrlFromBuiltUrl(_b)+'.jst'}));},builderInputs:function(_a){return{jstTemplate:this.memoryUrlFromBuiltUrl(_a.pathname)+'.jst'};},builder:function(_c){return this.readFile({path:_c.jstTemplate})();}};}});