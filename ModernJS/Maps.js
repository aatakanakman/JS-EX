//Maps : key/value pairs(collection)

let val; 

const numbers = new Map();

numbers.set(1,"one");
numbers.set('2','two')
numbers.set(3,'three');
numbers.set('four','four');

val = numbers;

val = numbers.get(1)
val = numbers.get('2')
val = numbers.get('four')
val = numbers.size
val = numbers.delete('four')
val = numbers.has('four')
//numbers.clear()

console.log(val);


for(var [key,value] of numbers){
    
    console.log(key + " = " + value);
}

for(var [key,value] of numbers.entries()){
    
    console.log(key + " = " + value);
}

for(var key of numbers.keys()){
    
    console.log(key);
}


numbers.forEach(function(key,value){
    console.log(key +" " + value);
})


var first = new Map([
    [1,'onr'],
    [2,'two'],
    [3,'three']
])

var second = new Map([
    [4,'four'],
    [5,'five']
])

var merged = new Map([...first,...second]);

console.log(merged);