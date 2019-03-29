/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.ServicesSetup.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.ServicesSetup',required:'Uize.Services.Setup',builder:function(){'use strict';var _a=function(){};_a.setup=function(){var _b=typeof ActiveXObject!='undefined';Uize.Services.Setup.provideServiceSetup('Uize.Services.FileSystem',_b?'Uize.Services.FileSystemAdapter.Wsh':'Uize.Services.FileSystemAdapter.Node',function(_c,_d){_c.init();_d();});};return _a;}});