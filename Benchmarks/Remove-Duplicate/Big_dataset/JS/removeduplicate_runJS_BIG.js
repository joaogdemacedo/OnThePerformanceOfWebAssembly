var Module=typeof Module!=="undefined"?Module:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string";ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;var nodeFS;var nodePath;if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=require("path").dirname(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}read_=function shell_read(filename,binary){if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);return nodeFS["readFileSync"](filename,binary?null:"utf8")};readBinary=function readBinary(filename){var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/")}arguments_=process["argv"].slice(2);if(typeof module!=="undefined"){module["exports"]=Module}process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",abort);quit_=function(status){process["exit"](status)};Module["inspect"]=function(){return"[Emscripten Module object]"}}else if(ENVIRONMENT_IS_SHELL){if(typeof read!="undefined"){read_=function shell_read(f){return read(f)}}readBinary=function readBinary(f){var data;if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){arguments_=scriptArgs}else if(typeof arguments!="undefined"){arguments_=arguments}if(typeof quit==="function"){quit_=function(status){quit(status)}}if(typeof print!=="undefined"){if(typeof console==="undefined")console={};console.log=print;console.warn=console.error=typeof printErr!=="undefined"?printErr:print}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!=="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var STACK_ALIGN=16;function warnOnce(text){if(!warnOnce.shown)warnOnce.shown={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;err(text)}}function convertJsFunctionToWasm(func,sig){return func}var freeTableIndexes=[];var functionsInTableMap;function getEmptyTableSlot(){if(freeTableIndexes.length){return freeTableIndexes.pop()}try{wasmTable.grow(1)}catch(err){if(!(err instanceof RangeError)){throw err}throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return wasmTable.length-1}function addFunctionWasm(func,sig){if(!functionsInTableMap){functionsInTableMap=new WeakMap;for(var i=0;i<wasmTable.length;i++){var item=wasmTable.get(i);if(item){functionsInTableMap.set(item,i)}}}if(functionsInTableMap.has(func)){return functionsInTableMap.get(func)}var ret=getEmptyTableSlot();try{wasmTable.set(ret,func)}catch(err){if(!(err instanceof TypeError)){throw err}var wrapped=convertJsFunctionToWasm(func,sig);wasmTable.set(ret,wrapped)}functionsInTableMap.set(func,ret);return ret}var tempRet0=0;var setTempRet0=function(value){tempRet0=value};var getTempRet0=function(){return tempRet0};var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;var WebAssembly={Memory:function(opts){this.buffer=new ArrayBuffer(opts["initial"]*65536)},Module:function(binary){},Instance:function(module,info){this.exports=(
// EMSCRIPTEN_START_ASM
function instantiate(K){function c(d){d.set=function(a,b){this[a]=b};d.get=function(a){return this[a]};return d}function I(J){var e=J.memory;var f=e.buffer;var g=new Int8Array(f);var h=new Int16Array(f);var i=new Int32Array(f);var j=new Uint8Array(f);var k=new Uint16Array(f);var l=new Uint32Array(f);var m=new Float32Array(f);var n=new Float64Array(f);var o=Math.imul;var p=Math.fround;var q=Math.abs;var r=Math.clz32;var s=Math.min;var t=Math.max;var u=Math.floor;var v=Math.ceil;var w=Math.trunc;var x=Math.sqrt;var y=J.abort;var z=NaN;var A=Infinity;var B=J.emscripten_memcpy_big;var C=J.fd_write;var D=J.setTempRet0;var E=6845920;var F=0;
// EMSCRIPTEN_START_FUNCS
function ia(a,b,c,d){var e=0,f=0,k=0,l=0,m=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;f=E-80|0;E=f;i[f+76>>2]=1601024;z=f+55|0;w=f+56|0;a:{b:while(1){c:{if((t|0)<0){break c}if((2147483647-t|0)<(e|0)){i[400480]=61;t=-1;break c}t=e+t|0}d:{e:{f:{m=i[f+76>>2];e=m;k=j[e|0];if(k){while(1){g:{k=k&255;h:{if(!k){k=e;break h}if((k|0)!=37){break g}k=e;while(1){if(j[e+1|0]!=37){break h}l=e+2|0;i[f+76>>2]=l;k=k+1|0;p=j[e+2|0];e=l;if((p|0)==37){continue}break}}e=k-m|0;if(a){ja(a,m,e)}if(e){continue b}k=f;l=!ba(g[i[f+76>>2]+1|0]);e=i[f+76>>2];i:{if(!(l|j[e+2|0]!=36)){v=g[e+1|0]-48|0;x=1;e=e+3|0;break i}v=-1;e=e+1|0}i[k+76>>2]=e;q=0;u=g[e|0];l=u-32|0;j:{if(l>>>0>31){k=e;break j}k=e;l=1<<l;if(!(l&75913)){break j}while(1){k=e+1|0;i[f+76>>2]=k;q=l|q;u=g[e+1|0];l=u-32|0;if(l>>>0>=32){break j}e=k;l=1<<l;if(l&75913){continue}break}}k:{if((u|0)==42){l=f;l:{m:{if(!ba(g[k+1|0])){break m}e=i[f+76>>2];if(j[e+2|0]!=36){break m}i[((g[e+1|0]<<2)+d|0)-192>>2]=10;r=i[((g[e+1|0]<<3)+c|0)-384>>2];x=1;e=e+3|0;break l}if(x){break f}x=0;r=0;if(a){e=i[b>>2];i[b>>2]=e+4;r=i[e>>2]}e=i[f+76>>2]+1|0}i[l+76>>2]=e;if((r|0)>-1){break k}r=0-r|0;q=q|8192;break k}r=ka(f+76|0);if((r|0)<0){break f}e=i[f+76>>2]}p=-1;n:{if(j[e|0]!=46){break n}if(j[e+1|0]==42){o:{if(!ba(g[e+2|0])){break o}e=i[f+76>>2];if(j[e+3|0]!=36){break o}i[((g[e+2|0]<<2)+d|0)-192>>2]=10;p=i[((g[e+2|0]<<3)+c|0)-384>>2];e=e+4|0;i[f+76>>2]=e;break n}if(x){break f}if(a){e=i[b>>2];i[b>>2]=e+4;p=i[e>>2]}else{p=0}e=i[f+76>>2]+2|0;i[f+76>>2]=e;break n}i[f+76>>2]=e+1;p=ka(f+76|0);e=i[f+76>>2]}k=0;while(1){y=k;s=-1;if(g[e|0]-65>>>0>57){break a}u=e+1|0;i[f+76>>2]=u;k=g[e|0];e=u;k=j[(k+o(y,58)|0)+1600991|0];if(k-1>>>0<8){continue}break}p:{q:{if((k|0)!=19){if(!k){break a}if((v|0)>=0){i[(v<<2)+d>>2]=k;e=(v<<3)+c|0;k=i[e+4>>2];i[f+64>>2]=i[e>>2];i[f+68>>2]=k;break q}if(!a){break d}la(f- -64|0,k,b);u=i[f+76>>2];break p}if((v|0)>-1){break a}}e=0;if(!a){continue b}}l=q&-65537;k=q&8192?l:q;s=0;v=1601032;q=w;r:{s:{t:{u:{v:{w:{x:{y:{z:{A:{B:{C:{D:{E:{F:{G:{e=g[u-1|0];e=y?(e&15)==3?e&-33:e:e;switch(e-88|0){case 11:break r;case 9:case 13:case 14:case 15:break s;case 27:break x;case 12:case 17:break A;case 23:break B;case 0:case 32:break C;case 24:break D;case 22:break E;case 29:break F;case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 10:case 16:case 18:case 19:case 20:case 21:case 25:case 26:case 28:case 30:case 31:break e;default:break G}}H:{switch(e-65|0){case 0:case 4:case 5:case 6:break s;case 2:break v;case 1:case 3:break e;default:break H}}if((e|0)==83){break w}break e}e=i[f+64>>2];m=i[f+68>>2];v=1601032;break z}e=0;I:{switch(y&255){case 0:i[i[f+64>>2]>>2]=t;continue b;case 1:i[i[f+64>>2]>>2]=t;continue b;case 2:k=i[f+64>>2];i[k>>2]=t;i[k+4>>2]=t>>31;continue b;case 3:h[i[f+64>>2]>>1]=t;continue b;case 4:g[i[f+64>>2]]=t;continue b;case 6:i[i[f+64>>2]>>2]=t;continue b;case 7:break I;default:continue b}}k=i[f+64>>2];i[k>>2]=t;i[k+4>>2]=t>>31;continue b}p=p>>>0>8?p:8;k=k|8;e=120}m=ma(i[f+64>>2],i[f+68>>2],w,e&32);if(!(k&8)|!(i[f+64>>2]|i[f+68>>2])){break y}v=(e>>>4|0)+1601032|0;s=2;break y}m=na(i[f+64>>2],i[f+68>>2],w);if(!(k&8)){break y}e=w-m|0;p=(e|0)<(p|0)?p:e+1|0;break y}l=i[f+68>>2];m=l;e=i[f+64>>2];if((l|0)<-1?1:(l|0)<=-1){m=0-(m+((e|0)!=0)|0)|0;e=0-e|0;i[f+64>>2]=e;i[f+68>>2]=m;s=1;v=1601032;break z}if(k&2048){s=1;v=1601033;break z}s=k&1;v=s?1601034:1601032}m=oa(e,m,w)}k=(p|0)>-1?k&-65537:k;e=i[f+64>>2];l=i[f+68>>2];if(!(!!(e|l)|p)){p=0;m=w;break e}e=!(e|l)+(w-m|0)|0;p=(e|0)<(p|0)?p:e;break e}e=i[f+64>>2];m=e?e:1601042;e=ca(m,p);q=e?e:p+m|0;k=l;p=e?e-m|0:p;break e}l=i[f+64>>2];if(p){break u}e=0;pa(a,32,r,0,k);break t}i[f+12>>2]=0;i[f+8>>2]=i[f+64>>2];i[f+64>>2]=f+8;p=-1;l=f+8|0}e=0;J:{while(1){m=i[l>>2];if(!m){break J}m=ea(f+4|0,m);q=(m|0)<0;if(!(q|m>>>0>p-e>>>0)){l=l+4|0;e=e+m|0;if(p>>>0>e>>>0){continue}break J}break}s=-1;if(q){break a}}pa(a,32,r,e,k);if(!e){e=0;break t}l=0;u=i[f+64>>2];while(1){m=i[u>>2];if(!m){break t}m=ea(f+4|0,m);l=m+l|0;if((l|0)>(e|0)){break t}ja(a,f+4|0,m);u=u+4|0;if(e>>>0>l>>>0){continue}break}}pa(a,32,r,e,k^8192);e=(e|0)<(r|0)?r:e;continue b}e=G[0](a,n[f+64>>3],r,p,k,e)|0;continue b}g[f+55|0]=i[f+64>>2];p=1;m=z;k=l;break e}l=e+1|0;i[f+76>>2]=l;k=j[e+1|0];e=l;continue}}s=t;if(a){break a}if(!x){break d}e=1;while(1){a=i[(e<<2)+d>>2];if(a){la((e<<3)+c|0,a,b);s=1;e=e+1|0;if((e|0)!=10){continue}break a}break}s=1;if(e>>>0>=10){break a}while(1){if(i[(e<<2)+d>>2]){break f}e=e+1|0;if((e|0)!=10){continue}break}break a}s=-1;break a}q=q-m|0;p=(p|0)<(q|0)?q:p;l=p+s|0;e=(l|0)>(r|0)?l:r;pa(a,32,e,l,k);ja(a,v,s);pa(a,48,e,l,k^65536);pa(a,48,p,q,0);ja(a,m,q);pa(a,32,e,l,k^8192);continue}break}s=0}E=f+80|0;return s}function W(a,b,c){var d=0,e=0;if(c>>>0>=512){B(a|0,b|0,c|0)|0;return}d=a+c|0;a:{if(!((a^b)&3)){b:{if((c|0)<1){c=a;break b}if(!(a&3)){c=a;break b}c=a;while(1){g[c|0]=j[b|0];b=b+1|0;c=c+1|0;if(d>>>0<=c>>>0){break b}if(c&3){continue}break}}a=d&-4;c:{if(a>>>0<64){break c}e=a+-64|0;if(e>>>0<c>>>0){break c}while(1){i[c>>2]=i[b>>2];i[c+4>>2]=i[b+4>>2];i[c+8>>2]=i[b+8>>2];i[c+12>>2]=i[b+12>>2];i[c+16>>2]=i[b+16>>2];i[c+20>>2]=i[b+20>>2];i[c+24>>2]=i[b+24>>2];i[c+28>>2]=i[b+28>>2];i[c+32>>2]=i[b+32>>2];i[c+36>>2]=i[b+36>>2];i[c+40>>2]=i[b+40>>2];i[c+44>>2]=i[b+44>>2];i[c+48>>2]=i[b+48>>2];i[c+52>>2]=i[b+52>>2];i[c+56>>2]=i[b+56>>2];i[c+60>>2]=i[b+60>>2];b=b- -64|0;c=c- -64|0;if(e>>>0>=c>>>0){continue}break}}if(a>>>0<=c>>>0){break a}while(1){i[c>>2]=i[b>>2];b=b+4|0;c=c+4|0;if(a>>>0>c>>>0){continue}break}break a}if(d>>>0<4){c=a;break a}e=d-4|0;if(e>>>0<a>>>0){c=a;break a}c=a;while(1){g[c|0]=j[b|0];g[c+1|0]=j[b+1|0];g[c+2|0]=j[b+2|0];g[c+3|0]=j[b+3|0];b=b+4|0;c=c+4|0;if(e>>>0>=c>>>0){continue}break}}if(c>>>0<d>>>0){while(1){g[c|0]=j[b|0];b=b+1|0;c=c+1|0;if((d|0)!=(c|0)){continue}break}}}function P(a){var b=0,c=0,d=0,e=0,f=0;b=E-208|0;E=b;i[b+8>>2]=1;i[b+12>>2]=0;i[b+16>>2]=4;i[b+20>>2]=4;c=4;e=4;d=2;while(1){f=e+4|0;e=c;c=c+f|0;i[(b+16|0)+(d<<2)>>2]=c;d=d+1|0;if(c>>>0<16e5){continue}break}e=a+1599996|0;a:{if(e>>>0<=a>>>0){d=1;c=1;break a}d=1;c=1;while(1){b:{if((d&3)==3){Q(a,c,b+16|0);R(b+8|0,2);c=c+2|0;break b}d=c-1|0;c:{if(l[(b+16|0)+(d<<2)>>2]>=e-a>>>0){S(a,b+8|0,c,0,b+16|0);break c}Q(a,c,b+16|0)}if((c|0)==1){T(b+8|0,1);c=0;break b}T(b+8|0,d);c=1}d=i[b+8>>2]|1;i[b+8>>2]=d;a=a+4|0;if(e>>>0>a>>>0){continue}break}}S(a,b+8|0,c,0,b+16|0);while(1){d:{e:{f:{g:{if(!((c|0)!=1|(d|0)!=1)){if(i[b+12>>2]){break g}break d}if((c|0)>1){break f}}e=U(b+8|0);R(b+8|0,e);d=i[b+8>>2];c=c+e|0;break e}T(b+8|0,2);i[b+8>>2]=i[b+8>>2]^7;R(b+8|0,1);f=a-4|0;e=c-2|0;S(f-i[(b+16|0)+(e<<2)>>2]|0,b+8|0,c-1|0,1,b+16|0);T(b+8|0,1);d=i[b+8>>2]|1;i[b+8>>2]=d;S(f,b+8|0,e,1,b+16|0);c=e}a=a-4|0;continue}break}E=b+208|0}function Z(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=E-32|0;E=d;e=i[a+28>>2];i[d+16>>2]=e;f=i[a+20>>2];i[d+28>>2]=c;i[d+24>>2]=b;b=f-e|0;i[d+20>>2]=b;e=b+c|0;k=2;b=d+16|0;a:{b:{c:{if(!Y(C(i[a+60>>2],d+16|0,2,d+12|0)|0)){while(1){f=i[d+12>>2];if((f|0)==(e|0)){break c}if((f|0)<=-1){break b}g=i[b+4>>2];h=g>>>0<f>>>0;j=(h<<3)+b|0;g=f-(h?g:0)|0;i[j>>2]=g+i[j>>2];j=(h?12:4)+b|0;i[j>>2]=i[j>>2]-g;e=e-f|0;b=h?b+8|0:b;k=k-h|0;if(!Y(C(i[a+60>>2],b|0,k|0,d+12|0)|0)){continue}break}}if((e|0)!=-1){break b}}b=i[a+44>>2];i[a+28>>2]=b;i[a+20>>2]=b;i[a+16>>2]=b+i[a+48>>2];a=c;break a}i[a+28>>2]=0;i[a+16>>2]=0;i[a+20>>2]=0;i[a>>2]=i[a>>2]|32;a=0;if((k|0)==2){break a}a=c-i[b+4>>2]|0}E=d+32|0;return a|0}function aa(a,b,c){var d=0,e=0;a:{if(!c){break a}d=a+c|0;g[d-1|0]=b;g[a|0]=b;if(c>>>0<3){break a}g[d-2|0]=b;g[a+1|0]=b;g[d-3|0]=b;g[a+2|0]=b;if(c>>>0<7){break a}g[d-4|0]=b;g[a+3|0]=b;if(c>>>0<9){break a}d=a;a=0-a&3;d=d+a|0;e=o(b&255,16843009);i[d>>2]=e;a=c-a&-4;b=a+d|0;i[b-4>>2]=e;if(a>>>0<9){break a}i[d+8>>2]=e;i[d+4>>2]=e;i[b-8>>2]=e;i[b-12>>2]=e;if(a>>>0<25){break a}i[d+24>>2]=e;i[d+20>>2]=e;i[d+16>>2]=e;i[d+12>>2]=e;i[b-16>>2]=e;i[b-20>>2]=e;i[b-24>>2]=e;i[b-28>>2]=e;b=d&4|24;c=a-b|0;if(c>>>0<32){break a}e=ya(e,0,1,1);a=F;b=b+d|0;while(1){i[b+24>>2]=e;d=a;i[b+28>>2]=d;i[b+16>>2]=e;i[b+20>>2]=d;i[b+8>>2]=e;i[b+12>>2]=d;i[b>>2]=e;i[b+4>>2]=d;b=b+32|0;c=c-32|0;if(c>>>0>31){continue}break}}}function la(a,b,c){a:{if(b>>>0>20){break a}b:{switch(b-9|0){case 0:b=i[c>>2];i[c>>2]=b+4;i[a>>2]=i[b>>2];return;case 1:b=i[c>>2];i[c>>2]=b+4;b=i[b>>2];i[a>>2]=b;i[a+4>>2]=b>>31;return;case 2:b=i[c>>2];i[c>>2]=b+4;i[a>>2]=i[b>>2];i[a+4>>2]=0;return;case 3:b=i[c>>2]+7&-8;i[c>>2]=b+8;c=i[b+4>>2];i[a>>2]=i[b>>2];i[a+4>>2]=c;return;case 4:b=i[c>>2];i[c>>2]=b+4;b=h[b>>1];i[a>>2]=b;i[a+4>>2]=b>>31;return;case 5:b=i[c>>2];i[c>>2]=b+4;i[a>>2]=k[b>>1];i[a+4>>2]=0;return;case 6:b=i[c>>2];i[c>>2]=b+4;b=g[b|0];i[a>>2]=b;i[a+4>>2]=b>>31;return;case 7:b=i[c>>2];i[c>>2]=b+4;i[a>>2]=j[b|0];i[a+4>>2]=0;return;case 8:b=i[c>>2]+7&-8;i[c>>2]=b+8;n[a>>3]=n[b>>3];return;case 9:break b;default:break a}}G[0](a,c)}}function ha(a,b){var c=0,d=0,e=0;c=E-208|0;E=c;i[c+204>>2]=b;aa(c+160|0,0,40);i[c+200>>2]=i[c+204>>2];a:{if((ia(0,c+200|0,c+80|0,c+160|0)|0)<0){break a}d=i[a+76>>2]>=0;b=i[a>>2];if(g[a+74|0]<=0){i[a>>2]=b&-33}e=b&32;b:{if(i[a+48>>2]){ia(a,c+200|0,c+80|0,c+160|0);break b}i[a+48>>2]=80;i[a+16>>2]=c+80;i[a+28>>2]=c;i[a+20>>2]=c;b=i[a+44>>2];i[a+44>>2]=c;ia(a,c+200|0,c+80|0,c+160|0);if(!b){break b}G[i[a+36>>2]](a,0,0)|0;i[a+48>>2]=0;i[a+44>>2]=b;i[a+28>>2]=0;i[a+16>>2]=0;i[a+20>>2]=0}i[a>>2]=e|i[a>>2];if(!d){break a}}E=c+208|0}function S(a,b,c,d,e){var f=0,g=0,h=0,j=0;f=E-240|0;E=f;g=i[b>>2];i[f+232>>2]=g;b=i[b+4>>2];i[f>>2]=a;i[f+236>>2]=b;j=1;a:{b:{c:{if(!(b|(g|0)!=1)){b=a;break c}g=a;while(1){h=(c<<2)+e|0;b=g-i[h>>2]|0;if((G[1](b,a)|0)<1){b=g;break c}d:{if(!((c|0)<2|d)){d=i[h-8>>2];h=g-4|0;if((G[1](h,b)|0)>-1){break d}if((G[1](h-d|0,b)|0)>-1){break d}}i[(j<<2)+f>>2]=b;d=U(f+232|0);R(f+232|0,d);j=j+1|0;c=c+d|0;d=0;g=b;if(i[f+236>>2]|i[f+232>>2]!=1){continue}break b}break}b=g;break b}if(d){break a}}V(f,j);Q(b,c,e)}E=f+240|0}function wa(a,b){var c=0,d=0,e=0,f=0,g=0,h=0,i=0;c=b;if(!c){F=0;return(a>>>0)/10|0}g=61-r(c)|0;f=0-g|0;e=g&63;d=e&31;if(e>>>0>=32){e=0;d=c>>>d|0}else{e=c>>>d|0;d=((1<<d)-1&c)<<32-d|a>>>d}f=f&63;c=f&31;if(f>>>0>=32){b=a<<c;a=0}else{b=(1<<c)-1&a>>>32-c|b<<c;a=a<<c}if(g){while(1){c=d<<1|b>>>31;f=c;e=e<<1|d>>>31;c=0-(e+(c>>>0>9)|0)>>31;h=c&10;d=f-h|0;e=e-(f>>>0<h>>>0)|0;b=b<<1|a>>>31;a=i|a<<1;h=c&1;i=h;g=g-1|0;if(g){continue}break}}F=b<<1|a>>>31;return h|a<<1}function da(a,b){a:{if(a){if(b>>>0<=127){break a}b:{if(!i[i[400463]>>2]){if((b&-128)==57216){break a}break b}if(b>>>0<=2047){g[a+1|0]=b&63|128;g[a|0]=b>>>6|192;return 2}if(!((b&-8192)!=57344?b>>>0>=55296:0)){g[a+2|0]=b&63|128;g[a|0]=b>>>12|224;g[a+1|0]=b>>>6&63|128;return 3}if(b-65536>>>0<=1048575){g[a+3|0]=b&63|128;g[a|0]=b>>>18|240;g[a+2|0]=b>>>6&63|128;g[a+1|0]=b>>>12&63|128;return 4}}i[400480]=25;a=-1}else{a=1}return a}g[a|0]=b;return 1}function N(){var a=0,b=0,c=0,d=0,e=0;a=E-1600016|0;E=a;W(a+16|0,1024,16e5);P(a+16|0);while(1){d=c<<2;e=i[d+(a+16|0)>>2];if((e|0)!=i[(a+16|0)+(b<<2)>>2]){b=b+1|0;i[(a+16|0)+(b<<2)>>2]=e}d=i[(a+16|0)+(d|4)>>2];if((d|0)!=i[(a+16|0)+(b<<2)>>2]){b=b+1|0;i[(a+16|0)+(b<<2)>>2]=d}c=c+2|0;if((c|0)!=4e5){continue}break}c=0;if((b|0)>=0){while(1){i[a>>2]=i[(a+16|0)+(c<<2)>>2];qa(a);d=(c|0)!=(b|0);c=c+1|0;if(d){continue}break}}E=a+1600016|0;return 0}function ca(a,b){var c=0;c=(b|0)!=0;a:{b:{c:{if(!b|!(a&3)){break c}while(1){if(!j[a|0]){break b}a=a+1|0;b=b-1|0;c=(b|0)!=0;if(!b){break c}if(a&3){continue}break}}if(!c){break a}}d:{if(!j[a|0]|b>>>0<4){break d}while(1){c=i[a>>2];if((c^-1)&c-16843009&-2139062144){break d}a=a+4|0;b=b-4|0;if(b>>>0>3){continue}break}}if(!b){break a}while(1){if(!j[a|0]){return a}a=a+1|0;b=b-1|0;if(b){continue}break}}return 0}function ga(a,b,c){var d=0,e=0,f=0;a:{d=b;e=i[c+16>>2];if(!e){if(fa(c)){break a}e=i[c+16>>2]}f=i[c+20>>2];if(e-f>>>0<d>>>0){G[i[c+36>>2]](c,a,b)|0;return}b:{if(g[c+75|0]<0){break b}e=b;while(1){d=e;if(!d){break b}e=d-1|0;if(j[e+a|0]!=10){continue}break}if(G[i[c+36>>2]](c,a,d)>>>0<d>>>0){break a}a=a+d|0;b=b-d|0;f=i[c+20>>2]}W(f,a,b);i[c+20>>2]=i[c+20>>2]+b}}function V(a,b){var c=0,d=0,e=0,f=0,g=0,h=0;d=4;e=E-256|0;E=e;a:{if((b|0)<2){break a}h=(b<<2)+a|0;i[h>>2]=e;c=e;while(1){f=d>>>0<256?d:256;W(c,i[a>>2],f);c=0;while(1){g=(c<<2)+a|0;c=c+1|0;W(i[g>>2],i[(c<<2)+a>>2],f);i[g>>2]=i[g>>2]+f;if((b|0)!=(c|0)){continue}break}d=d-f|0;if(!d){break a}c=i[h>>2];continue}}E=e+256|0}function Q(a,b,c){var d=0,e=0,f=0,g=0,h=0,j=0;f=E-240|0;E=f;i[f>>2]=a;g=1;a:{if((b|0)<2){break a}d=a;while(1){d=d-4|0;h=b-2|0;e=d-i[(h<<2)+c>>2]|0;if((G[1](a,e)|0)>=0){if((G[1](a,d)|0)>-1){break a}}j=e;e=(G[1](e,d)|0)>-1;d=e?j:d;i[(g<<2)+f>>2]=d;g=g+1|0;b=e?b-1|0:h;if((b|0)>1){continue}break}}V(f,g);E=f+240|0}function oa(a,b,c){var d=0,e=0,f=0;a:{if(b>>>0<1){d=a;break a}while(1){d=wa(a,b);e=F;f=e;c=c-1|0;g[c|0]=a-ya(d,e,10,0)|48;e=b>>>0>9;a=d;b=f;if(e){continue}break}}if(d){while(1){c=c-1|0;a=(d>>>0)/10|0;g[c|0]=d-o(a,10)|48;b=d>>>0>9;d=a;if(b){continue}break}}return c}function va(a,b,c,d){var e=0,f=0,g=0,h=0,i=0,j=0;e=c>>>16|0;f=a>>>16|0;j=o(e,f);g=c&65535;h=a&65535;i=o(g,h);f=(i>>>16|0)+o(f,g)|0;e=(f&65535)+o(e,h)|0;a=(o(b,c)+j|0)+o(a,d)+(f>>>16)+(e>>>16)|0;b=i&65535|e<<16;F=a;return b}function pa(a,b,c,d,e){var f=0;f=E-256|0;E=f;if(!(e&73728|(c|0)<=(d|0))){c=c-d|0;d=c>>>0<256;aa(f,b&255,d?c:256);if(!d){while(1){ja(a,f,256);c=c-256|0;if(c>>>0>255){continue}break}}ja(a,f,c)}E=f+256|0}function fa(a){var b=0;b=j[a+74|0];g[a+74|0]=b-1|b;b=i[a>>2];if(b&8){i[a>>2]=b|32;return-1}i[a+4>>2]=0;i[a+8>>2]=0;b=i[a+44>>2];i[a+28>>2]=b;i[a+20>>2]=b;i[a+16>>2]=b+i[a+48>>2];return 0}function ka(a){var b=0,c=0,d=0;if(ba(g[i[a>>2]])){while(1){b=i[a>>2];d=g[b|0];i[a>>2]=b+1;c=(o(c,10)+d|0)-48|0;if(ba(g[b+1|0])){continue}break}}return c}function ma(a,b,c,d){if(a|b){while(1){c=c-1|0;g[c|0]=j[(a&15)+1601520|0]|d;a=(b&15)<<28|a>>>4;b=b>>>4|0;if(a|b){continue}break}}return c}function R(a,b){var c=0,d=0;a:{if(b>>>0<=31){d=i[a+4>>2];c=a;break a}b=b-32|0;c=a+4|0}c=i[c>>2];i[a+4>>2]=d>>>b;i[a>>2]=d<<32-b|c>>>b}function T(a,b){var c=0,d=0;a:{if(b>>>0<=31){d=i[a>>2];c=a+4|0;break a}b=b-32|0;c=a}c=i[c>>2];i[a>>2]=d<<b;i[a+4>>2]=c<<b|d>>>32-b}function na(a,b,c){if(a|b){while(1){c=c-1|0;g[c|0]=a&7|48;a=(b&7)<<29|a>>>3;b=b>>>3|0;if(a|b){continue}break}}return c}function ua(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;a=G[a|0](b,c,d,e)|0;D(F|0);return a|0}function U(a){var b=0;b=xa(i[a>>2]-1|0);if(!b){a=xa(i[a+4>>2]);return a?a+32|0:0}return b}function M(a,b){a=a|0;b=b|0;a=i[a>>2];b=i[b>>2];return((a|0)<(b|0)?-1:(a|0)>(b|0))|0}function qa(a){var b=0;b=E-16|0;E=b;i[b+12>>2]=a;ha(i[400257],a);E=b+16|0}function $(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;F=0;return 0}function xa(a){if(a){return 31-r(a-1^a)|0}return 32}function Y(a){if(!a){return 0}i[400480]=a;return-1}function ea(a,b){if(!a){return 0}return da(a,b)}function ja(a,b,c){if(!(j[a|0]&32)){ga(b,c,a)}}function ta(a){a=a|0;a=E-a&-16;E=a;return a|0}function ya(a,b,c,d){a=va(a,b,c,d);return a}
function O(a,b){a=a|0;b=b|0;return N()|0}function ba(a){return a-48>>>0<10}function _(a){a=a|0;return 0}function X(){return 1601920}function sa(a){a=a|0;E=a}function ra(){return E|0}function L(){}
// EMSCRIPTEN_END_FUNCS
var G=c([null,M,_,Z,$]);function H(){return f.byteLength/65536|0}return{"__wasm_call_ctors":L,"main":O,"__indirect_function_table":G,"__errno_location":X,"stackSave":ra,"stackRestore":sa,"stackAlloc":ta,"dynCall_jiji":ua}}return I(K)}
// EMSCRIPTEN_END_ASM




)(asmLibraryArg)},instantiate:function(binary,info){return{then:function(ok){var module=new WebAssembly.Module(binary);ok({"instance":new WebAssembly.Instance(module)})}}},RuntimeError:Error};wasmBinary=[];if(typeof WebAssembly!=="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];assert(func,"Cannot call unknown function "+ident+", make sure it is exported");return func}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string")return UTF8ToString(ret);if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);ret=convertReturnValue(ret);if(stack!==0)stackRestore(stack);return ret}var ALLOC_STACK=1;var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heap,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heap[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heap.subarray&&UTF8Decoder){return UTF8Decoder.decode(heap.subarray(idx,endPtr))}else{var str="";while(idx<endPtr){var u0=heap[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heap[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heap[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heap[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127)++len;else if(u<=2047)len+=2;else if(u<=65535)len+=3;else len+=4}return len}var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{wasmMemory=new WebAssembly.Memory({"initial":INITIAL_MEMORY/65536,"maximum":INITIAL_MEMORY/65536})}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what+="";err(what);ABORT=true;EXITSTATUS=1;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(what);throw e}var memoryInitializer="removeduplicate_runJS_BIG.js.mem";function hasPrefix(str,prefix){return String.prototype.startsWith?str.startsWith(prefix):str.indexOf(prefix)===0}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return hasPrefix(filename,dataURIPrefix)}var fileURIPrefix="file://";function isFileURI(filename){return hasPrefix(filename,fileURIPrefix)}var wasmBinaryFile="removeduplicate_runJS_BIG.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch==="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}else{if(readAsync){return new Promise(function(resolve,reject){readAsync(wasmBinaryFile,function(response){resolve(new Uint8Array(response))},reject)})}}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"env":asmLibraryArg,"wasi_snapshot_preview1":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;runMemoryInitializer();wasmTable=Module["asm"]["__indirect_function_table"];addOnInit(Module["asm"]["__wasm_call_ctors"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiatedSource(output){receiveInstance(output["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){var result=WebAssembly.instantiate(binary,info);return result}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiatedSource,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiatedSource)})})}else{return instantiateArrayBuffer(receiveInstantiatedSource)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}var tempDouble;var tempI64;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback(Module);continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){wasmTable.get(func)()}else{wasmTable.get(func)(callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}function demangle(func){return func}function demangleAll(text){var regex=/\b_Z[\w\d_]+/g;return text.replace(regex,function(x){var y=demangle(x);return x===y?x:y+" ["+x+"]"})}function jsStackTrace(){var error=new Error;if(!error.stack){try{throw new Error}catch(e){error=e}if(!error.stack){return"(no stack trace available)"}}return error.stack.toString()}var runtimeKeepaliveCounter=0;function keepRuntimeAlive(){return noExitRuntime||runtimeKeepaliveCounter>0}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream,curr){var buffer=SYSCALLS.buffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}},varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret},get64:function(low,high){return low}};function _fd_write(fd,iov,iovcnt,pnum){var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){SYSCALLS.printChar(fd,HEAPU8[ptr+j])}num+=len}HEAP32[pnum>>2]=num;return 0}var ASSERTIONS=false;var asmLibraryArg={"emscripten_memcpy_big":_emscripten_memcpy_big,"fd_write":_fd_write,"getTempRet0":getTempRet0,"memory":wasmMemory,"setTempRet0":setTempRet0};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["__wasm_call_ctors"]).apply(null,arguments)};var _main=Module["_main"]=function(){return(_main=Module["_main"]=Module["asm"]["main"]).apply(null,arguments)};var ___errno_location=Module["___errno_location"]=function(){return(___errno_location=Module["___errno_location"]=Module["asm"]["__errno_location"]).apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return(stackSave=Module["stackSave"]=Module["asm"]["stackSave"]).apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return(stackRestore=Module["stackRestore"]=Module["asm"]["stackRestore"]).apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return(stackAlloc=Module["stackAlloc"]=Module["asm"]["stackAlloc"]).apply(null,arguments)};var dynCall_jiji=Module["dynCall_jiji"]=function(){return(dynCall_jiji=Module["dynCall_jiji"]=Module["asm"]["dynCall_jiji"]).apply(null,arguments)};function runMemoryInitializer(){if(!memoryInitializer)return;if(!isDataURI(memoryInitializer)){memoryInitializer=locateFile(memoryInitializer)}if(ENVIRONMENT_IS_NODE||ENVIRONMENT_IS_SHELL){var data=readBinary(memoryInitializer);HEAPU8.set(data,1024)}else{addRunDependency("memory initializer");var applyMemoryInitializer=function(data){if(data.byteLength)data=new Uint8Array(data);HEAPU8.set(data,1024);if(Module["memoryInitializerRequest"])delete Module["memoryInitializerRequest"].response;removeRunDependency("memory initializer")};var doBrowserLoad=function(){readAsync(memoryInitializer,applyMemoryInitializer,function(){var e=new Error("could not load memory initializer "+memoryInitializer);throw e})};if(Module["memoryInitializerRequest"]){var useRequest=function(){var request=Module["memoryInitializerRequest"];var response=request.response;if(request.status!==200&&request.status!==0){console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+request.status+", retrying "+memoryInitializer);doBrowserLoad();return}applyMemoryInitializer(response)};if(Module["memoryInitializerRequest"].response){setTimeout(useRequest,0)}else{Module["memoryInitializerRequest"].addEventListener("load",useRequest)}}else{doBrowserLoad()}}}var calledRun;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}var calledMain=false;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function callMain(args){var entryFunction=Module["_main"];var argc=0;var argv=0;try{var ret=entryFunction(argc,argv);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="unwind"){return}else{var toLog=e;if(e&&typeof e==="object"&&e.stack){toLog=[e,e.stack]}err("exception thrown: "+toLog);quit_(1,e)}}finally{calledMain=true}}function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(shouldRunNow)callMain(args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;function exit(status,implicit){EXITSTATUS=status;if(implicit&&keepRuntimeAlive()&&status===0){return}if(keepRuntimeAlive()){}else{exitRuntime();if(Module["onExit"])Module["onExit"](status);ABORT=true}quit_(status,new ExitStatus(status))}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"])shouldRunNow=false;run();
