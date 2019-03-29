/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ColorSwatch.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ColorSwatch.Widget',superclass:'Uize.Widget.V2',required:['Uize.Color','Uize.Widgets.ColorSwatch.Html','Uize.Widgets.ColorSwatch.Css'],builder:function(d_a){'use strict';function d_b(){var d_c=this;if(d_c.isWired){d_c.setNodeStyle('',{backgroundColor:Uize.Color.to(d_c.d_d,'#hex')});}}return d_a.subclass({instanceMethods:{updateUi:d_b},stateProperties:{d_e:{name:'size',value:'medium'},d_d:{name:'value',onChange:d_b,value:'#000000'}},set:{html:Uize.Widgets.ColorSwatch.Html},staticProperties:{cssModule:Uize.Widgets.ColorSwatch.Css},stateToCssBindings:{size:'value'}});}});