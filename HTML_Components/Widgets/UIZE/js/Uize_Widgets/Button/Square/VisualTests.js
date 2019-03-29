/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Button.Square.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Button.Square.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:['Uize.Widgets.Button.Square.Widget','Uize.Widgets.CssUtil'],builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){this.addStateCombinationTestCases({flavor:['normal','positive','negative','primary'],size:Uize.keys(Uize.Widgets.CssUtil.sizes)});},staticProperties:{widgetClass:Uize.Widgets.Button.Square.Widget}});}});