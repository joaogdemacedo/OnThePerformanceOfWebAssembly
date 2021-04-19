smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingids.c -o Small_dataset/C/sortingids_runSMALL -DSMALL_DATASET

mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingids.c -o Medium_dataset/C/sortingids_runMEDIUM -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingids.c -o Big_dataset/C/sortingids_runBIG -DBIG_DATASET

wasmsmall:
	emcc sortingids.c -DSMALL_DATASET -o Small_dataset/WASM/sortingids_runSMALL.js -O2 -s WASM=1

jssmall:
	emcc sortingids.c -DSMALL_DATASET -o Small_dataset/JS/sortingids_runSMALL.js -O2 -s WASM=0

wasmmedium:
	emcc sortingids.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortingids_runMEDIUM.js -O2 -s WASM=1

jsmedium:
	emcc sortingids.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortingids_runMEDIUM.js -O2 -s WASM=0

wasmbig:
	emcc sortingids.c -DBIG_DATASET -o Big_dataset/WASM/sortingids_runBIG.js -O2 -s WASM=1

jsbig:
	emcc sortingids.c -DBIG_DATASET -o Big_dataset/JS/sortingids_runBIG.js -O2 -s WASM=0

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingids.c -o Small_dataset/C/sortingids_runSMALL -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingids.c -o Medium_dataset/C/sortingids_runMEDIUM -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingids.c -o Big_dataset/C/sortingids_runBIG -DBIG_DATASET
	emcc sortingids.c -DSMALL_DATASET -o Small_dataset/WASM/sortingids_runWASM_SMALL.js -O2 -s WASM=1
	emcc sortingids.c -DSMALL_DATASET -o Small_dataset/JS/sortingids_runJS_SMALL.js -O2 -s WASM=0
	emcc sortingids.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortingids_runWASM_MEDIUM.js -O2 -s WASM=1
	emcc sortingids.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortingids_runJS_MEDIUM.js -O2 -s WASM=0
	emcc sortingids.c -DBIG_DATASET -o Big_dataset/WASM/sortingids_runWASM_BIG.js -O2 -s WASM=1
	emcc sortingids.c -DBIG_DATASET -o Big_dataset/JS/sortingids_runJS_BIG.js -O2 -s WASM=0
