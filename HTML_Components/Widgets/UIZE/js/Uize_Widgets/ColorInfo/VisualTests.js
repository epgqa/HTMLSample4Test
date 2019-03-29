/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ColorInfo.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ColorInfo.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:'Uize.Widgets.ColorInfo.Widget',builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){this.addStateCombinationTestCases({value:['#e99975','#4c7cd1','#ff0000','#000','#fff','#888']});},staticProperties:{widgetClass:Uize.Widgets.ColorInfo.Widget}});}});