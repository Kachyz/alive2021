let contador = 0;

function conteo(arreglo, numeroASumar) {
  let suma = 0;
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) { //crear variable del numero del indice, mientras el indice sea menor a la cantidad de datos que hay en el arreglo se va a ejecutar el for
    if (arreglo[i] === parseInt(numeroASumar)) { // revisa si la posicion que indicamos hay un 1
      contador ++; //si si hay un 1 lo cuenta en esta variable
    }
  }
  suma += contador * parseInt(numeroASumar);
  return suma;
}

let glucosa = [1, 2, 3, 2, 3, 1, 2, 3, 1, 1];
let lipidos = [1, 2, 1, 2, 1, 3, 1, 3, 2, 2];
let hemoglobina = [2, 3, 1, 2, 3, 2, 1, 2, 3, 1];


console.log("Los niveles de glucosa son de: " + conteo(glucosa, prompt("Ingrese el número a sumar: ")) ); // 4
console.log("Los niveles de lípidos son de: " + conteo(lipidos, prompt("Ingrese el número a sumar: ")) ); // 8
console.log("Los niveles de hemoglobina son de: " + conteo(hemoglobina, prompt("Ingrese el número a sumar: ")) ); // 9
