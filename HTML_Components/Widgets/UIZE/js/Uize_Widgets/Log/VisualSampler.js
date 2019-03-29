/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Log.VisualSampler.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Log.VisualSampler',superclass:'Uize.Widgets.VisualSampler.Widget',required:'Uize.Widgets.Log.Widget',builder:function(f_a){'use strict';return f_a.subclass({omegastructor:function(){var f_b=this.addSample();Uize.forEach(20,function(){f_b.log('a log message')});},staticProperties:{widgetClass:Uize.Widgets.Log.Widget}});}});