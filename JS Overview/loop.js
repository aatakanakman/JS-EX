let cars = ['BMW','Mercedes','Toyota']
let people = [
    {firstName : 'Atakan',lastName : 'AKMAN',},
    {firstName : 'Ayşe',lastName : 'KAYA',},
    {firstName : 'Dila',lastName : 'AKMAN',}
]

// for(let i = 0;i<cars.length; i++){
//     console.log(cars[i])
// }


// for(i in cars){
//     console.log(`index : ${i} value : ${cars[i]}`)
// }

// console.log(cars)

// for(let i = 0 ; i < people.length ; i++){
//     console.log(people[i].firstName)
// }


// cars.forEach(function(item){
//     console.log(item)
// })

// let val = people.map(function(item){
//     return item.firstName + ' ' + item.lastName
// })

// console.log(val);



let numbers = [1,5,6,8,10]

let num = numbers.map(function(n){
    return n*n
})

console.log(num);