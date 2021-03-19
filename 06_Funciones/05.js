// Crea una funcion que reciba 2 numeros y regresa la división del primero sobre el segundo
// Valida que la operación pueda ser procesada, de lo contrario regresa un mensaje de error

//opción 1 para resolverlo
function dividir(x, y) {
    console.log('el resultado de ' + x + ' / ' + y + ' es igual a: ' + x / y);
    //console.log( x/y );
}

dividir(15, 30);

//opción 2 para resolverlo
let numero1 = 12;
let numero2 = 2;

function dividiendo(num1, num2) {
    console.log('el resultado de ' + num1 + ' / ' + num2 + ' es igual a: ' + num1 / num2);
    //console.log(num1 / num2);
}

dividiendo(numero1, numero2);