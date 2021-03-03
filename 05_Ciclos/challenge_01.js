// Dado la variable 'numeros' regresa la cantidad de 1 que se almacenan en la misma

const numeros = [
 [1,0,1,1,0,1,0,1,1,0,0,0,1],
 [1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0],
 [1,0,0,0,0,0,0,1,0,0,0,1],
 [1,1,1,1,1,1,1,0,0,1,1,0,1]
]

let array1 = numeros[0];
let array2 = numeros[1];
let array3 = numeros[2];
let array4 = numeros[3];

let unos = 0;
for(let i = 0; i < array1.length; i++) {
 if (array1[i] === 1) {
   unos++
 }
}

let unos1 = 0;
for(let i = 0; i < array2.length; i++) {
 if (array2[i] === 1) {
   unos1++
 }
}

let unos2 = 0;
for(let i = 0; i < array3.length; i++) {
 if (array3[i] === 1) {
   unos2++
 }
}

let unos3 = 0;
for(let i = 0; i < array4.length; i++) {
 if (array4[i] === 1) {
   unos3++
 }
}

let cantUnos = unos + unos1 + unos2 + unos3;
console.log(cantUnos);
