/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.BoxWithHeading.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.BoxWithHeading.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:'Uize.Widgets.BoxWithHeading.Widget',builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){this.addStateCombinationTestCases({heading:'THE HEADING HTML',body:'<p>THE BODY HTML</p><p>THE BODY HTML</p><p>THE BODY HTML</p>'});},staticProperties:{widgetClass:Uize.Widgets.BoxWithHeading.Widget}});}});