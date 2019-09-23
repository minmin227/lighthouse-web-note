const chai = require('chai');
const assert = chai.assert;
const nameInverter = ('../nameInverter.js');
describe('nameInverter', function (){

  it('should return true if the name is reverse', function () {

    const name1 = 'Mike Nguyen';
    const name2  ='ALi Beo'
    const nameDone1 = nameInverter(name1);
    const nameDone2 = nameInverter(name2);

    assert.isTrue(nameDone1);
    assert.isTrue(nameDone2);
  })
})