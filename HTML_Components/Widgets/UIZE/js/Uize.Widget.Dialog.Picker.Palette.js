/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.Dialog.Picker.Palette.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Dialog.Picker.Palette',required:'Uize.Util.Coupler',builder:function(f_a){'use strict';var f_b=f_a.subclass(null,function(){var f_c=this;Uize.Util.Coupler({instances:[f_c,f_c.children.value],properties:['tentativeValue','tentativeValueDetails']});f_c.wire('After Show',function(){f_c.children.value.updateUi();if(f_c.f_d){f_c.setNodeStyle('',{minWidth:f_c.f_d});Uize.Node.ieMajorVersion<=7&&f_c.setNodeStyle('valueShell',{minWidth:f_c.f_d});}});});f_b.stateProperties({f_d:'minWidth',f_e:{name:'tentativeValue',onChange:function(){var f_c=this;setTimeout(function(){f_c.fireSubmissionComplete(true,{tentativeValue:f_c.f_e,tentativeValueDetails:f_c.f_f})},0);},value:null},f_f:'tentativeValueDetails'});f_b.set({dismissOnShieldClick:true});return f_b;}});