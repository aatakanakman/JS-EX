//Array

let names = ['Atakan','Ali','Dila','Destan'];

let years = [1999,2000,2011,2015]

let mix = ['atakan','akman',1999,null,undefined,['sinema','kitap']]

// // Get array item
// console.log(names[0]);

// //Set array item 
// names[names.length]= 'Mustafa'

// // add item
// years.push(1200)
// years.unshift(1986)

// //Remove item
// years.pop() //SON ELEMAN
// years.shift() //En baştaki

// //indexof
// let index = names.indexOf('Ali')
// console.log('index : '+index)

// //Reverse methodu 
// names.reverse();

// //Sort
// years.sort();

// //Concat
// let val = years.concat(names)

// //Splice

// names.splice(2,0,'Seda')

//Find


//Filter


function over18(year){

    let age = 2020 - year;
    return age>=18
}
    //let val = years.find(over18) //years diziindeki her eleman fonksiyonuumuza uğruyor. İlk true doner
    let val = years.filter(over18) //filtrenelenmiş bir şekilde, dizi olarak döner


console.log(val);

console.log(names)
console.log(typeof names)
console.log(years)
console.log(mix)
