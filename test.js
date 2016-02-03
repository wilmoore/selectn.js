'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var selectn = require('./')
var fixture = require('./test.fixture')

/*!
 * fixtures.
 */

var getfn = fixture.getfn
var talks = fixture.talks
var books = fixture.books
var falsey = fixture.falsey
var nonstring = fixture.nonstring

/*!
 * tests.
 */

test('selectn/1', function (t) {
  var partial = selectn('a.b.c')
  t.equal(typeof partial, 'function', 'returns an accessor function')
  t.equal(partial.length, 1, 'accessor function accepts a single parameter')
  t.end()
})

test('selectn/2', function (t) {
  var data = talks[0]
  t.equal(data.info.name, selectn('info.name', data), 'provides n-level property access')
  t.deepEqual(talks.map(getfn), talks.map(selectn('info.name')), 'creates accessor function for use with iterator functors')
  t.end()
})

test('bracket/numeric access', function (t) {
  var parameters = [
    {
      name: '[0].info.feedback[1]',
      data: talks[0].info.feedback[1]
    },

    {
      name: '[1].info.name',
      data: talks[1].info.name
    },

    {
      name: '[0].info["feedback"]',
      desc: 'ignores non-numeric bracket access',
      data: undefined
    }
  ]

  t.plan(parameters.length)

  parameters.forEach(function (p) {
    t.equal(selectn(p.name, talks), p.data, p.desc || p.name)
  })
})

test('support query by array', function (t) {
  var query = ['part', '0', 'chapter', '0', 'title']
  var title = books.part[0].chapter[0].title
  t.equal(selectn(query, books), title, 'selectn([])')
  t.end()
})

test('array indexing', function (t) {
  var ndarray = [[8, 1, 6], [3, 5, 7], [4, 9, 2]]
  t.equal(selectn('1.2', ndarray), 7, "selectn('1.2')")
  t.equal(selectn([1, 2], ndarray), 7, 'selectn([1, 2])')
  t.end()
})

test('falsey objects return exact value', function (t) {
  t.equal(selectn('_false', falsey), false, 'false')
  t.equal(selectn('_null', falsey), null, 'null')
  t.equal(selectn('_undefined', falsey), undefined, 'undefined')
  t.equal(selectn('_0', falsey), 0, '0')
  t.end()
})

test('function application', function (t) {
  var toString = function () {
    return name.last + ', ' + name.first
  }

  var name = {
    first: 'Wil',
    last: 'Moore',
    toString: toString
  }

  t.equal(selectn('toString', name), 'Moore, Wil', 'Function is applied')
  t.end()
})

test('point-free', function (t) {
  var predicate = selectn('isRunning')
  var potential = [
    { name: '_', isRunning: true },
    { name: '_', isRunning: false },
    { name: '_' },
    { name: '_', isRunning: 1 }
  ]
  t.equal(potential.filter(predicate).length, 2, 'predicate')
  t.end()
})

test('non-string paths always return undefined', function (t) {
  t.equal(selectn(/^$/, nonstring), undefined, 'RegExp')
  t.equal(selectn(({}).notdefined, nonstring), undefined, 'undefined')
  t.equal(selectn(undefined, nonstring), undefined, 'undefined')
  t.equal(selectn(false, nonstring), undefined, 'false')
  t.equal(selectn(null, nonstring), undefined, 'null')
  t.equal(selectn(true, nonstring), undefined, 'true')
  t.equal(selectn(0, nonstring), undefined, '0')
  t.end()
})

test('path of primitive values always returns undefined', function (t) {
  t.equal(selectn('constructor', 'hello'), undefined, 'string')
  t.equal(selectn('constructor', undefined), undefined, 'undefined')
  t.equal(selectn('constructor', null), undefined, 'null')
  t.equal(selectn('constructor', false), undefined, 'boolean false')
  t.equal(selectn('constructor', true), undefined, 'boolean true')
  t.equal(selectn('constructor', 0), undefined, 'number 0')
  t.equal(selectn('constructor', 1), undefined, 'number 1')
  t.end()
})

test('issue #24', function (t) {
  // https://github.com/wilmoore/selectn.js/issues/24#issuecomment-179119054
  t.equal(selectn('_null.test', falsey), undefined, 'attempting to get property of non-object returns undefined')
  t.end()
})
