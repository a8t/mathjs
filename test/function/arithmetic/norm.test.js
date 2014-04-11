// test norm
var assert = require('assert'),
    error = require('../../../lib/util/error'),
    math = require('../../../index')();

describe('norm', function () {
  
  it('should return the absolute value of a boolean', function () {
    assert.equal(math.norm(true), 1);
    assert.equal(math.norm(true, 10), 1);
    assert.equal(math.norm(false), 0);
    assert.equal(math.norm(false, 10), 0);
  });

  it('should return the absolute value of a number', function () {
    assert.equal(math.norm(-4.2), 4.2);
    assert.equal(math.norm(-3.5), 3.5);
    assert.equal(math.norm(100), 100);
    assert.equal(math.norm(0), 0);
    assert.equal(math.norm(100, 10), 100);
  });
  
  it('should return the absolute value of a big number', function () {
    // assert.equal(math.norm(math.bignumber(-2.3)), math.bignumber(2.3));
    // assert.deepEqual(math.norm(math.bignumber('5e500')), math.bignumber('5e500'));
    // assert.deepEqual(math.norm(math.bignumber('-5e500')), math.bignumber('5e500'));
  });

  it('should return the norm of a complex number', function () {
    assert.equal(math.norm(math.complex(3, -4)), 5);
  });

  it('should return the norm of a vector', function () {
    // p = 0
    assert.equal(math.norm([]), 0.0);
    // p = Infinity
    assert.equal(math.norm([1, 2, -3], Number.POSITIVE_INFINITY), 3);
    // p - positive
    assert.equal(math.norm([3, 4], 2), 5.0);
    // p - negative
    assert.equal(math.norm([3, 4], -2), 2.4);
  });

  it('should throw an error in case of invalid number of arguments', function() {
    // assert.throws(function () {math.norm()}, error.ArgumentsError);
    // assert.throws(function () {math.norm(1, 2, 3)}, error.ArgumentsError);
  });

  it('should throw an error with a string', function () {
    assert.throws(function () {
      math.norm('a string');
    });
  });
});
