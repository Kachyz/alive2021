

function reverso(palabra) {
  let resultado = "";
  for(let numero = palabra.length-1; numero > -1; numero--) {
    resultado += palabra[numero];
  }
  return resultado;
}


console.log(reverso("nota"));
