//Una de las actualizaciones de ECMA2016 fue la incorporacion de los Parametros por defecto (o en ingles Default Params) 
//Esto significa que podemos establecer ciertos valores que le pasamos a una funcion por defecto.Veamos un ejemplo:

function newFunction (nombre, edad, ubicacion){
    var nombre = nombre || "Rodri";
    var edad = edad || 22;
    var ubicacion = ubicacion || "Argentina"
    console.log(nombre, edad, ubicacion)
}

//ECMA2016 O ES6

function newFunction2 (nombre = "Rodrigo", edad = 22, ubicacion = "Argentina"){
    console.log(`${nombre}, ${edad} y ${ubicacion}`)
}
//Si solo invoco a la funcion, esta va a tomar los valores por defecto
newFunction2();
//O puedo redefinir estos valores, reasignandoselos mediante los parametros al invocar la function. 
newFunction2("Alan", 23, "Chile")

