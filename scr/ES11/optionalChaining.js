//Otra de las incorporaciones de ES11 fue la introduccion de Optional Chaining
//Opcional Chaining proporciona una forma de simplificar el acceso a los valores a travez de objetos conectados cuando es posible que una referencia o funcion sea undefined o null

//Veamos un ejemplo para entenderlo mejor: 

const nameLenght = db?.user?.name?.length;

//Con esta opcion vamos a poder garantizar el acceso de la informacion, sin que se rompa el programa.  