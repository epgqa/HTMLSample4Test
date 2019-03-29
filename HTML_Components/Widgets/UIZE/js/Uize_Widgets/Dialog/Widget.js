/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Dialog.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Dialog.Widget',superclass:'Uize.Widget.Dialog',required:['Uize.Widgets.Button.Widget','Uize.Widget.Dialog.xResizable','Uize.Widgets.Dialog.Html','Uize.Widgets.Dialog.Css'],builder:function(e_a){'use strict';var e_b=e_a.subclass({set:{html:Uize.Widgets.Dialog.Html},staticProperties:{cssModule:Uize.Widgets.Dialog.Css,buttonWidgetClass:Uize.Widgets.Button.Widget,enableRootNodeCssClasses:true}});return e_b;}});