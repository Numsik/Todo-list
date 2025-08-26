functoin

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