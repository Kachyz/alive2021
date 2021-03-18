// Crea una funcion que reciba 2 numeros y regresa la división del primero sobre el segundo
// Valida que la operación pueda ser procesada, de lo contrario regresa un mensaje de error

let num1 = window.prompt("¿Qué número quieres que sea el dividendo?");
let num2 = window.prompt("¿Qué número quieres que sea el divisor?");


function división(num1, num2, operación) {

  if (num1 >= num2) {
    console.log("El resultado de la división es " + (num1 / num2));
  }
  else {
    console.log("No puedo realizar esa división");
  }
}

división(num1, num2, 'división')
