// Crea una funcion que reciba 2 numeros y regresa la división del primero sobre el segundo
// Valida que la operación pueda ser procesada, de lo contrario regresa un mensaje de error
// si el segundo numero es 0
// si el primero y el segundo es 0 

function division(numero1, numero2) {
  let resultado = numero1 / numero2;
  if (numero1/numero2 == NaN) {
    return "error";
  }
  return resultado;
}

console.log("El total de su división es de: " + division(numero1 = parseInt(prompt("Ingrese el número a dividir:")), numero2 = parseInt(prompt("Ingrese entre qué número lo va a dividir:")) ));
