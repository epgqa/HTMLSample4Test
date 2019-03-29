/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Buttons.Directional.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Buttons.Directional.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:['Uize.Widgets.Buttons.Directional.Widget','Uize.Widgets.CssUtil'],builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){this.addStateCombinationTestCases({directionX:[-1,0,1],directionY:[-1,0,1],size:Uize.keys(Uize.Widgets.CssUtil.sizes)});this.addStateCombinationTestCases({directionX:1,directionY:0,flavor:['normal','positive','negative','primary'],enabled:[true,false],busy:[false,true],selected:[false,true],state:['','over','down']});},staticProperties:{widgetClass:Uize.Widgets.Buttons.Directional.Widget}});}});