//### Уникальность всех символов в строке
//
// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
//
// **Input**: String
//
// **Output**: Boolean
const isUnique = (string) => {
// Первое решение!
// for(let i = 0; i < string.length; i++) {
//   for(let j = i + 1; j < string.length; j++) {
//     if(string[i] === string[j]) {
//       return false
//     }
//   }
// }
// return true;

// Второе решение! Более короткое и понятное
    return new Set(string).size === string.length;
};



console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
