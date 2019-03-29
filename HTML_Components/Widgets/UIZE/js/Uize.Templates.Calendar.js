/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Templates.Calendar.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.Calendar',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];
output.push('<div class="calendarContainer">\n	<div id="',input.idPrefix,'-controls" class="calendarControls">\n		<div id="',input.idPrefix,'-indicator" class="calendarIndicator">\n			<span id="',input.idPrefix,'-month" class="monthIndicator">Month</span>\n			<span id="',input.idPrefix,'-year" class="yearIndicator">Year</span>\n		</div>\n		<a href="javascript://" id="',input.idPrefix,'_previousMonth" class="calendarControl previousMonth" title="previous month">&#9668;</a>\n		<a href="javascript://" id="',input.idPrefix,'_nextMonth" class="calendarControl nextMonth" title="next month">&#9658;</a>\n		<a href="javascript://" id="',input.idPrefix,'_previousYear" class="calendarControl previousYear" title="previous year">&laquo;</a>\n		<a href="javascript://" id="',input.idPrefix,'_nextYear" class="calendarControl nextYear" title="next year">&raquo;</a>\n	</div>\n	<div id="',input.idPrefix,'-grid" class="calendarGrid"></div>\n</div>\n');return output.join('');};_a.input={idPrefix:'string'};return _a;}});