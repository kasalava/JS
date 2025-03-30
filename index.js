// function greet(name) {
//   if (name === undefined) console.log("Привет!");
//   else console.log(`привет ${name}`);
// }
// greet("");
const toCapital = function (str) {
  const firstChar = str[0];
  const leftover = str.slice(1);
  const capitalFirstLetter = firstChar.toUpperCase();
  const lowerLeftover = leftover.toLowerCase();
  const result = capitalFirstLetter + lowerLeftover;
  return result;
};
console.log(toCapital("саша"));
