export const renderButton = (htmlID, texto, id, param, callback) =>  { 
    var button = document.createElement('input');
    button.type = 'button';
    button.id = id;
    button.value = texto;
   
    var container = document.getElementById(htmlID);
    container.appendChild(button);
  
    // agregar onclick
    const selectElement = document.querySelector(`#${id}`)
    selectElement.addEventListener("click", async function(){callback(param.videos, param.channel)});
  }
  
export const removeButton = (htmlID, id) =>  { 
  var top = document.getElementById(htmlID);
  var el = document.getElementById(id);
  top.removeChild(el)
}

