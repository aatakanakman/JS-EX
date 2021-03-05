// //Singleton Pattern

// var singleton = (function(){

//     var instance;

//     const createInstance = function(){
//         return{
//             randomNumber : Math.random()
//         }
//     }



//     return{
//         getInstance : function(){
//             if(!instance){
//                 instance = new createInstance();
//             }
//             return instance;
//         }
//     }



// })();


// const instance1 = singleton.getInstance();
// const instance2 = singleton.getInstance();

// console.log(instance1.randomNumber);
// console.log(instance2.randomNumber);


var singleton = (function(){

    var instance;
    function ProductContoller(){
        const products = [

            {name : 'prd 1'},
            {name : 'prd 2'},
            {name : 'prd 3'},
        ]

        const add = function(prd){
            products.push(prd);
        }

        const get = function(){
            return products;
        }

        return{
            add,
            get
        }
    }

    return {
        getInstance : function(){
            if(!instance){
                instance = new ProductContoller();
            }
            return instance;
        }
    }


})()

const prdcnt1 = singleton.getInstance();
const prdcnt2 = singleton.getInstance();

prdcnt1.add({name : 'prd 4'});
console.log(prdcnt2.get());