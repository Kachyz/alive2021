// La variable operació puede ser 'suma' o 'resta', de acuerdo a esta variable suma o resta los números e impríme el resultado.

let operacion = prompt("¿Suma o resta?");

let num1 = prompt("Dame un numero");

let num2 = prompt("Dame otro numero: ")

//Tu código
if((operacion === "suma") || (operacion === "Suma")){
  console.log(num1 + num2);
} else if ((operacion == "resta")(operacion === "Resta")) {
  console.log(num1 - num2);
} else {
  console.log("Inválido");
}
