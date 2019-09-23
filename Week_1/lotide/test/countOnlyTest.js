const assert = require('chai').assert;
const countOnly = require('../countOnly');



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });


describe('#countOnly', () => {
  it('should return true', () => {
    assert.strictEqual(result1['Jason'], 1);
  })
  it('should return false', () => {
    assert.strictEqual(result1['Karima'], undefined);
  })
  it('should return true', () => {
    assert.strictEqual(result1['Fang'], 2);
  })
})