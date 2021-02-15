//Referance Error
//Type error 
//Sytntax Error
//URI error

var user = {
    name : 'Ali Atakan'
}



try {
    
    //console.log(myFunction());
    console.log(user.name);
    if(!user.email){
        throw new Error('User has no email')
    }
} catch (e) {//Hata varsa çalışır
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
    // console.log(e instanceof TypeError);
    // console.log(typeof e);
}
finally{//Her türlü çalışır
    console.log('Finally block');
}





//DEMOOOOOo

document.getElementById('myBtn').addEventListener('click',function(e){

    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
    errors.innerHTML = ' '

    try {
        if(name.value.length == 0 ){
            throw new Error('Name is required')
        }
        if(name.value.length > 20){
            throw new Error('Name is too long')
        }
        if(age.value.length == 0){
            throw new Error('Age is required')
        }
        if(isNaN(age.value)){
            throw new Error('Age is not a numeric')
        }
        console.log('Form is submitted');
    } catch (error) {
        errors.innerHTML = error.message;
    }finally{
        name.value = '';
        age.value = '';
    }
    

    e.preventDefault()
})



