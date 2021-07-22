const body = document.querySelector("body");
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const fliterOption = document.querySelector('.filter-todo');

window.addEventListener("load",()=>{
    body.classList.add("visible");
});

document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click", deleteCheckTodo);
fliterOption.addEventListener("click", fliterTodo);

function addTodo(event) {
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    if(todoInput.value=== ""){
        alert("Please Type Something...");
    }
    else
    {
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        localStorageTodos(todoInput.value);
        //Check and Delete button
        const checkButton = document.createElement('button');
        const trashButton = document.createElement('button');

        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.classList.add("check-btn");

        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");

        todoDiv.appendChild(checkButton);
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
        todoInput.value= "";
    }
 
}

function deleteCheckTodo(event){
    const item = event.target;

    if(item.classList[0]=== "trash-btn"){
      const todo = item.parentElement;
      todo.classList.add("falling");
      removeLocalTodos(todo);
      todo.addEventListener("transitionend",function(){
        todo.remove();
      });
    }

    if(item.classList[0]=== "check-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        saveLocalTodos(todo);
    }
}

function localStorageTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check and Delete button
    const checkButton = document.createElement('button');
    const trashButton = document.createElement('button');

    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-btn");

    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");

    todoDiv.appendChild(checkButton);
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos)); 
}

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos)); 
}

function fliterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":{
                todo.style.display = "flex";
                break;
            }
            case "completed":{
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            }
            case "uncompleted":{
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            }
        }
    }); 
}

