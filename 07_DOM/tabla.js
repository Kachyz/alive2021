/*function cambiarColor () {
    let cambiarColoress = document.getElementById("colores"); 
}*/

function nuevaFila () {
    let tabla = document.getElementById("tabla");
    let fila = tabla.insertRow(2);
    let c1 = fila.insertCell(0);
    let c2 = fila.insertCell(1);
    let c3 = fila.insertCell(2);
    c1.innerHTML = "holi 1";
    c2.innerHTML = "holi 2";
    c3.innerHTML = "holi 3";
}