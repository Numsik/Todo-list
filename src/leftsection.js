function deletetask(){
    const btndelete = document.querySelector('.deletbtn'); 
    btndelete.addEventListener('click', () =>{
        const div = document.querySelector('.project')
        div.remove()
    });
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
        textdelete.textContent = "delete";
        textdelete.classList.add('deletbtn');
    });
}
export default deletetask;
