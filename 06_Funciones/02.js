// Crea una funcion que reciba un numero como 'edad' y te regrese un boleano de acuerdo a si 
// es mayor de edad o no

let edadUsuario = window.prompt('Escribe tu edad')
let pase = 18;

function pasarNoPasar(){
    if (edadUsuario >= pase) {
        console.log(true);
    } else if (edadUsuario < pase) {
        console.log(false);
    }
}

pasarNoPasar(18);