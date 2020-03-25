install:
	npm install

start:
	node bin/brain-even.js

lint:
	npx eslint .

publish:
	npm publish --dry-run