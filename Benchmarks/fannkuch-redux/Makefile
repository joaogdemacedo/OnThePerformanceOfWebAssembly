smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge -fopenmp fannkuchredux.c -o Small_dataset/C/fannkuchredux_runSMALL -DSMALL_DATASET

mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge -fopenmp fannkuchredux.c -o Medium_dataset/C/fannkuchredux_runMEDIUM -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge -fopenmp fannkuchredux.c -o Big_dataset/C/fannkuchredux_runBIG -DBIG_DATASET

wasmsmall:
	emcc fannkuchredux.c -DSMALL_DATASET -o Small_dataset/WASM/fannkuchredux_runSMALL.js -O2 -s WASM=1

jssmall:
	emcc fannkuchredux.c -DSMALL_DATASET -o Small_dataset/JS/fannkuchredux_runSMALL.js -O2 -s WASM=0

wasmmedium:
	emcc fannkuchredux.c -DMEDIUM_DATASET -o Medium_dataset/WASM/fannkuchredux_runMEDIUM.js -O2 -s WASM=1

jsmedium:
	emcc fannkuchredux.c -DMEDIUM_DATASET -o Medium_dataset/JS/fannkuchredux_runMEDIUM.js -O2 -s WASM=0

wasmbig:
	emcc fannkuchredux.c -DBIG_DATASET -o Big_dataset/WASM/fannkuchredux_runBIG.js -O2 -s WASM=1

jsbig:
	emcc fannkuchredux.c -DBIG_DATASET -o Big_dataset/JS/fannkuchredux_runBIG.js -O2 -s WASM=0

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge -fopenmp fannkuchredux.c -o Small_dataset/C/fannkuchredux_runSMALL -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge -fopenmp fannkuchredux.c -o Medium_dataset/C/fannkuchredux_runMEDIUM -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge -fopenmp fannkuchredux.c -o Big_dataset/C/fannkuchredux_runBIG -DBIG_DATASET
	emcc fannkuchredux.c -DSMALL_DATASET -o Small_dataset/WASM/fannkuchredux_runWASM_SMALL.js -O2 -s WASM=1
	emcc fannkuchredux.c -DSMALL_DATASET -o Small_dataset/JS/fannkuchredux_runJS_SMALL.js -O2 -s WASM=0
	emcc fannkuchredux.c -DMEDIUM_DATASET -o Medium_dataset/WASM/fannkuchredux_runWASM_MEDIUM.js -O2 -s WASM=1
	emcc fannkuchredux.c -DMEDIUM_DATASET -o Medium_dataset/JS/fannkuchredux_runJS_MEDIUM.js -O2 -s WASM=0
	emcc fannkuchredux.c -DBIG_DATASET -o Big_dataset/WASM/fannkuchredux_runWASM_BIG.js -O2 -s WASM=1
	emcc fannkuchredux.c -DBIG_DATASET -o Big_dataset/JS/fannkuchredux_runJS_BIG.js -O2 -s WASM=0
