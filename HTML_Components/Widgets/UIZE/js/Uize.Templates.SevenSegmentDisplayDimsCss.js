/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Templates.SevenSegmentDisplayDimsCss.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.SevenSegmentDisplayDimsCss',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];var _b=input.segmentThickness,_c=input.displayWidth,_d=input.displayHeight,_e=input.segmentGap,_f=_b/2,_g=_b+_e;
output.push('\n.sevenSeg {\n	width:',_c,'px;\n	height:',_d,'px;\n}\n.sevenSegSegmentEnd {\n	border-width:',_f,'px;\n}\n.sevenSegHorzSegment {\n	height:',_b,'px;\n}\n.sevenSegHorzSegmentMiddle {\n	top:',_d/2-_f,'px;\n}\n.sevenSegSegmentLeftEnd {\n	left:',_e,'px;\n}\n.sevenSegHorzSegment .sevenSegSegmentBar {\n	left:',_g,'px;\n	right:',_g,'px;\n}\n.sevenSegSegmentRightEnd {\n	right:',_e,'px;\n}\n.sevenSegVertSegment {\n	width:',_b,'px;\n}\n.sevenSegSegmentTopEnd {\n	top:',_e,'px;\n}\n.sevenSegVertSegment .sevenSegSegmentBar {\n	top:',_g,'px;\n	bottom:',_g,'px;\n}\n.sevenSegSegmentBottomEnd {\n	bottom:',_e,'px;\n}\n.sevenSegVertSegmentTop .sevenSegSegmentBottomEnd {\n	bottom:',_e-_f,'px;\n}\n.sevenSegVertSegmentTop  .sevenSegSegmentBar {\n	bottom:',_e+_f,'px;\n}\n.sevenSegVertSegmentBottom .sevenSegSegmentTopEnd {\n	top:',_e-_f,'px;\n}\n.sevenSegVertSegmentBottom  .sevenSegSegmentBar {\n	top:',_e+_f,'px;\n}\n\n');return output.join('');};_a.input={segmentThickness:'integer',displayWidth:'integer',
displayHeight:'integer',segmentGap:'integer'};return _a;}});