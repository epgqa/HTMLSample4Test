/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Calendar.VisualSampler.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Calendar.VisualSampler',superclass:'Uize.Widgets.VisualSampler.Widget',required:'Uize.Widgets.Calendar.Widget',builder:function(f_a){'use strict';return f_a.subclass({omegastructor:function(){this.addStateCombinationSamples({size:['tiny','small','medium']});},staticProperties:{widgetClass:Uize.Widgets.Calendar.Widget}});}});