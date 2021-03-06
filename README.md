# OnThePerformanceOfWebAssembly

##Instruções:
usando o exemplo fasta.gcc-9.c
os inputs têm que ser dados dentro do ficheiro

### Compilação

1. Compilar o .c
	/usr/bin/gcc -pipe -Wall -O3 -fomit-frame-pointer -march=ivybridge  fasta.gcc-9.c -o fasta.gcc-9.gcc_run

2. Compilar para JS
	/opt/cheerp/bin/clang -target cheerp fasta.gcc-9.c -o fasta.js -O3

3. Compilar para WASM
	/opt/cheerp/bin/clang -target cheerp-wasm fasta.gcc-9.c -o fasta_vw.js -O3
		com input:
		

### Run

1. Correr o C
	./fasta.gcc-9.gcc_run

2. Correr o JS
	node fasta.js

3. Correr o WASM
	node fasta_vw.js

4. para correr no browser é necessário um html

	fasta_vw.htlm:
	<!DOCTYPE html>
	<html lang="en">
	<head>
    	<script defer src="fasta_vw.js"></script>
	</head>
	<body>
	<h1 id="pagetitle">Compiled!</h1>
	</body>
	</html>

	python3 -m http.server --cgi
	open -a "Google Chrome" http://localhost:8000/fasta_vw.html
	open -a "Safari" http://localhost:8000/fasta_vw.html
	open -a "Firefox" http://localhost:8000/fasta_vw.html

## To Do
conseguir correr vários inputs
organizar por pastas: benchmark -> linguagem




