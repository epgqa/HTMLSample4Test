/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.Dialog.Form.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Dialog.Form',required:['Uize.Data','Uize.Node.Form'],builder:function(e_a){'use strict';var e_b=true,e_c=false,e_d=Uize.Node.Form;var e_e=e_a.subclass(function(){var e_f=this;e_f.e_g=e_c;function e_h(e_i){if(!e_f.e_j)return e_f.fire('Submission Complete');var e_k=e_f.getResult();if(e_k.isModified)e_f.e_l=e_k.formData;e_k.isQualifiedOk=e_i;e_f.fire({name:'Submission Complete',result:e_k});e_f.e_g=e_c;}e_f.wire({'Ok':function(){e_h(e_c);},'Qualified Ok':function(){e_h(e_b);},'Cancel':function(){if(e_f.e_j){e_f.e_g=e_f.getResult().isModified;}},'Before Show':function(){e_f.e_j&&e_f.e_l&&e_f.e_g&&e_d.setValues(e_f.e_l);}});}),e_m=e_e.prototype;e_m.wireUi=function(){var e_f=this;if(!e_f.isWired){var e_j=e_f.e_j=e_f.getNode('form');if(e_j&& !e_f.e_l)e_f.e_l=e_d.getValues(e_j);e_a.doMy(e_f,'wireUi');}};e_m.getResult=function(){var e_f=this,e_l=e_d.getValues(e_f.e_j);return{isModified:!Uize.Data.identical(e_f.e_l,e_l),formData:e_l};};e_e.stateProperties({e_l:{name:'formData',value:null,
onChange:function(){e_d.setValues(this.e_l);}}});return e_e;}});