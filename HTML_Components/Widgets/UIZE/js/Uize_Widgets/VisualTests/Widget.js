/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.VisualTests.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.VisualTests.Widget',superclass:'Uize.Widget.V2',required:['Uize.Widget.V2','Uize.Widgets.VisualTests.TestCase.Widget','Uize.Data.Combinations'],builder:function(d_a){'use strict';var d_b=Uize.Widgets.VisualTests.TestCase.Widget;return d_a.subclass({alphastructor:function(){this.d_c=0;},omegastructor:function(){this.d_d=this.addChild('testCases',Uize.Widget.V2);},instanceMethods:{addStateCombinationTestCases:function(d_e){var d_f=this;Uize.Data.Combinations.forEach(d_e,function(d_g){d_f.addStateTestCase(d_g)});},addStateTestCase:function(d_g){var d_f=this;return d_f.d_d.addChild('testCase'+d_f.d_c++,d_b,{state:Uize.copy(d_g)}).addChild('widget',d_f.Class.widgetClass,d_g);}},staticProperties:{widgetClass:null},set:{built:false}});}});