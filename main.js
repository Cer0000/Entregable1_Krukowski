let lista = []


function mostrarLista() {
    let list = lista.join(" - ")
    console.log(list);
    console.log("Usted tiene " + lista.length + " items en la lista")
}


function agregar(item) {
    lista.push(item)
    console.warn("agregaste un item")
    mostrarLista()
    agregarBorrarDetener = prompt("¿Qué acción quiere realizar? (agregar/borrar/actualizar/detener)")
}


function borrar(index) {
    if (index >= 0 && index < lista.length) {
        let nuevaLista = []
        for (let i = 0; i < lista.length; i++) {
            if (i !== index) {
                nuevaLista.push(lista[i])
            }
        }
        lista = nuevaLista
        console.warn("Borraste el item en la posición " + index)
        mostrarLista()
        agregarBorrarDetener = prompt("¿Qué acción quiere realizar? (agregar/borrar/actualizar/detener)")
    } else {
        console.error("Índice inválido. No se puede borrar")
        agregarBorrarDetener = prompt("¿Qué acción quiere realizar? (agregar/borrar/actualizar/detener)")
    }
}


function actualizar(updateIndex, nuevoItem) {
    if (updateIndex >= 0 && updateIndex < lista.length) {
        lista[updateIndex] = nuevoItem
        console.warn("`Actualizaste la posición del item")
        mostrarLista()
        agregarBorrarDetener = prompt("¿Qué acción quiere realizar? (agregar/borrar/actualizar/detener)")
    } else {
        console.warn("Por favor, elige un índice entre 0 y " + (lista.length - 1))
        agregarBorrarDetener = prompt("¿Qué acción quiere realizar? (agregar/borrar/actualizar/detener)")
    }
}


mostrarLista()


let agregarBorrarDetener = prompt("¿Qué acción quiere realizar? (agregar/borrar/actualizar/detener)")


while (agregarBorrarDetener !== "detener") {
    switch (agregarBorrarDetener) {
        case "agregar":
            let item = prompt("¿Qué quiere agregar a la lista?")
            agregar(item)
            break;

        case "borrar":
            let index = parseInt(prompt("¿Qué posición quieres borrar? (0 para el primer item)"));
            borrar(index);
            break;

        case "detener":
            break;

        case "actualizar":
            let updateIndex = parseInt(prompt("¿En qué posición quieres actualizar el item? (0 para el primer item)"))
            let nuevoItem = prompt("¿Cuál es el nuevo valor del item?")
            actualizar(updateIndex, nuevoItem)
            break;

        default:
            console.warn("Por favor, elige entre (agregar/borrar/actualizar/detener)")
            agregarBorrarDetener = prompt("¿Qué acción quiere realizar? (agregar/borrar/actualizar/detener)")
            break;
    }
}


console.log("Programa detenido. Usted tiene " + lista.length + " items en la lista")