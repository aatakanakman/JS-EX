//Protoypal Inheritance

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job
}



Person.prototype.calculateAge = function(){
    return 2020-this.yearOfBirth;
}


let Teacher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job) // Teacher objesini al ve person objesine göndererek değerleri doldur dedik.
    this.subject = subject;
}

//Inherit the Person proptype methods

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.greeting = function(){
    return "Hello my name is " + this.name;
}


//Set teacher's construcor
Teacher.prototype.constructor = Teacher;
console.log(Teacher.prototype.constructor);

let emel = new Teacher('Emel',1989,'Teacher','Math')

console.log(emel);
console.log(emel.calculateAge());