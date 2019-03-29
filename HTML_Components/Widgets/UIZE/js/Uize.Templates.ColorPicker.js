/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Templates.ColorPicker.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.ColorPicker',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];var _b=this,_c=input.sliderWidth!=undefined?input.sliderWidth:40,_d=input.sliderHeight!=undefined?input.sliderHeight:286;function _e(_f){return('<td style="width:'+_c+'px; height:'+_d+'px;">'+_b.childHtml({name:'slider'+_f,thickness:_c,length:_d})+'</td>');}
output.push('\n<table cellspacing="0" cellpadding="0">\n	<tr>\n		<td id="',_b.nodeId('swatch'),'" colspan="5" style="height:30px; border:1px solid #666;">&nbsp;</td>\n	</tr>\n	<tr>\n		<td colspan="5" height="3"></td>\n	</tr>\n	<tr>\n		',_e('R'),'\n		<td style="width:3px"></td>\n		',_e('G'),'\n		<td style="width:3px"></td>\n		',_e('B'),'\n	</tr>\n	<tr>\n		<td colspan="5" height="3"></td>\n	</tr>\n	<tr>\n		<td style="background:#f00; height:15px; border:1px solid #666;">&nbsp;</td>\n		<td width="3"></td>\n		<td style="background:#0f0; height:15px; border:1px solid #666;">&nbsp;</td>\n		<td width="3"></td>\n		<td style="background:#00f; height:15px; border:1px solid #666;">&nbsp;</td>\n	</tr>\n</table>\n\n');return output.join('');};_a.input={};return _a;}});