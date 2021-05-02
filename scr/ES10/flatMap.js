//Otra de las inscorporaciones de ES10 fue la incorporacion de flatMap()
//Este metodo me permite mapear cada elemento, pasarle una funcion y aplanarla segun el resultado. 
//Veamos un ejemplo. 

let array = [1, 2, 3, 4]
console.log(array.flatMap(value => [ value, value * 2 ]));

//[
//    1, 2, 2, 4,
//    3, 6, 4, 8
//  ]
  