import { todolist } from "./todolist.js";
import { getCurrentProjectIndex } from "./leftsection.js"; 

let currentEditingTask = null;

export function addtaskright(){
    const addtaskbtn = document.querySelector('.addtask');
    const tasksContainer = document.querySelector('.tasks');
    
    addtaskbtn.addEventListener('click', () => {
        const currentProjectIndex = getCurrentProjectIndex();
        
       
        if (currentProjectIndex === -1) {
            alert('Nejprve vyberte projekt!');
            return;
        }
        
       
        const newTodo = {
            name: "Nový úkol",
            dueDate: "",
            completed: false
        };
        
     
        const todoIndex = todolist.Projects[currentProjectIndex].todos.push(newTodo) - 1;
        
        
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todoitem');
        todoDiv.dataset.todoIndex = todoIndex;
        
        tasksContainer.appendChild(todoDiv);
        todoDiv.innerHTML = `
            <div class="leftsectionleft">
                <input type="checkbox" class="hotovo">
                <p class="nametask">${newTodo.name}</p>
            </div>
            <div class="rightsecright">
                <p class="podnadpisright">Bez termínu</p>
                <span class="editright">
                    <img src="assets/Vector.png">
                </span>
                <span class="deleteright">
                    <img src="assets/delete.png">
                </span>
            </div>
        `;
    });
}

export function deletetaskright(){
    const todolist = document.querySelector('.right-section');
    
    todolist.addEventListener('click', (event) => {
        if (event.target.closest('.deleteright')){
            const todoItem = event.target.closest('.todoitem');
            const todoIndex = parseInt(todoItem.dataset.todoIndex);
            const currentProjectIndex = getCurrentProjectIndex();
            
            if (todoItem && currentProjectIndex !== -1){
               
                todolist.Projects[currentProjectIndex].todos.splice(todoIndex, 1);
                
               
                todoItem.remove();
              
                updateTodoIndices();
            }
        }
    });
}

function updateTodoIndices() {
    const todoItems = document.querySelectorAll('.todoitem');
    todoItems.forEach((item, index) => {
        item.dataset.todoIndex = index;
    });
}

export function addtodo(){
    const todolist = document.querySelector('.right-section');
    
    todolist.addEventListener('click', (event) => {
        if (event.target.closest('.editright')) {
            currentEditingTask = event.target.closest('.todoitem');
            const currentProjectIndex = getCurrentProjectIndex();
            const todoIndex = parseInt(currentEditingTask.dataset.todoIndex);
            
            if (currentProjectIndex !== -1 && todolist.Projects[currentProjectIndex].todos[todoIndex]) {
                const todo = todolist.Projects[currentProjectIndex].todos[todoIndex];
                
                const nameInput = document.querySelector('.name-of-task');
                const dateInput = document.querySelector('#datum');
                
                nameInput.value = todo.name;
                dateInput.value = todo.dueDate || '';
                
                const changestyle = document.querySelector('.popwindowinterdimiate');
                changestyle.style.display = "flex";
            }
        }
    });
}

export function close(){
    const closebtn = document.querySelector('.xright');
    closebtn.addEventListener('click', () => {
        const changestyle = document.querySelector('.popwindowinterdimiate');
        changestyle.style.display = "none";
        
        const nameInput = document.querySelector('.name-of-task');
        const dateInput = document.querySelector('#datum');
        nameInput.value = '';
        dateInput.value = '';
        
        currentEditingTask = null;
    });
}

export function ischecked() {
    const todolist = document.querySelector('.right-section');
    
    todolist.addEventListener('change', (event) => {
        if (event.target.classList.contains('hotovo')) {
            const checkbox = event.target;
            const todoitem = checkbox.closest('.todoitem');
            const nameoftask = todoitem.querySelector('.nametask');
            const todoIndex = parseInt(todoitem.dataset.todoIndex);
            const currentProjectIndex = getCurrentProjectIndex();
            
            if (currentProjectIndex !== -1) {
               
                todolist.Projects[currentProjectIndex].todos[todoIndex].completed = checkbox.checked;
                
               
                if (checkbox.checked) {
                    nameoftask.style.textDecoration = "line-through";
                    todoitem.style.backgroundColor = "#f0f0f0ff";
                } else {
                    nameoftask.style.textDecoration = "none";
                    todoitem.style.backgroundColor = "#D9D9D9";
                }
            }
        }
    });
}

export function taskchange(){
    const sendbtn = document.querySelector('.rightsend');
    
    sendbtn.addEventListener('click', () => {
        if (!currentEditingTask) return;
        
        const currentProjectIndex = getCurrentProjectIndex();
        const todoIndex = parseInt(currentEditingTask.dataset.todoIndex);
        
        if (currentProjectIndex === -1) return;
        
        const datum = document.querySelector('#datum');
        const nameoftask = document.querySelector('.name-of-task');
        
        const newdate = datum.value;
        const newname = nameoftask.value.trim();
        
        if (newname || newdate) {
            const todo = todolist.Projects[currentProjectIndex].todos[todoIndex];
            
           
            if (newname) todo.name = newname;
            if (newdate) todo.dueDate = newdate;
            
           
            const nazevtasku = currentEditingTask.querySelector('.nametask');
            const wheredate = currentEditingTask.querySelector('.podnadpisright');
            
            if (newname) nazevtasku.textContent = newname;
            if (newdate) {
                wheredate.textContent = newdate;
            } else if (newname && !newdate) {
              
                wheredate.textContent = todo.dueDate || 'Bez termínu';
            }
        }
        
       
        const popup = document.querySelector('.popwindowinterdimiate');
        popup.style.display = "none";
        
       
        nameoftask.value = '';
        datum.value = '';
        
        currentEditingTask = null;
    });
}