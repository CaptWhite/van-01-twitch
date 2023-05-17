import { renderSelect } from "./renderSelect.js";
import { MEDIA, CHANNEL, pYoutube, pMedia} from '../datos/params.js';


export const renderForm = (callback) =>  {  
    
    const onSubmit = ( event ) => {
        event.preventDefault()
        callback()
    }

    // Create a form dynamically
    var form = document.createElement("form");
    form.setAttribute("id", "form");
    
    renderSelect(MEDIA,pMedia.options, form)
    renderSelect(CHANNEL,pYoutube.options, form)
    // create a submit button
    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
               
    // Append the submit button to the form
    form.appendChild(s);
    form.addEventListener('submit', onSubmit)
    document.getElementById("head")
            .appendChild(form);
}