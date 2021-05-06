

function Cambiar() {
  console.log(".");
  let tabla= document.getElementById('cc');
  tabla.style.backgroundColor= 'purple';
}

function Agregar() {
  console.log(",");
  let filas= document.getElementById('filas').value;
  let columnas= document.getElementById('columnas').value;
  console.log(filas);
  console.log(columnas);
  let tabla= document.getElementById('cc');
  for (let i = 0; i < filas; i++) {
    let row= tabla.insertRow();
    let cell1= row.insertCell(0);
    let cell2= row.insertCell(1);
    let cell3= row.insertCell(2);
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
  }
  for (let i = 0; i < columnas; i++) {
    let row= tabla.insertRow();
    let cell1= row.insertCell(0);
    let cell2= row.insertCell(1);
    let cell3= row.insertCell(2);
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
  }
}
