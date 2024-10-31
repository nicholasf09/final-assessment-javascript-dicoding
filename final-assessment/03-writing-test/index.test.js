import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { sum } from './index.js';

test('function sum berjalan lancar', () => {
  assert.equal(sum(2, 3), 5);    // Menguji jika 2 + 3 menghasilkan 5
  assert.equal(sum(-1, 1), 0);   // Menguji jika -1 + 1 menghasilkan 0
  assert.equal(sum(0, 0), 0);    // Menguji jika 0 + 0 menghasilkan 0
  assert.equal(sum(100, 200), 300); // Menguji jika 100 + 200 menghasilkan 300
  assert.equal(sum(-5, -5), -10); // Menguji jika -5 + -5 menghasilkan -10
});
