import './leftsection.css'
import './rightsection.css'
import { deletetask } from './leftsection.js'  
import { editt } from './leftsection.js'
import './popup.css'
import './popupright.css'
import { handleButtonClick } from './leftsection.js'
import { addproject } from './leftsection.js'
import { closeedit } from './leftsection.js'
import { deletetaskright } from './rightsection.js'
import { addtaskright } from './rightsection.js'

document.addEventListener('DOMContentLoaded', () => {
    deletetask();
    editt();
    addproject();
    closeedit();
    deletetaskright();   
    addtaskright(); 

});