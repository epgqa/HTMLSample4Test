/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Button.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Button.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:['Uize.Widgets.Button.Widget','Uize.Widgets.CssUtil'],builder:function(e_a){'use strict';var e_b=Uize.keys(Uize.Widgets.CssUtil.sizes);return e_a.subclass({omegastructor:function(){this.addStateCombinationTestCases({text:'CANCEL',flavor:'normal',enabled:[true,false],selected:[false,true],size:e_b});this.addStateCombinationTestCases({text:'START',flavor:'positive',enabled:[true,false],selected:[false,true],size:e_b});this.addStateCombinationTestCases({text:'Settings',enabled:[true,false],busy:[false,true],selected:[false,true],clickToSelect:[false,true],clickToDeselect:[false,true],state:['','over','down'],size:e_b});},staticProperties:{widgetClass:Uize.Widgets.Button.Widget}});}});