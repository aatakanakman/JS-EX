//String

var str1 = 'Atakan'
var str2 = new String('Sadık')

console.log(str1);
console.log(typeof str1);
console.log(typeof str2);
console.log(str2);


String.prototype.repeat = function(n){
    return new Array(n+1).join(this)
}

console.log('sadık '.repeat(2));


//Number
var num1 = 10;
var num2 = new Number(10)


//Bool
var bool1 = true
var bool2 = new Boolean(true)


//Object
var object = {
    name : 'Atakan'
}

var object2 = new Object({
    name : 'Atakan'
})

//Array
var arr1 = ['Atakan','Ali','Sena']
var arr2 = new Array('Atakan','Ali','Sena')

Array.prototype.remove = Array.prototype.remove || function(member){
    //Array in protosunda remove yoksa demek ||
    var index = this.indexOf(member)

    if(index > -1){
        this.splice(index,1)
    }
    return this;
}

console.log(arr1.remove('Sena'))