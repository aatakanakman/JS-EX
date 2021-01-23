var hesapA = {
    ad : 'Ali Atakan AKMAN',
    hesapNo : '12345678',
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB = {
    ad : 'Dila AKMAN',
    hesapNo : '12345690',
    bakiye : 3000,
    ekHesap : 2000
}

function paraCek(hesap,miktar){
    hesap.bakiye = hesap.bakiye - miktar
    console.log(`Merhaba ${hesap.ad}`)

if(hesap.bakiye >= miktar){
    console.log('Paranızı alabilirsiniz.')
}else{
    var toplam = hesap.bakiye + hesap.ekHesap

    if(toplam >= miktar){
        if(confirm('Ek hesabınızı kullanmak ister misiniz?')){
            console.log('Paranızı alabilirsiniz')
            var bakiye = hesap.bakiye
            var ekHesap = miktar - bakiye
            hesap.bakiye = 0
            hesap.ekHesap = hesap.ekHesap - ekHesap
        }else{
            console.log(`${hesap.hesapNo} numaralı hesabınızda ${miktar} bulunmamaktadır.`)
        }
    }else{
        console.log('Üzgünüz bakiye yetersiz.')
    }
}
}

paraCek(hesapA,2000)


