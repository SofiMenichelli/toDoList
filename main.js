let input = document.querySelector('.input')
let addBtn = document.querySelector('.addBtn')
let container = document.querySelector('.container')

class Item {
    constructor(newTask) {
        this.createDiv(newTask);
    }
    createDiv(input){
        /* Div item */
        let inputItem = document.createElement('input')
        let disabled = inputItem.disabled = true
        inputItem.classList.add('itemInput')
        inputItem.value = input.value
        let div = document.createElement('div')
        div.classList.add('item')
        
        /* Boton editar */
        let editBtn = document.createElement('button')
        editBtn.classList.add('editBtn')
        let iEdit = document.createElement('i')
        iEdit.classList.add('fad')
        iEdit.classList.add('fa-edit')
        editBtn.appendChild(iEdit)
        
        /* Boton Borrar */
        let removeBtn = document.createElement('button')
        removeBtn.classList.add('removeBtn')
        let iRemove = document.createElement('i')
        iRemove.classList.add('fad')
        iRemove.classList.add('fa-trash-alt')
        removeBtn.appendChild(iRemove)

        /* anexamos los hijos a container y al div */
        div.appendChild(inputItem)
        div.appendChild(editBtn)
        div.appendChild(removeBtn)
        container.appendChild(div)

        /* Escuchamos el evento del Click para editar*/
      /*   editBtn.addEventListener("click", function() {
           disabled = !disabled
           inputItem.value.addEventListener('change', function(e) {
                inputItem.value = e.target.value;
           })
        
        }) */

        /* Escuchamos el evento del Click para Borrar*/
        removeBtn.addEventListener("click", function() {
            container.removeChild(div)
        })
    }
}
function checkInput(){
    if(input.value != undefined){
        new Item(input)
    }
}
addBtn.addEventListener("click", function() {
    if(input.value != "") {
        checkInput()
        input.value="";
    }
    else  {
        alert("No se puede enviar una tarea vacia")
    }
}) 
/* addBtn.addEventListener("onkeypress", function (e) {
    if  ( e.keyCode == 13 && input.value != "") {
        checkInput()
        input.value = "";
    }
    else {
        alert("No se puede enviar una tarea vacia")
    }
}) */

