let lista = []

console.log("Usted tiene " + lista.length + " items en la lista")


let confirmar = confirm("¿Quiere agregar algo a la lista?")


for (let index = false; index != confirmar;) {
    items = prompt("¿Que quiere agregar a la lista?")
    lista.push(items)

    console.log(lista)
    console.log("Usted tiene " + lista.length + " items en la lista")
}