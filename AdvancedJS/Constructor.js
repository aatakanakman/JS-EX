//Object Literals

// let yigit = {
//     name : 'yigit',
//     yearOfBirth : 2010,
//     jon : 'Student'
// }

// function Person(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     console.log(this)
// }


let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2020 - this.yearOfBirth
    }
}


let yigit = new Person('Yiğit', 2019, 'Student')
let emel = new Person('Emel', 1999, 'Nurse')
let atakan = new Person('Atakan', 1990, 'Software Engineer')


console.log(yigit.name);
console.log(emel.yearOfBirth);
console.log(atakan);

