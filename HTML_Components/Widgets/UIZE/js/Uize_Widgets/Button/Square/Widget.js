/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Button.Square.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Button.Square.Widget',superclass:'Uize.Widgets.Button.Widget',required:['Uize.Widgets.Button.Square.Html','Uize.Widgets.Button.Square.Css'],builder:function(e_a){'use strict';var e_b=[['upLeft','up','upRight'],['left','','right'],['downLeft','down','downRight']];function e_c(){var e_d=this;e_d.set({e_e:e_b[e_d.e_f+1][e_d.e_g+1]});}var e_h=e_a.subclass({set:{html:Uize.Widgets.Button.Square.Html},stateProperties:{e_g:{name:'directionX',value:0,onChange:e_c},e_f:{name:'directionY',value:0,onChange:e_c},e_e:'directionName'},staticProperties:{cssModule:Uize.Widgets.Button.Square.Css,directionNames:e_b},stateToCssBindings:{directionName:'value'}});return e_h;}});