
// expose `selectn`

module.exports = selectn;

/**
 * Select n-levels deep into an object given a dot/bracket-notation query.
 * If partially applied, returns a function accepting the second argument.
 *
 * ### Examples:
 *
 *      selectn('name.first', contact);
 *
 *      selectn('addresses[0].street', contact);
 *
 *      contacts.map(selectn('name.first'));
 *
 * @param  {String} query
 * dot/bracket-notation query string
 *
 * @param  {Object} object
 * object to access
 *
 * @return {Function}
 * accessor function that accepts an object to be queried
 */

function selectn(query) {
  var parts;

  // normalize query to `.property` access (i.e. `a.b[0]` becomes `a.b.0`)
  query = query.replace(/\[(\d+)\]/g, '.$1');
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

  function accessor(object) {
    var ref = object || (1, eval)('this');
    var len = parts.length;
    var idx = 0;

    // iteratively save each segment's reference
    for (; idx < len; idx += 1) {
      if (ref) ref = ref[parts[idx]];
    }

    return ref;
  }

  // curry accessor function allowing partial application
  return arguments.length > 1
       ? accessor(arguments[1]) 
       : accessor;
}

