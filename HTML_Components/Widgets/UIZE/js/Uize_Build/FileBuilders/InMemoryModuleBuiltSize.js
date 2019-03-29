/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.InMemoryModuleBuiltSize.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.InMemoryModuleBuiltSize',builder:function(){var _a=/\.js\.builtsize$/;return{description:'In-memory built size for module',urlMatcher:function(_b){var _c=_b.pathname;return this.isMemoryUrl(_c)&&_a.test(_c);},builderInputs:function(_b){return{builtModule:this.builtUrlFromMemoryUrl(_b.pathname).replace(_a,'.js')};},builder:function(_d){return this.readFile({path:_d.builtModule}).length;}};}});