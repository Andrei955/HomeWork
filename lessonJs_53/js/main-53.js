"use strict";


// Задание 1.
// Дан массив пользователей:
const users = [
    {
        name: 'Alex',
        age: 24,
        isAdmin: false
    },
    {
        name: 'Bob',
        age: 13,
        isAdmin: false
    },
    {
        name: 'John',
        age: 31,
        isAdmin: true
    },
    {
        name: 'Jane',
        age: 20,
        isAdmin: false
    },
]


console.log(users)

// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

let newUsers = [...users]

newUsers.push(
    {
        name: 'Ann',
        age: 19,
        isAdmin: false
    },
    {
        name: 'Jack',
        age: 43,
        isAdmin: true
    }
)

console.log(newUsers)




// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.


// длина массива
// function cheak(array) {
//     let cheak = array.length
//     return cheak
// }
// console.log(cheak(users))


// средний возвраст
function getUserAverageAge(array) {
    let totalAge = 0
    let count = array.length
    array.forEach(user => {
        totalAge += user.age // totalAge = totalAge + obj.age
    });
    let result = totalAge / count
    return result
}



console.log(getUserAverageAge(newUsers))









// Задание 3.
// Используя массив пользователей users из предыдущего задания, 
// напишите функцию getAllAdmins(users), 
// которая возвращает массив всех администраторов.


function getAllAdmins(array) {
let arAdmin = []
    array.forEach(user => {
        let admin = user.isAdmin
        if (admin === true) {
            arAdmin.push(user)
        }
        });

        return arAdmin
}

// getAllAdmins(newUsers)
console.log(getAllAdmins(newUsers))
console.log(getAllAdmins(users))




// Задание 4.

// Напишите функцию first(arr, n),
//  которая возвращает первые n элементов массива. 
// Если n == 0, возвращается пустой массив [], если n == undefined, 
// то возвращается массив с первым элементом.


//  Если честно, задания не понял и даже когда ИИ объяснило, всё равно не понял. Я обязательно вернусь как нибудь к 4 заданию 

function first(arr, n) {
    if (n === undefined) {
        return arr.length > 0 ? [arr[0]] : [];
    }
    
    if (n === 0) {
        return [];
    }
    
    return arr.slice(0, n);
}


console.log(first(newUsers, 2))
console.log(first(newUsers,0))
console.log(first(newUsers, undefined))


