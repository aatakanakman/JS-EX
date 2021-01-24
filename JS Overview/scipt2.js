//Template Literals

const fullName = 'Ali Atakan AKMAN'
const city = "Karaman"
const yearOfBirth = 1999

let val;

val = 'my name is '+fullName+
    ' I\'m '+(2021-yearOfBirth)+' years old '+
    'and I live in '+city;

    //Turnary operator
val = `my name is ${fullName} I'am ${(2018-yearOfBirth >=18)?'over 18':'under 18'} and I live in ${city}`

console.log(val)