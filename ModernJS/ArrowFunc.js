let welcomeES5 = function () {
    console.log("Hello from ES5");
}


welcomeES5()


//ES6

let welomeES6 = () => {
    console.log("hello from es6");
}

welomeES6()



//With parameters

let multiplyES5 = function (a, b) {
    return a * b;
}

console.log(multiplyES5(10, 5));


//let multiplyES6 = (x,y) => {return x*y}

let multiplyES6 = (x, y) => x * y

console.log(multiplyES6(5, 10));


//ES5

let splitES5 = function (text) {
    return text.split(' ')
}
console.log(splitES5("Atakan AKMAN"));

//ES6 

let splitES6 = text => text.split(' ')

console.log(splitES6("Atakan AKMAN"));


//Object Literals
///ES5

let getProductES5 = function (id, name) {
    return {
        id: id,
        name: name
    }
}

console.log(getProductES5('1', "Samsung S5"));

//ES6 
let getProductES6 = (id, name) => ({
    id: id,
    name: name
})

console.log(getProductES6("1", "Iphone 7"));


const phones = [
    { name: 'Iphone 8', price: 3000 },
    { name: 'Iphone 6', price: 2000 },
    { name: 'Iphone 5', price: 1000 },
    { name: 'Iphone 7', price: 2500 }
];

//ES5
let pricesES5 = phones.map(function (phone) {
    return phone.price
})

console.log(pricesES5);

//ES6
let pricesES6 = phones.map(phone => phone.price)
console.log(pricesES5);


//ES5
const arr = [1, 2, 3, 6, 10, 20, 30, 50, 55, 61, 79];

let evenES5 = arr.filter(function (a) {
    return a % 2 == 0;
})

console.log(evenES5);


//ES&
let evenES6 = arr.filter(a => a % 2 == 0)
console.log(evenES6);



/* ***********************-THIS KEYWORD ************************* */

//ES5
// let list = {
//     category : 'phone',
//     names : ['Iphone8','Samsung S8','Iphone 7'],
//     call : function(){
//         var self = this;
//         this.names.map(function(name){
//             console.log(`${self.category} ${name}`);
//         })
//     }
// }


//ES6
///Arrow func'lar this için yeni bir context oluşturmazlar.
// let list = {
//     category: 'phone',
//     names: ['Iphone8', 'Samsung S8', 'Iphone 7'],
//     call: function () {
        
//         this.names.map((name) =>{
//             console.log(`${this.category} ${name}`);
//         })
//     }
// }

// list.call()

//ES5
// function Game(){
//     this.live = 0;
//     this.addLive = function(){
//         var self = this;
//         this.OneUp = setInterval(function(){
//            console.log(++self.live); 
//         },1000)
//     }
// }

// let player = new Game();
// player.addLive()


//ES6
function Game(){
    this.live = 0;
    this.addLive = function(){
        
        this.OneUp = setInterval(()=>{
           console.log(++this.live); 
        },1000)
    }
}

let player = new Game();
player.addLive()