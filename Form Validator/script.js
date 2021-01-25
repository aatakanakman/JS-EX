const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repassword = document.getElementById('repassword')
const phone = document.getElementById('phone')


function error(input , message){
    input.className ='form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
    console.log(div);
}

function success(input){
    input.className ='form-control is-valid'
}

function checkMail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        success(input)
    }else{
        error(input,'Hatalı bir mail adresi.')
    }
}

function checkRequred(inputs){

    inputs.forEach(function(input){
        if(input.value === ''){
            error(input,`${input.id} is required.`)
        }else{
            success(input);
        }
    })

    
}

function checkLenght(input,min,max){
    if(input.value.length < min){
        error(input,`${input.id} en az ${min} karakter olmalıdır.`)
    }else if(input.value.length > max){
        error(input,`${input.id} en fazla ${max} karakter olmalıdır.`)
    }else{
        success(input )
    }
}

function checkPasswords(input1,input2){
    if(input1.value !== input2.value){
        error(input2,'Parolalar eşleşmiyor');
    }
}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,'Telefon 10 karakterli olmalıdır.');
    }
}
 
form.addEventListener('submit',function(e){

    e.preventDefault();

    checkRequred([username,email,password,repassword,phone])
    checkMail(email)
    checkLenght(username,7,15)
    checkLenght(password,7,12)
    checkPasswords(password,repassword)
    checkPhone(phone)

    // if(username.value === ''){
    //     error(username,'Username gerekli')
    // }else{
    //     success(username)
    // }

    // if(email.value === ''){
    //     error(email,'Mail gerekli')
    // }else if(!validateEmail(email.value)){
    //     error(email,'Düzgün bir mail adresi giriniz.')
    // }else{
    //     success(email)
    // }

    // if(password.value === ''){
    //     error(password,'Password gerekli')
    // }else{
    //     success(password)
    // }

    // if(repassword.value === ''){
    //     error(repassword,'Repassword gerekli')
    // }else{
    //     success(repassword)
    // }

    console.log(username.value);

    

})