let lista = []

console.log("Usted tiene " + lista.length + " items en la lista")


let confirmar = true

confirmar = confirm("¿Quiere agregar algo a la lista?")

while (confirmar == true) {
    let items = prompt("¿Que quiere agregar a la lista?")
    lista.push(items)
    
    console.log(lista)
    console.log("Usted tiene " + lista.length + " items en la lista")

    confirmar = confirm("¿Quiere agregar algo a la lista?")
}