raplserver:
	sudo modprobe msr
	sudo ../../../../../RAPL/raplServer

raplclient:
	sudo modprobe msr
	for number in 1 2 3 4 5 ; do \
        sudo ../../../../../RAPL/raplClient 1000 sortingquickBIG$$number "node ../sortingquick_runJS_BIG.js" ; \
    done

clean:
	sudo rm *.rapl *.time