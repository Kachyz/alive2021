//crear arreglo con ingresoso que me dieron
//crear otro arreglo con los mismos ingresos sumados pero cada uno menos el 30%
let navidad= 300;
let cumpleaños = 100;
let graduación = 1000;

let ingresos = [navidad , cumpleaños , graduación];

let impues =ingresos[0]*.3;
let impueto = ingresos[1]*.3;
let impuesto2 =ingresos[2]*.3;
 
let final =[impues, impueto,impuesto2];
let total = impues + impueto +impuesto2;
 let ingresoFinal = navidad + cumpleaños + graduación - total;
console.log(ingresos);
console.log(final);
console.log(total);
console.log(ingresoFinal);