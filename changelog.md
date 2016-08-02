# Change Log
All notable changes to this project will be documented in this file (keepachangelog.com).

## 1.1.1 - 2016-08-01
### Changed
- Update `readme.md` with much nicer sauce-labs browser matrix from `exogen/badge-matrix`.

## 1.1.0 - 2016-08-01
### Changed
- Update `zuul`, `nodemon`, and `dependency-check` to latest versions per greenkeeper.
- Update sauce open credentials in `.travis.yml`

### Added
- Add `_.get` to alternatives list per @jasonkarns
- Add new sauce labs repo badge.
- Add `postversion` npm script.

## 1.0.22 - 2016-07-13
### Changed
- Updated `depedency-check`, `uglify`, and `standard` to latest versions per greenkeeper.

## 1.0.21 - 2016-07-13
### Added
- Add `debug` logging.

### Changed
- Update `.zuul.yml` to test only firefox versions `44..46` instead of just latest.

## 1.0.18 - 2016-05-02
### Added
- Add API usage example for case where value at path is a function and is automatically invoked.
- This is an old feature but I've finally gotten around to adding a usage example.

## 1.0.17 - 2016-05-02
### Fixed
- (FIXED) Missing index.js in published packages after 1.0.8 #28.
- Corrected an issue where using `files` in `package.json` does not publish `index.js`.
- Fix was to drop `files` and instead explicitly ignore unwanted files via `.npmignore`.

## 1.0.9 - 2016-03-05
### Changed
- Updated `dependencies`.

## 1.0.8 - 2016-03-05
### Added
- add demo `.gif` to `readme.md`.

## 1.0.7 - 2016-03-05
### Removed
- Remove `iphone` from list of sauce-labs browsers to test as it has been flaky as of late.

## 1.0.6 - 2016-03-03
### Added
- Add example of support for keys containing `.` (array path).

## 1.0.5 - 2016-02-03
### Fixed
- Fixed #24 (Test when value is 'null'): https://github.com/wilmoore/selectn.js/issues/24#issuecomment-179119054

### Changed
- Updated bower.json including dropping of deprecated key/values (i.e. version).

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
