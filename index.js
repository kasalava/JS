// function countSpaces(text) {
//   let counter = 0;
//   let index = 0; //счетчик с 0
//   while (index < text.length) {
//     const letter = text[index]; //обпащаемся к тексту
//     if (letter === " ") counter++;
//     index++; //счетчик юудет увеличиваться на 1
//   }
//   return counter;
// }
// console.log(countSpaces('z fjfjkfkk fjfj  kjf  f  '));
function hasEvenDigits(num) {
  const digitStr = num.toString(); //переводим цифры в строку
  for (let i = 0; i < digitStr.length; i++) {
    const digit = Number(digitStr[i]); //из строки переводим в число
    if (digit % 2 === 0) return true; //если ф-я найдет четное число, вызовет тру
  }
  return false;
}
console.log(hasEvenDigits(1223558));
