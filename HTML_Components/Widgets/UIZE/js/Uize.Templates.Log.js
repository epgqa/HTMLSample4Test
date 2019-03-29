/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Templates.Log.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.Log',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('<div id="',input.idPrefix,'" class="log">\n	<div class="logHeading">\n		<span>',input.title,'</span>\n		<a id="',input.idPrefix,'_clear" href="javascript://" class="logClearButton button">clear</a>\n	</div>\n	<div id="',input.idPrefix,'-messages" class="logMessages"></div>\n</div>\n\n');return output.join('');};_a.input={idPrefix:'string',title:'string'};return _a;}});