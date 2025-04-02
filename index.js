function countSpaces(text) {
  let counter = 0;
  let index = 0; //счетчик с 0
  while (index < text.length) {
    const letter = text[index]; //обпащаемся к тексту
    if (letter === " ") counter++;
    index++; //счетчик юудет увеличиваться на 1
  }
  return counter;
}
console.log(countSpaces('z fjfjkfkk fjfj  kjf  f  '));