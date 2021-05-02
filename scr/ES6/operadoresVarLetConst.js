// Operadores de asignacion (Var, Let, Const)

//Sin ES6 -> Solo podiamos disponer del operador de asignacion var. Y declarabamos variables de la siguiente manera

var persona = "Rodri"

// Lo cual traia cierto tipos de incombeninetes relacionaos al scope o ambito, que estas variables estaban disponibles de forma global.

//Por lo que en ES6 se incoro a ley y const
//Let solo esta disponible segun el ambito donde se lo declare

{
    var globalVar = "Var Global"
}
{
    let globalLet = "Let Global"
}

console.log(globalVar) //"Var Global"
console.log(globalLet) //globalLet is not defined.

//En el caso anterior globalLet deberia de ser llamado en su entorno

{
    let scopeLet = "Let en Scope"
    console.log(scopeLet) //"Let en Scope"
}

//En ES6 se establecio la variable const 
//Esta variable lo que nos va a permitir definir nuestras variable y que esta no puede ser redefinida; y tambien respeta el scope al igual que let
//Veamos un ejemplo: 

const a = "b"
a = "a"
console.log(a) //TypeError: Assignment to constant variable.

