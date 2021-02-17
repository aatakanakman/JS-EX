//Class => 

//Obje olarak oluşturduğumuzda prototype kısmına eklenen methodlar her instance için kullanılır örnek oluşturmadan.

//ES5

var PersonES5 = function(name,job,yearOfBirth){

    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;

}

PersonES5.prototype.calculateAge = function(){
    return 2018 - this.yearOfBirth;
}

var atakan = new PersonES5("Atakan","Student",1999);

console.log(atakan.calculateAge())
console.log(atakan);


//ES6 

// class PersonES6{
//     constructor(name,job,yearOfBirth){
//         this.name = name;
//         this.job = job;
//         this.yearOfBirth = yearOfBirth
//     }

//     calculateAge(){
//         return 2018 - this.yearOfBirth;
//     }

//     //Static Method
//     //Amaç oluşturduğumuz obje üzerinden ulaşıp kullanmamak.
//     static sayHi(){
//         console.log('Hello there');
//     }
    
// }

// var dila = new PersonES6('Dila','Student',2011);
// console.log(dila.calculateAge());
// console.log(dila);
// PersonES6.sayHi()


//STATIC METHODS

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){

        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);

    }

}

const d1 = new Point(10,10);
const d2 = new Point(20,20);

console.log(Point.distance(d1,d2))

