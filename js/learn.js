const inputValue = document.getElementById("inputValue");
const submitValue = document.getElementById("submitValue");
const body = document.getElementById("body");
const todoList = document.getElementById("todoList");



function makeTodo(event){
    event.preventDefault();
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const listId = document.getElementById("listId");
    const spanX = document.createElement("button");
    const value = inputValue.value;
    const span = document.createElement("button");
    const hr = document.createElement('hr');


    localStorage.setItem("value", value);
    li.id = "listId";
    li.innerText = value;
    inputValue.value = "";

    todoList.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(spanX);
    li.appendChild(span);
    li.appendChild(hr);

    span.innerText = "수정";
    span.addEventListener("click", modifyTodo);
    spanX.innerText = "X";
    spanX.addEventListener("click", deleteTodo);
    
    

    
    
}

const saveList = localStorage.getItem("value");


function deleteTodo(event){
    li = event.target.parentElement;
    li.remove();
}

function modifyTodo(event){
    const saveButton = event.target;
    li = event.target.parentElement;
    li.contentEditable = true;
    button = event.target.innerText = "저장";
    saveButton.addEventListener("click", saveComment);
    localStorage.setItem("value", value);
}

function saveComment(event){
    const edit = event.target;
    edit.innerText = "수정";
    li= event.target.parentElement;
    li.contentEditable = false;
    console.log(edit);
    edit.removeEventListener("click", saveComment);
    edit.addEventListener("click", modifyTodo);
}




submitValue.addEventListener("click", makeTodo);