// Dada una variable color, revisa si es ROJO o AZUL e imprime el color resultante de su combinacion con AMARILLO


let color = prompt('escribe un color');

//Pregunta
if (color === 'ROJO') {
    console.log('Combinado con amarillo es NARANJA');
    color = 'AZUL';
} else if (color === 'AZUL') {
    console.log('Combinado con amarillo es VERDE');
} else {
    console.log('Opción inválida');
}




//doble igual (comparaciones NO estrictas)

// console.log(5 > 1);
// console.log(3 < 1);
// console.log('hola' == 1);
// console.log(10 == 10);
// //No diferencia entre números y strings
// console.log(10 == '10');

// //comparaciones estrictas
// console.log(10 === '10');
// console.log(10 === 10)
// console.log('10' === '10')
