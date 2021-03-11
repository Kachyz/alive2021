// FUNCIONES

// Una función se encarga de resolver un problema
// Dentro de la función hay pasos o instrcciones para solucionar el problema


// Crear función
// palabra reservada function nombreDeLaFuncion paréntesis y llaves
function nombreDeLaFuncion () {
    // Instrucciones o pasos
}


// Crear función
function mostrarMensaje() {
    console.log('hola, soy un mensaje dentro de una función');
}

// Ejecutar la función
// mostrarMensaje();

// Crear función
function mostrarNumeros () {
    for(let i = 1; i <= 10; i ++) {
        console.log(i);
    }
}

// Mandar llamar la función
// mostrarNumeros();



//Parámetros

// crear función con un parámetro
function duplicar(numero) {
    console.log(numero *2);
}

// Mandar llamar la función que necesita un parámetro
// duplicar(1);


// Crear función con dos parámetros

function sumar(num1, num2) {
    console.log(num1 + num2);
}

// Mandar llamar la función que necesita dos parámetros

// sumar(10, 4);
// sumar(1, 9);
// sumar(100, 90);

let numero1 = 100;
let numero2 = 1;

// sumar(numero1, numero2);

// let n1 = parseInt(prompt("Ingresa un número"));
// console.log(n1);
// let n2 = parseInt(prompt("Ingresa otro número"));
// console.log(n2);

// sumar(n1, n2);

function calcular(num1, num2, operacion) {
    operacion = operacion.toLowerCase();

    if(operacion === 'suma') {
        console.log('La suma es ' + (num1 + num2));
    } else if (operacion === 'resta') {
        console.log('La resta es ' + (num1 - num2));
    } else {
        console.log('Opción inválida');
    }
}

calcular(10, 20, 'suMa');