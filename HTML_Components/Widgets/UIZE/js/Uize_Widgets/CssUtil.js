/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.CssUtil.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.CssUtil',builder:function(){'use strict';var _a='#ffa200';return{box:{border:{color:'#ccc',width:1}},selectedValue:{color:'#fff',bgColor:_a},sizes:{tiny:{font:12,outer:23},small:{font:13,outer:28},medium:{font:15,outer:38},large:{font:21,outer:51}},pseudoStroke:function(_b){return('text-shadow:'+'-1px -1px 0 '+_b+','+'-1px 0 0 '+_b+','+'-1px 1px 0 '+_b+','+'0 -1px 0 '+_b+','+'0 1px 0 '+_b+','+'1px -1px 0 '+_b+','+'1px 0 0 '+_b+','+'1px 1px 0 '+_b+';');}};}});