raplserver:
	sudo modprobe msr
	sudo ../../../../../RAPL/raplServer

raplclient:
	sudo modprobe msr
	for number in 1 2 3 4 5 ; do \
        sudo ../../../../../RAPL/raplClient 10000 fastaSMALL$$number ../fasta.gcc-2.gcc_runSMALL ; \
    done

clean:
	sudo rm *.rapl *.time