/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Buttons.Directional.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Buttons.Directional.Widget',superclass:'Uize.Widgets.Button.Square.Widget',required:['Uize.Widgets.Buttons.Directional.Html','Uize.Widgets.Buttons.Directional.Css'],builder:function(f_a){'use strict';var f_b=[['upLeft','up','upRight'],['left','center','right'],['downLeft','down','downRight']];function f_c(){var f_d=this;f_d.set({f_e:f_b[f_d.f_f+1][f_d.f_g+1]});}var f_h=f_a.subclass({set:{html:Uize.Widgets.Buttons.Directional.Html},stateProperties:{f_g:{name:'directionX',value:0,onChange:f_c},f_f:{name:'directionY',value:0,onChange:f_c},f_e:'directionName'},staticProperties:{cssModule:Uize.Widgets.Buttons.Directional.Css,directionNames:f_b},stateToCssBindings:{directionName:'value'}});return f_h;}});