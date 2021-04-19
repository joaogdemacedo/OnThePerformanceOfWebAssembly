smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortlexi.c -o Small_dataset/C/sortlexi_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET

mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortlexi.c -o Medium_dataset/C/sortlexi_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortlexi.c -o Big_dataset/C/sortlexi_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET

wasmsmall:
	emcc sortlexi.c -DSMALL_DATASET -o Small_dataset/WASM/sortlexi_runSMALL.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jssmall:
	emcc sortlexi.c -DSMALL_DATASET -o Small_dataset/JS/sortlexi_runSMALL.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

wasmmedium:
	emcc sortlexi.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortlexi_runMEDIUM.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jsmedium:
	emcc sortlexi.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortlexi_runMEDIUM.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

wasmbig:
	emcc sortlexi.c -DBIG_DATASET -o Big_dataset/WASM/sortlexi_runBIG.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jsbig:
	emcc sortlexi.c -DBIG_DATASET -o Big_dataset/JS/sortlexi_runBIG.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortlexi.c -o Small_dataset/C/sortlexi_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortlexi.c -o Medium_dataset/C/sortlexi_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortlexi.c -o Big_dataset/C/sortlexi_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET
	emcc sortlexi.c -DSMALL_DATASET -o Small_dataset/WASM/sortlexi_runWASM_SMALL.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortlexi.c -DSMALL_DATASET -o Small_dataset/JS/sortlexi_runJS_SMALL.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
	emcc sortlexi.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortlexi_runWASM_MEDIUM.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortlexi.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortlexi_runJS_MEDIUM.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
	emcc sortlexi.c -DBIG_DATASET -o Big_dataset/WASM/sortlexi_runWASM_BIG.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortlexi.c -DBIG_DATASET -o Big_dataset/JS/sortlexi_runJS_BIG.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
