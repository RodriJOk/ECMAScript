//Spread Operator o opoerador de propagacion

//Tenemos varios arrays con equipos, pero imaginemos que lo queremos unir en uno solo
 var equipoUno = ["Oscar", "Antonio", "Fernando", "Julian"];
 var equipoDos = ["Camila", "Filipa", "Andrea"];

 //Si queremos utilizar los datos del array, podemos hacer lo siguiente
 
 var elEquipoJunto = ["Pepe", ...equipoUno, ...equipoDos]
console.log(elEquipoJunto)