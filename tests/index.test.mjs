import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('water displacement', () => {
  assert.equal(api.buoyantForce(1000, 1, 10), 10000);
});
test('floating half', () => {
  assert.equal(api.submergedFraction(500, 1000), 0.5);
});
test('neutral and sinking', () => {
  assert.equal(api.submergedFraction(1000, 1000), 1);
  assert.equal(api.submergedFraction(1200, 1000), null);
});
test('zero displacement', () => {
  assert.equal(api.buoyantForce(1000, 0), 0);
});
test('linear force', () => {
  assert.equal(api.buoyantForce(1000, 2), 2 * api.buoyantForce(1000, 1));
});
test('domain and resolution', () => {
  assert.throws(() => api.submergedFraction(0, 1000));
  assert.throws(() => api.buoyantForce(1000, -1));
  assert.throws(() => api.submergedFraction(Number.MIN_VALUE, 1e6));
});
