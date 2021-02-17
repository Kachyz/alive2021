// La variable operació puede ser 'suma' o 'resta', de acuerdo a esta variable suma o resta los números e impríme el resultado.

//Tu código
let operacion = prompt("¿Quieres sumar (ingresa el número 1) o restar (ingresa el número 2)?")

let num1 = 10;
let num2 = 15;
let sumar = 1;
let restar = 2;

if (operacion == 1) {
  console.log("Has ingresado el número 1, para sumar, y el resultado es:");
  console.log("10 + 15 = 25");
  console.log("ó");
  console.log("15 + 10 = 25");
} else if (operacion == 2) {
  console.log("Has ingresado el número 2, para restar, y el resultado es:");
  console.log("10 - 15 = -5");
  console.log("ó");
  console.log("15 - 10 = 5");
}
