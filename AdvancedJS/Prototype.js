/*Bir constructor üzerinden oluşturulan her instance için, kullabilecek olduğumuz fonskiyonlar
prototype kısmına eklersek, özellikler içerisinde gözükmez ve bu iyi bir şey.*/


//***************DEMO : Creating Objects****************/
/* 

    **Dışarıdan name ve salary bilgilerini alan Employee constructor'ı tanımlayınız.
    **Yıl içinde o ana kadar alınan toplam maaş ve alınan toplam vergi tutarını hesaplayan
    fonksiyonu oluşturun.
        Vergi dilimleri : 
            ** 20.000' e kadar %20,
            ** 30.00' e kadar %25,
            ** 30.000'den sonra %27

*/

function Employee(name,salary){
    
    //Bizim türetilen nesnemiz eğer emploee den türeyen bir nesne değil ise, kendimiz new döndürüyoruz.
    if(!(this instanceof Employee)){
        return new Employee(name,salary)
    }

    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateSalary = function(){
    var month = new Date().getMonth()+1 
    var tax = 0;
    total = this.salary*month;
    

    if(total<=20000){
        tax = total*0.2;
    }else if(total>20000 && total <= 30000){
        tax = total*0.25
    }else{
        tax = total*0.3
    }

    return {
        tax : tax,
        paid : total - tax
    }


}


var emp1 =  Employee('Atakan',3000) // new olmadan çağırsak bile kontrolümüz sayesinde oluşturabilyoruz.
var emp1_salary = emp1.calculateSalary()

console.log(`${emp1.name} isimli personel ${emp1_salary.tax} vergi kesintisi ile ${emp1_salary.paid}
TL maaş almıştır.`);

emp2 = new Employee('Can',4000)
var emp2_salary = emp2.calculateSalary();


console.log(`${emp2.name} isimli personel ${emp2_salary.tax} vergi kesintisi ile ${emp2_salary.paid}
maaş almıştır.`);



































// let Person =  function(name,birth,job){
//     this.name = name
//     this.job = job
//     this.birth = birth
    
// }

// Person.prototype.calculateAge = function(){
   
//     return 2018 - this.birth
    
// }

// Person.prototype.getName = function(){
//     return this.name;
// }

// Person.prototype.lastname = 'Turan'

// let emel = new Person('Emel', 1989,'Teacher')

// console.log(emel.getName());

// console.log(emel.hasOwnProperty('lastname'));

// console.log(emel.lastname);




