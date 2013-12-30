.PHONY: clean test

STANDALONE := selectn
MOCHAFLAGS ?= --reporter spec

clean:
	@$(RM) -fr node_modules $(STANDALONE).js
	@$(RM) -fr npm-debug.log

$(STANDALONE).js: index.js
	@./node_modules/.bin/browserify --entry $< --outfile $@ --standalone $(STANDALONE)

test: node_modules $(STANDALONE).js
	@echo Running Node.js tests
	@./node_modules/.bin/mocha $(MOCHAFLAGS)
	@echo Running Browser tests
	@./node_modules/.bin/mocha-phantomjs test/index.browser.html

lint:
	@./node_modules/.bin/jsonlint -q package.json
	@./node_modules/.bin/jsonlint -q component.json

package.json: lint

node_modules: package.json
	@npm prune
	@npm install

bower_register:
	@bower register $(STANDALONE).js `node -e "console.log(require('./package.json').repository.url)"`

release: test $(STANDALONE).js
