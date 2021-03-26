
let ancho = 50;
let alto = 20;

function agrandar() {
  let button = document.getElementById('boton'); // =   <button onclick="agrandar()" id="boton" class="boton" >boton</button>
  button.style.width = ancho + 'px';
  button.style.height = alto + 'px';
  alto += 20;
  ancho += 50;
}
