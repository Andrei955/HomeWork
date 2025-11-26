const firstName = 'Андрей';
const lastName = 'Юрочко';
const isStudent = true;

const age = 27;
const currentYear = 2025;
const birthYear = currentYear - age;

console.log(`Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent}`)




let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let t = 0;
let result = a + b + c + d + e;
console.log(result)
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

// Так, думал что вообще будет NaN почему-то, но потом разоблася, что из-за переменной 'a', получется строка, а если эту переменную убрать из result, получится число  1246, а не строка 123456789falsetrue
// почему думал что получится NaN не могу объяснить :( 



