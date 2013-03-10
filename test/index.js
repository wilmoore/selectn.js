var select = require('..');
var expect = require('chai').expect;

describe('selectn()', function(){

  // common test fixtures
  var talks  = [
    { info: { name: 'Go Ahead, Make a Mess',  feedback: [8, 9, 10] }},
    { info: { name: 'Silex Anatomy',          feedback: [8, 9, 10] }},
    { info: { name: 'Unit Testing in Python', feedback: [8, 9, 10] }},
    { info: { name: 'Setting the Stage',      feedback: [8, 9, 10] }}
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

  it('supports bracket/numeric access', function() {
    var accessor = select('info.feedback[1]');
    expect(accessor(talks[0])).to.equal(9);
  });

  it('ignores non-numeric bracket access', function() {
    var accessor = select('info["feedback"]');
    expect(accessor(talks[0])).to.be.an('undefined');
  });

});
