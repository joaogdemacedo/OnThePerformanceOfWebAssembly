smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortbead.c -o Small_dataset/C/sortbead_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET

mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortbead.c -o Medium_dataset/C/sortbead_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortbead.c -o Big_dataset/C/sortbead_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET

wasmsmall:
	emcc sortbead.c -DSMALL_DATASET -o Small_dataset/WASM/sortbead_runSMALL.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jssmall:
	emcc sortbead.c -DSMALL_DATASET -o Small_dataset/JS/sortbead_runSMALL.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

wasmmedium:
	emcc sortbead.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortbead_runMEDIUM.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jsmedium:
	emcc sortbead.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortbead_runMEDIUM.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

wasmbig:
	emcc sortbead.c -DBIG_DATASET -o Big_dataset/WASM/sortbead_runBIG.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jsbig:
	emcc sortbead.c -DBIG_DATASET -o Big_dataset/JS/sortbead_runBIG.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortbead.c -o Small_dataset/C/sortbead_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortbead.c -o Medium_dataset/C/sortbead_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortbead.c -o Big_dataset/C/sortbead_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET
	emcc sortbead.c -DSMALL_DATASET -o Small_dataset/WASM/sortbead_runWASM_SMALL.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortbead.c -DSMALL_DATASET -o Small_dataset/JS/sortbead_runJS_SMALL.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
	emcc sortbead.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortbead_runWASM_MEDIUM.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortbead.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortbead_runJS_MEDIUM.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
	emcc sortbead.c -DBIG_DATASET -o Big_dataset/WASM/sortbead_runWASM_BIG.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortbead.c -DBIG_DATASET -o Big_dataset/JS/sortbead_runJS_BIG.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
