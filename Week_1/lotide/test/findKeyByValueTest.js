const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {
  it(`find 'The Wire', return true`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  })
  it(`find "that '70show", return false`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, '70show'), undefined);
  })
})