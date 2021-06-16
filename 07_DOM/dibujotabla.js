//Crear una pregunta en html con 2 inputs de texto que digan filas y columnas uno para cada uno, y un boton para pintar la tabla
function aparicion(){
let filas =document.getElementById('columnaS').value;//sacar el valor del id de columnas
let columnas = document.getElementById('filaS').value;//sacar el valor del id del inpt defilas
let tabla = document.getElementById('miTabla'); //abir tabla

for(let i = 0; i<columnas; i++){
let row = tabla.insertRow(i);//insertar row
 for (let o = 0; o<filas; o++){
     let cell = row.insertCell(o); //insertar cell
     cell.innerHTML=" celda";
 }
   }



}
    
function colorT(){
  let tabla= document.getElementById('miTabla');//sacamos la tabla
  tabla.style.backgroundColor= "purple";//le cambiamos el estilo
  tabla.style.color="white";
   console.log("a ver ps")
  }
      
    
    
  