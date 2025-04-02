function countSpaces(text) {
  //ф-я принимает аргумент(текст)
  let counter = 0; //счетчик с 0
  for (let i = 0; i < text.length; i++) {
    /*кол-во пробелов не должно быть больше длины текста
                                     счетчик увеличивается на 1 */
    const letter = text[i]; //получаем букву из текста
    if(letter === ' ') counter++; //если буква пробел, то счетчик увеличиваем на 1
  }
  return counter;
}
console.log(countSpaces('z fjfj  kfkk fjfj  kjf  f     ')); //вызываем ф-ю
