/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ProgressBar.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ProgressBar.Widget',superclass:'Uize.Widget.Bar',required:['Uize.Widgets.ProgressBar.Html','Uize.Widgets.ProgressBar.Css','Uize.Template'],builder:function(e_a){'use strict';return e_a.subclass({omegastructor:function(){var e_b=this;e_b.onChange(function(statusText,value,maxValue){return(statusText?statusText.call(this,{stepsCompleted:value,totalSteps:maxValue,percentComplete:Math.round(value/maxValue*100)}):'');},function(e_c){e_b.set({e_c:e_c})});},stateProperties:{e_c:{name:'displayedStatusText',onChange:function(){var e_b=this;e_b.once('isWired',function(){e_b.setNodeValue('statusText',e_b.e_c)});}},e_d:{name:'size',value:'medium'},e_e:{name:'statusText',value:'',conformer:function(e_f){return e_f&&typeof e_f=='string'?Uize.Template.compile(e_f):e_f;}}},set:{html:Uize.Widgets.ProgressBar.Html,orientation:'horizontal',minValue:0,value:0},stateToCssBindings:{size:'value'},staticProperties:{cssModule:Uize.Widgets.ProgressBar.Css}});}});