/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.Files.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.Files',superclass:'Uize.Class',required:['Uize.Services.FileSystem','Uize.Services.FileBuilder'],builder:function(b_a){'use strict';var b_b;return b_a.subclass({staticMethods:{determineFilesToBuild:function(b_c){throw"You must override this method";},addFiles:function(b_d){Uize.push(this.filesToBuild,arguments.length==1&&Uize.isArray(b_d)?b_d:arguments);},perform:function(b_c){var b_e=this,b_f=b_e.fileSystem=Uize.Services.FileSystem.singleton(),b_g=b_e.filesToBuild=[];b_e.fileBuilder=Uize.Services.FileBuilder.singleton();b_e.determineFilesToBuild(b_c);b_f.writeFile({path:b_c.logFilePath,contents:b_e.fileBuilder.buildFile(Uize.copyInto({url:b_g},b_c))});}},staticProperties:{fileSystem:b_b,fileBuilder:b_b}});}});