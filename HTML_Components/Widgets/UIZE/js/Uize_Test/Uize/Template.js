/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Test.Uize.Template.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Uize.Template',builder:function(){'use strict';return Uize.Test.declare({title:'Test for Uize.Template Module',test:[Uize.Test.requiredModulesTest('Uize.Template'),Uize.Test.staticMethodsTest([['Uize.Template.encode',[]],['Uize.Template.decode',[]],['Uize.Template.defineStandardEncoding',[]],['Uize.Template.compile',[{title:'Test that, when the variadic form of the @required directive is used, the required list is populated correctly',test:function(){return this.expect(['foo','bar'],Uize.Template.compile('<%@ required ("foo","bar") %>',{result:'full'}).required);}}]]])]});}});