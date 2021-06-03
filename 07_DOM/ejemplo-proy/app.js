let miStorage = window.localStorage;


function login () {
    //mostrams el storage
    console.log(miStorage);
    let nombre = document.getElementById("name").value;
    document.getElementById("nombre").innerText = nombre;
    console.log(nombre);
    // Creamos una variable en el storage
    miStorage.setItem('usuario', nombre);
    console.log(miStorage);
}

function cargarNombre () {
    document.getElementById("nombreEnPro").innerText = miStorage.usuario;
}

function cerrarSesion () {
    miStorage.clear();
}