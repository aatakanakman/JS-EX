//1) Global variable naming conflicts
//Script.js
// var name = 'Atakan'
// //app.js
// var name = 'Çınar'
// console.log(name);


//2) Encapsulation

// var Counter ={
//     number : 0,
//     increment : function(){
//         return ++this.number;
//     },
//     decrement : function(){
//         return --this.number
//     }
// }


// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10;
// console.log(Counter.decrement());


//MODULE KAVRAMI NE İŞE YARAR?
//IIFE(Immediately Invoked Function Expressions)


// //1.durum çözüm
// //script.js ya da
// (function(){
//     var name = 'Atakan';
//     console.log(name);
// })();

// //app.js den birbirlerini ezmezler.
// (function(){    
//     var name = 'Çınar';
//     console.log(name);
// })();



// //MODUL OLARAK TANIMLARSAK DIŞARIDAN MÜDAHELELERİ ENGELLEYEBİLRİİZ:
// var Module = (function(){

//     //private members

//     let number = 0;
//     let increment = function(){
//         return ++number
//     }

//     let decrement = function(){
//         return --number;
//     }

//     return{
//         //public members
//         increment,
//         decrement
//     }

// })()

// //console.log(number);

// console.log(Module.increment());
// console.log(Module.decrement());


var Module = (function(){

    var privateMethod = function(){

    };

    return{
        publicMethod : function(){

        }
    }

})()


Module.publicMethod();
//return içerisindeki methodlara ulaşabiliyoruz.






