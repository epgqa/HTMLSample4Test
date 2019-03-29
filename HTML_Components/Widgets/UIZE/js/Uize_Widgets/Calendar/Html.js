/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Calendar.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Calendar.Html',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];var _b=input.size;output.push('<div class="',this.rootNodeCssClasses(),'">\n	<div id="',input.idPrefix,'-controls" class="',this.cssClass('controls'),'">\n		<div class="',this.cssClass('indicator'),'">\n			<span id="',input.idPrefix,'-month">Month</span>\n			<span id="',input.idPrefix,'-year">Year</span>\n		</div>\n		',this.childHtml({name:'previousMonth',text:'&lt;',tipText:'jump to previous month',size:_b,extraClasses:this.cssClass('previousMonth')}),'\n		',this.childHtml({name:'nextMonth',text:'&gt;',tipText:'jump to next month',size:_b,extraClasses:this.cssClass('nextMonth')}),'\n	</div>\n	<div id="',input.idPrefix,'-grid" class="',this.cssClass('grid'),'"></div>\n</div>\n');return output.join('');};_a.input={idPrefix:'string'};return _a;}});