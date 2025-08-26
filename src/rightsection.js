export function addtaskright(){
    const addtaskbtn = document.querySelector('.addtask');
    const projectright = document.querySelector('.tasks');

    addtaskbtn.addEventListener('click', () =>{
        const project = document.createElement('div');
        project.classList.add('tasks');
        console.log('tohlejde')
        projectright.appendChild(project)
        project.innerHTML = ` 
        <div class="todoitem">
        
        <div class="leftsectionleft">
          <input type="checkbox" class="hotovo">
          <p class="nametask">nazev tasku</p>
        </div>
        <div class="rightsecright">
          <p class="podnadpisright">dva dny zbyvaji</p>
          <span class="editright">
            <img src="assets/Vector.png">
          </span>
          

        <span class="deleteright">
          <img src="assets/delete.png"> 
        </span>
          
        </div>
         
      </div>
`

    });
}

export function deletetaskright(){
    const todolist = document.querySelector('.right-section'); 
    todolist.addEventListener('click', (event) => {
        if (event.target.closest('.deleteright')){ 
            const div = event.target.closest('.todoitem'); 
            if (div){
                div.remove();
            } 
        }
    });      
}