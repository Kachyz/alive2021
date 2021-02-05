// Guarda en la variable suma la suma de los tres números del arreglo numeros
let numeros = [12, 4, 8];

let suma = numeros[0]+numeros[1]+numeros[2];
console.log(suma)
 
let suma2 =0;
numeros.forEach(elemento => suma2 +=elemento);
console.log (suma2);

module.exports = suma;