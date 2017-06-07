/* @flow */

// http://www.geo.mtu.edu/UPSeis/magnitude.html
// Earthquake magnitude scale
const IntensityEnum = Object.freeze({
  MINOR: 'minor',
  LIGHT: 'light',
  MODERATE: 'moderate',
  STRONG: 'strong',
  MAJOR: 'major',
  GREAT: 'great',
});

const IntensitySubsetEnum = Object.freeze({
  LIGHT: 'light',
  MODERATE: 'moderate',
  STRONG: 'strong',
});

export { IntensityEnum, IntensitySubsetEnum };
