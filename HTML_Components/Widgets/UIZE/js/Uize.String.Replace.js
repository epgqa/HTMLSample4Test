/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.String.Replace.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.String.Replace',builder:function(){'use strict';var _a=function(){};_a.replacerByLookup=function(_b){var _c=[],_d=[];Uize.forEach(Uize.keys(_b),function(_e){if(_e)(_e.length>1?_c:_d).push(Uize.escapeRegExpLiteral(_e));});_d.length&&_c.unshift('['+_d.join('')+']');var _f=new RegExp(_c.join('|'),'g');return function(_g){return(_g+='')&&_g.replace(_f,function(_h){return _b[_h]});}};_a.replaceByLookup=function(_i,_b){return _a.replacerByLookup(_b)(_i);};return _a;}});