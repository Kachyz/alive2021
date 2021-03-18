//hacer 3 arreglos y llenarlos de 10 numeros cada uno, contar los 1 del primer arrgelo
//contar los 2 del segundo arreglo y los 3 del tercero

let Arreglo1 = [1, 2, 1, 3, 4, 5, 6, 1, 2, 9];   //contar los 1
let Arreglo2 = [2, 2, 3, 4, 10, 8, 2, 5, 7, 2]; //contar los 2
let Arreglo3 = [3, 4, 1, 2, 3, 4, 6, 7, 3, 9]; //contar los 3

let contador = 0;
let contador2 = 0;
let contador3 = 0;

// Ciclo 1
for (let i = 0; i < Arreglo1.length; i++) {
    if (Arreglo1[i] === 1) {
        contador++
    }
}

// Ciclo 2
for (let a = 0; a < Arreglo2.length; a++) {
    if (Arreglo2[a] === 2) {
        contador2++
    }
}

// Ciclo 3
for (let e = 0; e < Arreglo3.length; e++) {
    if (Arreglo3[e] === 3) {
        contador3++
    }
}

function arreglos() {


}
console.log("nivel de glucosa", contador);
console.log("nivel de lípidos", contador2 * 2);
console.log("nivel de hemoglobina", contador3 * 3);



function calcularNiveles(arreglo, tipo) {
    // PASOS
    contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === tipo) {
            contador++
        }
    }

    // Condiciones para retornar el contador de forma correcta de acuerdo al tipo
    if(tipo === 1) {
        return 'nivel glucosa: ' + contador;
    } else if (tipo === 2) {
        return 'nivel lípidos: ' + (contador * 2);
    } else if (tipo === 3) {
        return 'nivel hemoglobina: ' + (contador * 3);
    } else {
        return 'tipo inválido';
    }
}


// // // Glucosa
// console.log(calcularNiveles([1, 2, 1, 3, 4, 5, 6, 1, 2, 9, 1, 10, 10, 19, 1, 2, 3, 7, 3, 3], 1));

// // // Lípidos
// console.log(calcularNiveles([1, 2, 1, 3, 4, 5, 6, 1, 2, 9, 10, 10 ,2, 2, 2, 2, 3], 2));


// // // Hemoglobina
// console.log(calcularNiveles([1, 2, 1, 3, 4, 5, 6, 1, 2, 9,3,3,3,3,3,3,3,3], 3));

// console.log(calcularNiveles([1, 1, 1 ,1 ,11], 1));



let arrayTest = [1,5,7,4,2,5,7,8,4,3];

console.log(calcularNiveles(Arreglo1, 1));
console.log(calcularNiveles(Arreglo2, 2));
console.log(calcularNiveles(Arreglo3, 3));

// let nombreVariable = parseInt(prompt('Ingrese un valor'));

// console.log(calcularNiveles(Arreglo1, nombreVariable));