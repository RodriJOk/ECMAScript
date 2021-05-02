//Anterior a ES6, para colocar un texto o un string de varias lineas, debiamos hacer lo siguiente:

var string = "Lorem ipsum dolor sit amet,\n" + 
"consectetur adipiscing elit. Pellentesque vel pharetra\n" +
"nisi. Maecenas sit amet lacus nec velit efficitur"

//Con la actualizacion de ES6 es posible una solucion mas sencilla
//gracias a que podemos utilizar los template literal o template strings. 
//Sin necsidad de utilizar el /n y la concatenacion (+)

const stringES6 = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Pellentesque vel pharetra
nisi. Maecenas sit amet lacus nec velit efficitur`

