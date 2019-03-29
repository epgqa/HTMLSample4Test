/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.Dialog.Iframe.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Dialog.Iframe',builder:function(e_a){'use strict';var e_b=true,e_c=false,e_d=null;var e_e=e_a.subclass(function(){var e_f=this;function e_g(e_h){if(e_h!=e_f.e_i){e_f.e_i=e_h;var e_j=e_f.getContentWindow();e_j&&e_j.location?e_j.location.replace(e_h):(e_f.getNode('content').src=e_h);}}e_f.wire({'Before Show':function(){e_g(Uize.isFunction(e_f.e_h)?e_f.e_h():e_f.e_h)},'After Hide':function(){e_f.e_k&&e_g('about:blank')}});}),e_l=e_e.prototype;e_l.getContentWindow=function(){var e_m=this.getNode('content');return e_m?e_m.contentWindow:e_d;};e_e.stateProperties({e_k:{name:'resetUrl',value:e_b},e_h:{name:'url',value:''}});return e_e;}});