function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function density(v: number): void {
  finite(v, Number.MIN_VALUE, 1e6);
}
export function buoyantForce(fluidDensity: number, displacedVolume: number, g = 9.80665): number {
  density(fluidDensity);
  finite(displacedVolume, 0, 1e12);
  finite(g, Number.MIN_VALUE, 1e6);
  const result = fluidDensity * displacedVolume * g;
  if (displacedVolume > 0 && result === 0) throw new RangeError('Force resolution lost');
  return result;
}
export function submergedFraction(objectDensity: number, fluidDensity: number): number | null {
  density(objectDensity);
  density(fluidDensity);
  if (objectDensity > fluidDensity) return null;
  const ratio = objectDensity / fluidDensity;
  if (ratio === 0) throw new RangeError('Fraction resolution lost');
  return ratio;
}
