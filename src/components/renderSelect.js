export const renderSelect = (id, opts, selector, callback) => {
    var select = document.createElement("select");
    select.id = id;
  
    // Crear opciones y agregarlas al select
    opts.forEach( (opt) => {
      let option = document.createElement("option");
      option.value = opt.value
      option.text = opt.text
      select.add(option);
    })
  
    // Agregar el select al cuerpo del documento HTML
    selector.appendChild(select);
  
    // agregar onchange
    //const selectElement = document.querySelector(`#${id}`)
    //selectElement.addEventListener("change", callback);
    //selectElement.addEventListener("change", async function(){callback()});
  }