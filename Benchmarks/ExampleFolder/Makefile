smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  example.c -o Small_dataset/C/example_runSMALL -DSMALL_DATASET

mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  example.c -o Medium_dataset/C/example_runMEDIUM -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  example.c -o Big_dataset/C/example_runBIG -DBIG_DATASET

wasmsmall:
	emcc example.c -DSMALL_DATASET -o Small_dataset/WASM/example_runSMALL.js -O2 -s WASM=1

jssmall:
	emcc example.c -DSMALL_DATASET -o Small_dataset/JS/example_runSMALL.js -O2 -s WASM=0

wasmmedium:
	emcc example.c -DMEDIUM_DATASET -o Medium_dataset/WASM/example_runMEDIUM.js -O2 -s WASM=1

jsmedium:
	emcc example.c -DMEDIUM_DATASET -o Medium_dataset/JS/example_runMEDIUM.js -O2 -s WASM=0

wasmbig:
	emcc example.c -DBIG_DATASET -o Big_dataset/WASM/example_runBIG.js -O2 -s WASM=1

jsbig:
	emcc example.c -DBIG_DATASET -o Big_dataset/JS/example_runBIG.js -O2 -s WASM=0

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  example.c -o Small_dataset/C/example_runSMALL -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  example.c -o Medium_dataset/C/example_runMEDIUM -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  example.c -o Big_dataset/C/example_runBIG -DBIG_DATASET
	source ../../emsdk/emsdk_env.sh
	emcc example.c -DSMALL_DATASET -o Small_dataset/WASM/example_runWASM_SMALL.js -O2 -s WASM=1
	emcc example.c -DSMALL_DATASET -o Small_dataset/JS/example_runJS_SMALL.js -O2 -s WASM=0
	emcc example.c -DMEDIUM_DATASET -o Medium_dataset/WASM/example_runWASM_MEDIUM.js -O2 -s WASM=1
	emcc example.c -DMEDIUM_DATASET -o Medium_dataset/JS/example_runJS_MEDIUM.js -O2 -s WASM=0
	emcc example.c -DBIG_DATASET -o Big_dataset/WASM/example_runWASM_BIG.js -O2 -s WASM=1
	emcc example.c -DBIG_DATASET -o Big_dataset/JS/example_runJS_BIG.js -O2 -s WASM=0
