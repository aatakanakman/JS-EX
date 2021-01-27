



let personProto={
    calculateAge : function(){
        return 2020 - this.yearOfBirth
    }
}

let yigit = Object.create(personProto)

yigit.name = 'yigit'
yigit.yearOfBirth = 2019;
yigit.job = 'Student'


let emel = Object.create(personProto,{ 
    name : {value : 'Emel'},
    yearOfBirth : {value : 1989},
    job : {value : 'Teacher'}
})

console.log(emel);
console.log(emel.calculateAge());


console.log(yigit);
console.log(yigit.calculateAge());
