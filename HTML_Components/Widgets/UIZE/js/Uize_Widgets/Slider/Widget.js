/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Slider.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Slider.Widget',superclass:'Uize.Widget.Bar.Slider',required:['Uize.Widgets.Slider.Html','Uize.Widgets.Slider.Css','Uize.Template'],builder:function(f_a){'use strict';return f_a.subclass({omegastructor:function(){var f_b=this;f_b.once('wired',function(){f_b.onChange(function(orientation,trackLength){return(orientation=='horizontal'?{width:trackLength,height:''}:{width:'',height:trackLength});},function(f_c){f_b.isWired&&f_b.setNodeStyle('',f_c)});f_b.onChange('emptyColor',function(f_d){f_b.isWired&&f_d&&f_b.setNodeStyle('empty',{backgroundColor:f_d});});f_b.onChange('fullColor',function(f_e){f_b.isWired&&f_e&&f_b.setNodeStyle('full',{backgroundColor:f_e});});});},stateProperties:{f_f:{name:'size',value:'medium'},f_g:{name:'trackLength',value:''},f_d:'emptyColor',f_e:'fullColor'},set:{html:Uize.Widgets.Slider.Html,orientation:'horizontal'},stateToCssBindings:{orientation:'value',size:'value'},staticProperties:{cssModule:Uize.Widgets.Slider.Css}});}});