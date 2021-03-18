//hacer tres arreglos, contar los unos que hay en el primer arreglo, los doseses que hay en el segundo y los treseses del tercero.

let arreglos = [
  [1,4,6,7,1,1,1,1,1,1,3,4,5,6,4,5,8,7,6,8,9,0,5,1,2,3,4,1,5,3,7,8,9,6],
  [1,3,2,4,5,6,7,6,5,8,9,0,3,2,3,4,2,4,5,6,7,4,2,4,5,3,5,6,8,6,5,7,9],
  [1,2,3,1,2,34,4,5,6,4,5,4,6,7,9,7,5,5,77,5,4,4,3,3,4,5,3,3,4,57,9,8,7,6,5]
]

let arre1 = arreglos[0];
let arre2 = arreglos[1];
let arre3 = arreglos[2];

function NivelesDe(arreglos, tipo) {
  cuenta = 0;
  for (let i = 0; i < arreglos.length; i++) {
    cuenta ++
  }
  if (tipo === 1) {
    return "Nivel de glucosa " + (cuenta);
  } else if (tipo === 2) {
    return "Nivel de lípidos " + (cuenta * 2);
  } else if (tipo === 3) {
    return "Nivel de hemoglobina " + (cuenta * 3);
  } else {
    return "No ha ingresado un 'tipo' válido";
  }
}

//niveles de glucosa
console.log(NivelesDe(arre1, 1));
console.log(NivelesDe(arre2, 2));
console.log(NivelesDe(arre3, 3));

// let tipo = parseInt(prompt("Ingrese un número del 1 al 3, para buscarlo y decirle sus niveles"))

// console.log(NivelesDe(arre1, tipos));





// let unoses = 0;
// for(let i = 0; i < arre1.length; i++) {
//   if (arre1[i] === 1) {
//     unos++
//   }
// }
//
// let doseses = 0;
// for(let i = 0; i < arre2.length; i++) {
//   if (arre2[i] === 1) {
//     dos++
//   }
// }
//
// let treseses = 0;
// for(let i = 0; i < arre3.length; i++) {
//   if (arre3[i] === 1) {
//     tres+
//   }
// }
//
// console.log("La cantidad de glucosa que hay es: ");
// console.log(unoses);
//
// console.log("La cantidad de lípidos que hay es: ");
// console.log(doseses);
//
// console.log("La cantidad de hemoglobina que hay es: ");
// console.log(treseses);
