COMPONENT  ?= $(firstword $(shell which $(CURDIR)/node_modules/.bin/component) $(shell which component))
STANDALONE := selectn

build: components index.js
	@$(COMPONENT) build --dev

components:
	@$(COMPONENT) install --dev

clean:
	$(RM) -fr build components $(STANDALONE).js

$(STANDALONE).js: components index.js
	@$(COMPONENT) build --standalone $(STANDALONE) --name $(STANDALONE) --out .

test:
	@./node_modules/.bin/mocha --reporter spec

.PHONY: clean test
