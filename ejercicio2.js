let misingresos = [10, 200, 50];
let porcentajes = (misingresos[0]*.3);
let porcentajes2 = (misingresos[1]*.3);
let porcentajes3 = (misingresos[2]*.3);
let total = (misingresos[0]-porcentajes);
let total2 = (misingresos[1]-porcentajes2);
let total3 = (misingresos[2]-porcentajes3);

let arreglo = [total, total2, total3];

let todo = misingresos[0] + misingresos[1] + misingresos[2];
let con = arreglo[0] + arreglo[1] + arreglo[2];

console.log("Lo que gané = " + misingresos);
console.log("Con descuentos = " + arreglo);
console.log("La suma de mis ingresos = " + todo);
console.log("La suma con descuentos = " + con);
