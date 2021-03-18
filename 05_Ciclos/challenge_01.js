// Dado la variable 'numeros' regresa la cantidad de 1 que se almacenan en la misma

const numeros = [
  [1,0,1,1,0,1,0,1,1,0,0,0,1],
  [1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0],
  [1,0,0,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,0,0,1,1,0,1]
];

let contador = 0;
let a = 0;


//
for (let a = 0; a < numeros.length; a++) {
  for (var i = 0; i < numeros[a].length; i++) {
    if (numeros[a][i] === 1) {
      contador ++;
    }
  }

}

console.log(contador);
