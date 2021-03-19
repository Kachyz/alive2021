// Crea una funcion que valide si un número recibido es un número primo o no

// Se realizará la validación de los siguientes valores
// 7, 33, 821, 1009

function primos(numero){
  for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
          return false;
      }    
  }

  if (numero === 1) {
      console.log(numero + " no es un número primo :c");
    } else {
      console.log(numero + " sí es un número primo c:");
    }
}

primos(7)