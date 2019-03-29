/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Slider.VisualSampler.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Slider.VisualSampler',superclass:'Uize.Widgets.VisualSampler.Widget',required:'Uize.Widgets.Slider.Widget',builder:function(f_a){'use strict';var f_b=['tiny','small','medium','large'];return f_a.subclass({omegastructor:function(){this.addStateCombinationSamples({orientation:'horizontal',value:75,size:'medium',maxValue:100,fullColor:['#f00','#0f0','#00f','#fff']});this.addStateCombinationSamples({orientation:'horizontal',value:30,maxValue:100,size:['tiny','small','medium','large']});this.addStateCombinationSamples({orientation:'vertical',trackLength:300,value:75,size:'medium',maxValue:100,fullColor:['#f00','#0f0','#00f','#fff']});this.addStateCombinationSamples({orientation:'vertical',trackLength:300,value:30,maxValue:100,size:['tiny','small','medium','large']});},staticProperties:{widgetClass:Uize.Widgets.Slider.Widget}});}});