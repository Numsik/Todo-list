import './leftsection.css';
import './rightsection.css';
import './popup.css';
import './popupright.css';
import { closeedit, addproject, handleButtonClick, editt, deletetask } from './leftsection.js';
import { addtodo, close,  addtaskright, deletetaskright} from './rightsection.js';


document.addEventListener('DOMContentLoaded', () => {
    deletetask();
    editt();
    addproject();
    closeedit();
    deletetaskright();   
    addtaskright(); 
    addtodo();
    close();
});