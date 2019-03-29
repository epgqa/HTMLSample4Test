/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.BoxWithHeading.VisualSampler.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.BoxWithHeading.VisualSampler',superclass:'Uize.Widgets.VisualSampler.Widget',required:'Uize.Widgets.BoxWithHeading.Widget',builder:function(f_a){'use strict';return f_a.subclass({omegastructor:function(){this.addSample({heading:'THE HEADING HTML',body:'<p>THE BODY HTML</p><p>THE BODY HTML</p><p>THE BODY HTML</p>'});},staticProperties:{widgetClass:Uize.Widgets.BoxWithHeading.Widget}});}});