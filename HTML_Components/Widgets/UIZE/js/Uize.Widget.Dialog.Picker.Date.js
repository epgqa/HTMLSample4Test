/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.Dialog.Picker.Date.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Dialog.Picker.Date',required:'Uize.Widget.Calendar',builder:function(f_a){'use strict';var f_b=f_a.subclass();f_b.set({valueWidgetClass:Uize.Widget.Calendar,pipedProperties:['displayFormat','maxValue','minValue']});return f_b;}});