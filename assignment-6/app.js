
const newTodoInput = document.querySelector('#todoText');
const saveButton = document.querySelector('.btnSave');
const todoList = document.querySelector('.todoS');
const historyNode = document.querySelector('.todoH');
saveButton.onclick=function(e){
    let newTodoText = newTodoInput.value;

    let newTodo = document.createElement('li');

    let editBtn = document.createElement('span');
    editBtn.onclick=editTodo;
   
    editBtn.innerHTML="<i class='fa fa-pencil-square-o' aria-hidden='true'></i>";

    let deleteBtn = document.createElement('span');
    deleteBtn.onclick=deleteTodo;
    deleteBtn.innerHTML="<i class='fa fa-trash-o' aria-hidden='true'></i>";
    
    let withSpan=document.createElement('span');
    withSpan.classList.add("textValue");
    withSpan.innerText=newTodoText;
    newTodo.append(withSpan,editBtn,deleteBtn);
    newTodoInput.value="";
    todoList.append(newTodo);
}

function deleteTodo(e){
    let todoToEditText=e.target.parentNode.parentNode.childNodes[0].innerHTML;
    let newHistoryTodo = document.createElement('li');
    newHistoryTodo.append(todoToEditText);

    historyNode.append(newHistoryTodo);
    e.target.parentNode.parentNode.remove();
}

function editTodo(e){
    let todoToEditText=e.target.parentNode.parentNode.childNodes[0].innerHTML;
    newTodoInput.value=todoToEditText;
    e.target.parentNode.parentNode.remove();
}
