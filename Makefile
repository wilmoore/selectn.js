COMPONENT  ?= $(shell which component)
STANDALONE := selectn
MOCHAFLAGS ?= --reporter dot

build: components index.js
	@$(COMPONENT) build --dev

components:
	@$(COMPONENT) install --dev

clean:
	$(RM) -fr build components $(STANDALONE).js

$(STANDALONE).js: components index.js
	@$(COMPONENT) build --standalone $(STANDALONE) --name $(STANDALONE) --out .

test:
	@./node_modules/.bin/mocha $(MOCHAFLAGS)

package: test $(STANDALONE).js

.PHONY: clean test
