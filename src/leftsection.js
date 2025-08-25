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
    const getedit = document.querySelector('.edit');
    
    if (!getedit) {
        console.error('Element s třídou .edit nebyl nalezen');
        return;
    }
    
    getedit.addEventListener('click', () => {
        const popup = document.querySelector('.popupwindows');
        
        if (!popup) {
            console.error('Element s třídou .popupwindows nebyl nalezen');
            return;
        }
        
        popup.style.display = 'flex';
        
        const btnchange = document.querySelector('.inputbtnsend');

        btnchange.removeEventListener('click', handleButtonClick);
        btnchange.addEventListener('click', handleButtonClick);
    });
}

export function handleButtonClick() {
    const textForChange = document.querySelector('.main-text1');
    const textrandomass = document.createElement('p');
    const popup = document.querySelector('.popupwindows');
    popup.appendChild(textrandomass);

    
    const inputvalue = document.querySelector('.inputforchange');
    const newvalue = inputvalue.value
    console.log(newvalue)
    textForChange.textContent = newvalue
}



export default deletetask;
