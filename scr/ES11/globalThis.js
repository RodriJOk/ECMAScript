//Una de las incorporaciones de ES11 es globalThis.
//Global This hace referencia al objeto global, sin importar el contexto en el que se encuentre el codigo
//Veamos un ejemplo para entenderlo mejor. 

button.addEventListener('click', function(){
    console.log(this)//button
    console.log(globalThis)//window
})

console.log(globalThis) //window en el navegador

