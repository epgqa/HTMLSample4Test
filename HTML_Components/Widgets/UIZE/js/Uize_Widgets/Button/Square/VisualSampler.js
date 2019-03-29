/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Button.Square.VisualSampler.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Button.Square.VisualSampler',superclass:'Uize.Widgets.VisualSampler.Widget',required:['Uize.Widgets.Button.Square.Widget','Uize.Widgets.CssUtil'],builder:function(f_a){'use strict';return f_a.subclass({omegastructor:function(){this.addStateCombinationSamples({flavor:['normal','positive','negative','primary'],size:Uize.keys(Uize.Widgets.CssUtil.sizes)});},staticProperties:{widgetClass:Uize.Widgets.Button.Square.Widget}});}});