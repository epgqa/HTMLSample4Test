/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.WidgetToGoTitle.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.WidgetToGoTitle',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];
output.push('<div class="widgetHeader">\n	<div id="',input.idPrefix,'_menu_selector" title="Click to show/hide widget options..." class="widgetTitle">\n		<div class="logo"></div>\n		<div class="textShadow">',input.title,'</div>\n		<div class="textHighlight">',input.title,'</div>\n		<div class="textMain">',input.title,'</div>\n	</div>\n	<div id="',input.idPrefix,'_menu-palette" class="subMenuShell">\n		<a id="',input.idPrefix,'_menu-getThisWidget" href="javascript://" class="subMenuItem">GET THIS WIDGET</a>\n		<div class="divider"></div>\n		<a id="',input.idPrefix,'_menu-aboutThisWidget" href="javascript://" class="subMenuItem">About This Widget</a>\n		<a id="',input.idPrefix,'_menu-openInNewWindow" href="javascript://" class="subMenuItem">Open Widget in New Window</a>\n		<div class="divider"></div>\n		<a id="',input.idPrefix,'_menu-moreWidgets"  href="javascript://" class="subMenuItem">More UIZE Widgets...</a>\n		<a id="',input.idPrefix,'_menu-uize" href="javascript://" class="subMenuItem">UIZE JavaScript Framework</a>\n	</div>\n</div>\n\n');
return output.join('');};_a.input={idPrefix:'string',title:'string'};return _a;}});