//Event Bubbling içten dışa doğru aktarım demek.

const form = document.querySelector('form')
const cardBody = document.querySelector('.card-body')
const card = document.querySelector('.card')
const container = document.querySelector('.container')


// form.addEventListener('click',function(e){
//     console.log('Form')
//     e.stopPropagation(); // İçten dışa doğru olan aktarımı ipral etmek için.
// })
// cardBody.addEventListener('click',function(e){
//     console.log('Card Body')
//     e.stopPropagation();
// })
// card.addEventListener('click',function(e){
//     console.log('card')
//     e.stopPropagation();
// })
// container.addEventListener('click',function(e){
//     console.log('container')
//     e.stopPropagation();
// })


//Event Capturing  //Dıştan içe aktarımdır. Fonskiyon 3. parametresi ile aktif edilir. Örnekte var

// form.addEventListener('click',function(e){
//     console.log('Form')
//     e.stopPropagation()

// },true)
// cardBody.addEventListener('click',function(e){
//     console.log('Card Body')
//     e.stopPropagation()
// },true)
// card.addEventListener('click',function(e){
//     console.log('card')
//     e.stopPropagation()
// },true)
// container.addEventListener('click',function(e){
//     console.log('container')
//     e.stopPropagation()
// },true)



// const deleteItems = document.querySelectorAll('.fa-times')

// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target)
//     })
// })

// console.log(deleteItems);



const ul = document.querySelector('ul')

ul.addEventListener('click',function(e){
    
    if(e.target.className==='fas fa-times'){
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault()

})