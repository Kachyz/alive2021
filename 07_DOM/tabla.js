function pintarTabla() {
  let filas = document.getElementById('filas').value; //Creamos variable que contiene el valor del input filas
  let columnas = document.getElementById('columnas').value; //Creamos variablke que guarda el numero de columnas
  let tabla = document.getElementById('tabla'); //variable en donde se encuentra la tabla
  let valoresAceptados = /[0-9]/; //numeros que aceptamos que el usuario escriba

  if (filas.match(valoresAceptados) && columnas.match(valoresAceptados) ) { // revisamos que el usuario haya puesto números
    for (let i = 0; i < columnas; i++) { //creamos una variable indice y mientras sea menor al numero de columnas que puso...
      let row = tabla.insertRow(i);
      for (let a = 0; a < filas; a++) {
        let cell = row.insertCell(a);
        cell.innerText = "HOLA"
      }
  }
}else {
  alert("ERROR, INSERTE UN NÚMERO POR FAVOR!!")
}
}
