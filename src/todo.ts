const addButton = document.getElementById('addButton') as HTMLButtonElement;
const inputField = document.getElementById('inputField') as HTMLInputElement;
const taskList = document.getElementById('taskList') as HTMLOListElement;

interface TODO {
    task : string;
    done : boolean;
}

let TodoList: TODO[] = [];


function AddTask (newtask: TODO) {
    
    let NewTodo = {task : '', done: false};
    NewTodo.task = newtask.task;
    NewTodo.done = newtask.done;

    const newRow = document.createElement('div');
    const newSpan = document.createElement('span');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const buttonContainer = document.createElement("div");
    const checkbox = document.createElement('input');
    const listItem = document.createElement('li');
    
    newSpan.textContent = NewTodo.task;
    newSpan.id = 'textSpan';

    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    
    editButton.textContent = 'Edit';
    editButton.id = 'editButton';
    
    deleteButton.textContent = 'Delete';
    deleteButton.id = 'deleteButton';

    buttonContainer.className = "button-container";
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(checkbox);
    
    newRow.className = 'row';
    newRow.appendChild(newSpan);
    newRow.appendChild(buttonContainer);

    listItem.appendChild(newRow)
    
    taskList.appendChild(listItem);
    inputField.value = '';

    checkbox.onclick = () =>{
        if (NewTodo.done === false){
            newSpan.className = 'completed';
            NewTodo.done = true;
        }
        else{
            newSpan.classList.remove('completed');
            NewTodo.done = false;
        }
    }
    deleteButton.onclick = () =>{
        taskList.removeChild(listItem);
    }

    editButton.onclick = () =>{
        const editText = prompt('Edit task');
        if (editText)
            if (editText.trim()) {
                newSpan.textContent = editText;
            }
    }

}
addButton.onclick = () => {
    const taskText = inputField.value;
    if (taskText) {
        AddTask({task: taskText, done: false});
    }
};






