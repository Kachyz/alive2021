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


// FUNCIONES CON RETURN
// Las funciones tienen un return cuando yo espero que entreguen algo


// Yo espero que esta función haga un cáclulo y lo entregue
function multiplicarDosNumeros(n1, n2) {
    let resultadoMulti = n1 * n2;
    // Nos permite sacar un valor de la función y usarlo más adelante
    return resultadoMulti;
}

let resulatodo = multiplicarDosNumeros(10, 50);
console.log(resulatodo);
console.log(resulatodo - 50);

// Yo espero que esta función haga un cáclulo y lo entregue
function calcularAreaCuadrado(lado) {
    // INSTRUCCIONES O PASOS
    let areaCuadrado = lado * lado;

    // RESULTADO
    return areaCuadrado;
}

// Podemos extraer el valor entregado por la función
let resultadoArea = calcularAreaCuadrado(7);
// Mostramos el valor alamacenado en la variable
console.log(resultadoArea);


// Podemos extraer el valor entregado por la función
let resultadoArea2 = calcularAreaCuadrado(4);
// Mostramos el valor alamacenado en la variable
console.log(resultadoArea2);

// Podemos mostrar directamente el valor entregado por la función
console.log(calcularAreaCuadrado(8));

// Podemos mostrar directamente el valor entregado por la función
console.log(calcularAreaCuadrado(resultadoArea2));
