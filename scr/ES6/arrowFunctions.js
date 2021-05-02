//Otras de las incorporaciones de ES6 son las incorporaciones de la Arrow Functions 
//Veamos un ejemplo de como se utilizaban antes las funciones. 

//Imaginemos que tenemos un array con un objeto especifico.
const names = [
    {name: "Rodri", age: 22},
    {name: "Yesica", age: 27}
]

//Y ahora queremos hacer un mapeo del array names. 
//Con ES5 hariamos lo siguiente:

let ListOfNames = names.map(function(item){
    console.log(item.name);
})

//Con ES6. Implementacion de las arrow functions 

let listOfNames2 = names.map(item => console.log(item.name))

//Tambien en otro caso podriamos utilizar arrows functions 
//Imaginemos que queremos declarar una function. Podriamos hacer lko siguiente:

let listOfNames3 = (params, params) =>{
    //block code
}

//En el caso anterior, teniamos en la funcion, 2 parametros con los cuales la funcion en si debia de trabajar. 
//Si nosotros tenemos solo un parametro, podremos obviar los parentesis. Veamos un ejemplo: 

const listOfNames4 = params =>{
    //block code
}

//Tambien las arrow functions nos permite tener un retorno explicito
//Veamos un ejemplo: 

const listOfNames5 = params => params * params
