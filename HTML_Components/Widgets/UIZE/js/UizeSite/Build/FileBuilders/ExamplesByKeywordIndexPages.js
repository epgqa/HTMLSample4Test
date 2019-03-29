/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.ExamplesByKeywordIndexPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.ExamplesByKeywordIndexPages',builder:function(){var _a=/^javascript-((.+?)-)?examples$/;return{description:'Examples-by-keyword index page',urlMatcher:function(_b){return(_b.fileType=='html'&&this.isBuiltUrl(_b.pathname)&&_a.test(_b.fileName));},builderInputs:function(_b){return{template:this.memoryUrl('javascript-examples.html.jst'),examplesByKeyword:this.memoryUrl('examples-by-keyword')};},builder:function(_c,_b){var _d=_b.fileName.match(_a)[2]||'';return this.readFile({path:_c.template})({keyword:_d,files:this.readFile({path:_c.examplesByKeyword})[_d]||[]});}};}});