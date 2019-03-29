/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.Dialog.Confirm.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.Dialog.Confirm',required:['UizeSite.Templates.Dialog'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];function dialogContents(){var output=[];output.push('\n			<table>\n				<tr>\n					<td><div class="dialogIcon dialogConfirmIcon" id="',input.idPrefix,'-icon">&nbsp;</div></td>\n					<td><div id="',input.idPrefix,'-message" class="dialogMessage">',input.message||'','</div></td>\n				</tr>\n			</table>');return output.join('');}output.push('\n',UizeSite.Templates.Dialog.process({idPrefix:input.idPrefix,title:input.title,contents:dialogContents()}),'\n');return output.join('');};_a.input={idPrefix:'string',message:'string',title:'string'};return _a;}});