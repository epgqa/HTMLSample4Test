/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ColorInfo.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ColorInfo.Widget',superclass:'Uize.Widget.V2',required:['Uize.Color','Uize.Widgets.ColorInfo.Html','Uize.Widgets.ColorInfo.Css'],builder:function(d_a){'use strict';function d_b(){var d_c=this;if(d_c.isWired){var d_d=Uize.Color.to(d_c.d_e,'#hex');d_c.setNodeValue('value',d_d);d_c.setNodeStyle(['swatch','asBackground'],{backgroundColor:d_d});d_c.setNodeStyle('asForeground',{color:d_d});}}return d_a.subclass({instanceMethods:{updateUi:d_b},stateProperties:{d_e:{name:'value',onChange:d_b,value:'#000000'}},set:{html:Uize.Widgets.ColorInfo.Html},staticProperties:{cssModule:Uize.Widgets.ColorInfo.Css}});}});