/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.RgbSliders.VisualTests.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.RgbSliders.VisualTests',superclass:'Uize.Widgets.VisualTests.Widget',required:'Uize.Widgets.RgbSliders.Widget',builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){this.addStateTestCase({size:'tiny',sliderHeight:150,value:'#cc5599'});this.addStateTestCase({size:'small',sliderHeight:180,value:'#cc5599'});this.addStateTestCase({size:'medium',sliderHeight:220,value:'#cc5599'});this.addStateTestCase({size:'large',sliderHeight:280,value:'#cc5599'});this.addStateCombinationTestCases({value:['#e99975','#4c7cd1','#ff0000','#000','#fff','#888'],sliderHeight:250});},staticProperties:{widgetClass:Uize.Widgets.RgbSliders.Widget}});}});