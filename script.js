const body = document.querySelector("body");
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

window.addEventListener("load",()=>{
    body.classList.add("visible");
});

todoButton.addEventListener("click",addTodo);

function addTodo(event) {
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = "hello";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Check and Delete button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-btn");
    todoDiv.appendChild(checkButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
}