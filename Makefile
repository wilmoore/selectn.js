
build: components index.js
	@./node_modules/.bin/component build --dev

components:
	@./node_modules/.bin/component install --dev

clean:
	rm -fr build components

select.js: components index.js
	@./node_modules/.bin/component build --standalone select --name select --out .

test:
	@./node_modules/.bin/mocha \
		--require chai \
		--reporter spec

.PHONY: clean test
