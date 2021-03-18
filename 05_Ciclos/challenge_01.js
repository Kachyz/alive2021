// Dado la variable 'numeros' regresa la cantidad de 1 que se almacenan en la misma

const numeros = [
  [1,0,1,1,0,1,0,1,1,0,0,0,1],
  [1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0],
  [1,0,0,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,0,0,1,1,0,1]
]
let arreglouno = numeros[0];
let arreglodos = numeros[1];
let arreglotres = numeros[2];
let arreglocuatro = numeros[3];


let contador = 0;
for(let i = 0; i < arreglouno.length; i++){
  if(arreglouno[i] === 1){
    contador ++
    console.log(contador)
  }
  for(let i = 0; i < arreglodos.length; i++){
  if(arreglodos[i] === 1){
    contador ++
    console.log(contador)
  }
  for(let i = 0; i < arreglotres.length; i++){
  if(arreglotres[i] === 1){
    contador ++
    console.log(contador)

  }
  for(let i = 0; i < arreglocuatro.length; i++){
  if(arreglocuatro[i] === 1){
    contador ++
    console.log(contador)

  }
}  
}
}
}


