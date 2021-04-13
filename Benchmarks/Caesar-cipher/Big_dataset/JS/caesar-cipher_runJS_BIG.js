var Module=typeof Module!=="undefined"?Module:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string";ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;var nodeFS;var nodePath;if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=require("path").dirname(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}read_=function shell_read(filename,binary){if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);return nodeFS["readFileSync"](filename,binary?null:"utf8")};readBinary=function readBinary(filename){var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/")}arguments_=process["argv"].slice(2);if(typeof module!=="undefined"){module["exports"]=Module}process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",abort);quit_=function(status){process["exit"](status)};Module["inspect"]=function(){return"[Emscripten Module object]"}}else if(ENVIRONMENT_IS_SHELL){if(typeof read!="undefined"){read_=function shell_read(f){return read(f)}}readBinary=function readBinary(f){var data;if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){arguments_=scriptArgs}else if(typeof arguments!="undefined"){arguments_=arguments}if(typeof quit==="function"){quit_=function(status){quit(status)}}if(typeof print!=="undefined"){if(typeof console==="undefined")console={};console.log=print;console.warn=console.error=typeof printErr!=="undefined"?printErr:print}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!=="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var STACK_ALIGN=16;function warnOnce(text){if(!warnOnce.shown)warnOnce.shown={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;err(text)}}function convertJsFunctionToWasm(func,sig){return func}var freeTableIndexes=[];var functionsInTableMap;function getEmptyTableSlot(){if(freeTableIndexes.length){return freeTableIndexes.pop()}try{wasmTable.grow(1)}catch(err){if(!(err instanceof RangeError)){throw err}throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return wasmTable.length-1}function addFunctionWasm(func,sig){if(!functionsInTableMap){functionsInTableMap=new WeakMap;for(var i=0;i<wasmTable.length;i++){var item=wasmTable.get(i);if(item){functionsInTableMap.set(item,i)}}}if(functionsInTableMap.has(func)){return functionsInTableMap.get(func)}var ret=getEmptyTableSlot();try{wasmTable.set(ret,func)}catch(err){if(!(err instanceof TypeError)){throw err}var wrapped=convertJsFunctionToWasm(func,sig);wasmTable.set(ret,wrapped)}functionsInTableMap.set(func,ret);return ret}var tempRet0=0;var setTempRet0=function(value){tempRet0=value};var getTempRet0=function(){return tempRet0};var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;var WebAssembly={Memory:function(opts){this.buffer=new ArrayBuffer(opts["initial"]*65536)},Module:function(binary){},Instance:function(module,info){this.exports=(
// EMSCRIPTEN_START_ASM
function instantiate(K){function c(d){d.set=function(a,b){this[a]=b};d.get=function(a){return this[a]};return d}function I(J){var e=J.memory;var f=e.buffer;var g=new Int8Array(f);var h=new Int16Array(f);var i=new Int32Array(f);var j=new Uint8Array(f);var k=new Uint16Array(f);var l=new Uint32Array(f);var m=new Float32Array(f);var n=new Float64Array(f);var o=Math.imul;var p=Math.fround;var q=Math.abs;var r=Math.clz32;var s=Math.min;var t=Math.max;var u=Math.floor;var v=Math.ceil;var w=Math.trunc;var x=Math.sqrt;var y=J.abort;var z=NaN;var A=Infinity;var B=J.emscripten_memcpy_big;var C=J.fd_write;var D=J.setTempRet0;var E=5884336;var F=0;
// EMSCRIPTEN_START_FUNCS
function R(a,b,c){var d=0,e=0,f=0;if(c>>>0>=512){B(a|0,b|0,c|0)|0;return a}e=a+c|0;a:{if(!((a^b)&3)){b:{if((c|0)<1){c=a;break b}if(!(a&3)){c=a;break b}c=a;while(1){g[c|0]=j[b|0];b=b+1|0;c=c+1|0;if(e>>>0<=c>>>0){break b}if(c&3){continue}break}}d=e&-4;c:{if(d>>>0<64){break c}f=d+-64|0;if(f>>>0<c>>>0){break c}while(1){i[c>>2]=i[b>>2];i[c+4>>2]=i[b+4>>2];i[c+8>>2]=i[b+8>>2];i[c+12>>2]=i[b+12>>2];i[c+16>>2]=i[b+16>>2];i[c+20>>2]=i[b+20>>2];i[c+24>>2]=i[b+24>>2];i[c+28>>2]=i[b+28>>2];i[c+32>>2]=i[b+32>>2];i[c+36>>2]=i[b+36>>2];i[c+40>>2]=i[b+40>>2];i[c+44>>2]=i[b+44>>2];i[c+48>>2]=i[b+48>>2];i[c+52>>2]=i[b+52>>2];i[c+56>>2]=i[b+56>>2];i[c+60>>2]=i[b+60>>2];b=b- -64|0;c=c- -64|0;if(f>>>0>=c>>>0){continue}break}}if(c>>>0>=d>>>0){break a}while(1){i[c>>2]=i[b>>2];b=b+4|0;c=c+4|0;if(d>>>0>c>>>0){continue}break}break a}if(e>>>0<4){c=a;break a}d=e-4|0;if(d>>>0<a>>>0){c=a;break a}c=a;while(1){g[c|0]=j[b|0];g[c+1|0]=j[b+1|0];g[c+2|0]=j[b+2|0];g[c+3|0]=j[b+3|0];b=b+4|0;c=c+4|0;if(d>>>0>=c>>>0){continue}break}}if(c>>>0<e>>>0){while(1){g[c|0]=j[b|0];b=b+1|0;c=c+1|0;if((e|0)!=(c|0)){continue}break}}return a}function U(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=E-32|0;E=d;e=i[a+28>>2];i[d+16>>2]=e;f=i[a+20>>2];i[d+28>>2]=c;i[d+24>>2]=b;b=f-e|0;i[d+20>>2]=b;e=b+c|0;k=2;b=d+16|0;a:{b:{c:{if(!T(C(i[a+60>>2],d+16|0,2,d+12|0)|0)){while(1){f=i[d+12>>2];if((f|0)==(e|0)){break c}if((f|0)<=-1){break b}g=i[b+4>>2];h=g>>>0<f>>>0;j=(h<<3)+b|0;g=f-(h?g:0)|0;i[j>>2]=g+i[j>>2];j=(h?12:4)+b|0;i[j>>2]=i[j>>2]-g;e=e-f|0;b=h?b+8|0:b;k=k-h|0;if(!T(C(i[a+60>>2],b|0,k|0,d+12|0)|0)){continue}break}}if((e|0)!=-1){break b}}b=i[a+44>>2];i[a+28>>2]=b;i[a+20>>2]=b;i[a+16>>2]=b+i[a+48>>2];a=c;break a}i[a+28>>2]=0;i[a+16>>2]=0;i[a+20>>2]=0;i[a>>2]=i[a>>2]|32;a=0;if((k|0)==2){break a}a=c-i[b+4>>2]|0}E=d+32|0;return a|0}function M(){var a=0,b=0,c=0,d=0,e=0;a=E-639168|0;E=a;a:{c=R(a,1088,639161);d=aa(c);if((d|0)<1){break a}a=0;b=116;while(1){b=b<<24>>24;if(O(b)){g[a+c|0]=j[i[(Q(b)<<2)+1080>>2]+((P(b)-85|0)%26|0)|0]}a=a+1|0;if((d|0)==(a|0)){break a}b=j[a+c|0];continue}}$(c);d=aa(c);if((d|0)>=1){a=0;while(1){e=a+c|0;b=g[e|0];if(O(b)){g[e|0]=j[i[(Q(b)<<2)+1080>>2]+((P(b)-85|0)%26|0)|0]}a=a+1|0;if((d|0)!=(a|0)){continue}break}}$(c);E=c+639168|0;return 0}function Y(a,b,c){var d=0,e=0,f=0;f=i[c+16>>2];a:{if(f){d=f}else{if(X(c)){break a}d=i[c+16>>2]}f=i[c+20>>2];if(d-f>>>0<b>>>0){return G[i[c+36>>2]](c,a,b)|0}b:{if(g[c+75|0]<0){break b}d=b;while(1){e=d;if(!e){e=0;break b}d=e-1|0;if(j[d+a|0]!=10){continue}break}d=G[i[c+36>>2]](c,a,e)|0;if(d>>>0<e>>>0){break a}a=a+e|0;b=b-e|0;f=i[c+20>>2]}R(f,a,b);i[c+20>>2]=i[c+20>>2]+b;d=b+e|0}return d}function aa(a){var b=0,c=0,d=0;a:{b:{b=a;if(!(b&3)){break b}if(!j[a|0]){return 0}while(1){b=b+1|0;if(!(b&3)){break b}if(j[b|0]){continue}break}break a}while(1){c=b;b=b+4|0;d=i[c>>2];if(!((d^-1)&d-16843009&-2139062144)){continue}break}if(!(d&255)){return c-a|0}while(1){d=j[c+1|0];b=c+1|0;c=b;if(d){continue}break}}return b-a|0}function _(a){var b=0,c=0,d=0;c=E-16|0;E=c;g[c+15|0]=10;b=i[a+16>>2];a:{if(!b){if(X(a)){break a}b=i[a+16>>2]}d=b;b=i[a+20>>2];if(!(g[a+75|0]==10|d>>>0<=b>>>0)){i[a+20>>2]=b+1;g[b|0]=10;break a}if((G[i[a+36>>2]](a,c+15|0,1)|0)!=1){break a}}E=c+16|0}function $(a){var b=0,c=0;b=i[160063];c=a;a=aa(a);a:{if((((Z(c,a,b)|0)!=(a|0)?-1:0)|0)<0){break a}b:{if(j[b+75|0]==10){break b}a=i[b+20>>2];if(a>>>0>=l[b+16>>2]){break b}i[b+20>>2]=a+1;g[a|0]=10;break a}_(b)}}function X(a){var b=0;b=j[a+74|0];g[a+74|0]=b-1|b;b=i[a>>2];if(b&8){i[a>>2]=b|32;return-1}i[a+4>>2]=0;i[a+8>>2]=0;b=i[a+44>>2];i[a+28>>2]=b;i[a+20>>2]=b;i[a+16>>2]=b+i[a+48>>2];return 0}function Z(a,b,c){var d=0,e=0;d=b;e=d;a:{if(i[c+76>>2]<=-1){a=Y(a,d,c);break a}a=Y(a,d,c)}if((e|0)==(a|0)){return b}return a}function ea(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;a=G[a|0](b,c,d,e)|0;D(F|0);return a|0}
function W(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;F=0;return 0}function T(a){if(!a){return 0}i[160100]=a;return-1}function da(a){a=a|0;a=E-a&-16;E=a;return a|0}function N(a,b){a=a|0;b=b|0;return M()|0}function O(a){return(a|32)-97>>>0<26}function Q(a){return a-65>>>0<26}function P(a){return Q(a)?a|32:a}function V(a){a=a|0;return 0}function S(){return 640400}function ca(a){a=a|0;E=a}function ba(){return E|0}function L(){}
// EMSCRIPTEN_END_FUNCS
var G=c([null,V,U,W]);function H(){return f.byteLength/65536|0}return{"__wasm_call_ctors":L,"main":N,"__indirect_function_table":G,"__errno_location":S,"stackSave":ba,"stackRestore":ca,"stackAlloc":da,"dynCall_jiji":ea}}return I(K)}
// EMSCRIPTEN_END_ASM




)(asmLibraryArg)},instantiate:function(binary,info){return{then:function(ok){var module=new WebAssembly.Module(binary);ok({"instance":new WebAssembly.Instance(module)})}}},RuntimeError:Error};wasmBinary=[];if(typeof WebAssembly!=="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];assert(func,"Cannot call unknown function "+ident+", make sure it is exported");return func}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string")return UTF8ToString(ret);if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);ret=convertReturnValue(ret);if(stack!==0)stackRestore(stack);return ret}var ALLOC_STACK=1;var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heap,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heap[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heap.subarray&&UTF8Decoder){return UTF8Decoder.decode(heap.subarray(idx,endPtr))}else{var str="";while(idx<endPtr){var u0=heap[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heap[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heap[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heap[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127)++len;else if(u<=2047)len+=2;else if(u<=65535)len+=3;else len+=4}return len}var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{wasmMemory=new WebAssembly.Memory({"initial":INITIAL_MEMORY/65536,"maximum":INITIAL_MEMORY/65536})}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what+="";err(what);ABORT=true;EXITSTATUS=1;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(what);throw e}var memoryInitializer="caesar-cipher_runJS_BIG.js.mem";function hasPrefix(str,prefix){return String.prototype.startsWith?str.startsWith(prefix):str.indexOf(prefix)===0}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return hasPrefix(filename,dataURIPrefix)}var fileURIPrefix="file://";function isFileURI(filename){return hasPrefix(filename,fileURIPrefix)}var wasmBinaryFile="caesar-cipher_runJS_BIG.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch==="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}else{if(readAsync){return new Promise(function(resolve,reject){readAsync(wasmBinaryFile,function(response){resolve(new Uint8Array(response))},reject)})}}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"env":asmLibraryArg,"wasi_snapshot_preview1":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;runMemoryInitializer();wasmTable=Module["asm"]["__indirect_function_table"];addOnInit(Module["asm"]["__wasm_call_ctors"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiatedSource(output){receiveInstance(output["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){var result=WebAssembly.instantiate(binary,info);return result}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiatedSource,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiatedSource)})})}else{return instantiateArrayBuffer(receiveInstantiatedSource)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}var tempDouble;var tempI64;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback(Module);continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){wasmTable.get(func)()}else{wasmTable.get(func)(callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}function demangle(func){return func}function demangleAll(text){var regex=/\b_Z[\w\d_]+/g;return text.replace(regex,function(x){var y=demangle(x);return x===y?x:y+" ["+x+"]"})}function jsStackTrace(){var error=new Error;if(!error.stack){try{throw new Error}catch(e){error=e}if(!error.stack){return"(no stack trace available)"}}return error.stack.toString()}var runtimeKeepaliveCounter=0;function keepRuntimeAlive(){return noExitRuntime||runtimeKeepaliveCounter>0}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream,curr){var buffer=SYSCALLS.buffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}},varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret},get64:function(low,high){return low}};function _fd_write(fd,iov,iovcnt,pnum){var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){SYSCALLS.printChar(fd,HEAPU8[ptr+j])}num+=len}HEAP32[pnum>>2]=num;return 0}var ASSERTIONS=false;var asmLibraryArg={"emscripten_memcpy_big":_emscripten_memcpy_big,"fd_write":_fd_write,"getTempRet0":getTempRet0,"memory":wasmMemory,"setTempRet0":setTempRet0};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["__wasm_call_ctors"]).apply(null,arguments)};var _main=Module["_main"]=function(){return(_main=Module["_main"]=Module["asm"]["main"]).apply(null,arguments)};var ___errno_location=Module["___errno_location"]=function(){return(___errno_location=Module["___errno_location"]=Module["asm"]["__errno_location"]).apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return(stackSave=Module["stackSave"]=Module["asm"]["stackSave"]).apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return(stackRestore=Module["stackRestore"]=Module["asm"]["stackRestore"]).apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return(stackAlloc=Module["stackAlloc"]=Module["asm"]["stackAlloc"]).apply(null,arguments)};var dynCall_jiji=Module["dynCall_jiji"]=function(){return(dynCall_jiji=Module["dynCall_jiji"]=Module["asm"]["dynCall_jiji"]).apply(null,arguments)};function runMemoryInitializer(){if(!memoryInitializer)return;if(!isDataURI(memoryInitializer)){memoryInitializer=locateFile(memoryInitializer)}if(ENVIRONMENT_IS_NODE||ENVIRONMENT_IS_SHELL){var data=readBinary(memoryInitializer);HEAPU8.set(data,1024)}else{addRunDependency("memory initializer");var applyMemoryInitializer=function(data){if(data.byteLength)data=new Uint8Array(data);HEAPU8.set(data,1024);if(Module["memoryInitializerRequest"])delete Module["memoryInitializerRequest"].response;removeRunDependency("memory initializer")};var doBrowserLoad=function(){readAsync(memoryInitializer,applyMemoryInitializer,function(){var e=new Error("could not load memory initializer "+memoryInitializer);throw e})};if(Module["memoryInitializerRequest"]){var useRequest=function(){var request=Module["memoryInitializerRequest"];var response=request.response;if(request.status!==200&&request.status!==0){console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+request.status+", retrying "+memoryInitializer);doBrowserLoad();return}applyMemoryInitializer(response)};if(Module["memoryInitializerRequest"].response){setTimeout(useRequest,0)}else{Module["memoryInitializerRequest"].addEventListener("load",useRequest)}}else{doBrowserLoad()}}}var calledRun;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}var calledMain=false;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function callMain(args){var entryFunction=Module["_main"];var argc=0;var argv=0;try{var ret=entryFunction(argc,argv);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="unwind"){return}else{var toLog=e;if(e&&typeof e==="object"&&e.stack){toLog=[e,e.stack]}err("exception thrown: "+toLog);quit_(1,e)}}finally{calledMain=true}}function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(shouldRunNow)callMain(args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;function exit(status,implicit){EXITSTATUS=status;if(implicit&&keepRuntimeAlive()&&status===0){return}if(keepRuntimeAlive()){}else{exitRuntime();if(Module["onExit"])Module["onExit"](status);ABORT=true}quit_(status,new ExitStatus(status))}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"])shouldRunNow=false;run();
