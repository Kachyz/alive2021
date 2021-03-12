// Crea una funcion que reciba un numero como 'edad' y te regrese un boleano de acuerdo a si
// es mayor de edad o no

function compEdad(edad){
  if (edad >= 18) {
    console.log(true);
    // console.log("Eres mayor de edad.");
  }else {
    edad = false;
    console.log(false);
    // console.log("Eres menor de edad.");
  }
}
compEdad(71);
