// Dado la variable 'numeros' regresa la cantidad de 1 que se almacenan en la misma

const numeros = [
[1,0,1,1,0,1,0,1,1,0,0,0,1],
[1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0],
[1,0,0,0,0,0,0,1,0,0,0,1],
[1,1,1,1,1,1,1,0,0,1,1,0,1]
                ]

 let contador= 0;

  for(let i= 0; i< numeros.length; i++){

    for(let j= 0; j< numeros[i].length; j++){
      if(numeros[i][j]=== 1){
      contador++
    }
  }
}

console.log(contador)


