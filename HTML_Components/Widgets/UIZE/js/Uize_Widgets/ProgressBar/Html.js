/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ProgressBar.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ProgressBar.Html',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('<div id="',this.nodeId(),'" class="',this.rootNodeCssClasses(),'">\n	<div id="',this.nodeId('track'),'" class="',this.cssClass('track'),'">\n		<div class="',this.cssClass('trackBg'),'"></div>\n		<div id="',this.nodeId('full'),'" class="',this.cssClass('trackFull'),'"></div>\n		<div id="',this.nodeId('empty'),'" class="',this.cssClass('trackEmpty'),'"></div>\n		<div id="',this.nodeId('statusText'),'" class="',this.cssClass('statusText'),'"></div>\n	</div>\n</div>\n\n');return output.join('');};_a.input={};return _a;}});