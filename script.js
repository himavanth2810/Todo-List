const body = document.querySelector("body");
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

window.addEventListener("load",()=>{
    body.classList.add("visible");
});

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click", deleteCheckTodo);

function addTodo(event) {
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
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
    todoInput.value= "";
}

function deleteCheckTodo(event){
    const item = event.target;

    if(item.classList[0]=== "trash-btn"){
      const todo = item.parentElement;
      todo.remove();
    }

    if(item.classList[0]=== "check-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('checked');
    }
}