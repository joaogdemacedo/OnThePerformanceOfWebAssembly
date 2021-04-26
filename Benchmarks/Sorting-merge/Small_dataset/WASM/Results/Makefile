raplserver:
	sudo modprobe msr
	sudo ../../../../../RAPL/raplServer

raplclient:
	sudo modprobe msr
	for number in 1 2 3 4 5 6 7 8 9 10 ; do \
        sudo ../../../../../RAPL/raplClient 1000 sortingmergeSMALL$$number "node ../sortingmerge_runWASM_SMALL.js" ; \
    done

clean:
	sudo rm *.rapl *.time