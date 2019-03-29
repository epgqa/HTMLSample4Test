/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Button.Toggle.OnOff.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Button.Toggle.OnOff.Widget',superclass:'Uize.Widgets.Button.Widget',required:['Uize.Widgets.Button.Toggle.OnOff.Html','Uize.Widgets.Button.Toggle.OnOff.Css'],builder:function(e_a){'use strict';var e_b=e_a.subclass({alphastructor:function(){var e_c=this;e_c.onChange('selected',function(e_d){e_c.set({text:e_d?'On':'Off'})});},set:{html:Uize.Widgets.Button.Toggle.OnOff.Html,clickToSelect:true,clickToDeselect:true},staticProperties:{cssModule:Uize.Widgets.Button.Toggle.OnOff.Css}});return e_b;}});