//Otra de las incorporaciones en ES11 fue la incorporacion de los importes dinamicos. 
//La importacion dinamica se realiza a partir del metodo import() que devuelve una promesa del modulo solicitado. 
//Esto significa que podemos pedir codigo si este es necesario, tambien llamado como "CODE SPLITTING"
//Veamos un ejemplo: 

//otroArchivo.js
export function saludar(){
    console.log("Hola Mundo !!")
}

//index.js

button.addEventListener('click', async function(){
    const modulo = await import("./otroArchivo.js")
    modulo.saludar(); //Hola Mundo !
})