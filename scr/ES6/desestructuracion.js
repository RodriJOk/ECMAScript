//Desesctruracion de los elementos 
//Sin ES6, 
//Debiamos de declarar los pares (key: values), y luego llamar al 
//objeto y la propiedad en especifica que necesitabamos.

var persona = {
    nombre: "Rodrigo",
    edad: 22,
    pais: "Argentina"   
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.pais)

//Con ES6

const persona2 = {
    nombre:"Rodrigo",
    edad: 40,
    pais: "Francia"
}
//Podemos hacer la desestructuracion de los pares (key: value) 
//que se encuentran dentro de mi objeto.

const {nombre, edad, pais} = persona2
console.log(persona2)