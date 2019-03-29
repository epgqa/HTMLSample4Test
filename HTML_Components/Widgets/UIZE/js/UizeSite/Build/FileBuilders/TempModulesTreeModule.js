/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.TempModulesTreeModule.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.TempModulesTreeModule',required:'Uize.Build.Util',builder:function(){var _a='UizeSite.ModulesTree';return{description:'Generated UizeSite.ModulesTree module under temp',urlMatcher:function(_b){return _b.pathname==this.tempUrl(this.getModuleUrl(_a));},builderInputs:function(){return{modulesTree:this.memoryUrl('modules-tree')};},builder:function(_c){return Uize.Build.Util.dataAsModule(_a,this.readFile({path:_c.modulesTree}));}};}});