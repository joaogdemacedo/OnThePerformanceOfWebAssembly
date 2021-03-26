server:
	sudo modprobe msr
	sudo ../../RAPL/raplServer

client:
	sudo modprobe msr
	for number in 1 2 3 4 5 6 7 8 9 10 ; do \
        sudo ../../RAPL/raplClient 10000 fasta$$number "node fasta_wasm.js" ; \
    done

clean:
	sudo rm *.rapl
	sudo rm *.time