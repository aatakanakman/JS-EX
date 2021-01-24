/*Document objesi bize sayfamızın istekelettini verir
    root olarak html etiketlerini döndürür.
    root un child etiketleri bildiğimiz gibi devam eder.




*/

// let val;

// val = window.document

// val = document.all;
// val = document.all.length
// val = document.all[11]
// val = document.body
// val = document.URL
// val = document.domain
// val = document.images
// val = document.title
// val = document.forms[0].id
// val = document.forms[0].method
// val = document.forms[0].action
// val = document.scripts[2].getAttribute('src')


// console.log(val)


/* ************************************ Selecting Elementssssss ********************** */

//Single Elements ------------------------

//Documen.getElementById

// let val; 

// val = document.getElementById('header');
// val=document.getElementById('header').className

// val = document.getElementById('header');
// // val = val.id

// val.style.fontSize='45px';
// val.style.color = 'red'
// val.style.fontWeight = 'bold'
// //val.style.display = 'none'
// document.getElementById('header').innerText ='My To Do App'
// document.getElementById('header').innerText ='<b>My To Do App</b>'
// document.getElementById('header').innerHTML ='<b>My To Do App</b>'

// console.log(val)

////Document.querySelector()------------------------

// console.log(document.querySelector('#header'))
// console.log(document.querySelector('.card-header'))
// console.log(document.querySelector('div'))
// console.log(document.querySelector('li').style.color='red')
// console.log(document.querySelector('li:last-child').style.color='blue')
// console.log(document.querySelector('li:nth-child(2)').style.color='yellow')
// document.querySelector('li:nth-child(3)').textContent='task item'

// document.querySelector('li').classList.add('active')



//------------------------Multiple Elements ------------------------


// //CLASS Name -> document.getElementByClassName()

let val;

// val = document.getElementsByClassName('list-group-item')

// val[1].style.color ='blue'
// val[1].style.font.size ='50px'
// val[2].textContent = 'Selam'

// for(let i = 0 ; i<val.length;i++){
//     console.log(val[i].style.color = 'red')
//     console.log(val[i].textContent = 'new item')
// }


// console.log(val)

// val = document.getElementsByTagName('li')
// val = document.getElementById('task-list')
// val = document.getElementById('task-list').getElementsByTagName('a')


 
// //documen.querySelectorAll() -> Nodelist olarak dönüyor farklı olarak foreach kullanılabilir.w

// val = document.querySelectorAll('li')

// val.forEach(function(item,index){
//     item.textContent = `${index} - hello`
// })

// val = document.querySelectorAll('li:nth-child(even)')

// val.forEach(function(item){
//     item.style.background = 'blue'
// })

// console.log(val)