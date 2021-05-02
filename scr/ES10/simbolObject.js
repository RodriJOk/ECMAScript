//Otra caracteristica que se ha agregado en ES10 es la incorporacion de Simbol Object
//Este metodo me va a permitir acceder a una descripcion. 
//Veamos un ejemplo: 


let mySymbol = 'Mi Simbolo';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
//Mi Simbolo