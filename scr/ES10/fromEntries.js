//Otra caracteristica innovadora de ES10 es fromEntries()
//Este metodo tranforma en (key:value) un objeto a partir de un array
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//{ name: 'oscar', age: 32 }