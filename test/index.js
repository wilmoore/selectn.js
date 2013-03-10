var select = require('..');
var expect = require('chai').expect;

describe('select()', function(){

  // common test fixtures
  var talks  = [
    { info: { name: 'Go Ahead, Make a Mess' }},
    { info: { name: 'Silex Anatomy' }},
    { info: { name: 'Unit Testing in Python' }},
    { info: { name: 'Setting the Stage' }}
  ];

  it('returns an accessor function', function() {
    var accessor = select('a.b.c');
    expect(accessor).to.be.a('function');
  });

  it('accessor function accepts a single parameter', function() {
    var accessor = select('a.b.c');
    expect(accessor.length).to.equal(1);
  });

  it('supports n-level property access', function(){
    var talk     = talks[0];
    var actual   = talk.info.name;
    var expected = select('info.name')(talk);

    expect(expected).to.equal(actual);
  });

  it('accessor function can be used with iterator functors', function(){
    var actual = talks.map(function (talk) {
      return talk.info.name;
    });

    var expected = talks.map(select('info.name'));

    expect(expected).to.eql(actual);
  });

});
