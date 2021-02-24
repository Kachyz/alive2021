// Utiliza un ciclo para encontrar la suma de todos los numeros en el rango de 0 a 200


//let  resultado = 0;
//let number = '';
//for(let r = resultado+1; r >= 200;   ){
    //number = r + '+'+ resultado[r]
//}
//console.log();
let resultado = 0;
let resultadon = 0;
while (resultado+1 <= 200) {
  resultado++;
  resultadon += resultado;
}
console.log(resultadon);