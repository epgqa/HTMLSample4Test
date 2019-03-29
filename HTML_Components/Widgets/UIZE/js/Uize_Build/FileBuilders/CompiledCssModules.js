/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.CompiledCssModules.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.CompiledCssModules',required:['Uize.Build.Util','Uize.Json'],builder:function(){return{description:'Compiled CSS modules, generated from built .css files',urlMatcher:function(_a){var _b=_a.pathname;return(_a.fileType=='js'&&this.isTempUrl(_b)&&this.fileExists({path:this.sourceUrlFromTempUrl(_b).replace(/\.js$/,'.csst')}));},builderInputs:function(_a){return{cssBuilt:this.builtUrlFromTempUrl(_a.pathname).replace(/\.js$/,'.css')};},builder:function(_c){var _d=_c.cssBuilt,_e=this.params,_f=Uize.Build.Util.moduleNameFromModulePath(_d.slice((_e.builtPath+'/'+_e.modulesFolder+'/').length).replace(/\.css$/i,''));return Uize.Build.Util.moduleAsText({name:_f,superclass:'Uize.Node.CssModule',builder:['function (_superclass) {','	\'use strict\';','','	return _superclass.subclass ({','		staticProperties:{','			css:function (_input) {','				'+'return '+Uize.Json.to(this.readFile({path:_d})).replace(/(url\s*\(\s*)([\'"]?)([^\'"\)]+)\2(\s*\))/g,function(_g,_h,_i,_j,_k){return(
_h+_i+(/^\w+:/.test(_j)?'':('\' + _input.pathToModules + \''+Uize.modulePathResolver(_f)+'/'))+_j+_i+_k);})+';','			}','		}','	});','}'].join('\n')});}};}});