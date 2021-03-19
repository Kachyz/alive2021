// Crea una funcion que reciba 2 numeros y regresa la división del primero sobre el segundo
// Valida que la operación pueda ser procesada, de lo contrario regresa un mensaje de error

function division(n1,n2){
  resultado = (n1 / n2);
  return resultado;

  if (n1 < 0) && (n2 < 0){
    console.log("Operación inválida");
  } else {

  }
}

//ver con Hiromi eso de las operaciones invalidas
console.log(division((parseInt(prompt("Dame un numero"))),(parseInt(prompt("Dame otro numero")))));
