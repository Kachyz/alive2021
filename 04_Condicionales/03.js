//Determina de acuerdo a la edad de una persona si puede pasar a una fiesta, 
//Imprimir un mensaje: menores de edad "No puedes pasar", mayores "Bienvenido"


//Tu código
let pase = 18;
let edadUsuario = window.prompt('Escribe tu edad')

if (edadUsuario >= pase) {
    console.log('Bienvenido :)')
} else if (edadUsuario < pase) {
    console.log('No puedes pasar :(')
}