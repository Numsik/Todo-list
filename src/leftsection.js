function deletetask(){
    const btndelete = document.querySelectorAll('.deletbtn'); 
    btndelete.forEach((btn) =>{
        btn.addEventListener('click', () =>{
            const div = btn.closest('.project');
            if(div){
                div.remove()
            }
            
        })
    })
}
export function projectadd(){
    const addproject = document.querySelector('.addproject');
    const leftsection = document.querySelector('.left-section')
    addproject.addEventListener('click', () =>{
        
        const createproject = document.createElement('div');
        leftsection.appendChild(createproject);
        createproject.classList.add('project');
        const text = document.createElement('p');
        const textdelete = document.createElement('p');
        createproject.appendChild(text);
        createproject.appendChild(textdelete);
        text.textContent = "Nazev";
        text.classList.add('main-text');
        textdelete.textContent = "Delete";
        textdelete.classList.add('deletbtn');
    });
}
export function editt(){
    const getedit = document.querySelector('.edit').addEventListener('click', () =>{
        console.log('zkuska')
    })
}
export default deletetask;
