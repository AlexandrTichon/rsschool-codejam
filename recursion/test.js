const assert = require('assert');
Object.freeze(assert);
const check = require('../recursion/src/recursion.js');

it('tree 1', () => {
    assert.deepEqual(check({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}}
    ), [[100], [90, 120], [70,99,110,130]]);
});