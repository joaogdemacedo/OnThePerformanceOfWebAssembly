raplserver:
	sudo modprobe msr
	sudo ../../../../../RAPL/raplServer

raplclient:
	sudo modprobe msr
	for number in 1 2 3 4 5 6 7 8 9 10 ; do \
        sudo ../../../../../RAPL/raplClient 10000 sortingnaturalBIG$$number "node ../sortingnatural_runJS_BIG.js" ; sleep 3 ; \
    done

clean:
	sudo rm *.rapl *.time