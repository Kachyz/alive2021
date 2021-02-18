// La variable operació puede ser 'suma' o 'resta', de acuerdo a esta variable suma o resta los números e impríme el resultado.

let dada = prompt('Quieres restar o sumar?')
let num1 = parseInt(prompt('inserta numero 1'))
let num2 = parseInt(prompt('inserta numero 2'))


if (dada == 'sumar'){
    console.log(num1 + num2);
} else if (dada == 'restar'){
    console.log(num1 - num2);
} else{
    console.log('opcion invalida')
}
//Tu código