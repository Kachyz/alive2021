// Dado la variable 'numeros' regresa la cantidad de 1 que se almacenan en la misma

const numeros = [
  [1,0,1,1,0,1,0,1,1,0,0,0,1],
  [1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0],
  [1,0,0,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,0,0,1,1,0,1]
]

let arreglo1 = numeros[0];
let arreglo2 = numeros[1];
let arreglo3 = numeros[2];
let arreglo4 = numeros[3];

let unos = 0;
for(let i = 0; i < arreglo1.length; i++) {
  if (arreglo1[i] === 1) {
    unos++
  }
}

let unos1 = 0;
for(let i = 0; i < arreglo2.length; i++) {
  if (arreglo2[i] === 1) {
    unos++
  }
}

let unos2 = 0;
for(let i = 0; i < arreglo3.length; i++) {
  if (arreglo3[i] === 1) {
    unos++
  }
}

let unos3 = 0;
for(let i = 0; i < arreglo4.length; i++) {
  if (arreglo4[i] === 1) {
    unos++
  }
}

console.log("¿Cuántos números uno hay en total? ");
console.log(unos + unos1 + unos2 + unos3);
