// Dado el arreglo 'letras' revisemos si contiene la letra 'Z' y de ser así impriome en pantalla el mensaje "LETRA ENCONTRADA"
// De lo contrario, agregala al conjunto de letras e imprime tanto el arreglo resultante como el mensaje 'LETRAS AÑADIDA'

let letras = ['A', 'K', 'W', 'O', 'R'];
let siEntro =0;
console.log(letras)

    if (letras[0]=="Z"){
        siEntro=1;
    } if (letras[1]=="Z") {
        siEntro=1;

      } if (letras[2]=="Z"){ 
        siEntro=1;

        }if (letras[3]=="Z"){
            siEntro=1;

            } if (letras[4]=="Z"){
                siEntro=1;

                                }
if (siEntro==1){
    console.log("letra encontrada")
}

else{
  letras=['A', 'K', 'W', 'O', 'R','Z'];
   console.log(letras)
   console.log("letra añadida")
                    }
