/*Crear una pregunta en html con 2 inputs de texto que digan filas 
y columnas uno para cada uno, y un boton para pintar la tabla*/

function dibujarTabla() {
    //Agarramos los valores de los inputs
    let filas = document.getElementById("filas").value;
    let columnas = document.getElementById("columnas").value;

    let tabla = document.getElementById("tabla");

    //insertamos filas
    let prueba0 = filas.insertCell(0);
    let prueba1 = filas.insertCell(1);

    //insertamos columnas
    let prueba3 = columnas.insertCell(2);
    let prueba4 = columnas.insertCell(3)
}