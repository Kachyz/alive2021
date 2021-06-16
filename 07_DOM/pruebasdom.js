function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < 2; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "3");
  }



  function aceptar(){
    let filas = document.getElementById('filaS').value;
    let columnas = document.getElementById('columnaS').value;
    
    let res = parseInt(filas) * parseInt(columnas);
  //imprimir base de la tabla
  document.write("<table border>")
  for (let i = 0; i < filas ; i++) {
     //imprimir el bucle de las filas 
     document.write("<tr>");
     for (let j = 0; j < columnas; j++) {
//imprimir el bucle de las columnas
        document.write("<td>");

        document.write(res);
         res --;
         document.write("</td>");
         
     }
     document.write("</tr>");
  }
  document.write("</table>")