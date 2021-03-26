compile:
	/opt/cheerp/bin/clang -target cheerp C/fasta.c -o JS/fasta_js.js -O3
	/opt/cheerp/bin/clang -target cheerp-wasm C/fasta.c -o WASM/fasta_wasm.js -O3

ctojssamll:
	/opt/cheerp/bin/clang -target cheerp C/fasta.c -o JS/fasta_jsSMALL.js -O3 -DSMALL_DATASET

sum:
	sudo python3 ../RAPL/cleanresults.py fasta

clean:
	sudo rm *.sum
