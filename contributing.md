# Contributing to selectn

Below are a few ways to make contributing to `selectn` smoother.

## Issues

When opening an issue for a bug, please include steps for reproducing the problem. _If we can't reproduce it, we can't fix it_. If you are suggesting a new feature, please provide a clear and detailed explanation.

## Setup

    git clone https://github.com/wilmoore/selectn.js.git
    cd selectn.js
    npm install
    npm run dev

## Tests

If you are adding a new feature, please include tests. The unit test suite for this project uses [tape](https://github.com/substack/tape). To run the test suite, type `npm test`. You may also run the development watcher (`npm run dev`) which uses [nodemon](http://nodemon.io) to re-run the test suite when files are modified. You can also get the raw tap output by running `node test`. To test in a browser, run `npm run test:browsers:local` to execute tests locally or `npm run test:browsers` to run on open sauce.

## Style

To keep a consistent coding style in the project, we're using [JavaScript Standard Style](https://github.com/feross/standard).

```shell
npm run standard
```
> This command will be run automatically with `npm run dev`; however, you can run it on-demand as necessary.

## Dependencies

To ensure that (1) we are not depending on uninstalled packages and (2) we haven't installed any unused packaged, we're using [dependency-check](https://www.npmjs.com/package/dependency-check).

```shell
npm run dependency-check
```
> This command will be run automatically with `npm run dev`; however, you can run it on-demand as necessary.

## Package

To keep a consistent `package.json`, we're using [`fixpack`](https://www.npmjs.com/package/fixpack).

```shell
npm run fixpack
```

## Commits

When submitting pull requests please add a [well-written and clear commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) and squash your commits. This means being familiar with rebasing - if you are not, [this guide](https://help.github.com/articles/about-git-rebase/) should help you to get started. If you are still confused, feel free to ask for help.
