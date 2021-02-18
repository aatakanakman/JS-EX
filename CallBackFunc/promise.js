//Promise Ex Application 

//Promise söz vermek anlamına gelir. Şu şekilde bir durum olursa ben size ... göndericem 
//anlamındadır.
/*
var p = new Promise(function(resolve,reject){
    if(true){
        resolve('Success')
    }else{
        reject('Failure');
    }
});


//Verdiğimiz söz gerçekleşirse karşılamak gerekiyor.Then e resolve içerisindeki değer gönderilecek
 
p.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})
*/


 


/*
new Promise(function(resolve,reject){

    setTimeout(()=>{

        resolve(5);

    },1000)


}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number){
    console.log(number);
});

*/



const isMomHappy = true;

const willGetNewPhone = new Promise((resolve,reject)=>{
    if(isMomHappy){
        const phone = {
            name : 'Iphone 8',
            price : 4000,
            color : 'Silver'
        }
        resolve(phone)
    }else{
        const error = new Error('Mom is not happy')
        reject(error)
    }
});

const showToFriends = function(phone){

    const message = "He friends this is my new phone " + phone.name
    return Promise.resolve(message);

}




const askMom = function(){

    willGetNewPhone
            .then(showToFriends)
            .then(message => console.log(message))
            .catch(error=>{
                console.log(error);
            })
}

askMom();


