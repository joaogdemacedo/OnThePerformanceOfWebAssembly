smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingnatural.c -o Small_dataset/C/sortingnatural_runSMALL -DSMALL_DATASET

mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingnatural.c -o Medium_dataset/C/sortingnatural_runMEDIUM -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingnatural.c -o Big_dataset/C/sortingnatural_runBIG -DBIG_DATASET

wasmsmall:
	emcc sortingnatural.c -DSMALL_DATASET -o Small_dataset/WASM/sortingnatural_runSMALL.js -O2 -s WASM=1

jssmall:
	emcc sortingnatural.c -DSMALL_DATASET -o Small_dataset/JS/sortingnatural_runSMALL.js -O2 -s WASM=0

wasmmedium:
	emcc sortingnatural.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortingnatural_runMEDIUM.js -O2 -s WASM=1

jsmedium:
	emcc sortingnatural.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortingnatural_runMEDIUM.js -O2 -s WASM=0

wasmbig:
	emcc sortingnatural.c -DBIG_DATASET -o Big_dataset/WASM/sortingnatural_runBIG.js -O2 -s WASM=1

jsbig:
	emcc sortingnatural.c -DBIG_DATASET -o Big_dataset/JS/sortingnatural_runBIG.js -O2 -s WASM=0

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingnatural.c -o Small_dataset/C/sortingnatural_runSMALL -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingnatural.c -o Medium_dataset/C/sortingnatural_runMEDIUM -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  sortingnatural.c -o Big_dataset/C/sortingnatural_runBIG -DBIG_DATASET
	emcc sortingnatural.c -DSMALL_DATASET -o Small_dataset/WASM/sortingnatural_runWASM_SMALL.js -O2 -s WASM=1
	emcc sortingnatural.c -DSMALL_DATASET -o Small_dataset/JS/sortingnatural_runJS_SMALL.js -O2 -s WASM=0
	emcc sortingnatural.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortingnatural_runWASM_MEDIUM.js -O2 -s WASM=1
	emcc sortingnatural.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortingnatural_runJS_MEDIUM.js -O2 -s WASM=0
	emcc sortingnatural.c -DBIG_DATASET -o Big_dataset/WASM/sortingnatural_runWASM_BIG.js -O2 -s WASM=1
	emcc sortingnatural.c -DBIG_DATASET -o Big_dataset/JS/sortingnatural_runJS_BIG.js -O2 -s WASM=0
