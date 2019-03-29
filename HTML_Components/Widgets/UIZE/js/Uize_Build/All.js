/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.All.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.All',required:'Uize.Build.Util',builder:function(){'use strict';var _a=function(){};_a.perform=function(_b){var _c=Uize.now(),_d=_b.buildSequence,_e;Uize.require(_d,function(){Uize.forEach(_d,function(_f){Uize.getModuleByName(_f).perform(Uize.copy(_b,{logFilePath:'logs/'+_f+'.log'}));});if(_b.test=='true')_e=Uize.Build.Util.runScripts(_b.testSequence);_b.silent=='true'||alert(_e?('BUILD FAILED IN THE FOLLOWING SCRIPT:\n\n'+_e.script):'BUILD ALL COMPLETE!!! (duration: '+Math.round((Uize.now()-_c)/1000)+'s)');});};return _a;}});