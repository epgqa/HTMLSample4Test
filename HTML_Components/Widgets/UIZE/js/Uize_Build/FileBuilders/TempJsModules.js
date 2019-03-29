/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.TempJsModules.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.TempJsModules',required:'Uize.Build.Util',builder:function(){return{description:'Regular JavaScript modules under temp',urlMatcher:function(_a){var _b=_a.pathname;return(_a.fileType=='js'&&this.isTempUrl(_b)&&this.fileExists({path:this.sourceUrlFromTempUrl(_b)}));},builderInputs:function(_a){return{sourceJs:this.sourceUrlFromTempUrl(_a.pathname)};}};}});