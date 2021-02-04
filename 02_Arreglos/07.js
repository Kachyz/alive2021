//Dinero regalado


let regalos= [200,100,100,150];
let imp1=(regalos[0]*30/100);
let imp2=(regalos[1]*30/100);
let imp3=(regalos[2]*30/100);
let imp4=(regalos[3]*30/100);


let anual=[imp1,imp2,imp3,imp4];
let impuestos= (imp1+imp2+imp3+imp4);
let total= regalos-anual;

console.log(total)
console.log(anual)

