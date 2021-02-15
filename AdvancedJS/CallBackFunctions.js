//CallBack Functions

let val;

function MultiplyByTwo(a,b,c,callback){
    let arr = []
    for(let i=0;i<3;i++){
        arr[i] = callback(arguments[i]*2);
    }
    return arr;
}


function addOne(a){
    return a + 1 ;
}

function addTwo(a){
    return a + 2 ;
}

function addThree(a){
    return a + 3 ;
}

// val = MultiplyByTwo(5,10,20,addThree)

val = MultiplyByTwo(10,20,30,function(a){
    return a+1;
})

//val = addOne(10)

// for(let i = 0;i<val.length;i++){
//     val[i] = addOne(val[i])
// }

console.log(val); 