import './leftsection.css'
import './rightsection.css'
import deletetask from './leftsection.js'
import { projectadd } from './leftsection.js'
import { editt } from './leftsection.js'
import './popup.css'
import { handleButtonClick } from './leftsection.js'


document.addEventListener('DOMContentLoaded', () => {
    deletetask();
    projectadd();
    editt();
});