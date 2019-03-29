/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.WebServer.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.WebServer',required:['Uize.Url','Uize.Services.FileBuilder','Uize.Services.FileSystem'],builder:function(){'use strict';return{perform:function(_a){var _b=Uize.Services.FileBuilder.singleton(),_c=Uize.Services.FileSystem.singleton(),_d=1337,_e='127.0.0.1',_f=require('http'),_g={html:'text/html',text:'text/plain',js:'application/javascript',css:'text/css',png:'image/png',gif:'image/gif',jpg:'image/jpeg'},_h=_a.builtPath;_f.createServer(function(_i,_j){var _k=_i.url=='/'?'/index.html':_i.url;var _l=_k.indexOf('?');if(_l> -1)_k=_k.slice(0,_l);var _m=_h+_k,_n,_o=Uize.now();try{_b.buildFile(Uize.copyInto({url:_k.slice(1),filesModified:true},_a));_n=_c.readFile({path:_m,encoding:'buffer'});_j.writeHead(200,{'Content-Type':_g[Uize.Url.from(_k).fileType]});}catch(_p){console.log('404: '+_k);_n='404';_j.writeHead(404,{'Content-Type':'text/html'});}_j.end(_n);console.log('PAGE DELIVERY TIME: '+_k+' ('+(Uize.now()-_o)+')\n');}).listen(_d,_e);
console.log('Server running at http://'+_e+':'+_d+'/');}};}});