//Función reverse-string
//Hacer una funcion que invierta un string e 
// input 'hola' 3 
// output 'aloh' 5 

// crear un string 
let frase = 'Alive es un lugar a donde voy todos los martes y jueves'; 
let palabraInvertida = frase[4] + frase[3] + frase[2] + frase[1] + frase[0]; 

// console.log(palabraInvertida) 

// Usando un ciclo 2 
// frase.length 
// que tan largo es el arreglo 
let fraseInvertida = ''; for( let indice = frase.length-1 ; indice >= 0 ; indice = indice-1) { 
    fraseInvertida += frase[indice] 
}

console.log(fraseInvertida) 
// Como declarar un FOR 
// for( 
    // declaración de variables; 
    // condicional; 
    // incrementos 5 
//)