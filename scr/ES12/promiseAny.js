//Otra de las nuevas incorporaciones en ES12 es la incoporacion de Promise.any()
//Cuando hablamos de promesas, tenemos el metodo .all(), el cual nos permite a travez de un arreglo pasarle todas las promesas que queremos resolver. 
//Veamos un ejemplo: 

const p1 = new Promise((resolve, reject)=>{
    resolve("Primero");
});

const p2 = new Promise((resolve, reject)=>{
    resolve("Segundo");
});

const p3 = new Promise((resolve, reject)=>{
    resolve("Tercero");
});

Promise.all([p1, p2, p3])
    .then(res => {console.log(res)}) 
    //["Primero", "Segundo", "Tercero"]
    .catch(err => {console.log(err)})

//En este ejemplo podemos ver como el metodo .all() nos permite pasar promesas que queremos resolver. 
//Si las tres se resuleven correctamente, nos arrojara cada uno de sus resultados. 
//Pero con que la respuesta de una promesa llegue como reject, basta para que entre en el catch

//Es por eso que en la version de ES12 el metodo .any()
//A travez del metodo any. la intencion es que pases a travez de un arreglo todas las promesas que quieres resolver, y va a devolver en el then la primer respuesta de la primera promesa que se haya resuelto correctamente. 
//Dependiendo de como se vayan resolviendo, devolvera la primera promesa que termine satisfactoriamente. 
//Veamos un ejemplo para entenderlo mejor. 

const p1 = new Promise((resolve, reject)=>{
    resolve("Primero");
});

const p2 = new Promise((resolve, reject)=>{
    resolve("Segundo");
});

const p3 = new Promise((resolve, reject)=>{
    resolve("Tercero");
});

Promise.all([p1, p2, p3])
    .then(res => {console.log(res)}) 
    //["Primero", "Segundo", "Tercero"]
    .catch(err => {console.log(err)})

Promise.any([p1, p2, p3])
    .then(res => {console.log(res)}) //Primero
    .catch(err => {console.log(err)})