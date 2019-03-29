/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.Dialog.Picker.Palette.Selector.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Dialog.Picker.Palette.Selector',required:['Uize.Widget.Options.Selector','Uize.Util.Coupler'],builder:function(g_a){'use strict';var g_b=g_a.subclass(null,function(){Uize.Util.Coupler({instances:[this,this.children.value],properties:['valueNo','tentativeValueNo']})});function g_c(g_d){this.fireSubmissionComplete(true,g_d)}g_b.stateProperties({g_e:{name:'tentativeValueNo',onChange:g_c,value:-1},g_f:{name:'valueNo',onChange:g_c,value:-1},g_g:{name:'values',value:[]}});g_b.set({pipedProperties:['values'],valueWidgetClass:Uize.Widget.Options.Selector,shieldOpacity:.01});return g_b;}});