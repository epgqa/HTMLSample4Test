/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.CompiledCss.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.CompiledCss',required:['Uize.Url','Uize.Build.Util','Uize.Template'],builder:function(){return{description:'Compiled CSS files, generated from .csst files',urlMatcher:function(_a){var _b=_a.pathname;return(_a.fileType=='css'&&this.isBuiltUrl(_b)&&this.fileExists({path:this.sourceUrlFromBuiltUrl(_b)+'t'}));},builderInputs:function(_a){return{cssSource:this.sourceUrlFromBuiltUrl(_a.pathname)+'t'};},builder:function(_c){var _d=_c.cssSource,_e=this.params,_f=Uize.Build.Util.moduleNameFromModulePath(_d.slice((_e.sourcePath+'/'+_e.modulesFolder+'/').length),true).replace(/\./g,'_'),_g=Uize.Template.compile(this.readFile({path:_d}).replace(/`([^`]*)`/g,function(_h,_i){return _f+(_i&&'-')+_i}),{result:'full'});Uize.require(_g.required);return _g.templateFunction();}};}});