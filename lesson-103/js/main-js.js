const thisIsMe = {
    name: 'Андрей',
    age: 27,
    sity: 'Брянск',
    status: 'гражданский брак',
    helloUser: function (userName) {
        return `hello ${userName}`;
    },
};

console.log(thisIsMe.helloUser('Андрей'));

const users = [
    { name: 'Андрей', age: 27, isAdmin: true },
    { name: 'Пётр', age: 20, isAdmin: false },
    { name: 'Стас', age: 37, isAdmin: false },
    { name: 'Константин', age: 18, isAdmin: false },
];

let slimpleUsers = 0;
// for (начало;условие;шаг) // это я для себя)
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        slimpleUsers++;
    }
}

console.log(slimpleUsers);
