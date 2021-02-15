//Function prototype ile gelirler.

var welcome = function(a,b){
    console.log('Welcome ' +this.name+'.Are you interested in ' + a +' and '+ b);
}

var atakan = {name : 'ATAKAN'};
var ada = {name : 'Ada'}

welcome.call(atakan,'html','angular')
welcome.apply(ada,['html','angular']) //apply de parametlereler dizi olarak gönderilir.

//BIND
welcomeAtakan = welcome.bind(atakan,'html','angular');
welcomeAtakan()
welcomeAda = welcome.bind(ada);
welcomeAda('html','angular')





//DEMO 
var num ={
    min : 0,
    max : 100,
    checkNumerikRange : function(value){
        if(typeof value !== 'number'){
            return false;
        }else{
            return value >= this.min && value<=this.max;
        }
    }
}

console.log(num.checkNumerikRange(12));

var num1 = {min : 50 , max : 60}

console.log(num.checkNumerikRange.call(num1,65))

console.log(num.checkNumerikRange.apply(num,[50]));

var checkNumber = num.checkNumerikRange.bind(num1)

console.log(checkNumber(20));

