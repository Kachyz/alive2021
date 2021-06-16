//Hacer una tabla y un boton y que  cuando se de click al boton la tabla cambie de color 
function colorC(){
let tabla= document.getElementById('colorCam');//sacamos la tabla
tabla.style.backgroundColor= "red";//le cambiamos el estilo
 console.log("a ver ps")
}

//crear otro boton para que cuando demos click agreguemos una fila nueva

function agrandar(){
    let fila= document.getElementById('colorCam');
    fila.insertRow();
    fila.style.height="30px";
   // fila.style.fontSize=="50px";
    if (tabla.style.height=="100px"){
        tabla.style.backgroundColor="purple";}
   // fila.style.border="green";
    // Añade un nodo de texto a la celda
 // let nuevoAlgo  = document.getElementById('colorCam').innerText= "KK";
  //fila.appendChild(nuevoAlgo);
    
   
}