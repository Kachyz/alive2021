let nombre1 = 'Diana';
let nombre2 = 'Alma';
let nombre3 = 'Jorge';
let nombre4 = 'Hiromi';

//Arreglos (lista)

let arregloNombres = ['Diana', 'Alma', 'Jorge', 'Hiromi', 'Alexis'];

//Muestro todo el arreglo
console.log(arregloNombres);
//Muestro la posición 1 del arreglo -> 'Alma'
console.log(arregloNombres[1]);
//Muestro la longitud del arreglo
console.log(arregloNombres.length);

let arregloDeMuchasCosas = ['hola', 1, 'jejej', 50 ,true, 'jpña', [1, 2, 3], {nombre: 'Hiromi', apellido: 'Ak'}];

//Muestro todo el arreglo
console.log(arregloDeMuchasCosas);
//Muestro la posición 2 del arreglo -> 'jejej'
console.log(arregloDeMuchasCosas[2]);
//Muestro la posición 6 del arreglo que es un arreglo, y luego muestro la posición 1 del arreglo pequeño -> 2
console.log(arregloDeMuchasCosas[6][1]);
//Muestro la posición 7 del arreglo que es un objeto, y luego muestro el valor de apellido -> 'Ak
console.log(arregloDeMuchasCosas[7].apellido);

// let edades = [15, 19, 18, 30];
// console.log(edades);
// console.log(edades.length);

// let info = ['hola', 2, 'soy Hiromi', 10, 10, 10, 10];
// console.log(info);

// //Posiciones van desde el 0
// console.log(arregloNombres[0] + ' es amiga de ' + arregloNombres[2]);

