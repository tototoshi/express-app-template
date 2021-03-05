.DEFAULT_GOAL := build

.PHONY: fmt build serve clean

fmt:
	npx prettier . --write
build:
	npx tsc
serve: build
	node dist/index.js
clean:
	rm -rf dist/
