var values = require('lodash.values');
var max = require('lodash.max');
var selectn = require('selectn');
var stats = require('./stats.json');

var popular = max(values(stats), selectn('count'));
console.log('The "%s" page is the most popular with a visitor count of %d!', popular.page, popular.count);
