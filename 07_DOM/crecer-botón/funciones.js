let ancho = 500;
let alto = 300;
let tamanioLetra = 100;

function crecer() {
    let boton = document.getElementById('boton-inicial');
    boton.style.backgroundColor = "red";
    // boton.style.width = "500px";
    boton.style.width = ancho + 'px';
    boton.style.height = alto + 'px';
    boton.style.fontSize = tamanioLetra + 'px';
    ancho += 100;
    alto += 50;
    tamanioLetra += 30;
}
