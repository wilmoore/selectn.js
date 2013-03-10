
// expose `selectn`

module.exports = selectn;

/**
 * Select n-levels deep into an object given a dot/bracket-notation query
 * by returning an accessor function that accepts an object to be queried
 *
 *    @example
 *      selectn('name.first')(contact);
 *
 *    @example
 *      selectn('addresses[0].street')(contact);
 *
 *    @example
 *      contacts.map(selectn('name.first'));
 *
 * @param  {String} query
 * dot/bracket-notation query string
 *
 * @return {Function}
 * accessor function that accepts an object to be queried
 *
 * @return {Object} return.value
 * object to access
 *
 * @return {Mixed}  return.return
 * value at given reference or undefined if it does not exist
 */

function selectn(query) {
  var parts;

  // normalize query to `.property` access (i.e. `a.b[0]` becomes `a.b.0`)
  query = query.replace(/\[(\d+)\]/, '.$1');
  parts = query.split('.');

  /**
   * Accessor function that accepts an object to be queried
   *
   * @private
   *
   * @param  {Object} object
   * object to access
   *
   * @return {Mixed}
   * value at given reference or undefined if it does not exist
   */

  return function (object) {
    var ref = object,
        len = parts.length,
        idx = 0;

    // iteratively save each segment's reference
    for (; idx < len; idx += 1) {
      if (ref) ref = ref[parts[idx]];
    }

    return ref;
  };
}

