//Regalo

let donar = [400,200,200,350];
let impuest1 =(donar[0]*30/100);
let impuest2 =(donar[1]*30/100);
let impuest3 =(donar[2]*30/100);
let impuest4 =(donar[3]*30/100);


let anual = [impuest1,impuest2,impuest3,impuest4];
let impuestos= (impuest1+impuest2+impuest3+impuest4);
let total = donar-anual;

console.log(total);

console.log(anual);
