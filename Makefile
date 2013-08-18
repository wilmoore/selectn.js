.PHONY: clean test

STANDALONE := selectn
MOCHAFLAGS ?= --reporter spec

clean:
	@$(RM) -fr node_modules $(STANDALONE).js

$(STANDALONE).js: index.js
	@./node_modules/.bin/browserify  --entry $< --outfile $@ --standalone $(STANDALONE) 

test: node_modules
	@./node_modules/.bin/mocha $(MOCHAFLAGS)

node_modules: package.json
	@npm prune
	@npm install

package: test $(STANDALONE).js
