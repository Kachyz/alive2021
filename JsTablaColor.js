function activar(){
   
        let tabla= document.getElementById('casilla');
        tabla.style.backgroundColor= "pink";
         console.log("s")
         
        }
function agregar(){
    let fila= document.getElementById('casilla');
    let row = fila.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
    document.getElementById('casilla').className = ' td';



   // document.getElementsByTagName(tr).innerText='Párrafo de texto';
    //let palabra = document.getElementsByName('tr')
    //palabra.document.write('texto');
    
}

function myDeleteFunction() {
    document.getElementById("casilla").deleteRow(0);
  }





 
  

 
function aceptar(){
    let filas = document.getElementById('fname').value;
    let columnas = document.getElementById('lname').value;
    let tabla = document.getElementById('casilla');
    
    let res = parseInt(filas) * parseInt(columnas);
  //imprimir base de la tabla

  for (let i = 0; i < filas ; i++) {
     //imprimir el bucle de las filas 
     let row = tabla.insertRow(i);
     for (let j = 0; j < columnas; j++) {
//imprimir el bucle de las columnas
    let cell = row.insertCell(j);

      cell.innerText = "tabla";
         
     }
    
  }
  
}
