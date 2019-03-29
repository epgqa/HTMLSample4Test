/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Templates.HashTable.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.HashTable',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('<table class="hashTable" cellspacing="1">');var propertiesToIgnore={idPrefix:1,pathToResources:1,blankGif:1};for(var inputParamName in input){if(!propertiesToIgnore[inputParamName]){output.push('\n	<tr valign="top"><td class="hashTableKey">',inputParamName,'</td><td class="hashTableValue">',input[inputParamName],'</td></tr>');}}output.push('\n</table>\n\n');return output.join('');};_a.input={};return _a;}});