function cambiarColor() {
  let table = document.getElementById('myTable') ;
  table.style.backgroundColor = "pink"  ;
}

function anadirFila() {
  let myTable = document.getElementById('myTable');
  let row = myTable.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerText = ' HOLA  '
  cell2.innerHTML = ' HOLA '
  cell3.innerHTML = ' HOLA '
}

console.log("HI BRO");
