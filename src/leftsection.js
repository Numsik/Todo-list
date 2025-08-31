import { todolist } from "./todolist.js";


let currentProjectIndex = -1;

export function addproject(){
    const addbtn = document.querySelector('.addproject');
    const projectcontent = document.querySelector('.project-content');
    
    addbtn.addEventListener('click', () => {
       
        const newprojekt = {
            projectName: "Nový projekt",
            todos: []
        };
        
     
        const projectIndex = todolist.Projects.push(newprojekt) - 1;
        

        const project = document.createElement('div');
        project.classList.add('project');
        project.dataset.projectIndex = projectIndex; 
        
        projectcontent.appendChild(project);
        project.innerHTML = `
            <div class="maintextwithuprava">
                <p class="main-text">${newprojekt.projectName}</p>
                <span class="edit"><img src="assets/Vector.png"></span>
            </div>
            <p class="opentodo">Open</p>
            <p class="deletbtn">Delete</p>
        `;
    });
}

export function opentodolist(){
    const projectcontent = document.querySelector('.project-content');
    
    projectcontent.addEventListener('click', (event) => {
        if (event.target.classList.contains('opentodo')) {
            const projectDiv = event.target.closest('.project');
            const projectIndex = parseInt(projectDiv.dataset.projectIndex);
            
   
            currentProjectIndex = projectIndex;
            
         
            const projektNameMain = document.querySelector('.projekname-main');
            projektNameMain.textContent = todolist.Projects[projectIndex].projectName;
            
           
            loadProjectTodos(projectIndex);
        }
    });
}

function loadProjectTodos(projectIndex) {
    const tasksContainer = document.querySelector('.tasks');
    
   
    const todoItems = tasksContainer.querySelectorAll('.todoitem');
    todoItems.forEach(item => item.remove());
    
   
    const project = todolist.Projects[projectIndex];
    project.todos.forEach((todo, todoIndex) => {
        createTodoElement(todo, todoIndex);
    });
}

function createTodoElement(todo, todoIndex) {
    const tasksContainer = document.querySelector('.tasks');
    const todoDiv = document.createElement('div');
    
    todoDiv.classList.add('todoitem');
    todoDiv.dataset.todoIndex = todoIndex;
    
    todoDiv.innerHTML = `
        <div class="leftsectionleft">
            <input type="checkbox" class="hotovo" ${todo.completed ? 'checked' : ''}>
            <p class="nametask" style="${todo.completed ? 'text-decoration: line-through;' : ''}">${todo.name}</p>
        </div>
        <div class="rightsecright">
            <p class="podnadpisright">${todo.dueDate || 'Bez termínu'}</p>
            <span class="editright">
                <img src="assets/Vector.png">
            </span>
            <span class="deleteright">
                <img src="assets/delete.png">
            </span>
        </div>
    `;
    
    tasksContainer.appendChild(todoDiv);
}

export function deletetask(){
    const projectcontent = document.querySelector('.project-content');
    
    projectcontent.addEventListener('click', (event) => {
        if (event.target.classList.contains('deletbtn')) {
            const projectDiv = event.target.closest('.project');
            const projectIndex = parseInt(projectDiv.dataset.projectIndex);
            
            if (projectDiv) {
               
                todolist.Projects.splice(projectIndex, 1);
                
                
                projectDiv.remove();
                
              
                if (currentProjectIndex === projectIndex) {
                    clearRightSection();
                    currentProjectIndex = -1;
                }
                
              
                updateProjectIndices();
            }
        }
    });
}

function updateProjectIndices() {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        if (project.dataset.projectIndex !== undefined) {
            project.dataset.projectIndex = index;
        }
    });
}

function clearRightSection() {
    const projektNameMain = document.querySelector('.projekname-main');
    projektNameMain.textContent = 'Vyberte projekt';
    
    const tasksContainer = document.querySelector('.tasks');
    const todoItems = tasksContainer.querySelectorAll('.todoitem');
    todoItems.forEach(item => item.remove());
}

export function editt(){
    const projectcontent = document.querySelector('.project-content');
    
    projectcontent.addEventListener('click', (event) => {
        const editElement = event.target.closest('.edit');
        if (editElement) {
            const popup = document.querySelector('.popupwindows');
            popup.style.display = 'flex';
            
            const btnchange = document.querySelector('.inputbtnsend');
            const currentProject = editElement.closest('.project');
            const projectIndex = parseInt(currentProject.dataset.projectIndex);
            
            btnchange.dataset.currentProject = projectIndex;
            
           
            const inputvalue = document.querySelector('.inputforchange');
            inputvalue.value = todolist.Projects[projectIndex].projectName;
            
            btnchange.removeEventListener('click', handleButtonClick);
            btnchange.addEventListener('click', handleButtonClick);
        }
    });
}

export function handleButtonClick(event) {
    const popup = document.querySelector('.popupwindows');
    const inputvalue = document.querySelector('.inputforchange');
    const newvalue = inputvalue.value.trim();
    
    const projectIndex = parseInt(event.target.dataset.currentProject);
    
    if (newvalue && todolist.Projects[projectIndex]) {
      
        todolist.Projects[projectIndex].projectName = newvalue;
        
      
        const projectcontent = document.querySelector('.project-content');
        const currentProject = projectcontent.querySelector(`[data-project-index="${projectIndex}"]`);
        const mainText = currentProject.querySelector('.main-text');
        
        if (mainText) {
            mainText.textContent = newvalue;
        }
        

        if (currentProjectIndex === projectIndex) {
            const projektNameMain = document.querySelector('.projekname-main');
            projektNameMain.textContent = newvalue;
        }
    }
    
    popup.style.display = 'none';
    inputvalue.value = '';
}

export function closeedit(){
    const getX = document.querySelector('.x');
    getX.addEventListener('click', () => {
        const popup = document.querySelector('.popupwindows');
        popup.style.display = 'none';
        
        const inputvalue = document.querySelector('.inputforchange');
        inputvalue.value = '';
    });
}


export function getCurrentProjectIndex() {
    return currentProjectIndex;
}