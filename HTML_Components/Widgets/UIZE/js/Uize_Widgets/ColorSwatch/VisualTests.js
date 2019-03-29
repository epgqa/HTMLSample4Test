/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ColorSwatch.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ColorSwatch.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:'Uize.Widgets.ColorSwatch.Widget',builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){this.addStateCombinationTestCases({size:['tiny','small','medium','large'],value:['#f00','#0f0','#00f','white','black']});},staticProperties:{widgetClass:Uize.Widgets.ColorSwatch.Widget}});}});