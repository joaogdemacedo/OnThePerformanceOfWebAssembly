raplserver:
	sudo modprobe msr
	sudo ../../../../../RAPL/raplServer

raplclient:
	sudo modprobe msr
	xdg-settings set default-web-browser firefox.desktop
	for number in 1 2 3 4 5; do \
		sleep 3;sudo ../../../../../RAPL/raplClient 10000 examplerom$$number "sudo -u diguest xdg-open ../../index.html";\
    done