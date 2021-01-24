//UI vars

const form = document.querySelector('form')
const input = document.querySelector('#txtTaskName')
const btnDeleteAll = document.querySelector('#btnDeleteAll')
const taskList = document.querySelector('#task-list')
let items;


//load items
loadItems();


//Call event listeners
eventListeners();

//Add event listener
function eventListeners() {
    //Submit event
    form.addEventListener('submit', addNewItem)

    //Delete an item
    taskList.addEventListener('click', deleteItem)

    //Delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems)

}

//Load items
function loadItems() {

    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item)
    })
}
//Get items from local storage
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'))
    }
    return items
}

//Set item to local storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text)
    localStorage.setItem('items',JSON.stringify(items));
}

//Delete item from local storage
function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item===text){
            items.splice(index,1);
        }
        
    })
    localStorage.setItem('items',JSON.stringify(items));
}

function createItem(text) {
    //Create li 
    const li = document.createElement('li');
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text))

    //Create  a
    const a = document.createElement('a')
    a.classList = "delete-item float-right"
    a.setAttribute('href', '#')
    a.innerHTML = '<i class="fas fa-times"></i>'

    //add a to li
    li.appendChild(a)

    //Ad li to ul
    taskList.appendChild(li)
}

//Add new item
function addNewItem(e) {

    if (input.value === '') {
        alert('please add new item')
    }

    createItem(input.value)

    //Save to LS
    setItemToLS(input.value);


    //Clear input
    input.value = ''


    e.preventDefault();

}

//Delete item 
function deleteItem(e) {

    if (e.target.className === 'fas fa-times') {
        if (confirm('are you sure ?')) {
            e.target.parentElement.parentElement.remove();

            //Delete item from ls
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        } 
    }

    e.preventDefault();
}

//Delete all items
function deleteAllItems(e) {

    if (confirm('are you sure ? ')) {
        while(taskList.firstChild){ //Task listin ilk elemeanı var olana kadar dön
            taskList.removeChild(taskList.firstChild) //Her seferinde ilk elemanı sil 
        }
        localStorage.clear();
    }

    //taskList.innerHTML=''




    e.preventDefault();
}