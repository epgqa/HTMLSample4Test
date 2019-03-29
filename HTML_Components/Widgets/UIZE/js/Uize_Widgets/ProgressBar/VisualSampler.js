/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ProgressBar.VisualSampler.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ProgressBar.VisualSampler',superclass:'Uize.Widgets.VisualSampler.Widget',required:'Uize.Widgets.ProgressBar.Widget',builder:function(f_a){'use strict';var f_b=['tiny','small','medium','large'];return f_a.subclass({omegastructor:function(){this.addStateCombinationSamples({statusText:'<%. percentComplete %>%',value:[0,7,15,23,30],size:'small',maxValue:30});},staticProperties:{widgetClass:Uize.Widgets.ProgressBar.Widget}});}});