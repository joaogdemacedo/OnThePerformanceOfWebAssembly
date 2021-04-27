smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingquick.c -o Small_dataset/C/sortingquick_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET

mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingquick.c -o Medium_dataset/C/sortingquick_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingquick.c -o Big_dataset/C/sortingquick_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET

wasmsmall:
	emcc sortingquick.c -DSMALL_DATASET -o Small_dataset/WASM/sortingquick_runSMALL.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jssmall:
	emcc sortingquick.c -DSMALL_DATASET -o Small_dataset/JS/sortingquick_runSMALL.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

wasmmedium:
	emcc sortingquick.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortingquick_runMEDIUM.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1

jsmedium:
	emcc sortingquick.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortingquick_runMEDIUM.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

wasmbig:
	emcc sortingquick.c -DBIG_DATASET -o Big_dataset/WASM/sortingquick_runBIG.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
 
jsbig:
	emcc sortingquick.c -DBIG_DATASET -o Big_dataset/JS/sortingquick_runBIG.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingquick.c -o Small_dataset/C/sortingquick_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingquick.c -o Medium_dataset/C/sortingquick_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 sortingquick.c -o Big_dataset/C/sortingquick_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET
	emcc sortingquick.c -DSMALL_DATASET -o Small_dataset/WASM/sortingquick_runWASM_SMALL.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortingquick.c -DSMALL_DATASET -o Small_dataset/JS/sortingquick_runJS_SMALL.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
	emcc sortingquick.c -DMEDIUM_DATASET -o Medium_dataset/WASM/sortingquick_runWASM_MEDIUM.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortingquick.c -DMEDIUM_DATASET -o Medium_dataset/JS/sortingquick_runJS_MEDIUM.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
	emcc sortingquick.c -DBIG_DATASET -o Big_dataset/WASM/sortingquick_runWASM_BIG.js -O2 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1
	emcc sortingquick.c -DBIG_DATASET -o Big_dataset/JS/sortingquick_runJS_BIG.js -O2 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1
