/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Buttons.Directional.VisualSampler.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Buttons.Directional.VisualSampler',superclass:'Uize.Widgets.VisualSampler.Widget',required:['Uize.Widgets.Buttons.Directional.Widget','Uize.Widgets.CssUtil'],builder:function(f_a){'use strict';return f_a.subclass({omegastructor:function(){this.addStateCombinationSamples({directionX:[-1,0,1],directionY:[-1,0,1],size:Uize.keys(Uize.Widgets.CssUtil.sizes)});this.addStateCombinationSamples({flavor:['positive','negative','primary'],directionX:[-1,0,1],directionY:[-1,0,1],size:'medium'});},staticProperties:{widgetClass:Uize.Widgets.Buttons.Directional.Widget}});}});