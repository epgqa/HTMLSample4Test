/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.ServicesSetup.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.ServicesSetup',required:['Uize.Build.ServicesSetup','Uize.Services.Setup'],builder:function(){'use strict';return{setup:function(){Uize.Build.ServicesSetup.setup();Uize.Services.Setup.provideServiceSetup('Uize.Services.FileBuilder','UizeSite.Build.File');}};}});