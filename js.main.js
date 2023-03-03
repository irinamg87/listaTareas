const input = document.querySelector('input');
const selection = document.querySelector('selection');
const agregarBoton = document.querySelector('.boton');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

const result = listaTareas.filter((listaTareas) => listaTareas.prioridad);

console.log(result)

function createList(lista) {

    for (var i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(lista[i].titulo));
        li.appendChild(p);
        li.appendChild(botonBorrar());
        if (lista[i].prioridad === "urgente") {
            li.style.backgroundColor = "lightCoral";
        } else if (lista[i].prioridad === "mensual") {
            li.style.backgroundColor = "lightGreen";
        } else if (lista[i].prioridad === "diaria") {
            li.style.backgroundColor = "lightBlue";
        }
        ul.appendChild(li);
        empty.style.display = "none";
    }
}

agregarBoton.addEventListener('click', (event) => {
    event.preventDefault();


    const text = input.value;
    const li = document.createElement('li');
    const p = document.createElement('p');

    var lista = [
        {
            'idTarea': listaTareas.length,
            'titulo': text,
            'prioridad': "urgente"
        }
    ]


    p.textContent = text;

    if (text !== "") {
        createList(lista)
        input.value = "";
        empty.style.display = "none";
    }
})

document.getElementById('listaTareas').appendChild(createList(listaTareas));

function botonBorrar() {
    const botonBorrar = document.createElement('button');

    botonBorrar.textContent = "borrar";
    botonBorrar.className = "boton-borrar";

    botonBorrar.addEventListener('click', (event) => {
        const item = event.target.parentElement;
        ul.removeChild(item);
    });

    return botonBorrar
}
