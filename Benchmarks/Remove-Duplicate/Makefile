smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  removeduplicate.c -o Small_dataset/C/removeduplicate_runSMALL -DSMALL_DATASET

mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  removeduplicate.c -o Medium_dataset/C/removeduplicate_runMEDIUM -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  removeduplicate.c -o Big_dataset/C/removeduplicate_runBIG -DBIG_DATASET

wasmsmall:
	emcc removeduplicate.c -DSMALL_DATASET -o Small_dataset/WASM/removeduplicate_runSMALL.js -O2 -s WASM=1

jssmall:
	emcc removeduplicate.c -DSMALL_DATASET -o Small_dataset/JS/removeduplicate_runSMALL.js -O2 -s WASM=0

wasmmedium:
	emcc removeduplicate.c -DMEDIUM_DATASET -o Medium_dataset/WASM/removeduplicate_runMEDIUM.js -O2 -s WASM=1

jsmedium:
	emcc removeduplicate.c -DMEDIUM_DATASET -o Medium_dataset/JS/removeduplicate_runMEDIUM.js -O2 -s WASM=0

wasmbig:
	emcc removeduplicate.c -DBIG_DATASET -o Big_dataset/WASM/removeduplicate_runBIG.js -O2 -s WASM=1

jsbig:
	emcc removeduplicate.c -DBIG_DATASET -o Big_dataset/JS/removeduplicate_runBIG.js -O2 -s WASM=0

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  removeduplicate.c -o Small_dataset/C/removeduplicate_runSMALL -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  removeduplicate.c -o Medium_dataset/C/removeduplicate_runMEDIUM -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  removeduplicate.c -o Big_dataset/C/removeduplicate_runBIG -DBIG_DATASET
	emcc removeduplicate.c -DSMALL_DATASET -o Small_dataset/WASM/removeduplicate_runWASM_SMALL.js -O2 -s WASM=1
	emcc removeduplicate.c -DSMALL_DATASET -o Small_dataset/JS/removeduplicate_runJS_SMALL.js -O2 -s WASM=0
	emcc removeduplicate.c -DMEDIUM_DATASET -o Medium_dataset/WASM/removeduplicate_runWASM_MEDIUM.js -O2 -s WASM=1
	emcc removeduplicate.c -DMEDIUM_DATASET -o Medium_dataset/JS/removeduplicate_runJS_MEDIUM.js -O2 -s WASM=0
	emcc removeduplicate.c -DBIG_DATASET -o Big_dataset/WASM/removeduplicate_runWASM_BIG.js -O2 -s WASM=1
	emcc removeduplicate.c -DBIG_DATASET -o Big_dataset/JS/removeduplicate_runJS_BIG.js -O2 -s WASM=0
