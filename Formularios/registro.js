function registrame() {
  let tarjeta = document.createElement("div");
  let nombre = document.createElement("p");
  let edad = document.createElement('p');
  let titulo = document.createElement('h4');
  let age = document.getElementById('age').value;
  let name = document.getElementById('name').value;
  titulo.innerText = "Tarjeta de registro"
  nombre.innerText = "Nombre: " + name;
  edad.innerText = "Edad: " + age;
  tarjeta.append(titulo, edad, nombre);

  document.getElementById('body').appendChild(tarjeta);
  document.getElementById('age').value = " ";
  document.getElementById('name').value = " ";
}
