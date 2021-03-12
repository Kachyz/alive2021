// Crea una funcion que reciba 2 numeros y regresa la multiplicacion de los mismos

let num1 = window.prompt("¿Qué número es el primer término de tu multiplicación?");
let num2 = window.prompt("¿Qué número es el segundo término de tu multiplicación?");


function calculo(num1, num2, operación) {
  // operación === operación.ToLowerCase();

  if (operación === 'multiplicacion') {
    console.log("El resultado de la multiplicación es " + (num1 * num2));
  }
  else {
    console.log("Error");
  }
}

calculo(num1, num2, 'multiplicacion')
