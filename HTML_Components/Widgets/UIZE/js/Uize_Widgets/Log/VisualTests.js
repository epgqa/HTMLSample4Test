/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Log.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Log.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:'Uize.Widgets.Log.Widget',builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){var e_b=this;function e_c(e_d){var e_e=e_b.addStateTestCase();Uize.forEach(e_d,function(){e_e.log('a log message')});}e_c(0);e_c(1);e_c(5);e_c(20);},staticProperties:{widgetClass:Uize.Widgets.Log.Widget}});}});