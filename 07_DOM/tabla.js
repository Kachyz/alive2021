console.log("Tú escoges el número de filas, y el número de columnas");

function mostrarTabla(){
  let tabla = document.getElementById("tabla");
  let nfilas = document.getElementById("nfilas").value;
  let ncols = document.getElementById("ncols").value;
  tabla.style.border = "1px black solid";
  for(let i=0; i < nfilas; i++){
    let row = tabla.insertRow(i);
    console.log("Sea agregará una nueva fila");
    for(let i=0; i < ncols; i++){
      let col = row.insertCell(i);
      col.innerText = "agregada";
    }
  }
  console.log(nfilas);
}

function cambiarColor(){
  let colorTabla = document.getElementById("tabla");
  colorTabla.style.backgroundColor = "pink";
  colorTabla.style.color = "navy";
}
