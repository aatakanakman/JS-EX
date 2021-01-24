//Local Storage

let val;
////*********************Set item
const firstName = localStorage.setItem('firstname','Atakan');
const lastName = localStorage.setItem('lastname','Akman')
let hobbies = ['sinema','araba','gezmek']


////*********************Get İtem

val = localStorage.getItem('firstname')

////*********************Remobve Item 

// localStorage.removeItem('firstname')
// localStorage.removeItem('lastname')


////*********************Clear 
// localStorage.clear()

//*********************Set Array to storage
localStorage.setItem('hobbies',JSON.stringify(hobbies)) //Obje şeklinde kaydetmek için fonk

val = JSON.parse(localStorage.getItem('hobbies'))

console.log(val);
console.log(localStorage);

// //Session Storage

// const city = sessionStorage.setItem('city','Karaman')
// const couuntry = sessionStorage.setItem('country','Turkey')


// console.log(sessionStorage);