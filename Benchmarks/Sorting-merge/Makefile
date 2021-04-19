smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingmerge.c -o Small_dataset/C/sortingmerge_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET

mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingmerge.c -o Medium_dataset/C/sortingmerge_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingmerge.c -o Big_dataset/C/sortingmerge_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET

wasmsmall:
	emcc sortingmerge.c -DSMALL_DATASET -o Small_dataset/WASM/sortingmerge_runSMALL.js -O2 -s WASM=1

jssmall:
	emcc sortingmerge.c -DSMALL_DATASET -o Small_dataset/JS/sortingmerge_runSMALL.js -O2 -s WASM=0

wasmmedium:
	emcc sortingmerge.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortingmerge_runMEDIUM.js -O2 -s WASM=1

jsmedium:
	emcc sortingmerge.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortingmerge_runMEDIUM.js -O2 -s WASM=0

wasmbig:
	emcc sortingmerge.c -DBIG_DATASET -o Big_dataset/WASM/sortingmerge_runBIG.js -O2 -s WASM=1

jsbig:
	emcc sortingmerge.c -DBIG_DATASET -o Big_dataset/JS/sortingmerge_runBIG.js -O2 -s WASM=0

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingmerge.c -o Small_dataset/C/sortingmerge_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingmerge.c -o Medium_dataset/C/sortingmerge_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingmerge.c -o Big_dataset/C/sortingmerge_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET
	emcc sortingmerge.c -DSMALL_DATASET -o Small_dataset/WASM/sortingmerge_runWASM_SMALL.js -O2 -s WASM=1
	emcc sortingmerge.c -DSMALL_DATASET -o Small_dataset/JS/sortingmerge_runJS_SMALL.js -O2 -s WASM=0
	emcc sortingmerge.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortingmerge_runWASM_MEDIUM.js -O2 -s WASM=1
	emcc sortingmerge.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortingmerge_runJS_MEDIUM.js -O2 -s WASM=0
	emcc sortingmerge.c -DBIG_DATASET -o Big_dataset/WASM/sortingmerge_runWASM_BIG.js -O2 -s WASM=1
	emcc sortingmerge.c -DBIG_DATASET -o Big_dataset/JS/sortingmerge_runJS_BIG.js -O2 -s WASM=0
