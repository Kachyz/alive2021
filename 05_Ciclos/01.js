// Utiliza un ciclo para encontrar la suma de todos los numeros en el rango de 0 a 200

let sumaLoca=0;
for(let contador =0; contador<=200; contador++){
    
 sumaLoca+=contador;// ciclo de suma se le agrega 1 y se suma 0+1 y luego se repite el ciclo hasta que llegamos allimite y se queda una suma de 0+1+2+3+4...+200
//contador.concat(sumaLoca.contador)
    //console.log(contador);
}
console.log(sumaLoca);

//for (punto de partida; punto tope; incremento) repite ciclos  mas de una vez
// accion q se repetira/ los ++ son que va en incremento de uno en uno
// for(let i=2; i<5; i++) puede llamarse i, contador, o itinerador
//si queremos que vaya agregandose de mas de dos se hace contador+=2 o 4 o 3
//EJEMPLO CHIDO
/*/for(let contador=1;contador<10; contador+=3){
 console.log(contador);
 console.log("hola"+ contador);
}
//para multiplicar console.log(i*3);
// ARREGLO BIDIMENSIONAL para hacer un arreglo con ciclo for >>>
 let nombres =["yoe", "tuti","mina",'sil', 'mirna', 'jos'];
for ( let i=0; i<=4; i++){
    console.log(nombres[i]); 
    //i es posicion 0 pero como es un ciclo se va aumentando hasta llegar a nuestro tope
}

let resultado
/*/

// Inicio de tu código


// Fin de tu código

module.exports = resultado;