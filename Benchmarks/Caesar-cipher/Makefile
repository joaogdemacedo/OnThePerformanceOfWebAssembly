smallcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 caesar-cipher.c -o Small_dataset/C/caesar-cipher_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET


mediumcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 caesar-cipher.c -o Medium_dataset/C/caesar-cipher_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET

bigcompile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 caesar-cipher.c -o Big_dataset/C/caesar-cipher_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET

wasmsmall:
	emcc caesar-cipher.c -DSMALL_DATASET -o Small_dataset/WASM/caesar-cipher_runSMALL.js -O2 -s WASM=1

jssmall:
	emcc caesar-cipher.c -DSMALL_DATASET -o Small_dataset/JS/caesar-cipher_runSMALL.js -O2 -s WASM=0

wasmmedium:
	emcc caesar-cipher.c -DMEDIUM_DATASET -o Medium_dataset/WASM/caesar-cipher_runMEDIUM.js -O2 -s WASM=1

jsmedium:
	emcc caesar-cipher.c -DMEDIUM_DATASET -o Medium_dataset/JS/caesar-cipher_runMEDIUM.js -O2 -s WASM=0

wasmbig:
	emcc caesar-cipher.c -DBIG_DATASET -o Big_dataset/WASM/caesar-cipher_runBIG.js -O2 -s WASM=1

jsbig:
	emcc caesar-cipher.c -DBIG_DATASET -o Big_dataset/JS/caesar-cipher_runBIG.js -O2 -s WASM=0

compileall:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 caesar-cipher.c -o Small_dataset/C/caesar-cipher_runSMALL -lapr-1 -lgomp -lm -DSMALL_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 caesar-cipher.c -o Medium_dataset/C/caesar-cipher_runMEDIUM -lapr-1 -lgomp -lm -DMEDIUM_DATASET
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=native -fopenmp -D_FILE_OFFSET_BITS=64 -I/usr/include/apr-1.0 caesar-cipher.c -o Big_dataset/C/caesar-cipher_runBIG -lapr-1 -lgomp -lm -DBIG_DATASET
	emcc caesar-cipher.c -DSMALL_DATASET -o Small_dataset/WASM/caesar-cipher_runWASM_SMALL.js -O2 -s WASM=1
	emcc caesar-cipher.c -DSMALL_DATASET -o Small_dataset/JS/caesar-cipher_runJS_SMALL.js -O2 -s WASM=0
	emcc caesar-cipher.c -DMEDIUM_DATASET -o Medium_dataset/WASM/caesar-cipher_runWASM_MEDIUM.js -O2 -s WASM=1
	emcc caesar-cipher.c -DMEDIUM_DATASET -o Medium_dataset/JS/caesar-cipher_runJS_MEDIUM.js -O2 -s WASM=0
	emcc caesar-cipher.c -DBIG_DATASET -o Big_dataset/WASM/caesar-cipher_runWASM_BIG.js -O2 -s WASM=1
	emcc caesar-cipher.c -DBIG_DATASET -o Big_dataset/JS/caesar-cipher_runJS_BIG.js -O2 -s WASM=0
