/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.VisualTests.TestCase.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.VisualTests.TestCase.Widget',superclass:'Uize.Widgets.BoxWithHeading.Widget',required:['Uize.Widgets.VisualTests.TestCase.Html','Uize.Json','Uize.Xml'],builder:function(e_a){'use strict';var e_b=e_a.subclass({alphastructor:function(){var e_c=this;e_c.onChange('state',function(e_d){e_c.set({heading:Uize.Xml.toAttributeValue(Uize.Json.to(e_d))})});},set:{html:Uize.Widgets.VisualTests.TestCase.Html}});return e_b;}});