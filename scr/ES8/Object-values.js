//Tambien en la incorporacion en ES8 
//Object Values devuelve los valores de un objeto a un arreglo. 
//Veamos un ejemplo para entender este metodo.

const data = {
    frontend: "Rodrigo",
    backend: "Jonathan",
    devops: "David",
    tester: "Woody",
}

const transformacion = Object.values(data)
console.log(transformacion)
//[ 'Rodrigo', 'Jonathan', 'David', 'Woody' ]
console.log(transformacion.length) //4