// Crea una funcion que reciba un numero como 'edad' y te regrese un boleano de acuerdo a si 
// es mayor de edad o no

function edad(comprobarEd){
   let edad1=parseInt( prompt( "ingresa tu edad"));
if (edad1>=18){
console.log(true);
} else { 
    console.log(false);
}
}

edad()

//mejor manera
 function mayor(edad1){
     if (edad1 <18){
         console.log(false);
     }else{
         console.log(true);
     }
     }
 mayor(18);