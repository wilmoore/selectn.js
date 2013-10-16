.PHONY: clean test

STANDALONE := selectn
MOCHAFLAGS ?= --reporter spec

clean:
	@$(RM) -fr node_modules $(STANDALONE).js
	@$(RM) -fr npm-debug.log

$(STANDALONE).js: index.js
	@./node_modules/.bin/browserify --entry $< --outfile $@ --standalone $(STANDALONE) 

$(STANDALONE).min.js: $(STANDALONE).js
	@$(RM) -rf $TMPDIR/compiler-latest*
	@curl -4# http://closure-compiler.googlecode.com/files/compiler-latest.zip -o $$TMPDIR/compiler-latest.zip
	@unzip -f $$TMPDIR/compiler-latest.zip -d $$TMPDIR
	@java -jar $$TMPDIR/compiler.jar $(STANDALONE).js > $@

test: node_modules $(STANDALONE).js
	@echo Running Node.js tests
	@./node_modules/.bin/mocha $(MOCHAFLAGS)
	@echo Running Browser tests
	@./node_modules/.bin/mocha-phantomjs test/index.browser.html

node_modules: package.json
	@npm prune
	@npm install

package: test $(STANDALONE).min.js
