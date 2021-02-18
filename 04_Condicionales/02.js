
// Dado el arreglo 'letras' revisemos si contiene la letra 'Z' y de ser así imprime en pantalla el mensaje "LETRA ENCONTRADA"
// De lo contrario, agregala al conjunto de letras e imprime tanto el arreglo resultante como el mensaje 'LETRAS AÑADIDA'

let letras = ['A', 'K', 'Z', 'O', 'R'];
console.log(letras);
let sientro = 0;

if (letras [0] == 'Z'){
    sientro= 1;
}
if (letras [1] == 'Z'){
    sientro= 1;
}
if (letras [2] == 'Z'){
    sientro= 1;
}
if (letras [3] == 'Z'){
    sientro= 1;
}
if (letras [4] == 'Z'){
    sientro= 1;
}

if (sientro == 1){
    console.log('letra encontrada')
}

else{
    letras = ['A', 'K', 'W', 'O', 'R', 'Z'];
    console.log(letras)
    console.log('letra añadida')
}


