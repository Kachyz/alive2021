// Crea una funcion que reciba un numero N y una palabra
// La funcion debe imprimir la palabra N cantidad de veces de acuerdo a lo que se especificó

let word = "Sword";
let n = 10;
let i = 1;
function palabra(x, y){
  while (i <= n) {
    console.log(i + ". " + word);
    i++
  }
}
palabra(word, n);
