/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.SimpleDataHtmlPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.SimpleDataHtmlPages',required:'Uize.Url',builder:function(){var _a=/\.html\.simpledata$/;return{description:'HTML Pages Derived from .html.simpledata Files',urlMatcher:function(_b){var _c=_b.pathname;return(_b.fileType=='html'&&this.isBuiltUrl(_c)&&this.fileSystem.fileExists({path:this.sourceUrlFromBuiltUrl(_c)+'.simpledata'}));},builderInputs:function(_b){var _d=this.memoryUrlFromBuiltUrl(_b.pathname)+'.simpledata';this.buildFile(Uize.copy(this.params,{url:_d,pathPrefix:''}),Uize.nop);var _e=this.readFile({path:_d});return{jstTemplate:Uize.Url.toAbsolute(_d,_e.templatePath),simpledata:_d};},builder:function(_f){return this.readFile({path:_f.jstTemplate})(this.readFile({path:_f.simpledata}));}};}});