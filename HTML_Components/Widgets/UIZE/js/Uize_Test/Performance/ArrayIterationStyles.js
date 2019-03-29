/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Test.Performance.ArrayIterationStyles.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Performance.ArrayIterationStyles',builder:function(){'use strict';var c_a=500000,c_b=[];for(var c_c= -1;++c_c<c_a;)c_b[c_c]=c_c;return Uize.Test.declare({title:'Test the performance of different approaches to iterating over the elements of an array',test:[{title:'Iterate over the elements of an array using a simple counter style for loop',test:function(){for(var c_c= -1;++c_c<c_a;);return true;}},{title:'Iterate over the elements of an array using a for...in loop',test:function(){for(c_c in c_b);return true;}}]});}});