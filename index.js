'use strict'

const curry2 = require('curry2')
const dotted = require('brackets2dots')
const splits = require('dotsplit.js')
const string = Object.prototype.toString

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
  let idx = -1
  const seg = string.call(path) === '[object Array]' ? path : splits(dotted(path))
  const end = seg.length
  let ref = end ? object : undefined

  while (++idx < end) {
    if (Object(ref) !== ref) return undefined
    ref = ref[seg[idx]]
  }

  return typeof ref === 'function' ? ref() : ref
}
