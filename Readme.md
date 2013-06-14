# selectn

[![Build Status](https://travis-ci.org/wilmoore/selectn.png?branch=master)](https://travis-ci.org/wilmoore/selectn)
[![Build Status](https://david-dm.org/wilmoore/selectn.png)](https://david-dm.org/wilmoore/selectn)
[![NPM version](https://badge.fury.io/js/selectn.png)](http://badge.fury.io/js/selectn)

  N-levels deep object access via dot/bracket-notation property access string allowing you to type `selectn('info.name.full')` instead of `obj && obj.info && obj.info.name &&` &infin;.

## Features

  - Avoid `if (obj && obj.a && obj.a.b && obj.a.b.c) { return obj.a.b.c; }`.
  - `selectn` works where [typeof][] fails (i.e. deeply nested properties).
  - Functions generated by `selectn` can be passed to applicative functors like [Array.prototype.map][map].
  - ES5 and non-ES5 compatible.
  - CommonJS, AMD, and legacy-global compatible.

## Non-Features

  - No `eval` and [friends][Function].

## Installation

[component](http://component.io/wilmoore/selectn)

    $ component install wilmoore/selectn

[bower](http://sindresorhus.com/bower-components/)

    $ bower install selectn

[npm](https://npmjs.org/package/selectn)

    $ npm install selectn

## Example (immediate access)

Given the following object:

```js
var talk = {
  info: { name: 'Go Ahead, Make a Mess' }
};
```

the generated function can be immediately invoked for error-free and immediate access to deeply nested properties.

```js
selectn('info.name')(talk);
// => 'Go Ahead, Make a Mess'
```

## Example (functor predicate)

Given the following list:

```js
var talks  = [
  { info: { name: 'Go Ahead, Make a Mess' }},
  { info: { name: 'Silex Anatomy' }},
  { info: { name: 'Unit Testing in Python' }},
  { info: { name: 'Setting the Stage' }}
];
```
the generated function can be used as a predicate for a functor:

```js
var query = selectn('info.name');
talks.map(query);
// => [ 'Go Ahead, Make a Mess', 'Silex Anatomy', 'Unit Testing in Python', 'Setting the Stage' ]
```

## Example (Higher-Order Functions)

You expect the following JSON data from an XMLHttpRequest:

```js
var data = {
  Client: {
    Message: { id: d50afb80-a6be-11e2-9e96-0800200c9a66 }
  }
};
```
Use the [promise] API to extract the data:

```js
var id = selectn('Client.Message.id');

$.ajax({...})
  .then(id)
  .then(console.log);

//=> d50afb80-a6be-11e2-9e96-0800200c9a66
```

## Rationale

In larger, data-driven applications, there tends to be a need to do a lot of deep object access which can quickly lead to code like this:

```
var name;
if (contact && contact.info && contact.info.name) {
  name = contact.info.name.full || 'unknown';
}
```

The following is much more concise:

```
var name = selectn('info.name.full')(contact) || 'unknown';
```

## Alternatives

- You can use [`typeof`][typeof]; however, [`typeof`][typeof] only "appears" to work due to the way the global scope is _implied_.
- Other similar solutions invole [`eval`][eval] and/or [`Function`][Function] ([`eval`][note] in indisguise).

## Inspiration

- [to-function][]
- [reach][]
- [dref][]

## License

  MIT



[to-function]: https://github.com/component/to-function
[reach]:       https://github.com/spumko/hoek#reachobj-chain
[dref]:        https://github.com/crcn/dref.js
[Function]:    https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function
[eval]:        https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/eval
[note]:        https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Member_Operators#Note_on_eval
[typeof]:      https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/typeof
[promise]:     http://promises-aplus.github.io/promises-spec/
[map]:         https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/map
[primitive]:   http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/

