import test from 'node:test';
import { strict as assert } from 'node:assert';

function Sum(number1 = 0, number2 = 0) {
  return number1 + number2;
}


test('Sum test', (t) => {
  assert.equal(Sum(5, 5), 10);
});


console.log(`The sum is ${Sum(5, 5)}`);
