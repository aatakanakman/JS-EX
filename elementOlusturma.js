//createElement 

const li = document.createElement('li');

//Add class

li.className = "list-group-item list-group-item-secondary";

//Add Attribute
li.setAttribute('title','new item');
li.setAttribute('data-id','5');

//Text Node

const text = document.createTextNode('Selamın Alikum')

li.appendChild(text)

const a = document.createElement('a');
a.setAttribute('href','#')
a.className = 'delete-item float-right'
a.innerHTML = '<i class="fas fa-times"></i>'


//append a to li
li.appendChild(a)

//Append li to ul
document.querySelector('#task-list').appendChild(li);


console.log(li)