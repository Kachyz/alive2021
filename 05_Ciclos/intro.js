//CICLOS - BUCLES - LOOPS

//Repetir acciones más de una vez

// for(punto partida; punto tope; incremento){
// acción que se repetirá
// }

let numero = 5;
// console.log(numero);
// numero+=2
// console.log(numero)
// numero+=2
// console.log(numero)

//contador es = a 3, MIENTRAS contador sea menor a 5 entonces sumarle 1
 for(let contador = 3; contador <= 5; contador++) {
     console.log('hola ' + contador);
 }

// for(let i = 0; i <= 10; i++) {
//     console.log(i + ' x ' + '10' + ' = ' + (i*10));
// }


let nombres = ['Diana', 'July', 'Cristi', 'Alma', 'Regina', 'Sofy', 'Anita', 'Belen', 'Hiromi', 'Kachyz', 'Diego', 'Carlos', 'Lucia'];

// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);
// console.log(nombres[4]);

for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
