/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Build.Util.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Build.Util',required:['Uize.Url','Uize.String','Uize.Services.FileSystem'],builder:function(){'use strict';var _a=Uize.Services.FileSystem.singleton(),_b=/\.Widget$/;return{getIndexableFiles:function(_c,_d,_e){return _a.getFiles({path:_c+'/'+_d,pathMatcher:function(_f){return(_e.test(_f)&& !Uize.String.startsWith(Uize.Url.from(_f).fileName,'~'));}});},visualTestsModuleNameFromWidgetClass:function(_g){return(_b.test(_g)?_g.replace(_b,'.VisualTests'):'');},visualSamplerModuleNameFromWidgetClass:function(_g){return(_b.test(_g)?_g.replace(_b,'.VisualSampler'):'');}};}});