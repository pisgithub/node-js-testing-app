const assert = require('assert');
const add = require('./app');

// Test case 1: Addition of positive numbers
assert.strictEqual(add(2, 3), 5, 'Addition of 2 + 3 should equal 5');

// Test case 2: Addition of zero and a positive number
assert.strictEqual(add(5, 7), 7, 'Addition of 0 + 7 should equal 7');

// Test case 3: Addition of negative numbers
assert.strictEqual(add(-4, -2), -6, 'Addition of -4 + -2 should equal -6');

console.log('All test cases passed successfully.');
