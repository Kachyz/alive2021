// Hacer una función que invierta un string
// input 'hola'
// output 'aloh'

// crear un string
let frase = 'Alive es un lugar a donde voy todos los martes y jueves'; // String
let palabraInvertida = frase[4] + frase[3] + frase[2] + frase[1] + frase[0];

// console.log(palabraInvertida)

// Usando un ciclo
// frase.length // que tan largo es el arreglo

let fraseInvertida = '';
for( let indice = frase.length-1 ; indice >= 0 ; indice = indice-1) {
  fraseInvertida += frase[indice]
}

console.log(fraseInvertida)

// Como declarar un FOR
// for(
  // declaración de variables ;
  // condicional ;
  // incrementos
// )

