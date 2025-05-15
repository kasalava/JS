
const toCapital = function (str) {
    try{//блок трай кэч - запускает блок кода
  const firstChar = str[0]; 
  const leftover = str.slice(1); 
  const capitalFirstLetter = firstChar.toUpperCase(); 
  const lowerLeftover = leftover.toLowerCase();
  const result = capitalFirstLetter + lowerLeftover; 
  return result; 
    }catch(err){ 
        console.log('произошла ошибка')//делаем с ошибкой чтото, например выводим сообщение об ошибке
        return('') //всегда оборачиваем ф-ю в тарй кэч

    }
}

console.log(toCapital('саша')) 
console.log(toCapital('ЛЕША'))
console.log(toCapital('иГорЬ'))
console.log(toCapital(''))
console.log(toCapital('риА'))


 