//Otra de las nuevas caracteristicas de ES11 es la incorporacion de BigInt.
//BigInt es un nuevo objeto incorporado (numero primitivo) que nos da Javascript para representar un numero entero mucho mas grande.
//Recordemos que la propiedad Math.pow tiene capacidad de buscar el exponente de un numero.

let num = Math.pow(2, 53) - 1; //Valor maximo de un numero

console.log(++num)    //9007199254748992
console.log(++num)    //9007199254748992
console.log(++num)    //9007199254748992

//Notemos que en el caso anterior al invocar a la variable num mas el operador (++), no podiamos lograr que el numero se incrementara en 1
//Y este problema viene a solucionar BigInt.
//Veamos otro ejemplo similar.

let bigNum = 9007199254740991n;

console.log(++bigNum) //9007199254748992n
console.log(++bigNum) //9007199254748993n
console.log(++bigNum) //9007199254748994n

//Pero no solamente BigInt incrementa el valor sino que nos sirve para representar numeros con mucha cifra. 
//Veamos que ocurre cuando queremos ver el valor de BigInt

typeof 10 //Number
typeof 101524156465454545n //bigInt
