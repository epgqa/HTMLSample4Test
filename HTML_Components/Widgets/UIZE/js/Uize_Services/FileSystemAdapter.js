/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Services.FileSystemAdapter.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Services.FileSystemAdapter',superclass:'Uize.Service.Adapter',builder:function(c_a){'use strict';return c_a.subclass({instanceMethods:{c_b:function(c_c,c_d){var c_e=this,c_f=[],c_g=c_c.path,c_h=Uize.resolveMatcher(c_c.pathMatcher),c_i=Uize.resolveTransformer(c_c.pathTransformer),c_j=c_c.recursive;function c_k(c_l){var c_m=c_g+(c_g&&c_l&&'/')+c_l,c_n;Uize.push(c_f,c_e.getItemsInFolder({path:c_m,pathMatcher:function(c_o){return c_h(c_n=c_l+(c_l&&'/')+c_o);},pathTransformer:function(c_o){return c_i(c_n);}},c_d));if(c_j){Uize.forEach(c_e.getItemsInFolder({path:c_m},true),function(c_p){c_k(c_l+(c_l&&'/')+c_p)});}}c_k('');return c_f;},getItemsInFolder:function(c_c,c_d){},getFiles:function(c_c,c_q){c_q(this.c_b(c_c));},getFolders:function(c_c,c_q){c_q(this.c_b(c_c,true));}},staticMethods:{getParentFolderPath:function(c_g){return c_g.slice(0,((Math.max(c_g.lastIndexOf('/'),c_g.lastIndexOf('\\'))+1)||1)-1);}}});}});