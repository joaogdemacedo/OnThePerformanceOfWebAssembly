import sys, os

path = '.'

def main():
  for root, dirs, files in os.walk(path):
  	print('Checking ' + root)
  	print(dirs)
  	print(files)
  	makefile = os.path.join(root, "Makefile")
  	print(makefile)

main()