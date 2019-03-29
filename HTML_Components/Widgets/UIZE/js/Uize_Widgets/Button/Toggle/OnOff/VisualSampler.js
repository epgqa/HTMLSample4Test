/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Button.Toggle.OnOff.VisualSampler.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Button.Toggle.OnOff.VisualSampler',superclass:'Uize.Widgets.VisualSampler.Widget',required:'Uize.Widgets.Button.Toggle.OnOff.Widget',builder:function(f_a){'use strict';return f_a.subclass({omegastructor:function(){this.addStateCombinationSamples({size:['tiny','small','medium','large'],selected:[false,true]});},staticProperties:{widgetClass:Uize.Widgets.Button.Toggle.OnOff.Widget}});}});