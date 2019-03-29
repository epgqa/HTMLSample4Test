/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.UnprocessedFiles.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.UnprocessedFiles',builder:function(){return{description:'Files that are unprocessed',urlMatcher:function(_a){return(this.isBuiltUrl(_a.folderPath)&&Uize.resolveMatcher(this.params.staticFilePathMatcher)(_a.pathname)&&this.fileExists({path:this.sourceUrlFromBuiltUrl(_a.pathname)}));},builderInputs:function(_a){return{sourcePath:this.sourceUrlFromBuiltUrl(_a.pathname)};}};}});