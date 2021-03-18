//hacer 3 arreglos y llenarlos de 10 numeros cada uno, contar los 1 del primer arrgelo
//contar los 2 del segundo arreglo y los 3 del tercero
let ac1Glucosa=[1,3,4,1,2,3,2,1,5,1];
let ac2Lipidos=[2,1,4,2,6,0,7,2,4,1];
let ac3Hemoglobina=[2,3,3,5,3,3,8,9,1,3];

//console.log(ac1.length)
//ejercicio con 1 solo for y una funcion que aplica para el que sea
function niveles (array, nivel ){// array el nombre del arreglo y nivel el que busco. ej ac1Glucosa, 1
   
    let contadorNivel=0;// iniciar el contador el 0

    for (let o=0; o<=array.length; o++){ // o vale cero, o va a hacer las cosas dependiendo del largo del array (ac1Glucosa o el que sea), o++ 
        if (array[o]===nivel)//si array es igual igual a nivel q estamos pidiendo el contador va a aumentar de 1 e 1
    contadorNivel++;
    }
     if(nivel===1){ //si nivel es igual a 1  va a retornarnos el valor de 1 
         return contadorNivel;
     } else if (nivel===2){//si nivel es igual a 2 va a retornar el valor de 2 y noslo va a amultiplicar por 2 la cant de 2 que hay en el array
        return contadorNivel*2;
     }else if( nivel===3){// si nivel es igual a 3 va a retornar el valor de 3 y nos va a dar mult dela cant de 3 por 3
         return contadorNivel*3;
     } else {// si los parametros establecidos no coinciden sale la opcion de no vale
         return "No vale la opcion"
     }
}


console.log("Tu nivel de glucosa es :" + niveles(ac1Glucosa, 1));
console.log("Tu nivel de lipidos es :" + niveles(ac2Lipidos,2));
console.log("Tu nivel de hemoglobina es :" + niveles(ac3Hemoglobina,3));

// let nVariable= parseInt(prompt("Tu valor")); PARA HACERLO CON PROMPT
//ejemplo return
function suma(n1,n2) {
        return n1+n2;

}
console.log(suma(34,6))


//ejercicio con los 3 for

let nums=0;//vale 0 para que vaya aumentando  GLUCOSA
for (let i=0; i<ac1Glucosa.length;i++){//va a recorrer el array hasta que se acabe el length
    if (ac1Glucosa[i]===1)
    nums++;//si i es igual a 1 
}

 console.log("Su nivel de glucosa es :", (nums*ac1Glucosa[0]));

 let nums2=0; //LIPIDOS 
for (let j=0; j<ac2Lipidos.length;j++){
    if (ac2Lipidos[j]===2)
    nums2++;
}
//console.log(nums2) 
console.log("Su nivel de lípidos es :",(nums2*ac2Lipidos[0]));//con la posicion
console.log("Su nivel de lípidos es :",(nums2*2));//con numero



 let nums3=0;//HEMOGLOBINAS
for (let i=0; i<ac3Hemoglobina.length;i++){
    if (ac3Hemoglobina[i]===3)
    nums3++;
}
 console.log("Su nivel de hemoglobinas es :",(nums3*ac3Hemoglobina[1]));

 //console.log(nums+nums2+nums3);
 