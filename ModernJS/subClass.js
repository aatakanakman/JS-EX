//Sub Classes

//ES5

function PersonES5(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;

}

PersonES5.prototype.sayHi = function(){
    return `Hello dear,I'm ${this.firstName} ${this.lastName}`
}

function CustomerES5(firstName,lastName,phone,username){

    PersonES5.call(this,firstName,lastName) //Customer objesi olarak gönderiyoruz. Kalıtımın ES5 hâli
    this.phone = phone;
    this.username = username;


}

CustomerES5.prototype = Object.create(PersonES5.prototype); // Kalıtım burda oluşuyor.

var customer = new CustomerES5('Atakan','AKMAN','1312312','atakanakman')

console.log(customer.sayHi());
console.log(customer);


//ES6


class PersonES6{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi(){
        return`Hello dear, I'am ${this.firstName} ${this.lastName}` 
    }
}

class CustomerES6 extends PersonES6{
    constructor(firstName,lastName,phone,username){
        super(firstName,lastName) // Ana klastaki const a değer gönderdik kalıtımla değer atamış olduk.
        this.phone = phone;
        this.username = username;
    }

    static getTotal(){
        return 1000;
    }
}

let customer1 = new CustomerES6('Dila','Destan','3123123','diladestan')

console.log(customer1.sayHi());
console.log(customer1);

console.log(CustomerES6.getTotal())