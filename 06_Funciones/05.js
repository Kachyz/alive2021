// Crea una funcion que reciba 2 numeros y regresa la división del primero sobre el segundo
// Valida que la operación pueda ser procesada, de lo contrario regresa un mensaje de error

function DividirDosNumeros(num1, num2) {
    let resultadoDiv = num1 / num2;
  if(num1 === 0  || num2 === 0 ||){
    return  'Error, resultado invalido';
}else{
    return resultadoDiv;
}
}

let resulatodo = DividirDosNumeros(800, 2);
console.log(resulatodo);