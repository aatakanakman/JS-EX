const todos = [
    {title : "Todo 1", description : "Todo 1 description"},
    {title : "Todo 2", description : "Todo 2 description"},
    {title : "Todo 3", description : "Todo 3 description"},
    {title : "Todo 4", description : "Todo 4 description"},
]

let todoListEl = document.getElementById('todo-list')

function todoList(){
    setTimeout(() => {
        let todoItems = ""
        todos.forEach(todo => {
            console.log(todo)
            todoItems += `
            <li>
                <b>${todo.title}</b>
                <p>${todo.description}</p>
            </li>
            `
        });
        todoListEl.innerHTML = todoItems
    }, 1000);
}

function newTodo(todo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            todos.push(todo)
            const e = false;

            if(!e){

                resolve(todos)

            }else{

                reject("Hata var....")

            }
        
        }, 2000);

    })
   
}

newTodo({
    title : "Todo 5",
    description : "Desc 5"
}).then(response => {

    console.log("Yeni liste" , response)
    todoList();

}).catch(e => {

    console.log(e)

})

todoList()



// // Promis All

// const p1 = Promise.resolve("P1")
// const p2 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Ben 2. promisim")
//     }, 2000);
// })
// const p3 = 14021967
// const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())


// Promise.all([p1,p2,p3,p4,]).then(promises => {
//     console.log("object",promises)
// })