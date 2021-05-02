//Otra de las incorporaciones en ES9 son mejoras en Regex en bloques, y como acceder a cada uno de ellos. 
//Veamos un ejemplo: 

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
//2018 04 20