
// expose `select`

module.exports = select;

/**
 * Select n-levels deep into an object given a dot/bracket-notation query
 * by returning an accessor function that accepts an object to be queried
 *
 *    @example
 *      select('name.first')(contact);
 *
 *    @example
 *      select('addresses[0].street')(contact);
 *
 *    @example
 *      contacts.map(select('name.first'));
 *
 * @param  {String} query
 * dot/bracket-notation query string
 *
 * @return {Function}
 * accessor function that accepts an object to be queried
 */

function select(query) {
  var parts;

  // normalize to `.property` access (i.e. `a.b[0]` becomes `a.b.0`)
  query = query.replace(/\[(\d+)\]/, '.$1');
  parts = query.split('.');

  /**
   * Accessor function that accepts an object to be queried
   *
   * @param  {Object} object
   * object to query into
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
