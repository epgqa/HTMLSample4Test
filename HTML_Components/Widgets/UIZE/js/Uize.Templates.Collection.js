/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Templates.Collection.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.Collection',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('<div id="',input.idPrefix,'-tooltipDragToReorder" class="genericTooltip">Drag and drop selected items to reorganize</div>\n<div id="',input.idPrefix,'-tooltipDragging" class="genericTooltip"></div>\n<div id="',input.idPrefix,'-insertionMarker" class="collectionInsertionMarker">&nbsp;</div>\n<div class="collectionToolbar">\n	<a id="',input.idPrefix,'_selectAll" class="button">SELECT ALL</a>\n	<a id="',input.idPrefix,'_selectNone" class="button">SELECT NONE</a>\n	<a id="',input.idPrefix,'_remove" class="button">REMOVE</a>\n</div>\n<div id="',input.idPrefix,'-items" class="collectionView">\n</div>\n\n');return output.join('');};_a.input={idPrefix:'string'};return _a;}});