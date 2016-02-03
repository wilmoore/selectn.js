'use strict'

/**
 * imports.
 */

var dotted = require('brackets2dots')
var splits = require('dotsplit.js')
var curry2 = require('curry2')
var string = Object.prototype.toString

/**
 * exports.
 */

module.exports = curry2(selectn)

/**
 * Curried property accessor function that resolves deeply-nested object properties via dot/bracket-notation
 * string path while mitigating `TypeErrors` via friendly and composable API.
 *
 * @param {String|Array} path
 * Dot/bracket-notation string path or array.
 *
 * @param {Object} object
 * Object to access.
 *
 * @return {Function|*|undefined}
 * (1) returns `selectn/1` when partially applied.
 * (2) returns value at path if path exists.
 * (3) returns undefined if path does not exist.
 */

function selectn (path, object) {
  var idx = -1
  var seg = string.call(path) === '[object Array]' ? path : splits(dotted(path))
  var end = seg.length
  var ref = end ? object : void 0

  while (++idx < end) {
    if (Object(ref) !== ref) return void 0
    ref = ref[seg[idx]]
  }

  return typeof ref === 'function' ? ref() : ref
}
