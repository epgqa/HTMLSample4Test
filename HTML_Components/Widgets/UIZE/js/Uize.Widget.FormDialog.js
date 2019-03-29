/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.FormDialog.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.FormDialog',superclass:'Uize.Widget.Dialog',required:'Uize.Widget.Form',builder:function(e_a){'use strict';var e_b=e_a.subclass(null,function(){var e_c=this,e_d=false,e_e=e_c.addChild('form',e_c.e_f,{useNormalSubmit:e_d});e_e.wire('Changed.okToSubmit',function(){e_e.get('okToSubmit')&&e_c.handleFormValue(function(){e_c.fire({name:'Submission Complete',result:e_e.get('value')});e_c.set({shown:e_d});});});e_c.wire({Ok:function(e_g){e_e.submit();e_g.abort=true;},'Before Show':function(){if(e_c.e_h)e_e.set({value:Uize.clone(e_c.e_h)});},'After Show':function(){e_e.updateUi()},'After Hide':function(){e_e.reset()}});});e_b.prototype.handleFormValue=function(e_i){e_i()};e_b.stateProperties({e_f:{name:'formWidgetClass',value:Uize.Widget.Form},e_h:'value'});return e_b;}});