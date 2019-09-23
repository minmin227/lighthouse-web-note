const chai = require('chai');
const assert = chai.assert;
const nameInventer = ('../nameInverter.js');
describe('nameInventer', function (){

  it('should return true if the name is reverse', function () {

    const name1 = 'Mike Nguyen';
    const name2  ='ALi Beo'
    const nameDone1 = nameInventer(name1);
    const nameDone2 = nameInventer(name2);

    assert.isTrue(nameDone1);
    assert.isTrue(nameDone2);
  })
})