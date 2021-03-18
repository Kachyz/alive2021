
let arreglo1 = [9, 6, 3, 2, 2, 5, 7, 10, 1, 2];
let arreglo2 = [3, 6, 2, 2, 3, 4, 8, 10, 9, 5];
let arreglo3 = [2, 3, 9, 8, 7, 3, 2, 3, 1, 7, 6];
let unos= 0;
let dos= 0;
let tres= 0; 

//glucosa, lipidos, hemoglobina

for(let i=0; i<=arreglo1.length; i++){
    if(arreglo1[i]===1){
        unos++
        unos= i+i;
    }
}

console.log("Cantidad de Glucosa:",unos);

for(let i=0; i<=arreglo2.length; i++){
    if(arreglo2[i]===2){
        dos++
    }
}

console.log("Cantidad de Lipidos:",dos);

for(let i=0; i<=arreglo3.length; i++){
    if(arreglo3[i]===3){
        tres++
    }
}

console.log("Cantidad de Hemoglobina:",tres);
