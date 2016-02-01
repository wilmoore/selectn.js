# Change Log
All notable changes to this project will be documented in this file (keepachangelog.com).

## 1.0.0 - 2016-01-27
### Fixed
- Drop support for traversing into falsey objects (fixes #22)
- Failing on undefined param (fixes #21)
- Array prefixes do not get resolved (fixes #11)
- remove automatic global handling (fixes #10)

### Added
- Add `contributing.md`.
- Add development task `npm run dev` which uses `nodemon` to re-running `npm test` on file changes.
- Add dependency check task `npm run dependency:check`.
- Add dependency check task `npm run fixpack`.
- Add Zuul for browser testing & connect to `.travis.yml`.
- Add browser test task `npm run test:browsers`.

### Changed
- Convert `History.md` to `changelog.md` (keepachangelog.com).
- Switch from `mocha` to `tape` for unit tests.
- Switch to "JavaScript Standard Style" (https://github.com/feross/standard).
- Refactor source to depend on `brackets2dots`, `dotsplit.js`, and `curry2`.
- Comprehensive `package.json`.

### Removed
- Drop `component.json`.
- Removed `examples` directory in favor of concise examples in `readme.md`.

## 0.10.0 - 2015-09-08
### Changed
- accepts an array of properties.
- better support for accessing falsy primitive values.
- added bower configuration allowing bower installer to work.

## 0.9.6 - 2013-11-11
### Changed
- documentation cleanup.

## 0.9.0 - 2013-09-08
### Changed
- generates standalone module via browserify instead of component(1).

## 0.8.4 - 2013-08-02
### Fixed
- [bugfix] correctly support nested array syntax.

## 0.6.0 - 2013-06-28
### Added
- [feature] optional partial application (via currying).
- [feature] access global object if no object reference is given.

## 0.2.3 - 2013-03-10
### Added
- First stable release.
