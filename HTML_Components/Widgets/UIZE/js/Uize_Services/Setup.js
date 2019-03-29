/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Services.Setup.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Services.Setup',required:['Uize.Util.Needs','Uize.Data.Matches'],builder:function(){'use strict';var _a=function(){};var _b=Uize.Util.Needs(),_c={},_d={},_e;function _f(_g){return _c[_g]==_d;}_a.provideServiceSetup=function(_h,_i,_j){if(!_e){_e=Uize.require;Uize.require=function(_k,_l){if(typeof _k=='string')_k=[_k];_e(_k,function(){var _m=arguments;_b.need(Uize.Data.Matches.values(_k,_f),function(){_l&&_l.apply(0,_m)});});};};_c[_h]=_d;_b.provide(_h,function(_n){_e([_h,_i],function(_o,_p){var _q=_o.singleton();_q.set('adapter',_p.singleton());function _r(){_n(_q)}_j?_j(_q,_r):_q.init({},_r);});});};return _a;}});