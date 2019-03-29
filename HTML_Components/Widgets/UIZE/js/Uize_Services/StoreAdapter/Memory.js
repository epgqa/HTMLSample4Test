/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Services.StoreAdapter.Memory.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Services.StoreAdapter.Memory',superclass:'Uize.Class',builder:function(b_a){'use strict';return b_a.subclass({alphastructor:function(){this.b_b={};},instanceMethods:{key:function(b_c,b_d){var b_e=b_c.index,b_f= -1,b_b=this.b_b;for(var b_g in b_b){if(b_b.hasOwnProperty(b_g)&& ++b_f==b_e)return b_g;}return null;},getItem:function(b_c,b_d){b_d(this.b_b[b_c.key]);},setItem:function(b_c,b_d){this.b_b[b_c.key]=b_c.value;b_d();},removeItem:function(b_c,b_d){delete this.b_b[b_c.key];b_d();},clear:function(b_c,b_d){this.b_b={};},init:function(b_c,b_d){b_d();}}});}});