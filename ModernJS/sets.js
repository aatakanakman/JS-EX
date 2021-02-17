//Sets (Collection & Unique value)
//Setlerde key ve value ler aynı değeri temsil ederler.

let val;
var mySets = new Set();

mySets.add(1);
mySets.add(2)
mySets.add(2)
mySets.add('iki')
mySets.add({a:1,b:2})


//Kaplanan adresler farlı olduğundan dolayı objeler fazlaca eklenebilir.
var obj = {a:1,b:2}

mySets.add(obj);

val = mySets.has(1)
val = mySets.has(8)
val = mySets.size;
mySets.delete(1)




console.log(val);
console.log(mySets);


for(let item of mySets){
    console.log(item);
}

for(let item of mySets.keys()){
    console.log(item);
}

for(let item of mySets.values()){
    console.log(item);
}

for(let [key,value] of mySets.entries()){
    console.log([key,value]);
}

console.log(Array.from(mySets)) // direk olarak diziye çevirebiliyoruz.

let mySet2 = new Set([1,2,3,4])

console.log(mySet2);



//Intersect

//var Intersect = new Set(Array.from(mySets).filter(x=>mySet2.has(x)))

var Intersect = new Set([...mySets].filter(x=>mySet2.has(x)))

console.log(Intersect);

//Diffrence


var diffrence = new Set([...mySets].filter(x=>!mySet2.has(x)))

console.log(diffrence);