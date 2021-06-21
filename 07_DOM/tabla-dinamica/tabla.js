function cambiarColor () {
    let table = document.getElementById("table");
    table.style.backgroundColor = "pink";
    table.style.border = "1px black solid";
    table.style.color = "white";

    let c1 = document.getElementById("casilla1");
    c1.style.backgroundColor = "green";
    c1.style.color = "blue";

    let c3 = document.getElementById("casilla3");
    c3.style.backgroundImage = "url('https://www.zooplus.es/magazine/wp-content/uploads/2018/04/fotolia_169457098.jpg')";
    c3.style.backgroundPosition = "center center";
    c3.style.backgroundSize = "cover";
}


function cambiarCelda() {
    let c4 = document.getElementById("casilla4");
    c4.style.backgroundColor = "purple";
}

function anadirFila () {
    let tabla = document.getElementById("table");
    let fila = tabla.insertRow(0);
    let c1 = fila.insertCell(0);
    let c2 = fila.insertCell(1);
    let c3 = fila.insertCell(2);

    c1.innerText = "nueva 1";
    c2.innerText = "nueva 2";
    c3.innerText = "nueva 3";
}


function anadirFila() {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    table.append(tr);
    tr.append(td1,td2,td3);

    td1.innerText = "hola"
    td2.innerText = "hola"
    td3.innerText = "hola"
}

function anadirTarjeta () {
    // Obtengo el elemento papá
    let contenedor = document.getElementById("contenedor");

    //Crear elementos html que usaré
    let divTarjeta = document.createElement("div");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    //Poner elementos dentro de otros
    contenedor.append(divTarjeta);
    divTarjeta.append(h2, p1, p2);

    //Insertar texto en cada elemento
    h2.innerText = "nombre prueba"
    p1.innerText = "párrfo";
    p2.innerText = "otro párrafo"

}