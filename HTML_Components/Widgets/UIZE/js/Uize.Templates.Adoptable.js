/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Templates.Adoptable.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.Adoptable',required:['Uize.Json'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];var _b=input;if(_b.html=='shell'){}else{}var _c=Uize.copy(_b),_d=_c.html,_e='page_'+_b.name;delete _c.name;if(_d&&Uize.isFunction(_d.process))_d=_d.process;if(Uize.isFunction(_d)){delete _c.html;_c.built=true;output.push('\n',_d(Uize.copy(_c,{idPrefix:_e})));}output.push('\n<script type="text/javascript">\n$',_e,' = ',Uize.Json.to(_c),';\n</script>\n\n');return output.join('');};_a.input={name:'string',widgetClass:'string',html:'object|function|string'};return _a;}});