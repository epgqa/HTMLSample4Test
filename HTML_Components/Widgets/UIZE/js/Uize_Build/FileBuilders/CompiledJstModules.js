/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.CompiledJstModules.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.CompiledJstModules',required:['Uize.Template.Module','Uize.Build.Util'],builder:function(){return{description:'Compiled JST modules, generated from .js.jst files',urlMatcher:function(_a){var _b=_a.pathname;return(_a.fileType=='js'&&this.isTempUrl(_b)&&this.fileExists({path:this.sourceUrlFromTempUrl(_b)+'.jst'}));},builderInputs:function(_a){return{jstSource:this.sourceUrlFromTempUrl(_a.pathname)+'.jst'};},builder:function(_c,_a){var _d=_c.jstSource,_e=this.params;return Uize.Template.Module.buildTemplateModuleText(Uize.Build.Util.moduleNameFromModulePath(_a.pathname.slice((_e.tempPath+'/'+_e.modulesFolder+'/').length),true),this.readFile({path:_d}));}};}});