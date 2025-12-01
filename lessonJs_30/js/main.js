// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку.
//  Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice(price, discount, tax) {
    result = price * (1 - discount / 100) * (1 + tax);
    return result;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль.
// Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

(function checkAccess(userName, password) {
    userName = prompt("Ваше имя");
    password = +prompt("пароль");
    let entrance;
    if ((userName == "admin" && password === 123456) || (userName == "user" && password === 123456)) {
        entrance = "доступ разрешен";
    } else {
        entrance = "доступ запрещен";
    }
    console.log(entrance);
})();

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

(function getTimeOfDay(time) {
    input = prompt("Склько сейчас времени ? Пример: 2 ");
    time = +input;
    if (input === null || input === "" || isNaN(time) || time < 0 || time > 23) {
        alert("неверный формат времени");
        return;
    }
    if (time >= 0 && time <= 5) {
        alert("ночь");
    } else if (time >= 6 && time <= 11) {
        alert("утро");
    } else if (time >= 12 && time <= 17) {
        alert("день");
    } else if (time >= 18 && time <= 23) {
        alert("вечер");
    }
})();

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

let start = +prompt("введите первое число :");
let end = +prompt("введите второе число :");
const anOddNumber = "Чётных чисел нет";
const noNumber = "ошибка";

function findFirstEven(start, end) {
    if (isNaN(start) || isNaN(end)) {
        return noNumber;
    }
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) return i;
    }

    return anOddNumber;
}
console.log(findFirstEven(start, end));
