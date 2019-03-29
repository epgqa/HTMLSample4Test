/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.RunUnitTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.RunUnitTests',required:['Uize.Test','Uize.Build.Util','Uize.Build.ModuleInfo','Uize.Data.Matches'],builder:function(){'use strict';var _a=function(){};_a.perform=function(_b){var _c=/\.library$/i,_d=Uize.Data.Matches.values(Uize.Build.Util.getJsModules(_b),function(_e){return!_c.test(_e);}),_f=Uize.lookup(_d),_g,_h=/^[a-zA-Z_\$][a-zA-Z0-9_\$]*\.Test($|\.)/,_i=Uize.Build.ModuleInfo.traceDependencies(Uize.Data.Matches.values(_d,function(_e){return!_h.test(_e);})),_j=Uize.Test.declare({title:'Unit Tests Suite',test:Uize.map(_i,function(_e){return(_f[_g=Uize.Build.Util.getTestModuleName(_e)]?Uize.Test.testModuleTest(_g):Uize.Test.requiredModulesTest(_e));})});Uize.Build.Util.runUnitTests(_j,_b.silent=='true',_b.logFilePath);};return _a;}});