//Una incorporacion de ES6 son las promesas o Promises (ingles). 
//Y las promesas vienen a solucionar un problema que habia en Javascript relacionado con los 
//callbacks Hells cuando trabajamos con el asincronismo en Javascript
//JS no es sincrono, significa que no puede haber mas de un evento que se esta 
//ejecutando.
//Para solucionar el problema de asincronismo en JS, ademas del Callback Hell nace las promesas. 
//Una promesa, como su nombre lo dice, hace referencia de que algo va a ocurrir. 
//En algun momento o tiempo va a suceder algo que nosotros estamos estableciendo

const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if(false){
            resolve("Bien, respuesta esperada !!");
        } else{
            reject("Ups ! La operacion no era la esperada !");
        }
    });
}

//La promesa la ejecutamos de la siguiente manera: 

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));