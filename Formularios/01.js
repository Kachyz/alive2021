function seleccionarRadio() {
    document.getElementById('other').checked = true;
}
console.log("Hola");

function cambiarNombre() {
  let nombres = ["Alma","Diana","Julieta", "Regina"];
  let apellidos = ["Macedo","Serratos","Gomez","Mariscal"]
  let primerNombre = document.getElementById('primerNombre');
  let apellido = document.getElementById('apellido');
  primerNombre.value = nombres[Math.floor(Math.random() * nombres.length)];
  apellido.value = apellidos[Math.floor(Math.random() * apellidos.length)];
  console.log("hola");
}

function cambiarInstrucciones() {
  let textoUsuario = document.getElementById('textoUsuario');
  let textoPwd = document.getElementById('textoPwd');
  let usuario = document.getElementById('username');
  let pwd = document.getElementById('pwd');
  usuario.placeholder = "Usuario";
  pwd.placeholder = "Contraseña"
  textoUsuario.innerHTML = " ";
  textoPwd.innerHTML = " ";
}

function cambiarColor() {
  let colores = ["#AB3820","#A36A14","#5A14A3","black"];
  let firstName = document.getElementById('firstName');
  let lastName = document.getElementById('lastName');
  firstName.style.color = colores[Math.floor(Math.random() * colores.length)];
  lastName.style.color = colores[Math.floor(Math.random() * colores.length)];
}

function agenteSecreto() {
  let nombre = document.getElementById('primerNombre').value;
  let apellido = document.getElementById('apellido').value;
  let numCasillas = document.getElementById('casillas').value;
  let cajita = document.getElementById('casillasNuevas');
  if (((nombre == 'Regina')&&(apellido == 'Gomez')||(numCasillas <= 10))) {
    alert('Bienvenida Agente Gomez!!');
    for (let i = 0; i < numCasillas; i++) {
      let checkbox = document.createElement('input');
      checkbox.setAttribute('type','checkbox');
      cajita.append(checkbox);
    }
  }else{
    alert('Alerta INTRUSO!! Llamando al FBI');
  }
}
