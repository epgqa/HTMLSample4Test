/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.Bar.Progress.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Bar.Progress',required:['Uize.Fade','Uize.Templates.ProgressBar'],builder:function(e_a){'use strict';var e_b=true,e_c=false,e_d=null;var e_e=e_a.subclass(function(){var e_f=this;e_f.e_g=e_f.e_h=0;e_f.e_i=Uize.Fade({duration:4000});e_f.e_i.wire('Changed.value',function(){e_f.set({value:+e_f.e_i})});}),e_j=e_e.prototype;e_j.e_k=function(){this.showNode('',this.e_l);};e_j.wireUi=function(){var e_f=this;if(!e_f.isWired){e_a.doMy(e_f,'wireUi');e_f.e_k();}};e_e.stateProperties({e_l:{name:'inProgress',onChange:function(){var e_f=this,e_m=Uize.now();if(e_f.e_l)e_f.e_n=e_m;if(!e_f.e_l&&typeof e_f.e_n=='number'){e_f.e_g++;e_f.e_h+=e_m-e_f.e_n;}if(e_f.isWired){var e_o=function(){if(e_f.e_p){clearTimeout(e_f.e_p);e_f.e_p=e_d;}e_f.e_k();};if(e_f.e_l){e_f.e_i.start({duration:(e_f.e_g>0?e_f.e_h/e_f.e_g:3000)*e_f.e_q});e_o();}else{e_f.e_i.stop();e_f.e_i.set({value:100});e_f.e_p=setTimeout(e_o,e_f.e_r);}}},value:e_c},e_q:{name:'paddingFactor',value:1.5},e_r:{name:'vanishTime',value:250}});
e_e.set({html:Uize.Templates.ProgressBar,orientation:'horizontal'});return e_e;}});