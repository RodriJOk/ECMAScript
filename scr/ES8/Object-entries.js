//Una de las incorpoaciones de ES8 son los Objects entries. 
//Este metodo devuelve una matriz con el par (key:value) propias de un objecto. 
//Veamos un ejemplo: 

let equipo = {
    frontend: "Rodri",
    backend: "Jonathan",
    devops: "Cristian",
    tester: "Roman"
}

let resultado = Object.entries(equipo)
console.log(resultado)

//👇

/*
[
  [ 'frontend', 'Rodri' ],
  [ 'backend', 'Jonathan' ],
  [ 'devops', 'Cristian' ],
  [ 'tester', 'Roman' ]
]
*/ 

//Imaginemos ahora que queremos saber la longitud de nuestro matriz. 
//Podemos hacer lo siguiente: 

console.log(resultado.length)//4