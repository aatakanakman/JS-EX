function sumES5(){
    let arr = Array.prototype.slice.call(arguments)

    let result = 0;
    arr.forEach(function(item){
        result += item;
    });
    return result;
}

console.log(sumES5(10,30,60));


//ES6

function sumES6(...arr){

    let result = 0;

    arr.forEach(item=>result+=item)

    return result;

}

console.log(sumES6(10,30,60));

//ES6
function isDriver(age,...years){
    years.forEach(year => console.log(2020-year>=age))
}


isDriver(17,1990,2002,2005,1983)