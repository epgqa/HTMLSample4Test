/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ProgressBar.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ProgressBar.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:'Uize.Widgets.ProgressBar.Widget',builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){this.addStateCombinationTestCases({statusText:['','<%. percentComplete %>%','<%. stepsCompleted %> of <%. totalSteps %> tests completed','<%. stepsCompleted %> of <%. totalSteps %> tests completed (<%. percentComplete %>%)'],value:[0,15,30],size:['tiny','small','medium','large'],maxValue:30});},staticProperties:{widgetClass:Uize.Widgets.ProgressBar.Widget}});}});