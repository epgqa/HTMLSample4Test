/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.DataBar.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.DataBar',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('\n<div class="dataBar">\n	<div id="',input.idPrefix,'-track" class="dataBarTrack">\n		<div id="',input.idPrefix,'-full" class="dataBarTrackFull"></div>\n		<div id="',input.idPrefix,'-empty" class="dataBarTrackEmpty"></div>\n		<div id="',input.idPrefix,'-knob" class="dataBarKnob"><span id="',input.idPrefix,'-value"></span>',input.unit,'</div>\n	</div>\n</div>\n\n');return output.join('');};_a.input={idPrefix:'string',unit:'string'};return _a;}});