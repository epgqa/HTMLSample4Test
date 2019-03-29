/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.SourceFiles.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.SourceFiles',builder:function(){return{description:'Short-circuit handling for source files',urlMatcher:function(_a){return this.isSourceUrl(_a.folderPath)}};}});