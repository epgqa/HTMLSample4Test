/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.InMemoryHtmlInfo.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.InMemoryHtmlInfo',required:'Uize.Build.Util',builder:function(){var _a=/\.html\.info$/;return{description:'In-memory HTML page info object',urlMatcher:function(_b){var _c=_b.pathname;return this.isMemoryUrl(_c)&&_a.test(_c);},builderInputs:function(_b){return{htmlFile:this.builtUrlFromMemoryUrl(_b.pathname).replace(_a,'.html')};},builder:function(_d){var _e=Uize.Build.Util.getHtmlFileInfo(_d.htmlFile,function(_f){return _f.match(/^\s*(.*?)\s*\|/)[1]});_e.path=_e.path.slice(this.params.builtPath.length+1);return _e;}};}});