/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.VisualSampler.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.VisualSampler.Widget',superclass:'Uize.Widgets.BoxWithHeading.Widget',required:['Uize.Widget.V2','Uize.Widgets.VisualSampler.Html','Uize.Data.Combinations'],builder:function(e_a){'use strict';var e_b=e_a.subclass({alphastructor:function(){this.e_c=0;},omegastructor:function(){this.e_d=this.addChild('samples',Uize.Widget.V2);},instanceMethods:{addStateCombinationSamples:function(e_e){var e_f=this;Uize.Data.Combinations.forEach(e_e,function(e_g){e_f.addSample(e_g)});},addSample:function(e_g){var e_f=this;return e_f.e_d.addChild('sample'+e_f.e_c++,e_f.Class.widgetClass,e_g);}},staticProperties:{widgetClass:null},set:{html:Uize.Widgets.VisualSampler.Html}});return e_b;}});