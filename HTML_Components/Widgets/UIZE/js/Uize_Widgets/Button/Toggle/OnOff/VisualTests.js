/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Button.Toggle.OnOff.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Button.Toggle.OnOff.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:'Uize.Widgets.Button.Toggle.OnOff.Widget',builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){this.addStateCombinationTestCases({enabled:[true,false],selected:[false,true],size:['tiny','small','medium','large']});},staticProperties:{widgetClass:Uize.Widgets.Button.Toggle.OnOff.Widget}});}});