//Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.
//
// **Input**: Array
//
// **Output**: Array

const flatten = (array) => {

    const res = [];

    for(let i = 0; i <array.length; i++) {
        if(Array.isArray(array[i])) {
         const flat = flatten(array[i]); // Рекурсивно вызываем эту же функцию для вложенных массивов.
            for(let j = 0; j < flat.length; j++) { // Результат по иттерации закидываем в основной массив для выхода res
                res.push(flat[j])
            }
        } else {
            res.push(array[i])
        }
    }

    return res;

}

console.log(flatten([[1], [[2,3]], [[[4]]]])) // [ 1, 2, 3, 4 ]
