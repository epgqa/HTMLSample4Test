/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.FileBuilders.InMemoryModulesTree.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.FileBuilders.InMemoryModulesTree',required:['Uize.Data.PathsTree','Uize.Build.Util'],builder:function(){return{description:'In-memory modules tree object',urlMatcher:function(_a){return _a.pathname==this.memoryUrl('modules-tree');},builder:function(){return Uize.Data.PathsTree.fromList(Uize.Build.Util.getJsModules(this.params),'.');}};}});