const products = [

    {name : 'Atakan',price : 3000},
    {name : 'Akman',price : 2000}, 
    {name : 'Dila',price : 1000}
];

var ProductContoller = (function(data){

    //private members
    var collections = data || [];
    
    const addProduct = function(product){
        collections.push(product)
    }

    const removeProduct = function(product){
        var index = collections.indexOf(product)
        if(index>=0){
            collections.splice(index,1)
        }
    }

    const getProduct = function(){
        return collections;
    }


    //Public members

    return{
        addProduct,
        removeProduct,
        getProduct,
    }

})(products);




ProductContoller.addProduct(products[0]);
ProductContoller.addProduct(products[1]);
ProductContoller.removeProduct(products[0]);
ProductContoller.addProduct(products[2]);


console.log(ProductContoller.getProduct());


//Module Extenting

var extended = (function(m){

    m.sayHello = function(){
        console.log("Hello from extended module");
    }

    return m;

})(ProductContoller || {})


extended.sayHello();
console.log(extended.getProduct());