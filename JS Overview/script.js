// console.log("Merhaba")
// console.log(1234)
// console.log(true)
// console.log([1,2,3,4,5])
// console.error("Hata oluştur")
// console.warn("Uyarı")

// //Tek Satırlık bir yorum satırı

// Değişkenler

// var age;
// age = 20;
// console.log(age);


//DEĞİŞKEN TİPLERİ

//Primitive Types

    //String
//     let firtName = "Atakan"
//     console.log(typeof firtName)

//     //Number
//     let age = 20;
//     console.log(typeof age)
// //Referance Types - Objects

// let names =['Ali','Ahmet','Can'];

// let adres = {
//     city: 'Karaman',
//     country: 'Türkiye'
// }

// console.log(typeof adres.city)

// Tür Dönüşümleri 

    // let num1 = Number("5")
    // let num2 = Number("10")
    // let total = num1 + num2
    // val = new Date()
    // console.log(num1 + num2)
    // console.log(total)
    // console.log(typeof total)
    // console.log(val.getDate())

    // var customerName = 'Ali Atakan'
    // var customerLastName = 'AKMAN'

    // var fullName = 'Ali Atakan AKMAN'
    // var customerId = '12121212121'

    // var total = 205.6;
    // var gender = false // Erkek True , kadın false

    // var address = {
    //     city : 'Karaman',
    //     district: 'Merkez',
    //     body: 'Elmaşehir Mah 1242'
    // }

    // var hobbies = ['Sinema','Kitap','Spor']

    // var order1 = Number('100');
    // var order2 = Number('150');

    // var totalOrder = (order1 + order2)
    // console.log(totalOrder)

    // var order3 = Number('100.5');
    // var order4 = Number('150.2');

    // var totalOrder2 = order3 + order4

    // console.log(totalOrder2)

    // var order5 = parseInt('100.5');
    // var order6 = parseInt('150.2');

    // var totalOrder3 = order5 + order6

    // console.log(totalOrder3)
    
    // const yearOfBirth = 1999;
    

    // console.log(new Date().getFullYear()-yearOfBirth)

    // let course = "Selam arkadaşlar ben Atakan js çalışmak istiyorum."

    // console.log(course.length)


    // let d = new Date();
    // let birth = new Date(1999,1,23);




    // //Set Methods
    // d.setFullYear(2020)
    // d.setMonth(5)
    // d.setDate(20)
    // d.setHours(10)
    // d.setMinutes(10)



    // //Get Methods
    // console.log(d.getDate())
    // console.log(d.getDay())
    // console.log(d.getFullYear())
    // console.log(d.getMonth())
    // console.log(d.getHours())
    // console.log(d.getMinutes())
    // console.log(d.getSeconds())

    // console.log(d.getFullYear() - birth.getFullYear())

    // console.log(d);
    // console.log(typeof d);


    // Numbers Uygulama

    // var num = 15.123456789;

    // //toplamda 3 basamaklı sayı kullan
    // var num1 = num.toPrecision(3)
    // console.log(num1)

    // //Ondalik kısmı 3 basamaklı sayı kullanma
    // var yeniNum = num.toFixed(3)
    // console.log(yeniNum)

    // //en yakın sayıya yuvarla

    // var num2 = Math.round(num)
    // console.log(num2)

    // //Aşağı yuvarla

    // var num3 = Math.round(num)
    // console.log(num3)

    // var num4 = Math.ceil(num)
    // console.log(num4)

    // //En büyük en küçük 
    
    // console.log(Math.min(1,2,10,56,20))
    // console.log(Math.max(1,2,10,56,20))

    // //Rastgele sayı
    // var min = 50
    // var max= 100

    // console.log(Math.random()*(max-min))

    // /*Müşteri Maaş Hesaplama**************************************
    // ** Brüt Maaş :Ç 3700 TL
    // **Brüt Mesai : 10.3 TL
    // Ağustos ayı mesai yoplamı 42 saat ise brüt maaş nedir?
    // Brüt maaş üzerinden toplan kesinti oranı %25 ise alınacak net maaş nedir?
    // */
    
    // var brutMaas = 3700;
    // var mesaiUcreti = 10.3;
    // var mesaiSuresi = 42;


    // var toplanBrutMaas = brutMaas +(mesaiUcreti*mesaiSuresi)

    // var toplanNetMaas = toplanBrutMaas - (toplanBrutMaas*0.25)
    // console.log(toplanBrutMaas)
    // console.log(toplanNetMaas.toFixed(2))


    const firstName ="Atakan"
    const lastName = 'AKMAN'
    let hobbies = 'sinema,spor,kitap,yazılım'
    const age = 35
    let val;

    val = firstName+' '+lastName
    val = 'Atakan'
    val += ' AKMAN'

    val = 'Benim adım '+firstName+' '+lastName+ ' ve yaşım '+ age + " Karaman'da yaşıyorum."

    //String concat

    val = firstName.concat(',',lastName)

    //Strgin Lenght

    //val = val.length

    //String upper and lower

    // val = val.toUpperCase()
    val = val.toLowerCase()

    // //val = val.indexOf('x')
    // //val = val.substring(2,9)

    // val = val.slice(5)

    //String search
    val ="      "+val.replace('atakan','ali')+ "       "
    val = val.trim()

    //val = val[0]

    val = hobbies.split(',')

    console.log(val)