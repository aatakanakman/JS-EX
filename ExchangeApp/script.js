const api = "https://api.exchangeratesapi.io/";


//Gerekli Elementleri tanımlıyoruz.

const el_currency_one = document.getElementById('currency_one')
const el_currency_two = document.getElementById('currency_two')
const el_amount = document.getElementById('amount');
const el_btn_calculate = document.getElementById('btn_calculate');
const el_result = document.getElementById('result')


//Base olarak kullanacağımız sembolleri bir dosyadan fetch ederek alıyoruz.
fetch('./currencies.json')
    .then(res => res.json()) //fetch den dönen Promise içerisinden res i json ile okunacak şekle getiriyoruz.
    .then(data => { // Promise den dönen res.json bize data olarak dönüyor ve 
        const keys = Object.keys(data); //Data içerisinden anahtarları alıyoruz
        const values = Object.values(data);//Data içerisinde value bilgilerini alıyoruz.

        let options;

        for (let i = 0; i < keys.length; i++) {
            
            //Drop-Down menü içerisine eklemek için etiketlerimi oluşturuyoruz.
            options += `<option value=${keys[i]}>${values[i]}</option>`
            
        }

        el_currency_one.innerHTML += options;
        el_currency_two.innerHTML += options;
    })


el_btn_calculate.addEventListener('click',function(){

    //Api hangi kura göre işlem yapılacağını ve hangi kurlar arasında dönüşüm yapacağını vermek için değişkenler.
    const base_curreny = el_currency_one.value;
    const to = el_currency_two.value;
    const amount = el_amount.value;

    //Api isteğimizde bulunuyoruz.
    fetch(`${api}latest?base=${base_curreny}`)
        .then(res=>res.json()) //Responsa olarak dönen objeyi json yardımıyla çeviriyoruz.
        .then(data => { //İlk promisten yakalanacak olan res.json data olarak geliyor ve ikinci then de yakalıyoruz.
            const rate = data.rates[to] //data içerisindeki fiyat karşılıkları içerisinde işlem için istenen kuru index olarak gönderdik.
            el_result.innerHTML = `${amount} ${base_curreny} = ${amount * rate}`; //Dönüşün istenen miktar kadar çarpıp kullanıcıya sunuyoruz.
        })
})
