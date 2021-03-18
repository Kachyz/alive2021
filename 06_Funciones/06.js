//hacer 3 arreglos y llenarlos de 10 numeros cada uno, contar los 1 del primer arrgelo
//contar los 2 del segundo arreglo y los 3 del tercero

let Arreglo1 = [1,2,1,3,4,5,6,1,2,9];   //contar los 1
let Arreglo2 = [2,2,3,4,10,8,2,5,7,2]; //contar los 2
let Arreglo3 = [3,4,1,2,3,4,6,7,3,9]; //contar los 3

//let contador= 0;
//let contador2= 0;
//et contador3 = 0;

  //for(let i= 0; i< Arreglo1.length; i++){
 //if(Arreglo1[i]=== 1){
      //contador++
    //}
 // }
  //for(let a= 0; a< Arreglo2.length; a++){
    //if(Arreglo2[a]=== 2){
         //contador2++
       //}
    // }
     //for(let e= 0; e< Arreglo3.length; e++){
       // if(Arreglo3[e]=== 3){
            // contador3++
           //}
         //}
         //console.log("nivel de glucosa",contador);
         //console.log("nivel de lípidos",contador2 * 2); 
         //console.log("nivel de hemoglobina",contador3 * 3 );
         
         
         
         function  Niveles(arreglo,tipo ){
             contador = 0;
             for(let i= 0; i< arreglo.length; i++){
              if(arreglo[i]=== tipo){
                   contador++
                 }
               }
               if (tipo === 1 && contador >= 3) {
                 return 'nivel de glucosa estable ' +contador;
                }else if(tipo === 1 && contador <= 3){
                  return 'nivel de glucosa alto ' +contador;
               }else if (tipo === 2 && contador <= 6){
                 return 'nivel de lípidos estable' +contador * 2;
               }else if(tipo === 2 && contador >= 6){
                  return 'nivel de lípidos alto ' +contador * 2;
               }else if (tipo === 3 && contador <= 8){
                return 'nivel de hemoglobina estable ' +contador * 3;
              }else if(tipo === 3 && contador >= 8){
                return 'nivel de hemoglobina alto ' +contador * 3;
               }else {
                 return 'invalid';
               }
         }
         console.log(Niveles(Arreglo1, 1))
         console.log(Niveles(Arreglo2, 2))
         console.log(Niveles(Arreglo3, 3))

