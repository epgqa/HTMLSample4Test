/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Templates.ProgressBar.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.ProgressBar',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('\n<div id="',input.idPrefix,'" style="position:relative; visibility:hidden; left:0px; top:0px; width:',input.width||87,'px; height:',input.height||12,'px; background:#888; border:2px solid #888;">\n	<div id="',input.idPrefix,'-track" style="position:absolute; left:0px; top:0px; width:100%; height:100%;">\n		<img src="',input.pathToResources,'Uize_Widget_Bar_Progress/track-bg.gif" style="position:absolute; left:0px; top:0px; width:100%; height:100%;"/>\n		<img id="',input.idPrefix,'-full" src="',input.pathToResources,'Uize_Widget_Bar_Progress/full-bg.gif" style="position:absolute; left:0px; top:0px; width:100%; height:100%;"/>\n		<img id="',input.idPrefix,'-knob" src="',input.blankGif,'" style="position:absolute; left:0px; top:0px; width:1px; height:100%; background:#f00;"/>\n	</div>\n</div>\n\n');return output.join('');};_a.input={
idPrefix:'string',pathToResources:'string',blankGif:'string'};return _a;}});