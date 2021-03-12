// Crea una funcion que reciba un numero N y una palabra
// La funcion debe imprimir la palabra N cantidad de veces de acuerdo a lo que se especificó

let palabra = window.prompt("¿Qué palabra quieres que se repita? Ingresa UNA palabra");
let n = window.prompt("¿Cuántas veces quieres que se repita? Ingresa un NÚMERO");
let i = 1;

function pal(p, n) {
  while (i <= n) {
    console.log(i + ".- " + palabra);
    i++;
  }
}
pal(palabra, n);
