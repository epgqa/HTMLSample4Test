/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.ModuleSourceCodePages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.ModuleSourceCodePages',required:['Uize.Url','UizeSite.Build.Util'],builder:function(){var _a='/reference/source-code/',_b='.js',_c='.js.jst',_d='.csst';return{description:'Module source code pages',urlMatcher:function(_e){return(_e.fileType=='html'&&_e.folderPath==this.builtUrl(_a));},builderInputs:function(_e){var _f=this,_g=_f.getModuleUrl(_e.fileName,false),_h=_f.sourceUrl(_g);return{sourceCode:_f.fileExists({path:_h+_c})?_h+_c:_f.fileExists({path:_h+_d})?_h+_d:_f.tempUrl(_g)+_b,sourceCodeTemplate:this.memoryUrl(_a+'~SOURCE-CODE-TEMPLATE.html.jst')};},builder:function(_i,_e){var _j=_i.sourceCode,_k=this.params;return this.readFile({path:_i.sourceCodeTemplate})({moduleName:_e.fileName,sourcePath:_j.slice((_k.sourcePath+'/'+_k.modulesFolder+'/').length),body:this.readFile({path:_j})});}};}});