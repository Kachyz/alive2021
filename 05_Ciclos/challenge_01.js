// Dado la variable 'numeros' regresa la cantidad de 1 que se almacenan en la misma

const numeros = [
  [1,0,1,1,0,1,0,1,1,0,0,0,1],
  [1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0],
  [1,0,0,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,0,0,1,1,0,1]
]; 
 


let unos=0; //la i contara los lugares y el .length es el limite, o sea a que se acabe nuestro array

for(let i=0; i<numeros.length; i++){ // va a recorrer un array en un ciclo hasta que llegue a su limite
    
   for(let j =0; j< numeros[i].length; j++ ){// al poner numeros[i] segun en la posicion en la qu esta y haremos las vueltas segun toque
    if (numeros[i][j] === 1){//i es la posicion general y j es la posicion que ocupa dentro del arreglo dentro del arreglo
      unos++
    }
  }
}

console.log(unos);

/*/para un arreglo simple>>

const numeross=[1,2,1,2,1,2,1,2,1,2];
let contadore = 0;
for(let a=0; a<numeros.length; a++)
    if (numeros[a]===1){
    contadore++;
  }
   
console.log(contadore);
para sacar un elemento dentro de un array dentro de otro>>/*/
//console.log(numeros[0][2])/*/
