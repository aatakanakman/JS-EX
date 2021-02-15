const person = {
    firstName : 'ATAKAN',
    lastName : 'AKMAN',
    // get fullName(){
    //     return `${person.firstName} ${person.lastName}`
    // },

    // set fullName(value){
    //     const parts = value.split(' ');
    //     this.firstName = parts[0];
    //     this.lastName = parts[1];
    // }
}

Object.defineProperty(person,'fullname',{
    get function(){
        return `${person.firstName} ${person.lastName}`
    },

    set function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person,'age',{
    value : 50,
    writable : true  //Yazılabilen (set) true olarak ayarlarsak değer atamaları işlenir.
})

person.age = 55;

person.fullName = 'Çınar Turan'
console.log(person.fullName);

console.log(person);