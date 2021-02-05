// Guarda en la variable suma la suma de los tres números del arreglo numeros
//solucion 1
let numeros = [12, 4, 8,20,5,17];

let suma= numeros[0]+numeros[1]+numeros[2];
console.log(suma)


//solucion 2 funciona para no estar repitiendo el procedimiento anterior "FOR"
numeros.forEach(elemento => suma +=elemento);
console.log(suma)
// Inicio de tu código
// Fin de tu código


S= sum(numeros);
console.log(S);

module.exports = suma;