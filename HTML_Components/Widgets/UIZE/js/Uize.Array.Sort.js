/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Array.Sort.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Array.Sort',builder:function(){'use strict';var _a=function(){},_b=Function;var _c=[],_d=_b('a,b','return a.v<b.v?-1:a.v>b.v?1:0'),_e=_b('a,b','return a.v<b.v?1:a.v>b.v?-1:0'),_f=_b('a,b','return a<b?-1:a>b?1:0'),_g=_b('a,b','return a<b?1:a>b?-1:0');_a.sortBy=function(_h,_i,_j){var _k=_h.length;if(_k>1){if(_i!=null){var _l;if(!Uize.isFunction(_i)){if(typeof _i=='number')_i='value ['+_i+']';_i=Uize.resolveTransformer(_i);};for(var _m=_c.length=_k;--_m>=0;){(_l=_c[_m]||(_c[_m]={})).v=_i(_l._n=_h[_l._m=_m],_m);}_c.sort(_j== -1?_e:_d);for(var _m=_k;--_m>=0;){if(_m!=(_l=_c[_m])._m)_h[_m]=_l._n;_l._n=_l.v=null;}}else{_h.sort(_j== -1?_g:_f);}}return _h;};return _a;}});