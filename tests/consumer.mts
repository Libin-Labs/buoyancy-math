import { submergedFraction } from '@lp-labs/buoyancy-math';
if (submergedFraction(500, 1000) !== 0.5) throw new Error('Fraction');
// @ts-expect-error invalid argument must be rejected by declarations
submergedFraction('500', 1000);
