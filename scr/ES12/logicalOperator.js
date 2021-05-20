//Una de las mejoras en ES12 fue la incorporacion de operadores logicos.
//Lo cierto es que ya disfrutabamos de mejoras en este aspecto. 
//Vemaos un ejemplo: 

let a = 10;
let b = 4;
let c = 2;

//Si queremos incrementar el valor de c mas el valor de a, podemos hacer lo siguiente: 

c = c + a

//O tambien 

c += a
console.log(c) //12

//Veamos otro ejemplo
//Imaginemos ahora que queremos hacer una validacion de z.

let x = false;
let y = true;
let z = false;

//Ahora queremos validad si "z" es falso. Podemos hacer lo siguiente

z = z || (z = y)
console.log(z)

// En ES12, tenemos una forma mas sencilla de hacer esto mismo. 

z ||= y //Or
z &&= y //And
z ??= y //Null

