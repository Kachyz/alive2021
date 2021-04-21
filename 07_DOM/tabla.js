console.log("Tú escoges el número de filas, y el número de columnas");

function mostrarTabla(){
  let tabla = document.getElementById("tabla");
  let nfilas = document.getElementById("nfilas");
  let ncols = document.getElementById("ncols");
  for(let i=0; i <= nfilas; i++){
    let row = tabla.insertRow(i);
    tabla.innerText = "Fila agregada";
  }
  console.log("Sea agregará una nueva fila");
}
