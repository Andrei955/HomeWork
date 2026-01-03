"use strict";



// CALLBACK ФУНКЦИИ


function myFanc() {
    console.log('LOG')
}

function callFanc (func) {
    func()
}

callFanc(myFanc)


// Функция, которая делает что-то и затем вызывает callback
function сделатьДомашку(предмет, послеДомашки) {
    console.log(`Делаю домашку по ${предмет}...`);
    console.log("Готово!");

    // Вызываем callback
    послеДомашки();
}

// Разные callback-функции
function пойтиГулять() {
    console.log("Ура! Иду гулять!");
}

function поигратьВИгры() {
    console.log("Время поиграть в игры!");
}

// Используем
сделатьДомашку("математике", пойтиГулять);
сделатьДомашку("русскому", поигратьВИгры);


function cheakAge(age, callback) {
    if (age >= 18) {
        callback('Доступ разрешён')
    } else {
        callback('Доступ запрещён')
    }
}

function showMessage(messege) {
    console.log(messege)
}

cheakAge(20, showMessage)

// ОКРУЖЕНИЕ

const text = () => {
    console.log(this)
}

text()


const arr = [1,2,3] 

console.log(arr.length)


// THIS


let вася = {
    имя: "Вася",
    сказатьИмя: function () { console.log(this.имя); }
};

let петя = {
    имя: "Петя",
    сказатьИмя: function () { console.log(this.имя); }
};

вася.сказатьИмя(); // "Вася" (this = вася)
петя.сказатьИмя(); // "Петя" (this = петя)
// Одна функция, но this разный!