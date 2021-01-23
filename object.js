
let val;
let person = {
    firstName : 'Atakan',
    lastName : 'AKMAN',
    age : 20,
    hobbies : ['Music','Game'],
    adres : {
        city : 'Karaman',
        country : 'Turkey'
    
    },
    getBirthYear : function(){
        return 2020 - this.age
    }

}
val = person
val = person.firstName;
val = person.lastName;
val = person['firstName']
val = person.age
val = person.hobbies
val = person.hobbies[1]
val = person.hobbies.length
val = person.adres
val = person.adres.city
val = person.adres['city']
val = person.getBirthYear()




let people = [
    {firstName: 'Atakan',lastname:'Akman'},
    {firstName: 'Dila',lastname:'Akman'},
    {firstName: 'Ayşe',lastname:'Akman'}
]

val = people[2].firstName

console.log(val)
console.log(typeof people)