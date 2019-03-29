/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Calendar.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Calendar.Widget',superclass:'Uize.Widget.Calendar',required:['Uize.Widgets.Button.Widget','Uize.Widgets.Calendar.Html','Uize.Widgets.Calendar.Css'],builder:function(e_a){'use strict';var e_b=e_a.subclass({set:{dayNameLength:2,html:Uize.Widgets.Calendar.Html},stateProperties:{e_c:{name:'size',value:'medium'}},staticProperties:{cssModule:Uize.Widgets.Calendar.Css,buttonWidgetClass:Uize.Widgets.Button.Widget,useV2CssClasses:true},stateToCssBindings:{size:'value'}});return e_b;}});