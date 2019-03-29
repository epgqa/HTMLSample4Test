/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.DialogDate.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.DialogDate',superclass:'Uize.Widget.Dialog.Picker.Date',required:'UizeSite.Templates.Dialog.Picker.Date',builder:function(g_a){var g_b=g_a.subclass();g_b.set({built:false,height:145,html:UizeSite.Templates.Dialog.Picker.Date,title:'PICK DATE',width:150});return g_b;}});