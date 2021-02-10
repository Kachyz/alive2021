// Dado el arreglo 'letras' revisemos si contiene la letra 'Z' y de ser así impriome en pantalla el mensaje "LETRA ENCONTRADA"
// De lo contrario, agregala al conjunto de letras e imprime tanto el arreglo resultante como el mensaje 'LETRAS AÑADIDA'

let letras = ['A', 'K', 'W', 'O', 'R'];

// zeta = letras.index('Z');
//
// if (zeta == true) {
//   console.log("LETRA ENCONTRADA");
// }
//
// if (zeta == false) {
//   letras.append('z');
//   console.log(letras);
//   console.log("LETRA AÑADIDA");
// }

if ( (letras[0] == 'Z') || (letras[1] == 'Z') || (letras[2] == 'Z') || (letras[3] == 'Z') || (letras[4] == 'Z') ) {
  console.log("LETRA ENCONTRADA");
}else {
  letras = ['A','K','W','O','R','Z'];
  // letras[6] = 'F';
  console.log(letras);
  console.log("LETRA AÑADIDA");

}
