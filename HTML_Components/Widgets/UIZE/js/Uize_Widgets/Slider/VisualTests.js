/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Slider.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Slider.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:'Uize.Widgets.Slider.Widget',builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){this.addStateCombinationTestCases({fullColor:['#f00','#0f0','#00f'],size:['tiny','small','medium','large'],trackLength:400,orientation:'horizontal',value:750,maxValue:1000});this.addStateCombinationTestCases({fullColor:'#fff',emptyColor:'#666',size:['tiny','small','medium','large'],trackLength:400,orientation:'horizontal',value:750,maxValue:1000});this.addStateCombinationTestCases({trackLength:400,orientation:['horizontal','vertical'],value:[0,500,1000],size:['tiny','small','medium','large'],maxValue:1000});},staticProperties:{widgetClass:Uize.Widgets.Slider.Widget}});}});