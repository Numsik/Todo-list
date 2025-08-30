import { todolist } from "./todolist.js";
export function addproject(){
    const addbtn = document.querySelector('.addproject');
    const projectcontent = document.querySelector('.project-content')

    addbtn.addEventListener('click', () => {

      const newprojekt = {
        projectName: "NameProjekt",
        todos: []
      };
      todolist.Projects.push(newprojekt);

        const project = document.createElement('div')
        project.classList.add('project')
        projectcontent.appendChild(project)
        project.innerHTML = `
        <div class="maintextwithuprava">
                <p class="main-text">Nazev</p>
                <span class="edit"><img src="assets/Vector.png" ></span>     
         </div>
            <p class="deletbtn"> Delete</p>
        `
    })
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


