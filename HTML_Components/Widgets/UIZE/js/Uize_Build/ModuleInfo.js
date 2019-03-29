/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.ModuleInfo.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.ModuleInfo',required:'Uize.Services.FileSystem',builder:function(){'use strict';var _a=function(){},_b=false,_c={},_d=Uize.forEach;var _e=Uize.Services.FileSystem.singleton();_a.getDefinitionFromCode=Uize.quarantine(function(_f){var _g,Uize={module:function(_h){_g=_h}};eval(_f);return _g;});_a.getDefinition=function(_i){var _h={name:_i};if(_i!='Uize'){try{Uize.moduleLoader(_i,function(_j){_h=_a.getDefinitionFromCode(_j)});}catch(_k){}}return _h;};var _l=_a.getDirectDependencies=function(_i){var _h=_a.getDefinition(_i);return _h?Uize.resolveModuleDefinition(_h).required:[];};_a.traceDependencies=function(_m,_n){var _o={},_p=[];_d(_n,function(_q){_o[_q]=_c});function _r(_m){_d(_m.sort(),function(_i){if(_o[_i]!=_c){_o[_i]=_c;_r(_l(_i));_p.push(_i);}});}_r(['Uize'].concat(typeof _m=='string'?[_m]:_m));return _p;};return _a;}});