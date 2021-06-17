let miStorage = window.localStorage;

function inicioSesion() {
  //mostrams el storage
  console.log(miStorage);
  let mail = document.getElementById("e-mail").value;
  document.getElementById("e-mail").innerText = mail;

  console.log(mail);
  // Creamos una variable en el storage
  miStorage.setItem("usuario", "Julieta");
  //console.log(miStorage);
  if (mail == "julietagopa2@gmail.com") {
    document.getElementById("signin").innerText = miStorage.usuario;
  } else {
    alert(
      "There's no account created with that mail. Please try again or create a NEW ACCOUNT"
    );
  }
  cargarNombre();
  mostrarInicio();
}

function cargarNombre() {
  let URLactual = window.location;
  if (miStorage.usuario) {
    document.getElementById("signin").innerText = miStorage.usuario;
  } else {
    document.getElementById("signin").innerText = "Sign in";
  }

  if (
    URLactual.pathname ==
    "/C:/Users/lenovo/Desktop/ALIVE2021/alive2021/PROYECTO%20LE%20MONDE/SIGN%20UP.html"
  ) {
    mostrarInicio();
  }
}

function cerrarSesion() {
  //como hacer q en un alert aparezca el s[i quiero salir
  miStorage.clear();
}

function loadMore() {
  alert(
    "We are maintaining this page. There is nothing else to show for the moment \n \n Sorry for the inconveniences"
  );
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function mostrar1() {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function ocultar1() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function cerrarSesion1() {
  miStorage.removeItem("usuario");
  cargarNombre();
}

function mostrarInicio() {
  console.log(miStorage);
  if (miStorage.usuario) {
    document.getElementById("salir").style.display = "flex";
    document.getElementById("salir").style.justifyContent = "center";
    document.getElementById("cajatitulo").style.display = "none";
    document.getElementById("texto").innerText = "au revoir!";
  } else {
    document.getElementById("salir").style.display = "none";
    document.getElementById("cajatitulo").style.display = "flex";
    document.getElementById("texto").innerText = "Hi! Nice to see you again";
    document.getElementById("signin").innerText = "Sign in";
  }
}
//lo del carrito
