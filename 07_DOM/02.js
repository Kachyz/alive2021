
let ancho = 50;
let alto = 50;

function aumentar(){ 
let boton = document.getElementById('aumentar')  ;
console.log(boton.style.width);
boton.style.width = ancho + 'px' ; 
boton.style.height = alto + 'px' ; 
ancho += 50;
alto += 50;
}