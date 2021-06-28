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

function newTodo(todo, callback) {
    
    setTimeout(() => {
        todos.push(todo);
        callback();

    }, 2000);

}

newTodo({
    title : "Todo 5",
    description : "Desc 5"
},todoList)

todoList()

