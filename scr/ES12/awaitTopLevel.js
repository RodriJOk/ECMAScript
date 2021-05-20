//Una de las incoporaciones de ES12, es la posibilidad de utilizar await de 

//Anteriormente a ES12, para poder ejecutar una funcion que devuelva una promesa, teniamos que utilizar sin excepcion then.
//Veamos un ejemplo de esto: 

function operacion(){
    return new Promise((resolve, reject)=>{
        return resolve("Se resolvo correctamente !")
    });
}

operacion().then(res =>{console.log(object)})

//Ahora en ES12, tenemos la posibilidad de utilizar await a nivel de top level de nuestra aplicacion. Es decir, que no necesitamos tener una funcion async-await para resolver de forma asincrona nuestra promesa. 
//Veamos un ejemplo para entenderlo mejor. 

function operacion(){
    return new Promise( (resolve, reject) =>{
        return resolve("Hello World !")
    })
}

const res = await operacion();
console.log(res) //Hello World !