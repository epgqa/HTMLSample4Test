/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.SimpleDocPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.SimpleDocPages',required:['Uize.Doc.Simple','Uize.Build.Util','Uize.Url'],builder:function(){return{description:'SimpleDoc pages',urlMatcher:function(_a){return(_a.fileType=='html'&&this.isBuiltUrl(_a.folderPath)&&this.fileExists({path:this.sourceUrlFromBuiltUrl(_a.folderPath)+_a.fileName+'.simple'}));},builderInputs:function(_a){var _b=_a.folderPath;return{simpleDoc:this.sourceUrlFromBuiltUrl(_b)+_a.fileName+'.simple',simpleDocTemplate:this.memoryUrlFromBuiltUrl(_b)+'~SIMPLE-DOC-TEMPLATE.html.jst',urlDictionary:this.memoryUrl('url-dictionary')};},builder:function(_c){var _d=_c.simpleDoc,_e=Uize.Doc.Simple.build({data:this.readFile({path:_d}),urlDictionary:this.readFile({path:_c.urlDictionary}),pathToRoot:Uize.Build.Util.getPathToRoot(_d.slice(this.params.sourcePath.length+1)),result:'full'});return this.processSimpleDoc(_e.metaData.title||Uize.Build.Util.getTitleFromFilename(Uize.Url.from(_d).file).replace(/(^|\s)[a-z]/g,function(_f){return _f.toUpperCase()}),_e,
_c.simpleDocTemplate);}};}});