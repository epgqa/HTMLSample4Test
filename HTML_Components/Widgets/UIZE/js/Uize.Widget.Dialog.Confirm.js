/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.Dialog.Confirm.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Dialog.Confirm',builder:function(e_a){'use strict';var e_b=false,e_c=true;var e_d=e_a.subclass(null,function(){var e_e=this;function e_f(e_g){e_e.fire({name:'Submission Complete',result:e_g})}e_e.wire({Ok:function(){e_f(e_c)},Cancel:function(){e_f(e_b)},Close:function(){e_f(e_b)}});}),e_h=e_d.prototype;e_h.e_i=function(){this.isWired&&this.setNodeProperties('icon',{className:'dialogIcon dialog'+Uize.capFirstChar(this.e_j)+'Icon'});};e_h.e_k=function(){this.isWired&&this.e_l!=null&&this.setNodeInnerHtml('message',this.e_l)};e_h.e_m=function(){this.isWired&&this.children.cancel.showNode('',!this.e_n.indexOf('confirm'))};e_h.updateUi=function(){this.e_i();this.e_k();this.e_m();e_a.doMy(this,'updateUi');};e_d.stateProperties({e_l:{name:'message',onChange:e_h.e_k,value:''},e_n:{name:'mode',onChange:function(){this.e_n.indexOf('Custom')<0&&this.set({defaultTitle:this.localize(this.e_n=='confirm'?'confirm':'attention')});this.e_m();},value:'confirm'},e_j:{name:'state',onChange:e_h.e_i,
value:'info'}});return e_d;}});