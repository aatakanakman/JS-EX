//Event Listeners.

const btn = document.querySelector('#btnDeleteAll')
const btn2 = document.querySelector('#btnAddNewTask')

btn.addEventListener('click',function(e){
    let val;

    val = e

    val = e.target // Hangi butona tıklandı  
    val = e.target.id
    val = e.target.classList
    val = e.type
 
    console.log(val)

    e.preventDefault() //Scrool barın oynamasını engelledik.
})



// btn.addEventListener('click',btnClicked)
// btn2.addEventListener('click',btnClicked)

// function btnClicked(){
//     console.log('btn clicked')
// }

console.log(btn); 