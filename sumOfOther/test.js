const assert = require('assert');
Object.freeze(assert);
const check = require('../sumOfOther/src/sumOfOther.js');

it('should return array consict of 4 elemenst, there are [8, 7, 6, 9]', () => {
    assert.deepEqual(check([2, 3, 4, 1]), [8, 7, 6, 9]);
});
