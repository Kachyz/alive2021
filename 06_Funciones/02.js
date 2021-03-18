// Crea una funcion que reciba un numero como 'edad' y te regrese un boleano de acuerdo a si 
// es mayor de edad o no

function edad(numero){
if(numero < 18){
    //menores
console.log(false);
}else{
    //mayores
console.log(true);
}
}
edad(20);