// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
    myName: 'Andrei',
    myAge: 27,
    myCity: 'Bryansk',
    wereChildren: true
}
const personTwo = {}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
    for (let key in object) {
        return false
    }
    return true
}
console.log(isEmpty(person))
console.log(isEmpty(personTwo))



// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
    title: 'Заголовок',
    description: 'Описание',
    isCompleted: 'завершено'
}

const modifications = {
    title: 'Новый заголовок'
}

function cloneAndModify(object, modifications) {
    let copy = { ...object }
    let modifiCopy = { ...copy, ...modifications }

    for (let key in modifiCopy) {
        console.log(`${key}: ${modifiCopy[key]}`)
    }
    return modifiCopy
}


console.log(task)
cloneAndModify(task, modifications)



// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

function callAllMethods(object) {
    for (let key in object) {
        if (typeof object[key] === 'function') {
            object[key]()
        }
    }
}

callAllMethods(myObject);


