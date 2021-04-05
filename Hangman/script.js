
// Gerekli olan elementleri sabitlere aktarıyoruz.
const word_el = document.getElementById('word');
const popup_cont = document.getElementById('popup-container')
const popup = document.getElementsByClassName('popup');
const message_el = document.getElementById('succes-message');
const wronLetter_el= document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const message = document.getElementById('message');
const PlayAgainBtn = document.getElementById('play-again');

//Doğru tahmin edilen ve yanlış tahmin edilen harfleri tutmak için boş diziler tanımlıyoruz.
const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();   //dizi içerisindeki rastgele bir indexten kelime seçiyoruz.

function getRandomWord(){
    const words = ["javascript","java","python","ruby","html","css"];

    return words[Math.floor(Math.random() * words.length)]
}



function displayWord(){
    
    /* İlgili olan elementin içine atmak üzere, seçilen kelimeti harflerine parçalayarak atıyoruz. */

    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class = "letter">
            ${correctLetters.includes(letter) ? letter : ''}
            </div>
        `).join('')}
    
    `;

    // alınan karakterlerin yan yana yazılmasın sağladık ve altta
    // seçilen kelime ve yanyana dizilen harfler eşitse bilindiğini söyledik.
    const w = word_el.innerText.replace(/\n/g,'');

    //Eğer sırasıyle seçilen ve yanyana dizilen harfler rastgele seçilen harf ise, pop up çıkarttık.
    if(w === selectedWord){
        popup_cont.style.display = 'flex';
        message_el.innerText = 'Tebrikler Kazandınız.'
    }
}

// Her yanlış basılan harf için yanlış harfleri güncelledik.
function updateWrongLetters(){
    wronLetter_el.innerHTML = `

        ${wrongLetters.length >0 ? '<h3> Hatalı Harfler </h3>': ''}
        ${wrongLetters.map(letter => `
            <span>${letter}</span>
        `)}

    `;

    //Yanlış harflere basıldıkça adamın parçalarının sırasıyla çıkmasını sağladık.
    items.forEach((item,index) => {
        const errorCount = wrongLetters.length;

        if(index < errorCount){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })

    //Yanlış harf satısı adamın parça sayısına eşitlendiği anda, kaybetiniz pop-up ı çıkarttık.
    if(wrongLetters.length == items.length){
        popup_cont.style.display = 'flex';
        
        message_el.innerText = 'Maalesef Kaybettiniz.'
    }
    
}

// Aynı harfe tekrar tıklama olduğunda, mesajı çıkartmak için fonskiyon.

function displayMessage(){

    message.classList.add('show');

    setTimeout(function(){
        message.classList.remove('show');
    },1500)
}


//Play again butonuna tıklandığında, gerekli sıfırlamaları ve window nesnesi üzerinden kaldırılacak işlemleri yaptık.
PlayAgainBtn.addEventListener('click',function(){
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = getRandomWord();

    displayWord();
    updateWrongLetters();

    popup_cont.style.display = 'none'
})


//Klavye tıklanmalarını almak için fonksiyon.
window.addEventListener('keydown',function(e){
    if(e.keyCode >= 65 && e.keyCode <= 90){ //tıklanan tuşların keycode larının harf olduğunu anlamak için.
        const letter = e.key;
        if(selectedWord.includes(letter)){  //Seçilen world içerisinde, tıklanan harf varsa,
            if(!correctLetters.includes(letter)){ //Önceden bilinen harfler içinde yoksa
                correctLetters.push(letter); //Doğru tahmin edilen harflere ekle dedil.
                displayWord(); //ve kelimeleri göster methodunu çağırdık.
            }else{
                displayMessage();   
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
                // Hatalı harfleri güncelle
            }
            else{
                displayMessage();
            }
        }
    }
    

});

displayWord();
