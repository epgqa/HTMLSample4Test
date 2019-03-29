/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.ColorSwatch.Css.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.ColorSwatch.Css',superclass:'Uize.Node.CssModule',builder:function(c_a){'use strict';return c_a.subclass({staticProperties:{css:function(c_b){return'\n.Uize_Widgets_ColorSwatch_Css {\n	display: inline-block;\n	border-width: 1px;\n	border-style: solid;\n	border-color: #ccc #999 #999 #ccc;\n	width: 20px;\n	height: 20px;\n}\n\n/*** different sizes ***/\n	.Uize_Widgets_ColorSwatch_Css-tiny {\n		width: 21px;\n		height: 21px;\n	}\n\n	.Uize_Widgets_ColorSwatch_Css-small {\n		width: 26px;\n		height: 26px;\n	}\n\n	.Uize_Widgets_ColorSwatch_Css-medium {\n		width: 36px;\n		height: 36px;\n	}\n\n	.Uize_Widgets_ColorSwatch_Css-large {\n		width: 49px;\n		height: 49px;\n	}\n\n';}}});}});