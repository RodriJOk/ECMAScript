//Una de las incorporaciones de ES9 fue el operador de reposo, o tambien conocido como spread operator. 

const obj = {
    name: "Rodrigo",
    edad: 22,
    ciudad: "Buenos Aires",
}

let {...all} = obj
//De esta manera podemos extraer todo el objeto. 
//Si solo necesitamos extraer solo un par clave:valor podemos hacer lo siguiente

let {name} = obj //Rodrigo