/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.ExampleSourceCodePages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.ExampleSourceCodePages',required:'Uize.Url',builder:function(){var _a='/examples/source-code/';return{description:'Example source code pages',urlMatcher:function(_b){return(_b.folderPath==this.builtUrl(_a)&&this.fileExists({path:this.sourceUrl('examples/'+_b.file)}));},builderInputs:function(_b){return{sourceCode:this.sourceUrl('examples/'+_b.file),sourceCodeTemplate:this.memoryUrl(_a+'~SOURCE-CODE-TEMPLATE.html.jst')};},builder:function(_c){var _d=_c.sourceCode,_e=Uize.Url.from(_d).file,_f=this.readFile({path:_d});return this.readFile({path:_c.sourceCodeTemplate})({sourceFilename:_e,title:_f.match(/<title>(.+?)\s*\|\s*JavaScript\s+(?:Tools|Examples)\s*(\|.*?)?<\/title>/)[1],body:_f});}};}});