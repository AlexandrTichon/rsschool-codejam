const assert = require('assert');
Object.freeze(assert);
const make = require('../make/src/make.js');


it('should return 777', () => {
    const count = make(15)(34, 21, 623)(41)(5, 7, 8)(sum);
    assert.equal(count, 777);
});
it('should return 15', () => {
    const count = make(15)(sum);
    assert.equal(count, 15);
});
it('should return 131', () => {
    const count = make(15)(34, 21)(41)(5, 7, 8)(sum);
    assert.equal(count, 131);
});