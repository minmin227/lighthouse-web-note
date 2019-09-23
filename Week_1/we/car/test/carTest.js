const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return true if the car is pink", function() { // 4

    const car = {
      color: 'pink'
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);

  });

});

