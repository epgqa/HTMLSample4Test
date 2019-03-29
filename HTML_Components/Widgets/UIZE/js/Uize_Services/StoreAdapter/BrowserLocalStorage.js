/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Services.StoreAdapter.BrowserLocalStorage.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Services.StoreAdapter.BrowserLocalStorage',superclass:'Uize.Services.StoreAdapter',builder:function(d_a){'use strict';return d_a.subclass({instanceMethods:{key:function(d_b,d_c){d_c(window.localStorage.key(d_b.index));},getItem:function(d_b,d_c){d_c(window.localStorage.getItem(d_b.key));},setItem:function(d_b,d_c){window.localStorage.setItem(d_b.key,d_b.value);d_c();},removeItem:function(d_b,d_c){window.localStorage.removeItem(d_b.key);d_c();},clear:function(d_b,d_c){window.localStorage.clear();d_c();},init:function(d_b,d_c){d_c();}}});}});