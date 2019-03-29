/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Widgets.EnabledBusyDemo.Html.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Widgets.EnabledBusyDemo.Html',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];
output.push('<div id="',this.nodeId(),'" class="',this.rootNodeCssClasses(),'">\n	<div class="',this.cssClass('heading'),'">',input.idPrefix,'</div>\n	<div class="',this.cssClass('body'),'">\n		ENABLED:&nbsp;\n			<select id="',this.nodeId('enabledSelector'),'">\n				<option value="inherit" selected>inherit</option>\n				<option value="true">true</option>\n				<option value="false">false</option>\n			</select>\n		&nbsp;&nbsp;|&nbsp;&nbsp;\n		BUSY:&nbsp;\n			<select id="',this.nodeId('busySelector'),'">\n				<option value="inherit" selected>inherit</option>\n				<option value="true">true</option>\n				<option value="false">false</option>\n			</select>\n		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n		',this.childHtml({name:'button1',text:'BUTTON 1',size:'small'}),'\n		',this.childHtml({name:'button2',text:'BUTTON 2',size:'small'}),'\n		<br clear="left"/>\n		',this.childHtml({name:'childWidget0'}),'\n		',this.childHtml({name:'childWidget1'}),'\n	</div>\n</div>\n\n');return output.join('');};_a.input={};return _a;}});