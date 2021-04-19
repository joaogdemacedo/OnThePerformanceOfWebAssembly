raplserver:
	sudo modprobe msr
	sudo ../../../../../RAPL/raplServer

raplclient:
	sudo modprobe msr
	for number in 1 2 3 4 5 ; do \
        sudo ../../../../../RAPL/raplClient 10000 sortbeadBIG$$number "node ../sortbead_runJS_BIG.js" ; \
    done

clean:
	sudo rm *.rapl *.time