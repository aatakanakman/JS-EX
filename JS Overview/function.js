function yasHesapla(dogumYili){
    return 2020 - dogumYili
}

let ageAda = yasHesapla(1999);
let ageAtakan = yasHesapla(2000);
console.log(ageAda)
console.log(ageAtakan)


function emeklilikKalanYil(dogumYili,isim){
    let yas = yasHesapla(dogumYili);

    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`${isim} Emekli olmanıza ${emeklilik} yıl kaldı.`)
    }else{ 
        console.log('Zaten emekli oldunuz.')
    }
}

emeklilikKalanYil(1999,'Atakan')


const sum = function(a,b){
    var c = a+b
    return c
}

console.log(sum(10,20))


function sumAll(){
    var total = 0 
    for(let i=0;i<arguments.length;i++){ //Arguments kullanımı güzeldir.
        total += arguments[i]
    }
    return total
}

console.log(sumAll(10,20,30,40))