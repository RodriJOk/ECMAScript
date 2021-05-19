//Otra de las incorporaciones en ES11 fue el metodo matchAll
//Este metodo devuelve un iterador con todos los resultados que coinciden con una expresion regular en un string
//Vemaos un ejemplo para entenderlo mejor: 

const texto = "abcdefg"
const expRegular = /[a-c]/g;
const iterador = texto.matchAll(expRegular);

for (const match of iterador){
    console.log(match)
}

//["a", index: 0, input: "abcdefg", groups: undefined]
//["b", index: 1, input: "abcdefg", groups: undefined]
//["c", index: 2, input: "abcdefg", groups: undefined]