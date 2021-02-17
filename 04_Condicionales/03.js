//Determina de acuerdo a la edad de una persona si puede pasar a una fiesta,
//Imprimir un mensaje: menores de edad "No puedes pasar", mayores "Bienvenido"

//Tu código
let edad = 18;
let dada = window.prompt("¿Cuántos años tienes?");
console.log("La edad para entrar a la fiesta son 18 años.");
if (dada >= edad) {
  console.log("Puedes pasar a la fiesta.");
} else if (dada < edad) {
  console.log("Lo siento, pero no pudes entrar a la fiesta.");
}
