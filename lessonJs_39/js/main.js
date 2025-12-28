// let user = {
//     name: 'Andrei',
//     age: 27,
//     isProgrammer: true,
//     'one two': 12
// }

// console.log(user.name)
// console.log(user['one two'])
// user.company = 'арокен.ру'

// console.log(user)

// методы объектов


// const product = {
//     name: 'Ноутбук',
//     praci: 60000,
//     discount: 10,
//     characteristics: {
//         brend: 'Apple',
//         proccesor: 'M1'
//     },
//     checkDiscount: product => {
//         if ('discount' in product) {
//             console.log(`Скидка ${product.discount}`)
//         } else {
//             console.log('скидки нет')
//         }
//     }
// }






// product.checkDiscount(product) 


// цикл for in 

// const discount = 10
// const characteristics = "characteristics"

// const product = {
//     name: 'Ноутбук',
//     praci: 60000,
//     discount: discount,
//     [characteristics]: {
//         brend: 'Apple',
//         proccesor: 'M1'
//     },
// }

// for (const key in product) {
//     if (key === "characteristics") {
//         for (const charKey in product.characteristics) {
//             console.log(product.characteristics[charKey])
//         }
//     } else {
//         console.log(`${key}:`, product[key])
//     }
// }




// const user = {
//     userName: 'Andrei',
//     userAge: 27
// }

// const isChildrend = {
//     name:'Mira',
//     age: 4
// }

// const user2 = {...user, ...isChildrend}

// user2.userName = 'Oxsana'

// console.log(user2)









