/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Util.Needs.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Util.Needs',superclass:'Uize.Class',builder:function(b_a){'use strict';var b_b='NEEDED_';var b_c=b_a.subclass(),b_d=b_c.prototype;b_d.isNeeded=function(b_e){return this.is(b_b+b_e);};b_d.onceNeeded=function(b_f,b_g){return this.once(typeof b_f=='string'?b_b+b_f:Uize.map(b_f,function(b_e){return b_b+b_e}),b_g);};b_d.need=function(b_f,b_h){var b_i=this,b_j=b_i.once(b_f,b_h);typeof b_f=='string'?b_i.met(b_b+b_f):Uize.forEach(b_f,function(b_e){b_i.met(b_b+b_e)});return b_j;};b_d.provide=function(b_e,b_k){var b_i=this;return(b_i.is(b_e)?{}:b_i.once(b_b+b_e,function(){b_i.is(b_e)||b_k(function(b_l){b_i.is(b_e)||b_i.met(b_e,b_l);});}));};return b_c;}});