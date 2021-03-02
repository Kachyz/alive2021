// Crea una funcion que reciba un numero como 'edad' y te regrese un boleano de acuerdo a si
// es mayor de edad o no

let edad = 18;
let dada = window.prompt("¿Cuántos años tienes?");
if (dada >= edad) {
  console.log("Eres mayor de edad.");
} else if (dada < edad) {
  console.log("Eres menor de edad.");
}
