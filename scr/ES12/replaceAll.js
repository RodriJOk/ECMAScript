//Una de las caracteristicas de ES12 es la incrporacion del metodo replaceAll()
//Este metodo nos permite reemplzar todas las coincidencias dentro de una cadena de texto. 
//Anteriormente en Javascript solo estaba en funcionamiento el metodo replace. 
//Veamos como fucniona replace: 

let nombre = "Roberto"
console.log(nombre.replace('o', 'u'));
//Ruberto

//De esta manera funciona replace. 
//Pero el problema que presenta replace es que solo hace la sustitucion de un caracter. 
//Si queriamos reemplazar todas las coincidencias, debiamos de usar una expresion regular. 
//Con la nueva funcionalidad de replaceAll() podemos simplemente decirle que caracter queremos y automaticamente va a reemplazar todos. 
//Veamos un ejemplo para entenderlo mejor. 

let usuario = "agustin"
console.log(usuario.replaceAll("a", "z"))
//zgustin

