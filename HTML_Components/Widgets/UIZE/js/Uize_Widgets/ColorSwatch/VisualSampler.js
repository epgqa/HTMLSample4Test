/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ColorSwatch.VisualSampler.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ColorSwatch.VisualSampler',superclass:'Uize.Widgets.VisualSampler.Widget',required:'Uize.Widgets.ColorSwatch.Widget',builder:function(f_a){'use strict';return f_a.subclass({omegastructor:function(){this.addStateCombinationSamples({size:['tiny','small','medium','large'],value:['red','green','blue','#f0f','#5f9ea0','#556b2f','#ffdead','#90ee90','#e99975','','#4c7cd1','#000','#fff','#888']});},staticProperties:{widgetClass:Uize.Widgets.ColorSwatch.Widget}});}});