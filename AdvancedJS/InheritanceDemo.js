
//Person Const
function Person(name){
    this.name = name;
}


Person.prototype.Introduce = function(){
    console.log('Hello my name is '+this.name);
}

//Teacher Cons

function Teacher(name,branch){
    Person.call(this,name);
    this.branch = branch;
    
} 

//Teacher in proto suna Person un protosunu eşitlemiş olduk.
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
// Prototype ı Person olduğu için bu atamayı yapmak durumundayız.





let p1 = new Person('Atakan');
p1.Introduce();

let t1 = Teacher('Ahmet','Math');
t1.Introduce();