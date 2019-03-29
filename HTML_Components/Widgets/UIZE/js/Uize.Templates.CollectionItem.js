/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Templates.CollectionItem.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.CollectionItem',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('<div id="',input.idPrefix,'" class="collectionItem">\n	<div class="collectionItemActions">\n		<a id="',input.idPrefix,'_remove" href="javascript://" title="Click to remove this item">delete</a>\n	</div>\n	<div id="',input.idPrefix,'-previewShell" class="collectionItemPreview">\n		<a href="javascript://" class="collectionItemPreviewLink">\n			<img id="',input.idPrefix,'-preview" src="',input.previewUrl,'" class="collectionItemPreviewImage"/>\n		</a>\n	</div>\n	<div class="collectionItemInfo">\n		<div id="',input.idPrefix,'_select" class="collectionItemSelect" title="click to select / unselect">\n			<div class="collectionItemSelectCheck"></div>\n		</div>\n		<div id="',input.idPrefix,'-title" class="collectionItemInfoTitle"></div>\n	</div>\n</div>\n\n');return output.join('');};_a.input={idPrefix:'string'};return _a;}});