function anadirTarjeta () {
    // Obtengo el elemento papá
    let contenedor = document.getElementById("contenedor");

    //Crear elementos html que usaré
    let divTarjeta = document.createElement("div");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    //Poner elementos dentro de otros

    //contenedor contiene a la tarjeta
    contenedor.append(divTarjeta);
    //la tarjeta contiene al h2, p1 y p2
    divTarjeta.append(h2, p1, p2);

    //Insertar texto en cada elemento
    h2.innerText = "nombre prueba";
    p1.innerText = "párrafo";
    p2.innerText = "otro párrafo";
}