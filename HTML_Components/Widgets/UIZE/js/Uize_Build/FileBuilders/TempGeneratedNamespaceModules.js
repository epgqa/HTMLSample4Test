/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.TempGeneratedNamespaceModules.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.TempGeneratedNamespaceModules',required:'Uize.Build.Util',builder:function(){var _a=/\.js$/;return{description:'Generated JavaScript namespace modules under temp',urlMatcher:function(_b){var _c=_b.pathname;return(_b.fileType=='js'&&this.isTempUrl(_c)&&this.fileSystem.folderExists({path:this.sourceUrlFromTempUrl(_c).replace(_a,'')}));},builderInputs:function(_b){return{sourceFolderPath:this.sourceUrlFromTempUrl(_b.pathname).replace(_a,'')};},builder:function(_d){var _e=this.params;return Uize.Build.Util.moduleAsText({name:Uize.Build.Util.moduleNameFromModulePath(_d.sourceFolderPath.slice((_e.sourcePath+'/'+_e.modulesFolder+'/').length))});}};}});