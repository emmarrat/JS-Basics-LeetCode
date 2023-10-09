const obj = {
    name: 'Emir',
    age: 27,
    job: 'Frontend Developer'
};

const entries = [
    ['name', 'Emir'],
    ['age', 27],
    ['job', 'Frontend Developer']
];


// console.log(Object.entries(obj));
// Переводит обьект в массив из массивов где будут хранится ключ-значение

// console.log(Object.fromEntries(entries));
//Переводит массив из массивов в обьект


const map = new Map(entries);

map
    .set('newFieldd', 'new value') // Записывает новые ключ значение в map
    .set(obj, 'value of object key') // Ключом может быть что угодно, даже обьект


// map.delete('job'); // удаляет значение и ключ
// map.has('job'); // Проверяет есть ли такой ключ и значение
// map.get('name'); // Достает значение по ключу
// map.size // Узнать количество ключей
// map.clear() // Oчищает карту

// for (let [key, value] of map) {  // Перебор Map по ключу и значению
//     console.log(key, value)
// }


// for (let value of map.values()) {  // Перебор Map по значению, также можно пройтись только по ключам map.keys()
//     console.log( value)
// }

// map.forEach((value, key, m) => { // Перебор Map через forEach значения в колбек записываются по очереди Значение, Ключ, Мap
//     console.log(key,  value)
// })

// const array = [...map] // Создание массива из Map
//
// const mapObj = Object.fromEntries(map.entries()); // Создание обьекта из Map

const users = [
    {name: 'Emir'},
    {name: 'Aizhan'},
    {name: 'Kamilya'}
];


const visits = new Map();
visits
    .set(users[0], new Date())
    .set(users[1], new Date( new Date().getDate() + 1000 * 60))
    .set(users[2], new Date(new Date().getDate() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2]))