console.log("Vamos a poner color a una tabla cada vez que le piquemos a un botón");
function cambiarColor(){
  let cambio = document.getElementById("tabla");
  cambio.style.backgroundColor = "pink";
  cambio.style.border = "1px black solid";
  cambio.style.color = "navy";
}

function agregarFila(){
  let tabla = document.getElementById("tabla");
  let row = tabla.insertRow(2);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  // cell1.innerHTML = "Nombre";
  // cell2.innerHTML = "Apellido";
  cell1.innerText = "Nombre";
  cell2.innerText = "Apellido";


  // nuevaFila.appendChild("Hola");
  // fila.insertRow();
}
