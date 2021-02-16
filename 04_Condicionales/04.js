// La variable operación puede ser 'suma' o 'resta', de acuerdo a esta variable suma o resta los números e impríme el resultado.

let operacion = prompt('¿Quieres sumar o restar? Pon todo en minúsculas')
let num1 = parseInt(prompt('Número 1: '))
let num2 = parseInt(prompt('Número 2: '))

//Tu código
if (operacion === 'sumar') {
    console.log('El ' , num1 , 'más el ' , num2 , '=' , num1 + num2)
} else if (operacion === 'restar'){
    console.log('El ' , num1 , 'menos el ' , num2 , '=' , num1-num2)
} if (operacion === 'restar'){
    console.log('El ' , num2 , 'menos el ' , num1 , '=' , num2-num1)
} 