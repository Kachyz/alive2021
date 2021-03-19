//hacer 3 arreglos y llenarlos de 10 numeros cada uno, contar los 1 del primer arrgelo
//contar los 2 del segundo arreglo y los 3 del tercero

let arreglo1 = [1,2,1,3,4,5,6,1,2,9];   //contar los 1
let arreglo2 = [2,2,3,4,10,8,2,5,7,2]; //contar los 2
let arreglo3 = [3,4,1,2,3,4,6,7,3,9]; //contar los 3

function calcularNiveles(arreglo, tipo){
    //pasos
    contador = 0;
    for (let i=0; i<arreglo.length; i++){
        if (arreglo[i] === tipo){
            contador++
        }
    }

    if (tipo === 1){
        return 'nivel glucosa: ' + contador;
    } else if (tipo === 2){
        return 'nivel lípidos: ' + contador * 2;
    } else if (tipo === 3){
        return 'nivel hemoglobina: ' + contador * 3;
    } else {
        return 'esto no es válido amix';
    }
}

console.log(calcularNiveles(arreglo1 , 1));
console.log(calcularNiveles(arreglo2 , 2));
console.log(calcularNiveles(arreglo3 , 3));

