/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.TempUizeModule.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.TempUizeModule',required:['Uize.Build.Util','Uize.Json'],builder:function(){return{description:'The Uize JavaScript base module under temp',urlMatcher:function(_a){return _a.pathname==this.tempUrl(this.params.modulesFolder+'/Uize.js');},builderInputs:function(_a){return{sourceJs:this.sourceUrlFromTempUrl(_a.pathname),config:'uize-config.json'};},builder:function(_b){return(this.readFile({path:_b.sourceJs})+'\n'+'Uize.addFolderOrgNamespaces ('+Uize.Json.to(Uize.Json.from(this.readFile({path:_b.config})).folderOrgNamespaces||[])+');\n');}};}});