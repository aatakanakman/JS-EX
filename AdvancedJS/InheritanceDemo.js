
//PERSON CONSTRUCTOR
function Person(name){
    this.name = name;
}

Person.prototype.Introduce = function(){
    console.log("Hello my name is " + this.name);
}


//Teacher Consructor
function Teacher(name,branch){
    Person.call(this,name);
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function(){
    console.log('I teach ' +this.branch);
}


//STUDENT CONTSRUCTOR
function Student(name,number){
    Person.call(this,name);
    this.number = number;
}
Student.prototype = Object.create(Person.prototype); // Inherit
Student.prototype.constructor = Student;
Student.prototype.study = function(){
    console.log('My student number is ' + this.number + ' Ive aldeady study hard');
}

//Headmaster Contsructor
function Headmaster(name,branch){
    Teacher.call(this,name,branch)
}

Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;
Headmaster.prototype.shareTask = function(){
    console.log("Ive already shared all the work");
}

let p1 = new Person('Atakan')
p1.Introduce()

let t1 = new Teacher('Özge','English')
t1.Introduce()
t1.teach()

let s1 = new Student('Ali',123)
s1.Introduce()
s1.study()

let h1 = new Headmaster('Ahmet','Pyhsics');
h1.Introduce() // Person
h1.teach() // Teacher
h1.shareTask() //Headmaster