// const milesToKilometers = (miles) => miles * 1.609344;
// console.log(milesToKilometers(1));

// const cToF = (c) => c * 1.8 + 32;
// console.log(cToF(12));

const switchTemp = (deg, scale) =>
  scale === "c" ? deg * 1.8 + 32 : (deg - 32) / 1.8;

console.log(switchTemp(-40, "c"));
console.log(switchTemp(-40, "f"));
