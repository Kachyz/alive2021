// La variable operació puede ser 'suma' o 'resta', de acuerdo a esta variable suma o resta los números e impríme el resultado.

let operacion = prompt('quieres suma o resta');

let num1 = parseInt(prompt('ingresa un numero'));

let num2 = parseInt(prompt('ingresa otro numero'));

//Tu código

if (operacion == 'suma'){
console.log(num1+num2);
}else if(operacion == 'resta'){
    console.log(num1-num2);
}else{
console.log ('NO invalido')
}