var a = 10;
var b = a;

console.log(a);
console.log(b);


var obj1 = {
    name : 'Atakan',
    age : 10
}


var obj2 = obj1
obj2.age = 12

console.log(obj1.age);
console.log(obj2.age);

var num = 50;
var account = {
    name : 'Yiğit',
    accountNumber : '123123123'
}

function Update(a,b){

    a = 100;
    b.accountNumber = '12121212'

}

Update(num,account);

console.log(num);
console.log(account);


//Objeler referans türlerdir ve adresler işin içine girdiği için değişimlerden kendileri birebir
//olarak etkilenirler.


var products = [
    {name : 'Name',price : 1000},
    {name : 'Name',price : 1000},
    {name : 'Name',price : 1000},
    {name : 'Name',price : 1000},
    {name : 'Name',price : 1000},
    {name : 'Name',price : 1000},
]

function filterProducts(prd){ 
}


filterProducts(products)