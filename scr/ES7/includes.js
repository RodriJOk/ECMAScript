//Unas de las incorporaciones de ES7 fue la llegada de includes(..)
//En una primera instancia se queria llamar a este metodo como contains(...). 
//Pero este nombre entraba en conflicto con un framework viejo de JS en uso en algunos sitios
//Este metodo tiene como funcionalidad buscar en un array si hay algun tipo de dato que necesitemos saber si se encuentra
//Veamos el siguiente ejemplo: 

let numbers = [1,2,3,7,8]

if(numbers.includes(7)){
    console.log("Si se encuentra el valor de 7")
}else{
    console.log("No se encuentra")
}

//Si se encuentra el valor de 7