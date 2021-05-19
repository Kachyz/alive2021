function enviarme() {
  let ElUsuario = document.getElementById('username').value;
  let LaContraseña = document.getElementById('pwd').value;

  let ssection = document.getElementById('seccion');
  let targeta = document.createElement('div');
  let resultado = document.createElement('h2');

  ssection.append(targeta);
  targeta.append(resultado);


  resultado.innerText = ElUsuario;
  // resultado.innerText = LaContraseña;
}
