let currentEditingTask = null;

export function addtaskright(){
    const addtaskbtn = document.querySelector('.addtask');
    const projectright = document.querySelector('.tasks');

    addtaskbtn.addEventListener('click', () =>{
        const project = document.createElement('div');
        project.classList.add('tasks');
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
export function addtodo(){        
    const todolist = document.querySelector('.right-section');          

    todolist.addEventListener('click', (event) => {         
        if (event.target.closest('.editright')) {
            currentEditingTask = event.target.closest('.todoitem'); 
            const changestyle = document.querySelector('.popwindowinterdimiate');             
            changestyle.style.display = "flex";         
        }     
    }); 
}

export function close(){
  const closebtn = document.querySelector('.xright');
  closebtn.addEventListener('click', () =>{
    const changestyle = document.querySelector('.popwindowinterdimiate');
    changestyle.style.display = "none";
  });
}

export function ischecked() {
  const todolist = document.querySelector('.right-section');
  
  todolist.addEventListener('change', (event) => {
    if (event.target.classList.contains('hotovo')) {
      const checkbox = event.target;
      const todoitem = checkbox.closest('.todoitem');
      const nameoftask = todoitem.querySelector('.nametask');
      
      if (checkbox.checked) {
        nameoftask.style.textDecoration = "line-through";
        todoitem.style.backgroundColor = "#f0f0f0ff";
      } else {
        nameoftask.style.textDecoration = "none";
        todoitem.style.backgroundColor = "#D9D9D9";
      }
    }
  });
}
export function taskchange(){   
    const sendbtn = document.querySelector('.rightsend');      

    sendbtn.addEventListener('click', () => {     
        if (!currentEditingTask) return; 

        const datum = document.querySelector('#datum');
        const nameoftask = document.querySelector('.name-of-task');
        
      
        const nazevtasku = currentEditingTask.querySelector('.nametask');
        const wheredate = currentEditingTask.querySelector('.podnadpisright');
        
        const newdate = datum.value;
        const newname = nameoftask.value;
        

        if (newname.trim()) nazevtasku.textContent = newname;
        if (newdate) wheredate.textContent = newdate;
        
    
        const popup = document.querySelector('.popwindowinterdimiate');
        popup.style.display = "none";

        currentEditingTask = null;
    }); 
}