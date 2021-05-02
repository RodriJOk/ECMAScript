//En ES9 tambien se añadio Propagation Properties
//Este metodo nos pérmite selecionar unas propiedades y agregarlas a otro objeto. 

const obj = {
    name: "Rodrigo",
    edad: 22,
}

const obj2 = {
    ciudad: "Buenos Aires",
}

//Imaginemos que deseo fucionar los pares key:value de objeto 1. En este caso podria usa el spread operator. 

const obj3 = {
    nacionalidad: "Argentina",
    ...obj
}
