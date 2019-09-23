const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it('return array = array', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6])
  });
  it('return array = array', () => {
    assert.deepEqual(flatten([1, [2, 3], 4]), [1,2,3,4])
  });
})