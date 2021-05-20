//Una de las incorporacion en ES11 es la incoporacion del metodo allSettled.
//El metodo Promise.allSettled() recibe un array de promesas y se resuelve cuando estas hayan sido concluidas,
//sin importar si fueron resueltas(resolve) o rechazadas(reject)
//Veamos un ejemplo para entenderlo mejor. 

const p1 = new Promise((resolve, reject)=> resolve("Promesa resuelta"));
const p2 = new Promise((resolve, reject)=> reject("Promesa rechazada"));
const p3 = new Promise((resolve, reject)=> resolve("Promesa resuelta"));

Promise.allSettled([p1, p2, p3])
    .then(response => console.log(response))
    .catch(error => console.log(error))

/*
[
    {status: "fulfilled", value: "Promesa resuelta"},
    {status: "rejected", reason: "Promesa rechazada"},
    {status: "fulfilled", value: "Promesa resuelta"}
]
*/    

//Veamos otro ejemplo para entenderlo mejor. 

const promises = [
    fetch('/api-call-1'),
    fetch('/api-call-2'),
    fetch('/api-call-3'),
]

await Promise.allSettled(promises);