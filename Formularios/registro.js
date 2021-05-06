function registrame() {
  let tarjeta = document.createElement("div");
  let nombre = document.createElement("p");
  let edad = document.createElement('p');
  let titulo = document.createElement('h4');
  let age = document.getElementById('age').value;
  let name = document.getElementById('name').value;

  if ((name == '')||(age == ' ')) {
    alert('ERROR. Inserte sus datos.');
  }else {
    titulo.innerText = "Tarjeta de registro";
    nombre.innerText = "Nombre: " + name;
    edad.innerText = "Edad: " + age;
    tarjeta.append(titulo, edad, nombre);
    console.log('hola mundo');

    document.getElementById('body').appendChild(tarjeta);
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
  }


}
