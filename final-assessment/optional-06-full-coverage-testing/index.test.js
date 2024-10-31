import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import sum from './index.js';

test('sum of two positive numbers', () => {
  assert.equal(sum(5, 10), 15); // Menguji jika 5 + 10 menghasilkan 15
});

test('sum with non-number inputs', () => {
  assert.equal(sum('5', 10), 0); // Menguji jika salah satu input bukan number
  assert.equal(sum(5, '10'), 0); // Menguji jika salah satu input bukan number
  assert.equal(sum('5', '10'), 0); // Menguji jika kedua input bukan number
});

test('sum with negative numbers', () => {
  assert.equal(sum(-5, 10), 0); // Menguji jika salah satu input negatif
  assert.equal(sum(5, -10), 0); // Menguji jika salah satu input negatif
  assert.equal(sum(-5, -10), 0); // Menguji jika kedua input negatif
});

test('sum with zero', () => {
  assert.equal(sum(0, 10), 10); // Menguji jika salah satu input adalah 0
  assert.equal(sum(10, 0), 10); // Menguji jika salah satu input adalah 0
  assert.equal(sum(0, 0), 0);   // Menguji jika kedua input adalah 0
});
