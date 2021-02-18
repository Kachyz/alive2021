console.log("Los tenis");

let suma = prompt("¿Cuántas hijas tiene usted?");
if (suma >= 1) {
  let ver = prompt("¿Sus hijas tienen entre 10 y 15 años (escriba 1 si es positivo, o 2 si es negativo)?");
  if (ver == 1) {
    let total = prompt("¿Cuántos tenis blancos les ha comprado, en total?");
    if (total >= 2) {
      console.log("En Zapopan los tenis blancos de las niñas de entre 10 y 15  suman un total de 1,578 pares.");
      let zap = 1578;
      console.log("Más los que usted tiene, suman un total de: ");
      console.log(zap + total);
    }
  }
}
