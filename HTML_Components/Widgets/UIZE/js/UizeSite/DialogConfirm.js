/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.DialogConfirm.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.DialogConfirm',superclass:'Uize.Widget.Dialog.Confirm',required:'UizeSite.Templates.Dialog.Confirm',builder:function(f_a){'use strict';var f_b=f_a.subclass();f_b.set({built:false,height:80,html:UizeSite.Templates.Dialog.Confirm,width:450});return f_b;}});