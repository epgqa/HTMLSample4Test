/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.JavaScriptExamplesByModule.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.JavaScriptExamplesByModule',builder:function(){var _a='javascript-examples-by-module.html';return{description:'JavaScript examples by module index page',urlMatcher:function(_b){return _b.pathname==this.builtUrl(_a);},builderInputs:function(){return{template:this.memoryUrl(_a+'.jst'),examplesIndex:this.memoryUrl('examples.index')};},builder:function(_c){return this.readFile({path:_c.template})({examples:this.readFile({path:_c.examplesIndex})});}};}});