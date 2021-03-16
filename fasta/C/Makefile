compile:
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  fasta.gcc-9.c -o fasta.gcc-9.gcc_run

raplserver:
	sudo ../../RAPL/raplServer

raplclient:
	sudo modprobe msr
	sudo ../../RAPL/raplClient 10000 fasta1 ./fasta.gcc-9.gcc_run
	sudo ../../RAPL/raplClient 10000 fasta2 ./fasta.gcc-9.gcc_run
	sudo ../../RAPL/raplClient 10000 fasta3 ./fasta.gcc-9.gcc_run

sum:
	sudo python3 ../../RAPL/cleanresults.py fasta

clean:
	rm fasta.gcc-9.gcc_run
	sudo rm fasta1.rapl fasta2.rapl fasta3.rapl