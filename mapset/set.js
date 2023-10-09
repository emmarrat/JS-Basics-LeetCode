const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);

set
    .add(10)
    .add(20)
    .add(30)
    .add(20)
// console.log(set.has(35))
// console.log(set.size)
// console.log(set.delete(3))
// console.log(set.size)
// console.log(set.clear)


function uniqValues(array) {
    return [...new Set(array)]; // Как создать новый массив убрав все дубликаты
}

function removeDuplicateObjects(array) { // Как создать новый массив обьектов если нужно убрать дублирующиеся ключи
    const uniqueObjects = [];
    const uniqueNames = new Set();

    for (const obj of array) {
        if (!uniqueNames.has(obj.name)) {
            // Если имя еще не встречалось, добавляем объект в новый массив и записываем имя в Set
            uniqueObjects.push(obj);
            uniqueNames.add(obj.name);
        }
    }

    return uniqueObjects;
}

console.log(uniqValues([1,2,3,1,1,1,3,4,5,6]))

console.log(removeDuplicateObjects(
    [
        {name: 'Emir'},
        {name: 'Aizhan'},
        {name: 'Kamilya'},
        {name: 'Emir'}
    ]))

