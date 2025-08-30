import { todolist } from "./todolist.js";

let currentProjectIndex = -1;

export function addproject(){
    const addbtn = document.querySelector('.addproject');
    const projectcontent = document.querySelector('.project-content')

    addbtn.addEventListener('click', () => {

      const newprojekt = {
        projectName: "NameProjekt",
        todos: []
      };
      const projectIndex = todolist.Projects.push(newprojekt) -1;

        const project = document.createElement('div')
        project.classList.add('project');
        projectcontent.appendChild(project);
        project.dataset.projectIndex = projectIndex;
        project.innerHTML = `
        <div class="maintextwithuprava">
                <p class="main-text">Nazev</p>
                <span class="edit"><img src="assets/Vector.png" ></span>     
         </div>
            <p class="deletbtn"> Delete</p>
        `
    })
}

export function opentodolist(){
    const projectcontent = document.querySelector('.project-content');
    projectcontent.addEventListener('click', (event) =>{
        if (event.target.classList.contains('opentodo')){
            const projectDiv = event.target.closest('.project');
            const projectIndex = parseInt(projectDiv.dataset.projectIndex)

            currentProjectIndex = projectIndex;

            const projektNameMain = document.querySelector('.projektname-main')
            projektNameMain.textContent = todolist.Projects[projectIndex].projectName;

            loadProjectTodos(projectIndex);
        }
    });

}
function loadProjectTodos(projectIndex){
    const taskcontainer = document.querySelector('.tasks');
    const todoitems = taskcontainer.querySelectorAll('.todoitem');
    todoitems.forEach(item => item.remove());
    const project = todolist.Projects[projectIndex];
    project.todos.forEach((todo, todoIndex) =>{
        createTodoElement(todo, todoIndex)
    })
}
function createTodoElement(todo, todoIndex){
    const taskcontainer = document.querySelector('.tasks');
    const tododiv = document.createElement('div');
    tododiv.classList.add('todoitem');
    tododiv.dataset.todoIndex = todoIndex;
    tododiv.innerHTML = ` <div class="leftsectionleft">
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
    taskcontainer.appendChild(tododiv);

}
export function deletetask(){
    const projectcontent = document.querySelector('.project-content');
    

    
    projectcontent.addEventListener('click', (event) => {
        if (event.target.classList.contains('deletbtn')) {
            const div = event.target.closest('.project');
            if (div) {
                div.remove();
            }
        }
    });
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
            btnchange.dataset.currentProject = Array.from(projectcontent.children).indexOf(currentProject);
            
            btnchange.removeEventListener('click', handleButtonClick);
            btnchange.addEventListener('click', handleButtonClick);
        }
    });
}

export function handleButtonClick(event) {
    const popup = document.querySelector('.popupwindows');

    const inputvalue = document.querySelector('.inputforchange');

    const newvalue = inputvalue.value;
    
    const projectIndex = event.target.dataset.currentProject;
    const projectcontent = document.querySelector('.project-content');
    
    const currentProject = projectcontent.children[projectIndex];
    const mainText = currentProject.querySelector('.main-text');
    
    if (mainText) {
        mainText.textContent = newvalue;
    }

    popup.style.display = 'none';
    inputvalue.value = '';
}
export function closeedit(){
    const getX = document.querySelector('.x');
    getX.addEventListener('click', () =>{
        const popup = document.querySelector('.popupwindows');
        popup.style.display = 'none'
    });
}


