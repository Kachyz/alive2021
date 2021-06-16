function subir() {
  let contenedor = document.getElementById("content");
  let divi = document.createElement("div");
  let h1 = document.createElement("h1");
  let usu = document.createElement("h2");
  let text = document.createElement("p");

  //

  //lo que contiene a la tarjeta
  contenedor.append(divi);
  //lo que la tarjeta tiene adentro
  divi.append(h1, usu, text);

  divi.classList.add("cartita");
  text.classList.add("centrado");
  usu.classList.add("title");
  console.log("o sea wat ");

  h1.innerText = "Info User";
  usu.innerText = document.getElementById("nombre").value;
  text.innerText = document.getElementById("correo").value;

  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";

  if (usu.value == "") {
    alert("No hay datos");
    subir()
    }
}
