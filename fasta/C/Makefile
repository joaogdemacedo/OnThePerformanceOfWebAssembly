compile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  fasta.c -o fasta

small:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  fasta.c -o fastaSMALL -DSMALL_DATASET

big:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  fasta.c -o fastaBIG -DBIG_DATASET

server:
	sudo modprobe msr
	sudo ../../RAPL/raplServer

client:
	sudo modprobe msr
	for number in 1 2 3 4 5 6 7 8 9 10 ; do \
        sudo ../../RAPL/raplClient 10000 fasta$$number ./fasta ; \
    done

clean:
	rm fasta
	sudo rm *.rapl
	sudo rm *.time