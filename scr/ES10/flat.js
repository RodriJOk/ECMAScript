//Una de las incorporaciones que se presentaron en ES10 fue la de flat
//Array.prototype.flat(nivel_de_profundidad)
//Este nuevo metodo nos permite aplanar arreglos. 
//Veamos un ejemplo: 

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat())
//[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]

let arrayDos = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(arrayDos.flat(2))
//[
//    1, 2, 3, 1, 2,
//    3, 1, 2, 3
//  ]