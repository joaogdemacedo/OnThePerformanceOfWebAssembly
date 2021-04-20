smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortcircle.c -o Small_dataset/C/sortcircle_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET

mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortcircle.c -o Medium_dataset/C/sortcircle_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortcircle.c -o Big_dataset/C/sortcircle_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET

wasmsmall:
	emcc sortcircle.c -DSMALL_DATASET -o Small_dataset/WASM/sortcircle_runSMALL.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jssmall:
	emcc sortcircle.c -DSMALL_DATASET -o Small_dataset/JS/sortcircle_runSMALL.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

wasmmedium:
	emcc sortcircle.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortcircle_runMEDIUM.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jsmedium:
	emcc sortcircle.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortcircle_runMEDIUM.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

wasmbig:
	emcc sortcircle.c -DBIG_DATASET -o Big_dataset/WASM/sortcircle_runBIG.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jsbig:
	emcc sortcircle.c -DBIG_DATASET -o Big_dataset/JS/sortcircle_runBIG.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortcircle.c -o Small_dataset/C/sortcircle_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortcircle.c -o Medium_dataset/C/sortcircle_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortcircle.c -o Big_dataset/C/sortcircle_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET
	emcc sortcircle.c -DSMALL_DATASET -o Small_dataset/WASM/sortcircle_runWASM_SMALL.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortcircle.c -DSMALL_DATASET -o Small_dataset/JS/sortcircle_runJS_SMALL.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
	emcc sortcircle.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortcircle_runWASM_MEDIUM.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortcircle.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortcircle_runJS_MEDIUM.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
	emcc sortcircle.c -DBIG_DATASET -o Big_dataset/WASM/sortcircle_runWASM_BIG.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortcircle.c -DBIG_DATASET -o Big_dataset/JS/sortcircle_runJS_BIG.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
