/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Button.VisualSampler.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Button.VisualSampler',superclass:'Uize.Widgets.VisualSampler.Widget',required:'Uize.Widgets.Button.Widget',builder:function(f_a){'use strict';var f_b=['tiny','small','medium','large'];return f_a.subclass({omegastructor:function(){this.addStateCombinationSamples({text:'START',flavor:'positive',size:f_b});this.addStateCombinationSamples({text:'CANCEL',flavor:'normal',size:f_b});this.addStateCombinationSamples({text:'DELETE',flavor:'negative',size:f_b});this.addStateCombinationSamples({text:'SUBMIT',flavor:'primary',size:f_b});},staticProperties:{widgetClass:Uize.Widgets.Button.Widget}});}});