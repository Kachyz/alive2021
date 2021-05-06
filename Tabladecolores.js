

function Cambiar() {
  console.log(".");
  let tabla= document.getElementById('cc');
  tabla.style.backgroundColor= 'purple';
}

function Agregar() {
  console.log(",");
  let tabla= document.getElementById('cc')
  let row= tabla.insertRow(3);
  let cell1= row.insertCell(0);
  let cell2= row.insertCell(1);
  let cell3= row.insertCell(2);
  cell1.innerHTML = "Soy nueva";
  cell2.innerHTML = "Soy nueva";
  cell3.innerHTML = "Soy Nueva";
}
