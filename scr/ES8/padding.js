//Otra incorporacion de ES8 fue el padding o por su nombre tecnico:padStart()
//Basicamente lo que hace este metodo es agregar al principio un determinado valor como de relleno.
//Veamos un ejemplo: 

const texto = "Rodri"
const modificacion = texto.padStart(10, "Hola ")
console.log(modificacion)
//Hola Rodri.

//De manera similar ocurre con el metodo padEnd, pero este en cambio, lo que hace es agregar al final en relleno.
//Veamos un ejemplo: 

const nombre = "Diego"
const relleno = nombre.padEnd(15, " Maradona.")
console.log(relleno)
//Diego Maradona.