//hacer 3 arreglos y llenarlos de 10 numeros cada uno, contar los 1 del primer arrgelo
//contar los 2 del segundo arreglo y los 3 del tercero
let ac1Glucosa=[1,3,4,1,2,3,2,1,5,1];
let ac2Lipidos=[2,1,4,2,6,0,7,2,4,1];
let ac3Hemoglobina=[2,3,3,5,3,3,8,9,1,3];

//console.log(ac1.length)
contadorNivel=0;
sumas=0;
function niveles (array, nivel ){
   
    let contadorNivel=0;

    for (let o=0; o<=array.length; o++){
        if (array[o]===nivel)
    contadorNivel++;
    }
    sumas+=contadorNivel*nivel;
    return sumas;
    console.log(contadorNivel);
    

}

console.log("Tu nivel de glucosa es" + niveles(ac1Glucosa));
console.log("Tu nivel de lipidos es" + niveles(ac2Lipidos));
console.log("Tu nivel de hemoglobina es" + niveles(ac3Hemoglobina));


//ejemplo return
function suma(n1,n2) {
        return n1+n2;

}
console.log(suma(34,6))




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
console.log("Su nivel de lípidos es :",(nums2*ac2Lipidos[0]));


 let nums3=0;//HEMOGLOBINAS
for (let i=0; i<ac3Hemoglobina.length;i++){
    if (ac3Hemoglobina[i]===3)
    nums3++;
}
 console.log("Su nivel de hemoglobinas es :",(nums3*ac3Hemoglobina[1]));

 //console.log(nums+nums2+nums3);
 